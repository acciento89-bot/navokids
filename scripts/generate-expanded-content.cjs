const fs = require('node:fs');

const localized = (de, en) => ({ de, en });
const localizedAnswer = (id, de, en, color) => ({ id, label: localized(de, en), ...(color ? { color } : {}) });

const rotate = (items, offset) => items.map((_, index) => items[(index + offset) % items.length]);

const numericAnswers = (correct, seed) => {
  const candidates = [correct, correct + 1, Math.max(0, correct - 1)];
  const unique = [...new Set(candidates)];
  while (unique.length < 3) unique.push(Math.max(...unique) + 1);
  return rotate(unique, seed % 3).map((value) => ({ id: String(value), label: String(value) }));
};

function buildNumbers() {
  const questions = [];
  let number = 1;
  const add = ({ promptDe, promptEn, visual, correct, successDe, successEn, hintDe, hintEn, answers }) => {
    const id = `nu${number++}`;
    questions.push({
      id,
      prompt: localized(promptDe, promptEn),
      visual,
      answers: answers ?? numericAnswers(correct, number),
      correctAnswerId: String(correct),
      success: localized(successDe, successEn),
      hint: localized(hintDe, hintEn),
    });
  };

  const counting = [
    ['Äpfel', 'apples', '🍎', 2], ['Ballons', 'balloons', '🎈', 4], ['Enten', 'ducks', '🦆', 6],
    ['Sterne', 'stars', '⭐', 8], ['Marienkäfer', 'ladybugs', '🐞', 5], ['Fische', 'fish', '🐟', 7],
    ['Blumen', 'flowers', '🌸', 9], ['Autos', 'cars', '🚗', 3], ['Kirschen', 'cherries', '🍒', 10],
    ['Muscheln', 'shells', '🐚', 4], ['Bienen', 'bees', '🐝', 6], ['Frösche', 'frogs', '🐸', 8],
    ['Kekse', 'cookies', '🍪', 5], ['Bausteine', 'blocks', '🧱', 7], ['Drachen', 'kites', '🪁', 9],
    ['Boote', 'boats', '⛵', 3], ['Kaninchen', 'rabbits', '🐰', 6], ['Monde', 'moons', '🌙', 2],
  ];
  counting.forEach(([de, en, emoji, count], index) => add({
    promptDe: `Wie viele ${de} liegen auf Navis Karte?`,
    promptEn: `How many ${en} are on Navi's map?`,
    visual: Array(count).fill(emoji).join(' '),
    correct: count,
    successDe: `Richtig gezählt! Es sind ${count}.`,
    successEn: `Great counting! There are ${count}.`,
    hintDe: `Tippe beim Zählen jedes Bild einmal an.`,
    hintEn: `Point to each picture once while counting.`,
  }));

  const comparisons = [[2, 5, 'größere', 'larger'], [7, 3, 'kleinere', 'smaller'], [4, 9, 'größere', 'larger'], [8, 6, 'kleinere', 'smaller'], [10, 7, 'größere', 'larger'], [1, 4, 'kleinere', 'smaller'], [6, 11, 'größere', 'larger'], [12, 9, 'kleinere', 'smaller'], [13, 15, 'größere', 'larger'], [16, 14, 'kleinere', 'smaller'], [18, 20, 'größere', 'larger'], [19, 17, 'kleinere', 'smaller']];
  comparisons.forEach(([left, right, deMode, enMode], index) => {
    const correct = deMode === 'größere' ? Math.max(left, right) : Math.min(left, right);
    const third = correct + (index % 2 === 0 ? 2 : -2);
    add({
      promptDe: `Welche ist die ${deMode} Zahl: ${left} oder ${right}?`,
      promptEn: `Which is the ${enMode} number: ${left} or ${right}?`,
      visual: `${left}  ↔  ${right}`,
      correct,
      answers: rotate([left, right, third], index % 3).map((value) => ({ id: String(value), label: String(value) })),
      successDe: `Genau! Die richtige Zahl ist ${correct}.`,
      successEn: `Exactly! The correct number is ${correct}.`,
      hintDe: deMode === 'größere' ? 'Die größere Zahl liegt weiter hinten beim Zählen.' : 'Die kleinere Zahl kommt beim Zählen zuerst.',
      hintEn: enMode === 'larger' ? 'The larger number comes later when counting.' : 'The smaller number comes first when counting.',
    });
  });

  const additions = [[1, 2], [2, 2], [2, 3], [4, 1], [3, 3], [5, 2], [4, 4], [6, 3], [5, 5], [7, 4], [6, 6], [8, 5], [7, 7], [9, 6], [8, 8], [10, 7], [9, 9], [12, 8]];
  additions.forEach(([left, right]) => {
    const correct = left + right;
    add({
      promptDe: `Navi findet ${left} Sterne und danach noch ${right}. Wie viele sind es zusammen?`,
      promptEn: `Navi finds ${left} stars and then ${right} more. How many are there altogether?`,
      visual: `${left} + ${right} = ?`, correct,
      successDe: `Super gerechnet! ${left} plus ${right} ist ${correct}.`,
      successEn: `Great work! ${left} plus ${right} is ${correct}.`,
      hintDe: `Starte bei ${left} und zähle ${right} weiter.`,
      hintEn: `Start at ${left} and count forward ${right} more.`,
    });
  });

  const subtractions = [[3, 1], [5, 2], [6, 1], [7, 3], [8, 2], [9, 4], [10, 3], [11, 5], [12, 4], [13, 6], [14, 5], [15, 7], [16, 6], [17, 8], [18, 7], [19, 9], [20, 8], [20, 11]];
  subtractions.forEach(([left, right]) => {
    const correct = left - right;
    add({
      promptDe: `Von ${left} Schatzmünzen werden ${right} weggenommen. Wie viele bleiben?`,
      promptEn: `${right} of ${left} treasure coins are taken away. How many remain?`,
      visual: `${left} − ${right} = ?`, correct,
      successDe: `Richtig! ${left} minus ${right} ist ${correct}.`,
      successEn: `Correct! ${left} minus ${right} is ${correct}.`,
      hintDe: `Zähle von ${left} genau ${right} Schritte zurück.`,
      hintEn: `Count backward ${right} steps from ${left}.`,
    });
  });

  [[1, 2, 3, 4], [4, 5, 6, 7], [7, 8, 9, 10], [10, 11, 12, 13], [14, 15, 16, 17], [17, 18, 19, 20]].forEach(([a, b, correct, d]) => add({
    promptDe: `Welche Zahl fehlt zwischen ${b} und ${d}?`,
    promptEn: `Which number is missing between ${b} and ${d}?`,
    visual: `${a} · ${b} · ? · ${d}`, correct,
    successDe: `Genau! In die Lücke gehört ${correct}.`,
    successEn: `Exactly! ${correct} belongs in the gap.`,
    hintDe: `Zähle langsam von ${a} bis ${d}.`,
    hintEn: `Count slowly from ${a} to ${d}.`,
  }));

  [3, 6, 9, 12, 15, 18].forEach((value) => add({
    promptDe: `Welche Zahl kommt direkt nach ${value}?`, promptEn: `Which number comes directly after ${value}?`,
    visual: `${value} · ?`, correct: value + 1,
    successDe: `Richtig! Nach ${value} kommt ${value + 1}.`, successEn: `Correct! ${value + 1} comes after ${value}.`,
    hintDe: `Zähle von ${value} einen Schritt weiter.`, hintEn: `Count one step forward from ${value}.`,
  }));
  [4, 7, 10, 13, 16, 20].forEach((value) => add({
    promptDe: `Welche Zahl steht direkt vor ${value}?`, promptEn: `Which number comes directly before ${value}?`,
    visual: `? · ${value}`, correct: value - 1,
    successDe: `Genau! Vor ${value} steht ${value - 1}.`, successEn: `Exactly! ${value - 1} comes before ${value}.`,
    hintDe: `Gehe beim Zählen von ${value} einen Schritt zurück.`, hintEn: `Count one step backward from ${value}.`,
  }));
  [[2, 4], [5, 8], [7, 11], [9, 14], [12, 17], [16, 20]].forEach(([left, right]) => add({
    promptDe: `Navi braucht mehr als ${left} Muscheln. Welche Menge passt?`, promptEn: `Navi needs more than ${left} shells. Which amount works?`,
    visual: `🐚  > ${left}`, correct: right,
    successDe: `Prima! ${right} ist mehr als ${left}.`, successEn: `Great! ${right} is more than ${left}.`,
    hintDe: `Suche eine Zahl, die größer als ${left} ist.`, hintEn: `Find a number larger than ${left}.`,
  }));

  return questions;
}

