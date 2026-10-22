"""Build once with the existing managed key; freeze version8 and never submit to either store."""
from pathlib import Path
import datetime,hashlib,json,os,re,subprocess,time,urllib.request,xml.etree.ElementTree as ET
ROOT=Path.cwd();OUT=Path('managed-release');OUT.mkdir();os.umask(0o077)
assert os.environ['GITHUB_REPOSITORY']=='acciento89-bot/navokids'and os.environ['GITHUB_REF']=='refs/heads/main'
SHA=os.environ['GITHUB_SHA'];assert subprocess.check_output(['git','rev-parse','HEAD']).decode().strip()==SHA
config=json.loads(Path('app.json').read_text())['expo'];assert config['version']=='0.5.0'and config['android']['versionCode']==8
# An ephemeral build profile pins the locally audited code, retaining remote credentials.
original=Path('eas.json').read_bytes();eas=json.loads(original);eas['cli']['appVersionSource']='local';eas['build']['portfolioAndroid']={'extends':'production','autoIncrement':False,'credentialsSource':'remote','android':{'buildType':'app-bundle'}};Path('eas.json').write_text(json.dumps(eas,indent=2)+'\n')
def cli(args):
 p=subprocess.run(['eas',*args],stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=180)
 if p.returncode:raise RuntimeError('Managed build command failed; credentials remain remote; no store submission')
 return json.loads(p.stdout)
try:
 builds=cli(['build:list','--platform','android','--limit','20','--json','--non-interactive'])
 existing=[b for b in builds if b.get('appVersion')=='0.5.0'and b.get('gitCommitHash')==SHA and b.get('status')not in ['ERRORED','CANCELED']]
 assert len(existing)<=1,'Duplicate same-commit managed candidates'
 if existing:build=existing[0]
 else:
  created=cli(['build','--platform','android','--profile','portfolioAndroid','--non-interactive','--freeze-credentials','--no-wait','--json']);assert isinstance(created,list)and len(created)==1;build=created[0]
 identifier=build['id'];assert re.fullmatch(r'[a-f0-9-]{36}',identifier)
 for attempt in range(75):
  build=cli(['build:view',identifier,'--json']);assert build.get('platform')=='ANDROID'and build.get('gitCommitHash')==SHA and build.get('appVersion')=='0.5.0'and str(build.get('appBuildVersion'))=='8','Managed candidate identity changed'
  print(json.dumps({'id':identifier,'status':build['status'],'version':'0.5.0(8)'}),flush=True)
  if build['status']=='FINISHED':break
  if build['status']in ['ERRORED','CANCELED']:raise RuntimeError('Managed candidate '+build['status'])
  time.sleep(30)
 else:raise RuntimeError('Managed build not finished within bounded wait')
 url=build['artifacts']['applicationArchiveUrl'];assert url.startswith('https://')
 with urllib.request.urlopen(url,timeout=120)as response,(OUT/'app-release.aab').open('wb')as output:
  total=0
  while chunk:=response.read(1024*1024):
   total+=len(chunk);assert total<512*1024*1024,'Unexpected artifact size';output.write(chunk)
 provenance={'repository':os.environ['GITHUB_REPOSITORY'],'sourceCommit':SHA,'workflowRun':os.environ['GITHUB_RUN_ID'],'easBuildID':identifier,'easStatus':build['status'],'version':'0.5.0','versionCode':8,'package':'com.kamilunavo.navokids','managedCredentials':True,'credentialsFrozen':True,'storeSubmission':False,'easConfigOverrideOnly':{'appVersionSource':'local','profile':'portfolioAndroid','autoIncrement':False},'aabSHA256':hashlib.sha256((OUT/'app-release.aab').read_bytes()).hexdigest()}
 (OUT/'provenance.json').write_text(json.dumps(provenance,indent=2)+'\n')
finally:Path('eas.json').write_bytes(original)
