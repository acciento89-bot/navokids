"""Shipping Release UI on one owned emulator; read only its newly created synthetic SQLite records."""
import datetime,hashlib,importlib.util,io,json,os,pathlib,re,sqlite3,subprocess,tarfile
APP='com.kamilunavo.navokids';HOST='com.kamilunavo.navokidsqa'
METHODS=['createOriginalProfile','createPlanAndPersistWrongAttempt','coldResumeFinishAndProfileIsolation']
FRAMES=['01-world-before','02-parent-gate','03-saved-plan','04-wrong-attempt','05-cold-resumed-question','06-completed-round','07-parent-history','08-other-profile-empty','09-original-history-retained']
NATIVE_FILES={n+e for n in FRAMES for e in ['.png','.xml']};OPTIONAL_FILES={'failure-screen.png','failure-screen.xml'}
GENERIC_FILES={'result.json','source-commit.txt','build.log','host-build.log','root-mode.txt','installed-identity.txt','database-inventory.txt','preflight-anr.txt','final-anr.txt','window.txt','logcat.txt','final-screen.png','emulator-stop.txt','avd-delete.txt','remaining-avds.txt','remaining-devices.txt','cleanup.json','cleanup-failed.txt'}|{f'phase{i}-{n}'for i in range(1,4)for n in ['values.json','RKStorage','RKStorage-wal','RKStorage-shm','instrumentation.txt']}
QUESTIONS=['d2nu1','d2nu2','d2nu3','d2cu1','d2cu2','d2cu3']
def validate_sequence(before,active,final):
 original=before['navokids-state-v2'];first=original['profiles'][0];assert first['nickname']=='QA Owl' and first['ageGroup']=='discoverer' and len(original['profiles'])==1
 for state in [original,active['navokids-state-v2'],final['navokids-state-v2']]:
  assert state['premiumUnlocked'] is False
  one=next(p for p in state['profiles']if p['id']==first['id']);assert one==first,'Practice modified original profile or island progress'
  assert all(v['stars']==0 and v['completedStages']==[] and v['completedQuestions']==0 for p in state['profiles']for v in p['progress'].values())
 key='navokids-practice-v1:'+first['id'];a=active[key];z=final[key]
 for archive in [a,z]:
  assert archive['schemaVersion']==1 and archive['profileId']==first['id'] and len(archive['plans'])==1 and len(archive['sessions'])==1
  plan=archive['plans'][0];assert plan['title']=='QA two islands' and plan['selections']==[{'categoryId':'numbers','stage':1},{'categoryId':'colors','stage':1}]
  session=archive['sessions'][0];assert session['profileId']==first['id'] and [q['questionId']for q in session['questions']]==QUESTIONS
 s=a['sessions'][0];assert s['completedAt'] is None and len(s['answers'])==1 and s['answers'][0]['completedAt'] is None and s['answers'][0]['wrongAttempts']==1
 s=z['sessions'][0];assert s['completedAt'] is not None and len(s['answers'])==6 and all(x['completedAt']is not None for x in s['answers'])
 assert [x['questionId']for x in s['answers']]==QUESTIONS and [x['wrongAttempts']for x in s['answers']]==[1,0,0,0,0,0]
 profiles=final['navokids-state-v2']['profiles'];assert len(profiles)==2
 other=next(p for p in profiles if p['id']!=first['id']);assert other['nickname']=='QA Fox' and other['ageGroup']=='adventurer'
 other_key='navokids-practice-v1:'+other['id'];assert other_key not in final or final[other_key]['sessions']==[]

def reject_anr(data):
 if re.search(rb'ANR in|Application Not Responding|com.android.systemui|com.google.android.apps.nexuslauncher',data,re.I):raise RuntimeError('Observed system/launcher ANR; no dismissal')
def reject_anr_window(data):
 assert re.search(rb'Window\{[^}]+\}',data),'Actual window inventory required'
 assert not re.search(rb'ANR in|Application Not Responding|isn.t responding',data,re.I),'Observed ANR window'