const colors = [
  { id: 'red', de: 'Rot', en: 'Red', hex: '#EF5350', symbol: '🔴' },
  { id: 'blue', de: 'Blau', en: 'Blue', hex: '#42A5F5', symbol: '🔵' },
  { id: 'green', de: 'Grün', en: 'Green', hex: '#66BB6A', symbol: '🟢' },
  { id: 'yellow', de: 'Gelb', en: 'Yellow', hex: '#FBC02D', symbol: '🟡' },
  { id: 'purple', de: 'Lila', en: 'Purple', hex: '#AB47BC', symbol: '🟣' },
  { id: 'orange', de: 'Orange', en: 'Orange', hex: '#FB8C00', symbol: '🟠' },
  { id: 'pink', de: 'Rosa', en: 'Pink', hex: '#EC6FA7', symbol: '🩷' },
  { id: 'brown', de: 'Braun', en: 'Brown', hex: '#8D6E63', symbol: '🟤' },
  { id: 'white', de: 'Weiß', en: 'White', hex: '#F4F4F0', symbol: '⚪' },
  { id: 'black', de: 'Schwarz', en: 'Black', hex: '#303438', symbol: '⚫' },
  { id: 'gray', de: 'Grau', en: 'Gray', hex: '#9E9E9E', symbol: '🩶' },
  { id: 'light-blue', de: 'Hellblau', en: 'Light blue', hex: '#81D4FA', symbol: '🔹' },
  { id: 'light-green', de: 'Hellgrün', en: 'Light green', hex: '#A5D6A7', symbol: '🍏' },
  { id: 'light-yellow', de: 'Hellgelb', en: 'Light yellow', hex: '#FFF59D', symbol: '🌕' },
  { id: 'peach', de: 'Pfirsich', en: 'Peach', hex: '#FFB38A', symbol: '🍑' },
  { id: 'lilac', de: 'Flieder', en: 'Lilac', hex: '#CE93D8', symbol: '🪻' },
  { id: 'beige', de: 'Beige', en: 'Beige', hex: '#D7C3A3', symbol: '🥯' },
  { id: 'dark-blue', de: 'Dunkelblau', en: 'Dark blue', hex: '#24478F', symbol: '🌌' },
];
const colorById = Object.fromEntries(colors.map((color) => [color.id, color]));
const colorAnswers = (correctId, seed) => {
  const correct = colorById[correctId];
  const others = colors.filter((color) => color.id !== correctId);
  return [correct, others[seed % others.length], others[(seed + 7) % others.length]].map((color) => localizedAnswer(color.id, color.de, color.en, color.hex));
};

function buildColors() {
  const questions = [];
  let number = 1;
  const add = ({ promptDe, promptEn, visual, correctId, successDe, successEn, hintDe, hintEn }) => {
    const id = `cu${number++}`;
    questions.push({ id, prompt: localized(promptDe, promptEn), visual, answers: rotate(colorAnswers(correctId, number), number % 3), correctAnswerId: correctId, success: localized(successDe, successEn), hint: localized(hintDe, hintEn) });
  };
  const objects = [
    ['Erdbeere', 'ripe strawberry', '🍓', 'red'], ['Himmel', 'clear sky', '🌤️', 'blue'], ['Gras', 'fresh grass', '🌱', 'green'], ['Banane', 'ripe banana', '🍌', 'yellow'],
    ['Weintraube', 'purple grape', '🍇', 'purple'], ['Orange', 'orange fruit', '🍊', 'orange'], ['Flamingo', 'flamingo', '🦩', 'pink'], ['Schokolade', 'chocolate', '🍫', 'brown'],
    ['Schnee', 'snow', '❄️', 'white'], ['Kohle', 'coal', '🪨', 'black'], ['Tomate', 'ripe tomato', '🍅', 'red'], ['Ozean', 'ocean', '🌊', 'blue'],
    ['Blatt', 'fresh leaf', '🍃', 'green'], ['Zitrone', 'lemon', '🍋', 'yellow'], ['Lavendelblüte', 'lavender flower', '🪻', 'purple'], ['Karotte', 'carrot', '🥕', 'orange'],
    ['Ferkel', 'piglet', '🐷', 'pink'], ['Baumstamm', 'tree trunk', '🌳', 'brown'], ['Wolke', 'bright cloud', '☁️', 'white'], ['Nacht', 'dark night', '🌑', 'black'],
    ['Feuerwehrauto', 'fire truck', '🚒', 'red'], ['Heidelbeere', 'blueberry', '🫐', 'blue'], ['Frosch', 'frog', '🐸', 'green'], ['Sonnenblume', 'sunflower', '🌻', 'yellow'],
    ['Pflaume', 'plum', '🟣', 'purple'], ['Kürbis', 'pumpkin', '🎃', 'orange'], ['Zuckerwatte', 'cotton candy', '🍭', 'pink'], ['Braunbär', 'brown bear', '🐻', 'brown'],
    ['Milch', 'milk', '🥛', 'white'], ['Autoreifen', 'car tire', '🛞', 'black'], ['Kirsche', 'cherry', '🍒', 'red'], ['Blauwal', 'blue whale', '🐋', 'blue'],
    ['Gurke', 'cucumber', '🥒', 'green'], ['Küken', 'chick', '🐥', 'yellow'], ['Aubergine', 'eggplant', '🍆', 'purple'], ['Tigerfell', 'tiger fur', '🐯', 'orange'],
  ];
  objects.forEach(([deObject, enObject, emoji, correctId]) => {
    const color = colorById[correctId];
    add({ promptDe: `Welche Farbe hat ${deObject} normalerweise?`, promptEn: `What color is a ${enObject} usually?`, visual: emoji, correctId, successDe: `Richtig! Die passende Farbe ist ${color.de}.`, successEn: `Correct! The matching color is ${color.en}.`, hintDe: `Denk daran, wie ${deObject} in echt aussieht.`, hintEn: `Think about what a ${enObject} looks like in real life.` });
  });

  const mixes = [
    ['red', 'yellow', 'orange'], ['blue', 'yellow', 'green'], ['red', 'blue', 'purple'], ['red', 'white', 'pink'],
    ['black', 'white', 'gray'], ['blue', 'white', 'light-blue'], ['green', 'white', 'light-green'], ['yellow', 'white', 'light-yellow'],
    ['orange', 'white', 'peach'], ['purple', 'white', 'lilac'], ['brown', 'white', 'beige'], ['blue', 'black', 'dark-blue'],
  ];
  mixes.forEach(([leftId, rightId, resultId]) => {
    const left = colorById[leftId]; const right = colorById[rightId]; const result = colorById[resultId];
    add({ promptDe: `Welche Farbe entsteht aus ${left.de} und ${right.de}?`, promptEn: `Which color do ${left.en} and ${right.en} make?`, visual: `${left.symbol} + ${right.symbol} = ?`, correctId: resultId, successDe: `Genau! Daraus entsteht ${result.de}.`, successEn: `Exactly! They make ${result.en}.`, hintDe: `Stell dir vor, du rührst beide Farben zusammen.`, hintEn: `Imagine stirring the two paints together.` });
  });

  const patterns = [
    ['red', 'blue'], ['yellow', 'green'], ['purple', 'orange'], ['pink', 'blue'], ['brown', 'yellow'], ['black', 'white'],
    ['green', 'red'], ['orange', 'blue'], ['white', 'purple'], ['yellow', 'pink'], ['blue', 'brown'], ['red', 'white'],
    ['blue', 'green', 'yellow'], ['red', 'yellow', 'blue'], ['pink', 'purple', 'white'], ['orange', 'green', 'brown'], ['black', 'gray', 'white'], ['yellow', 'orange', 'red'],
    ['green', 'blue', 'purple'], ['white', 'blue', 'red'], ['brown', 'orange', 'yellow'], ['purple', 'pink', 'red'], ['blue', 'white', 'green'], ['red', 'black', 'yellow'],
  ];
  patterns.forEach((pattern) => {
    const shown = pattern.length === 2 ? [pattern[0], pattern[1], pattern[0], pattern[1]] : [pattern[0], pattern[1], pattern[2], pattern[0], pattern[1]];
    const correctId = pattern.length === 2 ? pattern[0] : pattern[2];
    const spokenDe = shown.map((id) => colorById[id].de).join(', ');
    const spokenEn = shown.map((id) => colorById[id].en).join(', ');
    add({ promptDe: `Welche Farbe kommt als Nächstes nach ${spokenDe}?`, promptEn: `Which color comes next after ${spokenEn}?`, visual: `${shown.map((id) => colorById[id].symbol).join(' ')}  ?`, correctId, successDe: `Muster gelöst! Als Nächstes kommt ${colorById[correctId].de}.`, successEn: `Pattern solved! ${colorById[correctId].en} comes next.`, hintDe: 'Suche den Teil, der sich im Muster wiederholt.', hintEn: 'Find the part that repeats in the pattern.' });
  });
  const extraObjects = [
    ['Ampellicht zum Anhalten', 'traffic light that means stop', '🚦', 'red'], ['Regentropfen im Bilderbuch', 'raindrop in the picture book', '💧', 'blue'], ['Kleeblatt', 'clover leaf', '☘️', 'green'],
    ['Goldmünze', 'gold coin', '🪙', 'yellow'], ['Zaubererhut', 'wizard hat', '🧙', 'purple'], ['Mandarine', 'tangerine', '🍊', 'orange'],
    ['Rosenblüte', 'pink rose', '🌸', 'pink'], ['Haselnuss', 'hazelnut', '🌰', 'brown'], ['Eisbärfell', 'polar bear fur', '🐻‍❄️', 'white'],
    ['Piratenschatten', 'pirate shadow', '🏴‍☠️', 'black'], ['Elefantenhaut', 'elephant skin', '🐘', 'gray'], ['heller Sommerhimmel', 'pale summer sky', '🌤️', 'light-blue'],
    ['junger Salat', 'young lettuce', '🥬', 'light-green'], ['Vanilleeis', 'vanilla ice cream', '🍨', 'light-yellow'], ['Pfirsichfrucht', 'peach fruit', '🍑', 'peach'],
    ['Fliederblüte', 'lilac flower', '🪻', 'lilac'], ['Sandstrand', 'sandy beach', '🏖️', 'beige'], ['tiefer Nachthimmel', 'deep night sky', '🌌', 'dark-blue'],
  ];
  extraObjects.forEach(([deObject, enObject, emoji, correctId]) => {
    const color = colorById[correctId];
    add({ promptDe: `Welche Farbe passt am besten zu ${deObject}?`, promptEn: `Which color best matches the ${enObject}?`, visual: emoji, correctId, successDe: `Sehr gut! Hier passt ${color.de}.`, successEn: `Very good! ${color.en} matches here.`, hintDe: `Schau dir ${deObject} genau vor deinem inneren Auge an.`, hintEn: `Picture the ${enObject} carefully in your mind.` });
  });
  return questions;
}

