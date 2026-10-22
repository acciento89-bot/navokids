"""Bind a native run to one successful same-project, main-owned managed artifact."""
import hashlib,json,os,pathlib,re,subprocess,zipfile
from artifact_source import assert_same_product
repo='acciento89-bot/navokids';run=os.environ['SOURCE_RUN_ID'];artifact=os.environ['SOURCE_ARTIFACT_ID'];digest=os.environ['SOURCE_ARTIFACT_DIGEST']
assert os.environ['GITHUB_REPOSITORY']==repo and run.isdecimal()and artifact.isdecimal()and re.fullmatch('sha256:[0-9a-f]{64}',digest)
def api(path):return json.loads(subprocess.check_output(['gh','api',f'repos/{repo}/'+path]))
r=api('actions/runs/'+run);a=api('actions/artifacts/'+artifact);sha=r['head_sha'];assert re.fullmatch('[0-9a-f]{40}',sha)
assert r['head_branch']=='main'and r['status']=='completed'and r['conclusion']=='success'and r['path']=='.github/workflows/android-internal.yml'
assert a['name']=='NavoKids-0.5.0-8-managed-signed-aab'and not a['expired']and a['digest']==digest and str(a['workflow_run']['id'])==run and a['workflow_run']['head_sha']==sha
assert not subprocess.run(['git','diff','--quiet',sha,'HEAD','--','App.tsx','app.json','package.json','package-lock.json','src','assets','plugins','babel.config.js','metro.config.js','tsconfig.json','eas.json']).returncode,'Native and signed product source differ'
archive=pathlib.Path(os.environ['RUNNER_TEMP'])/'managed-candidate.zip'
with archive.open('xb')as f:subprocess.run(['gh','api',f'repos/{repo}/actions/artifacts/{artifact}/zip'],stdout=f,check=True)
with archive.open('rb')as f:assert hashlib.file_digest(f,'sha256').hexdigest()==digest.removeprefix('sha256:')
folder=pathlib.Path('candidate');folder.mkdir(mode=0o700)
with zipfile.ZipFile(archive)as z:
 assert set(z.namelist())=={'app-release.aab','provenance.json','actual-manifest.xml','upload-certificate.txt'}and len(z.namelist())==4
 for member in z.infolist():
  assert member.file_size<(512*1024*1024 if member.filename=='app-release.aab'else 256*1024)
  with z.open(member)as src,(folder/member.filename).open('xb')as dst:
   while chunk:=src.read(1024*1024):dst.write(chunk)
p=json.loads((folder/'provenance.json').read_text());assert p.get('workflowCommit',p['sourceCommit'])==sha and str(p['workflowRun'])==run and p['repository']==repo
assert_same_product(pathlib.Path.cwd(),p['sourceCommit'],sha)
print('Exact successful main artifact and native product source bound')
