"""Verify fresh generated Android identity and choose only the existing QA or unsigned signing boundary."""
from pathlib import Path
import argparse,hashlib,json,re,xml.etree.ElementTree as ET
p=argparse.ArgumentParser();p.add_argument('--mode',choices=['qa','unsigned'],required=True);a=p.parse_args()
c=json.loads(Path('app.json').read_text())['expo'];assert c['version']=='0.5.0'and c['android']['versionCode']==8 and c['android']['allowBackup']is False
manifest=ET.parse('android/app/src/main/AndroidManifest.xml').getroot();ns='{http://schemas.android.com/apk/res/android}';tools='{http://schemas.android.com/tools}'
assert manifest.find('application').get(ns+'allowBackup')=='false'
blocked=set(c['android']['blockedPermissions']);assert blocked=={'android.permission.READ_EXTERNAL_STORAGE','android.permission.WRITE_EXTERNAL_STORAGE','android.permission.SYSTEM_ALERT_WINDOW'}
for permission in manifest.findall('uses-permission'):
 if permission.get(ns+'name')in blocked:assert permission.get(tools+'node')=='remove'
assert not any(n.get(ns+'name')in ['android.permission.RECORD_AUDIO','com.google.android.gms.permission.AD_ID']for n in manifest.findall('uses-permission'))
p=Path('android/app/build.gradle');s=p.read_text();assert 'versionCode 8'in s and 'versionName "0.5.0"'in s and re.search(r'''applicationId\s+['"]com\.kamilunavo\.navokids['"]''',s)
pattern=r'(        release \{[\s\S]*?)(            signingConfig = signingConfigs\.debug)'
assert len(re.findall(pattern,s))==1,'Unexpected generated signing boundary'
if a.mode=='unsigned':s=re.sub(pattern,r'\1            signingConfig = null',s,count=1);p.write_text(s)
assert Path('assets/app-icon.png').is_file()
print('Fresh Android0.5.0(8), local-child backup/permissions and '+a.mode+' signing boundary verified')