const animals = [
  ['cat', 'Katze', 'cat', '🐱', 'schnurrt und Miau sagt', 'purrs and says meow', 'gern Mäuse jagt', 'likes to hunt mice'],
  ['dog', 'Hund', 'dog', '🐶', 'bellt und mit dem Schwanz wedelt', 'barks and wags its tail', 'Haus und Garten bewachen kann', 'can guard a home and garden'],
  ['cow', 'Kuh', 'cow', '🐮', 'Milch gibt und Muh sagt', 'gives milk and says moo', 'auf einer grünen Weide grast', 'grazes in a green meadow'],
  ['horse', 'Pferd', 'horse', '🐴', 'galoppiert und Reiter tragen kann', 'gallops and can carry riders', 'in einem Stall schläft', 'sleeps in a stable'],
  ['pig', 'Schwein', 'pig', '🐷', 'eine runde Schnauze hat', 'has a round snout', 'sich gern im Schlamm wälzt', 'likes to roll in mud'],
  ['sheep', 'Schaf', 'sheep', '🐑', 'weiche Wolle trägt', 'wears soft wool', 'mit anderen in einer Herde lebt', 'lives with others in a flock'],
  ['goat', 'Ziege', 'goat', '🐐', 'Hörner hat und gut klettert', 'has horns and climbs well', 'Kräuter an steilen Hängen frisst', 'eats plants on steep hills'],
  ['chicken', 'Huhn', 'chicken', '🐔', 'Eier legt und gackert', 'lays eggs and clucks', 'im Hof nach Körnern scharrt', 'scratches for grain in a yard'],
  ['duck', 'Ente', 'duck', '🦆', 'quakt und Watschelfüße hat', 'quacks and has webbed feet', 'auf einem Teich schwimmt', 'swims on a pond'],
  ['bee', 'Biene', 'bee', '🐝', 'summt und Honig macht', 'buzzes and makes honey', 'Blüten besucht und Pollen sammelt', 'visits flowers and collects pollen'],
  ['butterfly', 'Schmetterling', 'butterfly', '🦋', 'bunte Flügel hat', 'has colorful wings', 'sein Leben als Raupe beginnt', 'begins life as a caterpillar'],
  ['ant', 'Ameise', 'ant', '🐜', 'viel mehr als ihr Gewicht tragen kann', 'can carry much more than its weight', 'in einer großen Kolonie lebt', 'lives in a large colony'],
  ['snail', 'Schnecke', 'snail', '🐌', 'ein Haus auf dem Rücken trägt', 'carries a house on its back', 'eine glänzende Spur hinterlässt', 'leaves a shiny trail'],
  ['frog', 'Frosch', 'frog', '🐸', 'weit springt und quakt', 'jumps far and croaks', 'am Rand eines Teichs lebt', 'lives beside a pond'],
  ['turtle', 'Schildkröte', 'turtle', '🐢', 'einen harten Panzer hat', 'has a hard shell', 'langsam läuft und sehr alt werden kann', 'moves slowly and can live a long time'],
  ['fish', 'Fisch', 'fish', '🐟', 'mit Kiemen unter Wasser atmet', 'breathes underwater with gills', 'mit Flossen durch das Wasser schwimmt', 'swims through water with fins'],
  ['dolphin', 'Delfin', 'dolphin', '🐬', 'sehr klug ist und aus dem Meer springt', 'is very clever and leaps from the sea', 'als Säugetier Luft atmen muss', 'must breathe air because it is a mammal'],
  ['whale', 'Wal', 'whale', '🐋', 'das größte Tier der Erde ist', 'is the largest animal on Earth', 'durch ein Blasloch atmet', 'breathes through a blowhole'],
  ['shark', 'Hai', 'shark', '🦈', 'mehrere Reihen scharfer Zähne hat', 'has several rows of sharp teeth', 'als Raubfisch im Meer lebt', 'lives in the sea as a predatory fish'],
  ['octopus', 'Oktopus', 'octopus', '🐙', 'acht Arme besitzt', 'has eight arms', 'bei Gefahr eine Tintenwolke macht', 'makes an ink cloud when in danger'],
  ['crab', 'Krabbe', 'crab', '🦀', 'seitwärts läuft und Scheren hat', 'walks sideways and has claws', 'zwischen Felsen am Meer wohnt', 'lives among rocks by the sea'],
  ['penguin', 'Pinguin', 'penguin', '🐧', 'watschelt und nicht fliegen kann', 'waddles and cannot fly', 'im kalten Wasser besonders gut schwimmt', 'swims especially well in cold water'],
  ['polar-bear', 'Eisbär', 'polar bear', '🐻‍❄️', 'weißes Fell und große Tatzen hat', 'has white fur and large paws', 'in der kalten Arktis lebt', 'lives in the cold Arctic'],
  ['lion', 'Löwe', 'lion', '🦁', 'eine große Mähne hat und brüllt', 'has a large mane and roars', 'in einem Rudel in Afrika lebt', 'lives in a pride in Africa'],
  ['tiger', 'Tiger', 'tiger', '🐯', 'schwarze Streifen im Fell hat', 'has black stripes on its fur', 'allein durch Wälder schleicht', 'stalks alone through forests'],
  ['elephant', 'Elefant', 'elephant', '🐘', 'einen langen Rüssel benutzt', 'uses a long trunk', 'das größte Tier an Land ist', 'is the largest animal on land'],
  ['giraffe', 'Giraffe', 'giraffe', '🦒', 'den längsten Hals hat', 'has the longest neck', 'Blätter hoch oben in Bäumen frisst', 'eats leaves high in trees'],
  ['zebra', 'Zebra', 'zebra', '🦓', 'schwarz-weiße Streifen trägt', 'wears black and white stripes', 'in Herden durch die Savanne zieht', 'travels across the savanna in herds'],
  ['monkey', 'Affe', 'monkey', '🐒', 'geschickt auf Bäume klettert', 'climbs trees skillfully', 'Früchte mit seinen Händen greifen kann', 'can grab fruit with its hands'],
  ['kangaroo', 'Känguru', 'kangaroo', '🦘', 'sein Junges im Beutel trägt', 'carries its baby in a pouch', 'mit großen Sprüngen durch Australien hüpft', 'hops across Australia in great leaps'],
  ['koala', 'Koala', 'koala', '🐨', 'fast nur Eukalyptusblätter frisst', 'eats mostly eucalyptus leaves', 'hoch oben in australischen Bäumen schläft', 'sleeps high in Australian trees'],
  ['camel', 'Kamel', 'camel', '🐫', 'Höcker auf dem Rücken hat', 'has humps on its back', 'lange ohne Wasser durch die Wüste wandert', 'crosses the desert for a long time without water'],
  ['owl', 'Eule', 'owl', '🦉', 'nachts mit großen Augen jagt', 'hunts at night with large eyes', 'fast lautlos durch die Dunkelheit fliegt', 'flies almost silently through the darkness'],
  ['bat', 'Fledermaus', 'bat', '🦇', 'kopfüber schläft', 'sleeps upside down', 'sich mit Echo in der Nacht orientiert', 'uses echoes to find its way at night'],
  ['fox', 'Fuchs', 'fox', '🦊', 'einen buschigen roten Schwanz hat', 'has a bushy red tail', 'seine Jungen in einem Bau großzieht', 'raises its young in a den'],
  ['hedgehog', 'Igel', 'hedgehog', '🦔', 'viele spitze Stacheln trägt', 'has many sharp spines', 'sich bei Gefahr zu einer Kugel rollt', 'rolls into a ball when in danger'],
  ['parrot', 'Papagei', 'parrot', '🦜', 'bunte Federn hat und Wörter nachahmen kann', 'has colorful feathers and can copy words', 'in warmen Regenwäldern lebt', 'lives in warm rainforests'],
  ['peacock', 'Pfau', 'peacock', '🦚', 'ein großes Rad aus Federn zeigt', 'fans out a huge display of feathers', 'mit einem lauten Ruf auf sich aufmerksam macht', 'uses a loud call to get attention'],
  ['flamingo', 'Flamingo', 'flamingo', '🦩', 'rosa Federn und lange Beine hat', 'has pink feathers and long legs', 'oft auf einem Bein im flachen Wasser steht', 'often stands on one leg in shallow water'],
  ['crocodile', 'Krokodil', 'crocodile', '🐊', 'ein großes Maul und einen starken Schwanz hat', 'has a huge mouth and a strong tail', 'an warmen Flüssen und Seen lebt', 'lives around warm rivers and lakes'],
  ['snake', 'Schlange', 'snake', '🐍', 'ohne Beine über den Boden gleitet', 'slides along the ground without legs', 'ihre Haut regelmäßig abstreift', 'sheds its skin regularly'],
  ['spider', 'Spinne', 'spider', '🕷️', 'acht Beine hat und Netze baut', 'has eight legs and builds webs', 'kleine Insekten in ihrem Netz fängt', 'catches small insects in its web'],
  ['squirrel', 'Eichhörnchen', 'squirrel', '🐿️', 'einen buschigen Schwanz hat und Nüsse sammelt', 'has a bushy tail and gathers nuts', 'flink von Ast zu Ast springt', 'leaps quickly from branch to branch'],
  ['deer', 'Hirsch', 'deer', '🦌', 'ein großes Geweih tragen kann', 'can grow large antlers', 'leise durch Wald und Wiesen zieht', 'moves quietly through woods and meadows'],
  ['wolf', 'Wolf', 'wolf', '🐺', 'heult und einem Hund ähnlich sieht', 'howls and looks similar to a dog', 'gemeinsam mit seinem Rudel jagt', 'hunts together with its pack'],
];

