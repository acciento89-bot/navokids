import importlib.util,pathlib,unittest,copy
p=pathlib.Path(__file__).resolve().parents[1]/'run_acceptance.py';s=importlib.util.spec_from_file_location('practice',p);m=importlib.util.module_from_spec(s);s.loader.exec_module(m)
class PracticeEvidenceTests(unittest.TestCase):
 def sample(self):
  profile={'id':'child-own','nickname':'QA Owl','ageGroup':'discoverer','progress':{'numbers':{'stars':0,'completedStages':[],'completedQuestions':0}}}
  base={'navokids-state-v2':{'profiles':[profile],'premiumUnlocked':False,'language':'de'}}
  active=copy.deepcopy(base);active['navokids-practice-v1:child-own']={'schemaVersion':1,'profileId':'child-own','plans':[{'title':'QA two islands','selections':[{'categoryId':'numbers','stage':1},{'categoryId':'colors','stage':1}]}],'sessions':[{'profileId':'child-own','completedAt':None,'questions':[{'questionId':q} for q in ['d2nu1','d2nu2','d2nu3','d2cu1','d2cu2','d2cu3']],'answers':[{'questionId':'d2nu1','completedAt':None,'wrongAttempts':1}]}]}
  final=copy.deepcopy(active);final['navokids-state-v2']['profiles'].append({'id':'child-two','nickname':'QA Fox','ageGroup':'adventurer','progress':copy.deepcopy(profile['progress'])});ses=final['navokids-practice-v1:child-own']['sessions'][0];ses['completedAt']='2026-10-22T10:00:00.000Z';ses['answers']=[{'questionId':q['questionId'],'completedAt':ses['completedAt'],'wrongAttempts':1 if i==0 else 0}for i,q in enumerate(ses['questions'])]
  return base,active,final
 def test_exact_saved_wrong_answer_resume_and_original_progress(self):m.validate_sequence(*self.sample())
 def test_changed_stars_premium_or_lost_wrong_attempt_is_rejected(self):
  for field in ['progress','premium','attempt']:
   a,b,c=self.sample()
   if field=='progress':c['navokids-state-v2']['profiles'][0]['progress']['numbers']['stars']=1
   if field=='premium':c['navokids-state-v2']['premiumUnlocked']=True
   if field=='attempt':c['navokids-practice-v1:child-own']['sessions'][0]['answers'][0]['wrongAttempts']=0
   with self.assertRaises(AssertionError):m.validate_sequence(a,b,c)
 def test_no_extra_profile_sessions_or_new_stage_allowed(self):
  a,b,c=self.sample();c['navokids-practice-v1:child-two']={'sessions':[{}]}
  with self.assertRaises(AssertionError):m.validate_sequence(a,b,c)