def run():
 runtime=pathlib.Path(os.environ['RUNNER_TEMP']).resolve();proof=runtime/'navokids-native-acceptance/navokids';assert not proof.is_symlink() and not proof.parent.is_symlink();proof.mkdir(parents=True,exist_ok=True,mode=0o700)
 result={'status':'STARTED','package':APP,'version':'0.5.0(8)','realTransactions':False,'fixtureRecordsInjected':False,'scope':'Own QA Owl/Fox profiles, plans and all answers created only through shipping Release UI'};validated=False
 def call(args,timeout=20):
  p=subprocess.run(['adb','-s','emulator-5554',*args],stdout=subprocess.PIPE,stderr=subprocess.PIPE,timeout=timeout)
  if p.returncode:raise RuntimeError('Owned adb command failed: '+args[0])
  return p.stdout
 def owned():
  assert call(['shell','getprop','ro.build.version.sdk']).strip()==b'35' and call(['shell','getprop','ro.kernel.qemu']).strip()==b'1','Only owned API35 emulator'
 def snapshot(index):
  call(['shell','am','force-stop',APP]);directory='/data/user/0/'+APP+'/databases/'
  inventory=call(['shell','find',directory,'-maxdepth','1','-type','f']).decode();(proof/'database-inventory.txt').write_text(inventory)
  files=[n.strip() for n in inventory.splitlines()if n.strip()];assert directory+'RKStorage'in files,'Actual installed AsyncStorage database absent'
  for n in ['RKStorage','RKStorage-wal','RKStorage-shm']:
   if directory+n in files:
    data=call(['exec-out','cat',directory+n]);assert len(data)<4_000_000;(proof/f'phase{index}-{n}').write_bytes(data)
  db=sqlite3.connect(proof/f'phase{index}-RKStorage');db.execute('PRAGMA query_only=ON');rows=db.execute('SELECT key,value FROM catalystLocalStorage').fetchall();db.close()
  assert all(k in ['navokids-state-v2','navokids-progress-v1']or k.startswith('navokids-practice-v1:')for k,v in rows),'Unexpected storage scope'
  values={k:json.loads(v)for k,v in rows};(proof/f'phase{index}-values.json').write_text(json.dumps(values,ensure_ascii=False,indent=2)+'\n');return values
 try:
  owned();anr=call(['shell','dumpsys','activity','lastanr']);(proof/'preflight-anr.txt').write_bytes(anr);reject_anr(anr);validated=True
  # Root access is confined to this fresh workflow-owned userdebug emulator, never a local or customer device.
  (proof/'root-mode.txt').write_bytes(call(['root']));call(['wait-for-device'],30);owned();assert call(['shell','id','-u']).strip()==b'0'
  apks=[pathlib.Path('candidate/universal.apk'),pathlib.Path('.github/navokids-native/host/app/build/outputs/apk/debug/app-debug.apk'),pathlib.Path('.github/navokids-native/host/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk')]
  result['apkSha256']={str(p):hashlib.sha256(p.read_bytes()).hexdigest()for p in apks}
  for apk in apks:call(['install','-r',str(apk)],180)
  identity=call(['shell','dumpsys','package',APP]);(proof/'installed-identity.txt').write_bytes(identity)
  assert re.search(rb'\bversionCode=8(?=\s|$)',identity)and re.search(rb'\bversionName=0\.5\.0(?=\s|$)',identity)
  for forbidden in [b'ALLOW_BACKUP',b'android.permission.RECORD_AUDIO',b'android.permission.SYSTEM_ALERT_WINDOW',b'android.permission.READ_EXTERNAL_STORAGE',b'android.permission.WRITE_EXTERNAL_STORAGE',b'com.google.android.gms.permission.AD_ID']:
   assert forbidden not in identity,'Unexpected backup/permission: '+forbidden.decode()
  snapshots=[]
  for index,method in enumerate(METHODS,1):
   data=call(['shell','am','instrument','-w','-r','-e','class',HOST+'.PracticeNativeTest#'+method,HOST+'.test/androidx.test.runner.AndroidJUnitRunner'],480);(proof/f'phase{index}-instrumentation.txt').write_bytes(data)
   assert b'OK (1 test)'in data and not any(x in data for x in [b'FAILURES',b'INSTRUMENTATION_FAILED',b'Process crashed']),'Actual native scenario failed: '+method
   snapshots.append(snapshot(index))
  validate_sequence(*snapshots)
  result.update(status='PASSED',actualStoredEvidence={f'phase{i}-values.json':hashlib.sha256((proof/f'phase{i}-values.json').read_bytes()).hexdigest()for i in range(1,4)})
 except BaseException as e:result.update(status='FAILED',error=str(e))
 finally:
  if validated:
   for name,args in [('final-screen.png',['exec-out','screencap','-p']),('window.txt',['shell','dumpsys','window','windows']),('logcat.txt',['logcat','-d','-t','1500']),('final-anr.txt',['shell','dumpsys','activity','lastanr'])]:
    try:(proof/name).write_bytes(call(args))
    except BaseException as e:result.setdefault('diagnostics',{})[name]=type(e).__name__
   try:
    reject_anr((proof/'final-anr.txt').read_bytes());reject_anr_window((proof/'window.txt').read_bytes())
    packed=call(['exec-out','run-as',HOST,'tar','-cf','-','-C','files','native-proof']);assert len(packed)<40*1024*1024;found=set()
    with tarfile.open(fileobj=io.BytesIO(packed))as t:
     for member in t.getmembers():
      if member.isdir():continue
      p=pathlib.PurePosixPath(member.name);assert member.isfile()and p.parent==pathlib.PurePosixPath('native-proof')and p.name in NATIVE_FILES|OPTIONAL_FILES and p.name not in found and member.size<8*1024*1024
      found.add(p.name);(proof/p.name).write_bytes(t.extractfile(member).read())
    if result['status']=='PASSED':assert found==NATIVE_FILES,'Incomplete actual UI proof'
   except BaseException as e:
    result.setdefault('diagnostics',{})['nativeProof']=str(e)
    if result['status']=='PASSED':result.update(status='FAILED',error='Incomplete or invalid actual evidence')
  result['finishedUTC']=datetime.datetime.now(datetime.timezone.utc).isoformat();(proof/'result.json').write_text(json.dumps(result,indent=2)+'\n')
 return result
if __name__=='__main__':
 os.umask(0o077);r=run();print(json.dumps({'status':r['status'],'evidence':'bounded encrypted artifact only'}));raise SystemExit(0 if r['status']=='PASSED'else 1)
