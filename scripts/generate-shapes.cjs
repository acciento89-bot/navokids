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
      add(`Suche diese Form: ${a[2]}. Daneben wartet diese Form: ${b[2]}.`, `Find the ${a[3]}. The other choice is a ${b[3]}.`, a[1], a,
        'Vergleiche die Form auf der Karte mit den beiden Antworten.', 'Match the shape on the card to one of the two answers.');
      add(`Zweimal ${a[2]}, einmal ${b[2]}: Welche Form ist anders?`, `Two ${a[3]} shapes and one ${b[3]}: which shape is different?`, `${a[1]} ${b[1]} ${a[1]}`, b,
        'Eine Form ist nur einmal zu sehen. Tippe auf diese Form.', 'One shape appears only once. Tap that shape.');
      add(`Erst ${a[2]}, dann ${b[2]}: Welche Form kommt am Ende?`, `First a ${a[3]}, then a ${b[3]}: which shape comes next?`, `${a[1]} ${b[1]} ${a[1]} ${b[1]} ?`, a,
        'Die beiden Formen wechseln sich immer ab.', 'The two shapes take turns.');
    } else {
      add(`Zweimal ${a[2]}, dann ${b[2]}: Setze das Muster fort.`, `Two ${a[3]} shapes, then a ${b[3]}: continue the pattern.`, `${a[1]} ${a[1]} ${b[1]} ${a[1]} ${a[1]} ${b[1]} ?`, a,
        'Suche die Dreiergruppe, die sich wiederholt.', 'Find the repeating group of three.');
      add(`${a[2]}, ${b[2]}, ${c[2]}: Welche Form fehlt in der zweiten Gruppe?`, `${a[3]}, ${b[3]}, ${c[3]}: which shape is missing from the second group?`, `${a[1]} ${b[1]} ${c[1]} | ${a[1]} ? ${c[1]}`, b,
        'Vergleiche die mittlere Stelle der beiden Gruppen.', 'Compare the middle position in both groups.');
      add(`Nach ${a[2]} und ${b[2]} folgt ${c[2]}. Ergänze das Ende.`, `A ${a[3]} and a ${b[3]} are followed by a ${c[3]}. Complete the ending.`, `${a[1]} ${b[1]} ${c[1]} ${a[1]} ${b[1]} ?`, c,
        'Die drei Formen kommen immer in derselben Reihenfolge.', 'The three shapes always appear in the same order.');
    }
    stage++;
  }
  if (stage !== 30 || questions.length !== 90) throw new Error('Incomplete shapes curriculum');
  return questions;
};
