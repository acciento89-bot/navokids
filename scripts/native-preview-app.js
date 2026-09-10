// CI-only entry copied over App.tsx in the temporary native screenshot job.
// Never imported by the shipping app.
import React, { useState } from 'react';
import { SafeAreaView, View, Pressable, Text, ScrollView, Platform, StatusBar } from 'react-native';
import { WorldScreen } from './src/screens/WorldScreen';
import { GameScreen } from './src/screens/GameScreen';
import { ClockFace } from './src/components/ClockFace';
import { categories } from './src/data/learningContent';
import { createEmptyProgress } from './src/data/progress';
const cases = [
 ['world','de'], ['world','en'], ['shapes','de','discoverer',1], ['time','de','adventurer',7],
 ['time','en','adventurer',7], ['time','en','adventurer',23], ['nature','en','adventurer',30], ['faces','en'],
];
export default function NativePreview(){
 const [index,setIndex]=useState(0),c=cases[index];
 const profile={id:'qa',nickname:'Alex',avatar:'🦊',createdAt:'',ageGroup:'discoverer',progress:createEmptyProgress()};
 const category=categories.find(x=>x.id===c[0]);
 return <SafeAreaView style={{flex:1,backgroundColor:'#FFF8E8',paddingTop:Platform.OS==='android'?(StatusBar.currentHeight??24):0}}>
 <View style={{flex:1}} key={index}>
 {c[0]==='world'?<WorldScreen language={c[1]} profile={profile} premiumUnlocked={false} onLanguageChange={()=>{}} onCategoryPress={()=>{}} onParentsPress={()=>{}} onProfilePress={()=>{}}/>:c[0]==='faces'?<ScrollView contentContainerStyle={{alignItems:'center',gap:24,padding:20}}>{[{hour:12,minute:0},{hour:1,minute:30},{hour:12,minute:45},{hour:8,minute:55}].map(t=><View key={t.hour+':'+t.minute}><ClockFace time={t} language="en"/><Text style={{textAlign:'center'}}>{t.hour}:{String(t.minute).padStart(2,'0')}</Text></View>)}</ScrollView>:<GameScreen category={category} stage={c[3]} ageGroup={c[2]} language={c[1]} onBack={()=>{}} onCompleted={()=>{}} onNextStage={()=>{}}/>}
 </View>
 <Pressable accessibilityLabel="QA NEXT" onPress={()=>setIndex((index+1)%cases.length)} style={{minHeight:48,backgroundColor:'#173D40',alignItems:'center',justifyContent:'center'}}><Text style={{color:'#fff'}}>QA NEXT {index+1}/8</Text></Pressable>
 </SafeAreaView>;
}