function buildAnimals() {
  const questions = [];
  let number = 1;
  const addQuestion = (animal, clueDe, clueEn, variant) => {
    const index = animals.indexOf(animal);
    const choices = rotate([animal, animals[(index + 11) % animals.length], animals[(index + 23) % animals.length]], (index + variant) % 3);
    const id = `au${number++}`;
    questions.push({
      id,
      prompt: localized(`Welches Tier ${clueDe}?`, `Which animal ${clueEn}?`),
      // The spoken clue is the task; the three animal answer pictures are its visuals.
      // An unrelated decorative picture here previously looked like part of the clue.
      visual: '',
      answers: choices.map(([animalId, , , emoji]) => ({ id: animalId, label: emoji })),
      correctAnswerId: animal[0],
      success: localized(`Super! Gesucht war: ${animal[1]}.`, `Great! The answer is ${animal[2]}.`),
      hint: localized(`Denk an dieses Merkmal: Es ${clueDe}.`, `Remember this clue: It ${clueEn}.`),
    });
  };
  animals.forEach((animal) => addQuestion(animal, animal[4], animal[5], 0));
  animals.forEach((animal) => addQuestion(animal, animal[6], animal[7], 1));
  return questions;
}

function buildLetters() {
  const questions = [];
  let number = 1;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const add = (promptDe, promptEn, visual, correct, options, successDe, successEn, hintDe, hintEn) => {
    questions.push({ id: `lu${number++}`, prompt: localized(promptDe, promptEn), visual, answers: options.map((letter) => ({ id: letter, label: letter })), correctAnswerId: correct, success: localized(successDe, successEn), hint: localized(hintDe, hintEn) });
  };
  alphabet.forEach((letter, index) => {
    const options = rotate([letter, alphabet[(index + 5) % 26], alphabet[(index + 11) % 26]], index % 3);
    add(`Tippe auf den großen Buchstaben ${letter}.`, `Tap the capital letter ${letter}.`, letter, letter, options, `Richtig! Das ist das große ${letter}.`, `Correct! That is capital ${letter}.`, `Suche genau nach der Form von ${letter}.`, `Look carefully for the shape of ${letter}.`);
  });
  alphabet.forEach((capital, index) => {
    const letter = capital.toLowerCase();
    const options = rotate([letter, alphabet[(index + 7) % 26].toLowerCase(), alphabet[(index + 13) % 26].toLowerCase()], (index + 1) % 3);
    add(`Finde den kleinen Buchstaben ${letter}.`, `Find the lowercase letter ${letter}.`, `${capital} · ${letter}`, letter, options, `Prima! Das ist das kleine ${letter}.`, `Great! That is lowercase ${letter}.`, `Das kleine ${letter} gehört zum großen ${capital}.`, `Lowercase ${letter} belongs with capital ${capital}.`);
  });
  for (let start = 0; start < 20; start += 1) {
    const sequence = alphabet.slice(start, start + 4);
    const correct = sequence[2];
    const options = rotate([correct, alphabet[(start + 5) % 26], alphabet[(start + 7) % 26]], start % 3);
    add(`Welcher Buchstabe fehlt zwischen ${sequence[1]} und ${sequence[3]}?`, `Which letter is missing between ${sequence[1]} and ${sequence[3]}?`, `${sequence[0]} · ${sequence[1]} · _ · ${sequence[3]}`, correct, options, `Genau! In die Lücke gehört ${correct}.`, `Exactly! ${correct} belongs in the gap.`, `Sage ${sequence.join(', ')} langsam auf.`, `Say ${sequence.join(', ')} slowly.`);
  }
  const initials = [
    ['A', 'Apfel', 'apple', '🍎'], ['B', 'Banane', 'banana', '🍌'], ['D', 'Delfin', 'dolphin', '🐬'], ['E', 'Elefant', 'elephant', '🐘'],
    ['F', 'Fisch', 'fish', '🐟'], ['G', 'Giraffe', 'giraffe', '🦒'], ['H', 'Hotel', 'hotel', '🏨'], ['I', 'Insel', 'island', '🏝️'],
    ['J', 'Jaguar', 'jaguar', '🐆'], ['K', 'Koala', 'koala', '🐨'], ['L', 'Löwe', 'lion', '🦁'], ['M', 'Maus', 'mouse', '🐭'],
    ['N', 'Nase', 'nose', '👃'], ['O', 'Orange', 'orange', '🍊'], ['P', 'Panda', 'panda', '🐼'], ['R', 'Radio', 'radio', '📻'],
    ['S', 'Sonne', 'sun', '☀️'], ['T', 'Tiger', 'tiger', '🐯'],
  ];
  initials.forEach(([correct, deWord, enWord, emoji], index) => {
    const alphabetIndex = alphabet.indexOf(correct);
    const options = rotate([correct, alphabet[(alphabetIndex + 4) % 26], alphabet[(alphabetIndex + 9) % 26]], index % 3);
    add(`Mit welchem Buchstaben beginnt ${deWord}?`, `Which letter does ${enWord} begin with?`, emoji, correct, options, `${deWord} beginnt mit ${correct}.`, `${enWord} begins with ${correct}.`, `Höre genau: ${correct}, ${deWord}.`, `Listen closely: ${correct}, ${enWord}.`);
  });
  return questions;
}

