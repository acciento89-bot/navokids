import json,pathlib,unittest
ROOT=pathlib.Path(__file__).resolve().parents[3]
class ConfigTests(unittest.TestCase):
 def test_current_android_identity_and_local_child_data_boundary(self):
  c=json.loads((ROOT/'app.json').read_text())['expo'];a=c['android']
  self.assertEqual(('com.kamilunavo.navokids',9,'0.6.0'),(a['package'],a['versionCode'],c['version']))
  self.assertIs(a.get('allowBackup'),False)
  self.assertTrue({'android.permission.READ_EXTERNAL_STORAGE','android.permission.WRITE_EXTERNAL_STORAGE','android.permission.SYSTEM_ALERT_WINDOW'}<=set(a.get('blockedPermissions',[])))
