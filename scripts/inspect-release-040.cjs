const {execFileSync}=require('node:child_process');
const fs=require('node:fs');
const ids=['096fd7c2-f056-40bb-afce-635b0240a77f','abcb2561-b662-41a4-9801-a5f3d22b50e8'];
const result=[];
for(const id of ids){
 const b=JSON.parse(execFileSync('eas',['build:view',id,'--json'],{encoding:'utf8',timeout:120000}));
 if(b.appVersion!=='0.4.0'||b.gitCommitHash!=='9c8a4572c1e35fe7c64377546dad12bb8a29a811')throw Error('Unexpected release identity');
 const info={id,status:b.status,platform:b.platform,version:b.appVersion,build:b.appBuildVersion,gitCommitHash:b.gitCommitHash,estimatedWaitTimeLeftSeconds:b.estimatedWaitTimeLeftSeconds,metrics:b.metrics,artifacts:b.artifacts};
 result.push(info); console.log('RELEASE_STATUS '+JSON.stringify(info));
}
fs.writeFileSync('release-status.json',JSON.stringify(result,null,2));
