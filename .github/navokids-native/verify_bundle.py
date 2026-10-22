"""Check the actual managed candidate against the Google-observed existing public upload key."""
import hashlib,json,os,pathlib,re,subprocess,sys,xml.etree.ElementTree as ET,zipfile
folder=pathlib.Path(sys.argv[1]);bundle=folder/'app-release.aab';tool=pathlib.Path(os.environ['RUNNER_TEMP'])/'bundletool.jar'
assert hashlib.sha256(tool.read_bytes()).hexdigest()=='378b5434cd1378bef6b2bc527b8c7f0ff2584b273830335bce54d6d0813c8584'
def run(args):return subprocess.check_output(args,stderr=subprocess.STDOUT).decode()
assert 'jar verified.'in run(['jarsigner','-J-Duser.language=en','-verify',str(bundle)])
certificate=run(['keytool','-J-Duser.language=en','-printcert','-jarfile',str(bundle)])
for label,expected in [('SHA1','1F600B0AD66C67418C8EF61FD7ABC59D738BCF45'),('SHA256','597A7E6178078913BDE7582000E41E26E21B648960E2B8E1F8601CA938E9EDD6')]:
 values=re.findall(label+r':\s*([A-F0-9:]+)',certificate);assert len(values)==1 and values[0].replace(':','')==expected,'Existing Google upload certificate mismatch'
run(['java','-jar',str(tool),'validate','--bundle='+str(bundle)])
xml=run(['java','-jar',str(tool),'dump','manifest','--bundle='+str(bundle)]);root=ET.fromstring(xml);ns='{http://schemas.android.com/apk/res/android}'
assert root.get('package')=='com.kamilunavo.navokids'and root.get(ns+'versionCode')=='8'and root.get(ns+'versionName')=='0.5.0'
assert root.find('application').get(ns+'allowBackup')=='false'
for node in root.findall('uses-permission'):
 assert node.get(ns+'name')not in ['android.permission.READ_EXTERNAL_STORAGE','android.permission.WRITE_EXTERNAL_STORAGE','android.permission.SYSTEM_ALERT_WINDOW','android.permission.RECORD_AUDIO','com.google.android.gms.permission.AD_ID']
p=json.loads((folder/'provenance.json').read_text());assert p['package']==root.get('package')and p['versionCode']==8 and p['version']=='0.5.0'and p['storeSubmission']is False and p['managedCredentials']is True
assert p['aabSHA256']==hashlib.sha256(bundle.read_bytes()).hexdigest()
(folder/'actual-manifest.xml').write_text(xml);(folder/'upload-certificate.txt').write_text(certificate)
print('Actual managed version8/certificate/local-data boundary/bundle verified')
