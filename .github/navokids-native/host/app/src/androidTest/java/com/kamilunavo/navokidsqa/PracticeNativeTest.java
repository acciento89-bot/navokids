package com.kamilunavo.navokidsqa;

import android.content.Intent;
import android.os.Build;
import android.os.SystemClock;
import android.view.accessibility.AccessibilityWindowInfo;
import androidx.test.ext.junit.runners.AndroidJUnit4;
import androidx.test.platform.app.InstrumentationRegistry;
import androidx.test.uiautomator.*;
import org.junit.*;
import org.junit.rules.TestWatcher;
import org.junit.runner.Description;
import org.junit.runner.RunWith;
import java.io.*;
import java.util.*;
import java.util.regex.*;
import static org.junit.Assert.*;

/** External disposable host; every child, plan and answer is entered in the shipping Release UI. */
@RunWith(AndroidJUnit4.class)
public final class PracticeNativeTest {
 private static final String APP="com.kamilunavo.navokids";
 private final UiDevice device=UiDevice.getInstance(InstrumentationRegistry.getInstrumentation());
 private final android.content.Context host=InstrumentationRegistry.getInstrumentation().getTargetContext();
 private final File proof=new File(host.getFilesDir(),"native-proof");
 @Rule public final TestWatcher watcher=new TestWatcher(){@Override protected void failed(Throwable e,Description d){try{capture("failure-screen");}catch(Exception ignored){}}};
 @Before public void owned()throws Exception {
  assertEquals(35,Build.VERSION.SDK_INT);assertEquals("1",device.executeShellCommand("getprop ro.kernel.qemu").trim());proof.mkdirs();
  android.accessibilityservice.AccessibilityServiceInfo info=InstrumentationRegistry.getInstrumentation().getUiAutomation().getServiceInfo();assertNotNull(info);info.flags|=android.accessibilityservice.AccessibilityServiceInfo.FLAG_RETRIEVE_INTERACTIVE_WINDOWS;InstrumentationRegistry.getInstrumentation().getUiAutomation().setServiceInfo(info);
  launch();
 }
 private void launch(){Intent i=host.getPackageManager().getLaunchIntentForPackage(APP);assertNotNull(i);host.startActivity(i.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK));assertTrue(device.wait(Until.hasObject(By.pkg(APP)),20000));device.waitForIdle();}
 private UiObject2 unique(BySelector selector){List<UiObject2> nodes=device.findObjects(selector);assertEquals("Unique visible target: "+selector,1,nodes.size());return nodes.get(0);}
 private UiObject2 find(BySelector selector){
  for(int n=0;n<18;n++){
   List<UiObject2> nodes=device.findObjects(selector);if(nodes.size()==1)return nodes.get(0);if(nodes.size()>1)fail("Ambiguous target "+selector);
   device.swipe(device.getDisplayWidth()/2,(int)(device.getDisplayHeight()*.78),device.getDisplayWidth()/2,(int)(device.getDisplayHeight()*.28),25);device.waitForIdle();
  }
  fail("Target missing: "+selector);return null;
 }
 private BySelector id(String id){return By.res(Pattern.compile("(?:"+Pattern.quote(APP)+":id/)?"+Pattern.quote(id)));}
 private void click(BySelector selector){UiObject2 n=find(selector);assertTrue("Target disabled",n.isEnabled());n.click();device.waitForIdle();}
 private void text(String value){click(By.text(value));}
 private void test(String value){if(value.equals("practice-session-back")||value.equals("practice-planner-back"))top();click(id(value));}
 private void expect(String value){assertNotNull(find(By.text(value)));}
 private void hideKeyboard(){for(AccessibilityWindowInfo w:InstrumentationRegistry.getInstrumentation().getUiAutomation().getWindows())if(w.getType()==AccessibilityWindowInfo.TYPE_INPUT_METHOD){device.pressBack();device.waitForIdle();return;}}
 private void enter(BySelector selector,String value){UiObject2 n=find(selector);n.click();device.waitForIdle();unique(selector).setText(value);device.waitForIdle();assertEquals(value,unique(selector).getText());hideKeyboard();}
 private void top(){for(int n=0;n<8;n++){device.swipe(device.getDisplayWidth()/2,(int)(device.getDisplayHeight()*.3),device.getDisplayWidth()/2,(int)(device.getDisplayHeight()*.82),20);device.waitForIdle();}}
 private void capture(String name)throws Exception {
  device.waitForIdle();if(!name.equals("failure-screen"))assertEquals(APP,device.getCurrentPackageName());
  assertTrue(device.takeScreenshot(new File(proof,name+".png")));device.dumpWindowHierarchy(new File(proof,name+".xml"));
 }
 private void parents()throws Exception {
  top();click(By.desc("Elternbereich"));
  BySelector question=By.text(Pattern.compile("\\d+ [＋+−-] \\d+ = \\?"));assertTrue(device.wait(Until.hasObject(question),5000));
  String challenge=unique(question).getText();Matcher m=Pattern.compile("(\\d+) ([＋+−-]) (\\d+) = \\?").matcher(challenge);assertTrue(m.matches());int a=Integer.parseInt(m.group(1)),b=Integer.parseInt(m.group(3));int result=(m.group(2).equals("+")||m.group(2).equals("＋"))?a+b:a-b;
  capture("02-parent-gate");text(Integer.toString(result));assertTrue(device.wait(Until.hasObject(id("practice-open-planner")),5000));
 }
 private void profile(String name,boolean older){enter(By.clazz("android.widget.EditText"),name);if(older)text("Abenteurer");text("Lernreise starten");assertTrue(device.wait(Until.hasObject(By.desc("Profil wechseln")),10000));}
 @Test public void createOriginalProfile()throws Exception {
  expect("Wer geht mit Navi auf Reise?");profile("QA Owl",false);capture("01-world-before");
 }
 @Test public void createPlanAndPersistWrongAttempt()throws Exception {
  expect("Wer möchte lernen?");text("QA Owl");parents();test("practice-open-planner");test("practice-new-plan");enter(id("practice-plan-name"),"QA two islands");
  test("practice-select-numbers-1");test("practice-select-colors-1");
  assertFalse("Practice must not unlock next original stage",device.hasObject(id("practice-select-numbers-2")));
  test("practice-save-plan");assertTrue(device.wait(Until.hasObject(id("practice-plan-saved")),10000));capture("03-saved-plan");
  click(By.res(Pattern.compile("(?:"+Pattern.quote(APP)+":id/)?practice-start-plan-.+")));
  expect("Navi zeigt dir dieses Bild: Apfel und die Zahl 1. Finde dieselbe Zahl.");test("practice-answer-2");expect("Versuche es noch einmal.");capture("04-wrong-attempt");test("practice-session-back");
 }
 @Test public void coldResumeFinishAndProfileIsolation()throws Exception {
  expect("Wer möchte lernen?");text("QA Owl");test("practice-world-continue");expect("Navi zeigt dir dieses Bild: Apfel und die Zahl 1. Finde dieselbe Zahl.");capture("05-cold-resumed-question");
  String[] answers={"1","1","quantity-0-correct","red","yellow-circle","pink"};
  for(int n=0;n<answers.length;n++){
   test("practice-answer-"+answers[n]);test("practice-next");
  }
  expect("Deine Runde ist geschafft!");expect("Richtig gelöste Übungsaufgaben: 6");expect("Beim ersten Versuch: 5 · Nach weiteren Versuchen: 1");capture("06-completed-round");test("practice-finish-world");
  parents();test("practice-open-planner");expect("Vollständige Runden: 1");expect("Richtig gelöste Übungsaufgaben: 6");expect("Beim ersten Versuch: 5");expect("Nach weiteren Versuchen: 1");capture("07-parent-history");
  test("practice-planner-back");text("Wechseln");text("Kind hinzufügen");
  BySelector q=By.text(Pattern.compile("\\d+ [＋+−-] \\d+ = \\?"));assertTrue(device.wait(Until.hasObject(q),5000));Matcher m=Pattern.compile("(\\d+) ([＋+−-]) (\\d+) = \\?").matcher(unique(q).getText());assertTrue(m.matches());int a=Integer.parseInt(m.group(1)),b=Integer.parseInt(m.group(3));text(Integer.toString(m.group(2).equals("+")||m.group(2).equals("＋")?a+b:a-b));
  profile("QA Fox",true);parents();test("practice-open-planner");expect("Noch kein Plan gespeichert.");expect("Vollständige Runden: 0");capture("08-other-profile-empty");
  test("practice-planner-back");text("Wechseln");text("QA Owl");parents();test("practice-open-planner");expect("Vollständige Runden: 1");capture("09-original-history-retained");
 }
}