const words = [
  ['Hund', 'Dog', '🐶', 'dem Tier, das bellt', 'the animal that barks'], ['Katze', 'Cat', '🐱', 'dem Tier, das schnurrt', 'the animal that purrs'], ['Maus', 'Mouse', '🐭', 'dem kleinen Tier mit langem Schwanz', 'the small animal with a long tail'],
  ['Hase', 'Rabbit', '🐰', 'dem Tier mit langen Ohren', 'the animal with long ears'], ['Fuchs', 'Fox', '🦊', 'dem Tier mit buschigem roten Schwanz', 'the animal with a bushy red tail'], ['Bär', 'Bear', '🐻', 'dem großen Tier, das Honig mag', 'the large animal that likes honey'],
  ['Löwe', 'Lion', '🦁', 'dem Tier mit einer Mähne', 'the animal with a mane'], ['Tiger', 'Tiger', '🐯', 'dem Tier mit schwarzen Streifen', 'the animal with black stripes'], ['Elefant', 'Elephant', '🐘', 'dem Tier mit einem Rüssel', 'the animal with a trunk'],
  ['Giraffe', 'Giraffe', '🦒', 'dem Tier mit sehr langem Hals', 'the animal with a very long neck'], ['Zebra', 'Zebra', '🦓', 'dem schwarz-weiß gestreiften Tier', 'the black and white striped animal'], ['Affe', 'Monkey', '🐒', 'dem Tier, das geschickt klettert', 'the animal that climbs skillfully'],
  ['Kuh', 'Cow', '🐮', 'dem Bauernhoftier, das Milch gibt', 'the farm animal that gives milk'], ['Schwein', 'Pig', '🐷', 'dem Bauernhoftier mit runder Schnauze', 'the farm animal with a round snout'], ['Pferd', 'Horse', '🐴', 'dem Tier, auf dem Menschen reiten', 'the animal people can ride'],
  ['Schaf', 'Sheep', '🐑', 'dem Tier mit weicher Wolle', 'the animal with soft wool'], ['Ziege', 'Goat', '🐐', 'dem Tier mit Hörnern, das gut klettert', 'the horned animal that climbs well'], ['Huhn', 'Chicken', '🐔', 'dem Vogel, der Eier legt und gackert', 'the bird that lays eggs and clucks'],
  ['Ente', 'Duck', '🦆', 'dem Vogel, der quakt und schwimmt', 'the bird that quacks and swims'], ['Eule', 'Owl', '🦉', 'dem Vogel, der nachts wach ist', 'the bird that is awake at night'], ['Fisch', 'Fish', '🐟', 'dem Tier mit Flossen und Kiemen', 'the animal with fins and gills'],
  ['Wal', 'Whale', '🐋', 'dem riesigen Tier im Meer', 'the enormous animal in the sea'], ['Delfin', 'Dolphin', '🐬', 'dem klugen Meerestier, das springt', 'the clever sea animal that leaps'], ['Hai', 'Shark', '🦈', 'dem Fisch mit vielen scharfen Zähnen', 'the fish with many sharp teeth'],
  ['Oktopus', 'Octopus', '🐙', 'dem Meerestier mit acht Armen', 'the sea animal with eight arms'], ['Krabbe', 'Crab', '🦀', 'dem Meerestier, das seitwärts läuft', 'the sea animal that walks sideways'], ['Biene', 'Bee', '🐝', 'dem Insekt, das Honig macht', 'the insect that makes honey'],
  ['Schmetterling', 'Butterfly', '🦋', 'dem Insekt mit bunten Flügeln', 'the insect with colorful wings'], ['Schnecke', 'Snail', '🐌', 'dem langsamen Tier mit Haus', 'the slow animal with a shell'], ['Frosch', 'Frog', '🐸', 'dem grünen Tier, das quakt und hüpft', 'the green animal that croaks and hops'],
  ['Schildkröte', 'Turtle', '🐢', 'dem langsamen Tier mit hartem Panzer', 'the slow animal with a hard shell'], ['Apfel', 'Apple', '🍎', 'der runden roten Frucht', 'the round red fruit'], ['Birne', 'Pear', '🍐', 'der unten breiten grünen Frucht', 'the green fruit that is wide at the bottom'],
  ['Banane', 'Banana', '🍌', 'der langen gelben Frucht', 'the long yellow fruit'], ['Erdbeere', 'Strawberry', '🍓', 'der kleinen roten Frucht mit grünen Blättern', 'the small red fruit with green leaves'], ['Kirsche', 'Cherry', '🍒', 'der kleinen roten Frucht am Stiel', 'the small red fruit on a stem'],
  ['Traube', 'Grape', '🍇', 'der Frucht, die in einer Rispe wächst', 'the fruit that grows in a bunch'], ['Zitrone', 'Lemon', '🍋', 'der sauren gelben Frucht', 'the sour yellow fruit'], ['Karotte', 'Carrot', '🥕', 'dem langen orangefarbenen Gemüse', 'the long orange vegetable'],
  ['Tomate', 'Tomato', '🍅', 'der roten Frucht im Salat', 'the red fruit used in salad'], ['Brot', 'Bread', '🍞', 'dem Lebensmittel aus der Bäckerei', 'the food from a bakery'], ['Käse', 'Cheese', '🧀', 'dem gelben Lebensmittel mit Löchern', 'the yellow food with holes'],
  ['Milch', 'Milk', '🥛', 'dem weißen Getränk', 'the white drink'], ['Wasser', 'Water', '💧', 'dem Getränk gegen Durst', 'the drink that quenches thirst'], ['Haus', 'House', '🏠', 'dem Gebäude, in dem Menschen wohnen', 'the building where people live'],
  ['Schule', 'School', '🏫', 'dem Ort, an dem Kinder lernen', 'the place where children learn'], ['Auto', 'Car', '🚗', 'dem Fahrzeug für die Straße', 'the vehicle used on roads'], ['Bus', 'Bus', '🚌', 'dem großen Fahrzeug für viele Menschen', 'the large vehicle for many people'],
  ['Zug', 'Train', '🚆', 'dem Fahrzeug auf Schienen', 'the vehicle that runs on rails'], ['Fahrrad', 'Bicycle', '🚲', 'dem Fahrzeug mit zwei Rädern und Pedalen', 'the vehicle with two wheels and pedals'], ['Boot', 'Boat', '⛵', 'dem Fahrzeug auf dem Wasser', 'the vehicle used on water'],
  ['Flugzeug', 'Airplane', '✈️', 'dem Fahrzeug, das durch den Himmel fliegt', 'the vehicle that flies through the sky'], ['Sonne', 'Sun', '☀️', 'dem hellen Himmelskörper am Tag', 'the bright object in the daytime sky'], ['Mond', 'Moon', '🌙', 'dem Himmelskörper, den wir nachts sehen', 'the object we see in the night sky'],
  ['Stern', 'Star', '⭐', 'dem kleinen Lichtpunkt am Nachthimmel', 'the small point of light in the night sky'], ['Wolke', 'Cloud', '☁️', 'dem weißen Gebilde, aus dem Regen fallen kann', 'the white shape that can bring rain'], ['Baum', 'Tree', '🌳', 'der großen Pflanze mit Stamm', 'the large plant with a trunk'],
  ['Blume', 'Flower', '🌸', 'der Pflanze, die bunt blüht', 'the plant with a colorful bloom'], ['Gras', 'Grass', '🌱', 'den grünen Halmen auf dem Boden', 'the green blades covering the ground'], ['Berg', 'Mountain', '⛰️', 'der sehr hohen Landschaftsform', 'the very high landform'],
  ['Fluss', 'River', '🏞️', 'dem Wasser, das durch die Landschaft fließt', 'the water that flows across the land'], ['Buch', 'Book', '📘', 'dem Gegenstand mit Seiten zum Lesen', 'the object with pages to read'], ['Stift', 'Pencil', '✏️', 'dem Gegenstand zum Schreiben und Malen', 'the object used for writing and drawing'],
  ['Ball', 'Ball', '⚽', 'dem runden Spielzeug, das rollt', 'the round toy that rolls'], ['Puppe', 'Doll', '🪆', 'der Spielfigur mit Gesicht und Kleidung', 'the toy figure with a face and clothes'], ['Trommel', 'Drum', '🥁', 'dem Instrument, auf das man schlägt', 'the instrument you hit to make a beat'],
  ['Uhr', 'Clock', '🕐', 'dem Gegenstand, der die Zeit zeigt', 'the object that tells the time'], ['Schlüssel', 'Key', '🔑', 'dem kleinen Gegenstand zum Öffnen einer Tür', 'the small object that opens a door'], ['Schuh', 'Shoe', '👟', 'dem Kleidungsstück für den Fuß', 'the clothing worn on a foot'],
  ['Hut', 'Hat', '🧢', 'dem Kleidungsstück für den Kopf', 'the clothing worn on the head'], ['Hand', 'Hand', '✋', 'dem Körperteil mit fünf Fingern', 'the body part with five fingers'], ['Herz', 'Heart', '❤️', 'dem Organ, das im Brustkorb schlägt', 'the organ that beats inside the chest'],
  ['Socke', 'Sock', '🧦', 'dem weichen Kleidungsstück im Schuh', 'the soft clothing worn inside a shoe'], ['Jacke', 'Jacket', '🧥', 'dem warmen Kleidungsstück für draußen', 'the warm clothing worn outside'], ['Hose', 'Pants', '👖', 'dem Kleidungsstück mit zwei Beinen', 'the clothing with two legs'],
  ['Kleid', 'Dress', '👗', 'dem einteiligen Kleidungsstück', 'the one-piece item of clothing'], ['Löffel', 'Spoon', '🥄', 'dem Besteck für Suppe', 'the utensil used for soup'], ['Gabel', 'Fork', '🍴', 'dem Besteck mit Zinken', 'the utensil with prongs'],
  ['Teller', 'Plate', '🍽️', 'dem flachen Geschirr für Essen', 'the flat dish used for food'], ['Tasse', 'Cup', '☕', 'dem Gefäß mit Henkel zum Trinken', 'the drinking container with a handle'], ['Bett', 'Bed', '🛏️', 'dem Möbelstück zum Schlafen', 'the furniture used for sleeping'],
  ['Stuhl', 'Chair', '🪑', 'dem Möbelstück zum Sitzen', 'the furniture used for sitting'], ['Tisch', 'Table', '🪑 ━━━ 🪑', 'dem Möbelstück, auf dem gegessen wird', 'the furniture people eat on'], ['Tür', 'Door', '🚪', 'dem beweglichen Eingang zu einem Zimmer', 'the movable entrance to a room'],
  ['Fenster', 'Window', '🪟', 'der Öffnung, durch die Licht ins Zimmer kommt', 'the opening that lets light into a room'], ['Seife', 'Soap', '🧼', 'dem Gegenstand zum Händewaschen', 'the item used to wash hands'], ['Zahnbürste', 'Toothbrush', '🪥', 'dem Gegenstand zum Zähneputzen', 'the item used to brush teeth'],
  ['Kamm', 'Comb', '🪮', 'dem Gegenstand zum Ordnen der Haare', 'the item used to tidy hair'], ['Rucksack', 'Backpack', '🎒', 'der Tasche, die man auf dem Rücken trägt', 'the bag carried on the back'], ['Regenschirm', 'Umbrella', '☂️', 'dem Gegenstand, der vor Regen schützt', 'the item that protects you from rain'],
];

