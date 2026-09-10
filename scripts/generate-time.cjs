const l=(de,en)=>({de,en});
const hoursDe=['zwölf','eins','zwei','drei','vier','fünf','sechs','sieben','acht','neun','zehn','elf'];
const hoursEn=['twelve','one','two','three','four','five','six','seven','eight','nine','ten','eleven'];
const time=(total)=>({hour:Math.floor(((total%720)+720)%720/60)||12,minute:((total%60)+60)%60});
const addMinutes=(t,n)=>time(t.hour*60+t.minute+n);
const key=t=>`${t.hour}:${String(t.minute).padStart(2,'0')}`;
const spoken=t=>{
 const h=t.hour%12, next=(h+1)%12;
 if(!t.minute)return l(`${h===1?'ein':hoursDe[h]} Uhr`,`${hoursEn[h]} o’clock`);
 if(t.minute===30)return l(`halb ${hoursDe[next]}`,`half past ${hoursEn[h]}`);
 if(t.minute===15)return l(`Viertel nach ${hoursDe[h]}`,`quarter past ${hoursEn[h]}`);
 if(t.minute===45)return l(`Viertel vor ${hoursDe[next]}`,`quarter to ${hoursEn[next]}`);
 const count={5:['fünf','five'],10:['zehn','ten'],20:['zwanzig','twenty'],25:['fünfundzwanzig','twenty-five']};
 const n=t.minute<30?t.minute:60-t.minute;
 return l(`${count[n][0]} ${t.minute<30?'nach':'vor'} ${hoursDe[t.minute<30?h:next]}`,`${count[n][1]} ${t.minute<30?'past':'to'} ${hoursEn[t.minute<30?h:next]}`);
};
const rotate=(xs,n)=>xs.slice(n%xs.length).concat(xs.slice(0,n%xs.length));
const routines=[
 ['Navi wacht auf, wäscht sich und frühstückt.','Navi wakes up, washes, and eats breakfast.',['🛏️','🚿','🥣']],
 ['Navi spielt, räumt die Spielsachen auf und liest ein Buch.','Navi plays, puts the toys away, and reads a book.',['🧸','🧺','📖']],
 ['Navi zieht die Jacke an, geht spazieren und zieht danach die Schuhe aus.','Navi puts on a coat, goes for a walk, and then takes off the shoes.',['🧥','🚶','👟']],
 ['Navi wäscht die Hände, isst zu Mittag und putzt danach die Zähne.','Navi washes hands, eats lunch, and then brushes teeth.',['🧼','🍝','🪥']],
 ['Navi malt ein Bild, hängt es auf und packt dann die Stifte ein.','Navi draws a picture, hangs it up, and then packs the crayons away.',['🖍️','🖼️','🎒']],
 ['Navi zieht den Schlafanzug an, hört eine Geschichte und schläft ein.','Navi puts on pajamas, listens to a story, and falls asleep.',['👕','📖','😴']],
 ['Navi pflanzt einen Samen, gießt ihn und sieht später einen Keimling.','Navi plants a seed, waters it, and later sees a seedling.',['🫘','💧','🌱']],
 ['Navi packt die Tasche, fährt mit dem Bus und kommt am Kindergarten an.','Navi packs a bag, takes the bus, and arrives at preschool.',['🎒','🚌','🏫']],
 ['Navi knetet Teig, backt Brot und isst später eine Scheibe.','Navi kneads dough, bakes bread, and later eats a slice.',['🥣','🍞','😋']],
 ['Navi zieht die Badehose an, schwimmt und duscht danach.','Navi puts on swim shorts, swims, and then showers.',['🩳','🏊','🚿']],
];
module.exports=function buildTime(age){
 const qs=[];
 const add=(prompt,visual,answers,correct,success,hint,extra={})=>qs.push({id:`time-${age}-${qs.length+1}`,prompt,visual,answers:rotate(answers,qs.length),correctAnswerId:correct,success,hint,...extra});
 const clockChoices=(target,asClocks,step=60)=>[target,addMinutes(target,step),...(age==='adventurer'?[addMinutes(target,-step)]:[])].map(t=>({id:key(t),label:key(t),...(asClocks?{clock:t}:{})}));
 const hint=l('Der kurze Zeiger zeigt die Stunde. Der lange Zeiger zeigt die Minuten.','The short hand shows the hour. The long hand shows the minutes.');
 function readAndMatch(t,elapsed){
  const s=spoken(t);
  const explanation=t.minute===30?l(`Richtig: ${s.de}, also ${key(t)} Uhr. Bei „halb“ nennen wir die nächste Stunde.`,`Correct: ${s.en}, or ${key(t)}. The long hand points to six.`):l(`Richtig, die Uhr zeigt ${s.de}.`,`Correct, the clock shows ${s.en}.`);
  add(l('Wie spät ist es auf dieser Uhr?','What time does this clock show?'),'',clockChoices(t,false,t.minute?15:60),key(t),explanation,hint,{clock:t,timeExercise:{kind:'read',start:t,minutes:0}});
  add(l(`Welche Uhr zeigt ${s.de}?`,`Which clock shows ${s.en}?`),'',clockChoices(t,true,t.minute?15:60),key(t),explanation,hint,{timeExercise:{kind:'match',start:t,minutes:0}});
  elapsedQuestion(t,elapsed);
 }
 function elapsedQuestion(start,minutes){
  const target=addMinutes(start,minutes), s=spoken(start), end=spoken(target);
  const amount=Math.abs(minutes), durationDe=amount===60?'eine Stunde':amount===120?'zwei Stunden':`${amount} Minuten`, durationEn=amount===60?'one hour':amount===120?'two hours':`${amount} minutes`;
  const de=`Es ist ${s.de}. Welche Uhr zeigt ${durationDe} ${minutes<0?'früher':'später'}?`;
  const en=`It is ${s.en}. Which clock shows ${durationEn} ${minutes<0?'earlier':'later'}?`;
  add(l(de,en),'',clockChoices(target,true,amount>=60?60:15),key(target),l(`Genau! Dann ist es ${end.de}.`,`Exactly! Then it is ${end.en}.`),l(minutes<0?'Gehe auf der Uhr zurück. Die Stunden wiederholen sich nach zwölf.':'Gehe auf der Uhr weiter. Nach zwölf kommt wieder eins.',minutes<0?'Move back around the clock. The hours repeat after twelve.':'Move forward around the clock. After twelve comes one again.'),{clock:start,timeExercise:{kind:'elapsed',start,minutes}});
 }
 if(age==='discoverer'){
  for(let h=1;h<=12;h++) readAndMatch({hour:h,minute:0},60);
  for(const [de,en,pics]of routines)for(let part=0;part<3;part++){
   const asksDe=['Was passiert zuerst?','Was passiert danach, in der Mitte?','Was passiert zuletzt?'];
   const asksEn=['What happens first?','What happens next, in the middle?','What happens last?'];
   const options=[part,(part+1)%3].map(i=>({id:String(i),label:pics[i]}));
   add(l(`${de} ${asksDe[part]}`,`${en} ${asksEn[part]}`),pics.join(' → '),options,String(part),l(['Genau! Das ist der Anfang.','Genau! Das kommt in der Mitte.','Genau! Das kommt am Ende.'][part],['Exactly! That is the beginning.','Exactly! That comes in the middle.','Exactly! That comes at the end.'][part]),l('Folge den Bildern von links nach rechts.','Follow the pictures from left to right.'));
  }
  for(let h=1;h<=8;h++){
   elapsedQuestion({hour:h,minute:0},120);
   elapsedQuestion({hour:h+2,minute:0},-60);
   elapsedQuestion({hour:h+3,minute:0},-120);
  }
 }else{
  const lessons=[
   ...[1,3,5,7,9,11].map(hour=>[{hour,minute:0},60]),
   ...[1,2,3,4,6,8,10,12].map(hour=>[{hour,minute:30},30]),
   ...[2,5,8,11].flatMap(hour=>[15,45].map(minute=>[{hour,minute},15])),
   ...[5,10,20,25,35,40,50,55].map((minute,i)=>[{hour:i+1,minute},5]),
  ];
  for(const [t,elapsed]of lessons)readAndMatch(t,elapsed);
 }
 if(qs.length!==90)throw Error(`Time curriculum ${age}: ${qs.length}`);
 return qs;
};
module.exports.addMinutes=addMinutes;
module.exports.spoken=spoken;
