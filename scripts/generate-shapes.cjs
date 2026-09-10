// Distinct ordered shape pairs give each stage its own visual exercise set.
const shapes = [
  ['circle', '●', 'Kreis', 'circle'], ['triangle', '▲', 'Dreieck', 'triangle'],
  ['square', '■', 'Quadrat', 'square'], ['rectangle', '▬', 'Rechteck', 'rectangle'],
  ['diamond', '◆', 'Raute', 'diamond'], ['star', '★', 'Stern', 'star'],
];
const localized = (de, en) => ({ de, en });
module.exports = function buildShapes(age) {
  const questions = [];
  let stage = 0;
  for (const a of shapes) for (const b of shapes.filter(s => s !== a)) {
    const c = shapes.find(s => s !== a && s !== b);
    const add = (de, en, visual, correct, hintDe, hintEn) => {
      const options = age === 'discoverer' ? [a, b] : [a, b, c];
      const shift = questions.length % options.length;
      const rotated = [...options.slice(shift), ...options.slice(0, shift)];
      questions.push({
        id: `shapes-${age}-${questions.length + 1}`, prompt: localized(de, en), visual,
        answers: rotated.map(s => ({ id: s[0], label: s[1] })), correctAnswerId: correct[0],
        success: localized(`Geschafft! Die passende Form ist: ${correct[2]}.`, `Well done! The matching shape is a ${correct[3]}.`),
        hint: localized(hintDe, hintEn),
      });
    };
    if (age === 'discoverer') {
      add('Welche Form passt zur Karte?', 'Which shape matches the card?', a[1], a,
        'Vergleiche die Form auf der Karte mit den beiden Antworten.', 'Match the shape on the card to one of the two answers.');
      add('Welche Form gibt es nur einmal?', 'Which shape appears only once?', `${a[1]} ${b[1]} ${a[1]}`, b,
        'Eine Form ist nur einmal zu sehen. Tippe auf diese Form.', 'One shape appears only once. Tap that shape.');
      add('Welche Form kommt als Nächstes?', 'Which shape comes next?', `${a[1]} ${b[1]} ${a[1]} ${b[1]} ?`, a,
        'Die beiden Formen wechseln sich immer ab.', 'The two shapes take turns.');
    } else {
      add('Setze das Muster fort. Welche Form fehlt am Ende?', 'Continue the pattern. Which shape is missing at the end?', `${a[1]} ${a[1]} ${b[1]} ${a[1]} ${a[1]} ${b[1]} ?`, a,
        'Suche die Dreiergruppe, die sich wiederholt.', 'Find the repeating group of three.');
      add('Welche Form fehlt in der zweiten Gruppe?', 'Which shape is missing from the second group?', `${a[1]} ${b[1]} ${c[1]} | ${a[1]} ? ${c[1]}`, b,
        'Vergleiche die mittlere Stelle der beiden Gruppen.', 'Compare the middle position in both groups.');
      add('Welche Form vervollständigt das Muster?', 'Which shape completes the pattern?', `${a[1]} ${b[1]} ${c[1]} ${a[1]} ${b[1]} ?`, c,
        'Die drei Formen kommen immer in derselben Reihenfolge.', 'The three shapes always appear in the same order.');
    }
    stage++;
  }
  if (stage !== 30 || questions.length !== 90) throw new Error('Incomplete shapes curriculum');
  return questions;
};