function buildWords() {
  return words.map((word, index) => {
    const [de, en, emoji, clueDe, clueEn] = word;
    const choices = rotate([word, words[(index + 17) % words.length], words[(index + 41) % words.length]], index % 3);
    return {
      id: `wu${index + 1}`,
      prompt: localized(`Welches Wort passt zu ${clueDe}?`, `Which word matches ${clueEn}?`),
      visual: emoji,
      answers: choices.map(([answerDe, answerEn]) => localizedAnswer(answerEn.toLowerCase().replace(/[^a-z]/g, '-'), answerDe, answerEn)),
      correctAnswerId: en.toLowerCase().replace(/[^a-z]/g, '-'),
      success: localized(`Richtig! Das Wort heißt ${de}.`, `Correct! The word is ${en}.`),
      hint: localized(`Das deutsche Wort beginnt mit ${de[0]}.`, `The English word begins with ${en[0]}.`),
    };
  });
}

const twoChoices = (correct, distractor, seed) => rotate([correct, distractor], seed % 2);

const easyNumberAnswers = (correct, seed) => {
  const distractor = correct === 5 ? 4 : correct + 1;
  return twoChoices(correct, distractor, seed).map((value) => ({ id: String(value), label: String(value) }));
};

function buildDiscovererNumbers() {
  const questions = [];
  let number = 1;
  const add = ({ promptDe, promptEn, visual = '', correctAnswerId, answers, successDe, successEn, hintDe, hintEn }) => {
    questions.push({
      id: `dnu${number++}`,
      prompt: localized(promptDe, promptEn),
      visual,
      answers,
      correctAnswerId,
      success: localized(successDe, successEn),
      hint: localized(hintDe, hintEn),
    });
  };

  const numberPlaces = [
    ['an der Schatzkiste', 'by the treasure chest'], ['am Segel', 'by the sail'], ['am Wegweiser', 'by the signpost'], ['auf der Landkarte', 'on the map'], ['in der Höhle', 'in the cave'],
    ['am Boot', 'by the boat'], ['bei der Fahne', 'by the flag'], ['an der Brücke', 'by the bridge'], ['am Rucksack', 'by the backpack'], ['am Leuchtturm', 'by the lighthouse'],
  ];
  numberPlaces.forEach(([placeDe, placeEn], index) => {
    const correct = (index % 5) + 1;
    add({
      promptDe: `Tippe auf die Zahl ${correct} ${placeDe}.`,
      promptEn: `Tap number ${correct} ${placeEn}.`,
      correctAnswerId: String(correct),
      answers: easyNumberAnswers(correct, index),
      successDe: `Ja! Das ist die ${correct}.`,
      successEn: `Yes! That is ${correct}.`,
      hintDe: `Navi sagt die Zahl noch einmal: ${correct}.`,
      hintEn: `Navi says the number again: ${correct}.`,
    });
  });

  words.slice(0, 50).forEach(([de, en, emoji], index) => {
    const correct = (index % 5) + 1;
    add({
      promptDe: `Wie viele ${de}-Bilder siehst du?`,
      promptEn: `How many ${en} pictures can you see?`,
      visual: Array(correct).fill(emoji).join(' '),
      correctAnswerId: String(correct),
      answers: easyNumberAnswers(correct, index + 1),
      successDe: `Richtig gezählt! Es sind ${correct}.`,
      successEn: `Great counting! There are ${correct}.`,
      hintDe: 'Zeige beim Zählen auf jedes Bild.',
      hintEn: 'Point to every picture while you count.',
    });
  });

  words.slice(50, 80).forEach(([de, en, emoji], index) => {
    const small = (index % 3) + 1;
    const large = small + 1;
    const findMore = index % 2 === 0;
    const correct = findMore ? large : small;
    const distractor = findMore ? small : large;
    const correctId = `group-${index}-correct`;
    const distractorId = `group-${index}-other`;
    add({
      promptDe: `Welche Karte zeigt ${findMore ? 'mehr' : 'weniger'} ${de}-Bilder?`,
      promptEn: `Which card shows ${findMore ? 'more' : 'fewer'} ${en} pictures?`,
      correctAnswerId: correctId,
      answers: twoChoices(
        { id: correctId, label: Array(correct).fill(emoji).join(' ') },
        { id: distractorId, label: Array(distractor).fill(emoji).join(' ') },
        index,
      ),
      successDe: `Genau! ${correct} ist ${findMore ? 'mehr' : 'weniger'} als ${distractor}.`,
      successEn: `Exactly! ${correct} is ${findMore ? 'more' : 'fewer'} than ${distractor}.`,
      hintDe: 'Zähle beide Bildgruppen langsam.',
      hintEn: 'Count both picture groups slowly.',
    });
  });

  return questions;
}

const easyColorObjects = [
  ['red-apple', 'Apfel', 'apple', '🍎', 'red'], ['strawberry', 'Erdbeere', 'strawberry', '🍓', 'red'], ['cherries', 'Kirschen', 'cherries', '🍒', 'red'], ['tomato', 'Tomate', 'tomato', '🍅', 'red'], ['red-heart', 'rotes Herz', 'red heart', '❤️', 'red'], ['fire-truck', 'Feuerwehrauto', 'fire truck', '🚒', 'red'],
  ['blue-circle', 'blauer Kreis', 'blue circle', '🔵', 'blue'], ['blue-heart', 'blaues Herz', 'blue heart', '💙', 'blue'], ['blueberries', 'Heidelbeeren', 'blueberries', '🫐', 'blue'], ['water-drop', 'Wassertropfen', 'water drop', '💧', 'blue'], ['blue-square', 'blaues Quadrat', 'blue square', '🟦', 'blue'], ['blue-diamond', 'blauer Diamant', 'blue diamond', '🔷', 'blue'],
  ['green-circle', 'grüner Kreis', 'green circle', '🟢', 'green'], ['green-heart', 'grünes Herz', 'green heart', '💚', 'green'], ['green-square', 'grünes Quadrat', 'green square', '🟩', 'green'], ['green-apple', 'grüner Apfel', 'green apple', '🍏', 'green'], ['broccoli', 'Brokkoli', 'broccoli', '🥦', 'green'], ['cucumber', 'Gurke', 'cucumber', '🥒', 'green'],
  ['yellow-circle', 'gelber Kreis', 'yellow circle', '🟡', 'yellow'], ['yellow-heart', 'gelbes Herz', 'yellow heart', '💛', 'yellow'], ['yellow-square', 'gelbes Quadrat', 'yellow square', '🟨', 'yellow'], ['lemon', 'Zitrone', 'lemon', '🍋', 'yellow'], ['banana', 'Banane', 'banana', '🍌', 'yellow'], ['star', 'Stern', 'star', '🌟', 'yellow'],
  ['orange-circle', 'orangefarbener Kreis', 'orange circle', '🟠', 'orange'], ['orange-heart', 'orangefarbenes Herz', 'orange heart', '🧡', 'orange'], ['orange-square', 'orangefarbenes Quadrat', 'orange square', '🟧', 'orange'], ['orange-fruit', 'Orange', 'orange fruit', '🍊', 'orange'], ['carrot', 'Karotte', 'carrot', '🥕', 'orange'], ['pumpkin', 'Kürbis', 'pumpkin', '🎃', 'orange'],
  ['purple-circle', 'lilafarbener Kreis', 'purple circle', '🟣', 'purple'], ['purple-heart', 'lilafarbenes Herz', 'purple heart', '💜', 'purple'], ['purple-square', 'lilafarbenes Quadrat', 'purple square', '🟪', 'purple'], ['grapes', 'Weintrauben', 'grapes', '🍇', 'purple'], ['eggplant', 'Aubergine', 'eggplant', '🍆', 'purple'],
  ['pink-heart', 'rosa Herz', 'pink heart', '🩷', 'pink'], ['pink-flower', 'rosa Blume', 'pink flower', '🌸', 'pink'], ['flamingo', 'Flamingo', 'flamingo', '🦩', 'pink'], ['piglet', 'Ferkel', 'piglet', '🐷', 'pink'], ['pink-bow', 'rosa Schleife', 'pink bow', '🎀', 'pink'],
  ['brown-circle', 'brauner Kreis', 'brown circle', '🟤', 'brown'], ['brown-heart', 'braunes Herz', 'brown heart', '🤎', 'brown'], ['brown-bear', 'Braunbär', 'brown bear', '🐻', 'brown'], ['chocolate', 'Schokolade', 'chocolate', '🍫', 'brown'], ['hazelnut', 'Haselnuss', 'hazelnut', '🌰', 'brown'],
];

