// Real React hook, fake native IAP boundary only. Never uses a store or transaction.
const test=require('node:test');const assert=require('node:assert/strict');
const fs=require('node:fs');const path=require('node:path');const vm=require('node:vm');
const React=require('react');const Renderer=require('react-test-renderer');const ts=require('typescript');
globalThis.IS_REACT_ACT_ENVIRONMENT=true;
async function exercise(development,flag,isolated){
 const calls=[],entitlements=[];let nativeOptions,value,tree;
 const ids={monthly:'com.kamilunavo.navokids.monthly',yearly:'com.kamilunavo.navokids.yearly',lifetime:'com.kamilunavo.navokids.lifetime'};
 const record=name=>async(...args)=>{calls.push({name,args});return [];};
 const sdk={connected:true,products:[{id:ids.lifetime}],subscriptions:[],availablePurchases:[],activeSubscriptions:[],fetchProducts:record('catalog'),requestPurchase:record('purchase'),finishTransaction:record('finish'),restorePurchases:record('restore'),getAvailablePurchases:record('available'),getActiveSubscriptions:record('active')};
 const onEntitlement=(...args)=>entitlements.push(args);
 const compiled=ts.transpileModule(fs.readFileSync(path.join(__dirname,'../src/services/usePremiumStore.ts'),'utf8'),{compilerOptions:{target:ts.ScriptTarget.ES2022,module:ts.ModuleKind.CommonJS}}).outputText;
 const mod={exports:{}};
 const boundary=id=>{
  if(id==='react')return React;
  if(id==='expo-iap')return {useIAP:options=>{calls.push({name:'native-hook'});nativeOptions=options;return sdk;}};
  if(id==='../config/products')return {productIds:ids,allProductIds:Object.values(ids),subscriptionProductIds:[ids.monthly,ids.yearly]};
  throw Error('Unexpected dependency '+id);
 };
 vm.runInNewContext(compiled,{require:boundary,module:mod,exports:mod.exports,__DEV__:development,process:{env:{EXPO_PUBLIC_NAVOKIDS_PROVIDER_DISABLED_QA:flag}},console});
 function Probe(){value=mod.exports.usePremiumStore(onEntitlement);return null;}
 try{
  await React.act(async()=>{tree=Renderer.create(React.createElement(Probe));});
  if(isolated){
   assert.equal(calls.length,0,'QA must not invoke the native IAP hook or its initialization/catalog/ownership calls');
   await React.act(async()=>{await value.buy('lifetime');await value.restore();await value.refreshProducts();});
   assert.deepEqual(calls,[]);assert.deepEqual(entitlements,[],'QA must neither grant nor clear a persisted entitlement');
   assert.equal(value.entitled,false);assert.equal(value.connected,false);assert.equal(value.storeChecked,false);
  }else{
   await React.act(async()=>{await value.buy('lifetime');await value.restore();await value.refreshProducts();});
   for(const name of ['native-hook','catalog','available','active','purchase','restore'])assert.ok(calls.some(c=>c.name===name),'normal path retained: '+name);
   assert.equal(calls.find(c=>c.name==='purchase').args[0].request.apple.sku,'com.kamilunavo.navokids.lifetime');
   const synthetic={id:'owned-synthetic-never-store-transaction',productId:ids.lifetime};
   await React.act(async()=>nativeOptions.onPurchaseSuccess(synthetic));
   await React.act(async()=>nativeOptions.onPurchaseSuccess(synthetic));
   assert.equal(calls.filter(c=>c.name==='finish').length,1,'existing duplicate handling remains intact against fake events');
   assert.ok(entitlements.some(c=>c[0]===true),'existing verified-success callback retained using fake event only');
  }
 }finally{if(tree)await React.act(async()=>tree.unmount());}
}
test('explicit debug QA never starts IAP and never changes entitlement',()=>exercise(true,'1',true));
test('ordinary Debug preserves the existing native purchase paths using fakes only',()=>exercise(true,'0',false));
test('Release ignores QA flag and preserves existing native paths using fakes only',()=>exercise(false,'1',false));
