import pathlib, re, subprocess, time, xml.etree.ElementTree as ET
out=pathlib.Path('native-screenshots');out.mkdir(exist_ok=True)
def adb(*args): return subprocess.check_output(['adb',*map(str,args)])
def dump():
    adb('shell','uiautomator','dump','/sdcard/window.xml')
    return ET.fromstring(adb('shell','cat','/sdcard/window.xml').decode())

def next_case():
    root=dump()
    node=next(n for n in root.iter('node') if n.get('content-desc')=='QA NEXT')
    x1,y1,x2,y2=map(int,re.findall(r'\d+',node.get('bounds')))
    adb('shell','input','tap',(x1+x2)//2,(y1+y2)//2);time.sleep(1)
def shot(name):
    out.joinpath(name+'.png').write_bytes(adb('exec-out','screencap','-p'))
    out.joinpath(name+'.xml').write_bytes(adb('shell','uiautomator','dump','/sdcard/window.xml') and adb('shell','cat','/sdcard/window.xml'))
for label,w,h,density in [('phone',960,1920,480),('tablet',1536,2048,320)]:
    adb('shell','am','force-stop','com.kamilunavo.navokids')
    adb('shell','wm','size',f'{w}x{h}');adb('shell','wm','density',density)
    adb('shell','monkey','-p','com.kamilunavo.navokids','1');time.sleep(8)
    for index in range(8):
        shot(f'{label}-{index+1}-top')
        if index in [0,1,3,4,5,6,7]:
            for page in range(4 if index<2 else 1):
                adb('shell','input','swipe',w//2,int(h*.78),w//2,int(h*.30),400);time.sleep(.7)
                shot(f'{label}-{index+1}-scroll-{page+1}')
        next_case()
print('Captured real native phone and tablet renders for both languages.')