function buildDiscovererColors() {
  const questions = [];
  let number = 1;
  const baseColors = colors.filter((color) => ['red', 'blue', 'green', 'yellow', 'orange', 'purple', 'pink', 'brown'].includes(color.id));
  const add = ({ promptDe, promptEn, visual = '', answers, correctAnswerId, successDe, successEn, hintDe, hintEn }) => {
    questions.push({ id: `dcu${number++}`, prompt: localized(promptDe, promptEn), visual, answers, correctAnswerId, success: localized(successDe, successEn), hint: localized(hintDe, hintEn) });
  };

  easyColorObjects.forEach(([objectId, de, en, emoji, colorId], index) => {
    const correct = colorById[colorId];
    const distractor = baseColors[(baseColors.findIndex((color) => color.id === colorId) + 3) % baseColors.length];
    add({
      promptDe: `Welche Farbe siehst du bei diesem Bild: ${de}?`,
      promptEn: `Which color can you see in this picture: ${en}?`,
      visual: emoji,
      correctAnswerId: colorId,
      answers: twoChoices(localizedAnswer(correct.id, correct.de, correct.en, correct.hex), localizedAnswer(distractor.id, distractor.de, distractor.en, distractor.hex), index),
      successDe: `Richtig! Die Farbe ist ${correct.de}.`,
      successEn: `Correct! The color is ${correct.en}.`,
      hintDe: 'Schau dir die Farbe des Bildes genau an.',
      hintEn: 'Look carefully at the color in the picture.',
    });
  });

  easyColorObjects.forEach(([objectId, de, en, emoji, colorId], index) => {
    const correct = colorById[colorId];
    const otherObjects = easyColorObjects.filter((item) => item[4] !== colorId);
    const other = otherObjects[(index * 7) % otherObjects.length];
    add({
      promptDe: `Finde dieses Bild: ${de}. Seine Farbe ist ${correct.de}.`,
      promptEn: `Find this picture: ${en}. Its color is ${correct.en}.`,
      correctAnswerId: objectId,
      answers: twoChoices({ id: objectId, label: emoji }, { id: other[0], label: other[3] }, index + 1),
      successDe: 'Prima! Du hast das richtige Bild gefunden.',
      successEn: 'Great! You found the right picture.',
      hintDe: `Suche das Bild in ${correct.de}.`,
      hintEn: `Look for the picture in ${correct.en}.`,
    });
  });

  return questions;
}

const easyAnimals = [
  ['cat', 'Katze', 'cat', '🐱', 'Miau sagt', 'says meow', 'Schnurrhaare hat', 'has whiskers'],
  ['dog', 'Hund', 'dog', '🐶', 'Wau sagt', 'says woof', 'mit dem Schwanz wedelt', 'wags its tail'],
  ['cow', 'Kuh', 'cow', '🐮', 'Muh sagt', 'says moo', 'Milch gibt', 'gives milk'],
  ['horse', 'Pferd', 'horse', '🐴', 'wiehert', 'neighs', 'schnell galoppieren kann', 'can gallop fast'],
  ['pig', 'Schwein', 'pig', '🐷', 'grunzt', 'oinks', 'eine runde Schnauze hat', 'has a round snout'],
  ['sheep', 'Schaf', 'sheep', '🐑', 'Mäh sagt', 'says baa', 'weiche Wolle hat', 'has soft wool'],
  ['goat', 'Ziege', 'goat', '🐐', 'meckert', 'bleats', 'Hörner hat', 'has horns'],
  ['chicken', 'Huhn', 'chicken', '🐔', 'gackert', 'clucks', 'Eier legt', 'lays eggs'],
  ['duck', 'Ente', 'duck', '🦆', 'quakt', 'quacks', 'auf dem Teich schwimmt', 'swims on a pond'],
  ['bee', 'Biene', 'bee', '🐝', 'summt', 'buzzes', 'Honig macht', 'makes honey'],
  ['butterfly', 'Schmetterling', 'butterfly', '🦋', 'von Blume zu Blume fliegt', 'flies from flower to flower', 'bunte Flügel hat', 'has colorful wings'],
  ['snail', 'Schnecke', 'snail', '🐌', 'ganz langsam kriecht', 'crawls very slowly', 'ihr Haus auf dem Rücken trägt', 'carries its shell on its back'],
  ['frog', 'Frosch', 'frog', '🐸', 'quakt und hüpft', 'croaks and hops', 'weit hüpfen kann', 'can hop far'],
  ['turtle', 'Schildkröte', 'turtle', '🐢', 'langsam läuft', 'walks slowly', 'einen harten Panzer hat', 'has a hard shell'],
  ['fish', 'Fisch', 'fish', '🐟', 'im Wasser schwimmt', 'swims in water', 'Flossen hat', 'has fins'],
  ['dolphin', 'Delfin', 'dolphin', '🐬', 'aus dem Meer springt', 'jumps out of the sea', 'gern zusammen schwimmt', 'likes to swim with others'],
  ['whale', 'Wal', 'whale', '🐋', 'tief im Meer singt', 'sings deep in the sea', 'sehr groß ist', 'is very large'],
  ['penguin', 'Pinguin', 'penguin', '🐧', 'watschelt', 'waddles', 'schwarz-weiße Federn hat', 'has black and white feathers'],
  ['lion', 'Löwe', 'lion', '🦁', 'laut brüllt', 'roars loudly', 'eine große Mähne hat', 'has a large mane'],
  ['tiger', 'Tiger', 'tiger', '🐯', 'knurrt', 'growls', 'schwarze Streifen hat', 'has black stripes'],
  ['elephant', 'Elefant', 'elephant', '🐘', 'trompetet', 'trumpets', 'einen langen Rüssel hat', 'has a long trunk'],
  ['giraffe', 'Giraffe', 'giraffe', '🦒', 'Blätter vom Baum knabbert', 'nibbles leaves from trees', 'einen langen Hals hat', 'has a long neck'],
  ['zebra', 'Zebra', 'zebra', '🦓', 'mit seiner Herde läuft', 'runs with its herd', 'schwarz-weiße Streifen hat', 'has black and white stripes'],
  ['monkey', 'Affe', 'monkey', '🐒', 'auf Bäume klettert', 'climbs trees', 'mit den Händen greift', 'grabs things with its hands'],
  ['kangaroo', 'Känguru', 'kangaroo', '🦘', 'weit hüpft', 'hops far', 'sein Baby im Beutel trägt', 'carries its baby in a pouch'],
  ['koala', 'Koala', 'koala', '🐨', 'Blätter knabbert', 'nibbles leaves', 'runde, flauschige Ohren hat', 'has round fluffy ears'],
  ['owl', 'Eule', 'owl', '🦉', 'Hu-hu ruft', 'says hoot hoot', 'nachts wach ist', 'is awake at night'],
  ['fox', 'Fuchs', 'fox', '🦊', 'leise durch den Wald schleicht', 'sneaks quietly through the woods', 'einen buschigen Schwanz hat', 'has a bushy tail'],
  ['hedgehog', 'Igel', 'hedgehog', '🦔', 'sich zu einer Kugel rollt', 'rolls into a ball', 'viele Stacheln hat', 'has lots of spines'],
  ['rabbit', 'Hase', 'rabbit', '🐰', 'hoppelt', 'hops', 'lange Ohren hat', 'has long ears'],
];

