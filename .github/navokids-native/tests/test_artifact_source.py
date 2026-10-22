import importlib.util,pathlib,subprocess,tempfile,unittest
p=pathlib.Path(__file__).resolve().parents[1]/'artifact_source.py';spec=importlib.util.spec_from_file_location('artifact_source',p);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
class SourceIdentityTests(unittest.TestCase):
 def test_real_git_allows_delivery_helper_change_but_rejects_product_change(self):
  with tempfile.TemporaryDirectory()as tmp:
   root=pathlib.Path(tmp)
   def git(*args):return subprocess.check_output(['git','-C',tmp,*args],stderr=subprocess.DEVNULL).decode().strip()
   git('init');git('config','user.name','Own test');git('config','user.email','test@example.invalid')
   (root/'App.tsx').write_text('shipping');(root/'helper.py').write_text('old');git('add','.');git('commit','-m','base');old=git('rev-parse','HEAD')
   (root/'helper.py').write_text('new');git('add','.');git('commit','-m','delivery only');m.assert_same_product(root,old,git('rev-parse','HEAD'))
   (root/'App.tsx').write_text('different');git('add','.');git('commit','-m','product changed')
   with self.assertRaises(AssertionError):m.assert_same_product(root,old,git('rev-parse','HEAD'))
 def test_invalid_commit_id_rejected_before_git(self):
  with self.assertRaises(AssertionError):m.assert_same_product(pathlib.Path('.'),'HEAD;anything','0'*40)
