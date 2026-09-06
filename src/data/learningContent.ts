import { LearningCategory } from '../types';

export const categories: LearningCategory[] = [
  {
    "id": "numbers",
    "title": {
      "de": "Zahlen",
      "en": "Numbers"
    },
    "subtitle": {
      "de": "Zählen und Mengen entdecken",
      "en": "Discover counting and quantities"
    },
    "icon": "123",
    "color": "#F29A38",
    "lightColor": "#FFF0D7",
    "questionsByAge": {
      "discoverer": [
        {
          "id": "d2nu1",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Apfel und die Zahl 1. Finde dieselbe Zahl.",
            "en": "Navi shows you a apple and number 1. Find the same number."
          },
          "visual": "🍎   1",
          "showNavi": true,
          "answers": [
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Ja! Du hast die Zahl 1 gefunden.",
            "en": "Yes! You found number 1."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu2",
          "prompt": {
            "de": "Zähle auf der weißen Karte: blaues Quadrat. Wie viele Bilder sind es?",
            "en": "Count the blue square pictures on the white card. How many are there?"
          },
          "visual": "🟦",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "1",
              "label": "1"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Richtig gezählt! Es sind 1.",
            "en": "Great counting! There are 1."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu3",
          "prompt": {
            "de": "Navi zeigt die Zahl 1. Auf welcher Antwortkarte siehst du diese Menge? Suche: gelbes Quadrat.",
            "en": "Navi shows number 1. Which answer card shows that many yellow square pictures?"
          },
          "visual": "1",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-0-correct",
              "label": "🟨"
            },
            {
              "id": "quantity-0-other",
              "label": "🟨 🟨"
            }
          ],
          "correctAnswerId": "quantity-0-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 1 Bilder.",
            "en": "Exactly! That answer shows 1 pictures."
          },
          "hint": {
            "de": "Zähle bis 1 und stoppe dann.",
            "en": "Count to 1 and then stop."
          }
        },
        {
          "id": "d2nu4",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Erdbeere und die Zahl 2. Finde dieselbe Zahl.",
            "en": "Navi shows you a strawberry and number 2. Find the same number."
          },
          "visual": "🍓   2",
          "showNavi": true,
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Ja! Du hast die Zahl 2 gefunden.",
            "en": "Yes! You found number 2."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu5",
          "prompt": {
            "de": "Zähle auf der weißen Karte: blauer Diamant. Wie viele Bilder sind es?",
            "en": "Count the blue diamond pictures on the white card. How many are there?"
          },
          "visual": "🔷 🔷",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Richtig gezählt! Es sind 2.",
            "en": "Great counting! There are 2."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu6",
          "prompt": {
            "de": "Navi zeigt die Zahl 2. Auf welcher Antwortkarte siehst du diese Menge? Suche: Zitrone.",
            "en": "Navi shows number 2. Which answer card shows that many lemon pictures?"
          },
          "visual": "2",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-1-other",
              "label": "🍋 🍋 🍋"
            },
            {
              "id": "quantity-1-correct",
              "label": "🍋 🍋"
            }
          ],
          "correctAnswerId": "quantity-1-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 2 Bilder.",
            "en": "Exactly! That answer shows 2 pictures."
          },
          "hint": {
            "de": "Zähle bis 2 und stoppe dann.",
            "en": "Count to 2 and then stop."
          }
        },
        {
          "id": "d2nu7",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Kirschen und die Zahl 3. Finde dieselbe Zahl.",
            "en": "Navi shows you a cherries and number 3. Find the same number."
          },
          "visual": "🍒   3",
          "showNavi": true,
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Ja! Du hast die Zahl 3 gefunden.",
            "en": "Yes! You found number 3."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu8",
          "prompt": {
            "de": "Zähle auf der weißen Karte: grüner Kreis. Wie viele Bilder sind es?",
            "en": "Count the green circle pictures on the white card. How many are there?"
          },
          "visual": "🟢 🟢 🟢",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Richtig gezählt! Es sind 3.",
            "en": "Great counting! There are 3."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu9",
          "prompt": {
            "de": "Navi zeigt die Zahl 3. Auf welcher Antwortkarte siehst du diese Menge? Suche: Banane.",
            "en": "Navi shows number 3. Which answer card shows that many banana pictures?"
          },
          "visual": "3",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-2-correct",
              "label": "🍌 🍌 🍌"
            },
            {
              "id": "quantity-2-other",
              "label": "🍌 🍌 🍌 🍌"
            }
          ],
          "correctAnswerId": "quantity-2-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 3 Bilder.",
            "en": "Exactly! That answer shows 3 pictures."
          },
          "hint": {
            "de": "Zähle bis 3 und stoppe dann.",
            "en": "Count to 3 and then stop."
          }
        },
        {
          "id": "d2nu10",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Tomate und die Zahl 4. Finde dieselbe Zahl.",
            "en": "Navi shows you a tomato and number 4. Find the same number."
          },
          "visual": "🍅   4",
          "showNavi": true,
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Ja! Du hast die Zahl 4 gefunden.",
            "en": "Yes! You found number 4."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu11",
          "prompt": {
            "de": "Zähle auf der weißen Karte: grünes Herz. Wie viele Bilder sind es?",
            "en": "Count the green heart pictures on the white card. How many are there?"
          },
          "visual": "💚 💚 💚 💚",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig gezählt! Es sind 4.",
            "en": "Great counting! There are 4."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu12",
          "prompt": {
            "de": "Navi zeigt die Zahl 4. Auf welcher Antwortkarte siehst du diese Menge? Suche: Stern.",
            "en": "Navi shows number 4. Which answer card shows that many star pictures?"
          },
          "visual": "4",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-3-other",
              "label": "🌟 🌟 🌟 🌟 🌟"
            },
            {
              "id": "quantity-3-correct",
              "label": "🌟 🌟 🌟 🌟"
            }
          ],
          "correctAnswerId": "quantity-3-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 4 Bilder.",
            "en": "Exactly! That answer shows 4 pictures."
          },
          "hint": {
            "de": "Zähle bis 4 und stoppe dann.",
            "en": "Count to 4 and then stop."
          }
        },
        {
          "id": "d2nu13",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: rotes Herz und die Zahl 5. Finde dieselbe Zahl.",
            "en": "Navi shows you a red heart and number 5. Find the same number."
          },
          "visual": "❤️   5",
          "showNavi": true,
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Ja! Du hast die Zahl 5 gefunden.",
            "en": "Yes! You found number 5."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu14",
          "prompt": {
            "de": "Zähle auf der weißen Karte: grünes Quadrat. Wie viele Bilder sind es?",
            "en": "Count the green square pictures on the white card. How many are there?"
          },
          "visual": "🟩 🟩 🟩 🟩 🟩",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig gezählt! Es sind 5.",
            "en": "Great counting! There are 5."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu15",
          "prompt": {
            "de": "Navi zeigt die Zahl 5. Auf welcher Antwortkarte siehst du diese Menge? Suche: orangefarbener Kreis.",
            "en": "Navi shows number 5. Which answer card shows that many orange circle pictures?"
          },
          "visual": "5",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-4-correct",
              "label": "🟠 🟠 🟠 🟠 🟠"
            },
            {
              "id": "quantity-4-other",
              "label": "🟠 🟠 🟠 🟠"
            }
          ],
          "correctAnswerId": "quantity-4-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 5 Bilder.",
            "en": "Exactly! That answer shows 5 pictures."
          },
          "hint": {
            "de": "Zähle bis 5 und stoppe dann.",
            "en": "Count to 5 and then stop."
          }
        },
        {
          "id": "d2nu16",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Feuerwehrauto und die Zahl 1. Finde dieselbe Zahl.",
            "en": "Navi shows you a fire truck and number 1. Find the same number."
          },
          "visual": "🚒   1",
          "showNavi": true,
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "1",
              "label": "1"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Ja! Du hast die Zahl 1 gefunden.",
            "en": "Yes! You found number 1."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu17",
          "prompt": {
            "de": "Zähle auf der weißen Karte: grüner Apfel. Wie viele Bilder sind es?",
            "en": "Count the green apple pictures on the white card. How many are there?"
          },
          "visual": "🍏",
          "answers": [
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Richtig gezählt! Es sind 1.",
            "en": "Great counting! There are 1."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu18",
          "prompt": {
            "de": "Navi zeigt die Zahl 1. Auf welcher Antwortkarte siehst du diese Menge? Suche: orangefarbenes Herz.",
            "en": "Navi shows number 1. Which answer card shows that many orange heart pictures?"
          },
          "visual": "1",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-5-other",
              "label": "🧡 🧡"
            },
            {
              "id": "quantity-5-correct",
              "label": "🧡"
            }
          ],
          "correctAnswerId": "quantity-5-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 1 Bilder.",
            "en": "Exactly! That answer shows 1 pictures."
          },
          "hint": {
            "de": "Zähle bis 1 und stoppe dann.",
            "en": "Count to 1 and then stop."
          }
        },
        {
          "id": "d2nu19",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: blauer Kreis und die Zahl 2. Finde dieselbe Zahl.",
            "en": "Navi shows you a blue circle and number 2. Find the same number."
          },
          "visual": "🔵   2",
          "showNavi": true,
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Ja! Du hast die Zahl 2 gefunden.",
            "en": "Yes! You found number 2."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu20",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Brokkoli. Wie viele Bilder sind es?",
            "en": "Count the broccoli pictures on the white card. How many are there?"
          },
          "visual": "🥦 🥦",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Richtig gezählt! Es sind 2.",
            "en": "Great counting! There are 2."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu21",
          "prompt": {
            "de": "Navi zeigt die Zahl 2. Auf welcher Antwortkarte siehst du diese Menge? Suche: orangefarbenes Quadrat.",
            "en": "Navi shows number 2. Which answer card shows that many orange square pictures?"
          },
          "visual": "2",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-6-correct",
              "label": "🟧 🟧"
            },
            {
              "id": "quantity-6-other",
              "label": "🟧 🟧 🟧"
            }
          ],
          "correctAnswerId": "quantity-6-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 2 Bilder.",
            "en": "Exactly! That answer shows 2 pictures."
          },
          "hint": {
            "de": "Zähle bis 2 und stoppe dann.",
            "en": "Count to 2 and then stop."
          }
        },
        {
          "id": "d2nu22",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: blaues Herz und die Zahl 3. Finde dieselbe Zahl.",
            "en": "Navi shows you a blue heart and number 3. Find the same number."
          },
          "visual": "💙   3",
          "showNavi": true,
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Ja! Du hast die Zahl 3 gefunden.",
            "en": "Yes! You found number 3."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu23",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Gurke. Wie viele Bilder sind es?",
            "en": "Count the cucumber pictures on the white card. How many are there?"
          },
          "visual": "🥒 🥒 🥒",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Richtig gezählt! Es sind 3.",
            "en": "Great counting! There are 3."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu24",
          "prompt": {
            "de": "Navi zeigt die Zahl 3. Auf welcher Antwortkarte siehst du diese Menge? Suche: Orange.",
            "en": "Navi shows number 3. Which answer card shows that many orange fruit pictures?"
          },
          "visual": "3",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-7-other",
              "label": "🍊 🍊 🍊 🍊"
            },
            {
              "id": "quantity-7-correct",
              "label": "🍊 🍊 🍊"
            }
          ],
          "correctAnswerId": "quantity-7-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 3 Bilder.",
            "en": "Exactly! That answer shows 3 pictures."
          },
          "hint": {
            "de": "Zähle bis 3 und stoppe dann.",
            "en": "Count to 3 and then stop."
          }
        },
        {
          "id": "d2nu25",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Heidelbeeren und die Zahl 4. Finde dieselbe Zahl.",
            "en": "Navi shows you a blueberries and number 4. Find the same number."
          },
          "visual": "🫐   4",
          "showNavi": true,
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Ja! Du hast die Zahl 4 gefunden.",
            "en": "Yes! You found number 4."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu26",
          "prompt": {
            "de": "Zähle auf der weißen Karte: gelber Kreis. Wie viele Bilder sind es?",
            "en": "Count the yellow circle pictures on the white card. How many are there?"
          },
          "visual": "🟡 🟡 🟡 🟡",
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig gezählt! Es sind 4.",
            "en": "Great counting! There are 4."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu27",
          "prompt": {
            "de": "Navi zeigt die Zahl 4. Auf welcher Antwortkarte siehst du diese Menge? Suche: Karotte.",
            "en": "Navi shows number 4. Which answer card shows that many carrot pictures?"
          },
          "visual": "4",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-8-correct",
              "label": "🥕 🥕 🥕 🥕"
            },
            {
              "id": "quantity-8-other",
              "label": "🥕 🥕 🥕 🥕 🥕"
            }
          ],
          "correctAnswerId": "quantity-8-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 4 Bilder.",
            "en": "Exactly! That answer shows 4 pictures."
          },
          "hint": {
            "de": "Zähle bis 4 und stoppe dann.",
            "en": "Count to 4 and then stop."
          }
        },
        {
          "id": "d2nu28",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Wassertropfen und die Zahl 5. Finde dieselbe Zahl.",
            "en": "Navi shows you a water drop and number 5. Find the same number."
          },
          "visual": "💧   5",
          "showNavi": true,
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Ja! Du hast die Zahl 5 gefunden.",
            "en": "Yes! You found number 5."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu29",
          "prompt": {
            "de": "Zähle auf der weißen Karte: gelbes Herz. Wie viele Bilder sind es?",
            "en": "Count the yellow heart pictures on the white card. How many are there?"
          },
          "visual": "💛 💛 💛 💛 💛",
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig gezählt! Es sind 5.",
            "en": "Great counting! There are 5."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu30",
          "prompt": {
            "de": "Navi zeigt die Zahl 5. Auf welcher Antwortkarte siehst du diese Menge? Suche: Kürbis.",
            "en": "Navi shows number 5. Which answer card shows that many pumpkin pictures?"
          },
          "visual": "5",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-9-other",
              "label": "🎃 🎃 🎃 🎃"
            },
            {
              "id": "quantity-9-correct",
              "label": "🎃 🎃 🎃 🎃 🎃"
            }
          ],
          "correctAnswerId": "quantity-9-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 5 Bilder.",
            "en": "Exactly! That answer shows 5 pictures."
          },
          "hint": {
            "de": "Zähle bis 5 und stoppe dann.",
            "en": "Count to 5 and then stop."
          }
        },
        {
          "id": "d2nu31",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: blaues Quadrat und die Zahl 1. Finde dieselbe Zahl.",
            "en": "Navi shows you a blue square and number 1. Find the same number."
          },
          "visual": "🟦   1",
          "showNavi": true,
          "answers": [
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Ja! Du hast die Zahl 1 gefunden.",
            "en": "Yes! You found number 1."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu32",
          "prompt": {
            "de": "Zähle auf der weißen Karte: gelbes Quadrat. Wie viele Bilder sind es?",
            "en": "Count the yellow square pictures on the white card. How many are there?"
          },
          "visual": "🟨",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "1",
              "label": "1"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Richtig gezählt! Es sind 1.",
            "en": "Great counting! There are 1."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu33",
          "prompt": {
            "de": "Navi zeigt die Zahl 1. Auf welcher Antwortkarte siehst du diese Menge? Suche: lilafarbener Kreis.",
            "en": "Navi shows number 1. Which answer card shows that many purple circle pictures?"
          },
          "visual": "1",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-10-correct",
              "label": "🟣"
            },
            {
              "id": "quantity-10-other",
              "label": "🟣 🟣"
            }
          ],
          "correctAnswerId": "quantity-10-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 1 Bilder.",
            "en": "Exactly! That answer shows 1 pictures."
          },
          "hint": {
            "de": "Zähle bis 1 und stoppe dann.",
            "en": "Count to 1 and then stop."
          }
        },
        {
          "id": "d2nu34",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: blauer Diamant und die Zahl 2. Finde dieselbe Zahl.",
            "en": "Navi shows you a blue diamond and number 2. Find the same number."
          },
          "visual": "🔷   2",
          "showNavi": true,
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Ja! Du hast die Zahl 2 gefunden.",
            "en": "Yes! You found number 2."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu35",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Zitrone. Wie viele Bilder sind es?",
            "en": "Count the lemon pictures on the white card. How many are there?"
          },
          "visual": "🍋 🍋",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Richtig gezählt! Es sind 2.",
            "en": "Great counting! There are 2."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu36",
          "prompt": {
            "de": "Navi zeigt die Zahl 2. Auf welcher Antwortkarte siehst du diese Menge? Suche: lilafarbenes Herz.",
            "en": "Navi shows number 2. Which answer card shows that many purple heart pictures?"
          },
          "visual": "2",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-11-other",
              "label": "💜 💜 💜"
            },
            {
              "id": "quantity-11-correct",
              "label": "💜 💜"
            }
          ],
          "correctAnswerId": "quantity-11-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 2 Bilder.",
            "en": "Exactly! That answer shows 2 pictures."
          },
          "hint": {
            "de": "Zähle bis 2 und stoppe dann.",
            "en": "Count to 2 and then stop."
          }
        },
        {
          "id": "d2nu37",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: grüner Kreis und die Zahl 3. Finde dieselbe Zahl.",
            "en": "Navi shows you a green circle and number 3. Find the same number."
          },
          "visual": "🟢   3",
          "showNavi": true,
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Ja! Du hast die Zahl 3 gefunden.",
            "en": "Yes! You found number 3."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu38",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Banane. Wie viele Bilder sind es?",
            "en": "Count the banana pictures on the white card. How many are there?"
          },
          "visual": "🍌 🍌 🍌",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Richtig gezählt! Es sind 3.",
            "en": "Great counting! There are 3."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu39",
          "prompt": {
            "de": "Navi zeigt die Zahl 3. Auf welcher Antwortkarte siehst du diese Menge? Suche: lilafarbenes Quadrat.",
            "en": "Navi shows number 3. Which answer card shows that many purple square pictures?"
          },
          "visual": "3",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-12-correct",
              "label": "🟪 🟪 🟪"
            },
            {
              "id": "quantity-12-other",
              "label": "🟪 🟪 🟪 🟪"
            }
          ],
          "correctAnswerId": "quantity-12-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 3 Bilder.",
            "en": "Exactly! That answer shows 3 pictures."
          },
          "hint": {
            "de": "Zähle bis 3 und stoppe dann.",
            "en": "Count to 3 and then stop."
          }
        },
        {
          "id": "d2nu40",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: grünes Herz und die Zahl 4. Finde dieselbe Zahl.",
            "en": "Navi shows you a green heart and number 4. Find the same number."
          },
          "visual": "💚   4",
          "showNavi": true,
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Ja! Du hast die Zahl 4 gefunden.",
            "en": "Yes! You found number 4."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu41",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Stern. Wie viele Bilder sind es?",
            "en": "Count the star pictures on the white card. How many are there?"
          },
          "visual": "🌟 🌟 🌟 🌟",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig gezählt! Es sind 4.",
            "en": "Great counting! There are 4."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu42",
          "prompt": {
            "de": "Navi zeigt die Zahl 4. Auf welcher Antwortkarte siehst du diese Menge? Suche: Weintrauben.",
            "en": "Navi shows number 4. Which answer card shows that many grapes pictures?"
          },
          "visual": "4",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-13-other",
              "label": "🍇 🍇 🍇 🍇 🍇"
            },
            {
              "id": "quantity-13-correct",
              "label": "🍇 🍇 🍇 🍇"
            }
          ],
          "correctAnswerId": "quantity-13-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 4 Bilder.",
            "en": "Exactly! That answer shows 4 pictures."
          },
          "hint": {
            "de": "Zähle bis 4 und stoppe dann.",
            "en": "Count to 4 and then stop."
          }
        },
        {
          "id": "d2nu43",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: grünes Quadrat und die Zahl 5. Finde dieselbe Zahl.",
            "en": "Navi shows you a green square and number 5. Find the same number."
          },
          "visual": "🟩   5",
          "showNavi": true,
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Ja! Du hast die Zahl 5 gefunden.",
            "en": "Yes! You found number 5."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu44",
          "prompt": {
            "de": "Zähle auf der weißen Karte: orangefarbener Kreis. Wie viele Bilder sind es?",
            "en": "Count the orange circle pictures on the white card. How many are there?"
          },
          "visual": "🟠 🟠 🟠 🟠 🟠",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig gezählt! Es sind 5.",
            "en": "Great counting! There are 5."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu45",
          "prompt": {
            "de": "Navi zeigt die Zahl 5. Auf welcher Antwortkarte siehst du diese Menge? Suche: Aubergine.",
            "en": "Navi shows number 5. Which answer card shows that many eggplant pictures?"
          },
          "visual": "5",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-14-correct",
              "label": "🍆 🍆 🍆 🍆 🍆"
            },
            {
              "id": "quantity-14-other",
              "label": "🍆 🍆 🍆 🍆"
            }
          ],
          "correctAnswerId": "quantity-14-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 5 Bilder.",
            "en": "Exactly! That answer shows 5 pictures."
          },
          "hint": {
            "de": "Zähle bis 5 und stoppe dann.",
            "en": "Count to 5 and then stop."
          }
        },
        {
          "id": "d2nu46",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: grüner Apfel und die Zahl 1. Finde dieselbe Zahl.",
            "en": "Navi shows you a green apple and number 1. Find the same number."
          },
          "visual": "🍏   1",
          "showNavi": true,
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "1",
              "label": "1"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Ja! Du hast die Zahl 1 gefunden.",
            "en": "Yes! You found number 1."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu47",
          "prompt": {
            "de": "Zähle auf der weißen Karte: orangefarbenes Herz. Wie viele Bilder sind es?",
            "en": "Count the orange heart pictures on the white card. How many are there?"
          },
          "visual": "🧡",
          "answers": [
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Richtig gezählt! Es sind 1.",
            "en": "Great counting! There are 1."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu48",
          "prompt": {
            "de": "Navi zeigt die Zahl 1. Auf welcher Antwortkarte siehst du diese Menge? Suche: rosa Herz.",
            "en": "Navi shows number 1. Which answer card shows that many pink heart pictures?"
          },
          "visual": "1",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-15-other",
              "label": "🩷 🩷"
            },
            {
              "id": "quantity-15-correct",
              "label": "🩷"
            }
          ],
          "correctAnswerId": "quantity-15-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 1 Bilder.",
            "en": "Exactly! That answer shows 1 pictures."
          },
          "hint": {
            "de": "Zähle bis 1 und stoppe dann.",
            "en": "Count to 1 and then stop."
          }
        },
        {
          "id": "d2nu49",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Brokkoli und die Zahl 2. Finde dieselbe Zahl.",
            "en": "Navi shows you a broccoli and number 2. Find the same number."
          },
          "visual": "🥦   2",
          "showNavi": true,
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Ja! Du hast die Zahl 2 gefunden.",
            "en": "Yes! You found number 2."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu50",
          "prompt": {
            "de": "Zähle auf der weißen Karte: orangefarbenes Quadrat. Wie viele Bilder sind es?",
            "en": "Count the orange square pictures on the white card. How many are there?"
          },
          "visual": "🟧 🟧",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Richtig gezählt! Es sind 2.",
            "en": "Great counting! There are 2."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu51",
          "prompt": {
            "de": "Navi zeigt die Zahl 2. Auf welcher Antwortkarte siehst du diese Menge? Suche: rosa Blume.",
            "en": "Navi shows number 2. Which answer card shows that many pink flower pictures?"
          },
          "visual": "2",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-16-correct",
              "label": "🌸 🌸"
            },
            {
              "id": "quantity-16-other",
              "label": "🌸 🌸 🌸"
            }
          ],
          "correctAnswerId": "quantity-16-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 2 Bilder.",
            "en": "Exactly! That answer shows 2 pictures."
          },
          "hint": {
            "de": "Zähle bis 2 und stoppe dann.",
            "en": "Count to 2 and then stop."
          }
        },
        {
          "id": "d2nu52",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Gurke und die Zahl 3. Finde dieselbe Zahl.",
            "en": "Navi shows you a cucumber and number 3. Find the same number."
          },
          "visual": "🥒   3",
          "showNavi": true,
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Ja! Du hast die Zahl 3 gefunden.",
            "en": "Yes! You found number 3."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu53",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Orange. Wie viele Bilder sind es?",
            "en": "Count the orange fruit pictures on the white card. How many are there?"
          },
          "visual": "🍊 🍊 🍊",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Richtig gezählt! Es sind 3.",
            "en": "Great counting! There are 3."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu54",
          "prompt": {
            "de": "Navi zeigt die Zahl 3. Auf welcher Antwortkarte siehst du diese Menge? Suche: Flamingo.",
            "en": "Navi shows number 3. Which answer card shows that many flamingo pictures?"
          },
          "visual": "3",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-17-other",
              "label": "🦩 🦩 🦩 🦩"
            },
            {
              "id": "quantity-17-correct",
              "label": "🦩 🦩 🦩"
            }
          ],
          "correctAnswerId": "quantity-17-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 3 Bilder.",
            "en": "Exactly! That answer shows 3 pictures."
          },
          "hint": {
            "de": "Zähle bis 3 und stoppe dann.",
            "en": "Count to 3 and then stop."
          }
        },
        {
          "id": "d2nu55",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: gelber Kreis und die Zahl 4. Finde dieselbe Zahl.",
            "en": "Navi shows you a yellow circle and number 4. Find the same number."
          },
          "visual": "🟡   4",
          "showNavi": true,
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Ja! Du hast die Zahl 4 gefunden.",
            "en": "Yes! You found number 4."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu56",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Karotte. Wie viele Bilder sind es?",
            "en": "Count the carrot pictures on the white card. How many are there?"
          },
          "visual": "🥕 🥕 🥕 🥕",
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig gezählt! Es sind 4.",
            "en": "Great counting! There are 4."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu57",
          "prompt": {
            "de": "Navi zeigt die Zahl 4. Auf welcher Antwortkarte siehst du diese Menge? Suche: Ferkel.",
            "en": "Navi shows number 4. Which answer card shows that many piglet pictures?"
          },
          "visual": "4",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-18-correct",
              "label": "🐷 🐷 🐷 🐷"
            },
            {
              "id": "quantity-18-other",
              "label": "🐷 🐷 🐷 🐷 🐷"
            }
          ],
          "correctAnswerId": "quantity-18-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 4 Bilder.",
            "en": "Exactly! That answer shows 4 pictures."
          },
          "hint": {
            "de": "Zähle bis 4 und stoppe dann.",
            "en": "Count to 4 and then stop."
          }
        },
        {
          "id": "d2nu58",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: gelbes Herz und die Zahl 5. Finde dieselbe Zahl.",
            "en": "Navi shows you a yellow heart and number 5. Find the same number."
          },
          "visual": "💛   5",
          "showNavi": true,
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Ja! Du hast die Zahl 5 gefunden.",
            "en": "Yes! You found number 5."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu59",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Kürbis. Wie viele Bilder sind es?",
            "en": "Count the pumpkin pictures on the white card. How many are there?"
          },
          "visual": "🎃 🎃 🎃 🎃 🎃",
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig gezählt! Es sind 5.",
            "en": "Great counting! There are 5."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu60",
          "prompt": {
            "de": "Navi zeigt die Zahl 5. Auf welcher Antwortkarte siehst du diese Menge? Suche: rosa Schleife.",
            "en": "Navi shows number 5. Which answer card shows that many pink bow pictures?"
          },
          "visual": "5",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-19-other",
              "label": "🎀 🎀 🎀 🎀"
            },
            {
              "id": "quantity-19-correct",
              "label": "🎀 🎀 🎀 🎀 🎀"
            }
          ],
          "correctAnswerId": "quantity-19-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 5 Bilder.",
            "en": "Exactly! That answer shows 5 pictures."
          },
          "hint": {
            "de": "Zähle bis 5 und stoppe dann.",
            "en": "Count to 5 and then stop."
          }
        },
        {
          "id": "d2nu61",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: gelbes Quadrat und die Zahl 1. Finde dieselbe Zahl.",
            "en": "Navi shows you a yellow square and number 1. Find the same number."
          },
          "visual": "🟨   1",
          "showNavi": true,
          "answers": [
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Ja! Du hast die Zahl 1 gefunden.",
            "en": "Yes! You found number 1."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu62",
          "prompt": {
            "de": "Zähle auf der weißen Karte: lilafarbener Kreis. Wie viele Bilder sind es?",
            "en": "Count the purple circle pictures on the white card. How many are there?"
          },
          "visual": "🟣",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "1",
              "label": "1"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Richtig gezählt! Es sind 1.",
            "en": "Great counting! There are 1."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu63",
          "prompt": {
            "de": "Navi zeigt die Zahl 1. Auf welcher Antwortkarte siehst du diese Menge? Suche: brauner Kreis.",
            "en": "Navi shows number 1. Which answer card shows that many brown circle pictures?"
          },
          "visual": "1",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-20-correct",
              "label": "🟤"
            },
            {
              "id": "quantity-20-other",
              "label": "🟤 🟤"
            }
          ],
          "correctAnswerId": "quantity-20-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 1 Bilder.",
            "en": "Exactly! That answer shows 1 pictures."
          },
          "hint": {
            "de": "Zähle bis 1 und stoppe dann.",
            "en": "Count to 1 and then stop."
          }
        },
        {
          "id": "d2nu64",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Zitrone und die Zahl 2. Finde dieselbe Zahl.",
            "en": "Navi shows you a lemon and number 2. Find the same number."
          },
          "visual": "🍋   2",
          "showNavi": true,
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Ja! Du hast die Zahl 2 gefunden.",
            "en": "Yes! You found number 2."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu65",
          "prompt": {
            "de": "Zähle auf der weißen Karte: lilafarbenes Herz. Wie viele Bilder sind es?",
            "en": "Count the purple heart pictures on the white card. How many are there?"
          },
          "visual": "💜 💜",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Richtig gezählt! Es sind 2.",
            "en": "Great counting! There are 2."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu66",
          "prompt": {
            "de": "Navi zeigt die Zahl 2. Auf welcher Antwortkarte siehst du diese Menge? Suche: braunes Herz.",
            "en": "Navi shows number 2. Which answer card shows that many brown heart pictures?"
          },
          "visual": "2",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-21-other",
              "label": "🤎 🤎 🤎"
            },
            {
              "id": "quantity-21-correct",
              "label": "🤎 🤎"
            }
          ],
          "correctAnswerId": "quantity-21-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 2 Bilder.",
            "en": "Exactly! That answer shows 2 pictures."
          },
          "hint": {
            "de": "Zähle bis 2 und stoppe dann.",
            "en": "Count to 2 and then stop."
          }
        },
        {
          "id": "d2nu67",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Banane und die Zahl 3. Finde dieselbe Zahl.",
            "en": "Navi shows you a banana and number 3. Find the same number."
          },
          "visual": "🍌   3",
          "showNavi": true,
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Ja! Du hast die Zahl 3 gefunden.",
            "en": "Yes! You found number 3."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu68",
          "prompt": {
            "de": "Zähle auf der weißen Karte: lilafarbenes Quadrat. Wie viele Bilder sind es?",
            "en": "Count the purple square pictures on the white card. How many are there?"
          },
          "visual": "🟪 🟪 🟪",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Richtig gezählt! Es sind 3.",
            "en": "Great counting! There are 3."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu69",
          "prompt": {
            "de": "Navi zeigt die Zahl 3. Auf welcher Antwortkarte siehst du diese Menge? Suche: Braunbär.",
            "en": "Navi shows number 3. Which answer card shows that many brown bear pictures?"
          },
          "visual": "3",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-22-correct",
              "label": "🐻 🐻 🐻"
            },
            {
              "id": "quantity-22-other",
              "label": "🐻 🐻 🐻 🐻"
            }
          ],
          "correctAnswerId": "quantity-22-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 3 Bilder.",
            "en": "Exactly! That answer shows 3 pictures."
          },
          "hint": {
            "de": "Zähle bis 3 und stoppe dann.",
            "en": "Count to 3 and then stop."
          }
        },
        {
          "id": "d2nu70",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Stern und die Zahl 4. Finde dieselbe Zahl.",
            "en": "Navi shows you a star and number 4. Find the same number."
          },
          "visual": "🌟   4",
          "showNavi": true,
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Ja! Du hast die Zahl 4 gefunden.",
            "en": "Yes! You found number 4."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu71",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Weintrauben. Wie viele Bilder sind es?",
            "en": "Count the grapes pictures on the white card. How many are there?"
          },
          "visual": "🍇 🍇 🍇 🍇",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig gezählt! Es sind 4.",
            "en": "Great counting! There are 4."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu72",
          "prompt": {
            "de": "Navi zeigt die Zahl 4. Auf welcher Antwortkarte siehst du diese Menge? Suche: Schokolade.",
            "en": "Navi shows number 4. Which answer card shows that many chocolate pictures?"
          },
          "visual": "4",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-23-other",
              "label": "🍫 🍫 🍫 🍫 🍫"
            },
            {
              "id": "quantity-23-correct",
              "label": "🍫 🍫 🍫 🍫"
            }
          ],
          "correctAnswerId": "quantity-23-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 4 Bilder.",
            "en": "Exactly! That answer shows 4 pictures."
          },
          "hint": {
            "de": "Zähle bis 4 und stoppe dann.",
            "en": "Count to 4 and then stop."
          }
        },
        {
          "id": "d2nu73",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: orangefarbener Kreis und die Zahl 5. Finde dieselbe Zahl.",
            "en": "Navi shows you a orange circle and number 5. Find the same number."
          },
          "visual": "🟠   5",
          "showNavi": true,
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Ja! Du hast die Zahl 5 gefunden.",
            "en": "Yes! You found number 5."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu74",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Aubergine. Wie viele Bilder sind es?",
            "en": "Count the eggplant pictures on the white card. How many are there?"
          },
          "visual": "🍆 🍆 🍆 🍆 🍆",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig gezählt! Es sind 5.",
            "en": "Great counting! There are 5."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu75",
          "prompt": {
            "de": "Navi zeigt die Zahl 5. Auf welcher Antwortkarte siehst du diese Menge? Suche: Haselnuss.",
            "en": "Navi shows number 5. Which answer card shows that many hazelnut pictures?"
          },
          "visual": "5",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-24-correct",
              "label": "🌰 🌰 🌰 🌰 🌰"
            },
            {
              "id": "quantity-24-other",
              "label": "🌰 🌰 🌰 🌰"
            }
          ],
          "correctAnswerId": "quantity-24-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 5 Bilder.",
            "en": "Exactly! That answer shows 5 pictures."
          },
          "hint": {
            "de": "Zähle bis 5 und stoppe dann.",
            "en": "Count to 5 and then stop."
          }
        },
        {
          "id": "d2nu76",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: orangefarbenes Herz und die Zahl 1. Finde dieselbe Zahl.",
            "en": "Navi shows you a orange heart and number 1. Find the same number."
          },
          "visual": "🧡   1",
          "showNavi": true,
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "1",
              "label": "1"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Ja! Du hast die Zahl 1 gefunden.",
            "en": "Yes! You found number 1."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu77",
          "prompt": {
            "de": "Zähle auf der weißen Karte: rosa Herz. Wie viele Bilder sind es?",
            "en": "Count the pink heart pictures on the white card. How many are there?"
          },
          "visual": "🩷",
          "answers": [
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Richtig gezählt! Es sind 1.",
            "en": "Great counting! There are 1."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu78",
          "prompt": {
            "de": "Navi zeigt die Zahl 1. Auf welcher Antwortkarte siehst du diese Menge? Suche: Apfel.",
            "en": "Navi shows number 1. Which answer card shows that many apple pictures?"
          },
          "visual": "1",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-25-other",
              "label": "🍎 🍎"
            },
            {
              "id": "quantity-25-correct",
              "label": "🍎"
            }
          ],
          "correctAnswerId": "quantity-25-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 1 Bilder.",
            "en": "Exactly! That answer shows 1 pictures."
          },
          "hint": {
            "de": "Zähle bis 1 und stoppe dann.",
            "en": "Count to 1 and then stop."
          }
        },
        {
          "id": "d2nu79",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: orangefarbenes Quadrat und die Zahl 2. Finde dieselbe Zahl.",
            "en": "Navi shows you a orange square and number 2. Find the same number."
          },
          "visual": "🟧   2",
          "showNavi": true,
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Ja! Du hast die Zahl 2 gefunden.",
            "en": "Yes! You found number 2."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu80",
          "prompt": {
            "de": "Zähle auf der weißen Karte: rosa Blume. Wie viele Bilder sind es?",
            "en": "Count the pink flower pictures on the white card. How many are there?"
          },
          "visual": "🌸 🌸",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Richtig gezählt! Es sind 2.",
            "en": "Great counting! There are 2."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu81",
          "prompt": {
            "de": "Navi zeigt die Zahl 2. Auf welcher Antwortkarte siehst du diese Menge? Suche: Erdbeere.",
            "en": "Navi shows number 2. Which answer card shows that many strawberry pictures?"
          },
          "visual": "2",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-26-correct",
              "label": "🍓 🍓"
            },
            {
              "id": "quantity-26-other",
              "label": "🍓 🍓 🍓"
            }
          ],
          "correctAnswerId": "quantity-26-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 2 Bilder.",
            "en": "Exactly! That answer shows 2 pictures."
          },
          "hint": {
            "de": "Zähle bis 2 und stoppe dann.",
            "en": "Count to 2 and then stop."
          }
        },
        {
          "id": "d2nu82",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Orange und die Zahl 3. Finde dieselbe Zahl.",
            "en": "Navi shows you a orange fruit and number 3. Find the same number."
          },
          "visual": "🍊   3",
          "showNavi": true,
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Ja! Du hast die Zahl 3 gefunden.",
            "en": "Yes! You found number 3."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu83",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Flamingo. Wie viele Bilder sind es?",
            "en": "Count the flamingo pictures on the white card. How many are there?"
          },
          "visual": "🦩 🦩 🦩",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Richtig gezählt! Es sind 3.",
            "en": "Great counting! There are 3."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu84",
          "prompt": {
            "de": "Navi zeigt die Zahl 3. Auf welcher Antwortkarte siehst du diese Menge? Suche: Kirschen.",
            "en": "Navi shows number 3. Which answer card shows that many cherries pictures?"
          },
          "visual": "3",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-27-other",
              "label": "🍒 🍒 🍒 🍒"
            },
            {
              "id": "quantity-27-correct",
              "label": "🍒 🍒 🍒"
            }
          ],
          "correctAnswerId": "quantity-27-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 3 Bilder.",
            "en": "Exactly! That answer shows 3 pictures."
          },
          "hint": {
            "de": "Zähle bis 3 und stoppe dann.",
            "en": "Count to 3 and then stop."
          }
        },
        {
          "id": "d2nu85",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Karotte und die Zahl 4. Finde dieselbe Zahl.",
            "en": "Navi shows you a carrot and number 4. Find the same number."
          },
          "visual": "🥕   4",
          "showNavi": true,
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Ja! Du hast die Zahl 4 gefunden.",
            "en": "Yes! You found number 4."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu86",
          "prompt": {
            "de": "Zähle auf der weißen Karte: Ferkel. Wie viele Bilder sind es?",
            "en": "Count the piglet pictures on the white card. How many are there?"
          },
          "visual": "🐷 🐷 🐷 🐷",
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig gezählt! Es sind 4.",
            "en": "Great counting! There are 4."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu87",
          "prompt": {
            "de": "Navi zeigt die Zahl 4. Auf welcher Antwortkarte siehst du diese Menge? Suche: Tomate.",
            "en": "Navi shows number 4. Which answer card shows that many tomato pictures?"
          },
          "visual": "4",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-28-correct",
              "label": "🍅 🍅 🍅 🍅"
            },
            {
              "id": "quantity-28-other",
              "label": "🍅 🍅 🍅 🍅 🍅"
            }
          ],
          "correctAnswerId": "quantity-28-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 4 Bilder.",
            "en": "Exactly! That answer shows 4 pictures."
          },
          "hint": {
            "de": "Zähle bis 4 und stoppe dann.",
            "en": "Count to 4 and then stop."
          }
        },
        {
          "id": "d2nu88",
          "prompt": {
            "de": "Navi zeigt dir dieses Bild: Kürbis und die Zahl 5. Finde dieselbe Zahl.",
            "en": "Navi shows you a pumpkin and number 5. Find the same number."
          },
          "visual": "🎃   5",
          "showNavi": true,
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Ja! Du hast die Zahl 5 gefunden.",
            "en": "Yes! You found number 5."
          },
          "hint": {
            "de": "Vergleiche die Zahl auf Navis Karte mit den beiden Antworten.",
            "en": "Match the number on Navi's card with the two answers."
          }
        },
        {
          "id": "d2nu89",
          "prompt": {
            "de": "Zähle auf der weißen Karte: rosa Schleife. Wie viele Bilder sind es?",
            "en": "Count the pink bow pictures on the white card. How many are there?"
          },
          "visual": "🎀 🎀 🎀 🎀 🎀",
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig gezählt! Es sind 5.",
            "en": "Great counting! There are 5."
          },
          "hint": {
            "de": "Zeige beim Zählen auf jedes Bild.",
            "en": "Point to every picture while you count."
          }
        },
        {
          "id": "d2nu90",
          "prompt": {
            "de": "Navi zeigt die Zahl 5. Auf welcher Antwortkarte siehst du diese Menge? Suche: rotes Herz.",
            "en": "Navi shows number 5. Which answer card shows that many red heart pictures?"
          },
          "visual": "5",
          "showNavi": true,
          "answers": [
            {
              "id": "quantity-29-other",
              "label": "❤️ ❤️ ❤️ ❤️"
            },
            {
              "id": "quantity-29-correct",
              "label": "❤️ ❤️ ❤️ ❤️ ❤️"
            }
          ],
          "correctAnswerId": "quantity-29-correct",
          "success": {
            "de": "Genau! Diese Antwort zeigt 5 Bilder.",
            "en": "Exactly! That answer shows 5 pictures."
          },
          "hint": {
            "de": "Zähle bis 5 und stoppe dann.",
            "en": "Count to 5 and then stop."
          }
        }
      ],
      "adventurer": [
        {
          "id": "nu1",
          "prompt": {
            "de": "Wie viele Äpfel liegen auf Navis Karte?",
            "en": "How many apples are on Navi's map?"
          },
          "visual": "🍎 🍎",
          "answers": [
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Richtig gezählt! Es sind 2.",
            "en": "Great counting! There are 2."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu2",
          "prompt": {
            "de": "Wie viele Ballons liegen auf Navis Karte?",
            "en": "How many balloons are on Navi's map?"
          },
          "visual": "🎈 🎈 🎈 🎈",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig gezählt! Es sind 4.",
            "en": "Great counting! There are 4."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu3",
          "prompt": {
            "de": "Wie viele Enten liegen auf Navis Karte?",
            "en": "How many ducks are on Navi's map?"
          },
          "visual": "🦆 🦆 🦆 🦆 🦆 🦆",
          "answers": [
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "6",
              "label": "6"
            }
          ],
          "correctAnswerId": "6",
          "success": {
            "de": "Richtig gezählt! Es sind 6.",
            "en": "Great counting! There are 6."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu4",
          "prompt": {
            "de": "Wie viele Sterne liegen auf Navis Karte?",
            "en": "How many stars are on Navi's map?"
          },
          "visual": "⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐ ⭐",
          "answers": [
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "9",
              "label": "9"
            }
          ],
          "correctAnswerId": "8",
          "success": {
            "de": "Richtig gezählt! Es sind 8.",
            "en": "Great counting! There are 8."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu5",
          "prompt": {
            "de": "Wie viele Marienkäfer liegen auf Navis Karte?",
            "en": "How many ladybugs are on Navi's map?"
          },
          "visual": "🐞 🐞 🐞 🐞 🐞",
          "answers": [
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig gezählt! Es sind 5.",
            "en": "Great counting! There are 5."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu6",
          "prompt": {
            "de": "Wie viele Fische liegen auf Navis Karte?",
            "en": "How many fish are on Navi's map?"
          },
          "visual": "🐟 🐟 🐟 🐟 🐟 🐟 🐟",
          "answers": [
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            }
          ],
          "correctAnswerId": "7",
          "success": {
            "de": "Richtig gezählt! Es sind 7.",
            "en": "Great counting! There are 7."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu7",
          "prompt": {
            "de": "Wie viele Blumen liegen auf Navis Karte?",
            "en": "How many flowers are on Navi's map?"
          },
          "visual": "🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸 🌸",
          "answers": [
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Richtig gezählt! Es sind 9.",
            "en": "Great counting! There are 9."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu8",
          "prompt": {
            "de": "Wie viele Autos liegen auf Navis Karte?",
            "en": "How many cars are on Navi's map?"
          },
          "visual": "🚗 🚗 🚗",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Richtig gezählt! Es sind 3.",
            "en": "Great counting! There are 3."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu9",
          "prompt": {
            "de": "Wie viele Kirschen liegen auf Navis Karte?",
            "en": "How many cherries are on Navi's map?"
          },
          "visual": "🍒 🍒 🍒 🍒 🍒 🍒 🍒 🍒 🍒 🍒",
          "answers": [
            {
              "id": "11",
              "label": "11"
            },
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            }
          ],
          "correctAnswerId": "10",
          "success": {
            "de": "Richtig gezählt! Es sind 10.",
            "en": "Great counting! There are 10."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu10",
          "prompt": {
            "de": "Wie viele Muscheln liegen auf Navis Karte?",
            "en": "How many shells are on Navi's map?"
          },
          "visual": "🐚 🐚 🐚 🐚",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig gezählt! Es sind 4.",
            "en": "Great counting! There are 4."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu11",
          "prompt": {
            "de": "Wie viele Bienen liegen auf Navis Karte?",
            "en": "How many bees are on Navi's map?"
          },
          "visual": "🐝 🐝 🐝 🐝 🐝 🐝",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "6",
          "success": {
            "de": "Richtig gezählt! Es sind 6.",
            "en": "Great counting! There are 6."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu12",
          "prompt": {
            "de": "Wie viele Frösche liegen auf Navis Karte?",
            "en": "How many frogs are on Navi's map?"
          },
          "visual": "🐸 🐸 🐸 🐸 🐸 🐸 🐸 🐸",
          "answers": [
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            }
          ],
          "correctAnswerId": "8",
          "success": {
            "de": "Richtig gezählt! Es sind 8.",
            "en": "Great counting! There are 8."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu13",
          "prompt": {
            "de": "Wie viele Kekse liegen auf Navis Karte?",
            "en": "How many cookies are on Navi's map?"
          },
          "visual": "🍪 🍪 🍪 🍪 🍪",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "6",
              "label": "6"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig gezählt! Es sind 5.",
            "en": "Great counting! There are 5."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu14",
          "prompt": {
            "de": "Wie viele Bausteine liegen auf Navis Karte?",
            "en": "How many blocks are on Navi's map?"
          },
          "visual": "🧱 🧱 🧱 🧱 🧱 🧱 🧱",
          "answers": [
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "6",
              "label": "6"
            }
          ],
          "correctAnswerId": "7",
          "success": {
            "de": "Richtig gezählt! Es sind 7.",
            "en": "Great counting! There are 7."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu15",
          "prompt": {
            "de": "Wie viele Drachen liegen auf Navis Karte?",
            "en": "How many kites are on Navi's map?"
          },
          "visual": "🪁 🪁 🪁 🪁 🪁 🪁 🪁 🪁 🪁",
          "answers": [
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "9",
              "label": "9"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Richtig gezählt! Es sind 9.",
            "en": "Great counting! There are 9."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu16",
          "prompt": {
            "de": "Wie viele Boote liegen auf Navis Karte?",
            "en": "How many boats are on Navi's map?"
          },
          "visual": "⛵ ⛵ ⛵",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Richtig gezählt! Es sind 3.",
            "en": "Great counting! There are 3."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu17",
          "prompt": {
            "de": "Wie viele Kaninchen liegen auf Navis Karte?",
            "en": "How many rabbits are on Navi's map?"
          },
          "visual": "🐰 🐰 🐰 🐰 🐰 🐰",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "6",
          "success": {
            "de": "Richtig gezählt! Es sind 6.",
            "en": "Great counting! There are 6."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu18",
          "prompt": {
            "de": "Wie viele Monde liegen auf Navis Karte?",
            "en": "How many moons are on Navi's map?"
          },
          "visual": "🌙 🌙",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Richtig gezählt! Es sind 2.",
            "en": "Great counting! There are 2."
          },
          "hint": {
            "de": "Tippe beim Zählen jedes Bild einmal an.",
            "en": "Point to each picture once while counting."
          }
        },
        {
          "id": "nu19",
          "prompt": {
            "de": "Welche ist die größere Zahl: 2 oder 5?",
            "en": "Which is the larger number: 2 or 5?"
          },
          "visual": "2  ↔  5",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "7",
              "label": "7"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Genau! Die richtige Zahl ist 5.",
            "en": "Exactly! The correct number is 5."
          },
          "hint": {
            "de": "Die größere Zahl liegt weiter hinten beim Zählen.",
            "en": "The larger number comes later when counting."
          }
        },
        {
          "id": "nu20",
          "prompt": {
            "de": "Welche ist die kleinere Zahl: 7 oder 3?",
            "en": "Which is the smaller number: 7 or 3?"
          },
          "visual": "7  ↔  3",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "7",
              "label": "7"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Genau! Die richtige Zahl ist 3.",
            "en": "Exactly! The correct number is 3."
          },
          "hint": {
            "de": "Die kleinere Zahl kommt beim Zählen zuerst.",
            "en": "The smaller number comes first when counting."
          }
        },
        {
          "id": "nu21",
          "prompt": {
            "de": "Welche ist die größere Zahl: 4 oder 9?",
            "en": "Which is the larger number: 4 or 9?"
          },
          "visual": "4  ↔  9",
          "answers": [
            {
              "id": "11",
              "label": "11"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "9",
              "label": "9"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Genau! Die richtige Zahl ist 9.",
            "en": "Exactly! The correct number is 9."
          },
          "hint": {
            "de": "Die größere Zahl liegt weiter hinten beim Zählen.",
            "en": "The larger number comes later when counting."
          }
        },
        {
          "id": "nu22",
          "prompt": {
            "de": "Welche ist die kleinere Zahl: 8 oder 6?",
            "en": "Which is the smaller number: 8 or 6?"
          },
          "visual": "8  ↔  6",
          "answers": [
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "6",
          "success": {
            "de": "Genau! Die richtige Zahl ist 6.",
            "en": "Exactly! The correct number is 6."
          },
          "hint": {
            "de": "Die kleinere Zahl kommt beim Zählen zuerst.",
            "en": "The smaller number comes first when counting."
          }
        },
        {
          "id": "nu23",
          "prompt": {
            "de": "Welche ist die größere Zahl: 10 oder 7?",
            "en": "Which is the larger number: 10 or 7?"
          },
          "visual": "10  ↔  7",
          "answers": [
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "12",
              "label": "12"
            },
            {
              "id": "10",
              "label": "10"
            }
          ],
          "correctAnswerId": "10",
          "success": {
            "de": "Genau! Die richtige Zahl ist 10.",
            "en": "Exactly! The correct number is 10."
          },
          "hint": {
            "de": "Die größere Zahl liegt weiter hinten beim Zählen.",
            "en": "The larger number comes later when counting."
          }
        },
        {
          "id": "nu24",
          "prompt": {
            "de": "Welche ist die kleinere Zahl: 1 oder 4?",
            "en": "Which is the smaller number: 1 or 4?"
          },
          "visual": "1  ↔  4",
          "answers": [
            {
              "id": "-1",
              "label": "-1"
            },
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "1",
          "success": {
            "de": "Genau! Die richtige Zahl ist 1.",
            "en": "Exactly! The correct number is 1."
          },
          "hint": {
            "de": "Die kleinere Zahl kommt beim Zählen zuerst.",
            "en": "The smaller number comes first when counting."
          }
        },
        {
          "id": "nu25",
          "prompt": {
            "de": "Welche ist die größere Zahl: 6 oder 11?",
            "en": "Which is the larger number: 6 or 11?"
          },
          "visual": "6  ↔  11",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "11",
              "label": "11"
            },
            {
              "id": "13",
              "label": "13"
            }
          ],
          "correctAnswerId": "11",
          "success": {
            "de": "Genau! Die richtige Zahl ist 11.",
            "en": "Exactly! The correct number is 11."
          },
          "hint": {
            "de": "Die größere Zahl liegt weiter hinten beim Zählen.",
            "en": "The larger number comes later when counting."
          }
        },
        {
          "id": "nu26",
          "prompt": {
            "de": "Welche ist die kleinere Zahl: 12 oder 9?",
            "en": "Which is the smaller number: 12 or 9?"
          },
          "visual": "12  ↔  9",
          "answers": [
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "12",
              "label": "12"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Genau! Die richtige Zahl ist 9.",
            "en": "Exactly! The correct number is 9."
          },
          "hint": {
            "de": "Die kleinere Zahl kommt beim Zählen zuerst.",
            "en": "The smaller number comes first when counting."
          }
        },
        {
          "id": "nu27",
          "prompt": {
            "de": "Welche ist die größere Zahl: 13 oder 15?",
            "en": "Which is the larger number: 13 or 15?"
          },
          "visual": "13  ↔  15",
          "answers": [
            {
              "id": "17",
              "label": "17"
            },
            {
              "id": "13",
              "label": "13"
            },
            {
              "id": "15",
              "label": "15"
            }
          ],
          "correctAnswerId": "15",
          "success": {
            "de": "Genau! Die richtige Zahl ist 15.",
            "en": "Exactly! The correct number is 15."
          },
          "hint": {
            "de": "Die größere Zahl liegt weiter hinten beim Zählen.",
            "en": "The larger number comes later when counting."
          }
        },
        {
          "id": "nu28",
          "prompt": {
            "de": "Welche ist die kleinere Zahl: 16 oder 14?",
            "en": "Which is the smaller number: 16 or 14?"
          },
          "visual": "16  ↔  14",
          "answers": [
            {
              "id": "16",
              "label": "16"
            },
            {
              "id": "14",
              "label": "14"
            },
            {
              "id": "12",
              "label": "12"
            }
          ],
          "correctAnswerId": "14",
          "success": {
            "de": "Genau! Die richtige Zahl ist 14.",
            "en": "Exactly! The correct number is 14."
          },
          "hint": {
            "de": "Die kleinere Zahl kommt beim Zählen zuerst.",
            "en": "The smaller number comes first when counting."
          }
        },
        {
          "id": "nu29",
          "prompt": {
            "de": "Welche ist die größere Zahl: 18 oder 20?",
            "en": "Which is the larger number: 18 or 20?"
          },
          "visual": "18  ↔  20",
          "answers": [
            {
              "id": "20",
              "label": "20"
            },
            {
              "id": "22",
              "label": "22"
            },
            {
              "id": "18",
              "label": "18"
            }
          ],
          "correctAnswerId": "20",
          "success": {
            "de": "Genau! Die richtige Zahl ist 20.",
            "en": "Exactly! The correct number is 20."
          },
          "hint": {
            "de": "Die größere Zahl liegt weiter hinten beim Zählen.",
            "en": "The larger number comes later when counting."
          }
        },
        {
          "id": "nu30",
          "prompt": {
            "de": "Welche ist die kleinere Zahl: 19 oder 17?",
            "en": "Which is the smaller number: 19 or 17?"
          },
          "visual": "19  ↔  17",
          "answers": [
            {
              "id": "15",
              "label": "15"
            },
            {
              "id": "19",
              "label": "19"
            },
            {
              "id": "17",
              "label": "17"
            }
          ],
          "correctAnswerId": "17",
          "success": {
            "de": "Genau! Die richtige Zahl ist 17.",
            "en": "Exactly! The correct number is 17."
          },
          "hint": {
            "de": "Die kleinere Zahl kommt beim Zählen zuerst.",
            "en": "The smaller number comes first when counting."
          }
        },
        {
          "id": "nu31",
          "prompt": {
            "de": "Navi findet 1 Sterne und danach noch 2. Wie viele sind es zusammen?",
            "en": "Navi finds 1 stars and then 2 more. How many are there altogether?"
          },
          "visual": "1 + 2 = ?",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Super gerechnet! 1 plus 2 ist 3.",
            "en": "Great work! 1 plus 2 is 3."
          },
          "hint": {
            "de": "Starte bei 1 und zähle 2 weiter.",
            "en": "Start at 1 and count forward 2 more."
          }
        },
        {
          "id": "nu32",
          "prompt": {
            "de": "Navi findet 2 Sterne und danach noch 2. Wie viele sind es zusammen?",
            "en": "Navi finds 2 stars and then 2 more. How many are there altogether?"
          },
          "visual": "2 + 2 = ?",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Super gerechnet! 2 plus 2 ist 4.",
            "en": "Great work! 2 plus 2 is 4."
          },
          "hint": {
            "de": "Starte bei 2 und zähle 2 weiter.",
            "en": "Start at 2 and count forward 2 more."
          }
        },
        {
          "id": "nu33",
          "prompt": {
            "de": "Navi findet 2 Sterne und danach noch 3. Wie viele sind es zusammen?",
            "en": "Navi finds 2 stars and then 3 more. How many are there altogether?"
          },
          "visual": "2 + 3 = ?",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Super gerechnet! 2 plus 3 ist 5.",
            "en": "Great work! 2 plus 3 is 5."
          },
          "hint": {
            "de": "Starte bei 2 und zähle 3 weiter.",
            "en": "Start at 2 and count forward 3 more."
          }
        },
        {
          "id": "nu34",
          "prompt": {
            "de": "Navi findet 4 Sterne und danach noch 1. Wie viele sind es zusammen?",
            "en": "Navi finds 4 stars and then 1 more. How many are there altogether?"
          },
          "visual": "4 + 1 = ?",
          "answers": [
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            },
            {
              "id": "6",
              "label": "6"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Super gerechnet! 4 plus 1 ist 5.",
            "en": "Great work! 4 plus 1 is 5."
          },
          "hint": {
            "de": "Starte bei 4 und zähle 1 weiter.",
            "en": "Start at 4 and count forward 1 more."
          }
        },
        {
          "id": "nu35",
          "prompt": {
            "de": "Navi findet 3 Sterne und danach noch 3. Wie viele sind es zusammen?",
            "en": "Navi finds 3 stars and then 3 more. How many are there altogether?"
          },
          "visual": "3 + 3 = ?",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "6",
          "success": {
            "de": "Super gerechnet! 3 plus 3 ist 6.",
            "en": "Great work! 3 plus 3 is 6."
          },
          "hint": {
            "de": "Starte bei 3 und zähle 3 weiter.",
            "en": "Start at 3 and count forward 3 more."
          }
        },
        {
          "id": "nu36",
          "prompt": {
            "de": "Navi findet 5 Sterne und danach noch 2. Wie viele sind es zusammen?",
            "en": "Navi finds 5 stars and then 2 more. How many are there altogether?"
          },
          "visual": "5 + 2 = ?",
          "answers": [
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            }
          ],
          "correctAnswerId": "7",
          "success": {
            "de": "Super gerechnet! 5 plus 2 ist 7.",
            "en": "Great work! 5 plus 2 is 7."
          },
          "hint": {
            "de": "Starte bei 5 und zähle 2 weiter.",
            "en": "Start at 5 and count forward 2 more."
          }
        },
        {
          "id": "nu37",
          "prompt": {
            "de": "Navi findet 4 Sterne und danach noch 4. Wie viele sind es zusammen?",
            "en": "Navi finds 4 stars and then 4 more. How many are there altogether?"
          },
          "visual": "4 + 4 = ?",
          "answers": [
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "9",
              "label": "9"
            }
          ],
          "correctAnswerId": "8",
          "success": {
            "de": "Super gerechnet! 4 plus 4 ist 8.",
            "en": "Great work! 4 plus 4 is 8."
          },
          "hint": {
            "de": "Starte bei 4 und zähle 4 weiter.",
            "en": "Start at 4 and count forward 4 more."
          }
        },
        {
          "id": "nu38",
          "prompt": {
            "de": "Navi findet 6 Sterne und danach noch 3. Wie viele sind es zusammen?",
            "en": "Navi finds 6 stars and then 3 more. How many are there altogether?"
          },
          "visual": "6 + 3 = ?",
          "answers": [
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "8",
              "label": "8"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Super gerechnet! 6 plus 3 ist 9.",
            "en": "Great work! 6 plus 3 is 9."
          },
          "hint": {
            "de": "Starte bei 6 und zähle 3 weiter.",
            "en": "Start at 6 and count forward 3 more."
          }
        },
        {
          "id": "nu39",
          "prompt": {
            "de": "Navi findet 5 Sterne und danach noch 5. Wie viele sind es zusammen?",
            "en": "Navi finds 5 stars and then 5 more. How many are there altogether?"
          },
          "visual": "5 + 5 = ?",
          "answers": [
            {
              "id": "11",
              "label": "11"
            },
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            }
          ],
          "correctAnswerId": "10",
          "success": {
            "de": "Super gerechnet! 5 plus 5 ist 10.",
            "en": "Great work! 5 plus 5 is 10."
          },
          "hint": {
            "de": "Starte bei 5 und zähle 5 weiter.",
            "en": "Start at 5 and count forward 5 more."
          }
        },
        {
          "id": "nu40",
          "prompt": {
            "de": "Navi findet 7 Sterne und danach noch 4. Wie viele sind es zusammen?",
            "en": "Navi finds 7 stars and then 4 more. How many are there altogether?"
          },
          "visual": "7 + 4 = ?",
          "answers": [
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "11",
              "label": "11"
            },
            {
              "id": "12",
              "label": "12"
            }
          ],
          "correctAnswerId": "11",
          "success": {
            "de": "Super gerechnet! 7 plus 4 ist 11.",
            "en": "Great work! 7 plus 4 is 11."
          },
          "hint": {
            "de": "Starte bei 7 und zähle 4 weiter.",
            "en": "Start at 7 and count forward 4 more."
          }
        },
        {
          "id": "nu41",
          "prompt": {
            "de": "Navi findet 6 Sterne und danach noch 6. Wie viele sind es zusammen?",
            "en": "Navi finds 6 stars and then 6 more. How many are there altogether?"
          },
          "visual": "6 + 6 = ?",
          "answers": [
            {
              "id": "12",
              "label": "12"
            },
            {
              "id": "13",
              "label": "13"
            },
            {
              "id": "11",
              "label": "11"
            }
          ],
          "correctAnswerId": "12",
          "success": {
            "de": "Super gerechnet! 6 plus 6 ist 12.",
            "en": "Great work! 6 plus 6 is 12."
          },
          "hint": {
            "de": "Starte bei 6 und zähle 6 weiter.",
            "en": "Start at 6 and count forward 6 more."
          }
        },
        {
          "id": "nu42",
          "prompt": {
            "de": "Navi findet 8 Sterne und danach noch 5. Wie viele sind es zusammen?",
            "en": "Navi finds 8 stars and then 5 more. How many are there altogether?"
          },
          "visual": "8 + 5 = ?",
          "answers": [
            {
              "id": "14",
              "label": "14"
            },
            {
              "id": "12",
              "label": "12"
            },
            {
              "id": "13",
              "label": "13"
            }
          ],
          "correctAnswerId": "13",
          "success": {
            "de": "Super gerechnet! 8 plus 5 ist 13.",
            "en": "Great work! 8 plus 5 is 13."
          },
          "hint": {
            "de": "Starte bei 8 und zähle 5 weiter.",
            "en": "Start at 8 and count forward 5 more."
          }
        },
        {
          "id": "nu43",
          "prompt": {
            "de": "Navi findet 7 Sterne und danach noch 7. Wie viele sind es zusammen?",
            "en": "Navi finds 7 stars and then 7 more. How many are there altogether?"
          },
          "visual": "7 + 7 = ?",
          "answers": [
            {
              "id": "13",
              "label": "13"
            },
            {
              "id": "14",
              "label": "14"
            },
            {
              "id": "15",
              "label": "15"
            }
          ],
          "correctAnswerId": "14",
          "success": {
            "de": "Super gerechnet! 7 plus 7 ist 14.",
            "en": "Great work! 7 plus 7 is 14."
          },
          "hint": {
            "de": "Starte bei 7 und zähle 7 weiter.",
            "en": "Start at 7 and count forward 7 more."
          }
        },
        {
          "id": "nu44",
          "prompt": {
            "de": "Navi findet 9 Sterne und danach noch 6. Wie viele sind es zusammen?",
            "en": "Navi finds 9 stars and then 6 more. How many are there altogether?"
          },
          "visual": "9 + 6 = ?",
          "answers": [
            {
              "id": "15",
              "label": "15"
            },
            {
              "id": "16",
              "label": "16"
            },
            {
              "id": "14",
              "label": "14"
            }
          ],
          "correctAnswerId": "15",
          "success": {
            "de": "Super gerechnet! 9 plus 6 ist 15.",
            "en": "Great work! 9 plus 6 is 15."
          },
          "hint": {
            "de": "Starte bei 9 und zähle 6 weiter.",
            "en": "Start at 9 and count forward 6 more."
          }
        },
        {
          "id": "nu45",
          "prompt": {
            "de": "Navi findet 8 Sterne und danach noch 8. Wie viele sind es zusammen?",
            "en": "Navi finds 8 stars and then 8 more. How many are there altogether?"
          },
          "visual": "8 + 8 = ?",
          "answers": [
            {
              "id": "17",
              "label": "17"
            },
            {
              "id": "15",
              "label": "15"
            },
            {
              "id": "16",
              "label": "16"
            }
          ],
          "correctAnswerId": "16",
          "success": {
            "de": "Super gerechnet! 8 plus 8 ist 16.",
            "en": "Great work! 8 plus 8 is 16."
          },
          "hint": {
            "de": "Starte bei 8 und zähle 8 weiter.",
            "en": "Start at 8 and count forward 8 more."
          }
        },
        {
          "id": "nu46",
          "prompt": {
            "de": "Navi findet 10 Sterne und danach noch 7. Wie viele sind es zusammen?",
            "en": "Navi finds 10 stars and then 7 more. How many are there altogether?"
          },
          "visual": "10 + 7 = ?",
          "answers": [
            {
              "id": "16",
              "label": "16"
            },
            {
              "id": "17",
              "label": "17"
            },
            {
              "id": "18",
              "label": "18"
            }
          ],
          "correctAnswerId": "17",
          "success": {
            "de": "Super gerechnet! 10 plus 7 ist 17.",
            "en": "Great work! 10 plus 7 is 17."
          },
          "hint": {
            "de": "Starte bei 10 und zähle 7 weiter.",
            "en": "Start at 10 and count forward 7 more."
          }
        },
        {
          "id": "nu47",
          "prompt": {
            "de": "Navi findet 9 Sterne und danach noch 9. Wie viele sind es zusammen?",
            "en": "Navi finds 9 stars and then 9 more. How many are there altogether?"
          },
          "visual": "9 + 9 = ?",
          "answers": [
            {
              "id": "18",
              "label": "18"
            },
            {
              "id": "19",
              "label": "19"
            },
            {
              "id": "17",
              "label": "17"
            }
          ],
          "correctAnswerId": "18",
          "success": {
            "de": "Super gerechnet! 9 plus 9 ist 18.",
            "en": "Great work! 9 plus 9 is 18."
          },
          "hint": {
            "de": "Starte bei 9 und zähle 9 weiter.",
            "en": "Start at 9 and count forward 9 more."
          }
        },
        {
          "id": "nu48",
          "prompt": {
            "de": "Navi findet 12 Sterne und danach noch 8. Wie viele sind es zusammen?",
            "en": "Navi finds 12 stars and then 8 more. How many are there altogether?"
          },
          "visual": "12 + 8 = ?",
          "answers": [
            {
              "id": "21",
              "label": "21"
            },
            {
              "id": "19",
              "label": "19"
            },
            {
              "id": "20",
              "label": "20"
            }
          ],
          "correctAnswerId": "20",
          "success": {
            "de": "Super gerechnet! 12 plus 8 ist 20.",
            "en": "Great work! 12 plus 8 is 20."
          },
          "hint": {
            "de": "Starte bei 12 und zähle 8 weiter.",
            "en": "Start at 12 and count forward 8 more."
          }
        },
        {
          "id": "nu49",
          "prompt": {
            "de": "Von 3 Schatzmünzen werden 1 weggenommen. Wie viele bleiben?",
            "en": "1 of 3 treasure coins are taken away. How many remain?"
          },
          "visual": "3 − 1 = ?",
          "answers": [
            {
              "id": "1",
              "label": "1"
            },
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            }
          ],
          "correctAnswerId": "2",
          "success": {
            "de": "Richtig! 3 minus 1 ist 2.",
            "en": "Correct! 3 minus 1 is 2."
          },
          "hint": {
            "de": "Zähle von 3 genau 1 Schritte zurück.",
            "en": "Count backward 1 steps from 3."
          }
        },
        {
          "id": "nu50",
          "prompt": {
            "de": "Von 5 Schatzmünzen werden 2 weggenommen. Wie viele bleiben?",
            "en": "2 of 5 treasure coins are taken away. How many remain?"
          },
          "visual": "5 − 2 = ?",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "2",
              "label": "2"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Richtig! 5 minus 2 ist 3.",
            "en": "Correct! 5 minus 2 is 3."
          },
          "hint": {
            "de": "Zähle von 5 genau 2 Schritte zurück.",
            "en": "Count backward 2 steps from 5."
          }
        },
        {
          "id": "nu51",
          "prompt": {
            "de": "Von 6 Schatzmünzen werden 1 weggenommen. Wie viele bleiben?",
            "en": "1 of 6 treasure coins are taken away. How many remain?"
          },
          "visual": "6 − 1 = ?",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig! 6 minus 1 ist 5.",
            "en": "Correct! 6 minus 1 is 5."
          },
          "hint": {
            "de": "Zähle von 6 genau 1 Schritte zurück.",
            "en": "Count backward 1 steps from 6."
          }
        },
        {
          "id": "nu52",
          "prompt": {
            "de": "Von 7 Schatzmünzen werden 3 weggenommen. Wie viele bleiben?",
            "en": "3 of 7 treasure coins are taken away. How many remain?"
          },
          "visual": "7 − 3 = ?",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig! 7 minus 3 ist 4.",
            "en": "Correct! 7 minus 3 is 4."
          },
          "hint": {
            "de": "Zähle von 7 genau 3 Schritte zurück.",
            "en": "Count backward 3 steps from 7."
          }
        },
        {
          "id": "nu53",
          "prompt": {
            "de": "Von 8 Schatzmünzen werden 2 weggenommen. Wie viele bleiben?",
            "en": "2 of 8 treasure coins are taken away. How many remain?"
          },
          "visual": "8 − 2 = ?",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "6",
          "success": {
            "de": "Richtig! 8 minus 2 ist 6.",
            "en": "Correct! 8 minus 2 is 6."
          },
          "hint": {
            "de": "Zähle von 8 genau 2 Schritte zurück.",
            "en": "Count backward 2 steps from 8."
          }
        },
        {
          "id": "nu54",
          "prompt": {
            "de": "Von 9 Schatzmünzen werden 4 weggenommen. Wie viele bleiben?",
            "en": "4 of 9 treasure coins are taken away. How many remain?"
          },
          "visual": "9 − 4 = ?",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "5",
          "success": {
            "de": "Richtig! 9 minus 4 ist 5.",
            "en": "Correct! 9 minus 4 is 5."
          },
          "hint": {
            "de": "Zähle von 9 genau 4 Schritte zurück.",
            "en": "Count backward 4 steps from 9."
          }
        },
        {
          "id": "nu55",
          "prompt": {
            "de": "Von 10 Schatzmünzen werden 3 weggenommen. Wie viele bleiben?",
            "en": "3 of 10 treasure coins are taken away. How many remain?"
          },
          "visual": "10 − 3 = ?",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            }
          ],
          "correctAnswerId": "7",
          "success": {
            "de": "Richtig! 10 minus 3 ist 7.",
            "en": "Correct! 10 minus 3 is 7."
          },
          "hint": {
            "de": "Zähle von 10 genau 3 Schritte zurück.",
            "en": "Count backward 3 steps from 10."
          }
        },
        {
          "id": "nu56",
          "prompt": {
            "de": "Von 11 Schatzmünzen werden 5 weggenommen. Wie viele bleiben?",
            "en": "5 of 11 treasure coins are taken away. How many remain?"
          },
          "visual": "11 − 5 = ?",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "6",
          "success": {
            "de": "Richtig! 11 minus 5 ist 6.",
            "en": "Correct! 11 minus 5 is 6."
          },
          "hint": {
            "de": "Zähle von 11 genau 5 Schritte zurück.",
            "en": "Count backward 5 steps from 11."
          }
        },
        {
          "id": "nu57",
          "prompt": {
            "de": "Von 12 Schatzmünzen werden 4 weggenommen. Wie viele bleiben?",
            "en": "4 of 12 treasure coins are taken away. How many remain?"
          },
          "visual": "12 − 4 = ?",
          "answers": [
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            }
          ],
          "correctAnswerId": "8",
          "success": {
            "de": "Richtig! 12 minus 4 ist 8.",
            "en": "Correct! 12 minus 4 is 8."
          },
          "hint": {
            "de": "Zähle von 12 genau 4 Schritte zurück.",
            "en": "Count backward 4 steps from 12."
          }
        },
        {
          "id": "nu58",
          "prompt": {
            "de": "Von 13 Schatzmünzen werden 6 weggenommen. Wie viele bleiben?",
            "en": "6 of 13 treasure coins are taken away. How many remain?"
          },
          "visual": "13 − 6 = ?",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            }
          ],
          "correctAnswerId": "7",
          "success": {
            "de": "Richtig! 13 minus 6 ist 7.",
            "en": "Correct! 13 minus 6 is 7."
          },
          "hint": {
            "de": "Zähle von 13 genau 6 Schritte zurück.",
            "en": "Count backward 6 steps from 13."
          }
        },
        {
          "id": "nu59",
          "prompt": {
            "de": "Von 14 Schatzmünzen werden 5 weggenommen. Wie viele bleiben?",
            "en": "5 of 14 treasure coins are taken away. How many remain?"
          },
          "visual": "14 − 5 = ?",
          "answers": [
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "8",
              "label": "8"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Richtig! 14 minus 5 ist 9.",
            "en": "Correct! 14 minus 5 is 9."
          },
          "hint": {
            "de": "Zähle von 14 genau 5 Schritte zurück.",
            "en": "Count backward 5 steps from 14."
          }
        },
        {
          "id": "nu60",
          "prompt": {
            "de": "Von 15 Schatzmünzen werden 7 weggenommen. Wie viele bleiben?",
            "en": "7 of 15 treasure coins are taken away. How many remain?"
          },
          "visual": "15 − 7 = ?",
          "answers": [
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            }
          ],
          "correctAnswerId": "8",
          "success": {
            "de": "Richtig! 15 minus 7 ist 8.",
            "en": "Correct! 15 minus 7 is 8."
          },
          "hint": {
            "de": "Zähle von 15 genau 7 Schritte zurück.",
            "en": "Count backward 7 steps from 15."
          }
        },
        {
          "id": "nu61",
          "prompt": {
            "de": "Von 16 Schatzmünzen werden 6 weggenommen. Wie viele bleiben?",
            "en": "6 of 16 treasure coins are taken away. How many remain?"
          },
          "visual": "16 − 6 = ?",
          "answers": [
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "11",
              "label": "11"
            }
          ],
          "correctAnswerId": "10",
          "success": {
            "de": "Richtig! 16 minus 6 ist 10.",
            "en": "Correct! 16 minus 6 is 10."
          },
          "hint": {
            "de": "Zähle von 16 genau 6 Schritte zurück.",
            "en": "Count backward 6 steps from 16."
          }
        },
        {
          "id": "nu62",
          "prompt": {
            "de": "Von 17 Schatzmünzen werden 8 weggenommen. Wie viele bleiben?",
            "en": "8 of 17 treasure coins are taken away. How many remain?"
          },
          "visual": "17 − 8 = ?",
          "answers": [
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "8",
              "label": "8"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Richtig! 17 minus 8 ist 9.",
            "en": "Correct! 17 minus 8 is 9."
          },
          "hint": {
            "de": "Zähle von 17 genau 8 Schritte zurück.",
            "en": "Count backward 8 steps from 17."
          }
        },
        {
          "id": "nu63",
          "prompt": {
            "de": "Von 18 Schatzmünzen werden 7 weggenommen. Wie viele bleiben?",
            "en": "7 of 18 treasure coins are taken away. How many remain?"
          },
          "visual": "18 − 7 = ?",
          "answers": [
            {
              "id": "12",
              "label": "12"
            },
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "11",
              "label": "11"
            }
          ],
          "correctAnswerId": "11",
          "success": {
            "de": "Richtig! 18 minus 7 ist 11.",
            "en": "Correct! 18 minus 7 is 11."
          },
          "hint": {
            "de": "Zähle von 18 genau 7 Schritte zurück.",
            "en": "Count backward 7 steps from 18."
          }
        },
        {
          "id": "nu64",
          "prompt": {
            "de": "Von 19 Schatzmünzen werden 9 weggenommen. Wie viele bleiben?",
            "en": "9 of 19 treasure coins are taken away. How many remain?"
          },
          "visual": "19 − 9 = ?",
          "answers": [
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "11",
              "label": "11"
            }
          ],
          "correctAnswerId": "10",
          "success": {
            "de": "Richtig! 19 minus 9 ist 10.",
            "en": "Correct! 19 minus 9 is 10."
          },
          "hint": {
            "de": "Zähle von 19 genau 9 Schritte zurück.",
            "en": "Count backward 9 steps from 19."
          }
        },
        {
          "id": "nu65",
          "prompt": {
            "de": "Von 20 Schatzmünzen werden 8 weggenommen. Wie viele bleiben?",
            "en": "8 of 20 treasure coins are taken away. How many remain?"
          },
          "visual": "20 − 8 = ?",
          "answers": [
            {
              "id": "12",
              "label": "12"
            },
            {
              "id": "13",
              "label": "13"
            },
            {
              "id": "11",
              "label": "11"
            }
          ],
          "correctAnswerId": "12",
          "success": {
            "de": "Richtig! 20 minus 8 ist 12.",
            "en": "Correct! 20 minus 8 is 12."
          },
          "hint": {
            "de": "Zähle von 20 genau 8 Schritte zurück.",
            "en": "Count backward 8 steps from 20."
          }
        },
        {
          "id": "nu66",
          "prompt": {
            "de": "Von 20 Schatzmünzen werden 11 weggenommen. Wie viele bleiben?",
            "en": "11 of 20 treasure coins are taken away. How many remain?"
          },
          "visual": "20 − 11 = ?",
          "answers": [
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "9",
              "label": "9"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Richtig! 20 minus 11 ist 9.",
            "en": "Correct! 20 minus 11 is 9."
          },
          "hint": {
            "de": "Zähle von 20 genau 11 Schritte zurück.",
            "en": "Count backward 11 steps from 20."
          }
        },
        {
          "id": "nu67",
          "prompt": {
            "de": "Welche Zahl fehlt zwischen 2 und 4?",
            "en": "Which number is missing between 2 and 4?"
          },
          "visual": "1 · 2 · ? · 4",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Genau! In die Lücke gehört 3.",
            "en": "Exactly! 3 belongs in the gap."
          },
          "hint": {
            "de": "Zähle langsam von 1 bis 4.",
            "en": "Count slowly from 1 to 4."
          }
        },
        {
          "id": "nu68",
          "prompt": {
            "de": "Welche Zahl fehlt zwischen 5 und 7?",
            "en": "Which number is missing between 5 and 7?"
          },
          "visual": "4 · 5 · ? · 7",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "6",
          "success": {
            "de": "Genau! In die Lücke gehört 6.",
            "en": "Exactly! 6 belongs in the gap."
          },
          "hint": {
            "de": "Zähle langsam von 4 bis 7.",
            "en": "Count slowly from 4 to 7."
          }
        },
        {
          "id": "nu69",
          "prompt": {
            "de": "Welche Zahl fehlt zwischen 8 und 10?",
            "en": "Which number is missing between 8 and 10?"
          },
          "visual": "7 · 8 · ? · 10",
          "answers": [
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "9",
              "label": "9"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Genau! In die Lücke gehört 9.",
            "en": "Exactly! 9 belongs in the gap."
          },
          "hint": {
            "de": "Zähle langsam von 7 bis 10.",
            "en": "Count slowly from 7 to 10."
          }
        },
        {
          "id": "nu70",
          "prompt": {
            "de": "Welche Zahl fehlt zwischen 11 und 13?",
            "en": "Which number is missing between 11 and 13?"
          },
          "visual": "10 · 11 · ? · 13",
          "answers": [
            {
              "id": "11",
              "label": "11"
            },
            {
              "id": "12",
              "label": "12"
            },
            {
              "id": "13",
              "label": "13"
            }
          ],
          "correctAnswerId": "12",
          "success": {
            "de": "Genau! In die Lücke gehört 12.",
            "en": "Exactly! 12 belongs in the gap."
          },
          "hint": {
            "de": "Zähle langsam von 10 bis 13.",
            "en": "Count slowly from 10 to 13."
          }
        },
        {
          "id": "nu71",
          "prompt": {
            "de": "Welche Zahl fehlt zwischen 15 und 17?",
            "en": "Which number is missing between 15 and 17?"
          },
          "visual": "14 · 15 · ? · 17",
          "answers": [
            {
              "id": "16",
              "label": "16"
            },
            {
              "id": "17",
              "label": "17"
            },
            {
              "id": "15",
              "label": "15"
            }
          ],
          "correctAnswerId": "16",
          "success": {
            "de": "Genau! In die Lücke gehört 16.",
            "en": "Exactly! 16 belongs in the gap."
          },
          "hint": {
            "de": "Zähle langsam von 14 bis 17.",
            "en": "Count slowly from 14 to 17."
          }
        },
        {
          "id": "nu72",
          "prompt": {
            "de": "Welche Zahl fehlt zwischen 18 und 20?",
            "en": "Which number is missing between 18 and 20?"
          },
          "visual": "17 · 18 · ? · 20",
          "answers": [
            {
              "id": "20",
              "label": "20"
            },
            {
              "id": "18",
              "label": "18"
            },
            {
              "id": "19",
              "label": "19"
            }
          ],
          "correctAnswerId": "19",
          "success": {
            "de": "Genau! In die Lücke gehört 19.",
            "en": "Exactly! 19 belongs in the gap."
          },
          "hint": {
            "de": "Zähle langsam von 17 bis 20.",
            "en": "Count slowly from 17 to 20."
          }
        },
        {
          "id": "nu73",
          "prompt": {
            "de": "Welche Zahl kommt direkt nach 3?",
            "en": "Which number comes directly after 3?"
          },
          "visual": "3 · ?",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Richtig! Nach 3 kommt 4.",
            "en": "Correct! 4 comes after 3."
          },
          "hint": {
            "de": "Zähle von 3 einen Schritt weiter.",
            "en": "Count one step forward from 3."
          }
        },
        {
          "id": "nu74",
          "prompt": {
            "de": "Welche Zahl kommt direkt nach 6?",
            "en": "Which number comes directly after 6?"
          },
          "visual": "6 · ?",
          "answers": [
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "6",
              "label": "6"
            }
          ],
          "correctAnswerId": "7",
          "success": {
            "de": "Richtig! Nach 6 kommt 7.",
            "en": "Correct! 7 comes after 6."
          },
          "hint": {
            "de": "Zähle von 6 einen Schritt weiter.",
            "en": "Count one step forward from 6."
          }
        },
        {
          "id": "nu75",
          "prompt": {
            "de": "Welche Zahl kommt direkt nach 9?",
            "en": "Which number comes directly after 9?"
          },
          "visual": "9 · ?",
          "answers": [
            {
              "id": "11",
              "label": "11"
            },
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "10",
              "label": "10"
            }
          ],
          "correctAnswerId": "10",
          "success": {
            "de": "Richtig! Nach 9 kommt 10.",
            "en": "Correct! 10 comes after 9."
          },
          "hint": {
            "de": "Zähle von 9 einen Schritt weiter.",
            "en": "Count one step forward from 9."
          }
        },
        {
          "id": "nu76",
          "prompt": {
            "de": "Welche Zahl kommt direkt nach 12?",
            "en": "Which number comes directly after 12?"
          },
          "visual": "12 · ?",
          "answers": [
            {
              "id": "12",
              "label": "12"
            },
            {
              "id": "13",
              "label": "13"
            },
            {
              "id": "14",
              "label": "14"
            }
          ],
          "correctAnswerId": "13",
          "success": {
            "de": "Richtig! Nach 12 kommt 13.",
            "en": "Correct! 13 comes after 12."
          },
          "hint": {
            "de": "Zähle von 12 einen Schritt weiter.",
            "en": "Count one step forward from 12."
          }
        },
        {
          "id": "nu77",
          "prompt": {
            "de": "Welche Zahl kommt direkt nach 15?",
            "en": "Which number comes directly after 15?"
          },
          "visual": "15 · ?",
          "answers": [
            {
              "id": "16",
              "label": "16"
            },
            {
              "id": "17",
              "label": "17"
            },
            {
              "id": "15",
              "label": "15"
            }
          ],
          "correctAnswerId": "16",
          "success": {
            "de": "Richtig! Nach 15 kommt 16.",
            "en": "Correct! 16 comes after 15."
          },
          "hint": {
            "de": "Zähle von 15 einen Schritt weiter.",
            "en": "Count one step forward from 15."
          }
        },
        {
          "id": "nu78",
          "prompt": {
            "de": "Welche Zahl kommt direkt nach 18?",
            "en": "Which number comes directly after 18?"
          },
          "visual": "18 · ?",
          "answers": [
            {
              "id": "20",
              "label": "20"
            },
            {
              "id": "18",
              "label": "18"
            },
            {
              "id": "19",
              "label": "19"
            }
          ],
          "correctAnswerId": "19",
          "success": {
            "de": "Richtig! Nach 18 kommt 19.",
            "en": "Correct! 19 comes after 18."
          },
          "hint": {
            "de": "Zähle von 18 einen Schritt weiter.",
            "en": "Count one step forward from 18."
          }
        },
        {
          "id": "nu79",
          "prompt": {
            "de": "Welche Zahl steht direkt vor 4?",
            "en": "Which number comes directly before 4?"
          },
          "visual": "? · 4",
          "answers": [
            {
              "id": "2",
              "label": "2"
            },
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            }
          ],
          "correctAnswerId": "3",
          "success": {
            "de": "Genau! Vor 4 steht 3.",
            "en": "Exactly! 3 comes before 4."
          },
          "hint": {
            "de": "Gehe beim Zählen von 4 einen Schritt zurück.",
            "en": "Count one step backward from 4."
          }
        },
        {
          "id": "nu80",
          "prompt": {
            "de": "Welche Zahl steht direkt vor 7?",
            "en": "Which number comes directly before 7?"
          },
          "visual": "? · 7",
          "answers": [
            {
              "id": "6",
              "label": "6"
            },
            {
              "id": "7",
              "label": "7"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "6",
          "success": {
            "de": "Genau! Vor 7 steht 6.",
            "en": "Exactly! 6 comes before 7."
          },
          "hint": {
            "de": "Gehe beim Zählen von 7 einen Schritt zurück.",
            "en": "Count one step backward from 7."
          }
        },
        {
          "id": "nu81",
          "prompt": {
            "de": "Welche Zahl steht direkt vor 10?",
            "en": "Which number comes directly before 10?"
          },
          "visual": "? · 10",
          "answers": [
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "9",
              "label": "9"
            }
          ],
          "correctAnswerId": "9",
          "success": {
            "de": "Genau! Vor 10 steht 9.",
            "en": "Exactly! 9 comes before 10."
          },
          "hint": {
            "de": "Gehe beim Zählen von 10 einen Schritt zurück.",
            "en": "Count one step backward from 10."
          }
        },
        {
          "id": "nu82",
          "prompt": {
            "de": "Welche Zahl steht direkt vor 13?",
            "en": "Which number comes directly before 13?"
          },
          "visual": "? · 13",
          "answers": [
            {
              "id": "11",
              "label": "11"
            },
            {
              "id": "12",
              "label": "12"
            },
            {
              "id": "13",
              "label": "13"
            }
          ],
          "correctAnswerId": "12",
          "success": {
            "de": "Genau! Vor 13 steht 12.",
            "en": "Exactly! 12 comes before 13."
          },
          "hint": {
            "de": "Gehe beim Zählen von 13 einen Schritt zurück.",
            "en": "Count one step backward from 13."
          }
        },
        {
          "id": "nu83",
          "prompt": {
            "de": "Welche Zahl steht direkt vor 16?",
            "en": "Which number comes directly before 16?"
          },
          "visual": "? · 16",
          "answers": [
            {
              "id": "15",
              "label": "15"
            },
            {
              "id": "16",
              "label": "16"
            },
            {
              "id": "14",
              "label": "14"
            }
          ],
          "correctAnswerId": "15",
          "success": {
            "de": "Genau! Vor 16 steht 15.",
            "en": "Exactly! 15 comes before 16."
          },
          "hint": {
            "de": "Gehe beim Zählen von 16 einen Schritt zurück.",
            "en": "Count one step backward from 16."
          }
        },
        {
          "id": "nu84",
          "prompt": {
            "de": "Welche Zahl steht direkt vor 20?",
            "en": "Which number comes directly before 20?"
          },
          "visual": "? · 20",
          "answers": [
            {
              "id": "20",
              "label": "20"
            },
            {
              "id": "18",
              "label": "18"
            },
            {
              "id": "19",
              "label": "19"
            }
          ],
          "correctAnswerId": "19",
          "success": {
            "de": "Genau! Vor 20 steht 19.",
            "en": "Exactly! 19 comes before 20."
          },
          "hint": {
            "de": "Gehe beim Zählen von 20 einen Schritt zurück.",
            "en": "Count one step backward from 20."
          }
        },
        {
          "id": "nu85",
          "prompt": {
            "de": "Navi braucht mehr als 2 Muscheln. Welche Menge passt?",
            "en": "Navi needs more than 2 shells. Which amount works?"
          },
          "visual": "🐚  > 2",
          "answers": [
            {
              "id": "3",
              "label": "3"
            },
            {
              "id": "4",
              "label": "4"
            },
            {
              "id": "5",
              "label": "5"
            }
          ],
          "correctAnswerId": "4",
          "success": {
            "de": "Prima! 4 ist mehr als 2.",
            "en": "Great! 4 is more than 2."
          },
          "hint": {
            "de": "Suche eine Zahl, die größer als 2 ist.",
            "en": "Find a number larger than 2."
          }
        },
        {
          "id": "nu86",
          "prompt": {
            "de": "Navi braucht mehr als 5 Muscheln. Welche Menge passt?",
            "en": "Navi needs more than 5 shells. Which amount works?"
          },
          "visual": "🐚  > 5",
          "answers": [
            {
              "id": "8",
              "label": "8"
            },
            {
              "id": "9",
              "label": "9"
            },
            {
              "id": "7",
              "label": "7"
            }
          ],
          "correctAnswerId": "8",
          "success": {
            "de": "Prima! 8 ist mehr als 5.",
            "en": "Great! 8 is more than 5."
          },
          "hint": {
            "de": "Suche eine Zahl, die größer als 5 ist.",
            "en": "Find a number larger than 5."
          }
        },
        {
          "id": "nu87",
          "prompt": {
            "de": "Navi braucht mehr als 7 Muscheln. Welche Menge passt?",
            "en": "Navi needs more than 7 shells. Which amount works?"
          },
          "visual": "🐚  > 7",
          "answers": [
            {
              "id": "12",
              "label": "12"
            },
            {
              "id": "10",
              "label": "10"
            },
            {
              "id": "11",
              "label": "11"
            }
          ],
          "correctAnswerId": "11",
          "success": {
            "de": "Prima! 11 ist mehr als 7.",
            "en": "Great! 11 is more than 7."
          },
          "hint": {
            "de": "Suche eine Zahl, die größer als 7 ist.",
            "en": "Find a number larger than 7."
          }
        },
        {
          "id": "nu88",
          "prompt": {
            "de": "Navi braucht mehr als 9 Muscheln. Welche Menge passt?",
            "en": "Navi needs more than 9 shells. Which amount works?"
          },
          "visual": "🐚  > 9",
          "answers": [
            {
              "id": "13",
              "label": "13"
            },
            {
              "id": "14",
              "label": "14"
            },
            {
              "id": "15",
              "label": "15"
            }
          ],
          "correctAnswerId": "14",
          "success": {
            "de": "Prima! 14 ist mehr als 9.",
            "en": "Great! 14 is more than 9."
          },
          "hint": {
            "de": "Suche eine Zahl, die größer als 9 ist.",
            "en": "Find a number larger than 9."
          }
        },
        {
          "id": "nu89",
          "prompt": {
            "de": "Navi braucht mehr als 12 Muscheln. Welche Menge passt?",
            "en": "Navi needs more than 12 shells. Which amount works?"
          },
          "visual": "🐚  > 12",
          "answers": [
            {
              "id": "17",
              "label": "17"
            },
            {
              "id": "18",
              "label": "18"
            },
            {
              "id": "16",
              "label": "16"
            }
          ],
          "correctAnswerId": "17",
          "success": {
            "de": "Prima! 17 ist mehr als 12.",
            "en": "Great! 17 is more than 12."
          },
          "hint": {
            "de": "Suche eine Zahl, die größer als 12 ist.",
            "en": "Find a number larger than 12."
          }
        },
        {
          "id": "nu90",
          "prompt": {
            "de": "Navi braucht mehr als 16 Muscheln. Welche Menge passt?",
            "en": "Navi needs more than 16 shells. Which amount works?"
          },
          "visual": "🐚  > 16",
          "answers": [
            {
              "id": "21",
              "label": "21"
            },
            {
              "id": "19",
              "label": "19"
            },
            {
              "id": "20",
              "label": "20"
            }
          ],
          "correctAnswerId": "20",
          "success": {
            "de": "Prima! 20 ist mehr als 16.",
            "en": "Great! 20 is more than 16."
          },
          "hint": {
            "de": "Suche eine Zahl, die größer als 16 ist.",
            "en": "Find a number larger than 16."
          }
        }
      ]
    }
  },
  {
    "id": "colors",
    "title": {
      "de": "Farben",
      "en": "Colors"
    },
    "subtitle": {
      "de": "Farben finden und mischen",
      "en": "Find and mix colors"
    },
    "icon": "●",
    "color": "#F05E62",
    "lightColor": "#FFE1E2",
    "questionsByAge": {
      "discoverer": [
        {
          "id": "d2cu1",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Apfel?",
            "en": "Which color can you see in this picture: apple?"
          },
          "visual": "🍎",
          "conceptKey": "red",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Richtig! Die Farbe ist Rot.",
            "en": "Correct! The color is Red."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu2",
          "prompt": {
            "de": "Finde dieses Bild: gelber Kreis. Seine Farbe ist Gelb.",
            "en": "Find this picture: yellow circle. Its color is Yellow."
          },
          "visual": "",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "red-apple",
              "label": "🍎"
            },
            {
              "id": "yellow-circle",
              "label": "🟡"
            }
          ],
          "correctAnswerId": "yellow-circle",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Gelb.",
            "en": "Look for the picture in Yellow."
          }
        },
        {
          "id": "d2cu3",
          "prompt": {
            "de": "Navis Perlenreihe ist Blau, Rosa, Blau. Welche Farbe kommt jetzt?",
            "en": "Navi's bead row is Blue, Pink, Blue. Which color comes next?"
          },
          "visual": "📿  🔵 🩷 🔵  ?",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Rosa.",
            "en": "Pattern solved! Pink comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Blau, Rosa.",
            "en": "The two colors take turns: Blue, Pink."
          }
        },
        {
          "id": "d2cu4",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: blauer Kreis?",
            "en": "Which color can you see in this picture: blue circle?"
          },
          "visual": "🔵",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Richtig! Die Farbe ist Blau.",
            "en": "Correct! The color is Blue."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu5",
          "prompt": {
            "de": "Finde dieses Bild: lilafarbener Kreis. Seine Farbe ist Lila.",
            "en": "Find this picture: purple circle. Its color is Purple."
          },
          "visual": "",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple-circle",
              "label": "🟣"
            },
            {
              "id": "pink-heart",
              "label": "🩷"
            }
          ],
          "correctAnswerId": "purple-circle",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Lila.",
            "en": "Look for the picture in Purple."
          }
        },
        {
          "id": "d2cu6",
          "prompt": {
            "de": "Navis Fähnchenreihe ist Grün, Braun, Grün. Welche Farbe kommt jetzt?",
            "en": "Navi's flag row is Green, Brown, Green. Which color comes next?"
          },
          "visual": "🚩  🟢 🟤 🟢  ?",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Braun.",
            "en": "Pattern solved! Brown comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Grün, Braun.",
            "en": "The two colors take turns: Green, Brown."
          }
        },
        {
          "id": "d2cu7",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: grüner Kreis?",
            "en": "Which color can you see in this picture: green circle?"
          },
          "visual": "🟢",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Richtig! Die Farbe ist Grün.",
            "en": "Correct! The color is Green."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu8",
          "prompt": {
            "de": "Finde dieses Bild: orangefarbener Kreis. Seine Farbe ist Orange.",
            "en": "Find this picture: orange circle. Its color is Orange."
          },
          "visual": "",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "yellow-heart",
              "label": "💛"
            },
            {
              "id": "orange-circle",
              "label": "🟠"
            }
          ],
          "correctAnswerId": "orange-circle",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Orange.",
            "en": "Look for the picture in Orange."
          }
        },
        {
          "id": "d2cu9",
          "prompt": {
            "de": "Navis Steinreihe ist Gelb, Rot, Gelb. Welche Farbe kommt jetzt?",
            "en": "Navi's stone row is Yellow, Red, Yellow. Which color comes next?"
          },
          "visual": "🪨  🟡 🔴 🟡  ?",
          "conceptKey": "red",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Rot.",
            "en": "Pattern solved! Red comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Gelb, Rot.",
            "en": "The two colors take turns: Yellow, Red."
          }
        },
        {
          "id": "d2cu10",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: gelber Kreis?",
            "en": "Which color can you see in this picture: yellow circle?"
          },
          "visual": "🟡",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Richtig! Die Farbe ist Gelb.",
            "en": "Correct! The color is Yellow."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu11",
          "prompt": {
            "de": "Finde dieses Bild: rosa Herz. Seine Farbe ist Rosa.",
            "en": "Find this picture: pink heart. Its color is Pink."
          },
          "visual": "",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "pink-heart",
              "label": "🩷"
            },
            {
              "id": "blueberries",
              "label": "🫐"
            }
          ],
          "correctAnswerId": "pink-heart",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Rosa.",
            "en": "Look for the picture in Pink."
          }
        },
        {
          "id": "d2cu12",
          "prompt": {
            "de": "Navis Muschelreihe ist Lila, Blau, Lila. Welche Farbe kommt jetzt?",
            "en": "Navi's shell row is Purple, Blue, Purple. Which color comes next?"
          },
          "visual": "🐚  🟣 🔵 🟣  ?",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Blau.",
            "en": "Pattern solved! Blue comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Lila, Blau.",
            "en": "The two colors take turns: Purple, Blue."
          }
        },
        {
          "id": "d2cu13",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: lilafarbener Kreis?",
            "en": "Which color can you see in this picture: purple circle?"
          },
          "visual": "🟣",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Richtig! Die Farbe ist Lila.",
            "en": "Correct! The color is Purple."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu14",
          "prompt": {
            "de": "Finde dieses Bild: brauner Kreis. Seine Farbe ist Braun.",
            "en": "Find this picture: brown circle. Its color is Brown."
          },
          "visual": "",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "brown-circle",
              "label": "🟤"
            }
          ],
          "correctAnswerId": "brown-circle",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Braun.",
            "en": "Look for the picture in Brown."
          }
        },
        {
          "id": "d2cu15",
          "prompt": {
            "de": "Navis Ballonreihe ist Orange, Grün, Orange. Welche Farbe kommt jetzt?",
            "en": "Navi's balloon row is Orange, Green, Orange. Which color comes next?"
          },
          "visual": "🎈  🟠 🟢 🟠  ?",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Grün.",
            "en": "Pattern solved! Green comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Orange, Grün.",
            "en": "The two colors take turns: Orange, Green."
          }
        },
        {
          "id": "d2cu16",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: orangefarbener Kreis?",
            "en": "Which color can you see in this picture: orange circle?"
          },
          "visual": "🟠",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Richtig! Die Farbe ist Orange.",
            "en": "Correct! The color is Orange."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu17",
          "prompt": {
            "de": "Finde dieses Bild: Erdbeere. Seine Farbe ist Rot.",
            "en": "Find this picture: strawberry. Its color is Red."
          },
          "visual": "",
          "conceptKey": "red",
          "answers": [
            {
              "id": "strawberry",
              "label": "🍓"
            },
            {
              "id": "orange-fruit",
              "label": "🍊"
            }
          ],
          "correctAnswerId": "strawberry",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Rot.",
            "en": "Look for the picture in Red."
          }
        },
        {
          "id": "d2cu18",
          "prompt": {
            "de": "Navis Sternreihe ist Rosa, Gelb, Rosa. Welche Farbe kommt jetzt?",
            "en": "Navi's star row is Pink, Yellow, Pink. Which color comes next?"
          },
          "visual": "⭐  🩷 🟡 🩷  ?",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Gelb.",
            "en": "Pattern solved! Yellow comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Rosa, Gelb.",
            "en": "The two colors take turns: Pink, Yellow."
          }
        },
        {
          "id": "d2cu19",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: rosa Herz?",
            "en": "Which color can you see in this picture: pink heart?"
          },
          "visual": "🩷",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Richtig! Die Farbe ist Rosa.",
            "en": "Correct! The color is Pink."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu20",
          "prompt": {
            "de": "Finde dieses Bild: blaues Herz. Seine Farbe ist Blau.",
            "en": "Find this picture: blue heart. Its color is Blue."
          },
          "visual": "",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "banana",
              "label": "🍌"
            },
            {
              "id": "blue-heart",
              "label": "💙"
            }
          ],
          "correctAnswerId": "blue-heart",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Blau.",
            "en": "Look for the picture in Blue."
          }
        },
        {
          "id": "d2cu21",
          "prompt": {
            "de": "Navis Bausteinreihe ist Braun, Lila, Braun. Welche Farbe kommt jetzt?",
            "en": "Navi's block row is Brown, Purple, Brown. Which color comes next?"
          },
          "visual": "🧱  🟤 🟣 🟤  ?",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Lila.",
            "en": "Pattern solved! Purple comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Braun, Lila.",
            "en": "The two colors take turns: Brown, Purple."
          }
        },
        {
          "id": "d2cu22",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: brauner Kreis?",
            "en": "Which color can you see in this picture: brown circle?"
          },
          "visual": "🟤",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Richtig! Die Farbe ist Braun.",
            "en": "Correct! The color is Brown."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu23",
          "prompt": {
            "de": "Finde dieses Bild: grünes Herz. Seine Farbe ist Grün.",
            "en": "Find this picture: green heart. Its color is Green."
          },
          "visual": "",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green-heart",
              "label": "💚"
            },
            {
              "id": "fire-truck",
              "label": "🚒"
            }
          ],
          "correctAnswerId": "green-heart",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Grün.",
            "en": "Look for the picture in Green."
          }
        },
        {
          "id": "d2cu24",
          "prompt": {
            "de": "Navis Punktreihe ist Rot, Orange, Rot. Welche Farbe kommt jetzt?",
            "en": "Navi's dot row is Red, Orange, Red. Which color comes next?"
          },
          "visual": "⚪  🔴 🟠 🔴  ?",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Orange.",
            "en": "Pattern solved! Orange comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Rot, Orange.",
            "en": "The two colors take turns: Red, Orange."
          }
        },
        {
          "id": "d2cu25",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Erdbeere?",
            "en": "Which color can you see in this picture: strawberry?"
          },
          "visual": "🍓",
          "conceptKey": "red",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Richtig! Die Farbe ist Rot.",
            "en": "Correct! The color is Red."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu26",
          "prompt": {
            "de": "Finde dieses Bild: gelbes Herz. Seine Farbe ist Gelb.",
            "en": "Find this picture: yellow heart. Its color is Yellow."
          },
          "visual": "",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "blue-circle",
              "label": "🔵"
            },
            {
              "id": "yellow-heart",
              "label": "💛"
            }
          ],
          "correctAnswerId": "yellow-heart",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Gelb.",
            "en": "Look for the picture in Yellow."
          }
        },
        {
          "id": "d2cu27",
          "prompt": {
            "de": "Navis Knopfreihe ist Blau, Rosa, Blau. Welche Farbe kommt jetzt?",
            "en": "Navi's button row is Blue, Pink, Blue. Which color comes next?"
          },
          "visual": "🔘  🔵 🩷 🔵  ?",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Rosa.",
            "en": "Pattern solved! Pink comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Blau, Rosa.",
            "en": "The two colors take turns: Blue, Pink."
          }
        },
        {
          "id": "d2cu28",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: blaues Herz?",
            "en": "Which color can you see in this picture: blue heart?"
          },
          "visual": "💙",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Richtig! Die Farbe ist Blau.",
            "en": "Correct! The color is Blue."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu29",
          "prompt": {
            "de": "Finde dieses Bild: lilafarbenes Herz. Seine Farbe ist Lila.",
            "en": "Find this picture: purple heart. Its color is Purple."
          },
          "visual": "",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple-heart",
              "label": "💜"
            },
            {
              "id": "pink-heart",
              "label": "🩷"
            }
          ],
          "correctAnswerId": "purple-heart",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Lila.",
            "en": "Look for the picture in Purple."
          }
        },
        {
          "id": "d2cu30",
          "prompt": {
            "de": "Navis Kartenreihe ist Grün, Braun, Grün. Welche Farbe kommt jetzt?",
            "en": "Navi's card row is Green, Brown, Green. Which color comes next?"
          },
          "visual": "🃏  🟢 🟤 🟢  ?",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Braun.",
            "en": "Pattern solved! Brown comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Grün, Braun.",
            "en": "The two colors take turns: Green, Brown."
          }
        },
        {
          "id": "d2cu31",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: grünes Herz?",
            "en": "Which color can you see in this picture: green heart?"
          },
          "visual": "💚",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Richtig! Die Farbe ist Grün.",
            "en": "Correct! The color is Green."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu32",
          "prompt": {
            "de": "Finde dieses Bild: orangefarbenes Herz. Seine Farbe ist Orange.",
            "en": "Find this picture: orange heart. Its color is Orange."
          },
          "visual": "",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "purple-heart",
              "label": "💜"
            },
            {
              "id": "orange-heart",
              "label": "🧡"
            }
          ],
          "correctAnswerId": "orange-heart",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Orange.",
            "en": "Look for the picture in Orange."
          }
        },
        {
          "id": "d2cu33",
          "prompt": {
            "de": "Navis Blumenreihe ist Gelb, Rot, Gelb. Welche Farbe kommt jetzt?",
            "en": "Navi's flower row is Yellow, Red, Yellow. Which color comes next?"
          },
          "visual": "🌼  🟡 🔴 🟡  ?",
          "conceptKey": "red",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Rot.",
            "en": "Pattern solved! Red comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Gelb, Rot.",
            "en": "The two colors take turns: Yellow, Red."
          }
        },
        {
          "id": "d2cu34",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: gelbes Herz?",
            "en": "Which color can you see in this picture: yellow heart?"
          },
          "visual": "💛",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Richtig! Die Farbe ist Gelb.",
            "en": "Correct! The color is Yellow."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu35",
          "prompt": {
            "de": "Finde dieses Bild: rosa Blume. Seine Farbe ist Rosa.",
            "en": "Find this picture: pink flower. Its color is Pink."
          },
          "visual": "",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "pink-flower",
              "label": "🌸"
            },
            {
              "id": "blueberries",
              "label": "🫐"
            }
          ],
          "correctAnswerId": "pink-flower",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Rosa.",
            "en": "Look for the picture in Pink."
          }
        },
        {
          "id": "d2cu36",
          "prompt": {
            "de": "Navis Herzreihe ist Lila, Blau, Lila. Welche Farbe kommt jetzt?",
            "en": "Navi's heart row is Purple, Blue, Purple. Which color comes next?"
          },
          "visual": "🤍  🟣 🔵 🟣  ?",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Blau.",
            "en": "Pattern solved! Blue comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Lila, Blau.",
            "en": "The two colors take turns: Purple, Blue."
          }
        },
        {
          "id": "d2cu37",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: lilafarbenes Herz?",
            "en": "Which color can you see in this picture: purple heart?"
          },
          "visual": "💜",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Richtig! Die Farbe ist Lila.",
            "en": "Correct! The color is Purple."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu38",
          "prompt": {
            "de": "Finde dieses Bild: braunes Herz. Seine Farbe ist Braun.",
            "en": "Find this picture: brown heart. Its color is Brown."
          },
          "visual": "",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "brown-heart",
              "label": "🤎"
            }
          ],
          "correctAnswerId": "brown-heart",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Braun.",
            "en": "Look for the picture in Brown."
          }
        },
        {
          "id": "d2cu39",
          "prompt": {
            "de": "Navis Kreisreihe ist Orange, Grün, Orange. Welche Farbe kommt jetzt?",
            "en": "Navi's circle row is Orange, Green, Orange. Which color comes next?"
          },
          "visual": "⭕  🟠 🟢 🟠  ?",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Grün.",
            "en": "Pattern solved! Green comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Orange, Grün.",
            "en": "The two colors take turns: Orange, Green."
          }
        },
        {
          "id": "d2cu40",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: orangefarbenes Herz?",
            "en": "Which color can you see in this picture: orange heart?"
          },
          "visual": "🧡",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Richtig! Die Farbe ist Orange.",
            "en": "Correct! The color is Orange."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu41",
          "prompt": {
            "de": "Finde dieses Bild: Kirschen. Seine Farbe ist Rot.",
            "en": "Find this picture: cherries. Its color is Red."
          },
          "visual": "",
          "conceptKey": "red",
          "answers": [
            {
              "id": "cherries",
              "label": "🍒"
            },
            {
              "id": "piglet",
              "label": "🐷"
            }
          ],
          "correctAnswerId": "cherries",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Rot.",
            "en": "Look for the picture in Red."
          }
        },
        {
          "id": "d2cu42",
          "prompt": {
            "de": "Navis Drachenreihe ist Rosa, Gelb, Rosa. Welche Farbe kommt jetzt?",
            "en": "Navi's kite row is Pink, Yellow, Pink. Which color comes next?"
          },
          "visual": "🪁  🩷 🟡 🩷  ?",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Gelb.",
            "en": "Pattern solved! Yellow comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Rosa, Gelb.",
            "en": "The two colors take turns: Pink, Yellow."
          }
        },
        {
          "id": "d2cu43",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: rosa Blume?",
            "en": "Which color can you see in this picture: pink flower?"
          },
          "visual": "🌸",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Richtig! Die Farbe ist Rosa.",
            "en": "Correct! The color is Pink."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu44",
          "prompt": {
            "de": "Finde dieses Bild: Heidelbeeren. Seine Farbe ist Blau.",
            "en": "Find this picture: blueberries. Its color is Blue."
          },
          "visual": "",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "eggplant",
              "label": "🍆"
            },
            {
              "id": "blueberries",
              "label": "🫐"
            }
          ],
          "correctAnswerId": "blueberries",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Blau.",
            "en": "Look for the picture in Blue."
          }
        },
        {
          "id": "d2cu45",
          "prompt": {
            "de": "Navis Becherreihe ist Braun, Lila, Braun. Welche Farbe kommt jetzt?",
            "en": "Navi's cup row is Brown, Purple, Brown. Which color comes next?"
          },
          "visual": "🥤  🟤 🟣 🟤  ?",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Lila.",
            "en": "Pattern solved! Purple comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Braun, Lila.",
            "en": "The two colors take turns: Brown, Purple."
          }
        },
        {
          "id": "d2cu46",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: braunes Herz?",
            "en": "Which color can you see in this picture: brown heart?"
          },
          "visual": "🤎",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Richtig! Die Farbe ist Braun.",
            "en": "Correct! The color is Brown."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu47",
          "prompt": {
            "de": "Finde dieses Bild: grünes Quadrat. Seine Farbe ist Grün.",
            "en": "Find this picture: green square. Its color is Green."
          },
          "visual": "",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green-square",
              "label": "🟩"
            },
            {
              "id": "blue-diamond",
              "label": "🔷"
            }
          ],
          "correctAnswerId": "green-square",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Grün.",
            "en": "Look for the picture in Green."
          }
        },
        {
          "id": "d2cu48",
          "prompt": {
            "de": "Navis Hutreihe ist Rot, Orange, Rot. Welche Farbe kommt jetzt?",
            "en": "Navi's hat row is Red, Orange, Red. Which color comes next?"
          },
          "visual": "🧢  🔴 🟠 🔴  ?",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Orange.",
            "en": "Pattern solved! Orange comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Rot, Orange.",
            "en": "The two colors take turns: Red, Orange."
          }
        },
        {
          "id": "d2cu49",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Kirschen?",
            "en": "Which color can you see in this picture: cherries?"
          },
          "visual": "🍒",
          "conceptKey": "red",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Richtig! Die Farbe ist Rot.",
            "en": "Correct! The color is Red."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu50",
          "prompt": {
            "de": "Finde dieses Bild: gelbes Quadrat. Seine Farbe ist Gelb.",
            "en": "Find this picture: yellow square. Its color is Yellow."
          },
          "visual": "",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "green-circle",
              "label": "🟢"
            },
            {
              "id": "yellow-square",
              "label": "🟨"
            }
          ],
          "correctAnswerId": "yellow-square",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Gelb.",
            "en": "Look for the picture in Yellow."
          }
        },
        {
          "id": "d2cu51",
          "prompt": {
            "de": "Navis Schuhreihe ist Blau, Rosa, Blau. Welche Farbe kommt jetzt?",
            "en": "Navi's shoe row is Blue, Pink, Blue. Which color comes next?"
          },
          "visual": "👟  🔵 🩷 🔵  ?",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Rosa.",
            "en": "Pattern solved! Pink comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Blau, Rosa.",
            "en": "The two colors take turns: Blue, Pink."
          }
        },
        {
          "id": "d2cu52",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Heidelbeeren?",
            "en": "Which color can you see in this picture: blueberries?"
          },
          "visual": "🫐",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Richtig! Die Farbe ist Blau.",
            "en": "Correct! The color is Blue."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu53",
          "prompt": {
            "de": "Finde dieses Bild: lilafarbenes Quadrat. Seine Farbe ist Lila.",
            "en": "Find this picture: purple square. Its color is Purple."
          },
          "visual": "",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple-square",
              "label": "🟪"
            },
            {
              "id": "pink-heart",
              "label": "🩷"
            }
          ],
          "correctAnswerId": "purple-square",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Lila.",
            "en": "Look for the picture in Purple."
          }
        },
        {
          "id": "d2cu54",
          "prompt": {
            "de": "Navis Blätterreihe ist Grün, Braun, Grün. Welche Farbe kommt jetzt?",
            "en": "Navi's leaf row is Green, Brown, Green. Which color comes next?"
          },
          "visual": "🍃  🟢 🟤 🟢  ?",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Braun.",
            "en": "Pattern solved! Brown comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Grün, Braun.",
            "en": "The two colors take turns: Green, Brown."
          }
        },
        {
          "id": "d2cu55",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: grünes Quadrat?",
            "en": "Which color can you see in this picture: green square?"
          },
          "visual": "🟩",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Richtig! Die Farbe ist Grün.",
            "en": "Correct! The color is Green."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu56",
          "prompt": {
            "de": "Finde dieses Bild: orangefarbenes Quadrat. Seine Farbe ist Orange.",
            "en": "Find this picture: orange square. Its color is Orange."
          },
          "visual": "",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "pink-flower",
              "label": "🌸"
            },
            {
              "id": "orange-square",
              "label": "🟧"
            }
          ],
          "correctAnswerId": "orange-square",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Orange.",
            "en": "Look for the picture in Orange."
          }
        },
        {
          "id": "d2cu57",
          "prompt": {
            "de": "Navis Tropfenreihe ist Gelb, Rot, Gelb. Welche Farbe kommt jetzt?",
            "en": "Navi's drop row is Yellow, Red, Yellow. Which color comes next?"
          },
          "visual": "💧  🟡 🔴 🟡  ?",
          "conceptKey": "red",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Rot.",
            "en": "Pattern solved! Red comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Gelb, Rot.",
            "en": "The two colors take turns: Yellow, Red."
          }
        },
        {
          "id": "d2cu58",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: gelbes Quadrat?",
            "en": "Which color can you see in this picture: yellow square?"
          },
          "visual": "🟨",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Richtig! Die Farbe ist Gelb.",
            "en": "Correct! The color is Yellow."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu59",
          "prompt": {
            "de": "Finde dieses Bild: Flamingo. Seine Farbe ist Rosa.",
            "en": "Find this picture: flamingo. Its color is Pink."
          },
          "visual": "",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "blueberries",
              "label": "🫐"
            }
          ],
          "correctAnswerId": "flamingo",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Rosa.",
            "en": "Look for the picture in Pink."
          }
        },
        {
          "id": "d2cu60",
          "prompt": {
            "de": "Navis Lichterreihe ist Lila, Blau, Lila. Welche Farbe kommt jetzt?",
            "en": "Navi's light row is Purple, Blue, Purple. Which color comes next?"
          },
          "visual": "💡  🟣 🔵 🟣  ?",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Blau.",
            "en": "Pattern solved! Blue comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Lila, Blau.",
            "en": "The two colors take turns: Purple, Blue."
          }
        },
        {
          "id": "d2cu61",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: lilafarbenes Quadrat?",
            "en": "Which color can you see in this picture: purple square?"
          },
          "visual": "🟪",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Richtig! Die Farbe ist Lila.",
            "en": "Correct! The color is Purple."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu62",
          "prompt": {
            "de": "Finde dieses Bild: Braunbär. Seine Farbe ist Braun.",
            "en": "Find this picture: brown bear. Its color is Brown."
          },
          "visual": "",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "brown-bear",
              "label": "🐻"
            }
          ],
          "correctAnswerId": "brown-bear",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Braun.",
            "en": "Look for the picture in Brown."
          }
        },
        {
          "id": "d2cu63",
          "prompt": {
            "de": "Navis Bonbonreihe ist Orange, Grün, Orange. Welche Farbe kommt jetzt?",
            "en": "Navi's candy row is Orange, Green, Orange. Which color comes next?"
          },
          "visual": "🍬  🟠 🟢 🟠  ?",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Grün.",
            "en": "Pattern solved! Green comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Orange, Grün.",
            "en": "The two colors take turns: Orange, Green."
          }
        },
        {
          "id": "d2cu64",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: orangefarbenes Quadrat?",
            "en": "Which color can you see in this picture: orange square?"
          },
          "visual": "🟧",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Richtig! Die Farbe ist Orange.",
            "en": "Correct! The color is Orange."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu65",
          "prompt": {
            "de": "Finde dieses Bild: Tomate. Seine Farbe ist Rot.",
            "en": "Find this picture: tomato. Its color is Red."
          },
          "visual": "",
          "conceptKey": "red",
          "answers": [
            {
              "id": "tomato",
              "label": "🍅"
            },
            {
              "id": "chocolate",
              "label": "🍫"
            }
          ],
          "correctAnswerId": "tomato",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Rot.",
            "en": "Look for the picture in Red."
          }
        },
        {
          "id": "d2cu66",
          "prompt": {
            "de": "Navis Keksreihe ist Rosa, Gelb, Rosa. Welche Farbe kommt jetzt?",
            "en": "Navi's cookie row is Pink, Yellow, Pink. Which color comes next?"
          },
          "visual": "🍪  🩷 🟡 🩷  ?",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Gelb.",
            "en": "Pattern solved! Yellow comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Rosa, Gelb.",
            "en": "The two colors take turns: Pink, Yellow."
          }
        },
        {
          "id": "d2cu67",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Flamingo?",
            "en": "Which color can you see in this picture: flamingo?"
          },
          "visual": "🦩",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Richtig! Die Farbe ist Rosa.",
            "en": "Correct! The color is Pink."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu68",
          "prompt": {
            "de": "Finde dieses Bild: Wassertropfen. Seine Farbe ist Blau.",
            "en": "Find this picture: water drop. Its color is Blue."
          },
          "visual": "",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "carrot",
              "label": "🥕"
            },
            {
              "id": "water-drop",
              "label": "💧"
            }
          ],
          "correctAnswerId": "water-drop",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Blau.",
            "en": "Look for the picture in Blue."
          }
        },
        {
          "id": "d2cu69",
          "prompt": {
            "de": "Navis Apfelreihe ist Braun, Lila, Braun. Welche Farbe kommt jetzt?",
            "en": "Navi's apple row is Brown, Purple, Brown. Which color comes next?"
          },
          "visual": "🍎  🟤 🟣 🟤  ?",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Lila.",
            "en": "Pattern solved! Purple comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Braun, Lila.",
            "en": "The two colors take turns: Brown, Purple."
          }
        },
        {
          "id": "d2cu70",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Braunbär?",
            "en": "Which color can you see in this picture: brown bear?"
          },
          "visual": "🐻",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Richtig! Die Farbe ist Braun.",
            "en": "Correct! The color is Brown."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu71",
          "prompt": {
            "de": "Finde dieses Bild: grüner Apfel. Seine Farbe ist Grün.",
            "en": "Find this picture: green apple. Its color is Green."
          },
          "visual": "",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green-apple",
              "label": "🍏"
            },
            {
              "id": "star",
              "label": "🌟"
            }
          ],
          "correctAnswerId": "green-apple",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Grün.",
            "en": "Look for the picture in Green."
          }
        },
        {
          "id": "d2cu72",
          "prompt": {
            "de": "Navis Schirmreihe ist Rot, Orange, Rot. Welche Farbe kommt jetzt?",
            "en": "Navi's umbrella row is Red, Orange, Red. Which color comes next?"
          },
          "visual": "☂️  🔴 🟠 🔴  ?",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Orange.",
            "en": "Pattern solved! Orange comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Rot, Orange.",
            "en": "The two colors take turns: Red, Orange."
          }
        },
        {
          "id": "d2cu73",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Tomate?",
            "en": "Which color can you see in this picture: tomato?"
          },
          "visual": "🍅",
          "conceptKey": "red",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Richtig! Die Farbe ist Rot.",
            "en": "Correct! The color is Red."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu74",
          "prompt": {
            "de": "Finde dieses Bild: Zitrone. Seine Farbe ist Gelb.",
            "en": "Find this picture: lemon. Its color is Yellow."
          },
          "visual": "",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "purple-circle",
              "label": "🟣"
            },
            {
              "id": "lemon",
              "label": "🍋"
            }
          ],
          "correctAnswerId": "lemon",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Gelb.",
            "en": "Look for the picture in Yellow."
          }
        },
        {
          "id": "d2cu75",
          "prompt": {
            "de": "Navis Bootsreihe ist Blau, Rosa, Blau. Welche Farbe kommt jetzt?",
            "en": "Navi's boat row is Blue, Pink, Blue. Which color comes next?"
          },
          "visual": "⛵  🔵 🩷 🔵  ?",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Rosa.",
            "en": "Pattern solved! Pink comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Blau, Rosa.",
            "en": "The two colors take turns: Blue, Pink."
          }
        },
        {
          "id": "d2cu76",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Wassertropfen?",
            "en": "Which color can you see in this picture: water drop?"
          },
          "visual": "💧",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Richtig! Die Farbe ist Blau.",
            "en": "Correct! The color is Blue."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu77",
          "prompt": {
            "de": "Finde dieses Bild: Weintrauben. Seine Farbe ist Lila.",
            "en": "Find this picture: grapes. Its color is Purple."
          },
          "visual": "",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "grapes",
              "label": "🍇"
            },
            {
              "id": "pink-heart",
              "label": "🩷"
            }
          ],
          "correctAnswerId": "grapes",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Lila.",
            "en": "Look for the picture in Purple."
          }
        },
        {
          "id": "d2cu78",
          "prompt": {
            "de": "Navis Zugreihe ist Grün, Braun, Grün. Welche Farbe kommt jetzt?",
            "en": "Navi's train row is Green, Brown, Green. Which color comes next?"
          },
          "visual": "🚆  🟢 🟤 🟢  ?",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Braun.",
            "en": "Pattern solved! Brown comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Grün, Braun.",
            "en": "The two colors take turns: Green, Brown."
          }
        },
        {
          "id": "d2cu79",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: grüner Apfel?",
            "en": "Which color can you see in this picture: green apple?"
          },
          "visual": "🍏",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Richtig! Die Farbe ist Grün.",
            "en": "Correct! The color is Green."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu80",
          "prompt": {
            "de": "Finde dieses Bild: Orange. Seine Farbe ist Orange.",
            "en": "Find this picture: orange fruit. Its color is Orange."
          },
          "visual": "",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "brown-heart",
              "label": "🤎"
            },
            {
              "id": "orange-fruit",
              "label": "🍊"
            }
          ],
          "correctAnswerId": "orange-fruit",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Orange.",
            "en": "Look for the picture in Orange."
          }
        },
        {
          "id": "d2cu81",
          "prompt": {
            "de": "Navis Autoreihe ist Gelb, Rot, Gelb. Welche Farbe kommt jetzt?",
            "en": "Navi's car row is Yellow, Red, Yellow. Which color comes next?"
          },
          "visual": "🚗  🟡 🔴 🟡  ?",
          "conceptKey": "red",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Rot.",
            "en": "Pattern solved! Red comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Gelb, Rot.",
            "en": "The two colors take turns: Yellow, Red."
          }
        },
        {
          "id": "d2cu82",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Zitrone?",
            "en": "Which color can you see in this picture: lemon?"
          },
          "visual": "🍋",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Richtig! Die Farbe ist Gelb.",
            "en": "Correct! The color is Yellow."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu83",
          "prompt": {
            "de": "Finde dieses Bild: Ferkel. Seine Farbe ist Rosa.",
            "en": "Find this picture: piglet. Its color is Pink."
          },
          "visual": "",
          "conceptKey": "pink",
          "answers": [
            {
              "id": "piglet",
              "label": "🐷"
            },
            {
              "id": "blueberries",
              "label": "🫐"
            }
          ],
          "correctAnswerId": "piglet",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Rosa.",
            "en": "Look for the picture in Pink."
          }
        },
        {
          "id": "d2cu84",
          "prompt": {
            "de": "Navis Buchreihe ist Lila, Blau, Lila. Welche Farbe kommt jetzt?",
            "en": "Navi's book row is Purple, Blue, Purple. Which color comes next?"
          },
          "visual": "📘  🟣 🔵 🟣  ?",
          "conceptKey": "blue",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Blau.",
            "en": "Pattern solved! Blue comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Lila, Blau.",
            "en": "The two colors take turns: Purple, Blue."
          }
        },
        {
          "id": "d2cu85",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Weintrauben?",
            "en": "Which color can you see in this picture: grapes?"
          },
          "visual": "🍇",
          "conceptKey": "purple",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Richtig! Die Farbe ist Lila.",
            "en": "Correct! The color is Purple."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu86",
          "prompt": {
            "de": "Finde dieses Bild: Schokolade. Seine Farbe ist Braun.",
            "en": "Find this picture: chocolate. Its color is Brown."
          },
          "visual": "",
          "conceptKey": "brown",
          "answers": [
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "chocolate",
              "label": "🍫"
            }
          ],
          "correctAnswerId": "chocolate",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Braun.",
            "en": "Look for the picture in Brown."
          }
        },
        {
          "id": "d2cu87",
          "prompt": {
            "de": "Navis Stiftreihe ist Orange, Grün, Orange. Welche Farbe kommt jetzt?",
            "en": "Navi's pencil row is Orange, Green, Orange. Which color comes next?"
          },
          "visual": "✏️  🟠 🟢 🟠  ?",
          "conceptKey": "green",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Grün.",
            "en": "Pattern solved! Green comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Orange, Grün.",
            "en": "The two colors take turns: Orange, Green."
          }
        },
        {
          "id": "d2cu88",
          "prompt": {
            "de": "Welche Farbe siehst du bei diesem Bild: Orange?",
            "en": "Which color can you see in this picture: orange fruit?"
          },
          "visual": "🍊",
          "conceptKey": "orange",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Richtig! Die Farbe ist Orange.",
            "en": "Correct! The color is Orange."
          },
          "hint": {
            "de": "Schau dir die Farbe des Bildes genau an.",
            "en": "Look carefully at the color in the picture."
          }
        },
        {
          "id": "d2cu89",
          "prompt": {
            "de": "Finde dieses Bild: rotes Herz. Seine Farbe ist Rot.",
            "en": "Find this picture: red heart. Its color is Red."
          },
          "visual": "",
          "conceptKey": "red",
          "answers": [
            {
              "id": "red-heart",
              "label": "❤️"
            },
            {
              "id": "blue-square",
              "label": "🟦"
            }
          ],
          "correctAnswerId": "red-heart",
          "success": {
            "de": "Prima! Du hast das richtige Bild gefunden.",
            "en": "Great! You found the right picture."
          },
          "hint": {
            "de": "Suche das Bild in Rot.",
            "en": "Look for the picture in Red."
          }
        },
        {
          "id": "d2cu90",
          "prompt": {
            "de": "Navis Würfelreihe ist Rosa, Gelb, Rosa. Welche Farbe kommt jetzt?",
            "en": "Navi's dice row is Pink, Yellow, Pink. Which color comes next?"
          },
          "visual": "🎲  🩷 🟡 🩷  ?",
          "conceptKey": "yellow",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Muster gelöst! Jetzt kommt Gelb.",
            "en": "Pattern solved! Yellow comes next."
          },
          "hint": {
            "de": "Die beiden Farben wechseln sich ab: Rosa, Gelb.",
            "en": "The two colors take turns: Pink, Yellow."
          }
        }
      ],
      "adventurer": [
        {
          "id": "cu1",
          "prompt": {
            "de": "Welche Farbe hat Erdbeere normalerweise?",
            "en": "What color is a ripe strawberry usually?"
          },
          "visual": "🍓",
          "answers": [
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Richtig! Die passende Farbe ist Rot.",
            "en": "Correct! The matching color is Red."
          },
          "hint": {
            "de": "Denk daran, wie Erdbeere in echt aussieht.",
            "en": "Think about what a ripe strawberry looks like in real life."
          }
        },
        {
          "id": "cu2",
          "prompt": {
            "de": "Welche Farbe hat Himmel normalerweise?",
            "en": "What color is a clear sky usually?"
          },
          "visual": "🌤️",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Richtig! Die passende Farbe ist Blau.",
            "en": "Correct! The matching color is Blue."
          },
          "hint": {
            "de": "Denk daran, wie Himmel in echt aussieht.",
            "en": "Think about what a clear sky looks like in real life."
          }
        },
        {
          "id": "cu3",
          "prompt": {
            "de": "Welche Farbe hat Gras normalerweise?",
            "en": "What color is a fresh grass usually?"
          },
          "visual": "🌱",
          "answers": [
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Richtig! Die passende Farbe ist Grün.",
            "en": "Correct! The matching color is Green."
          },
          "hint": {
            "de": "Denk daran, wie Gras in echt aussieht.",
            "en": "Think about what a fresh grass looks like in real life."
          }
        },
        {
          "id": "cu4",
          "prompt": {
            "de": "Welche Farbe hat Banane normalerweise?",
            "en": "What color is a ripe banana usually?"
          },
          "visual": "🍌",
          "answers": [
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Richtig! Die passende Farbe ist Gelb.",
            "en": "Correct! The matching color is Yellow."
          },
          "hint": {
            "de": "Denk daran, wie Banane in echt aussieht.",
            "en": "Think about what a ripe banana looks like in real life."
          }
        },
        {
          "id": "cu5",
          "prompt": {
            "de": "Welche Farbe hat Weintraube normalerweise?",
            "en": "What color is a purple grape usually?"
          },
          "visual": "🍇",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Richtig! Die passende Farbe ist Lila.",
            "en": "Correct! The matching color is Purple."
          },
          "hint": {
            "de": "Denk daran, wie Weintraube in echt aussieht.",
            "en": "Think about what a purple grape looks like in real life."
          }
        },
        {
          "id": "cu6",
          "prompt": {
            "de": "Welche Farbe hat Orange normalerweise?",
            "en": "What color is a orange fruit usually?"
          },
          "visual": "🍊",
          "answers": [
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Richtig! Die passende Farbe ist Orange.",
            "en": "Correct! The matching color is Orange."
          },
          "hint": {
            "de": "Denk daran, wie Orange in echt aussieht.",
            "en": "Think about what a orange fruit looks like in real life."
          }
        },
        {
          "id": "cu7",
          "prompt": {
            "de": "Welche Farbe hat Flamingo normalerweise?",
            "en": "What color is a flamingo usually?"
          },
          "visual": "🦩",
          "answers": [
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Richtig! Die passende Farbe ist Rosa.",
            "en": "Correct! The matching color is Pink."
          },
          "hint": {
            "de": "Denk daran, wie Flamingo in echt aussieht.",
            "en": "Think about what a flamingo looks like in real life."
          }
        },
        {
          "id": "cu8",
          "prompt": {
            "de": "Welche Farbe hat Schokolade normalerweise?",
            "en": "What color is a chocolate usually?"
          },
          "visual": "🍫",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            },
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Richtig! Die passende Farbe ist Braun.",
            "en": "Correct! The matching color is Brown."
          },
          "hint": {
            "de": "Denk daran, wie Schokolade in echt aussieht.",
            "en": "Think about what a chocolate looks like in real life."
          }
        },
        {
          "id": "cu9",
          "prompt": {
            "de": "Welche Farbe hat Schnee normalerweise?",
            "en": "What color is a snow usually?"
          },
          "visual": "❄️",
          "answers": [
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            }
          ],
          "correctAnswerId": "white",
          "success": {
            "de": "Richtig! Die passende Farbe ist Weiß.",
            "en": "Correct! The matching color is White."
          },
          "hint": {
            "de": "Denk daran, wie Schnee in echt aussieht.",
            "en": "Think about what a snow looks like in real life."
          }
        },
        {
          "id": "cu10",
          "prompt": {
            "de": "Welche Farbe hat Kohle normalerweise?",
            "en": "What color is a coal usually?"
          },
          "visual": "🪨",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            },
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            }
          ],
          "correctAnswerId": "black",
          "success": {
            "de": "Richtig! Die passende Farbe ist Schwarz.",
            "en": "Correct! The matching color is Black."
          },
          "hint": {
            "de": "Denk daran, wie Kohle in echt aussieht.",
            "en": "Think about what a coal looks like in real life."
          }
        },
        {
          "id": "cu11",
          "prompt": {
            "de": "Welche Farbe hat Tomate normalerweise?",
            "en": "What color is a ripe tomato usually?"
          },
          "visual": "🍅",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Richtig! Die passende Farbe ist Rot.",
            "en": "Correct! The matching color is Red."
          },
          "hint": {
            "de": "Denk daran, wie Tomate in echt aussieht.",
            "en": "Think about what a ripe tomato looks like in real life."
          }
        },
        {
          "id": "cu12",
          "prompt": {
            "de": "Welche Farbe hat Ozean normalerweise?",
            "en": "What color is a ocean usually?"
          },
          "visual": "🌊",
          "answers": [
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Richtig! Die passende Farbe ist Blau.",
            "en": "Correct! The matching color is Blue."
          },
          "hint": {
            "de": "Denk daran, wie Ozean in echt aussieht.",
            "en": "Think about what a ocean looks like in real life."
          }
        },
        {
          "id": "cu13",
          "prompt": {
            "de": "Welche Farbe hat Blatt normalerweise?",
            "en": "What color is a fresh leaf usually?"
          },
          "visual": "🍃",
          "answers": [
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Richtig! Die passende Farbe ist Grün.",
            "en": "Correct! The matching color is Green."
          },
          "hint": {
            "de": "Denk daran, wie Blatt in echt aussieht.",
            "en": "Think about what a fresh leaf looks like in real life."
          }
        },
        {
          "id": "cu14",
          "prompt": {
            "de": "Welche Farbe hat Zitrone normalerweise?",
            "en": "What color is a lemon usually?"
          },
          "visual": "🍋",
          "answers": [
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Richtig! Die passende Farbe ist Gelb.",
            "en": "Correct! The matching color is Yellow."
          },
          "hint": {
            "de": "Denk daran, wie Zitrone in echt aussieht.",
            "en": "Think about what a lemon looks like in real life."
          }
        },
        {
          "id": "cu15",
          "prompt": {
            "de": "Welche Farbe hat Lavendelblüte normalerweise?",
            "en": "What color is a lavender flower usually?"
          },
          "visual": "🪻",
          "answers": [
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Richtig! Die passende Farbe ist Lila.",
            "en": "Correct! The matching color is Purple."
          },
          "hint": {
            "de": "Denk daran, wie Lavendelblüte in echt aussieht.",
            "en": "Think about what a lavender flower looks like in real life."
          }
        },
        {
          "id": "cu16",
          "prompt": {
            "de": "Welche Farbe hat Karotte normalerweise?",
            "en": "What color is a carrot usually?"
          },
          "visual": "🥕",
          "answers": [
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Richtig! Die passende Farbe ist Orange.",
            "en": "Correct! The matching color is Orange."
          },
          "hint": {
            "de": "Denk daran, wie Karotte in echt aussieht.",
            "en": "Think about what a carrot looks like in real life."
          }
        },
        {
          "id": "cu17",
          "prompt": {
            "de": "Welche Farbe hat Ferkel normalerweise?",
            "en": "What color is a piglet usually?"
          },
          "visual": "🐷",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Richtig! Die passende Farbe ist Rosa.",
            "en": "Correct! The matching color is Pink."
          },
          "hint": {
            "de": "Denk daran, wie Ferkel in echt aussieht.",
            "en": "Think about what a piglet looks like in real life."
          }
        },
        {
          "id": "cu18",
          "prompt": {
            "de": "Welche Farbe hat Baumstamm normalerweise?",
            "en": "What color is a tree trunk usually?"
          },
          "visual": "🌳",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Richtig! Die passende Farbe ist Braun.",
            "en": "Correct! The matching color is Brown."
          },
          "hint": {
            "de": "Denk daran, wie Baumstamm in echt aussieht.",
            "en": "Think about what a tree trunk looks like in real life."
          }
        },
        {
          "id": "cu19",
          "prompt": {
            "de": "Welche Farbe hat Wolke normalerweise?",
            "en": "What color is a bright cloud usually?"
          },
          "visual": "☁️",
          "answers": [
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "white",
          "success": {
            "de": "Richtig! Die passende Farbe ist Weiß.",
            "en": "Correct! The matching color is White."
          },
          "hint": {
            "de": "Denk daran, wie Wolke in echt aussieht.",
            "en": "Think about what a bright cloud looks like in real life."
          }
        },
        {
          "id": "cu20",
          "prompt": {
            "de": "Welche Farbe hat Nacht normalerweise?",
            "en": "What color is a dark night usually?"
          },
          "visual": "🌑",
          "answers": [
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            }
          ],
          "correctAnswerId": "black",
          "success": {
            "de": "Richtig! Die passende Farbe ist Schwarz.",
            "en": "Correct! The matching color is Black."
          },
          "hint": {
            "de": "Denk daran, wie Nacht in echt aussieht.",
            "en": "Think about what a dark night looks like in real life."
          }
        },
        {
          "id": "cu21",
          "prompt": {
            "de": "Welche Farbe hat Feuerwehrauto normalerweise?",
            "en": "What color is a fire truck usually?"
          },
          "visual": "🚒",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Richtig! Die passende Farbe ist Rot.",
            "en": "Correct! The matching color is Red."
          },
          "hint": {
            "de": "Denk daran, wie Feuerwehrauto in echt aussieht.",
            "en": "Think about what a fire truck looks like in real life."
          }
        },
        {
          "id": "cu22",
          "prompt": {
            "de": "Welche Farbe hat Heidelbeere normalerweise?",
            "en": "What color is a blueberry usually?"
          },
          "visual": "🫐",
          "answers": [
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Richtig! Die passende Farbe ist Blau.",
            "en": "Correct! The matching color is Blue."
          },
          "hint": {
            "de": "Denk daran, wie Heidelbeere in echt aussieht.",
            "en": "Think about what a blueberry looks like in real life."
          }
        },
        {
          "id": "cu23",
          "prompt": {
            "de": "Welche Farbe hat Frosch normalerweise?",
            "en": "What color is a frog usually?"
          },
          "visual": "🐸",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Richtig! Die passende Farbe ist Grün.",
            "en": "Correct! The matching color is Green."
          },
          "hint": {
            "de": "Denk daran, wie Frosch in echt aussieht.",
            "en": "Think about what a frog looks like in real life."
          }
        },
        {
          "id": "cu24",
          "prompt": {
            "de": "Welche Farbe hat Sonnenblume normalerweise?",
            "en": "What color is a sunflower usually?"
          },
          "visual": "🌻",
          "answers": [
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            },
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Richtig! Die passende Farbe ist Gelb.",
            "en": "Correct! The matching color is Yellow."
          },
          "hint": {
            "de": "Denk daran, wie Sonnenblume in echt aussieht.",
            "en": "Think about what a sunflower looks like in real life."
          }
        },
        {
          "id": "cu25",
          "prompt": {
            "de": "Welche Farbe hat Pflaume normalerweise?",
            "en": "What color is a plum usually?"
          },
          "visual": "🟣",
          "answers": [
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Richtig! Die passende Farbe ist Lila.",
            "en": "Correct! The matching color is Purple."
          },
          "hint": {
            "de": "Denk daran, wie Pflaume in echt aussieht.",
            "en": "Think about what a plum looks like in real life."
          }
        },
        {
          "id": "cu26",
          "prompt": {
            "de": "Welche Farbe hat Kürbis normalerweise?",
            "en": "What color is a pumpkin usually?"
          },
          "visual": "🎃",
          "answers": [
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Richtig! Die passende Farbe ist Orange.",
            "en": "Correct! The matching color is Orange."
          },
          "hint": {
            "de": "Denk daran, wie Kürbis in echt aussieht.",
            "en": "Think about what a pumpkin looks like in real life."
          }
        },
        {
          "id": "cu27",
          "prompt": {
            "de": "Welche Farbe hat Zuckerwatte normalerweise?",
            "en": "What color is a cotton candy usually?"
          },
          "visual": "🍭",
          "answers": [
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Richtig! Die passende Farbe ist Rosa.",
            "en": "Correct! The matching color is Pink."
          },
          "hint": {
            "de": "Denk daran, wie Zuckerwatte in echt aussieht.",
            "en": "Think about what a cotton candy looks like in real life."
          }
        },
        {
          "id": "cu28",
          "prompt": {
            "de": "Welche Farbe hat Braunbär normalerweise?",
            "en": "What color is a brown bear usually?"
          },
          "visual": "🐻",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Richtig! Die passende Farbe ist Braun.",
            "en": "Correct! The matching color is Brown."
          },
          "hint": {
            "de": "Denk daran, wie Braunbär in echt aussieht.",
            "en": "Think about what a brown bear looks like in real life."
          }
        },
        {
          "id": "cu29",
          "prompt": {
            "de": "Welche Farbe hat Milch normalerweise?",
            "en": "What color is a milk usually?"
          },
          "visual": "🥛",
          "answers": [
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "white",
          "success": {
            "de": "Richtig! Die passende Farbe ist Weiß.",
            "en": "Correct! The matching color is White."
          },
          "hint": {
            "de": "Denk daran, wie Milch in echt aussieht.",
            "en": "Think about what a milk looks like in real life."
          }
        },
        {
          "id": "cu30",
          "prompt": {
            "de": "Welche Farbe hat Autoreifen normalerweise?",
            "en": "What color is a car tire usually?"
          },
          "visual": "🛞",
          "answers": [
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            }
          ],
          "correctAnswerId": "black",
          "success": {
            "de": "Richtig! Die passende Farbe ist Schwarz.",
            "en": "Correct! The matching color is Black."
          },
          "hint": {
            "de": "Denk daran, wie Autoreifen in echt aussieht.",
            "en": "Think about what a car tire looks like in real life."
          }
        },
        {
          "id": "cu31",
          "prompt": {
            "de": "Welche Farbe hat Kirsche normalerweise?",
            "en": "What color is a cherry usually?"
          },
          "visual": "🍒",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Richtig! Die passende Farbe ist Rot.",
            "en": "Correct! The matching color is Red."
          },
          "hint": {
            "de": "Denk daran, wie Kirsche in echt aussieht.",
            "en": "Think about what a cherry looks like in real life."
          }
        },
        {
          "id": "cu32",
          "prompt": {
            "de": "Welche Farbe hat Blauwal normalerweise?",
            "en": "What color is a blue whale usually?"
          },
          "visual": "🐋",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Richtig! Die passende Farbe ist Blau.",
            "en": "Correct! The matching color is Blue."
          },
          "hint": {
            "de": "Denk daran, wie Blauwal in echt aussieht.",
            "en": "Think about what a blue whale looks like in real life."
          }
        },
        {
          "id": "cu33",
          "prompt": {
            "de": "Welche Farbe hat Gurke normalerweise?",
            "en": "What color is a cucumber usually?"
          },
          "visual": "🥒",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Richtig! Die passende Farbe ist Grün.",
            "en": "Correct! The matching color is Green."
          },
          "hint": {
            "de": "Denk daran, wie Gurke in echt aussieht.",
            "en": "Think about what a cucumber looks like in real life."
          }
        },
        {
          "id": "cu34",
          "prompt": {
            "de": "Welche Farbe hat Küken normalerweise?",
            "en": "What color is a chick usually?"
          },
          "visual": "🐥",
          "answers": [
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Richtig! Die passende Farbe ist Gelb.",
            "en": "Correct! The matching color is Yellow."
          },
          "hint": {
            "de": "Denk daran, wie Küken in echt aussieht.",
            "en": "Think about what a chick looks like in real life."
          }
        },
        {
          "id": "cu35",
          "prompt": {
            "de": "Welche Farbe hat Aubergine normalerweise?",
            "en": "What color is a eggplant usually?"
          },
          "visual": "🍆",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Richtig! Die passende Farbe ist Lila.",
            "en": "Correct! The matching color is Purple."
          },
          "hint": {
            "de": "Denk daran, wie Aubergine in echt aussieht.",
            "en": "Think about what a eggplant looks like in real life."
          }
        },
        {
          "id": "cu36",
          "prompt": {
            "de": "Welche Farbe hat Tigerfell normalerweise?",
            "en": "What color is a tiger fur usually?"
          },
          "visual": "🐯",
          "answers": [
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Richtig! Die passende Farbe ist Orange.",
            "en": "Correct! The matching color is Orange."
          },
          "hint": {
            "de": "Denk daran, wie Tigerfell in echt aussieht.",
            "en": "Think about what a tiger fur looks like in real life."
          }
        },
        {
          "id": "cu37",
          "prompt": {
            "de": "Welche Farbe entsteht aus Rot und Gelb?",
            "en": "Which color do Red and Yellow make?"
          },
          "visual": "🔴 + 🟡 = ?",
          "answers": [
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Genau! Daraus entsteht Orange.",
            "en": "Exactly! They make Orange."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu38",
          "prompt": {
            "de": "Welche Farbe entsteht aus Blau und Gelb?",
            "en": "Which color do Blue and Yellow make?"
          },
          "visual": "🔵 + 🟡 = ?",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Genau! Daraus entsteht Grün.",
            "en": "Exactly! They make Green."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu39",
          "prompt": {
            "de": "Welche Farbe entsteht aus Rot und Blau?",
            "en": "Which color do Red and Blue make?"
          },
          "visual": "🔴 + 🔵 = ?",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Genau! Daraus entsteht Lila.",
            "en": "Exactly! They make Purple."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu40",
          "prompt": {
            "de": "Welche Farbe entsteht aus Rot und Weiß?",
            "en": "Which color do Red and White make?"
          },
          "visual": "🔴 + ⚪ = ?",
          "answers": [
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Genau! Daraus entsteht Rosa.",
            "en": "Exactly! They make Pink."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu41",
          "prompt": {
            "de": "Welche Farbe entsteht aus Schwarz und Weiß?",
            "en": "Which color do Black and White make?"
          },
          "visual": "⚫ + ⚪ = ?",
          "answers": [
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            }
          ],
          "correctAnswerId": "gray",
          "success": {
            "de": "Genau! Daraus entsteht Grau.",
            "en": "Exactly! They make Gray."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu42",
          "prompt": {
            "de": "Welche Farbe entsteht aus Blau und Weiß?",
            "en": "Which color do Blue and White make?"
          },
          "visual": "🔵 + ⚪ = ?",
          "answers": [
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            },
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            },
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            }
          ],
          "correctAnswerId": "light-blue",
          "success": {
            "de": "Genau! Daraus entsteht Hellblau.",
            "en": "Exactly! They make Light blue."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu43",
          "prompt": {
            "de": "Welche Farbe entsteht aus Grün und Weiß?",
            "en": "Which color do Green and White make?"
          },
          "visual": "🟢 + ⚪ = ?",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            },
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            }
          ],
          "correctAnswerId": "light-green",
          "success": {
            "de": "Genau! Daraus entsteht Hellgrün.",
            "en": "Exactly! They make Light green."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu44",
          "prompt": {
            "de": "Welche Farbe entsteht aus Gelb und Weiß?",
            "en": "Which color do Yellow and White make?"
          },
          "visual": "🟡 + ⚪ = ?",
          "answers": [
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            },
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "light-yellow",
          "success": {
            "de": "Genau! Daraus entsteht Hellgelb.",
            "en": "Exactly! They make Light yellow."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu45",
          "prompt": {
            "de": "Welche Farbe entsteht aus Orange und Weiß?",
            "en": "Which color do Orange and White make?"
          },
          "visual": "🟠 + ⚪ = ?",
          "answers": [
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            }
          ],
          "correctAnswerId": "peach",
          "success": {
            "de": "Genau! Daraus entsteht Pfirsich.",
            "en": "Exactly! They make Peach."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu46",
          "prompt": {
            "de": "Welche Farbe entsteht aus Lila und Weiß?",
            "en": "Which color do Purple and White make?"
          },
          "visual": "🟣 + ⚪ = ?",
          "answers": [
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            },
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            }
          ],
          "correctAnswerId": "lilac",
          "success": {
            "de": "Genau! Daraus entsteht Flieder.",
            "en": "Exactly! They make Lilac."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu47",
          "prompt": {
            "de": "Welche Farbe entsteht aus Braun und Weiß?",
            "en": "Which color do Brown and White make?"
          },
          "visual": "🟤 + ⚪ = ?",
          "answers": [
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            },
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "beige",
          "success": {
            "de": "Genau! Daraus entsteht Beige.",
            "en": "Exactly! They make Beige."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu48",
          "prompt": {
            "de": "Welche Farbe entsteht aus Blau und Schwarz?",
            "en": "Which color do Blue and Black make?"
          },
          "visual": "🔵 + ⚫ = ?",
          "answers": [
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            }
          ],
          "correctAnswerId": "dark-blue",
          "success": {
            "de": "Genau! Daraus entsteht Dunkelblau.",
            "en": "Exactly! They make Dark blue."
          },
          "hint": {
            "de": "Stell dir vor, du rührst beide Farben zusammen.",
            "en": "Imagine stirring the two paints together."
          }
        },
        {
          "id": "cu49",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Rot, Blau, Rot, Blau?",
            "en": "Which color comes next after Red, Blue, Red, Blue?"
          },
          "visual": "🔴 🔵 🔴 🔵  ?",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Rot.",
            "en": "Pattern solved! Red comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu50",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Gelb, Grün, Gelb, Grün?",
            "en": "Which color comes next after Yellow, Green, Yellow, Green?"
          },
          "visual": "🟡 🟢 🟡 🟢  ?",
          "answers": [
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Gelb.",
            "en": "Pattern solved! Yellow comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu51",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Lila, Orange, Lila, Orange?",
            "en": "Which color comes next after Purple, Orange, Purple, Orange?"
          },
          "visual": "🟣 🟠 🟣 🟠  ?",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Lila.",
            "en": "Pattern solved! Purple comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu52",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Rosa, Blau, Rosa, Blau?",
            "en": "Which color comes next after Pink, Blue, Pink, Blue?"
          },
          "visual": "🩷 🔵 🩷 🔵  ?",
          "answers": [
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Rosa.",
            "en": "Pattern solved! Pink comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu53",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Braun, Gelb, Braun, Gelb?",
            "en": "Which color comes next after Brown, Yellow, Brown, Yellow?"
          },
          "visual": "🟤 🟡 🟤 🟡  ?",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Braun.",
            "en": "Pattern solved! Brown comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu54",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Schwarz, Weiß, Schwarz, Weiß?",
            "en": "Which color comes next after Black, White, Black, White?"
          },
          "visual": "⚫ ⚪ ⚫ ⚪  ?",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            }
          ],
          "correctAnswerId": "black",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Schwarz.",
            "en": "Pattern solved! Black comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu55",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Grün, Rot, Grün, Rot?",
            "en": "Which color comes next after Green, Red, Green, Red?"
          },
          "visual": "🟢 🔴 🟢 🔴  ?",
          "answers": [
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Grün.",
            "en": "Pattern solved! Green comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu56",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Orange, Blau, Orange, Blau?",
            "en": "Which color comes next after Orange, Blue, Orange, Blue?"
          },
          "visual": "🟠 🔵 🟠 🔵  ?",
          "answers": [
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Orange.",
            "en": "Pattern solved! Orange comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu57",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Weiß, Lila, Weiß, Lila?",
            "en": "Which color comes next after White, Purple, White, Purple?"
          },
          "visual": "⚪ 🟣 ⚪ 🟣  ?",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            }
          ],
          "correctAnswerId": "white",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Weiß.",
            "en": "Pattern solved! White comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu58",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Gelb, Rosa, Gelb, Rosa?",
            "en": "Which color comes next after Yellow, Pink, Yellow, Pink?"
          },
          "visual": "🟡 🩷 🟡 🩷  ?",
          "answers": [
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Gelb.",
            "en": "Pattern solved! Yellow comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu59",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Blau, Braun, Blau, Braun?",
            "en": "Which color comes next after Blue, Brown, Blue, Brown?"
          },
          "visual": "🔵 🟤 🔵 🟤  ?",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            },
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Blau.",
            "en": "Pattern solved! Blue comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu60",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Rot, Weiß, Rot, Weiß?",
            "en": "Which color comes next after Red, White, Red, White?"
          },
          "visual": "🔴 ⚪ 🔴 ⚪  ?",
          "answers": [
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Rot.",
            "en": "Pattern solved! Red comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu61",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Blau, Grün, Gelb, Blau, Grün?",
            "en": "Which color comes next after Blue, Green, Yellow, Blue, Green?"
          },
          "visual": "🔵 🟢 🟡 🔵 🟢  ?",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Gelb.",
            "en": "Pattern solved! Yellow comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu62",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Rot, Gelb, Blau, Rot, Gelb?",
            "en": "Which color comes next after Red, Yellow, Blue, Red, Yellow?"
          },
          "visual": "🔴 🟡 🔵 🔴 🟡  ?",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Blau.",
            "en": "Pattern solved! Blue comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu63",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Rosa, Lila, Weiß, Rosa, Lila?",
            "en": "Which color comes next after Pink, Purple, White, Pink, Purple?"
          },
          "visual": "🩷 🟣 ⚪ 🩷 🟣  ?",
          "answers": [
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            }
          ],
          "correctAnswerId": "white",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Weiß.",
            "en": "Pattern solved! White comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu64",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Orange, Grün, Braun, Orange, Grün?",
            "en": "Which color comes next after Orange, Green, Brown, Orange, Green?"
          },
          "visual": "🟠 🟢 🟤 🟠 🟢  ?",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Braun.",
            "en": "Pattern solved! Brown comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu65",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Schwarz, Grau, Weiß, Schwarz, Grau?",
            "en": "Which color comes next after Black, Gray, White, Black, Gray?"
          },
          "visual": "⚫ 🩶 ⚪ ⚫ 🩶  ?",
          "answers": [
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "white",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Weiß.",
            "en": "Pattern solved! White comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu66",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Gelb, Orange, Rot, Gelb, Orange?",
            "en": "Which color comes next after Yellow, Orange, Red, Yellow, Orange?"
          },
          "visual": "🟡 🟠 🔴 🟡 🟠  ?",
          "answers": [
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Rot.",
            "en": "Pattern solved! Red comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu67",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Grün, Blau, Lila, Grün, Blau?",
            "en": "Which color comes next after Green, Blue, Purple, Green, Blue?"
          },
          "visual": "🟢 🔵 🟣 🟢 🔵  ?",
          "answers": [
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Lila.",
            "en": "Pattern solved! Purple comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu68",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Weiß, Blau, Rot, Weiß, Blau?",
            "en": "Which color comes next after White, Blue, Red, White, Blue?"
          },
          "visual": "⚪ 🔵 🔴 ⚪ 🔵  ?",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Rot.",
            "en": "Pattern solved! Red comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu69",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Braun, Orange, Gelb, Braun, Orange?",
            "en": "Which color comes next after Brown, Orange, Yellow, Brown, Orange?"
          },
          "visual": "🟤 🟠 🟡 🟤 🟠  ?",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Gelb.",
            "en": "Pattern solved! Yellow comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu70",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Lila, Rosa, Rot, Lila, Rosa?",
            "en": "Which color comes next after Purple, Pink, Red, Purple, Pink?"
          },
          "visual": "🟣 🩷 🔴 🟣 🩷  ?",
          "answers": [
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Rot.",
            "en": "Pattern solved! Red comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu71",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Blau, Weiß, Grün, Blau, Weiß?",
            "en": "Which color comes next after Blue, White, Green, Blue, White?"
          },
          "visual": "🔵 ⚪ 🟢 🔵 ⚪  ?",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Grün.",
            "en": "Pattern solved! Green comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu72",
          "prompt": {
            "de": "Welche Farbe kommt als Nächstes nach Rot, Schwarz, Gelb, Rot, Schwarz?",
            "en": "Which color comes next after Red, Black, Yellow, Red, Black?"
          },
          "visual": "🔴 ⚫ 🟡 🔴 ⚫  ?",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Muster gelöst! Als Nächstes kommt Gelb.",
            "en": "Pattern solved! Yellow comes next."
          },
          "hint": {
            "de": "Suche den Teil, der sich im Muster wiederholt.",
            "en": "Find the part that repeats in the pattern."
          }
        },
        {
          "id": "cu73",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Ampellicht zum Anhalten?",
            "en": "Which color best matches the traffic light that means stop?"
          },
          "visual": "🚦",
          "answers": [
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            }
          ],
          "correctAnswerId": "red",
          "success": {
            "de": "Sehr gut! Hier passt Rot.",
            "en": "Very good! Red matches here."
          },
          "hint": {
            "de": "Schau dir Ampellicht zum Anhalten genau vor deinem inneren Auge an.",
            "en": "Picture the traffic light that means stop carefully in your mind."
          }
        },
        {
          "id": "cu74",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Regentropfen im Bilderbuch?",
            "en": "Which color best matches the raindrop in the picture book?"
          },
          "visual": "💧",
          "answers": [
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            }
          ],
          "correctAnswerId": "blue",
          "success": {
            "de": "Sehr gut! Hier passt Blau.",
            "en": "Very good! Blue matches here."
          },
          "hint": {
            "de": "Schau dir Regentropfen im Bilderbuch genau vor deinem inneren Auge an.",
            "en": "Picture the raindrop in the picture book carefully in your mind."
          }
        },
        {
          "id": "cu75",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Kleeblatt?",
            "en": "Which color best matches the clover leaf?"
          },
          "visual": "☘️",
          "answers": [
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            },
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            }
          ],
          "correctAnswerId": "green",
          "success": {
            "de": "Sehr gut! Hier passt Grün.",
            "en": "Very good! Green matches here."
          },
          "hint": {
            "de": "Schau dir Kleeblatt genau vor deinem inneren Auge an.",
            "en": "Picture the clover leaf carefully in your mind."
          }
        },
        {
          "id": "cu76",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Goldmünze?",
            "en": "Which color best matches the gold coin?"
          },
          "visual": "🪙",
          "answers": [
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            }
          ],
          "correctAnswerId": "yellow",
          "success": {
            "de": "Sehr gut! Hier passt Gelb.",
            "en": "Very good! Yellow matches here."
          },
          "hint": {
            "de": "Schau dir Goldmünze genau vor deinem inneren Auge an.",
            "en": "Picture the gold coin carefully in your mind."
          }
        },
        {
          "id": "cu77",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Zaubererhut?",
            "en": "Which color best matches the wizard hat?"
          },
          "visual": "🧙",
          "answers": [
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            },
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            }
          ],
          "correctAnswerId": "purple",
          "success": {
            "de": "Sehr gut! Hier passt Lila.",
            "en": "Very good! Purple matches here."
          },
          "hint": {
            "de": "Schau dir Zaubererhut genau vor deinem inneren Auge an.",
            "en": "Picture the wizard hat carefully in your mind."
          }
        },
        {
          "id": "cu78",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Mandarine?",
            "en": "Which color best matches the tangerine?"
          },
          "visual": "🍊",
          "answers": [
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            }
          ],
          "correctAnswerId": "orange",
          "success": {
            "de": "Sehr gut! Hier passt Orange.",
            "en": "Very good! Orange matches here."
          },
          "hint": {
            "de": "Schau dir Mandarine genau vor deinem inneren Auge an.",
            "en": "Picture the tangerine carefully in your mind."
          }
        },
        {
          "id": "cu79",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Rosenblüte?",
            "en": "Which color best matches the pink rose?"
          },
          "visual": "🌸",
          "answers": [
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            }
          ],
          "correctAnswerId": "pink",
          "success": {
            "de": "Sehr gut! Hier passt Rosa.",
            "en": "Very good! Pink matches here."
          },
          "hint": {
            "de": "Schau dir Rosenblüte genau vor deinem inneren Auge an.",
            "en": "Picture the pink rose carefully in your mind."
          }
        },
        {
          "id": "cu80",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Haselnuss?",
            "en": "Which color best matches the hazelnut?"
          },
          "visual": "🌰",
          "answers": [
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            },
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            }
          ],
          "correctAnswerId": "brown",
          "success": {
            "de": "Sehr gut! Hier passt Braun.",
            "en": "Very good! Brown matches here."
          },
          "hint": {
            "de": "Schau dir Haselnuss genau vor deinem inneren Auge an.",
            "en": "Picture the hazelnut carefully in your mind."
          }
        },
        {
          "id": "cu81",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Eisbärfell?",
            "en": "Which color best matches the polar bear fur?"
          },
          "visual": "🐻‍❄️",
          "answers": [
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            },
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            }
          ],
          "correctAnswerId": "white",
          "success": {
            "de": "Sehr gut! Hier passt Weiß.",
            "en": "Very good! White matches here."
          },
          "hint": {
            "de": "Schau dir Eisbärfell genau vor deinem inneren Auge an.",
            "en": "Picture the polar bear fur carefully in your mind."
          }
        },
        {
          "id": "cu82",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Piratenschatten?",
            "en": "Which color best matches the pirate shadow?"
          },
          "visual": "🏴‍☠️",
          "answers": [
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            },
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            }
          ],
          "correctAnswerId": "black",
          "success": {
            "de": "Sehr gut! Hier passt Schwarz.",
            "en": "Very good! Black matches here."
          },
          "hint": {
            "de": "Schau dir Piratenschatten genau vor deinem inneren Auge an.",
            "en": "Picture the pirate shadow carefully in your mind."
          }
        },
        {
          "id": "cu83",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Elefantenhaut?",
            "en": "Which color best matches the elephant skin?"
          },
          "visual": "🐘",
          "answers": [
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            },
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            },
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            }
          ],
          "correctAnswerId": "gray",
          "success": {
            "de": "Sehr gut! Hier passt Grau.",
            "en": "Very good! Gray matches here."
          },
          "hint": {
            "de": "Schau dir Elefantenhaut genau vor deinem inneren Auge an.",
            "en": "Picture the elephant skin carefully in your mind."
          }
        },
        {
          "id": "cu84",
          "prompt": {
            "de": "Welche Farbe passt am besten zu heller Sommerhimmel?",
            "en": "Which color best matches the pale summer sky?"
          },
          "visual": "🌤️",
          "answers": [
            {
              "id": "red",
              "label": {
                "de": "Rot",
                "en": "Red"
              },
              "color": "#EF5350"
            },
            {
              "id": "brown",
              "label": {
                "de": "Braun",
                "en": "Brown"
              },
              "color": "#8D6E63"
            },
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            }
          ],
          "correctAnswerId": "light-blue",
          "success": {
            "de": "Sehr gut! Hier passt Hellblau.",
            "en": "Very good! Light blue matches here."
          },
          "hint": {
            "de": "Schau dir heller Sommerhimmel genau vor deinem inneren Auge an.",
            "en": "Picture the pale summer sky carefully in your mind."
          }
        },
        {
          "id": "cu85",
          "prompt": {
            "de": "Welche Farbe passt am besten zu junger Salat?",
            "en": "Which color best matches the young lettuce?"
          },
          "visual": "🥬",
          "answers": [
            {
              "id": "white",
              "label": {
                "de": "Weiß",
                "en": "White"
              },
              "color": "#F4F4F0"
            },
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            },
            {
              "id": "blue",
              "label": {
                "de": "Blau",
                "en": "Blue"
              },
              "color": "#42A5F5"
            }
          ],
          "correctAnswerId": "light-green",
          "success": {
            "de": "Sehr gut! Hier passt Hellgrün.",
            "en": "Very good! Light green matches here."
          },
          "hint": {
            "de": "Schau dir junger Salat genau vor deinem inneren Auge an.",
            "en": "Picture the young lettuce carefully in your mind."
          }
        },
        {
          "id": "cu86",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Vanilleeis?",
            "en": "Which color best matches the vanilla ice cream?"
          },
          "visual": "🍨",
          "answers": [
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            },
            {
              "id": "green",
              "label": {
                "de": "Grün",
                "en": "Green"
              },
              "color": "#66BB6A"
            },
            {
              "id": "black",
              "label": {
                "de": "Schwarz",
                "en": "Black"
              },
              "color": "#303438"
            }
          ],
          "correctAnswerId": "light-yellow",
          "success": {
            "de": "Sehr gut! Hier passt Hellgelb.",
            "en": "Very good! Light yellow matches here."
          },
          "hint": {
            "de": "Schau dir Vanilleeis genau vor deinem inneren Auge an.",
            "en": "Picture the vanilla ice cream carefully in your mind."
          }
        },
        {
          "id": "cu87",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Pfirsichfrucht?",
            "en": "Which color best matches the peach fruit?"
          },
          "visual": "🍑",
          "answers": [
            {
              "id": "yellow",
              "label": {
                "de": "Gelb",
                "en": "Yellow"
              },
              "color": "#FBC02D"
            },
            {
              "id": "gray",
              "label": {
                "de": "Grau",
                "en": "Gray"
              },
              "color": "#9E9E9E"
            },
            {
              "id": "peach",
              "label": {
                "de": "Pfirsich",
                "en": "Peach"
              },
              "color": "#FFB38A"
            }
          ],
          "correctAnswerId": "peach",
          "success": {
            "de": "Sehr gut! Hier passt Pfirsich.",
            "en": "Very good! Peach matches here."
          },
          "hint": {
            "de": "Schau dir Pfirsichfrucht genau vor deinem inneren Auge an.",
            "en": "Picture the peach fruit carefully in your mind."
          }
        },
        {
          "id": "cu88",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Fliederblüte?",
            "en": "Which color best matches the lilac flower?"
          },
          "visual": "🪻",
          "answers": [
            {
              "id": "light-blue",
              "label": {
                "de": "Hellblau",
                "en": "Light blue"
              },
              "color": "#81D4FA"
            },
            {
              "id": "lilac",
              "label": {
                "de": "Flieder",
                "en": "Lilac"
              },
              "color": "#CE93D8"
            },
            {
              "id": "purple",
              "label": {
                "de": "Lila",
                "en": "Purple"
              },
              "color": "#AB47BC"
            }
          ],
          "correctAnswerId": "lilac",
          "success": {
            "de": "Sehr gut! Hier passt Flieder.",
            "en": "Very good! Lilac matches here."
          },
          "hint": {
            "de": "Schau dir Fliederblüte genau vor deinem inneren Auge an.",
            "en": "Picture the lilac flower carefully in your mind."
          }
        },
        {
          "id": "cu89",
          "prompt": {
            "de": "Welche Farbe passt am besten zu Sandstrand?",
            "en": "Which color best matches the sandy beach?"
          },
          "visual": "🏖️",
          "answers": [
            {
              "id": "beige",
              "label": {
                "de": "Beige",
                "en": "Beige"
              },
              "color": "#D7C3A3"
            },
            {
              "id": "orange",
              "label": {
                "de": "Orange",
                "en": "Orange"
              },
              "color": "#FB8C00"
            },
            {
              "id": "light-green",
              "label": {
                "de": "Hellgrün",
                "en": "Light green"
              },
              "color": "#A5D6A7"
            }
          ],
          "correctAnswerId": "beige",
          "success": {
            "de": "Sehr gut! Hier passt Beige.",
            "en": "Very good! Beige matches here."
          },
          "hint": {
            "de": "Schau dir Sandstrand genau vor deinem inneren Auge an.",
            "en": "Picture the sandy beach carefully in your mind."
          }
        },
        {
          "id": "cu90",
          "prompt": {
            "de": "Welche Farbe passt am besten zu tiefer Nachthimmel?",
            "en": "Which color best matches the deep night sky?"
          },
          "visual": "🌌",
          "answers": [
            {
              "id": "pink",
              "label": {
                "de": "Rosa",
                "en": "Pink"
              },
              "color": "#EC6FA7"
            },
            {
              "id": "light-yellow",
              "label": {
                "de": "Hellgelb",
                "en": "Light yellow"
              },
              "color": "#FFF59D"
            },
            {
              "id": "dark-blue",
              "label": {
                "de": "Dunkelblau",
                "en": "Dark blue"
              },
              "color": "#24478F"
            }
          ],
          "correctAnswerId": "dark-blue",
          "success": {
            "de": "Sehr gut! Hier passt Dunkelblau.",
            "en": "Very good! Dark blue matches here."
          },
          "hint": {
            "de": "Schau dir tiefer Nachthimmel genau vor deinem inneren Auge an.",
            "en": "Picture the deep night sky carefully in your mind."
          }
        }
      ]
    }
  },
  {
    "id": "animals",
    "title": {
      "de": "Tiere",
      "en": "Animals"
    },
    "subtitle": {
      "de": "Tiere und ihre Welt kennenlernen",
      "en": "Meet animals and their world"
    },
    "icon": "🐾",
    "color": "#58AE75",
    "lightColor": "#E1F5E7",
    "questionsByAge": {
      "discoverer": [
        {
          "id": "dau1",
          "prompt": {
            "de": "Tippe auf dieses Tier: Katze.",
            "en": "Tap this animal: cat."
          },
          "visual": "",
          "answers": [
            {
              "id": "cat",
              "label": "🐱"
            },
            {
              "id": "snail",
              "label": "🐌"
            }
          ],
          "correctAnswerId": "cat",
          "success": {
            "de": "Ja, richtig: Katze.",
            "en": "Yes, that is the cat."
          },
          "hint": {
            "de": "Suche dieses Tier: Katze.",
            "en": "Look for the picture of the cat."
          }
        },
        {
          "id": "dau2",
          "prompt": {
            "de": "Tippe auf dieses Tier: Hund.",
            "en": "Tap this animal: dog."
          },
          "visual": "",
          "answers": [
            {
              "id": "frog",
              "label": "🐸"
            },
            {
              "id": "dog",
              "label": "🐶"
            }
          ],
          "correctAnswerId": "dog",
          "success": {
            "de": "Ja, richtig: Hund.",
            "en": "Yes, that is the dog."
          },
          "hint": {
            "de": "Suche dieses Tier: Hund.",
            "en": "Look for the picture of the dog."
          }
        },
        {
          "id": "dau3",
          "prompt": {
            "de": "Tippe auf dieses Tier: Kuh.",
            "en": "Tap this animal: cow."
          },
          "visual": "",
          "answers": [
            {
              "id": "cow",
              "label": "🐮"
            },
            {
              "id": "turtle",
              "label": "🐢"
            }
          ],
          "correctAnswerId": "cow",
          "success": {
            "de": "Ja, richtig: Kuh.",
            "en": "Yes, that is the cow."
          },
          "hint": {
            "de": "Suche dieses Tier: Kuh.",
            "en": "Look for the picture of the cow."
          }
        },
        {
          "id": "dau4",
          "prompt": {
            "de": "Tippe auf dieses Tier: Pferd.",
            "en": "Tap this animal: horse."
          },
          "visual": "",
          "answers": [
            {
              "id": "fish",
              "label": "🐟"
            },
            {
              "id": "horse",
              "label": "🐴"
            }
          ],
          "correctAnswerId": "horse",
          "success": {
            "de": "Ja, richtig: Pferd.",
            "en": "Yes, that is the horse."
          },
          "hint": {
            "de": "Suche dieses Tier: Pferd.",
            "en": "Look for the picture of the horse."
          }
        },
        {
          "id": "dau5",
          "prompt": {
            "de": "Tippe auf dieses Tier: Schwein.",
            "en": "Tap this animal: pig."
          },
          "visual": "",
          "answers": [
            {
              "id": "pig",
              "label": "🐷"
            },
            {
              "id": "dolphin",
              "label": "🐬"
            }
          ],
          "correctAnswerId": "pig",
          "success": {
            "de": "Ja, richtig: Schwein.",
            "en": "Yes, that is the pig."
          },
          "hint": {
            "de": "Suche dieses Tier: Schwein.",
            "en": "Look for the picture of the pig."
          }
        },
        {
          "id": "dau6",
          "prompt": {
            "de": "Tippe auf dieses Tier: Schaf.",
            "en": "Tap this animal: sheep."
          },
          "visual": "",
          "answers": [
            {
              "id": "whale",
              "label": "🐋"
            },
            {
              "id": "sheep",
              "label": "🐑"
            }
          ],
          "correctAnswerId": "sheep",
          "success": {
            "de": "Ja, richtig: Schaf.",
            "en": "Yes, that is the sheep."
          },
          "hint": {
            "de": "Suche dieses Tier: Schaf.",
            "en": "Look for the picture of the sheep."
          }
        },
        {
          "id": "dau7",
          "prompt": {
            "de": "Tippe auf dieses Tier: Ziege.",
            "en": "Tap this animal: goat."
          },
          "visual": "",
          "answers": [
            {
              "id": "goat",
              "label": "🐐"
            },
            {
              "id": "penguin",
              "label": "🐧"
            }
          ],
          "correctAnswerId": "goat",
          "success": {
            "de": "Ja, richtig: Ziege.",
            "en": "Yes, that is the goat."
          },
          "hint": {
            "de": "Suche dieses Tier: Ziege.",
            "en": "Look for the picture of the goat."
          }
        },
        {
          "id": "dau8",
          "prompt": {
            "de": "Tippe auf dieses Tier: Huhn.",
            "en": "Tap this animal: chicken."
          },
          "visual": "",
          "answers": [
            {
              "id": "lion",
              "label": "🦁"
            },
            {
              "id": "chicken",
              "label": "🐔"
            }
          ],
          "correctAnswerId": "chicken",
          "success": {
            "de": "Ja, richtig: Huhn.",
            "en": "Yes, that is the chicken."
          },
          "hint": {
            "de": "Suche dieses Tier: Huhn.",
            "en": "Look for the picture of the chicken."
          }
        },
        {
          "id": "dau9",
          "prompt": {
            "de": "Tippe auf dieses Tier: Ente.",
            "en": "Tap this animal: duck."
          },
          "visual": "",
          "answers": [
            {
              "id": "duck",
              "label": "🦆"
            },
            {
              "id": "tiger",
              "label": "🐯"
            }
          ],
          "correctAnswerId": "duck",
          "success": {
            "de": "Ja, richtig: Ente.",
            "en": "Yes, that is the duck."
          },
          "hint": {
            "de": "Suche dieses Tier: Ente.",
            "en": "Look for the picture of the duck."
          }
        },
        {
          "id": "dau10",
          "prompt": {
            "de": "Tippe auf dieses Tier: Biene.",
            "en": "Tap this animal: bee."
          },
          "visual": "",
          "answers": [
            {
              "id": "elephant",
              "label": "🐘"
            },
            {
              "id": "bee",
              "label": "🐝"
            }
          ],
          "correctAnswerId": "bee",
          "success": {
            "de": "Ja, richtig: Biene.",
            "en": "Yes, that is the bee."
          },
          "hint": {
            "de": "Suche dieses Tier: Biene.",
            "en": "Look for the picture of the bee."
          }
        },
        {
          "id": "dau11",
          "prompt": {
            "de": "Tippe auf dieses Tier: Schmetterling.",
            "en": "Tap this animal: butterfly."
          },
          "visual": "",
          "answers": [
            {
              "id": "butterfly",
              "label": "🦋"
            },
            {
              "id": "giraffe",
              "label": "🦒"
            }
          ],
          "correctAnswerId": "butterfly",
          "success": {
            "de": "Ja, richtig: Schmetterling.",
            "en": "Yes, that is the butterfly."
          },
          "hint": {
            "de": "Suche dieses Tier: Schmetterling.",
            "en": "Look for the picture of the butterfly."
          }
        },
        {
          "id": "dau12",
          "prompt": {
            "de": "Tippe auf dieses Tier: Schnecke.",
            "en": "Tap this animal: snail."
          },
          "visual": "",
          "answers": [
            {
              "id": "zebra",
              "label": "🦓"
            },
            {
              "id": "snail",
              "label": "🐌"
            }
          ],
          "correctAnswerId": "snail",
          "success": {
            "de": "Ja, richtig: Schnecke.",
            "en": "Yes, that is the snail."
          },
          "hint": {
            "de": "Suche dieses Tier: Schnecke.",
            "en": "Look for the picture of the snail."
          }
        },
        {
          "id": "dau13",
          "prompt": {
            "de": "Tippe auf dieses Tier: Frosch.",
            "en": "Tap this animal: frog."
          },
          "visual": "",
          "answers": [
            {
              "id": "frog",
              "label": "🐸"
            },
            {
              "id": "monkey",
              "label": "🐒"
            }
          ],
          "correctAnswerId": "frog",
          "success": {
            "de": "Ja, richtig: Frosch.",
            "en": "Yes, that is the frog."
          },
          "hint": {
            "de": "Suche dieses Tier: Frosch.",
            "en": "Look for the picture of the frog."
          }
        },
        {
          "id": "dau14",
          "prompt": {
            "de": "Tippe auf dieses Tier: Schildkröte.",
            "en": "Tap this animal: turtle."
          },
          "visual": "",
          "answers": [
            {
              "id": "kangaroo",
              "label": "🦘"
            },
            {
              "id": "turtle",
              "label": "🐢"
            }
          ],
          "correctAnswerId": "turtle",
          "success": {
            "de": "Ja, richtig: Schildkröte.",
            "en": "Yes, that is the turtle."
          },
          "hint": {
            "de": "Suche dieses Tier: Schildkröte.",
            "en": "Look for the picture of the turtle."
          }
        },
        {
          "id": "dau15",
          "prompt": {
            "de": "Tippe auf dieses Tier: Fisch.",
            "en": "Tap this animal: fish."
          },
          "visual": "",
          "answers": [
            {
              "id": "fish",
              "label": "🐟"
            },
            {
              "id": "koala",
              "label": "🐨"
            }
          ],
          "correctAnswerId": "fish",
          "success": {
            "de": "Ja, richtig: Fisch.",
            "en": "Yes, that is the fish."
          },
          "hint": {
            "de": "Suche dieses Tier: Fisch.",
            "en": "Look for the picture of the fish."
          }
        },
        {
          "id": "dau16",
          "prompt": {
            "de": "Tippe auf dieses Tier: Delfin.",
            "en": "Tap this animal: dolphin."
          },
          "visual": "",
          "answers": [
            {
              "id": "owl",
              "label": "🦉"
            },
            {
              "id": "dolphin",
              "label": "🐬"
            }
          ],
          "correctAnswerId": "dolphin",
          "success": {
            "de": "Ja, richtig: Delfin.",
            "en": "Yes, that is the dolphin."
          },
          "hint": {
            "de": "Suche dieses Tier: Delfin.",
            "en": "Look for the picture of the dolphin."
          }
        },
        {
          "id": "dau17",
          "prompt": {
            "de": "Tippe auf dieses Tier: Wal.",
            "en": "Tap this animal: whale."
          },
          "visual": "",
          "answers": [
            {
              "id": "whale",
              "label": "🐋"
            },
            {
              "id": "fox",
              "label": "🦊"
            }
          ],
          "correctAnswerId": "whale",
          "success": {
            "de": "Ja, richtig: Wal.",
            "en": "Yes, that is the whale."
          },
          "hint": {
            "de": "Suche dieses Tier: Wal.",
            "en": "Look for the picture of the whale."
          }
        },
        {
          "id": "dau18",
          "prompt": {
            "de": "Tippe auf dieses Tier: Pinguin.",
            "en": "Tap this animal: penguin."
          },
          "visual": "",
          "answers": [
            {
              "id": "hedgehog",
              "label": "🦔"
            },
            {
              "id": "penguin",
              "label": "🐧"
            }
          ],
          "correctAnswerId": "penguin",
          "success": {
            "de": "Ja, richtig: Pinguin.",
            "en": "Yes, that is the penguin."
          },
          "hint": {
            "de": "Suche dieses Tier: Pinguin.",
            "en": "Look for the picture of the penguin."
          }
        },
        {
          "id": "dau19",
          "prompt": {
            "de": "Tippe auf dieses Tier: Löwe.",
            "en": "Tap this animal: lion."
          },
          "visual": "",
          "answers": [
            {
              "id": "lion",
              "label": "🦁"
            },
            {
              "id": "rabbit",
              "label": "🐰"
            }
          ],
          "correctAnswerId": "lion",
          "success": {
            "de": "Ja, richtig: Löwe.",
            "en": "Yes, that is the lion."
          },
          "hint": {
            "de": "Suche dieses Tier: Löwe.",
            "en": "Look for the picture of the lion."
          }
        },
        {
          "id": "dau20",
          "prompt": {
            "de": "Tippe auf dieses Tier: Tiger.",
            "en": "Tap this animal: tiger."
          },
          "visual": "",
          "answers": [
            {
              "id": "cat",
              "label": "🐱"
            },
            {
              "id": "tiger",
              "label": "🐯"
            }
          ],
          "correctAnswerId": "tiger",
          "success": {
            "de": "Ja, richtig: Tiger.",
            "en": "Yes, that is the tiger."
          },
          "hint": {
            "de": "Suche dieses Tier: Tiger.",
            "en": "Look for the picture of the tiger."
          }
        },
        {
          "id": "dau21",
          "prompt": {
            "de": "Tippe auf dieses Tier: Elefant.",
            "en": "Tap this animal: elephant."
          },
          "visual": "",
          "answers": [
            {
              "id": "elephant",
              "label": "🐘"
            },
            {
              "id": "dog",
              "label": "🐶"
            }
          ],
          "correctAnswerId": "elephant",
          "success": {
            "de": "Ja, richtig: Elefant.",
            "en": "Yes, that is the elephant."
          },
          "hint": {
            "de": "Suche dieses Tier: Elefant.",
            "en": "Look for the picture of the elephant."
          }
        },
        {
          "id": "dau22",
          "prompt": {
            "de": "Tippe auf dieses Tier: Giraffe.",
            "en": "Tap this animal: giraffe."
          },
          "visual": "",
          "answers": [
            {
              "id": "cow",
              "label": "🐮"
            },
            {
              "id": "giraffe",
              "label": "🦒"
            }
          ],
          "correctAnswerId": "giraffe",
          "success": {
            "de": "Ja, richtig: Giraffe.",
            "en": "Yes, that is the giraffe."
          },
          "hint": {
            "de": "Suche dieses Tier: Giraffe.",
            "en": "Look for the picture of the giraffe."
          }
        },
        {
          "id": "dau23",
          "prompt": {
            "de": "Tippe auf dieses Tier: Zebra.",
            "en": "Tap this animal: zebra."
          },
          "visual": "",
          "answers": [
            {
              "id": "zebra",
              "label": "🦓"
            },
            {
              "id": "horse",
              "label": "🐴"
            }
          ],
          "correctAnswerId": "zebra",
          "success": {
            "de": "Ja, richtig: Zebra.",
            "en": "Yes, that is the zebra."
          },
          "hint": {
            "de": "Suche dieses Tier: Zebra.",
            "en": "Look for the picture of the zebra."
          }
        },
        {
          "id": "dau24",
          "prompt": {
            "de": "Tippe auf dieses Tier: Affe.",
            "en": "Tap this animal: monkey."
          },
          "visual": "",
          "answers": [
            {
              "id": "pig",
              "label": "🐷"
            },
            {
              "id": "monkey",
              "label": "🐒"
            }
          ],
          "correctAnswerId": "monkey",
          "success": {
            "de": "Ja, richtig: Affe.",
            "en": "Yes, that is the monkey."
          },
          "hint": {
            "de": "Suche dieses Tier: Affe.",
            "en": "Look for the picture of the monkey."
          }
        },
        {
          "id": "dau25",
          "prompt": {
            "de": "Tippe auf dieses Tier: Känguru.",
            "en": "Tap this animal: kangaroo."
          },
          "visual": "",
          "answers": [
            {
              "id": "kangaroo",
              "label": "🦘"
            },
            {
              "id": "sheep",
              "label": "🐑"
            }
          ],
          "correctAnswerId": "kangaroo",
          "success": {
            "de": "Ja, richtig: Känguru.",
            "en": "Yes, that is the kangaroo."
          },
          "hint": {
            "de": "Suche dieses Tier: Känguru.",
            "en": "Look for the picture of the kangaroo."
          }
        },
        {
          "id": "dau26",
          "prompt": {
            "de": "Tippe auf dieses Tier: Koala.",
            "en": "Tap this animal: koala."
          },
          "visual": "",
          "answers": [
            {
              "id": "goat",
              "label": "🐐"
            },
            {
              "id": "koala",
              "label": "🐨"
            }
          ],
          "correctAnswerId": "koala",
          "success": {
            "de": "Ja, richtig: Koala.",
            "en": "Yes, that is the koala."
          },
          "hint": {
            "de": "Suche dieses Tier: Koala.",
            "en": "Look for the picture of the koala."
          }
        },
        {
          "id": "dau27",
          "prompt": {
            "de": "Tippe auf dieses Tier: Eule.",
            "en": "Tap this animal: owl."
          },
          "visual": "",
          "answers": [
            {
              "id": "owl",
              "label": "🦉"
            },
            {
              "id": "chicken",
              "label": "🐔"
            }
          ],
          "correctAnswerId": "owl",
          "success": {
            "de": "Ja, richtig: Eule.",
            "en": "Yes, that is the owl."
          },
          "hint": {
            "de": "Suche dieses Tier: Eule.",
            "en": "Look for the picture of the owl."
          }
        },
        {
          "id": "dau28",
          "prompt": {
            "de": "Tippe auf dieses Tier: Fuchs.",
            "en": "Tap this animal: fox."
          },
          "visual": "",
          "answers": [
            {
              "id": "duck",
              "label": "🦆"
            },
            {
              "id": "fox",
              "label": "🦊"
            }
          ],
          "correctAnswerId": "fox",
          "success": {
            "de": "Ja, richtig: Fuchs.",
            "en": "Yes, that is the fox."
          },
          "hint": {
            "de": "Suche dieses Tier: Fuchs.",
            "en": "Look for the picture of the fox."
          }
        },
        {
          "id": "dau29",
          "prompt": {
            "de": "Tippe auf dieses Tier: Igel.",
            "en": "Tap this animal: hedgehog."
          },
          "visual": "",
          "answers": [
            {
              "id": "hedgehog",
              "label": "🦔"
            },
            {
              "id": "bee",
              "label": "🐝"
            }
          ],
          "correctAnswerId": "hedgehog",
          "success": {
            "de": "Ja, richtig: Igel.",
            "en": "Yes, that is the hedgehog."
          },
          "hint": {
            "de": "Suche dieses Tier: Igel.",
            "en": "Look for the picture of the hedgehog."
          }
        },
        {
          "id": "dau30",
          "prompt": {
            "de": "Tippe auf dieses Tier: Hase.",
            "en": "Tap this animal: rabbit."
          },
          "visual": "",
          "answers": [
            {
              "id": "butterfly",
              "label": "🦋"
            },
            {
              "id": "rabbit",
              "label": "🐰"
            }
          ],
          "correctAnswerId": "rabbit",
          "success": {
            "de": "Ja, richtig: Hase.",
            "en": "Yes, that is the rabbit."
          },
          "hint": {
            "de": "Suche dieses Tier: Hase.",
            "en": "Look for the picture of the rabbit."
          }
        },
        {
          "id": "dau31",
          "prompt": {
            "de": "Navi sucht ein Tier, das Miau sagt. Welches Bild passt?",
            "en": "Navi is looking for an animal that says meow. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "snail",
              "label": "🐌"
            },
            {
              "id": "cat",
              "label": "🐱"
            }
          ],
          "correctAnswerId": "cat",
          "success": {
            "de": "Richtig! Gesucht war: Katze.",
            "en": "Correct! The answer was the cat."
          },
          "hint": {
            "de": "Denk an ein Tier, das Miau sagt.",
            "en": "Think of an animal that says meow."
          }
        },
        {
          "id": "dau32",
          "prompt": {
            "de": "Navi sucht ein Tier, das Wau sagt. Welches Bild passt?",
            "en": "Navi is looking for an animal that says woof. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "dog",
              "label": "🐶"
            },
            {
              "id": "frog",
              "label": "🐸"
            }
          ],
          "correctAnswerId": "dog",
          "success": {
            "de": "Richtig! Gesucht war: Hund.",
            "en": "Correct! The answer was the dog."
          },
          "hint": {
            "de": "Denk an ein Tier, das Wau sagt.",
            "en": "Think of an animal that says woof."
          }
        },
        {
          "id": "dau33",
          "prompt": {
            "de": "Navi sucht ein Tier, das Muh sagt. Welches Bild passt?",
            "en": "Navi is looking for an animal that says moo. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "turtle",
              "label": "🐢"
            },
            {
              "id": "cow",
              "label": "🐮"
            }
          ],
          "correctAnswerId": "cow",
          "success": {
            "de": "Richtig! Gesucht war: Kuh.",
            "en": "Correct! The answer was the cow."
          },
          "hint": {
            "de": "Denk an ein Tier, das Muh sagt.",
            "en": "Think of an animal that says moo."
          }
        },
        {
          "id": "dau34",
          "prompt": {
            "de": "Navi sucht ein Tier, das wiehert. Welches Bild passt?",
            "en": "Navi is looking for an animal that neighs. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "horse",
              "label": "🐴"
            },
            {
              "id": "fish",
              "label": "🐟"
            }
          ],
          "correctAnswerId": "horse",
          "success": {
            "de": "Richtig! Gesucht war: Pferd.",
            "en": "Correct! The answer was the horse."
          },
          "hint": {
            "de": "Denk an ein Tier, das wiehert.",
            "en": "Think of an animal that neighs."
          }
        },
        {
          "id": "dau35",
          "prompt": {
            "de": "Navi sucht ein Tier, das grunzt. Welches Bild passt?",
            "en": "Navi is looking for an animal that oinks. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "dolphin",
              "label": "🐬"
            },
            {
              "id": "pig",
              "label": "🐷"
            }
          ],
          "correctAnswerId": "pig",
          "success": {
            "de": "Richtig! Gesucht war: Schwein.",
            "en": "Correct! The answer was the pig."
          },
          "hint": {
            "de": "Denk an ein Tier, das grunzt.",
            "en": "Think of an animal that oinks."
          }
        },
        {
          "id": "dau36",
          "prompt": {
            "de": "Navi sucht ein Tier, das Mäh sagt. Welches Bild passt?",
            "en": "Navi is looking for an animal that says baa. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "sheep",
              "label": "🐑"
            },
            {
              "id": "whale",
              "label": "🐋"
            }
          ],
          "correctAnswerId": "sheep",
          "success": {
            "de": "Richtig! Gesucht war: Schaf.",
            "en": "Correct! The answer was the sheep."
          },
          "hint": {
            "de": "Denk an ein Tier, das Mäh sagt.",
            "en": "Think of an animal that says baa."
          }
        },
        {
          "id": "dau37",
          "prompt": {
            "de": "Navi sucht ein Tier, das meckert. Welches Bild passt?",
            "en": "Navi is looking for an animal that bleats. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "penguin",
              "label": "🐧"
            },
            {
              "id": "goat",
              "label": "🐐"
            }
          ],
          "correctAnswerId": "goat",
          "success": {
            "de": "Richtig! Gesucht war: Ziege.",
            "en": "Correct! The answer was the goat."
          },
          "hint": {
            "de": "Denk an ein Tier, das meckert.",
            "en": "Think of an animal that bleats."
          }
        },
        {
          "id": "dau38",
          "prompt": {
            "de": "Navi sucht ein Tier, das gackert. Welches Bild passt?",
            "en": "Navi is looking for an animal that clucks. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "chicken",
              "label": "🐔"
            },
            {
              "id": "lion",
              "label": "🦁"
            }
          ],
          "correctAnswerId": "chicken",
          "success": {
            "de": "Richtig! Gesucht war: Huhn.",
            "en": "Correct! The answer was the chicken."
          },
          "hint": {
            "de": "Denk an ein Tier, das gackert.",
            "en": "Think of an animal that clucks."
          }
        },
        {
          "id": "dau39",
          "prompt": {
            "de": "Navi sucht ein Tier, das quakt. Welches Bild passt?",
            "en": "Navi is looking for an animal that quacks. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "tiger",
              "label": "🐯"
            },
            {
              "id": "duck",
              "label": "🦆"
            }
          ],
          "correctAnswerId": "duck",
          "success": {
            "de": "Richtig! Gesucht war: Ente.",
            "en": "Correct! The answer was the duck."
          },
          "hint": {
            "de": "Denk an ein Tier, das quakt.",
            "en": "Think of an animal that quacks."
          }
        },
        {
          "id": "dau40",
          "prompt": {
            "de": "Navi sucht ein Tier, das summt. Welches Bild passt?",
            "en": "Navi is looking for an animal that buzzes. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "bee",
              "label": "🐝"
            },
            {
              "id": "elephant",
              "label": "🐘"
            }
          ],
          "correctAnswerId": "bee",
          "success": {
            "de": "Richtig! Gesucht war: Biene.",
            "en": "Correct! The answer was the bee."
          },
          "hint": {
            "de": "Denk an ein Tier, das summt.",
            "en": "Think of an animal that buzzes."
          }
        },
        {
          "id": "dau41",
          "prompt": {
            "de": "Navi sucht ein Tier, das von Blume zu Blume fliegt. Welches Bild passt?",
            "en": "Navi is looking for an animal that flies from flower to flower. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "giraffe",
              "label": "🦒"
            },
            {
              "id": "butterfly",
              "label": "🦋"
            }
          ],
          "correctAnswerId": "butterfly",
          "success": {
            "de": "Richtig! Gesucht war: Schmetterling.",
            "en": "Correct! The answer was the butterfly."
          },
          "hint": {
            "de": "Denk an ein Tier, das von Blume zu Blume fliegt.",
            "en": "Think of an animal that flies from flower to flower."
          }
        },
        {
          "id": "dau42",
          "prompt": {
            "de": "Navi sucht ein Tier, das ganz langsam kriecht. Welches Bild passt?",
            "en": "Navi is looking for an animal that crawls very slowly. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "snail",
              "label": "🐌"
            },
            {
              "id": "zebra",
              "label": "🦓"
            }
          ],
          "correctAnswerId": "snail",
          "success": {
            "de": "Richtig! Gesucht war: Schnecke.",
            "en": "Correct! The answer was the snail."
          },
          "hint": {
            "de": "Denk an ein Tier, das ganz langsam kriecht.",
            "en": "Think of an animal that crawls very slowly."
          }
        },
        {
          "id": "dau43",
          "prompt": {
            "de": "Navi sucht ein Tier, das quakt und hüpft. Welches Bild passt?",
            "en": "Navi is looking for an animal that croaks and hops. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "monkey",
              "label": "🐒"
            },
            {
              "id": "frog",
              "label": "🐸"
            }
          ],
          "correctAnswerId": "frog",
          "success": {
            "de": "Richtig! Gesucht war: Frosch.",
            "en": "Correct! The answer was the frog."
          },
          "hint": {
            "de": "Denk an ein Tier, das quakt und hüpft.",
            "en": "Think of an animal that croaks and hops."
          }
        },
        {
          "id": "dau44",
          "prompt": {
            "de": "Navi sucht ein Tier, das langsam läuft. Welches Bild passt?",
            "en": "Navi is looking for an animal that walks slowly. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "turtle",
              "label": "🐢"
            },
            {
              "id": "kangaroo",
              "label": "🦘"
            }
          ],
          "correctAnswerId": "turtle",
          "success": {
            "de": "Richtig! Gesucht war: Schildkröte.",
            "en": "Correct! The answer was the turtle."
          },
          "hint": {
            "de": "Denk an ein Tier, das langsam läuft.",
            "en": "Think of an animal that walks slowly."
          }
        },
        {
          "id": "dau45",
          "prompt": {
            "de": "Navi sucht ein Tier, das im Wasser schwimmt. Welches Bild passt?",
            "en": "Navi is looking for an animal that swims in water. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "koala",
              "label": "🐨"
            },
            {
              "id": "fish",
              "label": "🐟"
            }
          ],
          "correctAnswerId": "fish",
          "success": {
            "de": "Richtig! Gesucht war: Fisch.",
            "en": "Correct! The answer was the fish."
          },
          "hint": {
            "de": "Denk an ein Tier, das im Wasser schwimmt.",
            "en": "Think of an animal that swims in water."
          }
        },
        {
          "id": "dau46",
          "prompt": {
            "de": "Navi sucht ein Tier, das aus dem Meer springt. Welches Bild passt?",
            "en": "Navi is looking for an animal that jumps out of the sea. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "dolphin",
              "label": "🐬"
            },
            {
              "id": "owl",
              "label": "🦉"
            }
          ],
          "correctAnswerId": "dolphin",
          "success": {
            "de": "Richtig! Gesucht war: Delfin.",
            "en": "Correct! The answer was the dolphin."
          },
          "hint": {
            "de": "Denk an ein Tier, das aus dem Meer springt.",
            "en": "Think of an animal that jumps out of the sea."
          }
        },
        {
          "id": "dau47",
          "prompt": {
            "de": "Navi sucht ein Tier, das tief im Meer singt. Welches Bild passt?",
            "en": "Navi is looking for an animal that sings deep in the sea. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "fox",
              "label": "🦊"
            },
            {
              "id": "whale",
              "label": "🐋"
            }
          ],
          "correctAnswerId": "whale",
          "success": {
            "de": "Richtig! Gesucht war: Wal.",
            "en": "Correct! The answer was the whale."
          },
          "hint": {
            "de": "Denk an ein Tier, das tief im Meer singt.",
            "en": "Think of an animal that sings deep in the sea."
          }
        },
        {
          "id": "dau48",
          "prompt": {
            "de": "Navi sucht ein Tier, das watschelt. Welches Bild passt?",
            "en": "Navi is looking for an animal that waddles. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "penguin",
              "label": "🐧"
            },
            {
              "id": "hedgehog",
              "label": "🦔"
            }
          ],
          "correctAnswerId": "penguin",
          "success": {
            "de": "Richtig! Gesucht war: Pinguin.",
            "en": "Correct! The answer was the penguin."
          },
          "hint": {
            "de": "Denk an ein Tier, das watschelt.",
            "en": "Think of an animal that waddles."
          }
        },
        {
          "id": "dau49",
          "prompt": {
            "de": "Navi sucht ein Tier, das laut brüllt. Welches Bild passt?",
            "en": "Navi is looking for an animal that roars loudly. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "rabbit",
              "label": "🐰"
            },
            {
              "id": "lion",
              "label": "🦁"
            }
          ],
          "correctAnswerId": "lion",
          "success": {
            "de": "Richtig! Gesucht war: Löwe.",
            "en": "Correct! The answer was the lion."
          },
          "hint": {
            "de": "Denk an ein Tier, das laut brüllt.",
            "en": "Think of an animal that roars loudly."
          }
        },
        {
          "id": "dau50",
          "prompt": {
            "de": "Navi sucht ein Tier, das knurrt. Welches Bild passt?",
            "en": "Navi is looking for an animal that growls. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "tiger",
              "label": "🐯"
            },
            {
              "id": "cat",
              "label": "🐱"
            }
          ],
          "correctAnswerId": "tiger",
          "success": {
            "de": "Richtig! Gesucht war: Tiger.",
            "en": "Correct! The answer was the tiger."
          },
          "hint": {
            "de": "Denk an ein Tier, das knurrt.",
            "en": "Think of an animal that growls."
          }
        },
        {
          "id": "dau51",
          "prompt": {
            "de": "Navi sucht ein Tier, das trompetet. Welches Bild passt?",
            "en": "Navi is looking for an animal that trumpets. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "dog",
              "label": "🐶"
            },
            {
              "id": "elephant",
              "label": "🐘"
            }
          ],
          "correctAnswerId": "elephant",
          "success": {
            "de": "Richtig! Gesucht war: Elefant.",
            "en": "Correct! The answer was the elephant."
          },
          "hint": {
            "de": "Denk an ein Tier, das trompetet.",
            "en": "Think of an animal that trumpets."
          }
        },
        {
          "id": "dau52",
          "prompt": {
            "de": "Navi sucht ein Tier, das Blätter vom Baum knabbert. Welches Bild passt?",
            "en": "Navi is looking for an animal that nibbles leaves from trees. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "giraffe",
              "label": "🦒"
            },
            {
              "id": "cow",
              "label": "🐮"
            }
          ],
          "correctAnswerId": "giraffe",
          "success": {
            "de": "Richtig! Gesucht war: Giraffe.",
            "en": "Correct! The answer was the giraffe."
          },
          "hint": {
            "de": "Denk an ein Tier, das Blätter vom Baum knabbert.",
            "en": "Think of an animal that nibbles leaves from trees."
          }
        },
        {
          "id": "dau53",
          "prompt": {
            "de": "Navi sucht ein Tier, das mit seiner Herde läuft. Welches Bild passt?",
            "en": "Navi is looking for an animal that runs with its herd. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "horse",
              "label": "🐴"
            },
            {
              "id": "zebra",
              "label": "🦓"
            }
          ],
          "correctAnswerId": "zebra",
          "success": {
            "de": "Richtig! Gesucht war: Zebra.",
            "en": "Correct! The answer was the zebra."
          },
          "hint": {
            "de": "Denk an ein Tier, das mit seiner Herde läuft.",
            "en": "Think of an animal that runs with its herd."
          }
        },
        {
          "id": "dau54",
          "prompt": {
            "de": "Navi sucht ein Tier, das auf Bäume klettert. Welches Bild passt?",
            "en": "Navi is looking for an animal that climbs trees. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "monkey",
              "label": "🐒"
            },
            {
              "id": "pig",
              "label": "🐷"
            }
          ],
          "correctAnswerId": "monkey",
          "success": {
            "de": "Richtig! Gesucht war: Affe.",
            "en": "Correct! The answer was the monkey."
          },
          "hint": {
            "de": "Denk an ein Tier, das auf Bäume klettert.",
            "en": "Think of an animal that climbs trees."
          }
        },
        {
          "id": "dau55",
          "prompt": {
            "de": "Navi sucht ein Tier, das weit hüpft. Welches Bild passt?",
            "en": "Navi is looking for an animal that hops far. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "sheep",
              "label": "🐑"
            },
            {
              "id": "kangaroo",
              "label": "🦘"
            }
          ],
          "correctAnswerId": "kangaroo",
          "success": {
            "de": "Richtig! Gesucht war: Känguru.",
            "en": "Correct! The answer was the kangaroo."
          },
          "hint": {
            "de": "Denk an ein Tier, das weit hüpft.",
            "en": "Think of an animal that hops far."
          }
        },
        {
          "id": "dau56",
          "prompt": {
            "de": "Navi sucht ein Tier, das Blätter knabbert. Welches Bild passt?",
            "en": "Navi is looking for an animal that nibbles leaves. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "koala",
              "label": "🐨"
            },
            {
              "id": "goat",
              "label": "🐐"
            }
          ],
          "correctAnswerId": "koala",
          "success": {
            "de": "Richtig! Gesucht war: Koala.",
            "en": "Correct! The answer was the koala."
          },
          "hint": {
            "de": "Denk an ein Tier, das Blätter knabbert.",
            "en": "Think of an animal that nibbles leaves."
          }
        },
        {
          "id": "dau57",
          "prompt": {
            "de": "Navi sucht ein Tier, das Hu-hu ruft. Welches Bild passt?",
            "en": "Navi is looking for an animal that says hoot hoot. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "chicken",
              "label": "🐔"
            },
            {
              "id": "owl",
              "label": "🦉"
            }
          ],
          "correctAnswerId": "owl",
          "success": {
            "de": "Richtig! Gesucht war: Eule.",
            "en": "Correct! The answer was the owl."
          },
          "hint": {
            "de": "Denk an ein Tier, das Hu-hu ruft.",
            "en": "Think of an animal that says hoot hoot."
          }
        },
        {
          "id": "dau58",
          "prompt": {
            "de": "Navi sucht ein Tier, das leise durch den Wald schleicht. Welches Bild passt?",
            "en": "Navi is looking for an animal that sneaks quietly through the woods. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "fox",
              "label": "🦊"
            },
            {
              "id": "duck",
              "label": "🦆"
            }
          ],
          "correctAnswerId": "fox",
          "success": {
            "de": "Richtig! Gesucht war: Fuchs.",
            "en": "Correct! The answer was the fox."
          },
          "hint": {
            "de": "Denk an ein Tier, das leise durch den Wald schleicht.",
            "en": "Think of an animal that sneaks quietly through the woods."
          }
        },
        {
          "id": "dau59",
          "prompt": {
            "de": "Navi sucht ein Tier, das sich zu einer Kugel rollt. Welches Bild passt?",
            "en": "Navi is looking for an animal that rolls into a ball. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "bee",
              "label": "🐝"
            },
            {
              "id": "hedgehog",
              "label": "🦔"
            }
          ],
          "correctAnswerId": "hedgehog",
          "success": {
            "de": "Richtig! Gesucht war: Igel.",
            "en": "Correct! The answer was the hedgehog."
          },
          "hint": {
            "de": "Denk an ein Tier, das sich zu einer Kugel rollt.",
            "en": "Think of an animal that rolls into a ball."
          }
        },
        {
          "id": "dau60",
          "prompt": {
            "de": "Navi sucht ein Tier, das hoppelt. Welches Bild passt?",
            "en": "Navi is looking for an animal that hops. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "rabbit",
              "label": "🐰"
            },
            {
              "id": "butterfly",
              "label": "🦋"
            }
          ],
          "correctAnswerId": "rabbit",
          "success": {
            "de": "Richtig! Gesucht war: Hase.",
            "en": "Correct! The answer was the rabbit."
          },
          "hint": {
            "de": "Denk an ein Tier, das hoppelt.",
            "en": "Think of an animal that hops."
          }
        },
        {
          "id": "dau61",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das Schnurrhaare hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has whiskers. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cat",
              "label": "🐱"
            },
            {
              "id": "snail",
              "label": "🐌"
            }
          ],
          "correctAnswerId": "cat",
          "success": {
            "de": "Super! Gesucht war: Katze.",
            "en": "Great! The answer was the cat."
          },
          "hint": {
            "de": "Denk an ein Tier, das Schnurrhaare hat.",
            "en": "Think of an animal that has whiskers."
          }
        },
        {
          "id": "dau62",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das mit dem Schwanz wedelt. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that wags its tail. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "frog",
              "label": "🐸"
            },
            {
              "id": "dog",
              "label": "🐶"
            }
          ],
          "correctAnswerId": "dog",
          "success": {
            "de": "Super! Gesucht war: Hund.",
            "en": "Great! The answer was the dog."
          },
          "hint": {
            "de": "Denk an ein Tier, das mit dem Schwanz wedelt.",
            "en": "Think of an animal that wags its tail."
          }
        },
        {
          "id": "dau63",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das Milch gibt. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that gives milk. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cow",
              "label": "🐮"
            },
            {
              "id": "turtle",
              "label": "🐢"
            }
          ],
          "correctAnswerId": "cow",
          "success": {
            "de": "Super! Gesucht war: Kuh.",
            "en": "Great! The answer was the cow."
          },
          "hint": {
            "de": "Denk an ein Tier, das Milch gibt.",
            "en": "Think of an animal that gives milk."
          }
        },
        {
          "id": "dau64",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das schnell galoppieren kann. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that can gallop fast. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "fish",
              "label": "🐟"
            },
            {
              "id": "horse",
              "label": "🐴"
            }
          ],
          "correctAnswerId": "horse",
          "success": {
            "de": "Super! Gesucht war: Pferd.",
            "en": "Great! The answer was the horse."
          },
          "hint": {
            "de": "Denk an ein Tier, das schnell galoppieren kann.",
            "en": "Think of an animal that can gallop fast."
          }
        },
        {
          "id": "dau65",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das eine runde Schnauze hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has a round snout. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "pig",
              "label": "🐷"
            },
            {
              "id": "dolphin",
              "label": "🐬"
            }
          ],
          "correctAnswerId": "pig",
          "success": {
            "de": "Super! Gesucht war: Schwein.",
            "en": "Great! The answer was the pig."
          },
          "hint": {
            "de": "Denk an ein Tier, das eine runde Schnauze hat.",
            "en": "Think of an animal that has a round snout."
          }
        },
        {
          "id": "dau66",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das weiche Wolle hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has soft wool. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "whale",
              "label": "🐋"
            },
            {
              "id": "sheep",
              "label": "🐑"
            }
          ],
          "correctAnswerId": "sheep",
          "success": {
            "de": "Super! Gesucht war: Schaf.",
            "en": "Great! The answer was the sheep."
          },
          "hint": {
            "de": "Denk an ein Tier, das weiche Wolle hat.",
            "en": "Think of an animal that has soft wool."
          }
        },
        {
          "id": "dau67",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das Hörner hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has horns. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "goat",
              "label": "🐐"
            },
            {
              "id": "penguin",
              "label": "🐧"
            }
          ],
          "correctAnswerId": "goat",
          "success": {
            "de": "Super! Gesucht war: Ziege.",
            "en": "Great! The answer was the goat."
          },
          "hint": {
            "de": "Denk an ein Tier, das Hörner hat.",
            "en": "Think of an animal that has horns."
          }
        },
        {
          "id": "dau68",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das Eier legt. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that lays eggs. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "lion",
              "label": "🦁"
            },
            {
              "id": "chicken",
              "label": "🐔"
            }
          ],
          "correctAnswerId": "chicken",
          "success": {
            "de": "Super! Gesucht war: Huhn.",
            "en": "Great! The answer was the chicken."
          },
          "hint": {
            "de": "Denk an ein Tier, das Eier legt.",
            "en": "Think of an animal that lays eggs."
          }
        },
        {
          "id": "dau69",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das auf dem Teich schwimmt. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that swims on a pond. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "duck",
              "label": "🦆"
            },
            {
              "id": "tiger",
              "label": "🐯"
            }
          ],
          "correctAnswerId": "duck",
          "success": {
            "de": "Super! Gesucht war: Ente.",
            "en": "Great! The answer was the duck."
          },
          "hint": {
            "de": "Denk an ein Tier, das auf dem Teich schwimmt.",
            "en": "Think of an animal that swims on a pond."
          }
        },
        {
          "id": "dau70",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das Honig macht. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that makes honey. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "elephant",
              "label": "🐘"
            },
            {
              "id": "bee",
              "label": "🐝"
            }
          ],
          "correctAnswerId": "bee",
          "success": {
            "de": "Super! Gesucht war: Biene.",
            "en": "Great! The answer was the bee."
          },
          "hint": {
            "de": "Denk an ein Tier, das Honig macht.",
            "en": "Think of an animal that makes honey."
          }
        },
        {
          "id": "dau71",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das bunte Flügel hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has colorful wings. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "butterfly",
              "label": "🦋"
            },
            {
              "id": "giraffe",
              "label": "🦒"
            }
          ],
          "correctAnswerId": "butterfly",
          "success": {
            "de": "Super! Gesucht war: Schmetterling.",
            "en": "Great! The answer was the butterfly."
          },
          "hint": {
            "de": "Denk an ein Tier, das bunte Flügel hat.",
            "en": "Think of an animal that has colorful wings."
          }
        },
        {
          "id": "dau72",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das ihr Haus auf dem Rücken trägt. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that carries its shell on its back. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "zebra",
              "label": "🦓"
            },
            {
              "id": "snail",
              "label": "🐌"
            }
          ],
          "correctAnswerId": "snail",
          "success": {
            "de": "Super! Gesucht war: Schnecke.",
            "en": "Great! The answer was the snail."
          },
          "hint": {
            "de": "Denk an ein Tier, das ihr Haus auf dem Rücken trägt.",
            "en": "Think of an animal that carries its shell on its back."
          }
        },
        {
          "id": "dau73",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das weit hüpfen kann. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that can hop far. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "frog",
              "label": "🐸"
            },
            {
              "id": "monkey",
              "label": "🐒"
            }
          ],
          "correctAnswerId": "frog",
          "success": {
            "de": "Super! Gesucht war: Frosch.",
            "en": "Great! The answer was the frog."
          },
          "hint": {
            "de": "Denk an ein Tier, das weit hüpfen kann.",
            "en": "Think of an animal that can hop far."
          }
        },
        {
          "id": "dau74",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das einen harten Panzer hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has a hard shell. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "kangaroo",
              "label": "🦘"
            },
            {
              "id": "turtle",
              "label": "🐢"
            }
          ],
          "correctAnswerId": "turtle",
          "success": {
            "de": "Super! Gesucht war: Schildkröte.",
            "en": "Great! The answer was the turtle."
          },
          "hint": {
            "de": "Denk an ein Tier, das einen harten Panzer hat.",
            "en": "Think of an animal that has a hard shell."
          }
        },
        {
          "id": "dau75",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das Flossen hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has fins. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "fish",
              "label": "🐟"
            },
            {
              "id": "koala",
              "label": "🐨"
            }
          ],
          "correctAnswerId": "fish",
          "success": {
            "de": "Super! Gesucht war: Fisch.",
            "en": "Great! The answer was the fish."
          },
          "hint": {
            "de": "Denk an ein Tier, das Flossen hat.",
            "en": "Think of an animal that has fins."
          }
        },
        {
          "id": "dau76",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das gern zusammen schwimmt. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that likes to swim with others. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "owl",
              "label": "🦉"
            },
            {
              "id": "dolphin",
              "label": "🐬"
            }
          ],
          "correctAnswerId": "dolphin",
          "success": {
            "de": "Super! Gesucht war: Delfin.",
            "en": "Great! The answer was the dolphin."
          },
          "hint": {
            "de": "Denk an ein Tier, das gern zusammen schwimmt.",
            "en": "Think of an animal that likes to swim with others."
          }
        },
        {
          "id": "dau77",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das sehr groß ist. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that is very large. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "whale",
              "label": "🐋"
            },
            {
              "id": "fox",
              "label": "🦊"
            }
          ],
          "correctAnswerId": "whale",
          "success": {
            "de": "Super! Gesucht war: Wal.",
            "en": "Great! The answer was the whale."
          },
          "hint": {
            "de": "Denk an ein Tier, das sehr groß ist.",
            "en": "Think of an animal that is very large."
          }
        },
        {
          "id": "dau78",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das schwarz-weiße Federn hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has black and white feathers. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "hedgehog",
              "label": "🦔"
            },
            {
              "id": "penguin",
              "label": "🐧"
            }
          ],
          "correctAnswerId": "penguin",
          "success": {
            "de": "Super! Gesucht war: Pinguin.",
            "en": "Great! The answer was the penguin."
          },
          "hint": {
            "de": "Denk an ein Tier, das schwarz-weiße Federn hat.",
            "en": "Think of an animal that has black and white feathers."
          }
        },
        {
          "id": "dau79",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das eine große Mähne hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has a large mane. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "lion",
              "label": "🦁"
            },
            {
              "id": "rabbit",
              "label": "🐰"
            }
          ],
          "correctAnswerId": "lion",
          "success": {
            "de": "Super! Gesucht war: Löwe.",
            "en": "Great! The answer was the lion."
          },
          "hint": {
            "de": "Denk an ein Tier, das eine große Mähne hat.",
            "en": "Think of an animal that has a large mane."
          }
        },
        {
          "id": "dau80",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das schwarze Streifen hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has black stripes. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cat",
              "label": "🐱"
            },
            {
              "id": "tiger",
              "label": "🐯"
            }
          ],
          "correctAnswerId": "tiger",
          "success": {
            "de": "Super! Gesucht war: Tiger.",
            "en": "Great! The answer was the tiger."
          },
          "hint": {
            "de": "Denk an ein Tier, das schwarze Streifen hat.",
            "en": "Think of an animal that has black stripes."
          }
        },
        {
          "id": "dau81",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das einen langen Rüssel hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has a long trunk. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "elephant",
              "label": "🐘"
            },
            {
              "id": "dog",
              "label": "🐶"
            }
          ],
          "correctAnswerId": "elephant",
          "success": {
            "de": "Super! Gesucht war: Elefant.",
            "en": "Great! The answer was the elephant."
          },
          "hint": {
            "de": "Denk an ein Tier, das einen langen Rüssel hat.",
            "en": "Think of an animal that has a long trunk."
          }
        },
        {
          "id": "dau82",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das einen langen Hals hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has a long neck. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cow",
              "label": "🐮"
            },
            {
              "id": "giraffe",
              "label": "🦒"
            }
          ],
          "correctAnswerId": "giraffe",
          "success": {
            "de": "Super! Gesucht war: Giraffe.",
            "en": "Great! The answer was the giraffe."
          },
          "hint": {
            "de": "Denk an ein Tier, das einen langen Hals hat.",
            "en": "Think of an animal that has a long neck."
          }
        },
        {
          "id": "dau83",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das schwarz-weiße Streifen hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has black and white stripes. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "zebra",
              "label": "🦓"
            },
            {
              "id": "horse",
              "label": "🐴"
            }
          ],
          "correctAnswerId": "zebra",
          "success": {
            "de": "Super! Gesucht war: Zebra.",
            "en": "Great! The answer was the zebra."
          },
          "hint": {
            "de": "Denk an ein Tier, das schwarz-weiße Streifen hat.",
            "en": "Think of an animal that has black and white stripes."
          }
        },
        {
          "id": "dau84",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das mit den Händen greift. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that grabs things with its hands. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "pig",
              "label": "🐷"
            },
            {
              "id": "monkey",
              "label": "🐒"
            }
          ],
          "correctAnswerId": "monkey",
          "success": {
            "de": "Super! Gesucht war: Affe.",
            "en": "Great! The answer was the monkey."
          },
          "hint": {
            "de": "Denk an ein Tier, das mit den Händen greift.",
            "en": "Think of an animal that grabs things with its hands."
          }
        },
        {
          "id": "dau85",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das sein Baby im Beutel trägt. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that carries its baby in a pouch. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "kangaroo",
              "label": "🦘"
            },
            {
              "id": "sheep",
              "label": "🐑"
            }
          ],
          "correctAnswerId": "kangaroo",
          "success": {
            "de": "Super! Gesucht war: Känguru.",
            "en": "Great! The answer was the kangaroo."
          },
          "hint": {
            "de": "Denk an ein Tier, das sein Baby im Beutel trägt.",
            "en": "Think of an animal that carries its baby in a pouch."
          }
        },
        {
          "id": "dau86",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das runde, flauschige Ohren hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has round fluffy ears. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "goat",
              "label": "🐐"
            },
            {
              "id": "koala",
              "label": "🐨"
            }
          ],
          "correctAnswerId": "koala",
          "success": {
            "de": "Super! Gesucht war: Koala.",
            "en": "Great! The answer was the koala."
          },
          "hint": {
            "de": "Denk an ein Tier, das runde, flauschige Ohren hat.",
            "en": "Think of an animal that has round fluffy ears."
          }
        },
        {
          "id": "dau87",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das nachts wach ist. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that is awake at night. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "owl",
              "label": "🦉"
            },
            {
              "id": "chicken",
              "label": "🐔"
            }
          ],
          "correctAnswerId": "owl",
          "success": {
            "de": "Super! Gesucht war: Eule.",
            "en": "Great! The answer was the owl."
          },
          "hint": {
            "de": "Denk an ein Tier, das nachts wach ist.",
            "en": "Think of an animal that is awake at night."
          }
        },
        {
          "id": "dau88",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das einen buschigen Schwanz hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has a bushy tail. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "duck",
              "label": "🦆"
            },
            {
              "id": "fox",
              "label": "🦊"
            }
          ],
          "correctAnswerId": "fox",
          "success": {
            "de": "Super! Gesucht war: Fuchs.",
            "en": "Great! The answer was the fox."
          },
          "hint": {
            "de": "Denk an ein Tier, das einen buschigen Schwanz hat.",
            "en": "Think of an animal that has a bushy tail."
          }
        },
        {
          "id": "dau89",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das viele Stacheln hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has lots of spines. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "hedgehog",
              "label": "🦔"
            },
            {
              "id": "bee",
              "label": "🐝"
            }
          ],
          "correctAnswerId": "hedgehog",
          "success": {
            "de": "Super! Gesucht war: Igel.",
            "en": "Great! The answer was the hedgehog."
          },
          "hint": {
            "de": "Denk an ein Tier, das viele Stacheln hat.",
            "en": "Think of an animal that has lots of spines."
          }
        },
        {
          "id": "dau90",
          "prompt": {
            "de": "Navi gibt einen Tipp: Es ist ein Tier, das lange Ohren hat. Welches Bild passt?",
            "en": "Navi gives a clue: It is an animal that has long ears. Which picture matches?"
          },
          "visual": "",
          "answers": [
            {
              "id": "butterfly",
              "label": "🦋"
            },
            {
              "id": "rabbit",
              "label": "🐰"
            }
          ],
          "correctAnswerId": "rabbit",
          "success": {
            "de": "Super! Gesucht war: Hase.",
            "en": "Great! The answer was the rabbit."
          },
          "hint": {
            "de": "Denk an ein Tier, das lange Ohren hat.",
            "en": "Think of an animal that has long ears."
          }
        }
      ],
      "adventurer": [
        {
          "id": "au1",
          "prompt": {
            "de": "Welches Tier schnurrt und Miau sagt?",
            "en": "Which animal purrs and says meow?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cat",
              "label": "🐱"
            },
            {
              "id": "ant",
              "label": "🐜"
            },
            {
              "id": "lion",
              "label": "🦁"
            }
          ],
          "correctAnswerId": "cat",
          "success": {
            "de": "Super! Gesucht war: Katze.",
            "en": "Great! The answer is cat."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es schnurrt und Miau sagt.",
            "en": "Remember this clue: It purrs and says meow."
          }
        },
        {
          "id": "au2",
          "prompt": {
            "de": "Welches Tier bellt und mit dem Schwanz wedelt?",
            "en": "Which animal barks and wags its tail?"
          },
          "visual": "",
          "answers": [
            {
              "id": "snail",
              "label": "🐌"
            },
            {
              "id": "tiger",
              "label": "🐯"
            },
            {
              "id": "dog",
              "label": "🐶"
            }
          ],
          "correctAnswerId": "dog",
          "success": {
            "de": "Super! Gesucht war: Hund.",
            "en": "Great! The answer is dog."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es bellt und mit dem Schwanz wedelt.",
            "en": "Remember this clue: It barks and wags its tail."
          }
        },
        {
          "id": "au3",
          "prompt": {
            "de": "Welches Tier Milch gibt und Muh sagt?",
            "en": "Which animal gives milk and says moo?"
          },
          "visual": "",
          "answers": [
            {
              "id": "elephant",
              "label": "🐘"
            },
            {
              "id": "cow",
              "label": "🐮"
            },
            {
              "id": "frog",
              "label": "🐸"
            }
          ],
          "correctAnswerId": "cow",
          "success": {
            "de": "Super! Gesucht war: Kuh.",
            "en": "Great! The answer is cow."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es Milch gibt und Muh sagt.",
            "en": "Remember this clue: It gives milk and says moo."
          }
        },
        {
          "id": "au4",
          "prompt": {
            "de": "Welches Tier galoppiert und Reiter tragen kann?",
            "en": "Which animal gallops and can carry riders?"
          },
          "visual": "",
          "answers": [
            {
              "id": "horse",
              "label": "🐴"
            },
            {
              "id": "turtle",
              "label": "🐢"
            },
            {
              "id": "giraffe",
              "label": "🦒"
            }
          ],
          "correctAnswerId": "horse",
          "success": {
            "de": "Super! Gesucht war: Pferd.",
            "en": "Great! The answer is horse."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es galoppiert und Reiter tragen kann.",
            "en": "Remember this clue: It gallops and can carry riders."
          }
        },
        {
          "id": "au5",
          "prompt": {
            "de": "Welches Tier eine runde Schnauze hat?",
            "en": "Which animal has a round snout?"
          },
          "visual": "",
          "answers": [
            {
              "id": "fish",
              "label": "🐟"
            },
            {
              "id": "zebra",
              "label": "🦓"
            },
            {
              "id": "pig",
              "label": "🐷"
            }
          ],
          "correctAnswerId": "pig",
          "success": {
            "de": "Super! Gesucht war: Schwein.",
            "en": "Great! The answer is pig."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es eine runde Schnauze hat.",
            "en": "Remember this clue: It has a round snout."
          }
        },
        {
          "id": "au6",
          "prompt": {
            "de": "Welches Tier weiche Wolle trägt?",
            "en": "Which animal wears soft wool?"
          },
          "visual": "",
          "answers": [
            {
              "id": "monkey",
              "label": "🐒"
            },
            {
              "id": "sheep",
              "label": "🐑"
            },
            {
              "id": "dolphin",
              "label": "🐬"
            }
          ],
          "correctAnswerId": "sheep",
          "success": {
            "de": "Super! Gesucht war: Schaf.",
            "en": "Great! The answer is sheep."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es weiche Wolle trägt.",
            "en": "Remember this clue: It wears soft wool."
          }
        },
        {
          "id": "au7",
          "prompt": {
            "de": "Welches Tier Hörner hat und gut klettert?",
            "en": "Which animal has horns and climbs well?"
          },
          "visual": "",
          "answers": [
            {
              "id": "goat",
              "label": "🐐"
            },
            {
              "id": "whale",
              "label": "🐋"
            },
            {
              "id": "kangaroo",
              "label": "🦘"
            }
          ],
          "correctAnswerId": "goat",
          "success": {
            "de": "Super! Gesucht war: Ziege.",
            "en": "Great! The answer is goat."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es Hörner hat und gut klettert.",
            "en": "Remember this clue: It has horns and climbs well."
          }
        },
        {
          "id": "au8",
          "prompt": {
            "de": "Welches Tier Eier legt und gackert?",
            "en": "Which animal lays eggs and clucks?"
          },
          "visual": "",
          "answers": [
            {
              "id": "shark",
              "label": "🦈"
            },
            {
              "id": "koala",
              "label": "🐨"
            },
            {
              "id": "chicken",
              "label": "🐔"
            }
          ],
          "correctAnswerId": "chicken",
          "success": {
            "de": "Super! Gesucht war: Huhn.",
            "en": "Great! The answer is chicken."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es Eier legt und gackert.",
            "en": "Remember this clue: It lays eggs and clucks."
          }
        },
        {
          "id": "au9",
          "prompt": {
            "de": "Welches Tier quakt und Watschelfüße hat?",
            "en": "Which animal quacks and has webbed feet?"
          },
          "visual": "",
          "answers": [
            {
              "id": "camel",
              "label": "🐫"
            },
            {
              "id": "duck",
              "label": "🦆"
            },
            {
              "id": "octopus",
              "label": "🐙"
            }
          ],
          "correctAnswerId": "duck",
          "success": {
            "de": "Super! Gesucht war: Ente.",
            "en": "Great! The answer is duck."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es quakt und Watschelfüße hat.",
            "en": "Remember this clue: It quacks and has webbed feet."
          }
        },
        {
          "id": "au10",
          "prompt": {
            "de": "Welches Tier summt und Honig macht?",
            "en": "Which animal buzzes and makes honey?"
          },
          "visual": "",
          "answers": [
            {
              "id": "bee",
              "label": "🐝"
            },
            {
              "id": "crab",
              "label": "🦀"
            },
            {
              "id": "owl",
              "label": "🦉"
            }
          ],
          "correctAnswerId": "bee",
          "success": {
            "de": "Super! Gesucht war: Biene.",
            "en": "Great! The answer is bee."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es summt und Honig macht.",
            "en": "Remember this clue: It buzzes and makes honey."
          }
        },
        {
          "id": "au11",
          "prompt": {
            "de": "Welches Tier bunte Flügel hat?",
            "en": "Which animal has colorful wings?"
          },
          "visual": "",
          "answers": [
            {
              "id": "penguin",
              "label": "🐧"
            },
            {
              "id": "bat",
              "label": "🦇"
            },
            {
              "id": "butterfly",
              "label": "🦋"
            }
          ],
          "correctAnswerId": "butterfly",
          "success": {
            "de": "Super! Gesucht war: Schmetterling.",
            "en": "Great! The answer is butterfly."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es bunte Flügel hat.",
            "en": "Remember this clue: It has colorful wings."
          }
        },
        {
          "id": "au12",
          "prompt": {
            "de": "Welches Tier viel mehr als ihr Gewicht tragen kann?",
            "en": "Which animal can carry much more than its weight?"
          },
          "visual": "",
          "answers": [
            {
              "id": "fox",
              "label": "🦊"
            },
            {
              "id": "ant",
              "label": "🐜"
            },
            {
              "id": "polar-bear",
              "label": "🐻‍❄️"
            }
          ],
          "correctAnswerId": "ant",
          "success": {
            "de": "Super! Gesucht war: Ameise.",
            "en": "Great! The answer is ant."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es viel mehr als ihr Gewicht tragen kann.",
            "en": "Remember this clue: It can carry much more than its weight."
          }
        },
        {
          "id": "au13",
          "prompt": {
            "de": "Welches Tier ein Haus auf dem Rücken trägt?",
            "en": "Which animal carries a house on its back?"
          },
          "visual": "",
          "answers": [
            {
              "id": "snail",
              "label": "🐌"
            },
            {
              "id": "lion",
              "label": "🦁"
            },
            {
              "id": "hedgehog",
              "label": "🦔"
            }
          ],
          "correctAnswerId": "snail",
          "success": {
            "de": "Super! Gesucht war: Schnecke.",
            "en": "Great! The answer is snail."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es ein Haus auf dem Rücken trägt.",
            "en": "Remember this clue: It carries a house on its back."
          }
        },
        {
          "id": "au14",
          "prompt": {
            "de": "Welches Tier weit springt und quakt?",
            "en": "Which animal jumps far and croaks?"
          },
          "visual": "",
          "answers": [
            {
              "id": "tiger",
              "label": "🐯"
            },
            {
              "id": "parrot",
              "label": "🦜"
            },
            {
              "id": "frog",
              "label": "🐸"
            }
          ],
          "correctAnswerId": "frog",
          "success": {
            "de": "Super! Gesucht war: Frosch.",
            "en": "Great! The answer is frog."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es weit springt und quakt.",
            "en": "Remember this clue: It jumps far and croaks."
          }
        },
        {
          "id": "au15",
          "prompt": {
            "de": "Welches Tier einen harten Panzer hat?",
            "en": "Which animal has a hard shell?"
          },
          "visual": "",
          "answers": [
            {
              "id": "peacock",
              "label": "🦚"
            },
            {
              "id": "turtle",
              "label": "🐢"
            },
            {
              "id": "elephant",
              "label": "🐘"
            }
          ],
          "correctAnswerId": "turtle",
          "success": {
            "de": "Super! Gesucht war: Schildkröte.",
            "en": "Great! The answer is turtle."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es einen harten Panzer hat.",
            "en": "Remember this clue: It has a hard shell."
          }
        },
        {
          "id": "au16",
          "prompt": {
            "de": "Welches Tier mit Kiemen unter Wasser atmet?",
            "en": "Which animal breathes underwater with gills?"
          },
          "visual": "",
          "answers": [
            {
              "id": "fish",
              "label": "🐟"
            },
            {
              "id": "giraffe",
              "label": "🦒"
            },
            {
              "id": "flamingo",
              "label": "🦩"
            }
          ],
          "correctAnswerId": "fish",
          "success": {
            "de": "Super! Gesucht war: Fisch.",
            "en": "Great! The answer is fish."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es mit Kiemen unter Wasser atmet.",
            "en": "Remember this clue: It breathes underwater with gills."
          }
        },
        {
          "id": "au17",
          "prompt": {
            "de": "Welches Tier sehr klug ist und aus dem Meer springt?",
            "en": "Which animal is very clever and leaps from the sea?"
          },
          "visual": "",
          "answers": [
            {
              "id": "zebra",
              "label": "🦓"
            },
            {
              "id": "crocodile",
              "label": "🐊"
            },
            {
              "id": "dolphin",
              "label": "🐬"
            }
          ],
          "correctAnswerId": "dolphin",
          "success": {
            "de": "Super! Gesucht war: Delfin.",
            "en": "Great! The answer is dolphin."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es sehr klug ist und aus dem Meer springt.",
            "en": "Remember this clue: It is very clever and leaps from the sea."
          }
        },
        {
          "id": "au18",
          "prompt": {
            "de": "Welches Tier das größte Tier der Erde ist?",
            "en": "Which animal is the largest animal on Earth?"
          },
          "visual": "",
          "answers": [
            {
              "id": "snake",
              "label": "🐍"
            },
            {
              "id": "whale",
              "label": "🐋"
            },
            {
              "id": "monkey",
              "label": "🐒"
            }
          ],
          "correctAnswerId": "whale",
          "success": {
            "de": "Super! Gesucht war: Wal.",
            "en": "Great! The answer is whale."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es das größte Tier der Erde ist.",
            "en": "Remember this clue: It is the largest animal on Earth."
          }
        },
        {
          "id": "au19",
          "prompt": {
            "de": "Welches Tier mehrere Reihen scharfer Zähne hat?",
            "en": "Which animal has several rows of sharp teeth?"
          },
          "visual": "",
          "answers": [
            {
              "id": "shark",
              "label": "🦈"
            },
            {
              "id": "kangaroo",
              "label": "🦘"
            },
            {
              "id": "spider",
              "label": "🕷️"
            }
          ],
          "correctAnswerId": "shark",
          "success": {
            "de": "Super! Gesucht war: Hai.",
            "en": "Great! The answer is shark."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es mehrere Reihen scharfer Zähne hat.",
            "en": "Remember this clue: It has several rows of sharp teeth."
          }
        },
        {
          "id": "au20",
          "prompt": {
            "de": "Welches Tier acht Arme besitzt?",
            "en": "Which animal has eight arms?"
          },
          "visual": "",
          "answers": [
            {
              "id": "koala",
              "label": "🐨"
            },
            {
              "id": "squirrel",
              "label": "🐿️"
            },
            {
              "id": "octopus",
              "label": "🐙"
            }
          ],
          "correctAnswerId": "octopus",
          "success": {
            "de": "Super! Gesucht war: Oktopus.",
            "en": "Great! The answer is octopus."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es acht Arme besitzt.",
            "en": "Remember this clue: It has eight arms."
          }
        },
        {
          "id": "au21",
          "prompt": {
            "de": "Welches Tier seitwärts läuft und Scheren hat?",
            "en": "Which animal walks sideways and has claws?"
          },
          "visual": "",
          "answers": [
            {
              "id": "deer",
              "label": "🦌"
            },
            {
              "id": "crab",
              "label": "🦀"
            },
            {
              "id": "camel",
              "label": "🐫"
            }
          ],
          "correctAnswerId": "crab",
          "success": {
            "de": "Super! Gesucht war: Krabbe.",
            "en": "Great! The answer is crab."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es seitwärts läuft und Scheren hat.",
            "en": "Remember this clue: It walks sideways and has claws."
          }
        },
        {
          "id": "au22",
          "prompt": {
            "de": "Welches Tier watschelt und nicht fliegen kann?",
            "en": "Which animal waddles and cannot fly?"
          },
          "visual": "",
          "answers": [
            {
              "id": "penguin",
              "label": "🐧"
            },
            {
              "id": "owl",
              "label": "🦉"
            },
            {
              "id": "wolf",
              "label": "🐺"
            }
          ],
          "correctAnswerId": "penguin",
          "success": {
            "de": "Super! Gesucht war: Pinguin.",
            "en": "Great! The answer is penguin."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es watschelt und nicht fliegen kann.",
            "en": "Remember this clue: It waddles and cannot fly."
          }
        },
        {
          "id": "au23",
          "prompt": {
            "de": "Welches Tier weißes Fell und große Tatzen hat?",
            "en": "Which animal has white fur and large paws?"
          },
          "visual": "",
          "answers": [
            {
              "id": "bat",
              "label": "🦇"
            },
            {
              "id": "cat",
              "label": "🐱"
            },
            {
              "id": "polar-bear",
              "label": "🐻‍❄️"
            }
          ],
          "correctAnswerId": "polar-bear",
          "success": {
            "de": "Super! Gesucht war: Eisbär.",
            "en": "Great! The answer is polar bear."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es weißes Fell und große Tatzen hat.",
            "en": "Remember this clue: It has white fur and large paws."
          }
        },
        {
          "id": "au24",
          "prompt": {
            "de": "Welches Tier eine große Mähne hat und brüllt?",
            "en": "Which animal has a large mane and roars?"
          },
          "visual": "",
          "answers": [
            {
              "id": "dog",
              "label": "🐶"
            },
            {
              "id": "lion",
              "label": "🦁"
            },
            {
              "id": "fox",
              "label": "🦊"
            }
          ],
          "correctAnswerId": "lion",
          "success": {
            "de": "Super! Gesucht war: Löwe.",
            "en": "Great! The answer is lion."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es eine große Mähne hat und brüllt.",
            "en": "Remember this clue: It has a large mane and roars."
          }
        },
        {
          "id": "au25",
          "prompt": {
            "de": "Welches Tier schwarze Streifen im Fell hat?",
            "en": "Which animal has black stripes on its fur?"
          },
          "visual": "",
          "answers": [
            {
              "id": "tiger",
              "label": "🐯"
            },
            {
              "id": "hedgehog",
              "label": "🦔"
            },
            {
              "id": "cow",
              "label": "🐮"
            }
          ],
          "correctAnswerId": "tiger",
          "success": {
            "de": "Super! Gesucht war: Tiger.",
            "en": "Great! The answer is tiger."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es schwarze Streifen im Fell hat.",
            "en": "Remember this clue: It has black stripes on its fur."
          }
        },
        {
          "id": "au26",
          "prompt": {
            "de": "Welches Tier einen langen Rüssel benutzt?",
            "en": "Which animal uses a long trunk?"
          },
          "visual": "",
          "answers": [
            {
              "id": "parrot",
              "label": "🦜"
            },
            {
              "id": "horse",
              "label": "🐴"
            },
            {
              "id": "elephant",
              "label": "🐘"
            }
          ],
          "correctAnswerId": "elephant",
          "success": {
            "de": "Super! Gesucht war: Elefant.",
            "en": "Great! The answer is elephant."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es einen langen Rüssel benutzt.",
            "en": "Remember this clue: It uses a long trunk."
          }
        },
        {
          "id": "au27",
          "prompt": {
            "de": "Welches Tier den längsten Hals hat?",
            "en": "Which animal has the longest neck?"
          },
          "visual": "",
          "answers": [
            {
              "id": "pig",
              "label": "🐷"
            },
            {
              "id": "giraffe",
              "label": "🦒"
            },
            {
              "id": "peacock",
              "label": "🦚"
            }
          ],
          "correctAnswerId": "giraffe",
          "success": {
            "de": "Super! Gesucht war: Giraffe.",
            "en": "Great! The answer is giraffe."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es den längsten Hals hat.",
            "en": "Remember this clue: It has the longest neck."
          }
        },
        {
          "id": "au28",
          "prompt": {
            "de": "Welches Tier schwarz-weiße Streifen trägt?",
            "en": "Which animal wears black and white stripes?"
          },
          "visual": "",
          "answers": [
            {
              "id": "zebra",
              "label": "🦓"
            },
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "sheep",
              "label": "🐑"
            }
          ],
          "correctAnswerId": "zebra",
          "success": {
            "de": "Super! Gesucht war: Zebra.",
            "en": "Great! The answer is zebra."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es schwarz-weiße Streifen trägt.",
            "en": "Remember this clue: It wears black and white stripes."
          }
        },
        {
          "id": "au29",
          "prompt": {
            "de": "Welches Tier geschickt auf Bäume klettert?",
            "en": "Which animal climbs trees skillfully?"
          },
          "visual": "",
          "answers": [
            {
              "id": "crocodile",
              "label": "🐊"
            },
            {
              "id": "goat",
              "label": "🐐"
            },
            {
              "id": "monkey",
              "label": "🐒"
            }
          ],
          "correctAnswerId": "monkey",
          "success": {
            "de": "Super! Gesucht war: Affe.",
            "en": "Great! The answer is monkey."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es geschickt auf Bäume klettert.",
            "en": "Remember this clue: It climbs trees skillfully."
          }
        },
        {
          "id": "au30",
          "prompt": {
            "de": "Welches Tier sein Junges im Beutel trägt?",
            "en": "Which animal carries its baby in a pouch?"
          },
          "visual": "",
          "answers": [
            {
              "id": "chicken",
              "label": "🐔"
            },
            {
              "id": "kangaroo",
              "label": "🦘"
            },
            {
              "id": "snake",
              "label": "🐍"
            }
          ],
          "correctAnswerId": "kangaroo",
          "success": {
            "de": "Super! Gesucht war: Känguru.",
            "en": "Great! The answer is kangaroo."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es sein Junges im Beutel trägt.",
            "en": "Remember this clue: It carries its baby in a pouch."
          }
        },
        {
          "id": "au31",
          "prompt": {
            "de": "Welches Tier fast nur Eukalyptusblätter frisst?",
            "en": "Which animal eats mostly eucalyptus leaves?"
          },
          "visual": "",
          "answers": [
            {
              "id": "koala",
              "label": "🐨"
            },
            {
              "id": "spider",
              "label": "🕷️"
            },
            {
              "id": "duck",
              "label": "🦆"
            }
          ],
          "correctAnswerId": "koala",
          "success": {
            "de": "Super! Gesucht war: Koala.",
            "en": "Great! The answer is koala."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es fast nur Eukalyptusblätter frisst.",
            "en": "Remember this clue: It eats mostly eucalyptus leaves."
          }
        },
        {
          "id": "au32",
          "prompt": {
            "de": "Welches Tier Höcker auf dem Rücken hat?",
            "en": "Which animal has humps on its back?"
          },
          "visual": "",
          "answers": [
            {
              "id": "squirrel",
              "label": "🐿️"
            },
            {
              "id": "bee",
              "label": "🐝"
            },
            {
              "id": "camel",
              "label": "🐫"
            }
          ],
          "correctAnswerId": "camel",
          "success": {
            "de": "Super! Gesucht war: Kamel.",
            "en": "Great! The answer is camel."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es Höcker auf dem Rücken hat.",
            "en": "Remember this clue: It has humps on its back."
          }
        },
        {
          "id": "au33",
          "prompt": {
            "de": "Welches Tier nachts mit großen Augen jagt?",
            "en": "Which animal hunts at night with large eyes?"
          },
          "visual": "",
          "answers": [
            {
              "id": "butterfly",
              "label": "🦋"
            },
            {
              "id": "owl",
              "label": "🦉"
            },
            {
              "id": "deer",
              "label": "🦌"
            }
          ],
          "correctAnswerId": "owl",
          "success": {
            "de": "Super! Gesucht war: Eule.",
            "en": "Great! The answer is owl."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es nachts mit großen Augen jagt.",
            "en": "Remember this clue: It hunts at night with large eyes."
          }
        },
        {
          "id": "au34",
          "prompt": {
            "de": "Welches Tier kopfüber schläft?",
            "en": "Which animal sleeps upside down?"
          },
          "visual": "",
          "answers": [
            {
              "id": "bat",
              "label": "🦇"
            },
            {
              "id": "wolf",
              "label": "🐺"
            },
            {
              "id": "ant",
              "label": "🐜"
            }
          ],
          "correctAnswerId": "bat",
          "success": {
            "de": "Super! Gesucht war: Fledermaus.",
            "en": "Great! The answer is bat."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es kopfüber schläft.",
            "en": "Remember this clue: It sleeps upside down."
          }
        },
        {
          "id": "au35",
          "prompt": {
            "de": "Welches Tier einen buschigen roten Schwanz hat?",
            "en": "Which animal has a bushy red tail?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cat",
              "label": "🐱"
            },
            {
              "id": "snail",
              "label": "🐌"
            },
            {
              "id": "fox",
              "label": "🦊"
            }
          ],
          "correctAnswerId": "fox",
          "success": {
            "de": "Super! Gesucht war: Fuchs.",
            "en": "Great! The answer is fox."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es einen buschigen roten Schwanz hat.",
            "en": "Remember this clue: It has a bushy red tail."
          }
        },
        {
          "id": "au36",
          "prompt": {
            "de": "Welches Tier viele spitze Stacheln trägt?",
            "en": "Which animal has many sharp spines?"
          },
          "visual": "",
          "answers": [
            {
              "id": "frog",
              "label": "🐸"
            },
            {
              "id": "hedgehog",
              "label": "🦔"
            },
            {
              "id": "dog",
              "label": "🐶"
            }
          ],
          "correctAnswerId": "hedgehog",
          "success": {
            "de": "Super! Gesucht war: Igel.",
            "en": "Great! The answer is hedgehog."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es viele spitze Stacheln trägt.",
            "en": "Remember this clue: It has many sharp spines."
          }
        },
        {
          "id": "au37",
          "prompt": {
            "de": "Welches Tier bunte Federn hat und Wörter nachahmen kann?",
            "en": "Which animal has colorful feathers and can copy words?"
          },
          "visual": "",
          "answers": [
            {
              "id": "parrot",
              "label": "🦜"
            },
            {
              "id": "cow",
              "label": "🐮"
            },
            {
              "id": "turtle",
              "label": "🐢"
            }
          ],
          "correctAnswerId": "parrot",
          "success": {
            "de": "Super! Gesucht war: Papagei.",
            "en": "Great! The answer is parrot."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es bunte Federn hat und Wörter nachahmen kann.",
            "en": "Remember this clue: It has colorful feathers and can copy words."
          }
        },
        {
          "id": "au38",
          "prompt": {
            "de": "Welches Tier ein großes Rad aus Federn zeigt?",
            "en": "Which animal fans out a huge display of feathers?"
          },
          "visual": "",
          "answers": [
            {
              "id": "horse",
              "label": "🐴"
            },
            {
              "id": "fish",
              "label": "🐟"
            },
            {
              "id": "peacock",
              "label": "🦚"
            }
          ],
          "correctAnswerId": "peacock",
          "success": {
            "de": "Super! Gesucht war: Pfau.",
            "en": "Great! The answer is peacock."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es ein großes Rad aus Federn zeigt.",
            "en": "Remember this clue: It fans out a huge display of feathers."
          }
        },
        {
          "id": "au39",
          "prompt": {
            "de": "Welches Tier rosa Federn und lange Beine hat?",
            "en": "Which animal has pink feathers and long legs?"
          },
          "visual": "",
          "answers": [
            {
              "id": "dolphin",
              "label": "🐬"
            },
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "pig",
              "label": "🐷"
            }
          ],
          "correctAnswerId": "flamingo",
          "success": {
            "de": "Super! Gesucht war: Flamingo.",
            "en": "Great! The answer is flamingo."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es rosa Federn und lange Beine hat.",
            "en": "Remember this clue: It has pink feathers and long legs."
          }
        },
        {
          "id": "au40",
          "prompt": {
            "de": "Welches Tier ein großes Maul und einen starken Schwanz hat?",
            "en": "Which animal has a huge mouth and a strong tail?"
          },
          "visual": "",
          "answers": [
            {
              "id": "crocodile",
              "label": "🐊"
            },
            {
              "id": "sheep",
              "label": "🐑"
            },
            {
              "id": "whale",
              "label": "🐋"
            }
          ],
          "correctAnswerId": "crocodile",
          "success": {
            "de": "Super! Gesucht war: Krokodil.",
            "en": "Great! The answer is crocodile."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es ein großes Maul und einen starken Schwanz hat.",
            "en": "Remember this clue: It has a huge mouth and a strong tail."
          }
        },
        {
          "id": "au41",
          "prompt": {
            "de": "Welches Tier ohne Beine über den Boden gleitet?",
            "en": "Which animal slides along the ground without legs?"
          },
          "visual": "",
          "answers": [
            {
              "id": "goat",
              "label": "🐐"
            },
            {
              "id": "shark",
              "label": "🦈"
            },
            {
              "id": "snake",
              "label": "🐍"
            }
          ],
          "correctAnswerId": "snake",
          "success": {
            "de": "Super! Gesucht war: Schlange.",
            "en": "Great! The answer is snake."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es ohne Beine über den Boden gleitet.",
            "en": "Remember this clue: It slides along the ground without legs."
          }
        },
        {
          "id": "au42",
          "prompt": {
            "de": "Welches Tier acht Beine hat und Netze baut?",
            "en": "Which animal has eight legs and builds webs?"
          },
          "visual": "",
          "answers": [
            {
              "id": "octopus",
              "label": "🐙"
            },
            {
              "id": "spider",
              "label": "🕷️"
            },
            {
              "id": "chicken",
              "label": "🐔"
            }
          ],
          "correctAnswerId": "spider",
          "success": {
            "de": "Super! Gesucht war: Spinne.",
            "en": "Great! The answer is spider."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es acht Beine hat und Netze baut.",
            "en": "Remember this clue: It has eight legs and builds webs."
          }
        },
        {
          "id": "au43",
          "prompt": {
            "de": "Welches Tier einen buschigen Schwanz hat und Nüsse sammelt?",
            "en": "Which animal has a bushy tail and gathers nuts?"
          },
          "visual": "",
          "answers": [
            {
              "id": "squirrel",
              "label": "🐿️"
            },
            {
              "id": "duck",
              "label": "🦆"
            },
            {
              "id": "crab",
              "label": "🦀"
            }
          ],
          "correctAnswerId": "squirrel",
          "success": {
            "de": "Super! Gesucht war: Eichhörnchen.",
            "en": "Great! The answer is squirrel."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es einen buschigen Schwanz hat und Nüsse sammelt.",
            "en": "Remember this clue: It has a bushy tail and gathers nuts."
          }
        },
        {
          "id": "au44",
          "prompt": {
            "de": "Welches Tier ein großes Geweih tragen kann?",
            "en": "Which animal can grow large antlers?"
          },
          "visual": "",
          "answers": [
            {
              "id": "bee",
              "label": "🐝"
            },
            {
              "id": "penguin",
              "label": "🐧"
            },
            {
              "id": "deer",
              "label": "🦌"
            }
          ],
          "correctAnswerId": "deer",
          "success": {
            "de": "Super! Gesucht war: Hirsch.",
            "en": "Great! The answer is deer."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es ein großes Geweih tragen kann.",
            "en": "Remember this clue: It can grow large antlers."
          }
        },
        {
          "id": "au45",
          "prompt": {
            "de": "Welches Tier heult und einem Hund ähnlich sieht?",
            "en": "Which animal howls and looks similar to a dog?"
          },
          "visual": "",
          "answers": [
            {
              "id": "polar-bear",
              "label": "🐻‍❄️"
            },
            {
              "id": "wolf",
              "label": "🐺"
            },
            {
              "id": "butterfly",
              "label": "🦋"
            }
          ],
          "correctAnswerId": "wolf",
          "success": {
            "de": "Super! Gesucht war: Wolf.",
            "en": "Great! The answer is wolf."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es heult und einem Hund ähnlich sieht.",
            "en": "Remember this clue: It howls and looks similar to a dog."
          }
        },
        {
          "id": "au46",
          "prompt": {
            "de": "Welches Tier gern Mäuse jagt?",
            "en": "Which animal likes to hunt mice?"
          },
          "visual": "",
          "answers": [
            {
              "id": "ant",
              "label": "🐜"
            },
            {
              "id": "lion",
              "label": "🦁"
            },
            {
              "id": "cat",
              "label": "🐱"
            }
          ],
          "correctAnswerId": "cat",
          "success": {
            "de": "Super! Gesucht war: Katze.",
            "en": "Great! The answer is cat."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es gern Mäuse jagt.",
            "en": "Remember this clue: It likes to hunt mice."
          }
        },
        {
          "id": "au47",
          "prompt": {
            "de": "Welches Tier Haus und Garten bewachen kann?",
            "en": "Which animal can guard a home and garden?"
          },
          "visual": "",
          "answers": [
            {
              "id": "tiger",
              "label": "🐯"
            },
            {
              "id": "dog",
              "label": "🐶"
            },
            {
              "id": "snail",
              "label": "🐌"
            }
          ],
          "correctAnswerId": "dog",
          "success": {
            "de": "Super! Gesucht war: Hund.",
            "en": "Great! The answer is dog."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es Haus und Garten bewachen kann.",
            "en": "Remember this clue: It can guard a home and garden."
          }
        },
        {
          "id": "au48",
          "prompt": {
            "de": "Welches Tier auf einer grünen Weide grast?",
            "en": "Which animal grazes in a green meadow?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cow",
              "label": "🐮"
            },
            {
              "id": "frog",
              "label": "🐸"
            },
            {
              "id": "elephant",
              "label": "🐘"
            }
          ],
          "correctAnswerId": "cow",
          "success": {
            "de": "Super! Gesucht war: Kuh.",
            "en": "Great! The answer is cow."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es auf einer grünen Weide grast.",
            "en": "Remember this clue: It grazes in a green meadow."
          }
        },
        {
          "id": "au49",
          "prompt": {
            "de": "Welches Tier in einem Stall schläft?",
            "en": "Which animal sleeps in a stable?"
          },
          "visual": "",
          "answers": [
            {
              "id": "turtle",
              "label": "🐢"
            },
            {
              "id": "giraffe",
              "label": "🦒"
            },
            {
              "id": "horse",
              "label": "🐴"
            }
          ],
          "correctAnswerId": "horse",
          "success": {
            "de": "Super! Gesucht war: Pferd.",
            "en": "Great! The answer is horse."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es in einem Stall schläft.",
            "en": "Remember this clue: It sleeps in a stable."
          }
        },
        {
          "id": "au50",
          "prompt": {
            "de": "Welches Tier sich gern im Schlamm wälzt?",
            "en": "Which animal likes to roll in mud?"
          },
          "visual": "",
          "answers": [
            {
              "id": "zebra",
              "label": "🦓"
            },
            {
              "id": "pig",
              "label": "🐷"
            },
            {
              "id": "fish",
              "label": "🐟"
            }
          ],
          "correctAnswerId": "pig",
          "success": {
            "de": "Super! Gesucht war: Schwein.",
            "en": "Great! The answer is pig."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es sich gern im Schlamm wälzt.",
            "en": "Remember this clue: It likes to roll in mud."
          }
        },
        {
          "id": "au51",
          "prompt": {
            "de": "Welches Tier mit anderen in einer Herde lebt?",
            "en": "Which animal lives with others in a flock?"
          },
          "visual": "",
          "answers": [
            {
              "id": "sheep",
              "label": "🐑"
            },
            {
              "id": "dolphin",
              "label": "🐬"
            },
            {
              "id": "monkey",
              "label": "🐒"
            }
          ],
          "correctAnswerId": "sheep",
          "success": {
            "de": "Super! Gesucht war: Schaf.",
            "en": "Great! The answer is sheep."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es mit anderen in einer Herde lebt.",
            "en": "Remember this clue: It lives with others in a flock."
          }
        },
        {
          "id": "au52",
          "prompt": {
            "de": "Welches Tier Kräuter an steilen Hängen frisst?",
            "en": "Which animal eats plants on steep hills?"
          },
          "visual": "",
          "answers": [
            {
              "id": "whale",
              "label": "🐋"
            },
            {
              "id": "kangaroo",
              "label": "🦘"
            },
            {
              "id": "goat",
              "label": "🐐"
            }
          ],
          "correctAnswerId": "goat",
          "success": {
            "de": "Super! Gesucht war: Ziege.",
            "en": "Great! The answer is goat."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es Kräuter an steilen Hängen frisst.",
            "en": "Remember this clue: It eats plants on steep hills."
          }
        },
        {
          "id": "au53",
          "prompt": {
            "de": "Welches Tier im Hof nach Körnern scharrt?",
            "en": "Which animal scratches for grain in a yard?"
          },
          "visual": "",
          "answers": [
            {
              "id": "koala",
              "label": "🐨"
            },
            {
              "id": "chicken",
              "label": "🐔"
            },
            {
              "id": "shark",
              "label": "🦈"
            }
          ],
          "correctAnswerId": "chicken",
          "success": {
            "de": "Super! Gesucht war: Huhn.",
            "en": "Great! The answer is chicken."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es im Hof nach Körnern scharrt.",
            "en": "Remember this clue: It scratches for grain in a yard."
          }
        },
        {
          "id": "au54",
          "prompt": {
            "de": "Welches Tier auf einem Teich schwimmt?",
            "en": "Which animal swims on a pond?"
          },
          "visual": "",
          "answers": [
            {
              "id": "duck",
              "label": "🦆"
            },
            {
              "id": "octopus",
              "label": "🐙"
            },
            {
              "id": "camel",
              "label": "🐫"
            }
          ],
          "correctAnswerId": "duck",
          "success": {
            "de": "Super! Gesucht war: Ente.",
            "en": "Great! The answer is duck."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es auf einem Teich schwimmt.",
            "en": "Remember this clue: It swims on a pond."
          }
        },
        {
          "id": "au55",
          "prompt": {
            "de": "Welches Tier Blüten besucht und Pollen sammelt?",
            "en": "Which animal visits flowers and collects pollen?"
          },
          "visual": "",
          "answers": [
            {
              "id": "crab",
              "label": "🦀"
            },
            {
              "id": "owl",
              "label": "🦉"
            },
            {
              "id": "bee",
              "label": "🐝"
            }
          ],
          "correctAnswerId": "bee",
          "success": {
            "de": "Super! Gesucht war: Biene.",
            "en": "Great! The answer is bee."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es Blüten besucht und Pollen sammelt.",
            "en": "Remember this clue: It visits flowers and collects pollen."
          }
        },
        {
          "id": "au56",
          "prompt": {
            "de": "Welches Tier sein Leben als Raupe beginnt?",
            "en": "Which animal begins life as a caterpillar?"
          },
          "visual": "",
          "answers": [
            {
              "id": "bat",
              "label": "🦇"
            },
            {
              "id": "butterfly",
              "label": "🦋"
            },
            {
              "id": "penguin",
              "label": "🐧"
            }
          ],
          "correctAnswerId": "butterfly",
          "success": {
            "de": "Super! Gesucht war: Schmetterling.",
            "en": "Great! The answer is butterfly."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es sein Leben als Raupe beginnt.",
            "en": "Remember this clue: It begins life as a caterpillar."
          }
        },
        {
          "id": "au57",
          "prompt": {
            "de": "Welches Tier in einer großen Kolonie lebt?",
            "en": "Which animal lives in a large colony?"
          },
          "visual": "",
          "answers": [
            {
              "id": "ant",
              "label": "🐜"
            },
            {
              "id": "polar-bear",
              "label": "🐻‍❄️"
            },
            {
              "id": "fox",
              "label": "🦊"
            }
          ],
          "correctAnswerId": "ant",
          "success": {
            "de": "Super! Gesucht war: Ameise.",
            "en": "Great! The answer is ant."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es in einer großen Kolonie lebt.",
            "en": "Remember this clue: It lives in a large colony."
          }
        },
        {
          "id": "au58",
          "prompt": {
            "de": "Welches Tier eine glänzende Spur hinterlässt?",
            "en": "Which animal leaves a shiny trail?"
          },
          "visual": "",
          "answers": [
            {
              "id": "lion",
              "label": "🦁"
            },
            {
              "id": "hedgehog",
              "label": "🦔"
            },
            {
              "id": "snail",
              "label": "🐌"
            }
          ],
          "correctAnswerId": "snail",
          "success": {
            "de": "Super! Gesucht war: Schnecke.",
            "en": "Great! The answer is snail."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es eine glänzende Spur hinterlässt.",
            "en": "Remember this clue: It leaves a shiny trail."
          }
        },
        {
          "id": "au59",
          "prompt": {
            "de": "Welches Tier am Rand eines Teichs lebt?",
            "en": "Which animal lives beside a pond?"
          },
          "visual": "",
          "answers": [
            {
              "id": "parrot",
              "label": "🦜"
            },
            {
              "id": "frog",
              "label": "🐸"
            },
            {
              "id": "tiger",
              "label": "🐯"
            }
          ],
          "correctAnswerId": "frog",
          "success": {
            "de": "Super! Gesucht war: Frosch.",
            "en": "Great! The answer is frog."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es am Rand eines Teichs lebt.",
            "en": "Remember this clue: It lives beside a pond."
          }
        },
        {
          "id": "au60",
          "prompt": {
            "de": "Welches Tier langsam läuft und sehr alt werden kann?",
            "en": "Which animal moves slowly and can live a long time?"
          },
          "visual": "",
          "answers": [
            {
              "id": "turtle",
              "label": "🐢"
            },
            {
              "id": "elephant",
              "label": "🐘"
            },
            {
              "id": "peacock",
              "label": "🦚"
            }
          ],
          "correctAnswerId": "turtle",
          "success": {
            "de": "Super! Gesucht war: Schildkröte.",
            "en": "Great! The answer is turtle."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es langsam läuft und sehr alt werden kann.",
            "en": "Remember this clue: It moves slowly and can live a long time."
          }
        },
        {
          "id": "au61",
          "prompt": {
            "de": "Welches Tier mit Flossen durch das Wasser schwimmt?",
            "en": "Which animal swims through water with fins?"
          },
          "visual": "",
          "answers": [
            {
              "id": "giraffe",
              "label": "🦒"
            },
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "fish",
              "label": "🐟"
            }
          ],
          "correctAnswerId": "fish",
          "success": {
            "de": "Super! Gesucht war: Fisch.",
            "en": "Great! The answer is fish."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es mit Flossen durch das Wasser schwimmt.",
            "en": "Remember this clue: It swims through water with fins."
          }
        },
        {
          "id": "au62",
          "prompt": {
            "de": "Welches Tier als Säugetier Luft atmen muss?",
            "en": "Which animal must breathe air because it is a mammal?"
          },
          "visual": "",
          "answers": [
            {
              "id": "crocodile",
              "label": "🐊"
            },
            {
              "id": "dolphin",
              "label": "🐬"
            },
            {
              "id": "zebra",
              "label": "🦓"
            }
          ],
          "correctAnswerId": "dolphin",
          "success": {
            "de": "Super! Gesucht war: Delfin.",
            "en": "Great! The answer is dolphin."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es als Säugetier Luft atmen muss.",
            "en": "Remember this clue: It must breathe air because it is a mammal."
          }
        },
        {
          "id": "au63",
          "prompt": {
            "de": "Welches Tier durch ein Blasloch atmet?",
            "en": "Which animal breathes through a blowhole?"
          },
          "visual": "",
          "answers": [
            {
              "id": "whale",
              "label": "🐋"
            },
            {
              "id": "monkey",
              "label": "🐒"
            },
            {
              "id": "snake",
              "label": "🐍"
            }
          ],
          "correctAnswerId": "whale",
          "success": {
            "de": "Super! Gesucht war: Wal.",
            "en": "Great! The answer is whale."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es durch ein Blasloch atmet.",
            "en": "Remember this clue: It breathes through a blowhole."
          }
        },
        {
          "id": "au64",
          "prompt": {
            "de": "Welches Tier als Raubfisch im Meer lebt?",
            "en": "Which animal lives in the sea as a predatory fish?"
          },
          "visual": "",
          "answers": [
            {
              "id": "kangaroo",
              "label": "🦘"
            },
            {
              "id": "spider",
              "label": "🕷️"
            },
            {
              "id": "shark",
              "label": "🦈"
            }
          ],
          "correctAnswerId": "shark",
          "success": {
            "de": "Super! Gesucht war: Hai.",
            "en": "Great! The answer is shark."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es als Raubfisch im Meer lebt.",
            "en": "Remember this clue: It lives in the sea as a predatory fish."
          }
        },
        {
          "id": "au65",
          "prompt": {
            "de": "Welches Tier bei Gefahr eine Tintenwolke macht?",
            "en": "Which animal makes an ink cloud when in danger?"
          },
          "visual": "",
          "answers": [
            {
              "id": "squirrel",
              "label": "🐿️"
            },
            {
              "id": "octopus",
              "label": "🐙"
            },
            {
              "id": "koala",
              "label": "🐨"
            }
          ],
          "correctAnswerId": "octopus",
          "success": {
            "de": "Super! Gesucht war: Oktopus.",
            "en": "Great! The answer is octopus."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es bei Gefahr eine Tintenwolke macht.",
            "en": "Remember this clue: It makes an ink cloud when in danger."
          }
        },
        {
          "id": "au66",
          "prompt": {
            "de": "Welches Tier zwischen Felsen am Meer wohnt?",
            "en": "Which animal lives among rocks by the sea?"
          },
          "visual": "",
          "answers": [
            {
              "id": "crab",
              "label": "🦀"
            },
            {
              "id": "camel",
              "label": "🐫"
            },
            {
              "id": "deer",
              "label": "🦌"
            }
          ],
          "correctAnswerId": "crab",
          "success": {
            "de": "Super! Gesucht war: Krabbe.",
            "en": "Great! The answer is crab."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es zwischen Felsen am Meer wohnt.",
            "en": "Remember this clue: It lives among rocks by the sea."
          }
        },
        {
          "id": "au67",
          "prompt": {
            "de": "Welches Tier im kalten Wasser besonders gut schwimmt?",
            "en": "Which animal swims especially well in cold water?"
          },
          "visual": "",
          "answers": [
            {
              "id": "owl",
              "label": "🦉"
            },
            {
              "id": "wolf",
              "label": "🐺"
            },
            {
              "id": "penguin",
              "label": "🐧"
            }
          ],
          "correctAnswerId": "penguin",
          "success": {
            "de": "Super! Gesucht war: Pinguin.",
            "en": "Great! The answer is penguin."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es im kalten Wasser besonders gut schwimmt.",
            "en": "Remember this clue: It swims especially well in cold water."
          }
        },
        {
          "id": "au68",
          "prompt": {
            "de": "Welches Tier in der kalten Arktis lebt?",
            "en": "Which animal lives in the cold Arctic?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cat",
              "label": "🐱"
            },
            {
              "id": "polar-bear",
              "label": "🐻‍❄️"
            },
            {
              "id": "bat",
              "label": "🦇"
            }
          ],
          "correctAnswerId": "polar-bear",
          "success": {
            "de": "Super! Gesucht war: Eisbär.",
            "en": "Great! The answer is polar bear."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es in der kalten Arktis lebt.",
            "en": "Remember this clue: It lives in the cold Arctic."
          }
        },
        {
          "id": "au69",
          "prompt": {
            "de": "Welches Tier in einem Rudel in Afrika lebt?",
            "en": "Which animal lives in a pride in Africa?"
          },
          "visual": "",
          "answers": [
            {
              "id": "lion",
              "label": "🦁"
            },
            {
              "id": "fox",
              "label": "🦊"
            },
            {
              "id": "dog",
              "label": "🐶"
            }
          ],
          "correctAnswerId": "lion",
          "success": {
            "de": "Super! Gesucht war: Löwe.",
            "en": "Great! The answer is lion."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es in einem Rudel in Afrika lebt.",
            "en": "Remember this clue: It lives in a pride in Africa."
          }
        },
        {
          "id": "au70",
          "prompt": {
            "de": "Welches Tier allein durch Wälder schleicht?",
            "en": "Which animal stalks alone through forests?"
          },
          "visual": "",
          "answers": [
            {
              "id": "hedgehog",
              "label": "🦔"
            },
            {
              "id": "cow",
              "label": "🐮"
            },
            {
              "id": "tiger",
              "label": "🐯"
            }
          ],
          "correctAnswerId": "tiger",
          "success": {
            "de": "Super! Gesucht war: Tiger.",
            "en": "Great! The answer is tiger."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es allein durch Wälder schleicht.",
            "en": "Remember this clue: It stalks alone through forests."
          }
        },
        {
          "id": "au71",
          "prompt": {
            "de": "Welches Tier das größte Tier an Land ist?",
            "en": "Which animal is the largest animal on land?"
          },
          "visual": "",
          "answers": [
            {
              "id": "horse",
              "label": "🐴"
            },
            {
              "id": "elephant",
              "label": "🐘"
            },
            {
              "id": "parrot",
              "label": "🦜"
            }
          ],
          "correctAnswerId": "elephant",
          "success": {
            "de": "Super! Gesucht war: Elefant.",
            "en": "Great! The answer is elephant."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es das größte Tier an Land ist.",
            "en": "Remember this clue: It is the largest animal on land."
          }
        },
        {
          "id": "au72",
          "prompt": {
            "de": "Welches Tier Blätter hoch oben in Bäumen frisst?",
            "en": "Which animal eats leaves high in trees?"
          },
          "visual": "",
          "answers": [
            {
              "id": "giraffe",
              "label": "🦒"
            },
            {
              "id": "peacock",
              "label": "🦚"
            },
            {
              "id": "pig",
              "label": "🐷"
            }
          ],
          "correctAnswerId": "giraffe",
          "success": {
            "de": "Super! Gesucht war: Giraffe.",
            "en": "Great! The answer is giraffe."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es Blätter hoch oben in Bäumen frisst.",
            "en": "Remember this clue: It eats leaves high in trees."
          }
        },
        {
          "id": "au73",
          "prompt": {
            "de": "Welches Tier in Herden durch die Savanne zieht?",
            "en": "Which animal travels across the savanna in herds?"
          },
          "visual": "",
          "answers": [
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "sheep",
              "label": "🐑"
            },
            {
              "id": "zebra",
              "label": "🦓"
            }
          ],
          "correctAnswerId": "zebra",
          "success": {
            "de": "Super! Gesucht war: Zebra.",
            "en": "Great! The answer is zebra."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es in Herden durch die Savanne zieht.",
            "en": "Remember this clue: It travels across the savanna in herds."
          }
        },
        {
          "id": "au74",
          "prompt": {
            "de": "Welches Tier Früchte mit seinen Händen greifen kann?",
            "en": "Which animal can grab fruit with its hands?"
          },
          "visual": "",
          "answers": [
            {
              "id": "goat",
              "label": "🐐"
            },
            {
              "id": "monkey",
              "label": "🐒"
            },
            {
              "id": "crocodile",
              "label": "🐊"
            }
          ],
          "correctAnswerId": "monkey",
          "success": {
            "de": "Super! Gesucht war: Affe.",
            "en": "Great! The answer is monkey."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es Früchte mit seinen Händen greifen kann.",
            "en": "Remember this clue: It can grab fruit with its hands."
          }
        },
        {
          "id": "au75",
          "prompt": {
            "de": "Welches Tier mit großen Sprüngen durch Australien hüpft?",
            "en": "Which animal hops across Australia in great leaps?"
          },
          "visual": "",
          "answers": [
            {
              "id": "kangaroo",
              "label": "🦘"
            },
            {
              "id": "snake",
              "label": "🐍"
            },
            {
              "id": "chicken",
              "label": "🐔"
            }
          ],
          "correctAnswerId": "kangaroo",
          "success": {
            "de": "Super! Gesucht war: Känguru.",
            "en": "Great! The answer is kangaroo."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es mit großen Sprüngen durch Australien hüpft.",
            "en": "Remember this clue: It hops across Australia in great leaps."
          }
        },
        {
          "id": "au76",
          "prompt": {
            "de": "Welches Tier hoch oben in australischen Bäumen schläft?",
            "en": "Which animal sleeps high in Australian trees?"
          },
          "visual": "",
          "answers": [
            {
              "id": "spider",
              "label": "🕷️"
            },
            {
              "id": "duck",
              "label": "🦆"
            },
            {
              "id": "koala",
              "label": "🐨"
            }
          ],
          "correctAnswerId": "koala",
          "success": {
            "de": "Super! Gesucht war: Koala.",
            "en": "Great! The answer is koala."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es hoch oben in australischen Bäumen schläft.",
            "en": "Remember this clue: It sleeps high in Australian trees."
          }
        },
        {
          "id": "au77",
          "prompt": {
            "de": "Welches Tier lange ohne Wasser durch die Wüste wandert?",
            "en": "Which animal crosses the desert for a long time without water?"
          },
          "visual": "",
          "answers": [
            {
              "id": "bee",
              "label": "🐝"
            },
            {
              "id": "camel",
              "label": "🐫"
            },
            {
              "id": "squirrel",
              "label": "🐿️"
            }
          ],
          "correctAnswerId": "camel",
          "success": {
            "de": "Super! Gesucht war: Kamel.",
            "en": "Great! The answer is camel."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es lange ohne Wasser durch die Wüste wandert.",
            "en": "Remember this clue: It crosses the desert for a long time without water."
          }
        },
        {
          "id": "au78",
          "prompt": {
            "de": "Welches Tier fast lautlos durch die Dunkelheit fliegt?",
            "en": "Which animal flies almost silently through the darkness?"
          },
          "visual": "",
          "answers": [
            {
              "id": "owl",
              "label": "🦉"
            },
            {
              "id": "deer",
              "label": "🦌"
            },
            {
              "id": "butterfly",
              "label": "🦋"
            }
          ],
          "correctAnswerId": "owl",
          "success": {
            "de": "Super! Gesucht war: Eule.",
            "en": "Great! The answer is owl."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es fast lautlos durch die Dunkelheit fliegt.",
            "en": "Remember this clue: It flies almost silently through the darkness."
          }
        },
        {
          "id": "au79",
          "prompt": {
            "de": "Welches Tier sich mit Echo in der Nacht orientiert?",
            "en": "Which animal uses echoes to find its way at night?"
          },
          "visual": "",
          "answers": [
            {
              "id": "wolf",
              "label": "🐺"
            },
            {
              "id": "ant",
              "label": "🐜"
            },
            {
              "id": "bat",
              "label": "🦇"
            }
          ],
          "correctAnswerId": "bat",
          "success": {
            "de": "Super! Gesucht war: Fledermaus.",
            "en": "Great! The answer is bat."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es sich mit Echo in der Nacht orientiert.",
            "en": "Remember this clue: It uses echoes to find its way at night."
          }
        },
        {
          "id": "au80",
          "prompt": {
            "de": "Welches Tier seine Jungen in einem Bau großzieht?",
            "en": "Which animal raises its young in a den?"
          },
          "visual": "",
          "answers": [
            {
              "id": "snail",
              "label": "🐌"
            },
            {
              "id": "fox",
              "label": "🦊"
            },
            {
              "id": "cat",
              "label": "🐱"
            }
          ],
          "correctAnswerId": "fox",
          "success": {
            "de": "Super! Gesucht war: Fuchs.",
            "en": "Great! The answer is fox."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es seine Jungen in einem Bau großzieht.",
            "en": "Remember this clue: It raises its young in a den."
          }
        },
        {
          "id": "au81",
          "prompt": {
            "de": "Welches Tier sich bei Gefahr zu einer Kugel rollt?",
            "en": "Which animal rolls into a ball when in danger?"
          },
          "visual": "",
          "answers": [
            {
              "id": "hedgehog",
              "label": "🦔"
            },
            {
              "id": "dog",
              "label": "🐶"
            },
            {
              "id": "frog",
              "label": "🐸"
            }
          ],
          "correctAnswerId": "hedgehog",
          "success": {
            "de": "Super! Gesucht war: Igel.",
            "en": "Great! The answer is hedgehog."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es sich bei Gefahr zu einer Kugel rollt.",
            "en": "Remember this clue: It rolls into a ball when in danger."
          }
        },
        {
          "id": "au82",
          "prompt": {
            "de": "Welches Tier in warmen Regenwäldern lebt?",
            "en": "Which animal lives in warm rainforests?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cow",
              "label": "🐮"
            },
            {
              "id": "turtle",
              "label": "🐢"
            },
            {
              "id": "parrot",
              "label": "🦜"
            }
          ],
          "correctAnswerId": "parrot",
          "success": {
            "de": "Super! Gesucht war: Papagei.",
            "en": "Great! The answer is parrot."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es in warmen Regenwäldern lebt.",
            "en": "Remember this clue: It lives in warm rainforests."
          }
        },
        {
          "id": "au83",
          "prompt": {
            "de": "Welches Tier mit einem lauten Ruf auf sich aufmerksam macht?",
            "en": "Which animal uses a loud call to get attention?"
          },
          "visual": "",
          "answers": [
            {
              "id": "fish",
              "label": "🐟"
            },
            {
              "id": "peacock",
              "label": "🦚"
            },
            {
              "id": "horse",
              "label": "🐴"
            }
          ],
          "correctAnswerId": "peacock",
          "success": {
            "de": "Super! Gesucht war: Pfau.",
            "en": "Great! The answer is peacock."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es mit einem lauten Ruf auf sich aufmerksam macht.",
            "en": "Remember this clue: It uses a loud call to get attention."
          }
        },
        {
          "id": "au84",
          "prompt": {
            "de": "Welches Tier oft auf einem Bein im flachen Wasser steht?",
            "en": "Which animal often stands on one leg in shallow water?"
          },
          "visual": "",
          "answers": [
            {
              "id": "flamingo",
              "label": "🦩"
            },
            {
              "id": "pig",
              "label": "🐷"
            },
            {
              "id": "dolphin",
              "label": "🐬"
            }
          ],
          "correctAnswerId": "flamingo",
          "success": {
            "de": "Super! Gesucht war: Flamingo.",
            "en": "Great! The answer is flamingo."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es oft auf einem Bein im flachen Wasser steht.",
            "en": "Remember this clue: It often stands on one leg in shallow water."
          }
        },
        {
          "id": "au85",
          "prompt": {
            "de": "Welches Tier an warmen Flüssen und Seen lebt?",
            "en": "Which animal lives around warm rivers and lakes?"
          },
          "visual": "",
          "answers": [
            {
              "id": "sheep",
              "label": "🐑"
            },
            {
              "id": "whale",
              "label": "🐋"
            },
            {
              "id": "crocodile",
              "label": "🐊"
            }
          ],
          "correctAnswerId": "crocodile",
          "success": {
            "de": "Super! Gesucht war: Krokodil.",
            "en": "Great! The answer is crocodile."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es an warmen Flüssen und Seen lebt.",
            "en": "Remember this clue: It lives around warm rivers and lakes."
          }
        },
        {
          "id": "au86",
          "prompt": {
            "de": "Welches Tier ihre Haut regelmäßig abstreift?",
            "en": "Which animal sheds its skin regularly?"
          },
          "visual": "",
          "answers": [
            {
              "id": "shark",
              "label": "🦈"
            },
            {
              "id": "snake",
              "label": "🐍"
            },
            {
              "id": "goat",
              "label": "🐐"
            }
          ],
          "correctAnswerId": "snake",
          "success": {
            "de": "Super! Gesucht war: Schlange.",
            "en": "Great! The answer is snake."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es ihre Haut regelmäßig abstreift.",
            "en": "Remember this clue: It sheds its skin regularly."
          }
        },
        {
          "id": "au87",
          "prompt": {
            "de": "Welches Tier kleine Insekten in ihrem Netz fängt?",
            "en": "Which animal catches small insects in its web?"
          },
          "visual": "",
          "answers": [
            {
              "id": "spider",
              "label": "🕷️"
            },
            {
              "id": "chicken",
              "label": "🐔"
            },
            {
              "id": "octopus",
              "label": "🐙"
            }
          ],
          "correctAnswerId": "spider",
          "success": {
            "de": "Super! Gesucht war: Spinne.",
            "en": "Great! The answer is spider."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es kleine Insekten in ihrem Netz fängt.",
            "en": "Remember this clue: It catches small insects in its web."
          }
        },
        {
          "id": "au88",
          "prompt": {
            "de": "Welches Tier flink von Ast zu Ast springt?",
            "en": "Which animal leaps quickly from branch to branch?"
          },
          "visual": "",
          "answers": [
            {
              "id": "duck",
              "label": "🦆"
            },
            {
              "id": "crab",
              "label": "🦀"
            },
            {
              "id": "squirrel",
              "label": "🐿️"
            }
          ],
          "correctAnswerId": "squirrel",
          "success": {
            "de": "Super! Gesucht war: Eichhörnchen.",
            "en": "Great! The answer is squirrel."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es flink von Ast zu Ast springt.",
            "en": "Remember this clue: It leaps quickly from branch to branch."
          }
        },
        {
          "id": "au89",
          "prompt": {
            "de": "Welches Tier leise durch Wald und Wiesen zieht?",
            "en": "Which animal moves quietly through woods and meadows?"
          },
          "visual": "",
          "answers": [
            {
              "id": "penguin",
              "label": "🐧"
            },
            {
              "id": "deer",
              "label": "🦌"
            },
            {
              "id": "bee",
              "label": "🐝"
            }
          ],
          "correctAnswerId": "deer",
          "success": {
            "de": "Super! Gesucht war: Hirsch.",
            "en": "Great! The answer is deer."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es leise durch Wald und Wiesen zieht.",
            "en": "Remember this clue: It moves quietly through woods and meadows."
          }
        },
        {
          "id": "au90",
          "prompt": {
            "de": "Welches Tier gemeinsam mit seinem Rudel jagt?",
            "en": "Which animal hunts together with its pack?"
          },
          "visual": "",
          "answers": [
            {
              "id": "wolf",
              "label": "🐺"
            },
            {
              "id": "butterfly",
              "label": "🦋"
            },
            {
              "id": "polar-bear",
              "label": "🐻‍❄️"
            }
          ],
          "correctAnswerId": "wolf",
          "success": {
            "de": "Super! Gesucht war: Wolf.",
            "en": "Great! The answer is wolf."
          },
          "hint": {
            "de": "Denk an dieses Merkmal: Es gemeinsam mit seinem Rudel jagt.",
            "en": "Remember this clue: It hunts together with its pack."
          }
        }
      ]
    }
  },
  {
    "id": "letters",
    "title": {
      "de": "Buchstaben",
      "en": "Letters"
    },
    "subtitle": {
      "de": "Laute hören und Buchstaben finden",
      "en": "Hear sounds and find letters"
    },
    "icon": "ABC",
    "color": "#7A72D1",
    "lightColor": "#EAE7FF",
    "questionsByAge": {
      "discoverer": [
        {
          "id": "d2lu1",
          "prompt": {
            "de": "Navi zeigt dir A wie bei Apfel. Finde denselben großen Buchstaben.",
            "en": "Navi shows A as in apple. Find the same capital letter."
          },
          "visual": "A  🍎",
          "showNavi": true,
          "answers": [
            {
              "id": "A",
              "label": "A"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "A",
          "success": {
            "de": "Ja! Das ist das große A.",
            "en": "Yes! That is capital A."
          },
          "hint": {
            "de": "Vergleiche die Form mit A auf Navis Karte.",
            "en": "Match the shape of A on Navi's card."
          }
        },
        {
          "id": "d2lu2",
          "prompt": {
            "de": "Navi zeigt F und f wie bei Fisch. Finde das kleine f.",
            "en": "Navi shows F and f as in fish. Find lowercase f."
          },
          "visual": "F · f  🐟",
          "showNavi": true,
          "answers": [
            {
              "id": "n",
              "label": "n"
            },
            {
              "id": "f",
              "label": "f"
            }
          ],
          "correctAnswerId": "f",
          "success": {
            "de": "Richtig! F und f gehören zusammen.",
            "en": "Correct! F and f belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form f.",
            "en": "Tap the lowercase shape f."
          }
        },
        {
          "id": "d2lu3",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Maus?",
            "en": "Which first sound do you hear in mouse?"
          },
          "visual": "🐭",
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "S",
              "label": "S"
            }
          ],
          "correctAnswerId": "M",
          "success": {
            "de": "Maus beginnt mit M.",
            "en": "mouse begins with M."
          },
          "hint": {
            "de": "Höre langsam: M, Maus.",
            "en": "Listen slowly: M, mouse."
          }
        },
        {
          "id": "d2lu4",
          "prompt": {
            "de": "Navi zeigt dir A wie bei Ameise. Finde denselben großen Buchstaben.",
            "en": "Navi shows A as in ant. Find the same capital letter."
          },
          "visual": "A  🐜",
          "showNavi": true,
          "answers": [
            {
              "id": "H",
              "label": "H"
            },
            {
              "id": "A",
              "label": "A"
            }
          ],
          "correctAnswerId": "A",
          "success": {
            "de": "Ja! Das ist das große A.",
            "en": "Yes! That is capital A."
          },
          "hint": {
            "de": "Vergleiche die Form mit A auf Navis Karte.",
            "en": "Match the shape of A on Navi's card."
          }
        },
        {
          "id": "d2lu5",
          "prompt": {
            "de": "Navi zeigt G und g wie bei Giraffe. Finde das kleine g.",
            "en": "Navi shows G and g as in giraffe. Find lowercase g."
          },
          "visual": "G · g  🦒",
          "showNavi": true,
          "answers": [
            {
              "id": "g",
              "label": "g"
            },
            {
              "id": "o",
              "label": "o"
            }
          ],
          "correctAnswerId": "g",
          "success": {
            "de": "Richtig! G und g gehören zusammen.",
            "en": "Correct! G and g belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form g.",
            "en": "Tap the lowercase shape g."
          }
        },
        {
          "id": "d2lu6",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Mond?",
            "en": "Which first sound do you hear in moon?"
          },
          "visual": "🌙",
          "answers": [
            {
              "id": "S",
              "label": "S"
            },
            {
              "id": "M",
              "label": "M"
            }
          ],
          "correctAnswerId": "M",
          "success": {
            "de": "Mond beginnt mit M.",
            "en": "moon begins with M."
          },
          "hint": {
            "de": "Höre langsam: M, Mond.",
            "en": "Listen slowly: M, moon."
          }
        },
        {
          "id": "d2lu7",
          "prompt": {
            "de": "Navi zeigt dir B wie bei Banane. Finde denselben großen Buchstaben.",
            "en": "Navi shows B as in banana. Find the same capital letter."
          },
          "visual": "B  🍌",
          "showNavi": true,
          "answers": [
            {
              "id": "B",
              "label": "B"
            },
            {
              "id": "I",
              "label": "I"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Ja! Das ist das große B.",
            "en": "Yes! That is capital B."
          },
          "hint": {
            "de": "Vergleiche die Form mit B auf Navis Karte.",
            "en": "Match the shape of B on Navi's card."
          }
        },
        {
          "id": "d2lu8",
          "prompt": {
            "de": "Navi zeigt G und g wie bei Gorilla. Finde das kleine g.",
            "en": "Navi shows G and g as in gorilla. Find lowercase g."
          },
          "visual": "G · g  🦍",
          "showNavi": true,
          "answers": [
            {
              "id": "o",
              "label": "o"
            },
            {
              "id": "g",
              "label": "g"
            }
          ],
          "correctAnswerId": "g",
          "success": {
            "de": "Richtig! G und g gehören zusammen.",
            "en": "Correct! G and g belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form g.",
            "en": "Tap the lowercase shape g."
          }
        },
        {
          "id": "d2lu9",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Musik?",
            "en": "Which first sound do you hear in music?"
          },
          "visual": "🎵",
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "S",
              "label": "S"
            }
          ],
          "correctAnswerId": "M",
          "success": {
            "de": "Musik beginnt mit M.",
            "en": "music begins with M."
          },
          "hint": {
            "de": "Höre langsam: M, Musik.",
            "en": "Listen slowly: M, music."
          }
        },
        {
          "id": "d2lu10",
          "prompt": {
            "de": "Navi zeigt dir B wie bei Ball. Finde denselben großen Buchstaben.",
            "en": "Navi shows B as in ball. Find the same capital letter."
          },
          "visual": "B  ⚽",
          "showNavi": true,
          "answers": [
            {
              "id": "I",
              "label": "I"
            },
            {
              "id": "B",
              "label": "B"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Ja! Das ist das große B.",
            "en": "Yes! That is capital B."
          },
          "hint": {
            "de": "Vergleiche die Form mit B auf Navis Karte.",
            "en": "Match the shape of B on Navi's card."
          }
        },
        {
          "id": "d2lu11",
          "prompt": {
            "de": "Navi zeigt H und h wie bei Haus. Finde das kleine h.",
            "en": "Navi shows H and h as in house. Find lowercase h."
          },
          "visual": "H · h  🏠",
          "showNavi": true,
          "answers": [
            {
              "id": "h",
              "label": "h"
            },
            {
              "id": "p",
              "label": "p"
            }
          ],
          "correctAnswerId": "h",
          "success": {
            "de": "Richtig! H und h gehören zusammen.",
            "en": "Correct! H and h belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form h.",
            "en": "Tap the lowercase shape h."
          }
        },
        {
          "id": "d2lu12",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Nase?",
            "en": "Which first sound do you hear in nose?"
          },
          "visual": "👃",
          "answers": [
            {
              "id": "T",
              "label": "T"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "N",
          "success": {
            "de": "Nase beginnt mit N.",
            "en": "nose begins with N."
          },
          "hint": {
            "de": "Höre langsam: N, Nase.",
            "en": "Listen slowly: N, nose."
          }
        },
        {
          "id": "d2lu13",
          "prompt": {
            "de": "Navi zeigt dir B wie bei Bus. Finde denselben großen Buchstaben.",
            "en": "Navi shows B as in bus. Find the same capital letter."
          },
          "visual": "B  🚌",
          "showNavi": true,
          "answers": [
            {
              "id": "B",
              "label": "B"
            },
            {
              "id": "I",
              "label": "I"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Ja! Das ist das große B.",
            "en": "Yes! That is capital B."
          },
          "hint": {
            "de": "Vergleiche die Form mit B auf Navis Karte.",
            "en": "Match the shape of B on Navi's card."
          }
        },
        {
          "id": "d2lu14",
          "prompt": {
            "de": "Navi zeigt H und h wie bei Hotel. Finde das kleine h.",
            "en": "Navi shows H and h as in hotel. Find lowercase h."
          },
          "visual": "H · h  🏨",
          "showNavi": true,
          "answers": [
            {
              "id": "p",
              "label": "p"
            },
            {
              "id": "h",
              "label": "h"
            }
          ],
          "correctAnswerId": "h",
          "success": {
            "de": "Richtig! H und h gehören zusammen.",
            "en": "Correct! H and h belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form h.",
            "en": "Tap the lowercase shape h."
          }
        },
        {
          "id": "d2lu15",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Orange?",
            "en": "Which first sound do you hear in orange?"
          },
          "visual": "🍊",
          "answers": [
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "U",
              "label": "U"
            }
          ],
          "correctAnswerId": "O",
          "success": {
            "de": "Orange beginnt mit O.",
            "en": "orange begins with O."
          },
          "hint": {
            "de": "Höre langsam: O, Orange.",
            "en": "Listen slowly: O, orange."
          }
        },
        {
          "id": "d2lu16",
          "prompt": {
            "de": "Navi zeigt dir B wie bei Baby. Finde denselben großen Buchstaben.",
            "en": "Navi shows B as in baby. Find the same capital letter."
          },
          "visual": "B  👶",
          "showNavi": true,
          "answers": [
            {
              "id": "I",
              "label": "I"
            },
            {
              "id": "B",
              "label": "B"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Ja! Das ist das große B.",
            "en": "Yes! That is capital B."
          },
          "hint": {
            "de": "Vergleiche die Form mit B auf Navis Karte.",
            "en": "Match the shape of B on Navi's card."
          }
        },
        {
          "id": "d2lu17",
          "prompt": {
            "de": "Navi zeigt I und i wie bei Insel. Finde das kleine i.",
            "en": "Navi shows I and i as in island. Find lowercase i."
          },
          "visual": "I · i  🏝️",
          "showNavi": true,
          "answers": [
            {
              "id": "i",
              "label": "i"
            },
            {
              "id": "q",
              "label": "q"
            }
          ],
          "correctAnswerId": "i",
          "success": {
            "de": "Richtig! I und i gehören zusammen.",
            "en": "Correct! I and i belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form i.",
            "en": "Tap the lowercase shape i."
          }
        },
        {
          "id": "d2lu18",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Panda?",
            "en": "Which first sound do you hear in panda?"
          },
          "visual": "🐼",
          "answers": [
            {
              "id": "V",
              "label": "V"
            },
            {
              "id": "P",
              "label": "P"
            }
          ],
          "correctAnswerId": "P",
          "success": {
            "de": "Panda beginnt mit P.",
            "en": "panda begins with P."
          },
          "hint": {
            "de": "Höre langsam: P, Panda.",
            "en": "Listen slowly: P, panda."
          }
        },
        {
          "id": "d2lu19",
          "prompt": {
            "de": "Navi zeigt dir C wie bei Clown. Finde denselben großen Buchstaben.",
            "en": "Navi shows C as in clown. Find the same capital letter."
          },
          "visual": "C  🤡",
          "showNavi": true,
          "answers": [
            {
              "id": "C",
              "label": "C"
            },
            {
              "id": "J",
              "label": "J"
            }
          ],
          "correctAnswerId": "C",
          "success": {
            "de": "Ja! Das ist das große C.",
            "en": "Yes! That is capital C."
          },
          "hint": {
            "de": "Vergleiche die Form mit C auf Navis Karte.",
            "en": "Match the shape of C on Navi's card."
          }
        },
        {
          "id": "d2lu20",
          "prompt": {
            "de": "Navi zeigt J und j wie bei Jaguar. Finde das kleine j.",
            "en": "Navi shows J and j as in jaguar. Find lowercase j."
          },
          "visual": "J · j  🐆",
          "showNavi": true,
          "answers": [
            {
              "id": "r",
              "label": "r"
            },
            {
              "id": "j",
              "label": "j"
            }
          ],
          "correctAnswerId": "j",
          "success": {
            "de": "Richtig! J und j gehören zusammen.",
            "en": "Correct! J and j belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form j.",
            "en": "Tap the lowercase shape j."
          }
        },
        {
          "id": "d2lu21",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Pizza?",
            "en": "Which first sound do you hear in pizza?"
          },
          "visual": "🍕",
          "answers": [
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "V",
              "label": "V"
            }
          ],
          "correctAnswerId": "P",
          "success": {
            "de": "Pizza beginnt mit P.",
            "en": "pizza begins with P."
          },
          "hint": {
            "de": "Höre langsam: P, Pizza.",
            "en": "Listen slowly: P, pizza."
          }
        },
        {
          "id": "d2lu22",
          "prompt": {
            "de": "Navi zeigt dir D wie bei Delfin. Finde denselben großen Buchstaben.",
            "en": "Navi shows D as in dolphin. Find the same capital letter."
          },
          "visual": "D  🐬",
          "showNavi": true,
          "answers": [
            {
              "id": "K",
              "label": "K"
            },
            {
              "id": "D",
              "label": "D"
            }
          ],
          "correctAnswerId": "D",
          "success": {
            "de": "Ja! Das ist das große D.",
            "en": "Yes! That is capital D."
          },
          "hint": {
            "de": "Vergleiche die Form mit D auf Navis Karte.",
            "en": "Match the shape of D on Navi's card."
          }
        },
        {
          "id": "d2lu23",
          "prompt": {
            "de": "Navi zeigt K und k wie bei Koala. Finde das kleine k.",
            "en": "Navi shows K and k as in koala. Find lowercase k."
          },
          "visual": "K · k  🐨",
          "showNavi": true,
          "answers": [
            {
              "id": "k",
              "label": "k"
            },
            {
              "id": "s",
              "label": "s"
            }
          ],
          "correctAnswerId": "k",
          "success": {
            "de": "Richtig! K und k gehören zusammen.",
            "en": "Correct! K and k belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form k.",
            "en": "Tap the lowercase shape k."
          }
        },
        {
          "id": "d2lu24",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Pinguin?",
            "en": "Which first sound do you hear in penguin?"
          },
          "visual": "🐧",
          "answers": [
            {
              "id": "V",
              "label": "V"
            },
            {
              "id": "P",
              "label": "P"
            }
          ],
          "correctAnswerId": "P",
          "success": {
            "de": "Pinguin beginnt mit P.",
            "en": "penguin begins with P."
          },
          "hint": {
            "de": "Höre langsam: P, Pinguin.",
            "en": "Listen slowly: P, penguin."
          }
        },
        {
          "id": "d2lu25",
          "prompt": {
            "de": "Navi zeigt dir D wie bei Doktor. Finde denselben großen Buchstaben.",
            "en": "Navi shows D as in doctor. Find the same capital letter."
          },
          "visual": "D  🧑‍⚕️",
          "showNavi": true,
          "answers": [
            {
              "id": "D",
              "label": "D"
            },
            {
              "id": "K",
              "label": "K"
            }
          ],
          "correctAnswerId": "D",
          "success": {
            "de": "Ja! Das ist das große D.",
            "en": "Yes! That is capital D."
          },
          "hint": {
            "de": "Vergleiche die Form mit D auf Navis Karte.",
            "en": "Match the shape of D on Navi's card."
          }
        },
        {
          "id": "d2lu26",
          "prompt": {
            "de": "Navi zeigt L und l wie bei Löwe. Finde das kleine l.",
            "en": "Navi shows L and l as in lion. Find lowercase l."
          },
          "visual": "L · l  🦁",
          "showNavi": true,
          "answers": [
            {
              "id": "t",
              "label": "t"
            },
            {
              "id": "l",
              "label": "l"
            }
          ],
          "correctAnswerId": "l",
          "success": {
            "de": "Richtig! L und l gehören zusammen.",
            "en": "Correct! L and l belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form l.",
            "en": "Tap the lowercase shape l."
          }
        },
        {
          "id": "d2lu27",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Radio?",
            "en": "Which first sound do you hear in radio?"
          },
          "visual": "📻",
          "answers": [
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "X",
              "label": "X"
            }
          ],
          "correctAnswerId": "R",
          "success": {
            "de": "Radio beginnt mit R.",
            "en": "radio begins with R."
          },
          "hint": {
            "de": "Höre langsam: R, Radio.",
            "en": "Listen slowly: R, radio."
          }
        },
        {
          "id": "d2lu28",
          "prompt": {
            "de": "Navi zeigt dir E wie bei Elefant. Finde denselben großen Buchstaben.",
            "en": "Navi shows E as in elephant. Find the same capital letter."
          },
          "visual": "E  🐘",
          "showNavi": true,
          "answers": [
            {
              "id": "L",
              "label": "L"
            },
            {
              "id": "E",
              "label": "E"
            }
          ],
          "correctAnswerId": "E",
          "success": {
            "de": "Ja! Das ist das große E.",
            "en": "Yes! That is capital E."
          },
          "hint": {
            "de": "Vergleiche die Form mit E auf Navis Karte.",
            "en": "Match the shape of E on Navi's card."
          }
        },
        {
          "id": "d2lu29",
          "prompt": {
            "de": "Navi zeigt L und l wie bei Lampe. Finde das kleine l.",
            "en": "Navi shows L and l as in lamp. Find lowercase l."
          },
          "visual": "L · l  💡",
          "showNavi": true,
          "answers": [
            {
              "id": "l",
              "label": "l"
            },
            {
              "id": "t",
              "label": "t"
            }
          ],
          "correctAnswerId": "l",
          "success": {
            "de": "Richtig! L und l gehören zusammen.",
            "en": "Correct! L and l belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form l.",
            "en": "Tap the lowercase shape l."
          }
        },
        {
          "id": "d2lu30",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Rose?",
            "en": "Which first sound do you hear in rose?"
          },
          "visual": "🌹",
          "answers": [
            {
              "id": "X",
              "label": "X"
            },
            {
              "id": "R",
              "label": "R"
            }
          ],
          "correctAnswerId": "R",
          "success": {
            "de": "Rose beginnt mit R.",
            "en": "rose begins with R."
          },
          "hint": {
            "de": "Höre langsam: R, Rose.",
            "en": "Listen slowly: R, rose."
          }
        },
        {
          "id": "d2lu31",
          "prompt": {
            "de": "Navi zeigt dir F wie bei Fisch. Finde denselben großen Buchstaben.",
            "en": "Navi shows F as in fish. Find the same capital letter."
          },
          "visual": "F  🐟",
          "showNavi": true,
          "answers": [
            {
              "id": "F",
              "label": "F"
            },
            {
              "id": "M",
              "label": "M"
            }
          ],
          "correctAnswerId": "F",
          "success": {
            "de": "Ja! Das ist das große F.",
            "en": "Yes! That is capital F."
          },
          "hint": {
            "de": "Vergleiche die Form mit F auf Navis Karte.",
            "en": "Match the shape of F on Navi's card."
          }
        },
        {
          "id": "d2lu32",
          "prompt": {
            "de": "Navi zeigt M und m wie bei Maus. Finde das kleine m.",
            "en": "Navi shows M and m as in mouse. Find lowercase m."
          },
          "visual": "M · m  🐭",
          "showNavi": true,
          "answers": [
            {
              "id": "u",
              "label": "u"
            },
            {
              "id": "m",
              "label": "m"
            }
          ],
          "correctAnswerId": "m",
          "success": {
            "de": "Richtig! M und m gehören zusammen.",
            "en": "Correct! M and m belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form m.",
            "en": "Tap the lowercase shape m."
          }
        },
        {
          "id": "d2lu33",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Apfel?",
            "en": "Which first sound do you hear in apple?"
          },
          "visual": "🍎",
          "answers": [
            {
              "id": "A",
              "label": "A"
            },
            {
              "id": "G",
              "label": "G"
            }
          ],
          "correctAnswerId": "A",
          "success": {
            "de": "Apfel beginnt mit A.",
            "en": "apple begins with A."
          },
          "hint": {
            "de": "Höre langsam: A, Apfel.",
            "en": "Listen slowly: A, apple."
          }
        },
        {
          "id": "d2lu34",
          "prompt": {
            "de": "Navi zeigt dir G wie bei Giraffe. Finde denselben großen Buchstaben.",
            "en": "Navi shows G as in giraffe. Find the same capital letter."
          },
          "visual": "G  🦒",
          "showNavi": true,
          "answers": [
            {
              "id": "N",
              "label": "N"
            },
            {
              "id": "G",
              "label": "G"
            }
          ],
          "correctAnswerId": "G",
          "success": {
            "de": "Ja! Das ist das große G.",
            "en": "Yes! That is capital G."
          },
          "hint": {
            "de": "Vergleiche die Form mit G auf Navis Karte.",
            "en": "Match the shape of G on Navi's card."
          }
        },
        {
          "id": "d2lu35",
          "prompt": {
            "de": "Navi zeigt M und m wie bei Mond. Finde das kleine m.",
            "en": "Navi shows M and m as in moon. Find lowercase m."
          },
          "visual": "M · m  🌙",
          "showNavi": true,
          "answers": [
            {
              "id": "m",
              "label": "m"
            },
            {
              "id": "u",
              "label": "u"
            }
          ],
          "correctAnswerId": "m",
          "success": {
            "de": "Richtig! M und m gehören zusammen.",
            "en": "Correct! M and m belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form m.",
            "en": "Tap the lowercase shape m."
          }
        },
        {
          "id": "d2lu36",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Ameise?",
            "en": "Which first sound do you hear in ant?"
          },
          "visual": "🐜",
          "answers": [
            {
              "id": "G",
              "label": "G"
            },
            {
              "id": "A",
              "label": "A"
            }
          ],
          "correctAnswerId": "A",
          "success": {
            "de": "Ameise beginnt mit A.",
            "en": "ant begins with A."
          },
          "hint": {
            "de": "Höre langsam: A, Ameise.",
            "en": "Listen slowly: A, ant."
          }
        },
        {
          "id": "d2lu37",
          "prompt": {
            "de": "Navi zeigt dir G wie bei Gorilla. Finde denselben großen Buchstaben.",
            "en": "Navi shows G as in gorilla. Find the same capital letter."
          },
          "visual": "G  🦍",
          "showNavi": true,
          "answers": [
            {
              "id": "G",
              "label": "G"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "G",
          "success": {
            "de": "Ja! Das ist das große G.",
            "en": "Yes! That is capital G."
          },
          "hint": {
            "de": "Vergleiche die Form mit G auf Navis Karte.",
            "en": "Match the shape of G on Navi's card."
          }
        },
        {
          "id": "d2lu38",
          "prompt": {
            "de": "Navi zeigt M und m wie bei Musik. Finde das kleine m.",
            "en": "Navi shows M and m as in music. Find lowercase m."
          },
          "visual": "M · m  🎵",
          "showNavi": true,
          "answers": [
            {
              "id": "u",
              "label": "u"
            },
            {
              "id": "m",
              "label": "m"
            }
          ],
          "correctAnswerId": "m",
          "success": {
            "de": "Richtig! M und m gehören zusammen.",
            "en": "Correct! M and m belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form m.",
            "en": "Tap the lowercase shape m."
          }
        },
        {
          "id": "d2lu39",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Banane?",
            "en": "Which first sound do you hear in banana?"
          },
          "visual": "🍌",
          "answers": [
            {
              "id": "B",
              "label": "B"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Banane beginnt mit B.",
            "en": "banana begins with B."
          },
          "hint": {
            "de": "Höre langsam: B, Banane.",
            "en": "Listen slowly: B, banana."
          }
        },
        {
          "id": "d2lu40",
          "prompt": {
            "de": "Navi zeigt dir H wie bei Haus. Finde denselben großen Buchstaben.",
            "en": "Navi shows H as in house. Find the same capital letter."
          },
          "visual": "H  🏠",
          "showNavi": true,
          "answers": [
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "H",
          "success": {
            "de": "Ja! Das ist das große H.",
            "en": "Yes! That is capital H."
          },
          "hint": {
            "de": "Vergleiche die Form mit H auf Navis Karte.",
            "en": "Match the shape of H on Navi's card."
          }
        },
        {
          "id": "d2lu41",
          "prompt": {
            "de": "Navi zeigt N und n wie bei Nase. Finde das kleine n.",
            "en": "Navi shows N and n as in nose. Find lowercase n."
          },
          "visual": "N · n  👃",
          "showNavi": true,
          "answers": [
            {
              "id": "n",
              "label": "n"
            },
            {
              "id": "v",
              "label": "v"
            }
          ],
          "correctAnswerId": "n",
          "success": {
            "de": "Richtig! N und n gehören zusammen.",
            "en": "Correct! N and n belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form n.",
            "en": "Tap the lowercase shape n."
          }
        },
        {
          "id": "d2lu42",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Ball?",
            "en": "Which first sound do you hear in ball?"
          },
          "visual": "⚽",
          "answers": [
            {
              "id": "H",
              "label": "H"
            },
            {
              "id": "B",
              "label": "B"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Ball beginnt mit B.",
            "en": "ball begins with B."
          },
          "hint": {
            "de": "Höre langsam: B, Ball.",
            "en": "Listen slowly: B, ball."
          }
        },
        {
          "id": "d2lu43",
          "prompt": {
            "de": "Navi zeigt dir H wie bei Hotel. Finde denselben großen Buchstaben.",
            "en": "Navi shows H as in hotel. Find the same capital letter."
          },
          "visual": "H  🏨",
          "showNavi": true,
          "answers": [
            {
              "id": "H",
              "label": "H"
            },
            {
              "id": "O",
              "label": "O"
            }
          ],
          "correctAnswerId": "H",
          "success": {
            "de": "Ja! Das ist das große H.",
            "en": "Yes! That is capital H."
          },
          "hint": {
            "de": "Vergleiche die Form mit H auf Navis Karte.",
            "en": "Match the shape of H on Navi's card."
          }
        },
        {
          "id": "d2lu44",
          "prompt": {
            "de": "Navi zeigt O und o wie bei Orange. Finde das kleine o.",
            "en": "Navi shows O and o as in orange. Find lowercase o."
          },
          "visual": "O · o  🍊",
          "showNavi": true,
          "answers": [
            {
              "id": "w",
              "label": "w"
            },
            {
              "id": "o",
              "label": "o"
            }
          ],
          "correctAnswerId": "o",
          "success": {
            "de": "Richtig! O und o gehören zusammen.",
            "en": "Correct! O and o belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form o.",
            "en": "Tap the lowercase shape o."
          }
        },
        {
          "id": "d2lu45",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Bus?",
            "en": "Which first sound do you hear in bus?"
          },
          "visual": "🚌",
          "answers": [
            {
              "id": "B",
              "label": "B"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Bus beginnt mit B.",
            "en": "bus begins with B."
          },
          "hint": {
            "de": "Höre langsam: B, Bus.",
            "en": "Listen slowly: B, bus."
          }
        },
        {
          "id": "d2lu46",
          "prompt": {
            "de": "Navi zeigt dir I wie bei Insel. Finde denselben großen Buchstaben.",
            "en": "Navi shows I as in island. Find the same capital letter."
          },
          "visual": "I  🏝️",
          "showNavi": true,
          "answers": [
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "I",
              "label": "I"
            }
          ],
          "correctAnswerId": "I",
          "success": {
            "de": "Ja! Das ist das große I.",
            "en": "Yes! That is capital I."
          },
          "hint": {
            "de": "Vergleiche die Form mit I auf Navis Karte.",
            "en": "Match the shape of I on Navi's card."
          }
        },
        {
          "id": "d2lu47",
          "prompt": {
            "de": "Navi zeigt P und p wie bei Panda. Finde das kleine p.",
            "en": "Navi shows P and p as in panda. Find lowercase p."
          },
          "visual": "P · p  🐼",
          "showNavi": true,
          "answers": [
            {
              "id": "p",
              "label": "p"
            },
            {
              "id": "x",
              "label": "x"
            }
          ],
          "correctAnswerId": "p",
          "success": {
            "de": "Richtig! P und p gehören zusammen.",
            "en": "Correct! P and p belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form p.",
            "en": "Tap the lowercase shape p."
          }
        },
        {
          "id": "d2lu48",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Baby?",
            "en": "Which first sound do you hear in baby?"
          },
          "visual": "👶",
          "answers": [
            {
              "id": "H",
              "label": "H"
            },
            {
              "id": "B",
              "label": "B"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Baby beginnt mit B.",
            "en": "baby begins with B."
          },
          "hint": {
            "de": "Höre langsam: B, Baby.",
            "en": "Listen slowly: B, baby."
          }
        },
        {
          "id": "d2lu49",
          "prompt": {
            "de": "Navi zeigt dir J wie bei Jaguar. Finde denselben großen Buchstaben.",
            "en": "Navi shows J as in jaguar. Find the same capital letter."
          },
          "visual": "J  🐆",
          "showNavi": true,
          "answers": [
            {
              "id": "J",
              "label": "J"
            },
            {
              "id": "Q",
              "label": "Q"
            }
          ],
          "correctAnswerId": "J",
          "success": {
            "de": "Ja! Das ist das große J.",
            "en": "Yes! That is capital J."
          },
          "hint": {
            "de": "Vergleiche die Form mit J auf Navis Karte.",
            "en": "Match the shape of J on Navi's card."
          }
        },
        {
          "id": "d2lu50",
          "prompt": {
            "de": "Navi zeigt P und p wie bei Pizza. Finde das kleine p.",
            "en": "Navi shows P and p as in pizza. Find lowercase p."
          },
          "visual": "P · p  🍕",
          "showNavi": true,
          "answers": [
            {
              "id": "x",
              "label": "x"
            },
            {
              "id": "p",
              "label": "p"
            }
          ],
          "correctAnswerId": "p",
          "success": {
            "de": "Richtig! P und p gehören zusammen.",
            "en": "Correct! P and p belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form p.",
            "en": "Tap the lowercase shape p."
          }
        },
        {
          "id": "d2lu51",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Clown?",
            "en": "Which first sound do you hear in clown?"
          },
          "visual": "🤡",
          "answers": [
            {
              "id": "C",
              "label": "C"
            },
            {
              "id": "I",
              "label": "I"
            }
          ],
          "correctAnswerId": "C",
          "success": {
            "de": "Clown beginnt mit C.",
            "en": "clown begins with C."
          },
          "hint": {
            "de": "Höre langsam: C, Clown.",
            "en": "Listen slowly: C, clown."
          }
        },
        {
          "id": "d2lu52",
          "prompt": {
            "de": "Navi zeigt dir K wie bei Koala. Finde denselben großen Buchstaben.",
            "en": "Navi shows K as in koala. Find the same capital letter."
          },
          "visual": "K  🐨",
          "showNavi": true,
          "answers": [
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "K",
              "label": "K"
            }
          ],
          "correctAnswerId": "K",
          "success": {
            "de": "Ja! Das ist das große K.",
            "en": "Yes! That is capital K."
          },
          "hint": {
            "de": "Vergleiche die Form mit K auf Navis Karte.",
            "en": "Match the shape of K on Navi's card."
          }
        },
        {
          "id": "d2lu53",
          "prompt": {
            "de": "Navi zeigt P und p wie bei Pinguin. Finde das kleine p.",
            "en": "Navi shows P and p as in penguin. Find lowercase p."
          },
          "visual": "P · p  🐧",
          "showNavi": true,
          "answers": [
            {
              "id": "p",
              "label": "p"
            },
            {
              "id": "x",
              "label": "x"
            }
          ],
          "correctAnswerId": "p",
          "success": {
            "de": "Richtig! P und p gehören zusammen.",
            "en": "Correct! P and p belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form p.",
            "en": "Tap the lowercase shape p."
          }
        },
        {
          "id": "d2lu54",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Delfin?",
            "en": "Which first sound do you hear in dolphin?"
          },
          "visual": "🐬",
          "answers": [
            {
              "id": "J",
              "label": "J"
            },
            {
              "id": "D",
              "label": "D"
            }
          ],
          "correctAnswerId": "D",
          "success": {
            "de": "Delfin beginnt mit D.",
            "en": "dolphin begins with D."
          },
          "hint": {
            "de": "Höre langsam: D, Delfin.",
            "en": "Listen slowly: D, dolphin."
          }
        },
        {
          "id": "d2lu55",
          "prompt": {
            "de": "Navi zeigt dir L wie bei Löwe. Finde denselben großen Buchstaben.",
            "en": "Navi shows L as in lion. Find the same capital letter."
          },
          "visual": "L  🦁",
          "showNavi": true,
          "answers": [
            {
              "id": "L",
              "label": "L"
            },
            {
              "id": "S",
              "label": "S"
            }
          ],
          "correctAnswerId": "L",
          "success": {
            "de": "Ja! Das ist das große L.",
            "en": "Yes! That is capital L."
          },
          "hint": {
            "de": "Vergleiche die Form mit L auf Navis Karte.",
            "en": "Match the shape of L on Navi's card."
          }
        },
        {
          "id": "d2lu56",
          "prompt": {
            "de": "Navi zeigt R und r wie bei Radio. Finde das kleine r.",
            "en": "Navi shows R and r as in radio. Find lowercase r."
          },
          "visual": "R · r  📻",
          "showNavi": true,
          "answers": [
            {
              "id": "z",
              "label": "z"
            },
            {
              "id": "r",
              "label": "r"
            }
          ],
          "correctAnswerId": "r",
          "success": {
            "de": "Richtig! R und r gehören zusammen.",
            "en": "Correct! R and r belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form r.",
            "en": "Tap the lowercase shape r."
          }
        },
        {
          "id": "d2lu57",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Doktor?",
            "en": "Which first sound do you hear in doctor?"
          },
          "visual": "🧑‍⚕️",
          "answers": [
            {
              "id": "D",
              "label": "D"
            },
            {
              "id": "J",
              "label": "J"
            }
          ],
          "correctAnswerId": "D",
          "success": {
            "de": "Doktor beginnt mit D.",
            "en": "doctor begins with D."
          },
          "hint": {
            "de": "Höre langsam: D, Doktor.",
            "en": "Listen slowly: D, doctor."
          }
        },
        {
          "id": "d2lu58",
          "prompt": {
            "de": "Navi zeigt dir L wie bei Lampe. Finde denselben großen Buchstaben.",
            "en": "Navi shows L as in lamp. Find the same capital letter."
          },
          "visual": "L  💡",
          "showNavi": true,
          "answers": [
            {
              "id": "S",
              "label": "S"
            },
            {
              "id": "L",
              "label": "L"
            }
          ],
          "correctAnswerId": "L",
          "success": {
            "de": "Ja! Das ist das große L.",
            "en": "Yes! That is capital L."
          },
          "hint": {
            "de": "Vergleiche die Form mit L auf Navis Karte.",
            "en": "Match the shape of L on Navi's card."
          }
        },
        {
          "id": "d2lu59",
          "prompt": {
            "de": "Navi zeigt R und r wie bei Rose. Finde das kleine r.",
            "en": "Navi shows R and r as in rose. Find lowercase r."
          },
          "visual": "R · r  🌹",
          "showNavi": true,
          "answers": [
            {
              "id": "r",
              "label": "r"
            },
            {
              "id": "z",
              "label": "z"
            }
          ],
          "correctAnswerId": "r",
          "success": {
            "de": "Richtig! R und r gehören zusammen.",
            "en": "Correct! R and r belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form r.",
            "en": "Tap the lowercase shape r."
          }
        },
        {
          "id": "d2lu60",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Elefant?",
            "en": "Which first sound do you hear in elephant?"
          },
          "visual": "🐘",
          "answers": [
            {
              "id": "K",
              "label": "K"
            },
            {
              "id": "E",
              "label": "E"
            }
          ],
          "correctAnswerId": "E",
          "success": {
            "de": "Elefant beginnt mit E.",
            "en": "elephant begins with E."
          },
          "hint": {
            "de": "Höre langsam: E, Elefant.",
            "en": "Listen slowly: E, elephant."
          }
        },
        {
          "id": "d2lu61",
          "prompt": {
            "de": "Navi zeigt dir M wie bei Maus. Finde denselben großen Buchstaben.",
            "en": "Navi shows M as in mouse. Find the same capital letter."
          },
          "visual": "M  🐭",
          "showNavi": true,
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "T",
              "label": "T"
            }
          ],
          "correctAnswerId": "M",
          "success": {
            "de": "Ja! Das ist das große M.",
            "en": "Yes! That is capital M."
          },
          "hint": {
            "de": "Vergleiche die Form mit M auf Navis Karte.",
            "en": "Match the shape of M on Navi's card."
          }
        },
        {
          "id": "d2lu62",
          "prompt": {
            "de": "Navi zeigt A und a wie bei Apfel. Finde das kleine a.",
            "en": "Navi shows A and a as in apple. Find lowercase a."
          },
          "visual": "A · a  🍎",
          "showNavi": true,
          "answers": [
            {
              "id": "i",
              "label": "i"
            },
            {
              "id": "a",
              "label": "a"
            }
          ],
          "correctAnswerId": "a",
          "success": {
            "de": "Richtig! A und a gehören zusammen.",
            "en": "Correct! A and a belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form a.",
            "en": "Tap the lowercase shape a."
          }
        },
        {
          "id": "d2lu63",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Fisch?",
            "en": "Which first sound do you hear in fish?"
          },
          "visual": "🐟",
          "answers": [
            {
              "id": "F",
              "label": "F"
            },
            {
              "id": "L",
              "label": "L"
            }
          ],
          "correctAnswerId": "F",
          "success": {
            "de": "Fisch beginnt mit F.",
            "en": "fish begins with F."
          },
          "hint": {
            "de": "Höre langsam: F, Fisch.",
            "en": "Listen slowly: F, fish."
          }
        },
        {
          "id": "d2lu64",
          "prompt": {
            "de": "Navi zeigt dir M wie bei Mond. Finde denselben großen Buchstaben.",
            "en": "Navi shows M as in moon. Find the same capital letter."
          },
          "visual": "M  🌙",
          "showNavi": true,
          "answers": [
            {
              "id": "T",
              "label": "T"
            },
            {
              "id": "M",
              "label": "M"
            }
          ],
          "correctAnswerId": "M",
          "success": {
            "de": "Ja! Das ist das große M.",
            "en": "Yes! That is capital M."
          },
          "hint": {
            "de": "Vergleiche die Form mit M auf Navis Karte.",
            "en": "Match the shape of M on Navi's card."
          }
        },
        {
          "id": "d2lu65",
          "prompt": {
            "de": "Navi zeigt A und a wie bei Ameise. Finde das kleine a.",
            "en": "Navi shows A and a as in ant. Find lowercase a."
          },
          "visual": "A · a  🐜",
          "showNavi": true,
          "answers": [
            {
              "id": "a",
              "label": "a"
            },
            {
              "id": "i",
              "label": "i"
            }
          ],
          "correctAnswerId": "a",
          "success": {
            "de": "Richtig! A und a gehören zusammen.",
            "en": "Correct! A and a belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form a.",
            "en": "Tap the lowercase shape a."
          }
        },
        {
          "id": "d2lu66",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Giraffe?",
            "en": "Which first sound do you hear in giraffe?"
          },
          "visual": "🦒",
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "G",
              "label": "G"
            }
          ],
          "correctAnswerId": "G",
          "success": {
            "de": "Giraffe beginnt mit G.",
            "en": "giraffe begins with G."
          },
          "hint": {
            "de": "Höre langsam: G, Giraffe.",
            "en": "Listen slowly: G, giraffe."
          }
        },
        {
          "id": "d2lu67",
          "prompt": {
            "de": "Navi zeigt dir M wie bei Musik. Finde denselben großen Buchstaben.",
            "en": "Navi shows M as in music. Find the same capital letter."
          },
          "visual": "M  🎵",
          "showNavi": true,
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "T",
              "label": "T"
            }
          ],
          "correctAnswerId": "M",
          "success": {
            "de": "Ja! Das ist das große M.",
            "en": "Yes! That is capital M."
          },
          "hint": {
            "de": "Vergleiche die Form mit M auf Navis Karte.",
            "en": "Match the shape of M on Navi's card."
          }
        },
        {
          "id": "d2lu68",
          "prompt": {
            "de": "Navi zeigt B und b wie bei Banane. Finde das kleine b.",
            "en": "Navi shows B and b as in banana. Find lowercase b."
          },
          "visual": "B · b  🍌",
          "showNavi": true,
          "answers": [
            {
              "id": "j",
              "label": "j"
            },
            {
              "id": "b",
              "label": "b"
            }
          ],
          "correctAnswerId": "b",
          "success": {
            "de": "Richtig! B und b gehören zusammen.",
            "en": "Correct! B and b belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form b.",
            "en": "Tap the lowercase shape b."
          }
        },
        {
          "id": "d2lu69",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Gorilla?",
            "en": "Which first sound do you hear in gorilla?"
          },
          "visual": "🦍",
          "answers": [
            {
              "id": "G",
              "label": "G"
            },
            {
              "id": "M",
              "label": "M"
            }
          ],
          "correctAnswerId": "G",
          "success": {
            "de": "Gorilla beginnt mit G.",
            "en": "gorilla begins with G."
          },
          "hint": {
            "de": "Höre langsam: G, Gorilla.",
            "en": "Listen slowly: G, gorilla."
          }
        },
        {
          "id": "d2lu70",
          "prompt": {
            "de": "Navi zeigt dir N wie bei Nase. Finde denselben großen Buchstaben.",
            "en": "Navi shows N as in nose. Find the same capital letter."
          },
          "visual": "N  👃",
          "showNavi": true,
          "answers": [
            {
              "id": "U",
              "label": "U"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "N",
          "success": {
            "de": "Ja! Das ist das große N.",
            "en": "Yes! That is capital N."
          },
          "hint": {
            "de": "Vergleiche die Form mit N auf Navis Karte.",
            "en": "Match the shape of N on Navi's card."
          }
        },
        {
          "id": "d2lu71",
          "prompt": {
            "de": "Navi zeigt B und b wie bei Ball. Finde das kleine b.",
            "en": "Navi shows B and b as in ball. Find lowercase b."
          },
          "visual": "B · b  ⚽",
          "showNavi": true,
          "answers": [
            {
              "id": "b",
              "label": "b"
            },
            {
              "id": "j",
              "label": "j"
            }
          ],
          "correctAnswerId": "b",
          "success": {
            "de": "Richtig! B und b gehören zusammen.",
            "en": "Correct! B and b belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form b.",
            "en": "Tap the lowercase shape b."
          }
        },
        {
          "id": "d2lu72",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Haus?",
            "en": "Which first sound do you hear in house?"
          },
          "visual": "🏠",
          "answers": [
            {
              "id": "N",
              "label": "N"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "H",
          "success": {
            "de": "Haus beginnt mit H.",
            "en": "house begins with H."
          },
          "hint": {
            "de": "Höre langsam: H, Haus.",
            "en": "Listen slowly: H, house."
          }
        },
        {
          "id": "d2lu73",
          "prompt": {
            "de": "Navi zeigt dir O wie bei Orange. Finde denselben großen Buchstaben.",
            "en": "Navi shows O as in orange. Find the same capital letter."
          },
          "visual": "O  🍊",
          "showNavi": true,
          "answers": [
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "V",
              "label": "V"
            }
          ],
          "correctAnswerId": "O",
          "success": {
            "de": "Ja! Das ist das große O.",
            "en": "Yes! That is capital O."
          },
          "hint": {
            "de": "Vergleiche die Form mit O auf Navis Karte.",
            "en": "Match the shape of O on Navi's card."
          }
        },
        {
          "id": "d2lu74",
          "prompt": {
            "de": "Navi zeigt B und b wie bei Bus. Finde das kleine b.",
            "en": "Navi shows B and b as in bus. Find lowercase b."
          },
          "visual": "B · b  🚌",
          "showNavi": true,
          "answers": [
            {
              "id": "j",
              "label": "j"
            },
            {
              "id": "b",
              "label": "b"
            }
          ],
          "correctAnswerId": "b",
          "success": {
            "de": "Richtig! B und b gehören zusammen.",
            "en": "Correct! B and b belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form b.",
            "en": "Tap the lowercase shape b."
          }
        },
        {
          "id": "d2lu75",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Hotel?",
            "en": "Which first sound do you hear in hotel?"
          },
          "visual": "🏨",
          "answers": [
            {
              "id": "H",
              "label": "H"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "H",
          "success": {
            "de": "Hotel beginnt mit H.",
            "en": "hotel begins with H."
          },
          "hint": {
            "de": "Höre langsam: H, Hotel.",
            "en": "Listen slowly: H, hotel."
          }
        },
        {
          "id": "d2lu76",
          "prompt": {
            "de": "Navi zeigt dir P wie bei Panda. Finde denselben großen Buchstaben.",
            "en": "Navi shows P as in panda. Find the same capital letter."
          },
          "visual": "P  🐼",
          "showNavi": true,
          "answers": [
            {
              "id": "W",
              "label": "W"
            },
            {
              "id": "P",
              "label": "P"
            }
          ],
          "correctAnswerId": "P",
          "success": {
            "de": "Ja! Das ist das große P.",
            "en": "Yes! That is capital P."
          },
          "hint": {
            "de": "Vergleiche die Form mit P auf Navis Karte.",
            "en": "Match the shape of P on Navi's card."
          }
        },
        {
          "id": "d2lu77",
          "prompt": {
            "de": "Navi zeigt B und b wie bei Baby. Finde das kleine b.",
            "en": "Navi shows B and b as in baby. Find lowercase b."
          },
          "visual": "B · b  👶",
          "showNavi": true,
          "answers": [
            {
              "id": "b",
              "label": "b"
            },
            {
              "id": "j",
              "label": "j"
            }
          ],
          "correctAnswerId": "b",
          "success": {
            "de": "Richtig! B und b gehören zusammen.",
            "en": "Correct! B and b belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form b.",
            "en": "Tap the lowercase shape b."
          }
        },
        {
          "id": "d2lu78",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Insel?",
            "en": "Which first sound do you hear in island?"
          },
          "visual": "🏝️",
          "answers": [
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "I",
              "label": "I"
            }
          ],
          "correctAnswerId": "I",
          "success": {
            "de": "Insel beginnt mit I.",
            "en": "island begins with I."
          },
          "hint": {
            "de": "Höre langsam: I, Insel.",
            "en": "Listen slowly: I, island."
          }
        },
        {
          "id": "d2lu79",
          "prompt": {
            "de": "Navi zeigt dir P wie bei Pizza. Finde denselben großen Buchstaben.",
            "en": "Navi shows P as in pizza. Find the same capital letter."
          },
          "visual": "P  🍕",
          "showNavi": true,
          "answers": [
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "W",
              "label": "W"
            }
          ],
          "correctAnswerId": "P",
          "success": {
            "de": "Ja! Das ist das große P.",
            "en": "Yes! That is capital P."
          },
          "hint": {
            "de": "Vergleiche die Form mit P auf Navis Karte.",
            "en": "Match the shape of P on Navi's card."
          }
        },
        {
          "id": "d2lu80",
          "prompt": {
            "de": "Navi zeigt C und c wie bei Clown. Finde das kleine c.",
            "en": "Navi shows C and c as in clown. Find lowercase c."
          },
          "visual": "C · c  🤡",
          "showNavi": true,
          "answers": [
            {
              "id": "k",
              "label": "k"
            },
            {
              "id": "c",
              "label": "c"
            }
          ],
          "correctAnswerId": "c",
          "success": {
            "de": "Richtig! C und c gehören zusammen.",
            "en": "Correct! C and c belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form c.",
            "en": "Tap the lowercase shape c."
          }
        },
        {
          "id": "d2lu81",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Jaguar?",
            "en": "Which first sound do you hear in jaguar?"
          },
          "visual": "🐆",
          "answers": [
            {
              "id": "J",
              "label": "J"
            },
            {
              "id": "P",
              "label": "P"
            }
          ],
          "correctAnswerId": "J",
          "success": {
            "de": "Jaguar beginnt mit J.",
            "en": "jaguar begins with J."
          },
          "hint": {
            "de": "Höre langsam: J, Jaguar.",
            "en": "Listen slowly: J, jaguar."
          }
        },
        {
          "id": "d2lu82",
          "prompt": {
            "de": "Navi zeigt dir P wie bei Pinguin. Finde denselben großen Buchstaben.",
            "en": "Navi shows P as in penguin. Find the same capital letter."
          },
          "visual": "P  🐧",
          "showNavi": true,
          "answers": [
            {
              "id": "W",
              "label": "W"
            },
            {
              "id": "P",
              "label": "P"
            }
          ],
          "correctAnswerId": "P",
          "success": {
            "de": "Ja! Das ist das große P.",
            "en": "Yes! That is capital P."
          },
          "hint": {
            "de": "Vergleiche die Form mit P auf Navis Karte.",
            "en": "Match the shape of P on Navi's card."
          }
        },
        {
          "id": "d2lu83",
          "prompt": {
            "de": "Navi zeigt D und d wie bei Delfin. Finde das kleine d.",
            "en": "Navi shows D and d as in dolphin. Find lowercase d."
          },
          "visual": "D · d  🐬",
          "showNavi": true,
          "answers": [
            {
              "id": "d",
              "label": "d"
            },
            {
              "id": "l",
              "label": "l"
            }
          ],
          "correctAnswerId": "d",
          "success": {
            "de": "Richtig! D und d gehören zusammen.",
            "en": "Correct! D and d belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form d.",
            "en": "Tap the lowercase shape d."
          }
        },
        {
          "id": "d2lu84",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Koala?",
            "en": "Which first sound do you hear in koala?"
          },
          "visual": "🐨",
          "answers": [
            {
              "id": "Q",
              "label": "Q"
            },
            {
              "id": "K",
              "label": "K"
            }
          ],
          "correctAnswerId": "K",
          "success": {
            "de": "Koala beginnt mit K.",
            "en": "koala begins with K."
          },
          "hint": {
            "de": "Höre langsam: K, Koala.",
            "en": "Listen slowly: K, koala."
          }
        },
        {
          "id": "d2lu85",
          "prompt": {
            "de": "Navi zeigt dir R wie bei Radio. Finde denselben großen Buchstaben.",
            "en": "Navi shows R as in radio. Find the same capital letter."
          },
          "visual": "R  📻",
          "showNavi": true,
          "answers": [
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "Y",
              "label": "Y"
            }
          ],
          "correctAnswerId": "R",
          "success": {
            "de": "Ja! Das ist das große R.",
            "en": "Yes! That is capital R."
          },
          "hint": {
            "de": "Vergleiche die Form mit R auf Navis Karte.",
            "en": "Match the shape of R on Navi's card."
          }
        },
        {
          "id": "d2lu86",
          "prompt": {
            "de": "Navi zeigt D und d wie bei Doktor. Finde das kleine d.",
            "en": "Navi shows D and d as in doctor. Find lowercase d."
          },
          "visual": "D · d  🧑‍⚕️",
          "showNavi": true,
          "answers": [
            {
              "id": "l",
              "label": "l"
            },
            {
              "id": "d",
              "label": "d"
            }
          ],
          "correctAnswerId": "d",
          "success": {
            "de": "Richtig! D und d gehören zusammen.",
            "en": "Correct! D and d belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form d.",
            "en": "Tap the lowercase shape d."
          }
        },
        {
          "id": "d2lu87",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Löwe?",
            "en": "Which first sound do you hear in lion?"
          },
          "visual": "🦁",
          "answers": [
            {
              "id": "L",
              "label": "L"
            },
            {
              "id": "R",
              "label": "R"
            }
          ],
          "correctAnswerId": "L",
          "success": {
            "de": "Löwe beginnt mit L.",
            "en": "lion begins with L."
          },
          "hint": {
            "de": "Höre langsam: L, Löwe.",
            "en": "Listen slowly: L, lion."
          }
        },
        {
          "id": "d2lu88",
          "prompt": {
            "de": "Navi zeigt dir R wie bei Rose. Finde denselben großen Buchstaben.",
            "en": "Navi shows R as in rose. Find the same capital letter."
          },
          "visual": "R  🌹",
          "showNavi": true,
          "answers": [
            {
              "id": "Y",
              "label": "Y"
            },
            {
              "id": "R",
              "label": "R"
            }
          ],
          "correctAnswerId": "R",
          "success": {
            "de": "Ja! Das ist das große R.",
            "en": "Yes! That is capital R."
          },
          "hint": {
            "de": "Vergleiche die Form mit R auf Navis Karte.",
            "en": "Match the shape of R on Navi's card."
          }
        },
        {
          "id": "d2lu89",
          "prompt": {
            "de": "Navi zeigt E und e wie bei Elefant. Finde das kleine e.",
            "en": "Navi shows E and e as in elephant. Find lowercase e."
          },
          "visual": "E · e  🐘",
          "showNavi": true,
          "answers": [
            {
              "id": "e",
              "label": "e"
            },
            {
              "id": "m",
              "label": "m"
            }
          ],
          "correctAnswerId": "e",
          "success": {
            "de": "Richtig! E und e gehören zusammen.",
            "en": "Correct! E and e belong together."
          },
          "hint": {
            "de": "Tippe auf die kleine Form e.",
            "en": "Tap the lowercase shape e."
          }
        },
        {
          "id": "d2lu90",
          "prompt": {
            "de": "Welchen Anfangslaut hörst du bei Lampe?",
            "en": "Which first sound do you hear in lamp?"
          },
          "visual": "💡",
          "answers": [
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "L",
              "label": "L"
            }
          ],
          "correctAnswerId": "L",
          "success": {
            "de": "Lampe beginnt mit L.",
            "en": "lamp begins with L."
          },
          "hint": {
            "de": "Höre langsam: L, Lampe.",
            "en": "Listen slowly: L, lamp."
          }
        }
      ],
      "adventurer": [
        {
          "id": "lu1",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben A.",
            "en": "Tap the capital letter A."
          },
          "visual": "A",
          "answers": [
            {
              "id": "A",
              "label": "A"
            },
            {
              "id": "F",
              "label": "F"
            },
            {
              "id": "L",
              "label": "L"
            }
          ],
          "correctAnswerId": "A",
          "success": {
            "de": "Richtig! Das ist das große A.",
            "en": "Correct! That is capital A."
          },
          "hint": {
            "de": "Suche genau nach der Form von A.",
            "en": "Look carefully for the shape of A."
          }
        },
        {
          "id": "lu2",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben B.",
            "en": "Tap the capital letter B."
          },
          "visual": "B",
          "answers": [
            {
              "id": "G",
              "label": "G"
            },
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "B",
              "label": "B"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Richtig! Das ist das große B.",
            "en": "Correct! That is capital B."
          },
          "hint": {
            "de": "Suche genau nach der Form von B.",
            "en": "Look carefully for the shape of B."
          }
        },
        {
          "id": "lu3",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben C.",
            "en": "Tap the capital letter C."
          },
          "visual": "C",
          "answers": [
            {
              "id": "N",
              "label": "N"
            },
            {
              "id": "C",
              "label": "C"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "C",
          "success": {
            "de": "Richtig! Das ist das große C.",
            "en": "Correct! That is capital C."
          },
          "hint": {
            "de": "Suche genau nach der Form von C.",
            "en": "Look carefully for the shape of C."
          }
        },
        {
          "id": "lu4",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben D.",
            "en": "Tap the capital letter D."
          },
          "visual": "D",
          "answers": [
            {
              "id": "D",
              "label": "D"
            },
            {
              "id": "I",
              "label": "I"
            },
            {
              "id": "O",
              "label": "O"
            }
          ],
          "correctAnswerId": "D",
          "success": {
            "de": "Richtig! Das ist das große D.",
            "en": "Correct! That is capital D."
          },
          "hint": {
            "de": "Suche genau nach der Form von D.",
            "en": "Look carefully for the shape of D."
          }
        },
        {
          "id": "lu5",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben E.",
            "en": "Tap the capital letter E."
          },
          "visual": "E",
          "answers": [
            {
              "id": "J",
              "label": "J"
            },
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "E",
              "label": "E"
            }
          ],
          "correctAnswerId": "E",
          "success": {
            "de": "Richtig! Das ist das große E.",
            "en": "Correct! That is capital E."
          },
          "hint": {
            "de": "Suche genau nach der Form von E.",
            "en": "Look carefully for the shape of E."
          }
        },
        {
          "id": "lu6",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben F.",
            "en": "Tap the capital letter F."
          },
          "visual": "F",
          "answers": [
            {
              "id": "Q",
              "label": "Q"
            },
            {
              "id": "F",
              "label": "F"
            },
            {
              "id": "K",
              "label": "K"
            }
          ],
          "correctAnswerId": "F",
          "success": {
            "de": "Richtig! Das ist das große F.",
            "en": "Correct! That is capital F."
          },
          "hint": {
            "de": "Suche genau nach der Form von F.",
            "en": "Look carefully for the shape of F."
          }
        },
        {
          "id": "lu7",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben G.",
            "en": "Tap the capital letter G."
          },
          "visual": "G",
          "answers": [
            {
              "id": "G",
              "label": "G"
            },
            {
              "id": "L",
              "label": "L"
            },
            {
              "id": "R",
              "label": "R"
            }
          ],
          "correctAnswerId": "G",
          "success": {
            "de": "Richtig! Das ist das große G.",
            "en": "Correct! That is capital G."
          },
          "hint": {
            "de": "Suche genau nach der Form von G.",
            "en": "Look carefully for the shape of G."
          }
        },
        {
          "id": "lu8",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben H.",
            "en": "Tap the capital letter H."
          },
          "visual": "H",
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "S",
              "label": "S"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "H",
          "success": {
            "de": "Richtig! Das ist das große H.",
            "en": "Correct! That is capital H."
          },
          "hint": {
            "de": "Suche genau nach der Form von H.",
            "en": "Look carefully for the shape of H."
          }
        },
        {
          "id": "lu9",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben I.",
            "en": "Tap the capital letter I."
          },
          "visual": "I",
          "answers": [
            {
              "id": "T",
              "label": "T"
            },
            {
              "id": "I",
              "label": "I"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "I",
          "success": {
            "de": "Richtig! Das ist das große I.",
            "en": "Correct! That is capital I."
          },
          "hint": {
            "de": "Suche genau nach der Form von I.",
            "en": "Look carefully for the shape of I."
          }
        },
        {
          "id": "lu10",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben J.",
            "en": "Tap the capital letter J."
          },
          "visual": "J",
          "answers": [
            {
              "id": "J",
              "label": "J"
            },
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "U",
              "label": "U"
            }
          ],
          "correctAnswerId": "J",
          "success": {
            "de": "Richtig! Das ist das große J.",
            "en": "Correct! That is capital J."
          },
          "hint": {
            "de": "Suche genau nach der Form von J.",
            "en": "Look carefully for the shape of J."
          }
        },
        {
          "id": "lu11",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben K.",
            "en": "Tap the capital letter K."
          },
          "visual": "K",
          "answers": [
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "V",
              "label": "V"
            },
            {
              "id": "K",
              "label": "K"
            }
          ],
          "correctAnswerId": "K",
          "success": {
            "de": "Richtig! Das ist das große K.",
            "en": "Correct! That is capital K."
          },
          "hint": {
            "de": "Suche genau nach der Form von K.",
            "en": "Look carefully for the shape of K."
          }
        },
        {
          "id": "lu12",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben L.",
            "en": "Tap the capital letter L."
          },
          "visual": "L",
          "answers": [
            {
              "id": "W",
              "label": "W"
            },
            {
              "id": "L",
              "label": "L"
            },
            {
              "id": "Q",
              "label": "Q"
            }
          ],
          "correctAnswerId": "L",
          "success": {
            "de": "Richtig! Das ist das große L.",
            "en": "Correct! That is capital L."
          },
          "hint": {
            "de": "Suche genau nach der Form von L.",
            "en": "Look carefully for the shape of L."
          }
        },
        {
          "id": "lu13",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben M.",
            "en": "Tap the capital letter M."
          },
          "visual": "M",
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "X",
              "label": "X"
            }
          ],
          "correctAnswerId": "M",
          "success": {
            "de": "Richtig! Das ist das große M.",
            "en": "Correct! That is capital M."
          },
          "hint": {
            "de": "Suche genau nach der Form von M.",
            "en": "Look carefully for the shape of M."
          }
        },
        {
          "id": "lu14",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben N.",
            "en": "Tap the capital letter N."
          },
          "visual": "N",
          "answers": [
            {
              "id": "S",
              "label": "S"
            },
            {
              "id": "Y",
              "label": "Y"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "N",
          "success": {
            "de": "Richtig! Das ist das große N.",
            "en": "Correct! That is capital N."
          },
          "hint": {
            "de": "Suche genau nach der Form von N.",
            "en": "Look carefully for the shape of N."
          }
        },
        {
          "id": "lu15",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben O.",
            "en": "Tap the capital letter O."
          },
          "visual": "O",
          "answers": [
            {
              "id": "Z",
              "label": "Z"
            },
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "T",
              "label": "T"
            }
          ],
          "correctAnswerId": "O",
          "success": {
            "de": "Richtig! Das ist das große O.",
            "en": "Correct! That is capital O."
          },
          "hint": {
            "de": "Suche genau nach der Form von O.",
            "en": "Look carefully for the shape of O."
          }
        },
        {
          "id": "lu16",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben P.",
            "en": "Tap the capital letter P."
          },
          "visual": "P",
          "answers": [
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "U",
              "label": "U"
            },
            {
              "id": "A",
              "label": "A"
            }
          ],
          "correctAnswerId": "P",
          "success": {
            "de": "Richtig! Das ist das große P.",
            "en": "Correct! That is capital P."
          },
          "hint": {
            "de": "Suche genau nach der Form von P.",
            "en": "Look carefully for the shape of P."
          }
        },
        {
          "id": "lu17",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben Q.",
            "en": "Tap the capital letter Q."
          },
          "visual": "Q",
          "answers": [
            {
              "id": "V",
              "label": "V"
            },
            {
              "id": "B",
              "label": "B"
            },
            {
              "id": "Q",
              "label": "Q"
            }
          ],
          "correctAnswerId": "Q",
          "success": {
            "de": "Richtig! Das ist das große Q.",
            "en": "Correct! That is capital Q."
          },
          "hint": {
            "de": "Suche genau nach der Form von Q.",
            "en": "Look carefully for the shape of Q."
          }
        },
        {
          "id": "lu18",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben R.",
            "en": "Tap the capital letter R."
          },
          "visual": "R",
          "answers": [
            {
              "id": "C",
              "label": "C"
            },
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "W",
              "label": "W"
            }
          ],
          "correctAnswerId": "R",
          "success": {
            "de": "Richtig! Das ist das große R.",
            "en": "Correct! That is capital R."
          },
          "hint": {
            "de": "Suche genau nach der Form von R.",
            "en": "Look carefully for the shape of R."
          }
        },
        {
          "id": "lu19",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben S.",
            "en": "Tap the capital letter S."
          },
          "visual": "S",
          "answers": [
            {
              "id": "S",
              "label": "S"
            },
            {
              "id": "X",
              "label": "X"
            },
            {
              "id": "D",
              "label": "D"
            }
          ],
          "correctAnswerId": "S",
          "success": {
            "de": "Richtig! Das ist das große S.",
            "en": "Correct! That is capital S."
          },
          "hint": {
            "de": "Suche genau nach der Form von S.",
            "en": "Look carefully for the shape of S."
          }
        },
        {
          "id": "lu20",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben T.",
            "en": "Tap the capital letter T."
          },
          "visual": "T",
          "answers": [
            {
              "id": "Y",
              "label": "Y"
            },
            {
              "id": "E",
              "label": "E"
            },
            {
              "id": "T",
              "label": "T"
            }
          ],
          "correctAnswerId": "T",
          "success": {
            "de": "Richtig! Das ist das große T.",
            "en": "Correct! That is capital T."
          },
          "hint": {
            "de": "Suche genau nach der Form von T.",
            "en": "Look carefully for the shape of T."
          }
        },
        {
          "id": "lu21",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben U.",
            "en": "Tap the capital letter U."
          },
          "visual": "U",
          "answers": [
            {
              "id": "F",
              "label": "F"
            },
            {
              "id": "U",
              "label": "U"
            },
            {
              "id": "Z",
              "label": "Z"
            }
          ],
          "correctAnswerId": "U",
          "success": {
            "de": "Richtig! Das ist das große U.",
            "en": "Correct! That is capital U."
          },
          "hint": {
            "de": "Suche genau nach der Form von U.",
            "en": "Look carefully for the shape of U."
          }
        },
        {
          "id": "lu22",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben V.",
            "en": "Tap the capital letter V."
          },
          "visual": "V",
          "answers": [
            {
              "id": "V",
              "label": "V"
            },
            {
              "id": "A",
              "label": "A"
            },
            {
              "id": "G",
              "label": "G"
            }
          ],
          "correctAnswerId": "V",
          "success": {
            "de": "Richtig! Das ist das große V.",
            "en": "Correct! That is capital V."
          },
          "hint": {
            "de": "Suche genau nach der Form von V.",
            "en": "Look carefully for the shape of V."
          }
        },
        {
          "id": "lu23",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben W.",
            "en": "Tap the capital letter W."
          },
          "visual": "W",
          "answers": [
            {
              "id": "B",
              "label": "B"
            },
            {
              "id": "H",
              "label": "H"
            },
            {
              "id": "W",
              "label": "W"
            }
          ],
          "correctAnswerId": "W",
          "success": {
            "de": "Richtig! Das ist das große W.",
            "en": "Correct! That is capital W."
          },
          "hint": {
            "de": "Suche genau nach der Form von W.",
            "en": "Look carefully for the shape of W."
          }
        },
        {
          "id": "lu24",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben X.",
            "en": "Tap the capital letter X."
          },
          "visual": "X",
          "answers": [
            {
              "id": "I",
              "label": "I"
            },
            {
              "id": "X",
              "label": "X"
            },
            {
              "id": "C",
              "label": "C"
            }
          ],
          "correctAnswerId": "X",
          "success": {
            "de": "Richtig! Das ist das große X.",
            "en": "Correct! That is capital X."
          },
          "hint": {
            "de": "Suche genau nach der Form von X.",
            "en": "Look carefully for the shape of X."
          }
        },
        {
          "id": "lu25",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben Y.",
            "en": "Tap the capital letter Y."
          },
          "visual": "Y",
          "answers": [
            {
              "id": "Y",
              "label": "Y"
            },
            {
              "id": "D",
              "label": "D"
            },
            {
              "id": "J",
              "label": "J"
            }
          ],
          "correctAnswerId": "Y",
          "success": {
            "de": "Richtig! Das ist das große Y.",
            "en": "Correct! That is capital Y."
          },
          "hint": {
            "de": "Suche genau nach der Form von Y.",
            "en": "Look carefully for the shape of Y."
          }
        },
        {
          "id": "lu26",
          "prompt": {
            "de": "Tippe auf den großen Buchstaben Z.",
            "en": "Tap the capital letter Z."
          },
          "visual": "Z",
          "answers": [
            {
              "id": "E",
              "label": "E"
            },
            {
              "id": "K",
              "label": "K"
            },
            {
              "id": "Z",
              "label": "Z"
            }
          ],
          "correctAnswerId": "Z",
          "success": {
            "de": "Richtig! Das ist das große Z.",
            "en": "Correct! That is capital Z."
          },
          "hint": {
            "de": "Suche genau nach der Form von Z.",
            "en": "Look carefully for the shape of Z."
          }
        },
        {
          "id": "lu27",
          "prompt": {
            "de": "Finde den kleinen Buchstaben a.",
            "en": "Find the lowercase letter a."
          },
          "visual": "A · a",
          "answers": [
            {
              "id": "h",
              "label": "h"
            },
            {
              "id": "n",
              "label": "n"
            },
            {
              "id": "a",
              "label": "a"
            }
          ],
          "correctAnswerId": "a",
          "success": {
            "de": "Prima! Das ist das kleine a.",
            "en": "Great! That is lowercase a."
          },
          "hint": {
            "de": "Das kleine a gehört zum großen A.",
            "en": "Lowercase a belongs with capital A."
          }
        },
        {
          "id": "lu28",
          "prompt": {
            "de": "Finde den kleinen Buchstaben b.",
            "en": "Find the lowercase letter b."
          },
          "visual": "B · b",
          "answers": [
            {
              "id": "o",
              "label": "o"
            },
            {
              "id": "b",
              "label": "b"
            },
            {
              "id": "i",
              "label": "i"
            }
          ],
          "correctAnswerId": "b",
          "success": {
            "de": "Prima! Das ist das kleine b.",
            "en": "Great! That is lowercase b."
          },
          "hint": {
            "de": "Das kleine b gehört zum großen B.",
            "en": "Lowercase b belongs with capital B."
          }
        },
        {
          "id": "lu29",
          "prompt": {
            "de": "Finde den kleinen Buchstaben c.",
            "en": "Find the lowercase letter c."
          },
          "visual": "C · c",
          "answers": [
            {
              "id": "c",
              "label": "c"
            },
            {
              "id": "j",
              "label": "j"
            },
            {
              "id": "p",
              "label": "p"
            }
          ],
          "correctAnswerId": "c",
          "success": {
            "de": "Prima! Das ist das kleine c.",
            "en": "Great! That is lowercase c."
          },
          "hint": {
            "de": "Das kleine c gehört zum großen C.",
            "en": "Lowercase c belongs with capital C."
          }
        },
        {
          "id": "lu30",
          "prompt": {
            "de": "Finde den kleinen Buchstaben d.",
            "en": "Find the lowercase letter d."
          },
          "visual": "D · d",
          "answers": [
            {
              "id": "k",
              "label": "k"
            },
            {
              "id": "q",
              "label": "q"
            },
            {
              "id": "d",
              "label": "d"
            }
          ],
          "correctAnswerId": "d",
          "success": {
            "de": "Prima! Das ist das kleine d.",
            "en": "Great! That is lowercase d."
          },
          "hint": {
            "de": "Das kleine d gehört zum großen D.",
            "en": "Lowercase d belongs with capital D."
          }
        },
        {
          "id": "lu31",
          "prompt": {
            "de": "Finde den kleinen Buchstaben e.",
            "en": "Find the lowercase letter e."
          },
          "visual": "E · e",
          "answers": [
            {
              "id": "r",
              "label": "r"
            },
            {
              "id": "e",
              "label": "e"
            },
            {
              "id": "l",
              "label": "l"
            }
          ],
          "correctAnswerId": "e",
          "success": {
            "de": "Prima! Das ist das kleine e.",
            "en": "Great! That is lowercase e."
          },
          "hint": {
            "de": "Das kleine e gehört zum großen E.",
            "en": "Lowercase e belongs with capital E."
          }
        },
        {
          "id": "lu32",
          "prompt": {
            "de": "Finde den kleinen Buchstaben f.",
            "en": "Find the lowercase letter f."
          },
          "visual": "F · f",
          "answers": [
            {
              "id": "f",
              "label": "f"
            },
            {
              "id": "m",
              "label": "m"
            },
            {
              "id": "s",
              "label": "s"
            }
          ],
          "correctAnswerId": "f",
          "success": {
            "de": "Prima! Das ist das kleine f.",
            "en": "Great! That is lowercase f."
          },
          "hint": {
            "de": "Das kleine f gehört zum großen F.",
            "en": "Lowercase f belongs with capital F."
          }
        },
        {
          "id": "lu33",
          "prompt": {
            "de": "Finde den kleinen Buchstaben g.",
            "en": "Find the lowercase letter g."
          },
          "visual": "G · g",
          "answers": [
            {
              "id": "n",
              "label": "n"
            },
            {
              "id": "t",
              "label": "t"
            },
            {
              "id": "g",
              "label": "g"
            }
          ],
          "correctAnswerId": "g",
          "success": {
            "de": "Prima! Das ist das kleine g.",
            "en": "Great! That is lowercase g."
          },
          "hint": {
            "de": "Das kleine g gehört zum großen G.",
            "en": "Lowercase g belongs with capital G."
          }
        },
        {
          "id": "lu34",
          "prompt": {
            "de": "Finde den kleinen Buchstaben h.",
            "en": "Find the lowercase letter h."
          },
          "visual": "H · h",
          "answers": [
            {
              "id": "u",
              "label": "u"
            },
            {
              "id": "h",
              "label": "h"
            },
            {
              "id": "o",
              "label": "o"
            }
          ],
          "correctAnswerId": "h",
          "success": {
            "de": "Prima! Das ist das kleine h.",
            "en": "Great! That is lowercase h."
          },
          "hint": {
            "de": "Das kleine h gehört zum großen H.",
            "en": "Lowercase h belongs with capital H."
          }
        },
        {
          "id": "lu35",
          "prompt": {
            "de": "Finde den kleinen Buchstaben i.",
            "en": "Find the lowercase letter i."
          },
          "visual": "I · i",
          "answers": [
            {
              "id": "i",
              "label": "i"
            },
            {
              "id": "p",
              "label": "p"
            },
            {
              "id": "v",
              "label": "v"
            }
          ],
          "correctAnswerId": "i",
          "success": {
            "de": "Prima! Das ist das kleine i.",
            "en": "Great! That is lowercase i."
          },
          "hint": {
            "de": "Das kleine i gehört zum großen I.",
            "en": "Lowercase i belongs with capital I."
          }
        },
        {
          "id": "lu36",
          "prompt": {
            "de": "Finde den kleinen Buchstaben j.",
            "en": "Find the lowercase letter j."
          },
          "visual": "J · j",
          "answers": [
            {
              "id": "q",
              "label": "q"
            },
            {
              "id": "w",
              "label": "w"
            },
            {
              "id": "j",
              "label": "j"
            }
          ],
          "correctAnswerId": "j",
          "success": {
            "de": "Prima! Das ist das kleine j.",
            "en": "Great! That is lowercase j."
          },
          "hint": {
            "de": "Das kleine j gehört zum großen J.",
            "en": "Lowercase j belongs with capital J."
          }
        },
        {
          "id": "lu37",
          "prompt": {
            "de": "Finde den kleinen Buchstaben k.",
            "en": "Find the lowercase letter k."
          },
          "visual": "K · k",
          "answers": [
            {
              "id": "x",
              "label": "x"
            },
            {
              "id": "k",
              "label": "k"
            },
            {
              "id": "r",
              "label": "r"
            }
          ],
          "correctAnswerId": "k",
          "success": {
            "de": "Prima! Das ist das kleine k.",
            "en": "Great! That is lowercase k."
          },
          "hint": {
            "de": "Das kleine k gehört zum großen K.",
            "en": "Lowercase k belongs with capital K."
          }
        },
        {
          "id": "lu38",
          "prompt": {
            "de": "Finde den kleinen Buchstaben l.",
            "en": "Find the lowercase letter l."
          },
          "visual": "L · l",
          "answers": [
            {
              "id": "l",
              "label": "l"
            },
            {
              "id": "s",
              "label": "s"
            },
            {
              "id": "y",
              "label": "y"
            }
          ],
          "correctAnswerId": "l",
          "success": {
            "de": "Prima! Das ist das kleine l.",
            "en": "Great! That is lowercase l."
          },
          "hint": {
            "de": "Das kleine l gehört zum großen L.",
            "en": "Lowercase l belongs with capital L."
          }
        },
        {
          "id": "lu39",
          "prompt": {
            "de": "Finde den kleinen Buchstaben m.",
            "en": "Find the lowercase letter m."
          },
          "visual": "M · m",
          "answers": [
            {
              "id": "t",
              "label": "t"
            },
            {
              "id": "z",
              "label": "z"
            },
            {
              "id": "m",
              "label": "m"
            }
          ],
          "correctAnswerId": "m",
          "success": {
            "de": "Prima! Das ist das kleine m.",
            "en": "Great! That is lowercase m."
          },
          "hint": {
            "de": "Das kleine m gehört zum großen M.",
            "en": "Lowercase m belongs with capital M."
          }
        },
        {
          "id": "lu40",
          "prompt": {
            "de": "Finde den kleinen Buchstaben n.",
            "en": "Find the lowercase letter n."
          },
          "visual": "N · n",
          "answers": [
            {
              "id": "a",
              "label": "a"
            },
            {
              "id": "n",
              "label": "n"
            },
            {
              "id": "u",
              "label": "u"
            }
          ],
          "correctAnswerId": "n",
          "success": {
            "de": "Prima! Das ist das kleine n.",
            "en": "Great! That is lowercase n."
          },
          "hint": {
            "de": "Das kleine n gehört zum großen N.",
            "en": "Lowercase n belongs with capital N."
          }
        },
        {
          "id": "lu41",
          "prompt": {
            "de": "Finde den kleinen Buchstaben o.",
            "en": "Find the lowercase letter o."
          },
          "visual": "O · o",
          "answers": [
            {
              "id": "o",
              "label": "o"
            },
            {
              "id": "v",
              "label": "v"
            },
            {
              "id": "b",
              "label": "b"
            }
          ],
          "correctAnswerId": "o",
          "success": {
            "de": "Prima! Das ist das kleine o.",
            "en": "Great! That is lowercase o."
          },
          "hint": {
            "de": "Das kleine o gehört zum großen O.",
            "en": "Lowercase o belongs with capital O."
          }
        },
        {
          "id": "lu42",
          "prompt": {
            "de": "Finde den kleinen Buchstaben p.",
            "en": "Find the lowercase letter p."
          },
          "visual": "P · p",
          "answers": [
            {
              "id": "w",
              "label": "w"
            },
            {
              "id": "c",
              "label": "c"
            },
            {
              "id": "p",
              "label": "p"
            }
          ],
          "correctAnswerId": "p",
          "success": {
            "de": "Prima! Das ist das kleine p.",
            "en": "Great! That is lowercase p."
          },
          "hint": {
            "de": "Das kleine p gehört zum großen P.",
            "en": "Lowercase p belongs with capital P."
          }
        },
        {
          "id": "lu43",
          "prompt": {
            "de": "Finde den kleinen Buchstaben q.",
            "en": "Find the lowercase letter q."
          },
          "visual": "Q · q",
          "answers": [
            {
              "id": "d",
              "label": "d"
            },
            {
              "id": "q",
              "label": "q"
            },
            {
              "id": "x",
              "label": "x"
            }
          ],
          "correctAnswerId": "q",
          "success": {
            "de": "Prima! Das ist das kleine q.",
            "en": "Great! That is lowercase q."
          },
          "hint": {
            "de": "Das kleine q gehört zum großen Q.",
            "en": "Lowercase q belongs with capital Q."
          }
        },
        {
          "id": "lu44",
          "prompt": {
            "de": "Finde den kleinen Buchstaben r.",
            "en": "Find the lowercase letter r."
          },
          "visual": "R · r",
          "answers": [
            {
              "id": "r",
              "label": "r"
            },
            {
              "id": "y",
              "label": "y"
            },
            {
              "id": "e",
              "label": "e"
            }
          ],
          "correctAnswerId": "r",
          "success": {
            "de": "Prima! Das ist das kleine r.",
            "en": "Great! That is lowercase r."
          },
          "hint": {
            "de": "Das kleine r gehört zum großen R.",
            "en": "Lowercase r belongs with capital R."
          }
        },
        {
          "id": "lu45",
          "prompt": {
            "de": "Finde den kleinen Buchstaben s.",
            "en": "Find the lowercase letter s."
          },
          "visual": "S · s",
          "answers": [
            {
              "id": "z",
              "label": "z"
            },
            {
              "id": "f",
              "label": "f"
            },
            {
              "id": "s",
              "label": "s"
            }
          ],
          "correctAnswerId": "s",
          "success": {
            "de": "Prima! Das ist das kleine s.",
            "en": "Great! That is lowercase s."
          },
          "hint": {
            "de": "Das kleine s gehört zum großen S.",
            "en": "Lowercase s belongs with capital S."
          }
        },
        {
          "id": "lu46",
          "prompt": {
            "de": "Finde den kleinen Buchstaben t.",
            "en": "Find the lowercase letter t."
          },
          "visual": "T · t",
          "answers": [
            {
              "id": "g",
              "label": "g"
            },
            {
              "id": "t",
              "label": "t"
            },
            {
              "id": "a",
              "label": "a"
            }
          ],
          "correctAnswerId": "t",
          "success": {
            "de": "Prima! Das ist das kleine t.",
            "en": "Great! That is lowercase t."
          },
          "hint": {
            "de": "Das kleine t gehört zum großen T.",
            "en": "Lowercase t belongs with capital T."
          }
        },
        {
          "id": "lu47",
          "prompt": {
            "de": "Finde den kleinen Buchstaben u.",
            "en": "Find the lowercase letter u."
          },
          "visual": "U · u",
          "answers": [
            {
              "id": "u",
              "label": "u"
            },
            {
              "id": "b",
              "label": "b"
            },
            {
              "id": "h",
              "label": "h"
            }
          ],
          "correctAnswerId": "u",
          "success": {
            "de": "Prima! Das ist das kleine u.",
            "en": "Great! That is lowercase u."
          },
          "hint": {
            "de": "Das kleine u gehört zum großen U.",
            "en": "Lowercase u belongs with capital U."
          }
        },
        {
          "id": "lu48",
          "prompt": {
            "de": "Finde den kleinen Buchstaben v.",
            "en": "Find the lowercase letter v."
          },
          "visual": "V · v",
          "answers": [
            {
              "id": "c",
              "label": "c"
            },
            {
              "id": "i",
              "label": "i"
            },
            {
              "id": "v",
              "label": "v"
            }
          ],
          "correctAnswerId": "v",
          "success": {
            "de": "Prima! Das ist das kleine v.",
            "en": "Great! That is lowercase v."
          },
          "hint": {
            "de": "Das kleine v gehört zum großen V.",
            "en": "Lowercase v belongs with capital V."
          }
        },
        {
          "id": "lu49",
          "prompt": {
            "de": "Finde den kleinen Buchstaben w.",
            "en": "Find the lowercase letter w."
          },
          "visual": "W · w",
          "answers": [
            {
              "id": "j",
              "label": "j"
            },
            {
              "id": "w",
              "label": "w"
            },
            {
              "id": "d",
              "label": "d"
            }
          ],
          "correctAnswerId": "w",
          "success": {
            "de": "Prima! Das ist das kleine w.",
            "en": "Great! That is lowercase w."
          },
          "hint": {
            "de": "Das kleine w gehört zum großen W.",
            "en": "Lowercase w belongs with capital W."
          }
        },
        {
          "id": "lu50",
          "prompt": {
            "de": "Finde den kleinen Buchstaben x.",
            "en": "Find the lowercase letter x."
          },
          "visual": "X · x",
          "answers": [
            {
              "id": "x",
              "label": "x"
            },
            {
              "id": "e",
              "label": "e"
            },
            {
              "id": "k",
              "label": "k"
            }
          ],
          "correctAnswerId": "x",
          "success": {
            "de": "Prima! Das ist das kleine x.",
            "en": "Great! That is lowercase x."
          },
          "hint": {
            "de": "Das kleine x gehört zum großen X.",
            "en": "Lowercase x belongs with capital X."
          }
        },
        {
          "id": "lu51",
          "prompt": {
            "de": "Finde den kleinen Buchstaben y.",
            "en": "Find the lowercase letter y."
          },
          "visual": "Y · y",
          "answers": [
            {
              "id": "f",
              "label": "f"
            },
            {
              "id": "l",
              "label": "l"
            },
            {
              "id": "y",
              "label": "y"
            }
          ],
          "correctAnswerId": "y",
          "success": {
            "de": "Prima! Das ist das kleine y.",
            "en": "Great! That is lowercase y."
          },
          "hint": {
            "de": "Das kleine y gehört zum großen Y.",
            "en": "Lowercase y belongs with capital Y."
          }
        },
        {
          "id": "lu52",
          "prompt": {
            "de": "Finde den kleinen Buchstaben z.",
            "en": "Find the lowercase letter z."
          },
          "visual": "Z · z",
          "answers": [
            {
              "id": "m",
              "label": "m"
            },
            {
              "id": "z",
              "label": "z"
            },
            {
              "id": "g",
              "label": "g"
            }
          ],
          "correctAnswerId": "z",
          "success": {
            "de": "Prima! Das ist das kleine z.",
            "en": "Great! That is lowercase z."
          },
          "hint": {
            "de": "Das kleine z gehört zum großen Z.",
            "en": "Lowercase z belongs with capital Z."
          }
        },
        {
          "id": "lu53",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen B und D?",
            "en": "Which letter is missing between B and D?"
          },
          "visual": "A · B · _ · D",
          "answers": [
            {
              "id": "C",
              "label": "C"
            },
            {
              "id": "F",
              "label": "F"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "C",
          "success": {
            "de": "Genau! In die Lücke gehört C.",
            "en": "Exactly! C belongs in the gap."
          },
          "hint": {
            "de": "Sage A, B, C, D langsam auf.",
            "en": "Say A, B, C, D slowly."
          }
        },
        {
          "id": "lu54",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen C und E?",
            "en": "Which letter is missing between C and E?"
          },
          "visual": "B · C · _ · E",
          "answers": [
            {
              "id": "G",
              "label": "G"
            },
            {
              "id": "I",
              "label": "I"
            },
            {
              "id": "D",
              "label": "D"
            }
          ],
          "correctAnswerId": "D",
          "success": {
            "de": "Genau! In die Lücke gehört D.",
            "en": "Exactly! D belongs in the gap."
          },
          "hint": {
            "de": "Sage B, C, D, E langsam auf.",
            "en": "Say B, C, D, E slowly."
          }
        },
        {
          "id": "lu55",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen D und F?",
            "en": "Which letter is missing between D and F?"
          },
          "visual": "C · D · _ · F",
          "answers": [
            {
              "id": "J",
              "label": "J"
            },
            {
              "id": "E",
              "label": "E"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "E",
          "success": {
            "de": "Genau! In die Lücke gehört E.",
            "en": "Exactly! E belongs in the gap."
          },
          "hint": {
            "de": "Sage C, D, E, F langsam auf.",
            "en": "Say C, D, E, F slowly."
          }
        },
        {
          "id": "lu56",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen E und G?",
            "en": "Which letter is missing between E and G?"
          },
          "visual": "D · E · _ · G",
          "answers": [
            {
              "id": "F",
              "label": "F"
            },
            {
              "id": "I",
              "label": "I"
            },
            {
              "id": "K",
              "label": "K"
            }
          ],
          "correctAnswerId": "F",
          "success": {
            "de": "Genau! In die Lücke gehört F.",
            "en": "Exactly! F belongs in the gap."
          },
          "hint": {
            "de": "Sage D, E, F, G langsam auf.",
            "en": "Say D, E, F, G slowly."
          }
        },
        {
          "id": "lu57",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen F und H?",
            "en": "Which letter is missing between F and H?"
          },
          "visual": "E · F · _ · H",
          "answers": [
            {
              "id": "J",
              "label": "J"
            },
            {
              "id": "L",
              "label": "L"
            },
            {
              "id": "G",
              "label": "G"
            }
          ],
          "correctAnswerId": "G",
          "success": {
            "de": "Genau! In die Lücke gehört G.",
            "en": "Exactly! G belongs in the gap."
          },
          "hint": {
            "de": "Sage E, F, G, H langsam auf.",
            "en": "Say E, F, G, H slowly."
          }
        },
        {
          "id": "lu58",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen G und I?",
            "en": "Which letter is missing between G and I?"
          },
          "visual": "F · G · _ · I",
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "H",
              "label": "H"
            },
            {
              "id": "K",
              "label": "K"
            }
          ],
          "correctAnswerId": "H",
          "success": {
            "de": "Genau! In die Lücke gehört H.",
            "en": "Exactly! H belongs in the gap."
          },
          "hint": {
            "de": "Sage F, G, H, I langsam auf.",
            "en": "Say F, G, H, I slowly."
          }
        },
        {
          "id": "lu59",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen H und J?",
            "en": "Which letter is missing between H and J?"
          },
          "visual": "G · H · _ · J",
          "answers": [
            {
              "id": "I",
              "label": "I"
            },
            {
              "id": "L",
              "label": "L"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "I",
          "success": {
            "de": "Genau! In die Lücke gehört I.",
            "en": "Exactly! I belongs in the gap."
          },
          "hint": {
            "de": "Sage G, H, I, J langsam auf.",
            "en": "Say G, H, I, J slowly."
          }
        },
        {
          "id": "lu60",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen I und K?",
            "en": "Which letter is missing between I and K?"
          },
          "visual": "H · I · _ · K",
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "J",
              "label": "J"
            }
          ],
          "correctAnswerId": "J",
          "success": {
            "de": "Genau! In die Lücke gehört J.",
            "en": "Exactly! J belongs in the gap."
          },
          "hint": {
            "de": "Sage H, I, J, K langsam auf.",
            "en": "Say H, I, J, K slowly."
          }
        },
        {
          "id": "lu61",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen J und L?",
            "en": "Which letter is missing between J and L?"
          },
          "visual": "I · J · _ · L",
          "answers": [
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "K",
              "label": "K"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "K",
          "success": {
            "de": "Genau! In die Lücke gehört K.",
            "en": "Exactly! K belongs in the gap."
          },
          "hint": {
            "de": "Sage I, J, K, L langsam auf.",
            "en": "Say I, J, K, L slowly."
          }
        },
        {
          "id": "lu62",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen K und M?",
            "en": "Which letter is missing between K and M?"
          },
          "visual": "J · K · _ · M",
          "answers": [
            {
              "id": "L",
              "label": "L"
            },
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "Q",
              "label": "Q"
            }
          ],
          "correctAnswerId": "L",
          "success": {
            "de": "Genau! In die Lücke gehört L.",
            "en": "Exactly! L belongs in the gap."
          },
          "hint": {
            "de": "Sage J, K, L, M langsam auf.",
            "en": "Say J, K, L, M slowly."
          }
        },
        {
          "id": "lu63",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen L und N?",
            "en": "Which letter is missing between L and N?"
          },
          "visual": "K · L · _ · N",
          "answers": [
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "M",
              "label": "M"
            }
          ],
          "correctAnswerId": "M",
          "success": {
            "de": "Genau! In die Lücke gehört M.",
            "en": "Exactly! M belongs in the gap."
          },
          "hint": {
            "de": "Sage K, L, M, N langsam auf.",
            "en": "Say K, L, M, N slowly."
          }
        },
        {
          "id": "lu64",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen M und O?",
            "en": "Which letter is missing between M and O?"
          },
          "visual": "L · M · _ · O",
          "answers": [
            {
              "id": "S",
              "label": "S"
            },
            {
              "id": "N",
              "label": "N"
            },
            {
              "id": "Q",
              "label": "Q"
            }
          ],
          "correctAnswerId": "N",
          "success": {
            "de": "Genau! In die Lücke gehört N.",
            "en": "Exactly! N belongs in the gap."
          },
          "hint": {
            "de": "Sage L, M, N, O langsam auf.",
            "en": "Say L, M, N, O slowly."
          }
        },
        {
          "id": "lu65",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen N und P?",
            "en": "Which letter is missing between N and P?"
          },
          "visual": "M · N · _ · P",
          "answers": [
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "T",
              "label": "T"
            }
          ],
          "correctAnswerId": "O",
          "success": {
            "de": "Genau! In die Lücke gehört O.",
            "en": "Exactly! O belongs in the gap."
          },
          "hint": {
            "de": "Sage M, N, O, P langsam auf.",
            "en": "Say M, N, O, P slowly."
          }
        },
        {
          "id": "lu66",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen O und Q?",
            "en": "Which letter is missing between O and Q?"
          },
          "visual": "N · O · _ · Q",
          "answers": [
            {
              "id": "S",
              "label": "S"
            },
            {
              "id": "U",
              "label": "U"
            },
            {
              "id": "P",
              "label": "P"
            }
          ],
          "correctAnswerId": "P",
          "success": {
            "de": "Genau! In die Lücke gehört P.",
            "en": "Exactly! P belongs in the gap."
          },
          "hint": {
            "de": "Sage N, O, P, Q langsam auf.",
            "en": "Say N, O, P, Q slowly."
          }
        },
        {
          "id": "lu67",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen P und R?",
            "en": "Which letter is missing between P and R?"
          },
          "visual": "O · P · _ · R",
          "answers": [
            {
              "id": "V",
              "label": "V"
            },
            {
              "id": "Q",
              "label": "Q"
            },
            {
              "id": "T",
              "label": "T"
            }
          ],
          "correctAnswerId": "Q",
          "success": {
            "de": "Genau! In die Lücke gehört Q.",
            "en": "Exactly! Q belongs in the gap."
          },
          "hint": {
            "de": "Sage O, P, Q, R langsam auf.",
            "en": "Say O, P, Q, R slowly."
          }
        },
        {
          "id": "lu68",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen Q und S?",
            "en": "Which letter is missing between Q and S?"
          },
          "visual": "P · Q · _ · S",
          "answers": [
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "U",
              "label": "U"
            },
            {
              "id": "W",
              "label": "W"
            }
          ],
          "correctAnswerId": "R",
          "success": {
            "de": "Genau! In die Lücke gehört R.",
            "en": "Exactly! R belongs in the gap."
          },
          "hint": {
            "de": "Sage P, Q, R, S langsam auf.",
            "en": "Say P, Q, R, S slowly."
          }
        },
        {
          "id": "lu69",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen R und T?",
            "en": "Which letter is missing between R and T?"
          },
          "visual": "Q · R · _ · T",
          "answers": [
            {
              "id": "V",
              "label": "V"
            },
            {
              "id": "X",
              "label": "X"
            },
            {
              "id": "S",
              "label": "S"
            }
          ],
          "correctAnswerId": "S",
          "success": {
            "de": "Genau! In die Lücke gehört S.",
            "en": "Exactly! S belongs in the gap."
          },
          "hint": {
            "de": "Sage Q, R, S, T langsam auf.",
            "en": "Say Q, R, S, T slowly."
          }
        },
        {
          "id": "lu70",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen S und U?",
            "en": "Which letter is missing between S and U?"
          },
          "visual": "R · S · _ · U",
          "answers": [
            {
              "id": "Y",
              "label": "Y"
            },
            {
              "id": "T",
              "label": "T"
            },
            {
              "id": "W",
              "label": "W"
            }
          ],
          "correctAnswerId": "T",
          "success": {
            "de": "Genau! In die Lücke gehört T.",
            "en": "Exactly! T belongs in the gap."
          },
          "hint": {
            "de": "Sage R, S, T, U langsam auf.",
            "en": "Say R, S, T, U slowly."
          }
        },
        {
          "id": "lu71",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen T und V?",
            "en": "Which letter is missing between T and V?"
          },
          "visual": "S · T · _ · V",
          "answers": [
            {
              "id": "U",
              "label": "U"
            },
            {
              "id": "X",
              "label": "X"
            },
            {
              "id": "Z",
              "label": "Z"
            }
          ],
          "correctAnswerId": "U",
          "success": {
            "de": "Genau! In die Lücke gehört U.",
            "en": "Exactly! U belongs in the gap."
          },
          "hint": {
            "de": "Sage S, T, U, V langsam auf.",
            "en": "Say S, T, U, V slowly."
          }
        },
        {
          "id": "lu72",
          "prompt": {
            "de": "Welcher Buchstabe fehlt zwischen U und W?",
            "en": "Which letter is missing between U and W?"
          },
          "visual": "T · U · _ · W",
          "answers": [
            {
              "id": "Y",
              "label": "Y"
            },
            {
              "id": "A",
              "label": "A"
            },
            {
              "id": "V",
              "label": "V"
            }
          ],
          "correctAnswerId": "V",
          "success": {
            "de": "Genau! In die Lücke gehört V.",
            "en": "Exactly! V belongs in the gap."
          },
          "hint": {
            "de": "Sage T, U, V, W langsam auf.",
            "en": "Say T, U, V, W slowly."
          }
        },
        {
          "id": "lu73",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Apfel?",
            "en": "Which letter does apple begin with?"
          },
          "visual": "🍎",
          "answers": [
            {
              "id": "A",
              "label": "A"
            },
            {
              "id": "E",
              "label": "E"
            },
            {
              "id": "J",
              "label": "J"
            }
          ],
          "correctAnswerId": "A",
          "success": {
            "de": "Apfel beginnt mit A.",
            "en": "apple begins with A."
          },
          "hint": {
            "de": "Höre genau: A, Apfel.",
            "en": "Listen closely: A, apple."
          }
        },
        {
          "id": "lu74",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Banane?",
            "en": "Which letter does banana begin with?"
          },
          "visual": "🍌",
          "answers": [
            {
              "id": "F",
              "label": "F"
            },
            {
              "id": "K",
              "label": "K"
            },
            {
              "id": "B",
              "label": "B"
            }
          ],
          "correctAnswerId": "B",
          "success": {
            "de": "Banane beginnt mit B.",
            "en": "banana begins with B."
          },
          "hint": {
            "de": "Höre genau: B, Banane.",
            "en": "Listen closely: B, banana."
          }
        },
        {
          "id": "lu75",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Delfin?",
            "en": "Which letter does dolphin begin with?"
          },
          "visual": "🐬",
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "D",
              "label": "D"
            },
            {
              "id": "H",
              "label": "H"
            }
          ],
          "correctAnswerId": "D",
          "success": {
            "de": "Delfin beginnt mit D.",
            "en": "dolphin begins with D."
          },
          "hint": {
            "de": "Höre genau: D, Delfin.",
            "en": "Listen closely: D, dolphin."
          }
        },
        {
          "id": "lu76",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Elefant?",
            "en": "Which letter does elephant begin with?"
          },
          "visual": "🐘",
          "answers": [
            {
              "id": "E",
              "label": "E"
            },
            {
              "id": "I",
              "label": "I"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "E",
          "success": {
            "de": "Elefant beginnt mit E.",
            "en": "elephant begins with E."
          },
          "hint": {
            "de": "Höre genau: E, Elefant.",
            "en": "Listen closely: E, elephant."
          }
        },
        {
          "id": "lu77",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Fisch?",
            "en": "Which letter does fish begin with?"
          },
          "visual": "🐟",
          "answers": [
            {
              "id": "J",
              "label": "J"
            },
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "F",
              "label": "F"
            }
          ],
          "correctAnswerId": "F",
          "success": {
            "de": "Fisch beginnt mit F.",
            "en": "fish begins with F."
          },
          "hint": {
            "de": "Höre genau: F, Fisch.",
            "en": "Listen closely: F, fish."
          }
        },
        {
          "id": "lu78",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Giraffe?",
            "en": "Which letter does giraffe begin with?"
          },
          "visual": "🦒",
          "answers": [
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "G",
              "label": "G"
            },
            {
              "id": "K",
              "label": "K"
            }
          ],
          "correctAnswerId": "G",
          "success": {
            "de": "Giraffe beginnt mit G.",
            "en": "giraffe begins with G."
          },
          "hint": {
            "de": "Höre genau: G, Giraffe.",
            "en": "Listen closely: G, giraffe."
          }
        },
        {
          "id": "lu79",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Hotel?",
            "en": "Which letter does hotel begin with?"
          },
          "visual": "🏨",
          "answers": [
            {
              "id": "H",
              "label": "H"
            },
            {
              "id": "L",
              "label": "L"
            },
            {
              "id": "Q",
              "label": "Q"
            }
          ],
          "correctAnswerId": "H",
          "success": {
            "de": "Hotel beginnt mit H.",
            "en": "hotel begins with H."
          },
          "hint": {
            "de": "Höre genau: H, Hotel.",
            "en": "Listen closely: H, hotel."
          }
        },
        {
          "id": "lu80",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Insel?",
            "en": "Which letter does island begin with?"
          },
          "visual": "🏝️",
          "answers": [
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "I",
              "label": "I"
            }
          ],
          "correctAnswerId": "I",
          "success": {
            "de": "Insel beginnt mit I.",
            "en": "island begins with I."
          },
          "hint": {
            "de": "Höre genau: I, Insel.",
            "en": "Listen closely: I, island."
          }
        },
        {
          "id": "lu81",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Jaguar?",
            "en": "Which letter does jaguar begin with?"
          },
          "visual": "🐆",
          "answers": [
            {
              "id": "S",
              "label": "S"
            },
            {
              "id": "J",
              "label": "J"
            },
            {
              "id": "N",
              "label": "N"
            }
          ],
          "correctAnswerId": "J",
          "success": {
            "de": "Jaguar beginnt mit J.",
            "en": "jaguar begins with J."
          },
          "hint": {
            "de": "Höre genau: J, Jaguar.",
            "en": "Listen closely: J, jaguar."
          }
        },
        {
          "id": "lu82",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Koala?",
            "en": "Which letter does koala begin with?"
          },
          "visual": "🐨",
          "answers": [
            {
              "id": "K",
              "label": "K"
            },
            {
              "id": "O",
              "label": "O"
            },
            {
              "id": "T",
              "label": "T"
            }
          ],
          "correctAnswerId": "K",
          "success": {
            "de": "Koala beginnt mit K.",
            "en": "koala begins with K."
          },
          "hint": {
            "de": "Höre genau: K, Koala.",
            "en": "Listen closely: K, koala."
          }
        },
        {
          "id": "lu83",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Löwe?",
            "en": "Which letter does lion begin with?"
          },
          "visual": "🦁",
          "answers": [
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "U",
              "label": "U"
            },
            {
              "id": "L",
              "label": "L"
            }
          ],
          "correctAnswerId": "L",
          "success": {
            "de": "Löwe beginnt mit L.",
            "en": "lion begins with L."
          },
          "hint": {
            "de": "Höre genau: L, Löwe.",
            "en": "Listen closely: L, lion."
          }
        },
        {
          "id": "lu84",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Maus?",
            "en": "Which letter does mouse begin with?"
          },
          "visual": "🐭",
          "answers": [
            {
              "id": "V",
              "label": "V"
            },
            {
              "id": "M",
              "label": "M"
            },
            {
              "id": "Q",
              "label": "Q"
            }
          ],
          "correctAnswerId": "M",
          "success": {
            "de": "Maus beginnt mit M.",
            "en": "mouse begins with M."
          },
          "hint": {
            "de": "Höre genau: M, Maus.",
            "en": "Listen closely: M, mouse."
          }
        },
        {
          "id": "lu85",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Nase?",
            "en": "Which letter does nose begin with?"
          },
          "visual": "👃",
          "answers": [
            {
              "id": "N",
              "label": "N"
            },
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "W",
              "label": "W"
            }
          ],
          "correctAnswerId": "N",
          "success": {
            "de": "Nase beginnt mit N.",
            "en": "nose begins with N."
          },
          "hint": {
            "de": "Höre genau: N, Nase.",
            "en": "Listen closely: N, nose."
          }
        },
        {
          "id": "lu86",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Orange?",
            "en": "Which letter does orange begin with?"
          },
          "visual": "🍊",
          "answers": [
            {
              "id": "S",
              "label": "S"
            },
            {
              "id": "X",
              "label": "X"
            },
            {
              "id": "O",
              "label": "O"
            }
          ],
          "correctAnswerId": "O",
          "success": {
            "de": "Orange beginnt mit O.",
            "en": "orange begins with O."
          },
          "hint": {
            "de": "Höre genau: O, Orange.",
            "en": "Listen closely: O, orange."
          }
        },
        {
          "id": "lu87",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Panda?",
            "en": "Which letter does panda begin with?"
          },
          "visual": "🐼",
          "answers": [
            {
              "id": "Y",
              "label": "Y"
            },
            {
              "id": "P",
              "label": "P"
            },
            {
              "id": "T",
              "label": "T"
            }
          ],
          "correctAnswerId": "P",
          "success": {
            "de": "Panda beginnt mit P.",
            "en": "panda begins with P."
          },
          "hint": {
            "de": "Höre genau: P, Panda.",
            "en": "Listen closely: P, panda."
          }
        },
        {
          "id": "lu88",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Radio?",
            "en": "Which letter does radio begin with?"
          },
          "visual": "📻",
          "answers": [
            {
              "id": "R",
              "label": "R"
            },
            {
              "id": "V",
              "label": "V"
            },
            {
              "id": "A",
              "label": "A"
            }
          ],
          "correctAnswerId": "R",
          "success": {
            "de": "Radio beginnt mit R.",
            "en": "radio begins with R."
          },
          "hint": {
            "de": "Höre genau: R, Radio.",
            "en": "Listen closely: R, radio."
          }
        },
        {
          "id": "lu89",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Sonne?",
            "en": "Which letter does sun begin with?"
          },
          "visual": "☀️",
          "answers": [
            {
              "id": "W",
              "label": "W"
            },
            {
              "id": "B",
              "label": "B"
            },
            {
              "id": "S",
              "label": "S"
            }
          ],
          "correctAnswerId": "S",
          "success": {
            "de": "Sonne beginnt mit S.",
            "en": "sun begins with S."
          },
          "hint": {
            "de": "Höre genau: S, Sonne.",
            "en": "Listen closely: S, sun."
          }
        },
        {
          "id": "lu90",
          "prompt": {
            "de": "Mit welchem Buchstaben beginnt Tiger?",
            "en": "Which letter does tiger begin with?"
          },
          "visual": "🐯",
          "answers": [
            {
              "id": "C",
              "label": "C"
            },
            {
              "id": "T",
              "label": "T"
            },
            {
              "id": "X",
              "label": "X"
            }
          ],
          "correctAnswerId": "T",
          "success": {
            "de": "Tiger beginnt mit T.",
            "en": "tiger begins with T."
          },
          "hint": {
            "de": "Höre genau: T, Tiger.",
            "en": "Listen closely: T, tiger."
          }
        }
      ]
    }
  },
  {
    "id": "words",
    "title": {
      "de": "Wörter",
      "en": "Words"
    },
    "subtitle": {
      "de": "Bilder, Laute und Wörter verbinden",
      "en": "Connect pictures, sounds, and words"
    },
    "icon": "Aa",
    "color": "#3E9FD6",
    "lightColor": "#E0F3FF",
    "questionsByAge": {
      "discoverer": [
        {
          "id": "d2wu1",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Ich putze meine Zähne mit der ...",
            "en": "Which word completes Navi's sentence? I brush my teeth with a ..."
          },
          "visual": "🦷",
          "showNavi": true,
          "answers": [
            {
              "id": "toothbrush",
              "label": "🪥"
            },
            {
              "id": "sock",
              "label": "🧦"
            }
          ],
          "correctAnswerId": "toothbrush",
          "success": {
            "de": "Richtig! Das passende Wort ist Zahnbürste.",
            "en": "Correct! The matching word is toothbrush."
          },
          "hint": {
            "de": "Höre auf das Wort Zahnbürste.",
            "en": "Listen for the word toothbrush."
          }
        },
        {
          "id": "d2wu2",
          "prompt": {
            "de": "Was gehört zu einem Bett?",
            "en": "What belongs with a bed?"
          },
          "visual": "🛏️",
          "answers": [
            {
              "id": "key",
              "label": "🔑"
            },
            {
              "id": "pillow",
              "label": "🛌"
            }
          ],
          "correctAnswerId": "pillow",
          "success": {
            "de": "Richtig! Das passende Wort ist Kissen.",
            "en": "Correct! The matching word is pillow."
          },
          "hint": {
            "de": "Höre auf das Wort Kissen.",
            "en": "Listen for the word pillow."
          }
        },
        {
          "id": "d2wu3",
          "prompt": {
            "de": "Wer kocht?",
            "en": "Who is cooking?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cook",
              "label": "🍳"
            },
            {
              "id": "clean",
              "label": "🧹"
            }
          ],
          "correctAnswerId": "cook",
          "success": {
            "de": "Richtig! Das passende Wort ist kochen.",
            "en": "Correct! The matching word is cook."
          },
          "hint": {
            "de": "Höre auf das Wort kochen.",
            "en": "Listen for the word cook."
          }
        },
        {
          "id": "d2wu4",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Zum Schlafen lege ich mich ins ...",
            "en": "Which word completes Navi's sentence? To sleep, I lie down in a ..."
          },
          "visual": "😴",
          "showNavi": true,
          "answers": [
            {
              "id": "chair",
              "label": "🪑"
            },
            {
              "id": "bed",
              "label": "🛏️"
            }
          ],
          "correctAnswerId": "bed",
          "success": {
            "de": "Richtig! Das passende Wort ist Bett.",
            "en": "Correct! The matching word is bed."
          },
          "hint": {
            "de": "Höre auf das Wort Bett.",
            "en": "Listen for the word bed."
          }
        },
        {
          "id": "d2wu5",
          "prompt": {
            "de": "Was gehört zu einem Tisch?",
            "en": "What belongs with a table?"
          },
          "visual": "🪑 ━━━ 🪑",
          "answers": [
            {
              "id": "chair",
              "label": "🪑"
            },
            {
              "id": "umbrella",
              "label": "☂️"
            }
          ],
          "correctAnswerId": "chair",
          "success": {
            "de": "Richtig! Das passende Wort ist Stuhl.",
            "en": "Correct! The matching word is chair."
          },
          "hint": {
            "de": "Höre auf das Wort Stuhl.",
            "en": "Listen for the word chair."
          }
        },
        {
          "id": "d2wu6",
          "prompt": {
            "de": "Wer räumt auf?",
            "en": "Who is cleaning up?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cook",
              "label": "🍳"
            },
            {
              "id": "clean",
              "label": "🧹"
            }
          ],
          "correctAnswerId": "clean",
          "success": {
            "de": "Richtig! Das passende Wort ist aufräumen.",
            "en": "Correct! The matching word is clean up."
          },
          "hint": {
            "de": "Höre auf das Wort aufräumen.",
            "en": "Listen for the word clean up."
          }
        },
        {
          "id": "d2wu7",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Suppe esse ich mit einem ...",
            "en": "Which word completes Navi's sentence? I eat soup with a ..."
          },
          "visual": "🍲",
          "showNavi": true,
          "answers": [
            {
              "id": "spoon",
              "label": "🥄"
            },
            {
              "id": "key",
              "label": "🔑"
            }
          ],
          "correctAnswerId": "spoon",
          "success": {
            "de": "Richtig! Das passende Wort ist Löffel.",
            "en": "Correct! The matching word is spoon."
          },
          "hint": {
            "de": "Höre auf das Wort Löffel.",
            "en": "Listen for the word spoon."
          }
        },
        {
          "id": "d2wu8",
          "prompt": {
            "de": "Was gehört zu einem Stift?",
            "en": "What belongs with a pencil?"
          },
          "visual": "✏️",
          "answers": [
            {
              "id": "shoe",
              "label": "👟"
            },
            {
              "id": "paper",
              "label": "📄"
            }
          ],
          "correctAnswerId": "paper",
          "success": {
            "de": "Richtig! Das passende Wort ist Papier.",
            "en": "Correct! The matching word is paper."
          },
          "hint": {
            "de": "Höre auf das Wort Papier.",
            "en": "Listen for the word paper."
          }
        },
        {
          "id": "d2wu9",
          "prompt": {
            "de": "Wer schneidet?",
            "en": "Who is cutting?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cut",
              "label": "✂️"
            },
            {
              "id": "draw",
              "label": "🖍️"
            }
          ],
          "correctAnswerId": "cut",
          "success": {
            "de": "Richtig! Das passende Wort ist schneiden.",
            "en": "Correct! The matching word is cut."
          },
          "hint": {
            "de": "Höre auf das Wort schneiden.",
            "en": "Listen for the word cut."
          }
        },
        {
          "id": "d2wu10",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Bei Regen nehme ich einen ...",
            "en": "Which word completes Navi's sentence? When it rains, I take an ..."
          },
          "visual": "🌧️",
          "showNavi": true,
          "answers": [
            {
              "id": "hat",
              "label": "🧢"
            },
            {
              "id": "umbrella",
              "label": "☂️"
            }
          ],
          "correctAnswerId": "umbrella",
          "success": {
            "de": "Richtig! Das passende Wort ist Regenschirm.",
            "en": "Correct! The matching word is umbrella."
          },
          "hint": {
            "de": "Höre auf das Wort Regenschirm.",
            "en": "Listen for the word umbrella."
          }
        },
        {
          "id": "d2wu11",
          "prompt": {
            "de": "Was gehört zur Schule?",
            "en": "What belongs with school?"
          },
          "visual": "🏫",
          "answers": [
            {
              "id": "backpack",
              "label": "🎒"
            },
            {
              "id": "bed",
              "label": "🛏️"
            }
          ],
          "correctAnswerId": "backpack",
          "success": {
            "de": "Richtig! Das passende Wort ist Rucksack.",
            "en": "Correct! The matching word is backpack."
          },
          "hint": {
            "de": "Höre auf das Wort Rucksack.",
            "en": "Listen for the word backpack."
          }
        },
        {
          "id": "d2wu12",
          "prompt": {
            "de": "Wer malt?",
            "en": "Who is drawing?"
          },
          "visual": "",
          "answers": [
            {
              "id": "read",
              "label": "📖"
            },
            {
              "id": "draw",
              "label": "🖍️"
            }
          ],
          "correctAnswerId": "draw",
          "success": {
            "de": "Richtig! Das passende Wort ist malen.",
            "en": "Correct! The matching word is draw."
          },
          "hint": {
            "de": "Höre auf das Wort malen.",
            "en": "Listen for the word draw."
          }
        },
        {
          "id": "d2wu13",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Meine Hände wasche ich mit ...",
            "en": "Which word completes Navi's sentence? I wash my hands with ..."
          },
          "visual": "👐",
          "showNavi": true,
          "answers": [
            {
              "id": "soap",
              "label": "🧼"
            },
            {
              "id": "pencil",
              "label": "✏️"
            }
          ],
          "correctAnswerId": "soap",
          "success": {
            "de": "Richtig! Das passende Wort ist Seife.",
            "en": "Correct! The matching word is soap."
          },
          "hint": {
            "de": "Höre auf das Wort Seife.",
            "en": "Listen for the word soap."
          }
        },
        {
          "id": "d2wu14",
          "prompt": {
            "de": "Was gehört zum Fahrradfahren?",
            "en": "What belongs with riding a bicycle?"
          },
          "visual": "🚲",
          "answers": [
            {
              "id": "cup",
              "label": "🥤"
            },
            {
              "id": "helmet",
              "label": "⛑️"
            }
          ],
          "correctAnswerId": "helmet",
          "success": {
            "de": "Richtig! Das passende Wort ist Helm.",
            "en": "Correct! The matching word is helmet."
          },
          "hint": {
            "de": "Höre auf das Wort Helm.",
            "en": "Listen for the word helmet."
          }
        },
        {
          "id": "d2wu15",
          "prompt": {
            "de": "Wer baut?",
            "en": "Who is building?"
          },
          "visual": "",
          "answers": [
            {
              "id": "build",
              "label": "🧱"
            },
            {
              "id": "paint",
              "label": "🎨"
            }
          ],
          "correctAnswerId": "build",
          "success": {
            "de": "Richtig! Das passende Wort ist bauen.",
            "en": "Correct! The matching word is build."
          },
          "hint": {
            "de": "Höre auf das Wort bauen.",
            "en": "Listen for the word build."
          }
        },
        {
          "id": "d2wu16",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Zum Schreiben brauche ich einen ...",
            "en": "Which word completes Navi's sentence? To write, I need a ..."
          },
          "visual": "📘",
          "showNavi": true,
          "answers": [
            {
              "id": "spoon",
              "label": "🥄"
            },
            {
              "id": "pencil",
              "label": "✏️"
            }
          ],
          "correctAnswerId": "pencil",
          "success": {
            "de": "Richtig! Das passende Wort ist Stift.",
            "en": "Correct! The matching word is pencil."
          },
          "hint": {
            "de": "Höre auf das Wort Stift.",
            "en": "Listen for the word pencil."
          }
        },
        {
          "id": "d2wu17",
          "prompt": {
            "de": "Was gehört zu einem Auto?",
            "en": "What belongs with a car?"
          },
          "visual": "🚗",
          "answers": [
            {
              "id": "road",
              "label": "🛣️"
            },
            {
              "id": "pillow",
              "label": "🛌"
            }
          ],
          "correctAnswerId": "road",
          "success": {
            "de": "Richtig! Das passende Wort ist Straße.",
            "en": "Correct! The matching word is road."
          },
          "hint": {
            "de": "Höre auf das Wort Straße.",
            "en": "Listen for the word road."
          }
        },
        {
          "id": "d2wu18",
          "prompt": {
            "de": "Wer hört genau hin?",
            "en": "Who is listening carefully?"
          },
          "visual": "",
          "answers": [
            {
              "id": "look",
              "label": "👀"
            },
            {
              "id": "listen",
              "label": "👂"
            }
          ],
          "correctAnswerId": "listen",
          "success": {
            "de": "Richtig! Das passende Wort ist zuhören.",
            "en": "Correct! The matching word is listen."
          },
          "hint": {
            "de": "Höre auf das Wort zuhören.",
            "en": "Listen for the word listen."
          }
        },
        {
          "id": "d2wu19",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Wasser trinke ich aus einer ...",
            "en": "Which word completes Navi's sentence? I drink water from a ..."
          },
          "visual": "💧",
          "showNavi": true,
          "answers": [
            {
              "id": "cup",
              "label": "🥤"
            },
            {
              "id": "shoe",
              "label": "👟"
            }
          ],
          "correctAnswerId": "cup",
          "success": {
            "de": "Richtig! Das passende Wort ist Tasse.",
            "en": "Correct! The matching word is cup."
          },
          "hint": {
            "de": "Höre auf das Wort Tasse.",
            "en": "Listen for the word cup."
          }
        },
        {
          "id": "d2wu20",
          "prompt": {
            "de": "Was gehört zu einem Zug?",
            "en": "What belongs with a train?"
          },
          "visual": "🚆",
          "answers": [
            {
              "id": "hat",
              "label": "🧢"
            },
            {
              "id": "tracks",
              "label": "🛤️"
            }
          ],
          "correctAnswerId": "tracks",
          "success": {
            "de": "Richtig! Das passende Wort ist Schienen.",
            "en": "Correct! The matching word is tracks."
          },
          "hint": {
            "de": "Höre auf das Wort Schienen.",
            "en": "Listen for the word tracks."
          }
        },
        {
          "id": "d2wu21",
          "prompt": {
            "de": "Wer schaut genau hin?",
            "en": "Who is looking carefully?"
          },
          "visual": "",
          "answers": [
            {
              "id": "look",
              "label": "👀"
            },
            {
              "id": "listen",
              "label": "👂"
            }
          ],
          "correctAnswerId": "look",
          "success": {
            "de": "Richtig! Das passende Wort ist schauen.",
            "en": "Correct! The matching word is look."
          },
          "hint": {
            "de": "Höre auf das Wort schauen.",
            "en": "Listen for the word look."
          }
        },
        {
          "id": "d2wu22",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Eine Tür öffne ich mit einem ...",
            "en": "Which word completes Navi's sentence? I open a door with a ..."
          },
          "visual": "🚪",
          "showNavi": true,
          "answers": [
            {
              "id": "comb",
              "label": "🪮"
            },
            {
              "id": "key",
              "label": "🔑"
            }
          ],
          "correctAnswerId": "key",
          "success": {
            "de": "Richtig! Das passende Wort ist Schlüssel.",
            "en": "Correct! The matching word is key."
          },
          "hint": {
            "de": "Höre auf das Wort Schlüssel.",
            "en": "Listen for the word key."
          }
        },
        {
          "id": "d2wu23",
          "prompt": {
            "de": "Was gehört zu einem Boot?",
            "en": "What belongs with a boat?"
          },
          "visual": "⛵",
          "answers": [
            {
              "id": "water",
              "label": "🌊"
            },
            {
              "id": "chair",
              "label": "🪑"
            }
          ],
          "correctAnswerId": "water",
          "success": {
            "de": "Richtig! Das passende Wort ist Wasser.",
            "en": "Correct! The matching word is water."
          },
          "hint": {
            "de": "Höre auf das Wort Wasser.",
            "en": "Listen for the word water."
          }
        },
        {
          "id": "d2wu24",
          "prompt": {
            "de": "Wer riecht mit der Nase?",
            "en": "Who is smelling?"
          },
          "visual": "",
          "answers": [
            {
              "id": "taste",
              "label": "👅"
            },
            {
              "id": "smell",
              "label": "👃"
            }
          ],
          "correctAnswerId": "smell",
          "success": {
            "de": "Richtig! Das passende Wort ist riechen.",
            "en": "Correct! The matching word is smell."
          },
          "hint": {
            "de": "Höre auf das Wort riechen.",
            "en": "Listen for the word smell."
          }
        },
        {
          "id": "d2wu25",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Auf den Kopf setze ich einen ...",
            "en": "Which word completes Navi's sentence? On my head, I wear a ..."
          },
          "visual": "🙂",
          "showNavi": true,
          "answers": [
            {
              "id": "hat",
              "label": "🧢"
            },
            {
              "id": "shoe",
              "label": "👟"
            }
          ],
          "correctAnswerId": "hat",
          "success": {
            "de": "Richtig! Das passende Wort ist Hut.",
            "en": "Correct! The matching word is hat."
          },
          "hint": {
            "de": "Höre auf das Wort Hut.",
            "en": "Listen for the word hat."
          }
        },
        {
          "id": "d2wu26",
          "prompt": {
            "de": "Was gehört zu einem Flugzeug?",
            "en": "What belongs with an airplane?"
          },
          "visual": "✈️",
          "answers": [
            {
              "id": "plate",
              "label": "🍽️"
            },
            {
              "id": "sky",
              "label": "☁️"
            }
          ],
          "correctAnswerId": "sky",
          "success": {
            "de": "Richtig! Das passende Wort ist Himmel.",
            "en": "Correct! The matching word is sky."
          },
          "hint": {
            "de": "Höre auf das Wort Himmel.",
            "en": "Listen for the word sky."
          }
        },
        {
          "id": "d2wu27",
          "prompt": {
            "de": "Wer schmeckt mit der Zunge?",
            "en": "Who is tasting?"
          },
          "visual": "",
          "answers": [
            {
              "id": "taste",
              "label": "👅"
            },
            {
              "id": "smell",
              "label": "👃"
            }
          ],
          "correctAnswerId": "taste",
          "success": {
            "de": "Richtig! Das passende Wort ist schmecken.",
            "en": "Correct! The matching word is taste."
          },
          "hint": {
            "de": "Höre auf das Wort schmecken.",
            "en": "Listen for the word taste."
          }
        },
        {
          "id": "d2wu28",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? An den Fuß ziehe ich einen ...",
            "en": "Which word completes Navi's sentence? On my foot, I wear a ..."
          },
          "visual": "🦶",
          "showNavi": true,
          "answers": [
            {
              "id": "hat",
              "label": "🧢"
            },
            {
              "id": "shoe",
              "label": "👟"
            }
          ],
          "correctAnswerId": "shoe",
          "success": {
            "de": "Richtig! Das passende Wort ist Schuh.",
            "en": "Correct! The matching word is shoe."
          },
          "hint": {
            "de": "Höre auf das Wort Schuh.",
            "en": "Listen for the word shoe."
          }
        },
        {
          "id": "d2wu29",
          "prompt": {
            "de": "Was gehört zu einer Blume?",
            "en": "What belongs with a flower?"
          },
          "visual": "🌸",
          "answers": [
            {
              "id": "water",
              "label": "💧"
            },
            {
              "id": "key",
              "label": "🔑"
            }
          ],
          "correctAnswerId": "water",
          "success": {
            "de": "Richtig! Das passende Wort ist Wasser.",
            "en": "Correct! The matching word is water."
          },
          "hint": {
            "de": "Höre auf das Wort Wasser.",
            "en": "Listen for the word water."
          }
        },
        {
          "id": "d2wu30",
          "prompt": {
            "de": "Wer feiert?",
            "en": "Who is celebrating?"
          },
          "visual": "",
          "answers": [
            {
              "id": "rest",
              "label": "😴"
            },
            {
              "id": "celebrate",
              "label": "🥳"
            }
          ],
          "correctAnswerId": "celebrate",
          "success": {
            "de": "Richtig! Das passende Wort ist feiern.",
            "en": "Correct! The matching word is celebrate."
          },
          "hint": {
            "de": "Höre auf das Wort feiern.",
            "en": "Listen for the word celebrate."
          }
        },
        {
          "id": "d2wu31",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Meine Haare ordne ich mit einem ...",
            "en": "Which word completes Navi's sentence? I tidy my hair with a ..."
          },
          "visual": "💇",
          "showNavi": true,
          "answers": [
            {
              "id": "comb",
              "label": "🪮"
            },
            {
              "id": "fork",
              "label": "🍴"
            }
          ],
          "correctAnswerId": "comb",
          "success": {
            "de": "Richtig! Das passende Wort ist Kamm.",
            "en": "Correct! The matching word is comb."
          },
          "hint": {
            "de": "Höre auf das Wort Kamm.",
            "en": "Listen for the word comb."
          }
        },
        {
          "id": "d2wu32",
          "prompt": {
            "de": "Was gehört zu Brot?",
            "en": "What belongs with bread?"
          },
          "visual": "🍞",
          "answers": [
            {
              "id": "comb",
              "label": "🪮"
            },
            {
              "id": "cheese",
              "label": "🧀"
            }
          ],
          "correctAnswerId": "cheese",
          "success": {
            "de": "Richtig! Das passende Wort ist Käse.",
            "en": "Correct! The matching word is cheese."
          },
          "hint": {
            "de": "Höre auf das Wort Käse.",
            "en": "Listen for the word cheese."
          }
        },
        {
          "id": "d2wu33",
          "prompt": {
            "de": "Wer rennt?",
            "en": "Who is running?"
          },
          "visual": "",
          "answers": [
            {
              "id": "run",
              "label": "🏃"
            },
            {
              "id": "sit",
              "label": "🪑"
            }
          ],
          "correctAnswerId": "run",
          "success": {
            "de": "Richtig! Das passende Wort ist rennen.",
            "en": "Correct! The matching word is run."
          },
          "hint": {
            "de": "Höre auf das Wort rennen.",
            "en": "Listen for the word run."
          }
        },
        {
          "id": "d2wu34",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Mein Pausenbrot trage ich im ...",
            "en": "Which word completes Navi's sentence? I carry my lunch in a ..."
          },
          "visual": "🍞",
          "showNavi": true,
          "answers": [
            {
              "id": "umbrella",
              "label": "☂️"
            },
            {
              "id": "backpack",
              "label": "🎒"
            }
          ],
          "correctAnswerId": "backpack",
          "success": {
            "de": "Richtig! Das passende Wort ist Rucksack.",
            "en": "Correct! The matching word is backpack."
          },
          "hint": {
            "de": "Höre auf das Wort Rucksack.",
            "en": "Listen for the word backpack."
          }
        },
        {
          "id": "d2wu35",
          "prompt": {
            "de": "Was gehört zu einer Tasse?",
            "en": "What belongs in a cup?"
          },
          "visual": "🥤",
          "answers": [
            {
              "id": "drink",
              "label": "💧"
            },
            {
              "id": "shoe",
              "label": "👟"
            }
          ],
          "correctAnswerId": "drink",
          "success": {
            "de": "Richtig! Das passende Wort ist Getränk.",
            "en": "Correct! The matching word is drink."
          },
          "hint": {
            "de": "Höre auf das Wort Getränk.",
            "en": "Listen for the word drink."
          }
        },
        {
          "id": "d2wu36",
          "prompt": {
            "de": "Wer schläft?",
            "en": "Who is sleeping?"
          },
          "visual": "",
          "answers": [
            {
              "id": "awake",
              "label": "👀"
            },
            {
              "id": "sleep",
              "label": "😴"
            }
          ],
          "correctAnswerId": "sleep",
          "success": {
            "de": "Richtig! Das passende Wort ist schlafen.",
            "en": "Correct! The matching word is sleep."
          },
          "hint": {
            "de": "Höre auf das Wort schlafen.",
            "en": "Listen for the word sleep."
          }
        },
        {
          "id": "d2wu37",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Zum Sitzen brauche ich einen ...",
            "en": "Which word completes Navi's sentence? To sit down, I need a ..."
          },
          "visual": "🧍",
          "showNavi": true,
          "answers": [
            {
              "id": "chair",
              "label": "🪑"
            },
            {
              "id": "bed",
              "label": "🛏️"
            }
          ],
          "correctAnswerId": "chair",
          "success": {
            "de": "Richtig! Das passende Wort ist Stuhl.",
            "en": "Correct! The matching word is chair."
          },
          "hint": {
            "de": "Höre auf das Wort Stuhl.",
            "en": "Listen for the word chair."
          }
        },
        {
          "id": "d2wu38",
          "prompt": {
            "de": "Was gehört zum Händewaschen?",
            "en": "What belongs with washing hands?"
          },
          "visual": "👐",
          "answers": [
            {
              "id": "pencil",
              "label": "✏️"
            },
            {
              "id": "soap",
              "label": "🧼"
            }
          ],
          "correctAnswerId": "soap",
          "success": {
            "de": "Richtig! Das passende Wort ist Seife.",
            "en": "Correct! The matching word is soap."
          },
          "hint": {
            "de": "Höre auf das Wort Seife.",
            "en": "Listen for the word soap."
          }
        },
        {
          "id": "d2wu39",
          "prompt": {
            "de": "Wer isst?",
            "en": "Who is eating?"
          },
          "visual": "",
          "answers": [
            {
              "id": "eat",
              "label": "😋"
            },
            {
              "id": "drink",
              "label": "🥤"
            }
          ],
          "correctAnswerId": "eat",
          "success": {
            "de": "Richtig! Das passende Wort ist essen.",
            "en": "Correct! The matching word is eat."
          },
          "hint": {
            "de": "Höre auf das Wort essen.",
            "en": "Listen for the word eat."
          }
        },
        {
          "id": "d2wu40",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Das Essen liegt auf dem ...",
            "en": "Which word completes Navi's sentence? The food is on the ..."
          },
          "visual": "🍝",
          "showNavi": true,
          "answers": [
            {
              "id": "window",
              "label": "🪟"
            },
            {
              "id": "plate",
              "label": "🍽️"
            }
          ],
          "correctAnswerId": "plate",
          "success": {
            "de": "Richtig! Das passende Wort ist Teller.",
            "en": "Correct! The matching word is plate."
          },
          "hint": {
            "de": "Höre auf das Wort Teller.",
            "en": "Listen for the word plate."
          }
        },
        {
          "id": "d2wu41",
          "prompt": {
            "de": "Was gehört zu Haaren?",
            "en": "What belongs with hair?"
          },
          "visual": "💇",
          "answers": [
            {
              "id": "comb",
              "label": "🪮"
            },
            {
              "id": "fork",
              "label": "🍴"
            }
          ],
          "correctAnswerId": "comb",
          "success": {
            "de": "Richtig! Das passende Wort ist Kamm.",
            "en": "Correct! The matching word is comb."
          },
          "hint": {
            "de": "Höre auf das Wort Kamm.",
            "en": "Listen for the word comb."
          }
        },
        {
          "id": "d2wu42",
          "prompt": {
            "de": "Wer trinkt?",
            "en": "Who is drinking?"
          },
          "visual": "",
          "answers": [
            {
              "id": "eat",
              "label": "🍽️"
            },
            {
              "id": "drink",
              "label": "🥤"
            }
          ],
          "correctAnswerId": "drink",
          "success": {
            "de": "Richtig! Das passende Wort ist trinken.",
            "en": "Correct! The matching word is drink."
          },
          "hint": {
            "de": "Höre auf das Wort trinken.",
            "en": "Listen for the word drink."
          }
        },
        {
          "id": "d2wu43",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Durch das ... kommt Licht ins Zimmer.",
            "en": "Which word completes Navi's sentence? Light comes into the room through the ..."
          },
          "visual": "☀️",
          "showNavi": true,
          "answers": [
            {
              "id": "window",
              "label": "🪟"
            },
            {
              "id": "door",
              "label": "🚪"
            }
          ],
          "correctAnswerId": "window",
          "success": {
            "de": "Richtig! Das passende Wort ist Fenster.",
            "en": "Correct! The matching word is window."
          },
          "hint": {
            "de": "Höre auf das Wort Fenster.",
            "en": "Listen for the word window."
          }
        },
        {
          "id": "d2wu44",
          "prompt": {
            "de": "Was gehört zu einer Uhr?",
            "en": "What belongs with a clock?"
          },
          "visual": "🕐",
          "answers": [
            {
              "id": "umbrella",
              "label": "☂️"
            },
            {
              "id": "time",
              "label": "⏰"
            }
          ],
          "correctAnswerId": "time",
          "success": {
            "de": "Richtig! Das passende Wort ist Zeit.",
            "en": "Correct! The matching word is time."
          },
          "hint": {
            "de": "Höre auf das Wort Zeit.",
            "en": "Listen for the word time."
          }
        },
        {
          "id": "d2wu45",
          "prompt": {
            "de": "Wer liest?",
            "en": "Who is reading?"
          },
          "visual": "",
          "answers": [
            {
              "id": "read",
              "label": "📖"
            },
            {
              "id": "write",
              "label": "✍️"
            }
          ],
          "correctAnswerId": "read",
          "success": {
            "de": "Richtig! Das passende Wort ist lesen.",
            "en": "Correct! The matching word is read."
          },
          "hint": {
            "de": "Höre auf das Wort lesen.",
            "en": "Listen for the word read."
          }
        },
        {
          "id": "d2wu46",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Auf der Straße fährt ein ...",
            "en": "Which word completes Navi's sentence? A ... drives on the road."
          },
          "visual": "🛣️",
          "showNavi": true,
          "answers": [
            {
              "id": "boat",
              "label": "⛵"
            },
            {
              "id": "car",
              "label": "🚗"
            }
          ],
          "correctAnswerId": "car",
          "success": {
            "de": "Richtig! Das passende Wort ist Auto.",
            "en": "Correct! The matching word is car."
          },
          "hint": {
            "de": "Höre auf das Wort Auto.",
            "en": "Listen for the word car."
          }
        },
        {
          "id": "d2wu47",
          "prompt": {
            "de": "Was gehört zu einem Haus?",
            "en": "What belongs with a house?"
          },
          "visual": "🏠",
          "answers": [
            {
              "id": "door",
              "label": "🚪"
            },
            {
              "id": "spoon",
              "label": "🥄"
            }
          ],
          "correctAnswerId": "door",
          "success": {
            "de": "Richtig! Das passende Wort ist Tür.",
            "en": "Correct! The matching word is door."
          },
          "hint": {
            "de": "Höre auf das Wort Tür.",
            "en": "Listen for the word door."
          }
        },
        {
          "id": "d2wu48",
          "prompt": {
            "de": "Wer schreibt?",
            "en": "Who is writing?"
          },
          "visual": "",
          "answers": [
            {
              "id": "read",
              "label": "📖"
            },
            {
              "id": "write",
              "label": "✍️"
            }
          ],
          "correctAnswerId": "write",
          "success": {
            "de": "Richtig! Das passende Wort ist schreiben.",
            "en": "Correct! The matching word is write."
          },
          "hint": {
            "de": "Höre auf das Wort schreiben.",
            "en": "Listen for the word write."
          }
        },
        {
          "id": "d2wu49",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Auf Schienen fährt der ...",
            "en": "Which word completes Navi's sentence? The ... travels on rails."
          },
          "visual": "🛤️",
          "showNavi": true,
          "answers": [
            {
              "id": "train",
              "label": "🚆"
            },
            {
              "id": "airplane",
              "label": "✈️"
            }
          ],
          "correctAnswerId": "train",
          "success": {
            "de": "Richtig! Das passende Wort ist Zug.",
            "en": "Correct! The matching word is train."
          },
          "hint": {
            "de": "Höre auf das Wort Zug.",
            "en": "Listen for the word train."
          }
        },
        {
          "id": "d2wu50",
          "prompt": {
            "de": "Was gehört zu einem Fenster?",
            "en": "What belongs with a window?"
          },
          "visual": "🪟",
          "answers": [
            {
              "id": "sock",
              "label": "🧦"
            },
            {
              "id": "light",
              "label": "☀️"
            }
          ],
          "correctAnswerId": "light",
          "success": {
            "de": "Richtig! Das passende Wort ist Licht.",
            "en": "Correct! The matching word is light."
          },
          "hint": {
            "de": "Höre auf das Wort Licht.",
            "en": "Listen for the word light."
          }
        },
        {
          "id": "d2wu51",
          "prompt": {
            "de": "Wer singt?",
            "en": "Who is singing?"
          },
          "visual": "",
          "answers": [
            {
              "id": "sing",
              "label": "🎤"
            },
            {
              "id": "listen",
              "label": "🎧"
            }
          ],
          "correctAnswerId": "sing",
          "success": {
            "de": "Richtig! Das passende Wort ist singen.",
            "en": "Correct! The matching word is sing."
          },
          "hint": {
            "de": "Höre auf das Wort singen.",
            "en": "Listen for the word sing."
          }
        },
        {
          "id": "d2wu52",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Über das Wasser fährt ein ...",
            "en": "Which word completes Navi's sentence? A ... travels across the water."
          },
          "visual": "🌊",
          "showNavi": true,
          "answers": [
            {
              "id": "bus",
              "label": "🚌"
            },
            {
              "id": "boat",
              "label": "⛵"
            }
          ],
          "correctAnswerId": "boat",
          "success": {
            "de": "Richtig! Das passende Wort ist Boot.",
            "en": "Correct! The matching word is boat."
          },
          "hint": {
            "de": "Höre auf das Wort Boot.",
            "en": "Listen for the word boat."
          }
        },
        {
          "id": "d2wu53",
          "prompt": {
            "de": "Was gehört zu einer Socke?",
            "en": "What belongs with a sock?"
          },
          "visual": "🧦",
          "answers": [
            {
              "id": "shoe",
              "label": "👟"
            },
            {
              "id": "hat",
              "label": "🧢"
            }
          ],
          "correctAnswerId": "shoe",
          "success": {
            "de": "Richtig! Das passende Wort ist Schuh.",
            "en": "Correct! The matching word is shoe."
          },
          "hint": {
            "de": "Höre auf das Wort Schuh.",
            "en": "Listen for the word shoe."
          }
        },
        {
          "id": "d2wu54",
          "prompt": {
            "de": "Wer tanzt?",
            "en": "Who is dancing?"
          },
          "visual": "",
          "answers": [
            {
              "id": "stand",
              "label": "🧍"
            },
            {
              "id": "dance",
              "label": "💃"
            }
          ],
          "correctAnswerId": "dance",
          "success": {
            "de": "Richtig! Das passende Wort ist tanzen.",
            "en": "Correct! The matching word is dance."
          },
          "hint": {
            "de": "Höre auf das Wort tanzen.",
            "en": "Listen for the word dance."
          }
        },
        {
          "id": "d2wu55",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Durch den Himmel fliegt ein ...",
            "en": "Which word completes Navi's sentence? An ... flies through the sky."
          },
          "visual": "☁️",
          "showNavi": true,
          "answers": [
            {
              "id": "airplane",
              "label": "✈️"
            },
            {
              "id": "bicycle",
              "label": "🚲"
            }
          ],
          "correctAnswerId": "airplane",
          "success": {
            "de": "Richtig! Das passende Wort ist Flugzeug.",
            "en": "Correct! The matching word is airplane."
          },
          "hint": {
            "de": "Höre auf das Wort Flugzeug.",
            "en": "Listen for the word airplane."
          }
        },
        {
          "id": "d2wu56",
          "prompt": {
            "de": "Was gehört zu einer warmen Jacke?",
            "en": "What belongs with a warm jacket?"
          },
          "visual": "🧥",
          "answers": [
            {
              "id": "sun",
              "label": "☀️"
            },
            {
              "id": "cold",
              "label": "❄️"
            }
          ],
          "correctAnswerId": "cold",
          "success": {
            "de": "Richtig! Das passende Wort ist Kälte.",
            "en": "Correct! The matching word is cold."
          },
          "hint": {
            "de": "Höre auf das Wort Kälte.",
            "en": "Listen for the word cold."
          }
        },
        {
          "id": "d2wu57",
          "prompt": {
            "de": "Wer schwimmt?",
            "en": "Who is swimming?"
          },
          "visual": "",
          "answers": [
            {
              "id": "swim",
              "label": "🏊"
            },
            {
              "id": "walk",
              "label": "🚶"
            }
          ],
          "correctAnswerId": "swim",
          "success": {
            "de": "Richtig! Das passende Wort ist schwimmen.",
            "en": "Correct! The matching word is swim."
          },
          "hint": {
            "de": "Höre auf das Wort schwimmen.",
            "en": "Listen for the word swim."
          }
        },
        {
          "id": "d2wu58",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Mit Pedalen fahre ich auf dem ...",
            "en": "Which word completes Navi's sentence? I use pedals to ride a ..."
          },
          "visual": "🦵",
          "showNavi": true,
          "answers": [
            {
              "id": "bed",
              "label": "🛏️"
            },
            {
              "id": "bicycle",
              "label": "🚲"
            }
          ],
          "correctAnswerId": "bicycle",
          "success": {
            "de": "Richtig! Das passende Wort ist Fahrrad.",
            "en": "Correct! The matching word is bicycle."
          },
          "hint": {
            "de": "Höre auf das Wort Fahrrad.",
            "en": "Listen for the word bicycle."
          }
        },
        {
          "id": "d2wu59",
          "prompt": {
            "de": "Was gehört zu einem Teller?",
            "en": "What belongs on a plate?"
          },
          "visual": "🍽️",
          "answers": [
            {
              "id": "food",
              "label": "🍝"
            },
            {
              "id": "key",
              "label": "🔑"
            }
          ],
          "correctAnswerId": "food",
          "success": {
            "de": "Richtig! Das passende Wort ist Essen.",
            "en": "Correct! The matching word is food."
          },
          "hint": {
            "de": "Höre auf das Wort Essen.",
            "en": "Listen for the word food."
          }
        },
        {
          "id": "d2wu60",
          "prompt": {
            "de": "Wer geht zu Fuß?",
            "en": "Who is walking?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cycle",
              "label": "🚴"
            },
            {
              "id": "walk",
              "label": "🚶"
            }
          ],
          "correctAnswerId": "walk",
          "success": {
            "de": "Richtig! Das passende Wort ist gehen.",
            "en": "Correct! The matching word is walk."
          },
          "hint": {
            "de": "Höre auf das Wort gehen.",
            "en": "Listen for the word walk."
          }
        },
        {
          "id": "d2wu61",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Wenn es kalt ist, trage ich eine ...",
            "en": "Which word completes Navi's sentence? When it is cold, I wear a ..."
          },
          "visual": "❄️",
          "showNavi": true,
          "answers": [
            {
              "id": "jacket",
              "label": "🧥"
            },
            {
              "id": "dress",
              "label": "👗"
            }
          ],
          "correctAnswerId": "jacket",
          "success": {
            "de": "Richtig! Das passende Wort ist Jacke.",
            "en": "Correct! The matching word is jacket."
          },
          "hint": {
            "de": "Höre auf das Wort Jacke.",
            "en": "Listen for the word jacket."
          }
        },
        {
          "id": "d2wu62",
          "prompt": {
            "de": "Was gehört zu den Zähnen?",
            "en": "What belongs with teeth?"
          },
          "visual": "🦷",
          "answers": [
            {
              "id": "sock",
              "label": "🧦"
            },
            {
              "id": "toothbrush",
              "label": "🪥"
            }
          ],
          "correctAnswerId": "toothbrush",
          "success": {
            "de": "Richtig! Das passende Wort ist Zahnbürste.",
            "en": "Correct! The matching word is toothbrush."
          },
          "hint": {
            "de": "Höre auf das Wort Zahnbürste.",
            "en": "Listen for the word toothbrush."
          }
        },
        {
          "id": "d2wu63",
          "prompt": {
            "de": "Wer fährt Fahrrad?",
            "en": "Who is cycling?"
          },
          "visual": "",
          "answers": [
            {
              "id": "cycle",
              "label": "🚴"
            },
            {
              "id": "drive",
              "label": "🚗"
            }
          ],
          "correctAnswerId": "cycle",
          "success": {
            "de": "Richtig! Das passende Wort ist Rad fahren.",
            "en": "Correct! The matching word is cycle."
          },
          "hint": {
            "de": "Höre auf das Wort Rad fahren.",
            "en": "Listen for the word cycle."
          }
        },
        {
          "id": "d2wu64",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Bevor ich Schuhe anziehe, brauche ich ...",
            "en": "Which word completes Navi's sentence? Before I put on shoes, I need ..."
          },
          "visual": "👟",
          "showNavi": true,
          "answers": [
            {
              "id": "gloves",
              "label": "🧤"
            },
            {
              "id": "socks",
              "label": "🧦"
            }
          ],
          "correctAnswerId": "socks",
          "success": {
            "de": "Richtig! Das passende Wort ist Socken.",
            "en": "Correct! The matching word is socks."
          },
          "hint": {
            "de": "Höre auf das Wort Socken.",
            "en": "Listen for the word socks."
          }
        },
        {
          "id": "d2wu65",
          "prompt": {
            "de": "Was gehört zum Fuß?",
            "en": "What belongs on a foot?"
          },
          "visual": "🦶",
          "answers": [
            {
              "id": "shoe",
              "label": "👟"
            },
            {
              "id": "hat",
              "label": "🧢"
            }
          ],
          "correctAnswerId": "shoe",
          "success": {
            "de": "Richtig! Das passende Wort ist Schuh.",
            "en": "Correct! The matching word is shoe."
          },
          "hint": {
            "de": "Höre auf das Wort Schuh.",
            "en": "Listen for the word shoe."
          }
        },
        {
          "id": "d2wu66",
          "prompt": {
            "de": "Wer klatscht?",
            "en": "Who is clapping?"
          },
          "visual": "",
          "answers": [
            {
              "id": "wave",
              "label": "👋"
            },
            {
              "id": "clap",
              "label": "👏"
            }
          ],
          "correctAnswerId": "clap",
          "success": {
            "de": "Richtig! Das passende Wort ist klatschen.",
            "en": "Correct! The matching word is clap."
          },
          "hint": {
            "de": "Höre auf das Wort klatschen.",
            "en": "Listen for the word clap."
          }
        },
        {
          "id": "d2wu67",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Das weiße Getränk im Glas ist ...",
            "en": "Which word completes Navi's sentence? The white drink in the glass is ..."
          },
          "visual": "🥛",
          "showNavi": true,
          "answers": [
            {
              "id": "milk",
              "label": "🥛"
            },
            {
              "id": "bread",
              "label": "🍞"
            }
          ],
          "correctAnswerId": "milk",
          "success": {
            "de": "Richtig! Das passende Wort ist Milch.",
            "en": "Correct! The matching word is milk."
          },
          "hint": {
            "de": "Höre auf das Wort Milch.",
            "en": "Listen for the word milk."
          }
        },
        {
          "id": "d2wu68",
          "prompt": {
            "de": "Was gehört zur Hand?",
            "en": "What belongs on a hand?"
          },
          "visual": "✋",
          "answers": [
            {
              "id": "shoe",
              "label": "👟"
            },
            {
              "id": "glove",
              "label": "🧤"
            }
          ],
          "correctAnswerId": "glove",
          "success": {
            "de": "Richtig! Das passende Wort ist Handschuh.",
            "en": "Correct! The matching word is glove."
          },
          "hint": {
            "de": "Höre auf das Wort Handschuh.",
            "en": "Listen for the word glove."
          }
        },
        {
          "id": "d2wu69",
          "prompt": {
            "de": "Wer winkt?",
            "en": "Who is waving?"
          },
          "visual": "",
          "answers": [
            {
              "id": "wave",
              "label": "👋"
            },
            {
              "id": "point",
              "label": "👆"
            }
          ],
          "correctAnswerId": "wave",
          "success": {
            "de": "Richtig! Das passende Wort ist winken.",
            "en": "Correct! The matching word is wave."
          },
          "hint": {
            "de": "Höre auf das Wort winken.",
            "en": "Listen for the word wave."
          }
        },
        {
          "id": "d2wu70",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? In der Bäckerei kaufe ich ...",
            "en": "Which word completes Navi's sentence? At the bakery, I buy ..."
          },
          "visual": "🥐",
          "showNavi": true,
          "answers": [
            {
              "id": "car",
              "label": "🚗"
            },
            {
              "id": "bread",
              "label": "🍞"
            }
          ],
          "correctAnswerId": "bread",
          "success": {
            "de": "Richtig! Das passende Wort ist Brot.",
            "en": "Correct! The matching word is bread."
          },
          "hint": {
            "de": "Höre auf das Wort Brot.",
            "en": "Listen for the word bread."
          }
        },
        {
          "id": "d2wu71",
          "prompt": {
            "de": "Was gehört zum Kopf?",
            "en": "What belongs on a head?"
          },
          "visual": "🙂",
          "answers": [
            {
              "id": "hat",
              "label": "🧢"
            },
            {
              "id": "sock",
              "label": "🧦"
            }
          ],
          "correctAnswerId": "hat",
          "success": {
            "de": "Richtig! Das passende Wort ist Hut.",
            "en": "Correct! The matching word is hat."
          },
          "hint": {
            "de": "Höre auf das Wort Hut.",
            "en": "Listen for the word hat."
          }
        },
        {
          "id": "d2wu72",
          "prompt": {
            "de": "Wer zeigt mit dem Finger?",
            "en": "Who is pointing?"
          },
          "visual": "",
          "answers": [
            {
              "id": "clap",
              "label": "👏"
            },
            {
              "id": "point",
              "label": "👆"
            }
          ],
          "correctAnswerId": "point",
          "success": {
            "de": "Richtig! Das passende Wort ist zeigen.",
            "en": "Correct! The matching word is point."
          },
          "hint": {
            "de": "Höre auf das Wort zeigen.",
            "en": "Listen for the word point."
          }
        },
        {
          "id": "d2wu73",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Zum bunten Malen nehme ich ...",
            "en": "Which word completes Navi's sentence? For colorful drawing, I use ..."
          },
          "visual": "🎨",
          "showNavi": true,
          "answers": [
            {
              "id": "crayons",
              "label": "🖍️"
            },
            {
              "id": "toothbrush",
              "label": "🪥"
            }
          ],
          "correctAnswerId": "crayons",
          "success": {
            "de": "Richtig! Das passende Wort ist Buntstifte.",
            "en": "Correct! The matching word is crayons."
          },
          "hint": {
            "de": "Höre auf das Wort Buntstifte.",
            "en": "Listen for the word crayons."
          }
        },
        {
          "id": "d2wu74",
          "prompt": {
            "de": "Was gehört zu Regen?",
            "en": "What belongs with rain?"
          },
          "visual": "🌧️",
          "answers": [
            {
              "id": "book",
              "label": "📘"
            },
            {
              "id": "umbrella",
              "label": "☂️"
            }
          ],
          "correctAnswerId": "umbrella",
          "success": {
            "de": "Richtig! Das passende Wort ist Regenschirm.",
            "en": "Correct! The matching word is umbrella."
          },
          "hint": {
            "de": "Höre auf das Wort Regenschirm.",
            "en": "Listen for the word umbrella."
          }
        },
        {
          "id": "d2wu75",
          "prompt": {
            "de": "Wer lacht?",
            "en": "Who is laughing?"
          },
          "visual": "",
          "answers": [
            {
              "id": "laugh",
              "label": "😂"
            },
            {
              "id": "cry",
              "label": "😭"
            }
          ],
          "correctAnswerId": "laugh",
          "success": {
            "de": "Richtig! Das passende Wort ist lachen.",
            "en": "Correct! The matching word is laugh."
          },
          "hint": {
            "de": "Höre auf das Wort lachen.",
            "en": "Listen for the word laugh."
          }
        },
        {
          "id": "d2wu76",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Mit diesem Instrument mache ich Bum-bum: die ...",
            "en": "Which word completes Navi's sentence? I make a boom-boom sound with the ..."
          },
          "visual": "🎵",
          "showNavi": true,
          "answers": [
            {
              "id": "clock",
              "label": "🕐"
            },
            {
              "id": "drum",
              "label": "🥁"
            }
          ],
          "correctAnswerId": "drum",
          "success": {
            "de": "Richtig! Das passende Wort ist Trommel.",
            "en": "Correct! The matching word is drum."
          },
          "hint": {
            "de": "Höre auf das Wort Trommel.",
            "en": "Listen for the word drum."
          }
        },
        {
          "id": "d2wu77",
          "prompt": {
            "de": "Was gehört zu hellem Sonnenschein?",
            "en": "What belongs with bright sunshine?"
          },
          "visual": "☀️",
          "answers": [
            {
              "id": "sunglasses",
              "label": "🕶️"
            },
            {
              "id": "fork",
              "label": "🍴"
            }
          ],
          "correctAnswerId": "sunglasses",
          "success": {
            "de": "Richtig! Das passende Wort ist Sonnenbrille.",
            "en": "Correct! The matching word is sunglasses."
          },
          "hint": {
            "de": "Höre auf das Wort Sonnenbrille.",
            "en": "Listen for the word sunglasses."
          }
        },
        {
          "id": "d2wu78",
          "prompt": {
            "de": "Wer weint?",
            "en": "Who is crying?"
          },
          "visual": "",
          "answers": [
            {
              "id": "smile",
              "label": "🙂"
            },
            {
              "id": "cry",
              "label": "😭"
            }
          ],
          "correctAnswerId": "cry",
          "success": {
            "de": "Richtig! Das passende Wort ist weinen.",
            "en": "Correct! The matching word is cry."
          },
          "hint": {
            "de": "Höre auf das Wort weinen.",
            "en": "Listen for the word cry."
          }
        },
        {
          "id": "d2wu79",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Die ... zeigt mir die Zeit.",
            "en": "Which word completes Navi's sentence? The ... tells me the time."
          },
          "visual": "⏰",
          "showNavi": true,
          "answers": [
            {
              "id": "clock",
              "label": "🕐"
            },
            {
              "id": "key",
              "label": "🔑"
            }
          ],
          "correctAnswerId": "clock",
          "success": {
            "de": "Richtig! Das passende Wort ist Uhr.",
            "en": "Correct! The matching word is clock."
          },
          "hint": {
            "de": "Höre auf das Wort Uhr.",
            "en": "Listen for the word clock."
          }
        },
        {
          "id": "d2wu80",
          "prompt": {
            "de": "Was gehört zu einem Schloss?",
            "en": "What belongs with a lock?"
          },
          "visual": "🔒",
          "answers": [
            {
              "id": "comb",
              "label": "🪮"
            },
            {
              "id": "key",
              "label": "🔑"
            }
          ],
          "correctAnswerId": "key",
          "success": {
            "de": "Richtig! Das passende Wort ist Schlüssel.",
            "en": "Correct! The matching word is key."
          },
          "hint": {
            "de": "Höre auf das Wort Schlüssel.",
            "en": "Listen for the word key."
          }
        },
        {
          "id": "d2wu81",
          "prompt": {
            "de": "Wer springt?",
            "en": "Who is jumping?"
          },
          "visual": "",
          "answers": [
            {
              "id": "jump",
              "label": "🤾"
            },
            {
              "id": "sit",
              "label": "🪑"
            }
          ],
          "correctAnswerId": "jump",
          "success": {
            "de": "Richtig! Das passende Wort ist springen.",
            "en": "Correct! The matching word is jump."
          },
          "hint": {
            "de": "Höre auf das Wort springen.",
            "en": "Listen for the word jump."
          }
        },
        {
          "id": "d2wu82",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Nudeln esse ich mit einer ...",
            "en": "Which word completes Navi's sentence? I eat noodles with a ..."
          },
          "visual": "🍝",
          "showNavi": true,
          "answers": [
            {
              "id": "comb",
              "label": "🪮"
            },
            {
              "id": "fork",
              "label": "🍴"
            }
          ],
          "correctAnswerId": "fork",
          "success": {
            "de": "Richtig! Das passende Wort ist Gabel.",
            "en": "Correct! The matching word is fork."
          },
          "hint": {
            "de": "Höre auf das Wort Gabel.",
            "en": "Listen for the word fork."
          }
        },
        {
          "id": "d2wu83",
          "prompt": {
            "de": "Was gehört zu einem Brief?",
            "en": "What belongs with a letter?"
          },
          "visual": "✉️",
          "answers": [
            {
              "id": "mailbox",
              "label": "📮"
            },
            {
              "id": "shoe",
              "label": "👟"
            }
          ],
          "correctAnswerId": "mailbox",
          "success": {
            "de": "Richtig! Das passende Wort ist Briefkasten.",
            "en": "Correct! The matching word is mailbox."
          },
          "hint": {
            "de": "Höre auf das Wort Briefkasten.",
            "en": "Listen for the word mailbox."
          }
        },
        {
          "id": "d2wu84",
          "prompt": {
            "de": "Wer wäscht die Hände?",
            "en": "Who is washing their hands?"
          },
          "visual": "",
          "answers": [
            {
              "id": "brush",
              "label": "🪥"
            },
            {
              "id": "wash",
              "label": "🧼"
            }
          ],
          "correctAnswerId": "wash",
          "success": {
            "de": "Richtig! Das passende Wort ist waschen.",
            "en": "Correct! The matching word is wash."
          },
          "hint": {
            "de": "Höre auf das Wort waschen.",
            "en": "Listen for the word wash."
          }
        },
        {
          "id": "d2wu85",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Beim Essen steht der Teller auf dem ...",
            "en": "Which word completes Navi's sentence? At mealtime, the plate sits on the ..."
          },
          "visual": "🍽️",
          "showNavi": true,
          "answers": [
            {
              "id": "table",
              "label": "🪑 ━━━ 🪑"
            },
            {
              "id": "bed",
              "label": "🛏️"
            }
          ],
          "correctAnswerId": "table",
          "success": {
            "de": "Richtig! Das passende Wort ist Tisch.",
            "en": "Correct! The matching word is table."
          },
          "hint": {
            "de": "Höre auf das Wort Tisch.",
            "en": "Listen for the word table."
          }
        },
        {
          "id": "d2wu86",
          "prompt": {
            "de": "Was gehört zu einer Suppe?",
            "en": "What belongs with soup?"
          },
          "visual": "🍲",
          "answers": [
            {
              "id": "pencil",
              "label": "✏️"
            },
            {
              "id": "spoon",
              "label": "🥄"
            }
          ],
          "correctAnswerId": "spoon",
          "success": {
            "de": "Richtig! Das passende Wort ist Löffel.",
            "en": "Correct! The matching word is spoon."
          },
          "hint": {
            "de": "Höre auf das Wort Löffel.",
            "en": "Listen for the word spoon."
          }
        },
        {
          "id": "d2wu87",
          "prompt": {
            "de": "Wer putzt die Zähne?",
            "en": "Who is brushing their teeth?"
          },
          "visual": "",
          "answers": [
            {
              "id": "brush",
              "label": "🪥"
            },
            {
              "id": "comb",
              "label": "🪮"
            }
          ],
          "correctAnswerId": "brush",
          "success": {
            "de": "Richtig! Das passende Wort ist Zähne putzen.",
            "en": "Correct! The matching word is brush teeth."
          },
          "hint": {
            "de": "Höre auf das Wort Zähne putzen.",
            "en": "Listen for the word brush teeth."
          }
        },
        {
          "id": "d2wu88",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Durch die ... gehe ich in das Zimmer.",
            "en": "Which word completes Navi's sentence? I walk into the room through the ..."
          },
          "visual": "🏠",
          "showNavi": true,
          "answers": [
            {
              "id": "window",
              "label": "🪟"
            },
            {
              "id": "door",
              "label": "🚪"
            }
          ],
          "correctAnswerId": "door",
          "success": {
            "de": "Richtig! Das passende Wort ist Tür.",
            "en": "Correct! The matching word is door."
          },
          "hint": {
            "de": "Höre auf das Wort Tür.",
            "en": "Listen for the word door."
          }
        },
        {
          "id": "d2wu89",
          "prompt": {
            "de": "Was gehört zu Spaghetti?",
            "en": "What belongs with spaghetti?"
          },
          "visual": "🍝",
          "answers": [
            {
              "id": "fork",
              "label": "🍴"
            },
            {
              "id": "comb",
              "label": "🪮"
            }
          ],
          "correctAnswerId": "fork",
          "success": {
            "de": "Richtig! Das passende Wort ist Gabel.",
            "en": "Correct! The matching word is fork."
          },
          "hint": {
            "de": "Höre auf das Wort Gabel.",
            "en": "Listen for the word fork."
          }
        },
        {
          "id": "d2wu90",
          "prompt": {
            "de": "Wer kämmt die Haare?",
            "en": "Who is combing their hair?"
          },
          "visual": "",
          "answers": [
            {
              "id": "brush",
              "label": "🪥"
            },
            {
              "id": "comb",
              "label": "🪮"
            }
          ],
          "correctAnswerId": "comb",
          "success": {
            "de": "Richtig! Das passende Wort ist Haare kämmen.",
            "en": "Correct! The matching word is comb hair."
          },
          "hint": {
            "de": "Höre auf das Wort Haare kämmen.",
            "en": "Listen for the word comb hair."
          }
        }
      ],
      "adventurer": [
        {
          "id": "a2wu1",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Vom Baum pflücke ich einen roten ...",
            "en": "Which word completes Navi's sentence? From the tree I pick a red ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-0-0",
              "label": {
                "de": "Apfel",
                "en": "Apple"
              }
            },
            {
              "id": "sentence-0-1",
              "label": {
                "de": "Brot",
                "en": "Bread"
              }
            },
            {
              "id": "sentence-0-2",
              "label": {
                "de": "Boot",
                "en": "Boat"
              }
            }
          ],
          "correctAnswerId": "sentence-0-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Apfel.",
            "en": "Correct! The missing word is Apple."
          },
          "hint": {
            "de": "Setze Apfel probeweise in den Satz ein.",
            "en": "Try putting Apple into the sentence."
          }
        },
        {
          "id": "a2wu2",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Käse?",
            "en": "Which word group does Cheese belong to?"
          },
          "visual": "Käse",
          "answers": [
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "nature",
              "label": {
                "de": "Natur",
                "en": "nature"
              }
            },
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            }
          ],
          "correctAnswerId": "food",
          "success": {
            "de": "Käse gehört zur Wortgruppe Lebensmittel.",
            "en": "Cheese belongs to the word group food."
          },
          "hint": {
            "de": "Überlege, was Käse bezeichnet.",
            "en": "Think about what Cheese describes."
          }
        },
        {
          "id": "a2wu3",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Schlafen und Zeit?",
            "en": "Which joined word matches bed and time?"
          },
          "visual": "😴 + 🕐",
          "answers": [
            {
              "id": "compound-20-0",
              "label": {
                "de": "Wasserfall",
                "en": "Waterfall"
              }
            },
            {
              "id": "compound-20-1",
              "label": {
                "de": "Schlafenszeit",
                "en": "Bedtime"
              }
            },
            {
              "id": "compound-20-2",
              "label": {
                "de": "Gartenstuhl",
                "en": "Garden chair"
              }
            }
          ],
          "correctAnswerId": "compound-20-1",
          "success": {
            "de": "Genau! Das Wort lautet Schlafenszeit.",
            "en": "Exactly! The word is Bedtime."
          },
          "hint": {
            "de": "Sprich Schlafen und Zeit direkt hintereinander.",
            "en": "Say bed and time together."
          }
        },
        {
          "id": "a2wu4",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Die grüne ... ist unten breit.",
            "en": "Which word completes Navi's sentence? The green ... is wide at the bottom."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-1-0",
              "label": {
                "de": "Käse",
                "en": "Cheese"
              }
            },
            {
              "id": "sentence-1-1",
              "label": {
                "de": "Flugzeug",
                "en": "Airplane"
              }
            },
            {
              "id": "sentence-1-2",
              "label": {
                "de": "Birne",
                "en": "Pear"
              }
            }
          ],
          "correctAnswerId": "sentence-1-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Birne.",
            "en": "Correct! The missing word is Pear."
          },
          "hint": {
            "de": "Setze Birne probeweise in den Satz ein.",
            "en": "Try putting Pear into the sentence."
          }
        },
        {
          "id": "a2wu5",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Milch?",
            "en": "Which word group does Milk belong to?"
          },
          "visual": "Milch",
          "answers": [
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            },
            {
              "id": "sky",
              "label": {
                "de": "Himmel und Wetter",
                "en": "sky and weather"
              }
            }
          ],
          "correctAnswerId": "drinks",
          "success": {
            "de": "Milch gehört zur Wortgruppe Getränke.",
            "en": "Milk belongs to the word group drinks."
          },
          "hint": {
            "de": "Überlege, was Milch bezeichnet.",
            "en": "Think about what Milk describes."
          }
        },
        {
          "id": "a2wu6",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Mond und Licht?",
            "en": "Which joined word matches moon and light?"
          },
          "visual": "🌙 + 💡",
          "answers": [
            {
              "id": "compound-21-0",
              "label": {
                "de": "Mondlicht",
                "en": "Moonlight"
              }
            },
            {
              "id": "compound-21-1",
              "label": {
                "de": "Kaffeetasse",
                "en": "Coffee cup"
              }
            },
            {
              "id": "compound-21-2",
              "label": {
                "de": "Feuerwehrauto",
                "en": "Fire truck"
              }
            }
          ],
          "correctAnswerId": "compound-21-0",
          "success": {
            "de": "Genau! Das Wort lautet Mondlicht.",
            "en": "Exactly! The word is Moonlight."
          },
          "hint": {
            "de": "Sprich Mond und Licht direkt hintereinander.",
            "en": "Say moon and light together."
          }
        },
        {
          "id": "a2wu7",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Die lange gelbe ... ist krumm.",
            "en": "Which word completes Navi's sentence? The long yellow ... is curved."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-2-0",
              "label": {
                "de": "Sonne",
                "en": "Sun"
              }
            },
            {
              "id": "sentence-2-1",
              "label": {
                "de": "Banane",
                "en": "Banana"
              }
            },
            {
              "id": "sentence-2-2",
              "label": {
                "de": "Milch",
                "en": "Milk"
              }
            }
          ],
          "correctAnswerId": "sentence-2-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Banane.",
            "en": "Correct! The missing word is Banana."
          },
          "hint": {
            "de": "Setze Banane probeweise in den Satz ein.",
            "en": "Try putting Banana into the sentence."
          }
        },
        {
          "id": "a2wu8",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Wasser?",
            "en": "Which word group does Water belong to?"
          },
          "visual": "Wasser",
          "answers": [
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            },
            {
              "id": "sky",
              "label": {
                "de": "Himmel und Wetter",
                "en": "sky and weather"
              }
            },
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            }
          ],
          "correctAnswerId": "drinks",
          "success": {
            "de": "Wasser gehört zur Wortgruppe Getränke.",
            "en": "Water belongs to the word group drinks."
          },
          "hint": {
            "de": "Überlege, was Wasser bezeichnet.",
            "en": "Think about what Water describes."
          }
        },
        {
          "id": "a2wu9",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Bücher und Regal?",
            "en": "Which joined word matches book and shelf?"
          },
          "visual": "📚 + 🗄️",
          "answers": [
            {
              "id": "compound-22-0",
              "label": {
                "de": "Regenbogen",
                "en": "Rainbow"
              }
            },
            {
              "id": "compound-22-1",
              "label": {
                "de": "Baumhaus",
                "en": "Treehouse"
              }
            },
            {
              "id": "compound-22-2",
              "label": {
                "de": "Bücherregal",
                "en": "Bookshelf"
              }
            }
          ],
          "correctAnswerId": "compound-22-2",
          "success": {
            "de": "Genau! Das Wort lautet Bücherregal.",
            "en": "Exactly! The word is Bookshelf."
          },
          "hint": {
            "de": "Sprich Bücher und Regal direkt hintereinander.",
            "en": "Say book and shelf together."
          }
        },
        {
          "id": "a2wu10",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Die kleine rote ... trägt grüne Blätter.",
            "en": "Which word completes Navi's sentence? The small red ... has green leaves."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-3-0",
              "label": {
                "de": "Erdbeere",
                "en": "Strawberry"
              }
            },
            {
              "id": "sentence-3-1",
              "label": {
                "de": "Wasser",
                "en": "Water"
              }
            },
            {
              "id": "sentence-3-2",
              "label": {
                "de": "Mond",
                "en": "Moon"
              }
            }
          ],
          "correctAnswerId": "sentence-3-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Erdbeere.",
            "en": "Correct! The missing word is Strawberry."
          },
          "hint": {
            "de": "Setze Erdbeere probeweise in den Satz ein.",
            "en": "Try putting Strawberry into the sentence."
          }
        },
        {
          "id": "a2wu11",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Haus?",
            "en": "Which word group does House belong to?"
          },
          "visual": "Haus",
          "answers": [
            {
              "id": "nature",
              "label": {
                "de": "Natur",
                "en": "nature"
              }
            },
            {
              "id": "vegetables",
              "label": {
                "de": "Gemüse",
                "en": "vegetables"
              }
            },
            {
              "id": "places",
              "label": {
                "de": "Orte und Gebäude",
                "en": "places and buildings"
              }
            }
          ],
          "correctAnswerId": "places",
          "success": {
            "de": "Haus gehört zur Wortgruppe Orte und Gebäude.",
            "en": "House belongs to the word group places and buildings."
          },
          "hint": {
            "de": "Überlege, was Haus bezeichnet.",
            "en": "Think about what House describes."
          }
        },
        {
          "id": "a2wu12",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Leuchten und Turm?",
            "en": "Which joined word matches light and house?"
          },
          "visual": "💡 + 🗼",
          "answers": [
            {
              "id": "compound-23-0",
              "label": {
                "de": "Schlafzimmer",
                "en": "Bedroom"
              }
            },
            {
              "id": "compound-23-1",
              "label": {
                "de": "Leuchtturm",
                "en": "Lighthouse"
              }
            },
            {
              "id": "compound-23-2",
              "label": {
                "de": "Sonnenblume",
                "en": "Sunflower"
              }
            }
          ],
          "correctAnswerId": "compound-23-1",
          "success": {
            "de": "Genau! Das Wort lautet Leuchtturm.",
            "en": "Exactly! The word is Lighthouse."
          },
          "hint": {
            "de": "Sprich Leuchten und Turm direkt hintereinander.",
            "en": "Say light and house together."
          }
        },
        {
          "id": "a2wu13",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Die rote ... hängt an einem Stiel.",
            "en": "Which word completes Navi's sentence? The red ... hangs from a stem."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-4-0",
              "label": {
                "de": "Haus",
                "en": "House"
              }
            },
            {
              "id": "sentence-4-1",
              "label": {
                "de": "Stern",
                "en": "Star"
              }
            },
            {
              "id": "sentence-4-2",
              "label": {
                "de": "Kirsche",
                "en": "Cherry"
              }
            }
          ],
          "correctAnswerId": "sentence-4-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Kirsche.",
            "en": "Correct! The missing word is Cherry."
          },
          "hint": {
            "de": "Setze Kirsche probeweise in den Satz ein.",
            "en": "Try putting Cherry into the sentence."
          }
        },
        {
          "id": "a2wu14",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Schule?",
            "en": "Which word group does School belong to?"
          },
          "visual": "Schule",
          "answers": [
            {
              "id": "vegetables",
              "label": {
                "de": "Gemüse",
                "en": "vegetables"
              }
            },
            {
              "id": "places",
              "label": {
                "de": "Orte und Gebäude",
                "en": "places and buildings"
              }
            },
            {
              "id": "nature",
              "label": {
                "de": "Natur",
                "en": "nature"
              }
            }
          ],
          "correctAnswerId": "places",
          "success": {
            "de": "Schule gehört zur Wortgruppe Orte und Gebäude.",
            "en": "School belongs to the word group places and buildings."
          },
          "hint": {
            "de": "Überlege, was Schule bezeichnet.",
            "en": "Think about what School describes."
          }
        },
        {
          "id": "a2wu15",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Kopf und Hörer?",
            "en": "Which joined word matches head and phones?"
          },
          "visual": "🙂 + 🎧",
          "answers": [
            {
              "id": "compound-24-0",
              "label": {
                "de": "Kopfhörer",
                "en": "Headphones"
              }
            },
            {
              "id": "compound-24-1",
              "label": {
                "de": "Zahnbürste",
                "en": "Toothbrush"
              }
            },
            {
              "id": "compound-24-2",
              "label": {
                "de": "Spielplatz",
                "en": "Playground"
              }
            }
          ],
          "correctAnswerId": "compound-24-0",
          "success": {
            "de": "Genau! Das Wort lautet Kopfhörer.",
            "en": "Exactly! The word is Headphones."
          },
          "hint": {
            "de": "Sprich Kopf und Hörer direkt hintereinander.",
            "en": "Say head and phones together."
          }
        },
        {
          "id": "a2wu16",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Viele einzelne Früchte bilden eine ...",
            "en": "Which word completes Navi's sentence? Many small fruits make one bunch of ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-5-0",
              "label": {
                "de": "Wolke",
                "en": "Cloud"
              }
            },
            {
              "id": "sentence-5-1",
              "label": {
                "de": "Traube",
                "en": "Grape"
              }
            },
            {
              "id": "sentence-5-2",
              "label": {
                "de": "Schule",
                "en": "School"
              }
            }
          ],
          "correctAnswerId": "sentence-5-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Traube.",
            "en": "Correct! The missing word is Grape."
          },
          "hint": {
            "de": "Setze Traube probeweise in den Satz ein.",
            "en": "Try putting Grape into the sentence."
          }
        },
        {
          "id": "a2wu17",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Auto?",
            "en": "Which word group does Car belong to?"
          },
          "visual": "Auto",
          "answers": [
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            }
          ],
          "correctAnswerId": "vehicles",
          "success": {
            "de": "Auto gehört zur Wortgruppe Fahrzeuge.",
            "en": "Car belongs to the word group vehicles."
          },
          "hint": {
            "de": "Überlege, was Auto bezeichnet.",
            "en": "Think about what Car describes."
          }
        },
        {
          "id": "a2wu18",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Hand und Tasche?",
            "en": "Which joined word matches hand and bag?"
          },
          "visual": "✋ + 👜",
          "answers": [
            {
              "id": "compound-25-0",
              "label": {
                "de": "Fußball",
                "en": "Football"
              }
            },
            {
              "id": "compound-25-1",
              "label": {
                "de": "Geburtstag",
                "en": "Birthday"
              }
            },
            {
              "id": "compound-25-2",
              "label": {
                "de": "Handtasche",
                "en": "Handbag"
              }
            }
          ],
          "correctAnswerId": "compound-25-2",
          "success": {
            "de": "Genau! Das Wort lautet Handtasche.",
            "en": "Exactly! The word is Handbag."
          },
          "hint": {
            "de": "Sprich Hand und Tasche direkt hintereinander.",
            "en": "Say hand and bag together."
          }
        },
        {
          "id": "a2wu19",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Die gelbe ... schmeckt sauer.",
            "en": "Which word completes Navi's sentence? The yellow ... tastes sour."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-6-0",
              "label": {
                "de": "Zitrone",
                "en": "Lemon"
              }
            },
            {
              "id": "sentence-6-1",
              "label": {
                "de": "Auto",
                "en": "Car"
              }
            },
            {
              "id": "sentence-6-2",
              "label": {
                "de": "Baum",
                "en": "Tree"
              }
            }
          ],
          "correctAnswerId": "sentence-6-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Zitrone.",
            "en": "Correct! The missing word is Lemon."
          },
          "hint": {
            "de": "Setze Zitrone probeweise in den Satz ein.",
            "en": "Try putting Lemon into the sentence."
          }
        },
        {
          "id": "a2wu20",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Bus?",
            "en": "Which word group does Bus belong to?"
          },
          "visual": "Bus",
          "answers": [
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            }
          ],
          "correctAnswerId": "vehicles",
          "success": {
            "de": "Bus gehört zur Wortgruppe Fahrzeuge.",
            "en": "Bus belongs to the word group vehicles."
          },
          "hint": {
            "de": "Überlege, was Bus bezeichnet.",
            "en": "Think about what Bus describes."
          }
        },
        {
          "id": "a2wu21",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Wasser und Flasche?",
            "en": "Which joined word matches water and bottle?"
          },
          "visual": "💧 + 🍼",
          "answers": [
            {
              "id": "compound-26-0",
              "label": {
                "de": "Nachtlicht",
                "en": "Nightlight"
              }
            },
            {
              "id": "compound-26-1",
              "label": {
                "de": "Wasserflasche",
                "en": "Water bottle"
              }
            },
            {
              "id": "compound-26-2",
              "label": {
                "de": "Schulbus",
                "en": "School bus"
              }
            }
          ],
          "correctAnswerId": "compound-26-1",
          "success": {
            "de": "Genau! Das Wort lautet Wasserflasche.",
            "en": "Exactly! The word is Water bottle."
          },
          "hint": {
            "de": "Sprich Wasser und Flasche direkt hintereinander.",
            "en": "Say water and bottle together."
          }
        },
        {
          "id": "a2wu22",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Das orange Gemüse in diesem Satz ist die ...",
            "en": "Which word completes Navi's sentence? The orange vegetable in this sentence is the ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-7-0",
              "label": {
                "de": "Bus",
                "en": "Bus"
              }
            },
            {
              "id": "sentence-7-1",
              "label": {
                "de": "Blume",
                "en": "Flower"
              }
            },
            {
              "id": "sentence-7-2",
              "label": {
                "de": "Karotte",
                "en": "Carrot"
              }
            }
          ],
          "correctAnswerId": "sentence-7-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Karotte.",
            "en": "Correct! The missing word is Carrot."
          },
          "hint": {
            "de": "Setze Karotte probeweise in den Satz ein.",
            "en": "Try putting Carrot into the sentence."
          }
        },
        {
          "id": "a2wu23",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Zug?",
            "en": "Which word group does Train belong to?"
          },
          "visual": "Zug",
          "answers": [
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            }
          ],
          "correctAnswerId": "vehicles",
          "success": {
            "de": "Zug gehört zur Wortgruppe Fahrzeuge.",
            "en": "Train belongs to the word group vehicles."
          },
          "hint": {
            "de": "Überlege, was Zug bezeichnet.",
            "en": "Think about what Train describes."
          }
        },
        {
          "id": "a2wu24",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Fahrrad und Helm?",
            "en": "Which joined word matches bicycle and helmet?"
          },
          "visual": "🚲 + ⛑️",
          "answers": [
            {
              "id": "compound-27-0",
              "label": {
                "de": "Fahrradhelm",
                "en": "Bicycle helmet"
              }
            },
            {
              "id": "compound-27-1",
              "label": {
                "de": "Apfelbaum",
                "en": "Apple tree"
              }
            },
            {
              "id": "compound-27-2",
              "label": {
                "de": "Sonnenbrille",
                "en": "Sunglasses"
              }
            }
          ],
          "correctAnswerId": "compound-27-0",
          "success": {
            "de": "Genau! Das Wort lautet Fahrradhelm.",
            "en": "Exactly! The word is Bicycle helmet."
          },
          "hint": {
            "de": "Sprich Fahrrad und Helm direkt hintereinander.",
            "en": "Say bicycle and helmet together."
          }
        },
        {
          "id": "a2wu25",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Im Salat liegt eine rote ...",
            "en": "Which word completes Navi's sentence? There is a red ... in the salad."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-8-0",
              "label": {
                "de": "Gras",
                "en": "Grass"
              }
            },
            {
              "id": "sentence-8-1",
              "label": {
                "de": "Tomate",
                "en": "Tomato"
              }
            },
            {
              "id": "sentence-8-2",
              "label": {
                "de": "Zug",
                "en": "Train"
              }
            }
          ],
          "correctAnswerId": "sentence-8-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Tomate.",
            "en": "Correct! The missing word is Tomato."
          },
          "hint": {
            "de": "Setze Tomate probeweise in den Satz ein.",
            "en": "Try putting Tomato into the sentence."
          }
        },
        {
          "id": "a2wu26",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Fahrrad?",
            "en": "Which word group does Bicycle belong to?"
          },
          "visual": "Fahrrad",
          "answers": [
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            }
          ],
          "correctAnswerId": "vehicles",
          "success": {
            "de": "Fahrrad gehört zur Wortgruppe Fahrzeuge.",
            "en": "Bicycle belongs to the word group vehicles."
          },
          "hint": {
            "de": "Überlege, was Fahrrad bezeichnet.",
            "en": "Think about what Bicycle describes."
          }
        },
        {
          "id": "a2wu27",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Garten und Stuhl?",
            "en": "Which joined word matches garden and chair?"
          },
          "visual": "🌻 + 🪑",
          "answers": [
            {
              "id": "compound-28-0",
              "label": {
                "de": "Schneemann",
                "en": "Snowman"
              }
            },
            {
              "id": "compound-28-1",
              "label": {
                "de": "Türklingel",
                "en": "Doorbell"
              }
            },
            {
              "id": "compound-28-2",
              "label": {
                "de": "Gartenstuhl",
                "en": "Garden chair"
              }
            }
          ],
          "correctAnswerId": "compound-28-2",
          "success": {
            "de": "Genau! Das Wort lautet Gartenstuhl.",
            "en": "Exactly! The word is Garden chair."
          },
          "hint": {
            "de": "Sprich Garten und Stuhl direkt hintereinander.",
            "en": "Say garden and chair together."
          }
        },
        {
          "id": "a2wu28",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? In der Bäckerei kauft Navi ein ...",
            "en": "Which word completes Navi's sentence? At the bakery, Navi buys a loaf of ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-9-0",
              "label": {
                "de": "Brot",
                "en": "Bread"
              }
            },
            {
              "id": "sentence-9-1",
              "label": {
                "de": "Fahrrad",
                "en": "Bicycle"
              }
            },
            {
              "id": "sentence-9-2",
              "label": {
                "de": "Berg",
                "en": "Mountain"
              }
            }
          ],
          "correctAnswerId": "sentence-9-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Brot.",
            "en": "Correct! The missing word is Bread."
          },
          "hint": {
            "de": "Setze Brot probeweise in den Satz ein.",
            "en": "Try putting Bread into the sentence."
          }
        },
        {
          "id": "a2wu29",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Boot?",
            "en": "Which word group does Boat belong to?"
          },
          "visual": "Boot",
          "answers": [
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            }
          ],
          "correctAnswerId": "vehicles",
          "success": {
            "de": "Boot gehört zur Wortgruppe Fahrzeuge.",
            "en": "Boat belongs to the word group vehicles."
          },
          "hint": {
            "de": "Überlege, was Boot bezeichnet.",
            "en": "Think about what Boat describes."
          }
        },
        {
          "id": "a2wu30",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Kaffee und Tasse?",
            "en": "Which joined word matches coffee and cup?"
          },
          "visual": "🫘 + 🥤",
          "answers": [
            {
              "id": "compound-29-0",
              "label": {
                "de": "Briefkasten",
                "en": "Mailbox"
              }
            },
            {
              "id": "compound-29-1",
              "label": {
                "de": "Kaffeetasse",
                "en": "Coffee cup"
              }
            },
            {
              "id": "compound-29-2",
              "label": {
                "de": "Wasserfall",
                "en": "Waterfall"
              }
            }
          ],
          "correctAnswerId": "compound-29-1",
          "success": {
            "de": "Genau! Das Wort lautet Kaffeetasse.",
            "en": "Exactly! The word is Coffee cup."
          },
          "hint": {
            "de": "Sprich Kaffee und Tasse direkt hintereinander.",
            "en": "Say coffee and cup together."
          }
        },
        {
          "id": "a2wu31",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Das gelbe Lebensmittel mit Löchern heißt ...",
            "en": "Which word completes Navi's sentence? The yellow food with holes is called ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-10-0",
              "label": {
                "de": "Boot",
                "en": "Boat"
              }
            },
            {
              "id": "sentence-10-1",
              "label": {
                "de": "Fluss",
                "en": "River"
              }
            },
            {
              "id": "sentence-10-2",
              "label": {
                "de": "Käse",
                "en": "Cheese"
              }
            }
          ],
          "correctAnswerId": "sentence-10-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Käse.",
            "en": "Correct! The missing word is Cheese."
          },
          "hint": {
            "de": "Setze Käse probeweise in den Satz ein.",
            "en": "Try putting Cheese into the sentence."
          }
        },
        {
          "id": "a2wu32",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Flugzeug?",
            "en": "Which word group does Airplane belong to?"
          },
          "visual": "Flugzeug",
          "answers": [
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            }
          ],
          "correctAnswerId": "vehicles",
          "success": {
            "de": "Flugzeug gehört zur Wortgruppe Fahrzeuge.",
            "en": "Airplane belongs to the word group vehicles."
          },
          "hint": {
            "de": "Überlege, was Flugzeug bezeichnet.",
            "en": "Think about what Airplane describes."
          }
        },
        {
          "id": "a2wu33",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Regen und Bogen?",
            "en": "Which joined word matches rain and bow?"
          },
          "visual": "🌧️ + 🎀",
          "answers": [
            {
              "id": "compound-0-0",
              "label": {
                "de": "Regenbogen",
                "en": "Rainbow"
              }
            },
            {
              "id": "compound-0-1",
              "label": {
                "de": "Feuerwehrauto",
                "en": "Fire truck"
              }
            },
            {
              "id": "compound-0-2",
              "label": {
                "de": "Haustür",
                "en": "Front door"
              }
            }
          ],
          "correctAnswerId": "compound-0-0",
          "success": {
            "de": "Genau! Das Wort lautet Regenbogen.",
            "en": "Exactly! The word is Rainbow."
          },
          "hint": {
            "de": "Sprich Regen und Bogen direkt hintereinander.",
            "en": "Say rain and bow together."
          }
        },
        {
          "id": "a2wu34",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Das weiße Getränk von der Kuh heißt ...",
            "en": "Which word completes Navi's sentence? The white drink from a cow is called ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-11-0",
              "label": {
                "de": "Apfel",
                "en": "Apple"
              }
            },
            {
              "id": "sentence-11-1",
              "label": {
                "de": "Milch",
                "en": "Milk"
              }
            },
            {
              "id": "sentence-11-2",
              "label": {
                "de": "Flugzeug",
                "en": "Airplane"
              }
            }
          ],
          "correctAnswerId": "sentence-11-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Milch.",
            "en": "Correct! The missing word is Milk."
          },
          "hint": {
            "de": "Setze Milch probeweise in den Satz ein.",
            "en": "Try putting Milk into the sentence."
          }
        },
        {
          "id": "a2wu35",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Sonne?",
            "en": "Which word group does Sun belong to?"
          },
          "visual": "Sonne",
          "answers": [
            {
              "id": "sky",
              "label": {
                "de": "Himmel und Wetter",
                "en": "sky and weather"
              }
            },
            {
              "id": "vegetables",
              "label": {
                "de": "Gemüse",
                "en": "vegetables"
              }
            },
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            }
          ],
          "correctAnswerId": "sky",
          "success": {
            "de": "Sonne gehört zur Wortgruppe Himmel und Wetter.",
            "en": "Sun belongs to the word group sky and weather."
          },
          "hint": {
            "de": "Überlege, was Sonne bezeichnet.",
            "en": "Think about what Sun describes."
          }
        },
        {
          "id": "a2wu36",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Sonne und Blume?",
            "en": "Which joined word matches sun and flower?"
          },
          "visual": "☀️ + 🌸",
          "answers": [
            {
              "id": "compound-1-0",
              "label": {
                "de": "Baumhaus",
                "en": "Treehouse"
              }
            },
            {
              "id": "compound-1-1",
              "label": {
                "de": "Pfannkuchen",
                "en": "Pancake"
              }
            },
            {
              "id": "compound-1-2",
              "label": {
                "de": "Sonnenblume",
                "en": "Sunflower"
              }
            }
          ],
          "correctAnswerId": "compound-1-2",
          "success": {
            "de": "Genau! Das Wort lautet Sonnenblume.",
            "en": "Exactly! The word is Sunflower."
          },
          "hint": {
            "de": "Sprich Sonne und Blume direkt hintereinander.",
            "en": "Say sun and flower together."
          }
        },
        {
          "id": "a2wu37",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Wenn Navi Durst hat, trinkt er ...",
            "en": "Which word completes Navi's sentence? When Navi is thirsty, he drinks ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-12-0",
              "label": {
                "de": "Wasser",
                "en": "Water"
              }
            },
            {
              "id": "sentence-12-1",
              "label": {
                "de": "Sonne",
                "en": "Sun"
              }
            },
            {
              "id": "sentence-12-2",
              "label": {
                "de": "Birne",
                "en": "Pear"
              }
            }
          ],
          "correctAnswerId": "sentence-12-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Wasser.",
            "en": "Correct! The missing word is Water."
          },
          "hint": {
            "de": "Setze Wasser probeweise in den Satz ein.",
            "en": "Try putting Water into the sentence."
          }
        },
        {
          "id": "a2wu38",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Mond?",
            "en": "Which word group does Moon belong to?"
          },
          "visual": "Mond",
          "answers": [
            {
              "id": "vegetables",
              "label": {
                "de": "Gemüse",
                "en": "vegetables"
              }
            },
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            },
            {
              "id": "sky",
              "label": {
                "de": "Himmel und Wetter",
                "en": "sky and weather"
              }
            }
          ],
          "correctAnswerId": "sky",
          "success": {
            "de": "Mond gehört zur Wortgruppe Himmel und Wetter.",
            "en": "Moon belongs to the word group sky and weather."
          },
          "hint": {
            "de": "Überlege, was Mond bezeichnet.",
            "en": "Think about what Moon describes."
          }
        },
        {
          "id": "a2wu39",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Zahn und Bürste?",
            "en": "Which joined word matches tooth and brush?"
          },
          "visual": "🦷 + 🪥",
          "answers": [
            {
              "id": "compound-2-0",
              "label": {
                "de": "Regenmantel",
                "en": "Raincoat"
              }
            },
            {
              "id": "compound-2-1",
              "label": {
                "de": "Zahnbürste",
                "en": "Toothbrush"
              }
            },
            {
              "id": "compound-2-2",
              "label": {
                "de": "Schlafzimmer",
                "en": "Bedroom"
              }
            }
          ],
          "correctAnswerId": "compound-2-1",
          "success": {
            "de": "Genau! Das Wort lautet Zahnbürste.",
            "en": "Exactly! The word is Toothbrush."
          },
          "hint": {
            "de": "Sprich Zahn und Bürste direkt hintereinander.",
            "en": "Say tooth and brush together."
          }
        },
        {
          "id": "a2wu40",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Menschen wohnen in einem ...",
            "en": "Which word completes Navi's sentence? People live in a ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-13-0",
              "label": {
                "de": "Mond",
                "en": "Moon"
              }
            },
            {
              "id": "sentence-13-1",
              "label": {
                "de": "Banane",
                "en": "Banana"
              }
            },
            {
              "id": "sentence-13-2",
              "label": {
                "de": "Haus",
                "en": "House"
              }
            }
          ],
          "correctAnswerId": "sentence-13-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Haus.",
            "en": "Correct! The missing word is House."
          },
          "hint": {
            "de": "Setze Haus probeweise in den Satz ein.",
            "en": "Try putting House into the sentence."
          }
        },
        {
          "id": "a2wu41",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Stern?",
            "en": "Which word group does Star belong to?"
          },
          "visual": "Stern",
          "answers": [
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            },
            {
              "id": "sky",
              "label": {
                "de": "Himmel und Wetter",
                "en": "sky and weather"
              }
            },
            {
              "id": "vegetables",
              "label": {
                "de": "Gemüse",
                "en": "vegetables"
              }
            }
          ],
          "correctAnswerId": "sky",
          "success": {
            "de": "Stern gehört zur Wortgruppe Himmel und Wetter.",
            "en": "Star belongs to the word group sky and weather."
          },
          "hint": {
            "de": "Überlege, was Stern bezeichnet.",
            "en": "Think about what Star describes."
          }
        },
        {
          "id": "a2wu42",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Fuß und Ball?",
            "en": "Which joined word matches foot and ball?"
          },
          "visual": "🦶 + ⚽",
          "answers": [
            {
              "id": "compound-3-0",
              "label": {
                "de": "Fußball",
                "en": "Football"
              }
            },
            {
              "id": "compound-3-1",
              "label": {
                "de": "Spielplatz",
                "en": "Playground"
              }
            },
            {
              "id": "compound-3-2",
              "label": {
                "de": "Schlafenszeit",
                "en": "Bedtime"
              }
            }
          ],
          "correctAnswerId": "compound-3-0",
          "success": {
            "de": "Genau! Das Wort lautet Fußball.",
            "en": "Exactly! The word is Football."
          },
          "hint": {
            "de": "Sprich Fuß und Ball direkt hintereinander.",
            "en": "Say foot and ball together."
          }
        },
        {
          "id": "a2wu43",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Kinder lernen gemeinsam in der ...",
            "en": "Which word completes Navi's sentence? Children learn together at ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-14-0",
              "label": {
                "de": "Erdbeere",
                "en": "Strawberry"
              }
            },
            {
              "id": "sentence-14-1",
              "label": {
                "de": "Schule",
                "en": "School"
              }
            },
            {
              "id": "sentence-14-2",
              "label": {
                "de": "Stern",
                "en": "Star"
              }
            }
          ],
          "correctAnswerId": "sentence-14-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Schule.",
            "en": "Correct! The missing word is School."
          },
          "hint": {
            "de": "Setze Schule probeweise in den Satz ein.",
            "en": "Try putting School into the sentence."
          }
        },
        {
          "id": "a2wu44",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Wolke?",
            "en": "Which word group does Cloud belong to?"
          },
          "visual": "Wolke",
          "answers": [
            {
              "id": "sky",
              "label": {
                "de": "Himmel und Wetter",
                "en": "sky and weather"
              }
            },
            {
              "id": "vegetables",
              "label": {
                "de": "Gemüse",
                "en": "vegetables"
              }
            },
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            }
          ],
          "correctAnswerId": "sky",
          "success": {
            "de": "Wolke gehört zur Wortgruppe Himmel und Wetter.",
            "en": "Cloud belongs to the word group sky and weather."
          },
          "hint": {
            "de": "Überlege, was Wolke bezeichnet.",
            "en": "Think about what Cloud describes."
          }
        },
        {
          "id": "a2wu45",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Schule und Bus?",
            "en": "Which joined word matches school and bus?"
          },
          "visual": "🏫 + 🚌",
          "answers": [
            {
              "id": "compound-4-0",
              "label": {
                "de": "Geburtstag",
                "en": "Birthday"
              }
            },
            {
              "id": "compound-4-1",
              "label": {
                "de": "Mondlicht",
                "en": "Moonlight"
              }
            },
            {
              "id": "compound-4-2",
              "label": {
                "de": "Schulbus",
                "en": "School bus"
              }
            }
          ],
          "correctAnswerId": "compound-4-2",
          "success": {
            "de": "Genau! Das Wort lautet Schulbus.",
            "en": "Exactly! The word is School bus."
          },
          "hint": {
            "de": "Sprich Schule und Bus direkt hintereinander.",
            "en": "Say school and bus together."
          }
        },
        {
          "id": "a2wu46",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Auf der Straße fährt ein ...",
            "en": "Which word completes Navi's sentence? A ... drives on the road."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-15-0",
              "label": {
                "de": "Auto",
                "en": "Car"
              }
            },
            {
              "id": "sentence-15-1",
              "label": {
                "de": "Wolke",
                "en": "Cloud"
              }
            },
            {
              "id": "sentence-15-2",
              "label": {
                "de": "Kirsche",
                "en": "Cherry"
              }
            }
          ],
          "correctAnswerId": "sentence-15-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Auto.",
            "en": "Correct! The missing word is Car."
          },
          "hint": {
            "de": "Setze Auto probeweise in den Satz ein.",
            "en": "Try putting Car into the sentence."
          }
        },
        {
          "id": "a2wu47",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Baum?",
            "en": "Which word group does Tree belong to?"
          },
          "visual": "Baum",
          "answers": [
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            },
            {
              "id": "places",
              "label": {
                "de": "Orte und Gebäude",
                "en": "places and buildings"
              }
            },
            {
              "id": "nature",
              "label": {
                "de": "Natur",
                "en": "nature"
              }
            }
          ],
          "correctAnswerId": "nature",
          "success": {
            "de": "Baum gehört zur Wortgruppe Natur.",
            "en": "Tree belongs to the word group nature."
          },
          "hint": {
            "de": "Überlege, was Baum bezeichnet.",
            "en": "Think about what Tree describes."
          }
        },
        {
          "id": "a2wu48",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Apfel und Baum?",
            "en": "Which joined word matches apple and tree?"
          },
          "visual": "🍎 + 🌳",
          "answers": [
            {
              "id": "compound-5-0",
              "label": {
                "de": "Bücherregal",
                "en": "Bookshelf"
              }
            },
            {
              "id": "compound-5-1",
              "label": {
                "de": "Apfelbaum",
                "en": "Apple tree"
              }
            },
            {
              "id": "compound-5-2",
              "label": {
                "de": "Nachtlicht",
                "en": "Nightlight"
              }
            }
          ],
          "correctAnswerId": "compound-5-1",
          "success": {
            "de": "Genau! Das Wort lautet Apfelbaum.",
            "en": "Exactly! The word is Apple tree."
          },
          "hint": {
            "de": "Sprich Apfel und Baum direkt hintereinander.",
            "en": "Say apple and tree together."
          }
        },
        {
          "id": "a2wu49",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Viele Menschen fahren gemeinsam im ...",
            "en": "Which word completes Navi's sentence? Many people ride together on a ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-16-0",
              "label": {
                "de": "Baum",
                "en": "Tree"
              }
            },
            {
              "id": "sentence-16-1",
              "label": {
                "de": "Traube",
                "en": "Grape"
              }
            },
            {
              "id": "sentence-16-2",
              "label": {
                "de": "Bus",
                "en": "Bus"
              }
            }
          ],
          "correctAnswerId": "sentence-16-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Bus.",
            "en": "Correct! The missing word is Bus."
          },
          "hint": {
            "de": "Setze Bus probeweise in den Satz ein.",
            "en": "Try putting Bus into the sentence."
          }
        },
        {
          "id": "a2wu50",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Blume?",
            "en": "Which word group does Flower belong to?"
          },
          "visual": "Blume",
          "answers": [
            {
              "id": "places",
              "label": {
                "de": "Orte und Gebäude",
                "en": "places and buildings"
              }
            },
            {
              "id": "nature",
              "label": {
                "de": "Natur",
                "en": "nature"
              }
            },
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            }
          ],
          "correctAnswerId": "nature",
          "success": {
            "de": "Blume gehört zur Wortgruppe Natur.",
            "en": "Flower belongs to the word group nature."
          },
          "hint": {
            "de": "Überlege, was Blume bezeichnet.",
            "en": "Think about what Flower describes."
          }
        },
        {
          "id": "a2wu51",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Schnee und Mann?",
            "en": "Which joined word matches snow and man?"
          },
          "visual": "❄️ + 🧍",
          "answers": [
            {
              "id": "compound-6-0",
              "label": {
                "de": "Schneemann",
                "en": "Snowman"
              }
            },
            {
              "id": "compound-6-1",
              "label": {
                "de": "Sonnenbrille",
                "en": "Sunglasses"
              }
            },
            {
              "id": "compound-6-2",
              "label": {
                "de": "Leuchtturm",
                "en": "Lighthouse"
              }
            }
          ],
          "correctAnswerId": "compound-6-0",
          "success": {
            "de": "Genau! Das Wort lautet Schneemann.",
            "en": "Exactly! The word is Snowman."
          },
          "hint": {
            "de": "Sprich Schnee und Mann direkt hintereinander.",
            "en": "Say snow and man together."
          }
        },
        {
          "id": "a2wu52",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Auf Schienen fährt der ...",
            "en": "Which word completes Navi's sentence? The ... travels on rails."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-17-0",
              "label": {
                "de": "Zitrone",
                "en": "Lemon"
              }
            },
            {
              "id": "sentence-17-1",
              "label": {
                "de": "Zug",
                "en": "Train"
              }
            },
            {
              "id": "sentence-17-2",
              "label": {
                "de": "Blume",
                "en": "Flower"
              }
            }
          ],
          "correctAnswerId": "sentence-17-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Zug.",
            "en": "Correct! The missing word is Train."
          },
          "hint": {
            "de": "Setze Zug probeweise in den Satz ein.",
            "en": "Try putting Train into the sentence."
          }
        },
        {
          "id": "a2wu53",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Gras?",
            "en": "Which word group does Grass belong to?"
          },
          "visual": "Gras",
          "answers": [
            {
              "id": "nature",
              "label": {
                "de": "Natur",
                "en": "nature"
              }
            },
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            },
            {
              "id": "places",
              "label": {
                "de": "Orte und Gebäude",
                "en": "places and buildings"
              }
            }
          ],
          "correctAnswerId": "nature",
          "success": {
            "de": "Gras gehört zur Wortgruppe Natur.",
            "en": "Grass belongs to the word group nature."
          },
          "hint": {
            "de": "Überlege, was Gras bezeichnet.",
            "en": "Think about what Grass describes."
          }
        },
        {
          "id": "a2wu54",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Wasser und Fall?",
            "en": "Which joined word matches water and fall?"
          },
          "visual": "💧 + ⬇️",
          "answers": [
            {
              "id": "compound-7-0",
              "label": {
                "de": "Türklingel",
                "en": "Doorbell"
              }
            },
            {
              "id": "compound-7-1",
              "label": {
                "de": "Kopfhörer",
                "en": "Headphones"
              }
            },
            {
              "id": "compound-7-2",
              "label": {
                "de": "Wasserfall",
                "en": "Waterfall"
              }
            }
          ],
          "correctAnswerId": "compound-7-2",
          "success": {
            "de": "Genau! Das Wort lautet Wasserfall.",
            "en": "Exactly! The word is Waterfall."
          },
          "hint": {
            "de": "Sprich Wasser und Fall direkt hintereinander.",
            "en": "Say water and fall together."
          }
        },
        {
          "id": "a2wu55",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Zwei Räder und Pedale hat das ...",
            "en": "Which word completes Navi's sentence? The ... has two wheels and pedals."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-18-0",
              "label": {
                "de": "Fahrrad",
                "en": "Bicycle"
              }
            },
            {
              "id": "sentence-18-1",
              "label": {
                "de": "Gras",
                "en": "Grass"
              }
            },
            {
              "id": "sentence-18-2",
              "label": {
                "de": "Karotte",
                "en": "Carrot"
              }
            }
          ],
          "correctAnswerId": "sentence-18-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Fahrrad.",
            "en": "Correct! The missing word is Bicycle."
          },
          "hint": {
            "de": "Setze Fahrrad probeweise in den Satz ein.",
            "en": "Try putting Bicycle into the sentence."
          }
        },
        {
          "id": "a2wu56",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Berg?",
            "en": "Which word group does Mountain belong to?"
          },
          "visual": "Berg",
          "answers": [
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            },
            {
              "id": "places",
              "label": {
                "de": "Orte und Gebäude",
                "en": "places and buildings"
              }
            },
            {
              "id": "nature",
              "label": {
                "de": "Natur",
                "en": "nature"
              }
            }
          ],
          "correctAnswerId": "nature",
          "success": {
            "de": "Berg gehört zur Wortgruppe Natur.",
            "en": "Mountain belongs to the word group nature."
          },
          "hint": {
            "de": "Überlege, was Berg bezeichnet.",
            "en": "Think about what Mountain describes."
          }
        },
        {
          "id": "a2wu57",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Feuerwehr und Auto?",
            "en": "Which joined word matches fire and truck?"
          },
          "visual": "🔥 + 🚗",
          "answers": [
            {
              "id": "compound-8-0",
              "label": {
                "de": "Handtasche",
                "en": "Handbag"
              }
            },
            {
              "id": "compound-8-1",
              "label": {
                "de": "Feuerwehrauto",
                "en": "Fire truck"
              }
            },
            {
              "id": "compound-8-2",
              "label": {
                "de": "Briefkasten",
                "en": "Mailbox"
              }
            }
          ],
          "correctAnswerId": "compound-8-1",
          "success": {
            "de": "Genau! Das Wort lautet Feuerwehrauto.",
            "en": "Exactly! The word is Fire truck."
          },
          "hint": {
            "de": "Sprich Feuerwehr und Auto direkt hintereinander.",
            "en": "Say fire and truck together."
          }
        },
        {
          "id": "a2wu58",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Über das Wasser fährt ein ...",
            "en": "Which word completes Navi's sentence? A ... travels across the water."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-19-0",
              "label": {
                "de": "Berg",
                "en": "Mountain"
              }
            },
            {
              "id": "sentence-19-1",
              "label": {
                "de": "Tomate",
                "en": "Tomato"
              }
            },
            {
              "id": "sentence-19-2",
              "label": {
                "de": "Boot",
                "en": "Boat"
              }
            }
          ],
          "correctAnswerId": "sentence-19-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Boot.",
            "en": "Correct! The missing word is Boat."
          },
          "hint": {
            "de": "Setze Boot probeweise in den Satz ein.",
            "en": "Try putting Boat into the sentence."
          }
        },
        {
          "id": "a2wu59",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Fluss?",
            "en": "Which word group does River belong to?"
          },
          "visual": "Fluss",
          "answers": [
            {
              "id": "places",
              "label": {
                "de": "Orte und Gebäude",
                "en": "places and buildings"
              }
            },
            {
              "id": "nature",
              "label": {
                "de": "Natur",
                "en": "nature"
              }
            },
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            }
          ],
          "correctAnswerId": "nature",
          "success": {
            "de": "Fluss gehört zur Wortgruppe Natur.",
            "en": "River belongs to the word group nature."
          },
          "hint": {
            "de": "Überlege, was Fluss bezeichnet.",
            "en": "Think about what River describes."
          }
        },
        {
          "id": "a2wu60",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Baum und Haus?",
            "en": "Which joined word matches tree and house?"
          },
          "visual": "🌳 + 🏠",
          "answers": [
            {
              "id": "compound-9-0",
              "label": {
                "de": "Baumhaus",
                "en": "Treehouse"
              }
            },
            {
              "id": "compound-9-1",
              "label": {
                "de": "Haustür",
                "en": "Front door"
              }
            },
            {
              "id": "compound-9-2",
              "label": {
                "de": "Wasserflasche",
                "en": "Water bottle"
              }
            }
          ],
          "correctAnswerId": "compound-9-0",
          "success": {
            "de": "Genau! Das Wort lautet Baumhaus.",
            "en": "Exactly! The word is Treehouse."
          },
          "hint": {
            "de": "Sprich Baum und Haus direkt hintereinander.",
            "en": "Say tree and house together."
          }
        },
        {
          "id": "a2wu61",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Durch den Himmel fliegt ein ...",
            "en": "Which word completes Navi's sentence? An ... flies through the sky."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-20-0",
              "label": {
                "de": "Brot",
                "en": "Bread"
              }
            },
            {
              "id": "sentence-20-1",
              "label": {
                "de": "Flugzeug",
                "en": "Airplane"
              }
            },
            {
              "id": "sentence-20-2",
              "label": {
                "de": "Fluss",
                "en": "River"
              }
            }
          ],
          "correctAnswerId": "sentence-20-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Flugzeug.",
            "en": "Correct! The missing word is Airplane."
          },
          "hint": {
            "de": "Setze Flugzeug probeweise in den Satz ein.",
            "en": "Try putting Airplane into the sentence."
          }
        },
        {
          "id": "a2wu62",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Apfel?",
            "en": "Which word group does Apple belong to?"
          },
          "visual": "Apfel",
          "answers": [
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            }
          ],
          "correctAnswerId": "fruit",
          "success": {
            "de": "Apfel gehört zur Wortgruppe Obst.",
            "en": "Apple belongs to the word group fruit."
          },
          "hint": {
            "de": "Überlege, was Apfel bezeichnet.",
            "en": "Think about what Apple describes."
          }
        },
        {
          "id": "a2wu63",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Schlafen und Zimmer?",
            "en": "Which joined word matches bed and room?"
          },
          "visual": "😴 + 🚪",
          "answers": [
            {
              "id": "compound-10-0",
              "label": {
                "de": "Pfannkuchen",
                "en": "Pancake"
              }
            },
            {
              "id": "compound-10-1",
              "label": {
                "de": "Fahrradhelm",
                "en": "Bicycle helmet"
              }
            },
            {
              "id": "compound-10-2",
              "label": {
                "de": "Schlafzimmer",
                "en": "Bedroom"
              }
            }
          ],
          "correctAnswerId": "compound-10-2",
          "success": {
            "de": "Genau! Das Wort lautet Schlafzimmer.",
            "en": "Exactly! The word is Bedroom."
          },
          "hint": {
            "de": "Sprich Schlafen und Zimmer direkt hintereinander.",
            "en": "Say bed and room together."
          }
        },
        {
          "id": "a2wu64",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Am Tag leuchtet die ...",
            "en": "Which word completes Navi's sentence? The ... shines during the day."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-21-0",
              "label": {
                "de": "Sonne",
                "en": "Sun"
              }
            },
            {
              "id": "sentence-21-1",
              "label": {
                "de": "Apfel",
                "en": "Apple"
              }
            },
            {
              "id": "sentence-21-2",
              "label": {
                "de": "Käse",
                "en": "Cheese"
              }
            }
          ],
          "correctAnswerId": "sentence-21-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Sonne.",
            "en": "Correct! The missing word is Sun."
          },
          "hint": {
            "de": "Setze Sonne probeweise in den Satz ein.",
            "en": "Try putting Sun into the sentence."
          }
        },
        {
          "id": "a2wu65",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Birne?",
            "en": "Which word group does Pear belong to?"
          },
          "visual": "Birne",
          "answers": [
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            }
          ],
          "correctAnswerId": "fruit",
          "success": {
            "de": "Birne gehört zur Wortgruppe Obst.",
            "en": "Pear belongs to the word group fruit."
          },
          "hint": {
            "de": "Überlege, was Birne bezeichnet.",
            "en": "Think about what Pear describes."
          }
        },
        {
          "id": "a2wu66",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Spiel und Platz?",
            "en": "Which joined word matches play and ground?"
          },
          "visual": "🎲 + 🏞️",
          "answers": [
            {
              "id": "compound-11-0",
              "label": {
                "de": "Gartenstuhl",
                "en": "Garden chair"
              }
            },
            {
              "id": "compound-11-1",
              "label": {
                "de": "Spielplatz",
                "en": "Playground"
              }
            },
            {
              "id": "compound-11-2",
              "label": {
                "de": "Regenmantel",
                "en": "Raincoat"
              }
            }
          ],
          "correctAnswerId": "compound-11-1",
          "success": {
            "de": "Genau! Das Wort lautet Spielplatz.",
            "en": "Exactly! The word is Playground."
          },
          "hint": {
            "de": "Sprich Spiel und Platz direkt hintereinander.",
            "en": "Say play and ground together."
          }
        },
        {
          "id": "a2wu67",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? In der Nacht sehen wir den ...",
            "en": "Which word completes Navi's sentence? At night we can see the ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-22-0",
              "label": {
                "de": "Birne",
                "en": "Pear"
              }
            },
            {
              "id": "sentence-22-1",
              "label": {
                "de": "Milch",
                "en": "Milk"
              }
            },
            {
              "id": "sentence-22-2",
              "label": {
                "de": "Mond",
                "en": "Moon"
              }
            }
          ],
          "correctAnswerId": "sentence-22-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Mond.",
            "en": "Correct! The missing word is Moon."
          },
          "hint": {
            "de": "Setze Mond probeweise in den Satz ein.",
            "en": "Try putting Moon into the sentence."
          }
        },
        {
          "id": "a2wu68",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Banane?",
            "en": "Which word group does Banana belong to?"
          },
          "visual": "Banane",
          "answers": [
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            }
          ],
          "correctAnswerId": "fruit",
          "success": {
            "de": "Banane gehört zur Wortgruppe Obst.",
            "en": "Banana belongs to the word group fruit."
          },
          "hint": {
            "de": "Überlege, was Banane bezeichnet.",
            "en": "Think about what Banana describes."
          }
        },
        {
          "id": "a2wu69",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Geburt und Tag?",
            "en": "Which joined word matches birth and day?"
          },
          "visual": "👶 + 📅",
          "answers": [
            {
              "id": "compound-12-0",
              "label": {
                "de": "Geburtstag",
                "en": "Birthday"
              }
            },
            {
              "id": "compound-12-1",
              "label": {
                "de": "Schlafenszeit",
                "en": "Bedtime"
              }
            },
            {
              "id": "compound-12-2",
              "label": {
                "de": "Kaffeetasse",
                "en": "Coffee cup"
              }
            }
          ],
          "correctAnswerId": "compound-12-0",
          "success": {
            "de": "Genau! Das Wort lautet Geburtstag.",
            "en": "Exactly! The word is Birthday."
          },
          "hint": {
            "de": "Sprich Geburt und Tag direkt hintereinander.",
            "en": "Say birth and day together."
          }
        },
        {
          "id": "a2wu70",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Am Nachthimmel funkelt ein ...",
            "en": "Which word completes Navi's sentence? A ... twinkles in the night sky."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-23-0",
              "label": {
                "de": "Wasser",
                "en": "Water"
              }
            },
            {
              "id": "sentence-23-1",
              "label": {
                "de": "Stern",
                "en": "Star"
              }
            },
            {
              "id": "sentence-23-2",
              "label": {
                "de": "Banane",
                "en": "Banana"
              }
            }
          ],
          "correctAnswerId": "sentence-23-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Stern.",
            "en": "Correct! The missing word is Star."
          },
          "hint": {
            "de": "Setze Stern probeweise in den Satz ein.",
            "en": "Try putting Star into the sentence."
          }
        },
        {
          "id": "a2wu71",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Erdbeere?",
            "en": "Which word group does Strawberry belong to?"
          },
          "visual": "Erdbeere",
          "answers": [
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            }
          ],
          "correctAnswerId": "fruit",
          "success": {
            "de": "Erdbeere gehört zur Wortgruppe Obst.",
            "en": "Strawberry belongs to the word group fruit."
          },
          "hint": {
            "de": "Überlege, was Erdbeere bezeichnet.",
            "en": "Think about what Strawberry describes."
          }
        },
        {
          "id": "a2wu72",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Nacht und Licht?",
            "en": "Which joined word matches night and light?"
          },
          "visual": "🌙 + 💡",
          "answers": [
            {
              "id": "compound-13-0",
              "label": {
                "de": "Mondlicht",
                "en": "Moonlight"
              }
            },
            {
              "id": "compound-13-1",
              "label": {
                "de": "Regenbogen",
                "en": "Rainbow"
              }
            },
            {
              "id": "compound-13-2",
              "label": {
                "de": "Nachtlicht",
                "en": "Nightlight"
              }
            }
          ],
          "correctAnswerId": "compound-13-2",
          "success": {
            "de": "Genau! Das Wort lautet Nachtlicht.",
            "en": "Exactly! The word is Nightlight."
          },
          "hint": {
            "de": "Sprich Nacht und Licht direkt hintereinander.",
            "en": "Say night and light together."
          }
        },
        {
          "id": "a2wu73",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Aus einer dunklen ... kann Regen fallen.",
            "en": "Which word completes Navi's sentence? Rain can fall from a dark ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-24-0",
              "label": {
                "de": "Wolke",
                "en": "Cloud"
              }
            },
            {
              "id": "sentence-24-1",
              "label": {
                "de": "Erdbeere",
                "en": "Strawberry"
              }
            },
            {
              "id": "sentence-24-2",
              "label": {
                "de": "Haus",
                "en": "House"
              }
            }
          ],
          "correctAnswerId": "sentence-24-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Wolke.",
            "en": "Correct! The missing word is Cloud."
          },
          "hint": {
            "de": "Setze Wolke probeweise in den Satz ein.",
            "en": "Try putting Cloud into the sentence."
          }
        },
        {
          "id": "a2wu74",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Kirsche?",
            "en": "Which word group does Cherry belong to?"
          },
          "visual": "Kirsche",
          "answers": [
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            }
          ],
          "correctAnswerId": "fruit",
          "success": {
            "de": "Kirsche gehört zur Wortgruppe Obst.",
            "en": "Cherry belongs to the word group fruit."
          },
          "hint": {
            "de": "Überlege, was Kirsche bezeichnet.",
            "en": "Think about what Cherry describes."
          }
        },
        {
          "id": "a2wu75",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Sonne und Brille?",
            "en": "Which joined word matches sun and glasses?"
          },
          "visual": "☀️ + 👓",
          "answers": [
            {
              "id": "compound-14-0",
              "label": {
                "de": "Sonnenblume",
                "en": "Sunflower"
              }
            },
            {
              "id": "compound-14-1",
              "label": {
                "de": "Sonnenbrille",
                "en": "Sunglasses"
              }
            },
            {
              "id": "compound-14-2",
              "label": {
                "de": "Bücherregal",
                "en": "Bookshelf"
              }
            }
          ],
          "correctAnswerId": "compound-14-1",
          "success": {
            "de": "Genau! Das Wort lautet Sonnenbrille.",
            "en": "Exactly! The word is Sunglasses."
          },
          "hint": {
            "de": "Sprich Sonne und Brille direkt hintereinander.",
            "en": "Say sun and glasses together."
          }
        },
        {
          "id": "a2wu76",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Eine große Pflanze mit Stamm ist ein ...",
            "en": "Which word completes Navi's sentence? A large plant with a trunk is a ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-25-0",
              "label": {
                "de": "Kirsche",
                "en": "Cherry"
              }
            },
            {
              "id": "sentence-25-1",
              "label": {
                "de": "Schule",
                "en": "School"
              }
            },
            {
              "id": "sentence-25-2",
              "label": {
                "de": "Baum",
                "en": "Tree"
              }
            }
          ],
          "correctAnswerId": "sentence-25-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Baum.",
            "en": "Correct! The missing word is Tree."
          },
          "hint": {
            "de": "Setze Baum probeweise in den Satz ein.",
            "en": "Try putting Tree into the sentence."
          }
        },
        {
          "id": "a2wu77",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Traube?",
            "en": "Which word group does Grape belong to?"
          },
          "visual": "Traube",
          "answers": [
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            }
          ],
          "correctAnswerId": "fruit",
          "success": {
            "de": "Traube gehört zur Wortgruppe Obst.",
            "en": "Grape belongs to the word group fruit."
          },
          "hint": {
            "de": "Überlege, was Traube bezeichnet.",
            "en": "Think about what Grape describes."
          }
        },
        {
          "id": "a2wu78",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Tür und Klingel?",
            "en": "Which joined word matches door and bell?"
          },
          "visual": "🚪 + 🔔",
          "answers": [
            {
              "id": "compound-15-0",
              "label": {
                "de": "Türklingel",
                "en": "Doorbell"
              }
            },
            {
              "id": "compound-15-1",
              "label": {
                "de": "Leuchtturm",
                "en": "Lighthouse"
              }
            },
            {
              "id": "compound-15-2",
              "label": {
                "de": "Zahnbürste",
                "en": "Toothbrush"
              }
            }
          ],
          "correctAnswerId": "compound-15-0",
          "success": {
            "de": "Genau! Das Wort lautet Türklingel.",
            "en": "Exactly! The word is Doorbell."
          },
          "hint": {
            "de": "Sprich Tür und Klingel direkt hintereinander.",
            "en": "Say door and bell together."
          }
        },
        {
          "id": "a2wu79",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Eine bunt blühende Pflanze ist eine ...",
            "en": "Which word completes Navi's sentence? A colorful blooming plant is a ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-26-0",
              "label": {
                "de": "Auto",
                "en": "Car"
              }
            },
            {
              "id": "sentence-26-1",
              "label": {
                "de": "Blume",
                "en": "Flower"
              }
            },
            {
              "id": "sentence-26-2",
              "label": {
                "de": "Traube",
                "en": "Grape"
              }
            }
          ],
          "correctAnswerId": "sentence-26-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Blume.",
            "en": "Correct! The missing word is Flower."
          },
          "hint": {
            "de": "Setze Blume probeweise in den Satz ein.",
            "en": "Try putting Flower into the sentence."
          }
        },
        {
          "id": "a2wu80",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Zitrone?",
            "en": "Which word group does Lemon belong to?"
          },
          "visual": "Zitrone",
          "answers": [
            {
              "id": "fruit",
              "label": {
                "de": "Obst",
                "en": "fruit"
              }
            },
            {
              "id": "drinks",
              "label": {
                "de": "Getränke",
                "en": "drinks"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            }
          ],
          "correctAnswerId": "fruit",
          "success": {
            "de": "Zitrone gehört zur Wortgruppe Obst.",
            "en": "Lemon belongs to the word group fruit."
          },
          "hint": {
            "de": "Überlege, was Zitrone bezeichnet.",
            "en": "Think about what Lemon describes."
          }
        },
        {
          "id": "a2wu81",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Brief und Kasten?",
            "en": "Which joined word matches mail and box?"
          },
          "visual": "✉️ + 📦",
          "answers": [
            {
              "id": "compound-16-0",
              "label": {
                "de": "Kopfhörer",
                "en": "Headphones"
              }
            },
            {
              "id": "compound-16-1",
              "label": {
                "de": "Fußball",
                "en": "Football"
              }
            },
            {
              "id": "compound-16-2",
              "label": {
                "de": "Briefkasten",
                "en": "Mailbox"
              }
            }
          ],
          "correctAnswerId": "compound-16-2",
          "success": {
            "de": "Genau! Das Wort lautet Briefkasten.",
            "en": "Exactly! The word is Mailbox."
          },
          "hint": {
            "de": "Sprich Brief und Kasten direkt hintereinander.",
            "en": "Say mail and box together."
          }
        },
        {
          "id": "a2wu82",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Auf der Wiese wächst grünes ...",
            "en": "Which word completes Navi's sentence? Green ... grows in a meadow."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-27-0",
              "label": {
                "de": "Gras",
                "en": "Grass"
              }
            },
            {
              "id": "sentence-27-1",
              "label": {
                "de": "Zitrone",
                "en": "Lemon"
              }
            },
            {
              "id": "sentence-27-2",
              "label": {
                "de": "Bus",
                "en": "Bus"
              }
            }
          ],
          "correctAnswerId": "sentence-27-0",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Gras.",
            "en": "Correct! The missing word is Grass."
          },
          "hint": {
            "de": "Setze Gras probeweise in den Satz ein.",
            "en": "Try putting Grass into the sentence."
          }
        },
        {
          "id": "a2wu83",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Karotte?",
            "en": "Which word group does Carrot belong to?"
          },
          "visual": "Karotte",
          "answers": [
            {
              "id": "places",
              "label": {
                "de": "Orte und Gebäude",
                "en": "places and buildings"
              }
            },
            {
              "id": "sky",
              "label": {
                "de": "Himmel und Wetter",
                "en": "sky and weather"
              }
            },
            {
              "id": "vegetables",
              "label": {
                "de": "Gemüse",
                "en": "vegetables"
              }
            }
          ],
          "correctAnswerId": "vegetables",
          "success": {
            "de": "Karotte gehört zur Wortgruppe Gemüse.",
            "en": "Carrot belongs to the word group vegetables."
          },
          "hint": {
            "de": "Überlege, was Karotte bezeichnet.",
            "en": "Think about what Carrot describes."
          }
        },
        {
          "id": "a2wu84",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Haus und Tür?",
            "en": "Which joined word matches front and door?"
          },
          "visual": "🏠 + 🚪",
          "answers": [
            {
              "id": "compound-17-0",
              "label": {
                "de": "Schulbus",
                "en": "School bus"
              }
            },
            {
              "id": "compound-17-1",
              "label": {
                "de": "Haustür",
                "en": "Front door"
              }
            },
            {
              "id": "compound-17-2",
              "label": {
                "de": "Handtasche",
                "en": "Handbag"
              }
            }
          ],
          "correctAnswerId": "compound-17-1",
          "success": {
            "de": "Genau! Das Wort lautet Haustür.",
            "en": "Exactly! The word is Front door."
          },
          "hint": {
            "de": "Sprich Haus und Tür direkt hintereinander.",
            "en": "Say front and door together."
          }
        },
        {
          "id": "a2wu85",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Eine sehr hohe Landschaftsform ist ein ...",
            "en": "Which word completes Navi's sentence? A very high landform is a ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-28-0",
              "label": {
                "de": "Karotte",
                "en": "Carrot"
              }
            },
            {
              "id": "sentence-28-1",
              "label": {
                "de": "Zug",
                "en": "Train"
              }
            },
            {
              "id": "sentence-28-2",
              "label": {
                "de": "Berg",
                "en": "Mountain"
              }
            }
          ],
          "correctAnswerId": "sentence-28-2",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Berg.",
            "en": "Correct! The missing word is Mountain."
          },
          "hint": {
            "de": "Setze Berg probeweise in den Satz ein.",
            "en": "Try putting Mountain into the sentence."
          }
        },
        {
          "id": "a2wu86",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Tomate?",
            "en": "Which word group does Tomato belong to?"
          },
          "visual": "Tomate",
          "answers": [
            {
              "id": "sky",
              "label": {
                "de": "Himmel und Wetter",
                "en": "sky and weather"
              }
            },
            {
              "id": "vegetables",
              "label": {
                "de": "Gemüse",
                "en": "vegetables"
              }
            },
            {
              "id": "places",
              "label": {
                "de": "Orte und Gebäude",
                "en": "places and buildings"
              }
            }
          ],
          "correctAnswerId": "vegetables",
          "success": {
            "de": "Tomate gehört zur Wortgruppe Gemüse.",
            "en": "Tomato belongs to the word group vegetables."
          },
          "hint": {
            "de": "Überlege, was Tomate bezeichnet.",
            "en": "Think about what Tomato describes."
          }
        },
        {
          "id": "a2wu87",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Pfanne und Kuchen?",
            "en": "Which joined word matches pan and cake?"
          },
          "visual": "🍳 + 🍰",
          "answers": [
            {
              "id": "compound-18-0",
              "label": {
                "de": "Pfannkuchen",
                "en": "Pancake"
              }
            },
            {
              "id": "compound-18-1",
              "label": {
                "de": "Wasserflasche",
                "en": "Water bottle"
              }
            },
            {
              "id": "compound-18-2",
              "label": {
                "de": "Apfelbaum",
                "en": "Apple tree"
              }
            }
          ],
          "correctAnswerId": "compound-18-0",
          "success": {
            "de": "Genau! Das Wort lautet Pfannkuchen.",
            "en": "Exactly! The word is Pancake."
          },
          "hint": {
            "de": "Sprich Pfanne und Kuchen direkt hintereinander.",
            "en": "Say pan and cake together."
          }
        },
        {
          "id": "a2wu88",
          "prompt": {
            "de": "Welches Wort beendet Navis Satz? Wasser fließt durch die Landschaft im ...",
            "en": "Which word completes Navi's sentence? Water flows through the land in a ..."
          },
          "visual": "",
          "answers": [
            {
              "id": "sentence-29-0",
              "label": {
                "de": "Fahrrad",
                "en": "Bicycle"
              }
            },
            {
              "id": "sentence-29-1",
              "label": {
                "de": "Fluss",
                "en": "River"
              }
            },
            {
              "id": "sentence-29-2",
              "label": {
                "de": "Tomate",
                "en": "Tomato"
              }
            }
          ],
          "correctAnswerId": "sentence-29-1",
          "success": {
            "de": "Richtig! Das fehlende Wort ist Fluss.",
            "en": "Correct! The missing word is River."
          },
          "hint": {
            "de": "Setze Fluss probeweise in den Satz ein.",
            "en": "Try putting River into the sentence."
          }
        },
        {
          "id": "a2wu89",
          "prompt": {
            "de": "Zu welcher Wortgruppe gehört Brot?",
            "en": "Which word group does Bread belong to?"
          },
          "visual": "Brot",
          "answers": [
            {
              "id": "food",
              "label": {
                "de": "Lebensmittel",
                "en": "food"
              }
            },
            {
              "id": "vehicles",
              "label": {
                "de": "Fahrzeuge",
                "en": "vehicles"
              }
            },
            {
              "id": "nature",
              "label": {
                "de": "Natur",
                "en": "nature"
              }
            }
          ],
          "correctAnswerId": "food",
          "success": {
            "de": "Brot gehört zur Wortgruppe Lebensmittel.",
            "en": "Bread belongs to the word group food."
          },
          "hint": {
            "de": "Überlege, was Brot bezeichnet.",
            "en": "Think about what Bread describes."
          }
        },
        {
          "id": "a2wu90",
          "prompt": {
            "de": "Welches zusammengesetzte Wort entsteht aus Regen und Mantel?",
            "en": "Which joined word matches rain and coat?"
          },
          "visual": "🌧️ + 🧥",
          "answers": [
            {
              "id": "compound-19-0",
              "label": {
                "de": "Fahrradhelm",
                "en": "Bicycle helmet"
              }
            },
            {
              "id": "compound-19-1",
              "label": {
                "de": "Schneemann",
                "en": "Snowman"
              }
            },
            {
              "id": "compound-19-2",
              "label": {
                "de": "Regenmantel",
                "en": "Raincoat"
              }
            }
          ],
          "correctAnswerId": "compound-19-2",
          "success": {
            "de": "Genau! Das Wort lautet Regenmantel.",
            "en": "Exactly! The word is Raincoat."
          },
          "hint": {
            "de": "Sprich Regen und Mantel direkt hintereinander.",
            "en": "Say rain and coat together."
          }
        }
      ]
    }
  }
];

export const categoryById = (id: LearningCategory['id']) => {
  const category = categories.find((item) => item.id === id);
  if (!category) throw new Error(`Unknown learning category: ${id}`);
  return category;
};