function buildDiscovererAnimals() {
  const questions = [];
  let number = 1;
  const add = (animal, promptDe, promptEn, successDe, successEn, hintDe, hintEn, seed) => {
    const index = easyAnimals.indexOf(animal);
    const other = easyAnimals[(index + 11) % easyAnimals.length];
    questions.push({
      id: `dau${number++}`,
      prompt: localized(promptDe, promptEn),
      visual: '',
      answers: twoChoices({ id: animal[0], label: animal[3] }, { id: other[0], label: other[3] }, seed),
      correctAnswerId: animal[0],
      success: localized(successDe, successEn),
      hint: localized(hintDe, hintEn),
    });
  };

  easyAnimals.forEach((animal, index) => add(animal, `Tippe auf dieses Tier: ${animal[1]}.`, `Tap this animal: ${animal[2]}.`, `Ja, richtig: ${animal[1]}.`, `Yes, that is the ${animal[2]}.`, `Suche dieses Tier: ${animal[1]}.`, `Look for the picture of the ${animal[2]}.`, index));
  easyAnimals.forEach((animal, index) => add(animal, `Navi sucht ein Tier, das ${animal[4]}. Welches Bild passt?`, `Navi is looking for an animal that ${animal[5]}. Which picture matches?`, `Richtig! Gesucht war: ${animal[1]}.`, `Correct! The answer was the ${animal[2]}.`, `Denk an ein Tier, das ${animal[4]}.`, `Think of an animal that ${animal[5]}.`, index + 1));
  easyAnimals.forEach((animal, index) => add(animal, `Navi gibt einen Tipp: Es ist ein Tier, das ${animal[6]}. Welches Bild passt?`, `Navi gives a clue: It is an animal that ${animal[7]}. Which picture matches?`, `Super! Gesucht war: ${animal[1]}.`, `Great! The answer was the ${animal[2]}.`, `Denk an ein Tier, das ${animal[6]}.`, `Think of an animal that ${animal[7]}.`, index + 2));

  return questions;
}

const easyInitials = [
  ['A', 'Apfel', 'apple', '🍎'], ['A', 'Ameise', 'ant', '🐜'], ['B', 'Banane', 'banana', '🍌'], ['B', 'Ball', 'ball', '⚽'], ['B', 'Bus', 'bus', '🚌'], ['B', 'Baby', 'baby', '👶'],
  ['C', 'Clown', 'clown', '🤡'], ['D', 'Delfin', 'dolphin', '🐬'], ['D', 'Doktor', 'doctor', '🧑‍⚕️'], ['E', 'Elefant', 'elephant', '🐘'], ['F', 'Fisch', 'fish', '🐟'],
  ['G', 'Giraffe', 'giraffe', '🦒'], ['G', 'Gorilla', 'gorilla', '🦍'], ['H', 'Haus', 'house', '🏠'], ['H', 'Hotel', 'hotel', '🏨'], ['I', 'Insel', 'island', '🏝️'],
  ['J', 'Jaguar', 'jaguar', '🐆'], ['K', 'Koala', 'koala', '🐨'], ['L', 'Löwe', 'lion', '🦁'], ['L', 'Lampe', 'lamp', '💡'], ['M', 'Maus', 'mouse', '🐭'],
  ['M', 'Mond', 'moon', '🌙'], ['M', 'Musik', 'music', '🎵'], ['N', 'Nase', 'nose', '👃'], ['O', 'Orange', 'orange', '🍊'], ['P', 'Panda', 'panda', '🐼'],
  ['P', 'Pizza', 'pizza', '🍕'], ['P', 'Pinguin', 'penguin', '🐧'], ['R', 'Radio', 'radio', '📻'], ['R', 'Rose', 'rose', '🌹'], ['S', 'Sonne', 'sun', '☀️'],
  ['S', 'Stern', 'star', '⭐'], ['S', 'Socke', 'sock', '🧦'], ['T', 'Tiger', 'tiger', '🐯'], ['T', 'Taxi', 'taxi', '🚕'], ['T', 'Tomate', 'tomato', '🍅'],
  ['W', 'Wasser', 'water', '💧'], ['W', 'Wal', 'whale', '🐋'],
];

function buildDiscovererLetters() {
  const questions = [];
  let number = 1;
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const add = ({ promptDe, promptEn, visual, correct, options, successDe, successEn, hintDe, hintEn }) => {
    questions.push({ id: `dlu${number++}`, prompt: localized(promptDe, promptEn), visual, answers: options.map((letter) => ({ id: letter, label: letter })), correctAnswerId: correct, success: localized(successDe, successEn), hint: localized(hintDe, hintEn) });
  };

  alphabet.forEach((letter, index) => add({
    promptDe: `Navi zeigt ${letter}. Finde noch einmal das große ${letter}.`, promptEn: `Navi shows ${letter}. Find the same capital ${letter}.`, visual: letter, correct: letter,
    options: twoChoices(letter, alphabet[(index + 7) % 26], index), successDe: `Ja! Das ist ${letter}.`, successEn: `Yes! That is ${letter}.`,
    hintDe: `Vergleiche die Form mit dem großen ${letter}.`, hintEn: `Match the shape of capital ${letter}.`,
  }));

  alphabet.forEach((capital, index) => {
    const lower = capital.toLowerCase();
    add({
      promptDe: `Welche kleine Form gehört zum großen ${capital}?`, promptEn: `Which lowercase shape belongs with capital ${capital}?`, visual: capital, correct: lower,
      options: twoChoices(lower, alphabet[(index + 9) % 26].toLowerCase(), index + 1), successDe: `Richtig! ${capital} und ${lower} gehören zusammen.`, successEn: `Correct! ${capital} and ${lower} belong together.`,
      hintDe: `Suche das kleine ${lower}.`, hintEn: `Look for lowercase ${lower}.`,
    });
  });

  easyInitials.forEach(([letter, de, en, emoji], index) => {
    const alphabetIndex = alphabet.indexOf(letter);
    add({
      promptDe: `Welchen Anfangslaut hörst du bei ${de}?`, promptEn: `Which first sound do you hear in ${en}?`, visual: emoji, correct: letter,
      options: twoChoices(letter, alphabet[(alphabetIndex + 7) % 26], index), successDe: `${de} beginnt mit ${letter}.`, successEn: `${en} begins with ${letter}.`,
      hintDe: `Höre langsam: ${letter}, ${de}.`, hintEn: `Listen slowly: ${letter}, ${en}.`,
    });
  });

  return questions;
}

function buildDiscovererWords() {
  return words.map(([de, en, emoji], index) => {
    const other = words[(index + 29) % words.length];
    const correctId = `dword-${index + 1}`;
    return {
      id: `dwu${index + 1}`,
      prompt: localized(`Tippe auf das Bild für ${de}.`, `Tap the picture for ${en}.`),
      visual: '',
      answers: twoChoices({ id: correctId, label: emoji }, { id: `dword-${((index + 29) % words.length) + 1}`, label: other[2] }, index),
      correctAnswerId: correctId,
      success: localized(`Richtig! Das ist ${de}.`, `Correct! That is ${en}.`),
      hint: localized(`Suche das Bild von ${de}.`, `Look for the picture of ${en}.`),
    };
  });
}

const categories = [
  { id: 'numbers', title: localized('Zahlen', 'Numbers'), subtitle: localized('Zählen und Mengen entdecken', 'Discover counting and quantities'), icon: '123', color: '#F29A38', lightColor: '#FFF0D7', questionsByAge: { discoverer: buildDiscovererNumbers(), adventurer: buildNumbers() } },
  { id: 'colors', title: localized('Farben', 'Colors'), subtitle: localized('Farben finden und mischen', 'Find and mix colors'), icon: '●', color: '#F05E62', lightColor: '#FFE1E2', questionsByAge: { discoverer: buildDiscovererColors(), adventurer: buildColors() } },
  { id: 'animals', title: localized('Tiere', 'Animals'), subtitle: localized('Tiere und ihre Welt kennenlernen', 'Meet animals and their world'), icon: '🐾', color: '#58AE75', lightColor: '#E1F5E7', questionsByAge: { discoverer: buildDiscovererAnimals(), adventurer: buildAnimals() } },
  { id: 'letters', title: localized('Buchstaben', 'Letters'), subtitle: localized('Laute hören und Buchstaben finden', 'Hear sounds and find letters'), icon: 'ABC', color: '#7A72D1', lightColor: '#EAE7FF', questionsByAge: { discoverer: buildDiscovererLetters(), adventurer: buildLetters() } },
  { id: 'words', title: localized('Wörter', 'Words'), subtitle: localized('Bilder, Laute und Wörter verbinden', 'Connect pictures, sounds, and words'), icon: 'Aa', color: '#3E9FD6', lightColor: '#E0F3FF', questionsByAge: { discoverer: buildDiscovererWords(), adventurer: buildWords() } },
];

for (const category of categories) {
  for (const [ageGroup, questions] of Object.entries(category.questionsByAge)) {
    if (questions.length !== 90) throw new Error(`${category.id}/${ageGroup}: generated ${questions.length} questions instead of 90`);
  }
}

const output = `import { LearningCategory } from '../types';\n\nexport const categories: LearningCategory[] = ${JSON.stringify(categories, null, 2)};\n\nexport const categoryById = (id: LearningCategory['id']) => {\n  const category = categories.find((item) => item.id === id);\n  if (!category) throw new Error(\`Unknown learning category: \${id}\`);\n  return category;\n};\n`;

fs.writeFileSync('src/data/learningContent.ts', output);
console.log(`Generated ${categories.reduce((sum, category) => sum + Object.values(category.questionsByAge).reduce((trackSum, questions) => trackSum + questions.length, 0), 0)} age-specific bilingual questions.`);
