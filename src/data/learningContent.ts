import { LearningCategory } from '../types';

export const categories: LearningCategory[] = [
  {
    id: 'numbers',
    title: { de: 'Zahlen', en: 'Numbers' },
    subtitle: { de: 'Zählen und Mengen entdecken', en: 'Discover counting and quantities' },
    icon: '123',
    color: '#F29A38',
    lightColor: '#FFF0D7',
    questions: [
      { id: 'n1', prompt: { de: 'Wie viele Äpfel siehst du?', en: 'How many apples can you see?' }, visual: '🍎 🍎 🍎', answers: [{ id: '2', label: '2' }, { id: '3', label: '3' }, { id: '4', label: '4' }], correctAnswerId: '3', success: { de: 'Richtig! Das sind drei Äpfel.', en: 'Correct! Those are three apples.' }, hint: { de: 'Zähle langsam: eins, zwei, drei.', en: 'Count slowly: one, two, three.' } },
      { id: 'n2', prompt: { de: 'Welche Zahl kommt nach der Vier?', en: 'Which number comes after four?' }, visual: '1 · 2 · 3 · 4 · ?', answers: [{ id: '5', label: '5' }, { id: '6', label: '6' }, { id: '3', label: '3' }], correctAnswerId: '5', success: { de: 'Super! Nach der Vier kommt die Fünf.', en: 'Great! Five comes after four.' }, hint: { de: 'Zähle von eins bis fünf.', en: 'Count from one to five.' } },
      { id: 'n3', prompt: { de: 'Wo ist die kleinste Zahl?', en: 'Which is the smallest number?' }, visual: 'Klein wie eine Maus', answers: [{ id: '7', label: '7' }, { id: '1', label: '1' }, { id: '4', label: '4' }], correctAnswerId: '1', success: { de: 'Genau! Eins ist hier die kleinste Zahl.', en: 'Exactly! One is the smallest number here.' }, hint: { de: 'Die kleinste Menge ist nur ein Ding.', en: 'The smallest amount is just one thing.' } },
      { id: 'n4', prompt: { de: 'Wie viele Sterne leuchten?', en: 'How many stars are shining?' }, visual: '⭐ ⭐ ⭐ ⭐ ⭐', answers: [{ id: '4', label: '4' }, { id: '5', label: '5' }, { id: '6', label: '6' }], correctAnswerId: '5', success: { de: 'Klasse! Es leuchten fünf Sterne.', en: 'Wonderful! Five stars are shining.' }, hint: { de: 'Berühre jeden Stern beim Zählen mit dem Finger.', en: 'Touch each star with your finger while counting.' } },
      { id: 'n5', prompt: { de: 'Welche Zahl fehlt?', en: 'Which number is missing?' }, visual: '2 · 3 · ? · 5', answers: [{ id: '1', label: '1' }, { id: '4', label: '4' }, { id: '6', label: '6' }], correctAnswerId: '4', success: { de: 'Richtig! Zwischen Drei und Fünf steht die Vier.', en: 'Correct! Four goes between three and five.' }, hint: { de: 'Zähle weiter: zwei, drei, vier, fünf.', en: 'Keep counting: two, three, four, five.' } },
      { id: 'n6', prompt: { de: 'Zwei Enten kommen und eine fliegt dazu. Wie viele sind es?', en: 'Two ducks are joined by one more. How many are there?' }, visual: '🦆 🦆  +  🦆', answers: [{ id: '2', label: '2' }, { id: '3', label: '3' }, { id: '4', label: '4' }], correctAnswerId: '3', success: { de: 'Toll gerechnet! Zwei und eins sind drei.', en: 'Great counting! Two plus one makes three.' }, hint: { de: 'Zähle alle Enten zusammen.', en: 'Count all the ducks together.' } },
    ],
  },
  {
    id: 'colors',
    title: { de: 'Farben', en: 'Colors' },
    subtitle: { de: 'Farben finden und mischen', en: 'Find and mix colors' },
    icon: '●', color: '#F06464', lightColor: '#FFE4E3',
    questions: [
      { id: 'c1', prompt: { de: 'Tippe auf Rot.', en: 'Tap red.' }, visual: '🎨', answers: [{ id: 'red', label: 'Rot', color: '#E94C4C' }, { id: 'blue', label: 'Blau', color: '#478EEA' }, { id: 'green', label: 'Grün', color: '#43A96B' }], correctAnswerId: 'red', success: { de: 'Ja! Das ist Rot.', en: 'Yes! That is red.' }, hint: { de: 'Rot ist die Farbe von Erdbeeren.', en: 'Red is the color of strawberries.' } },
      { id: 'c2', prompt: { de: 'Welche Farbe hat die Sonne?', en: 'What color is the sun?' }, visual: '☀️', answers: [{ id: 'yellow', label: 'Gelb', color: '#F6C53B' }, { id: 'purple', label: 'Lila', color: '#8D72D9' }, { id: 'blue', label: 'Blau', color: '#478EEA' }], correctAnswerId: 'yellow', success: { de: 'Sonnig! Die Sonne ist gelb.', en: 'Sunny! The sun is yellow.' }, hint: { de: 'Suche die helle Farbe wie eine Banane.', en: 'Look for the bright color of a banana.' } },
      { id: 'c3', prompt: { de: 'Finde die Farbe des Grases.', en: 'Find the color of grass.' }, visual: '🌱', answers: [{ id: 'green', label: 'Grün', color: '#43A96B' }, { id: 'orange', label: 'Orange', color: '#F0923D' }, { id: 'pink', label: 'Rosa', color: '#E47EB0' }], correctAnswerId: 'green', success: { de: 'Richtig! Gras ist grün.', en: 'Correct! Grass is green.' }, hint: { de: 'Blätter haben oft dieselbe Farbe.', en: 'Leaves often have the same color.' } },
      { id: 'c4', prompt: { de: 'Welche Farbe hat der Himmel?', en: 'What color is the sky?' }, visual: '☁️', answers: [{ id: 'blue', label: 'Blau', color: '#478EEA' }, { id: 'red', label: 'Rot', color: '#E94C4C' }, { id: 'brown', label: 'Braun', color: '#8E6549' }], correctAnswerId: 'blue', success: { de: 'Genau! Der Himmel ist blau.', en: 'Exactly! The sky is blue.' }, hint: { de: 'Es ist auch die Farbe des Meeres.', en: 'It is also the color of the sea.' } },
      { id: 'c5', prompt: { de: 'Rot und Gelb ergeben welche Farbe?', en: 'What color do red and yellow make?' }, visual: '🔴 + 🟡 = ?', answers: [{ id: 'orange', label: 'Orange', color: '#F0923D' }, { id: 'green', label: 'Grün', color: '#43A96B' }, { id: 'purple', label: 'Lila', color: '#8D72D9' }], correctAnswerId: 'orange', success: { de: 'Prima! Rot und Gelb werden Orange.', en: 'Great! Red and yellow make orange.' }, hint: { de: 'Die gesuchte Farbe heißt wie eine Frucht.', en: 'The color has the same name as a fruit.' } },
      { id: 'c6', prompt: { de: 'Blau und Gelb ergeben welche Farbe?', en: 'What color do blue and yellow make?' }, visual: '🔵 + 🟡 = ?', answers: [{ id: 'purple', label: 'Lila', color: '#8D72D9' }, { id: 'green', label: 'Grün', color: '#43A96B' }, { id: 'orange', label: 'Orange', color: '#F0923D' }], correctAnswerId: 'green', success: { de: 'Toll! Blau und Gelb werden Grün.', en: 'Wonderful! Blue and yellow make green.' }, hint: { de: 'Die gesuchte Farbe haben viele Blätter.', en: 'Many leaves have the color you need.' } },
    ],
  },
  {
    id: 'animals',
    title: { de: 'Tiere', en: 'Animals' }, subtitle: { de: 'Tiere und ihre Welt kennenlernen', en: 'Meet animals and their world' },
    icon: '🐾', color: '#58AE75', lightColor: '#E1F5E7',
    questions: [
      { id: 'a1', prompt: { de: 'Welches Tier sagt Miau?', en: 'Which animal says meow?' }, visual: 'Wer bin ich?', answers: [{ id: 'cat', label: '🐱' }, { id: 'dog', label: '🐶' }, { id: 'cow', label: '🐮' }], correctAnswerId: 'cat', success: { de: 'Richtig! Die Katze sagt Miau.', en: 'Correct! The cat says meow.' }, hint: { de: 'Das Tier hat Schnurrhaare.', en: 'This animal has whiskers.' } },
      { id: 'a2', prompt: { de: 'Welches Tier lebt im Wasser?', en: 'Which animal lives in water?' }, visual: '💧', answers: [{ id: 'fish', label: '🐟' }, { id: 'lion', label: '🦁' }, { id: 'horse', label: '🐴' }], correctAnswerId: 'fish', success: { de: 'Ja! Der Fisch lebt im Wasser.', en: 'Yes! The fish lives in water.' }, hint: { de: 'Es hat Flossen und kann schwimmen.', en: 'It has fins and can swim.' } },
      { id: 'a3', prompt: { de: 'Welches Tier kann fliegen?', en: 'Which animal can fly?' }, visual: '☁️', answers: [{ id: 'bird', label: '🐦' }, { id: 'pig', label: '🐷' }, { id: 'turtle', label: '🐢' }], correctAnswerId: 'bird', success: { de: 'Super! Der Vogel fliegt durch die Luft.', en: 'Great! The bird flies through the air.' }, hint: { de: 'Suche das Tier mit Flügeln.', en: 'Look for the animal with wings.' } },
      { id: 'a4', prompt: { de: 'Welches Tier hat einen langen Rüssel?', en: 'Which animal has a long trunk?' }, visual: '🌿', answers: [{ id: 'elephant', label: '🐘' }, { id: 'fox', label: '🦊' }, { id: 'frog', label: '🐸' }], correctAnswerId: 'elephant', success: { de: 'Genau! Der Elefant hat einen Rüssel.', en: 'Exactly! The elephant has a trunk.' }, hint: { de: 'Es ist groß, grau und sehr stark.', en: 'It is big, gray, and very strong.' } },
      { id: 'a5', prompt: { de: 'Welches Tier lebt auf einem Bauernhof?', en: 'Which animal lives on a farm?' }, visual: '🚜', answers: [{ id: 'cow', label: '🐮' }, { id: 'whale', label: '🐳' }, { id: 'lion', label: '🦁' }], correctAnswerId: 'cow', success: { de: 'Richtig! Die Kuh lebt auf dem Bauernhof.', en: 'Correct! The cow lives on a farm.' }, hint: { de: 'Dieses Tier gibt Milch.', en: 'This animal gives milk.' } },
      { id: 'a6', prompt: { de: 'Welches Tier hüpft und hat lange Ohren?', en: 'Which animal hops and has long ears?' }, visual: '🥕', answers: [{ id: 'rabbit', label: '🐰' }, { id: 'bear', label: '🐻' }, { id: 'duck', label: '🦆' }], correctAnswerId: 'rabbit', success: { de: 'Klasse! Das Kaninchen hüpft.', en: 'Wonderful! The rabbit hops.' }, hint: { de: 'Es knabbert gerne Möhren.', en: 'It likes to nibble carrots.' } },
    ],
  },
  {
    id: 'letters',
    title: { de: 'Buchstaben', en: 'Letters' }, subtitle: { de: 'Laute hören und Buchstaben finden', en: 'Hear sounds and find letters' },
    icon: 'ABC', color: '#7A72D1', lightColor: '#EAE7FF',
    questions: [
      { id: 'l1', prompt: { de: 'Mit welchem Buchstaben beginnt Apfel?', en: 'Which letter does apple begin with?' }, visual: '🍎', answers: [{ id: 'A', label: 'A' }, { id: 'B', label: 'B' }, { id: 'M', label: 'M' }], correctAnswerId: 'A', success: { de: 'Richtig! Apfel beginnt mit A.', en: 'Correct! Apple begins with A.' }, hint: { de: 'Höre genau: Aaa-pfel.', en: 'Listen closely: Aaa-pple.' } },
      { id: 'l2', prompt: { de: 'Finde den Buchstaben B.', en: 'Find the letter B.' }, visual: '🔤', answers: [{ id: 'D', label: 'D' }, { id: 'B', label: 'B' }, { id: 'P', label: 'P' }], correctAnswerId: 'B', success: { de: 'Bravo! Das ist das B.', en: 'Brilliant! That is B.' }, hint: { de: 'Das B hat zwei runde Bäuche.', en: 'The B has two round bumps.' } },
      { id: 'l3', prompt: { de: 'Mit welchem Buchstaben beginnt Maus?', en: 'Which letter does mouse begin with?' }, visual: '🐭', answers: [{ id: 'N', label: 'N' }, { id: 'M', label: 'M' }, { id: 'W', label: 'W' }], correctAnswerId: 'M', success: { de: 'Genau! Maus beginnt mit M.', en: 'Exactly! Mouse begins with M.' }, hint: { de: 'Höre: Mmm-aus.', en: 'Listen: Mmm-ouse.' } },
      { id: 'l4', prompt: { de: 'Welcher Buchstabe klingt wie Ssss?', en: 'Which letter sounds like ssss?' }, visual: '🐍', answers: [{ id: 'S', label: 'S' }, { id: 'F', label: 'F' }, { id: 'K', label: 'K' }], correctAnswerId: 'S', success: { de: 'Super! Das S zischt wie eine Schlange.', en: 'Great! S hisses like a snake.' }, hint: { de: 'Die Schlange macht Ssss.', en: 'The snake goes ssss.' } },
      { id: 'l5', prompt: { de: 'Mit welchem Buchstaben beginnt Elefant?', en: 'Which letter does elephant begin with?' }, visual: '🐘', answers: [{ id: 'E', label: 'E' }, { id: 'L', label: 'L' }, { id: 'A', label: 'A' }], correctAnswerId: 'E', success: { de: 'Richtig! Elefant beginnt mit E.', en: 'Correct! Elephant begins with E.' }, hint: { de: 'Höre genau: Eee-lefant.', en: 'Listen closely: Eee-lephant.' } },
      { id: 'l6', prompt: { de: 'Finde das kleine a.', en: 'Find the lowercase a.' }, visual: 'A → ?', answers: [{ id: 'a', label: 'a' }, { id: 'e', label: 'e' }, { id: 'o', label: 'o' }], correctAnswerId: 'a', success: { de: 'Prima! Das ist das kleine a.', en: 'Great! That is lowercase a.' }, hint: { de: 'Es ist der kleine Partner vom großen A.', en: 'It is the little partner of capital A.' } },
    ],
  },
  {
    id: 'words',
    title: { de: 'Wörter', en: 'Words' }, subtitle: { de: 'Bilder, Laute und Wörter verbinden', en: 'Connect pictures, sounds, and words' },
    icon: 'Aa', color: '#3E9FD6', lightColor: '#E0F3FF',
    questions: [
      { id: 'w1', prompt: { de: 'Welches Wort passt zum Bild?', en: 'Which word matches the picture?' }, visual: '🐶', answers: [{ id: 'dog', label: 'Hund' }, { id: 'cat', label: 'Katze' }, { id: 'fish', label: 'Fisch' }], correctAnswerId: 'dog', success: { de: 'Richtig! Das ist ein Hund.', en: 'Correct! That is a dog.' }, hint: { de: 'Das Tier kann bellen.', en: 'This animal can bark.' } },
      { id: 'w2', prompt: { de: 'Welches Wort passt zur Sonne?', en: 'Which word matches the sun?' }, visual: '☀️', answers: [{ id: 'moon', label: 'Mond' }, { id: 'sun', label: 'Sonne' }, { id: 'star', label: 'Stern' }], correctAnswerId: 'sun', success: { de: 'Genau! Das Wort heißt Sonne.', en: 'Exactly! The word is sun.' }, hint: { de: 'Die Sonne macht den Tag hell.', en: 'The sun makes the day bright.' } },
      { id: 'w3', prompt: { de: 'Finde das Wort Haus.', en: 'Find the word house.' }, visual: '🏠', answers: [{ id: 'tree', label: 'Baum' }, { id: 'house', label: 'Haus' }, { id: 'car', label: 'Auto' }], correctAnswerId: 'house', success: { de: 'Super! Hier steht Haus.', en: 'Great! This says house.' }, hint: { de: 'Darin können Menschen wohnen.', en: 'People can live inside it.' } },
      { id: 'w4', prompt: { de: 'Welches Wort passt zum Bild?', en: 'Which word matches the picture?' }, visual: '🌳', answers: [{ id: 'flower', label: 'Blume' }, { id: 'tree', label: 'Baum' }, { id: 'grass', label: 'Gras' }], correctAnswerId: 'tree', success: { de: 'Richtig! Das ist ein Baum.', en: 'Correct! That is a tree.' }, hint: { de: 'Er hat einen Stamm und viele Blätter.', en: 'It has a trunk and many leaves.' } },
      { id: 'w5', prompt: { de: 'Welches Wort ist kürzer?', en: 'Which word is shorter?' }, visual: 'Kurz oder lang?', answers: [{ id: 'ice', label: 'Eis' }, { id: 'elephant', label: 'Elefant' }, { id: 'butterfly', label: 'Schmetterling' }], correctAnswerId: 'ice', success: { de: 'Genau! Eis ist das kürzeste Wort.', en: 'Exactly! Ice is the shortest word.' }, hint: { de: 'Das kürzeste Wort hat nur drei Buchstaben.', en: 'The shortest word has only three letters.' } },
      { id: 'w6', prompt: { de: 'Welche zwei Teile ergeben Regenbogen?', en: 'Which two parts make rainbow?' }, visual: '🌈', answers: [{ id: 'rainbow', label: 'Regen + Bogen' }, { id: 'raincoat', label: 'Regen + Jacke' }, { id: 'sunflower', label: 'Sonne + Blume' }], correctAnswerId: 'rainbow', success: { de: 'Klasse! Regen und Bogen ergeben Regenbogen.', en: 'Wonderful! Rain and bow make rainbow.' }, hint: { de: 'Sprich das Wort langsam in zwei Teilen.', en: 'Say the word slowly in two parts.' } },
    ],
  },
];

export const categoryById = (id: LearningCategory['id']) => {
  const category = categories.find((item) => item.id === id);
  if (!category) throw new Error(`Unknown learning category: ${id}`);
  return category;
};
