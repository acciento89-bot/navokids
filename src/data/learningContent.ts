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
    "questions": [
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
    "questions": [
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
    "questions": [
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
    "questions": [
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
    "questions": [
      {
        "id": "wu1",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier, das bellt?",
          "en": "Which word matches the animal that barks?"
        },
        "visual": "🐶",
        "answers": [
          {
            "id": "dog",
            "label": {
              "de": "Hund",
              "en": "Dog"
            }
          },
          {
            "id": "chicken",
            "label": {
              "de": "Huhn",
              "en": "Chicken"
            }
          },
          {
            "id": "cheese",
            "label": {
              "de": "Käse",
              "en": "Cheese"
            }
          }
        ],
        "correctAnswerId": "dog",
        "success": {
          "de": "Richtig! Das Wort heißt Hund.",
          "en": "Correct! The word is Dog."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit H.",
          "en": "The English word begins with D."
        }
      },
      {
        "id": "wu2",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier, das schnurrt?",
          "en": "Which word matches the animal that purrs?"
        },
        "visual": "🐱",
        "answers": [
          {
            "id": "duck",
            "label": {
              "de": "Ente",
              "en": "Duck"
            }
          },
          {
            "id": "milk",
            "label": {
              "de": "Milch",
              "en": "Milk"
            }
          },
          {
            "id": "cat",
            "label": {
              "de": "Katze",
              "en": "Cat"
            }
          }
        ],
        "correctAnswerId": "cat",
        "success": {
          "de": "Richtig! Das Wort heißt Katze.",
          "en": "Correct! The word is Cat."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit K.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu3",
        "prompt": {
          "de": "Welches Wort passt zu dem kleinen Tier mit langem Schwanz?",
          "en": "Which word matches the small animal with a long tail?"
        },
        "visual": "🐭",
        "answers": [
          {
            "id": "water",
            "label": {
              "de": "Wasser",
              "en": "Water"
            }
          },
          {
            "id": "mouse",
            "label": {
              "de": "Maus",
              "en": "Mouse"
            }
          },
          {
            "id": "owl",
            "label": {
              "de": "Eule",
              "en": "Owl"
            }
          }
        ],
        "correctAnswerId": "mouse",
        "success": {
          "de": "Richtig! Das Wort heißt Maus.",
          "en": "Correct! The word is Mouse."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit M.",
          "en": "The English word begins with M."
        }
      },
      {
        "id": "wu4",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier mit langen Ohren?",
          "en": "Which word matches the animal with long ears?"
        },
        "visual": "🐰",
        "answers": [
          {
            "id": "rabbit",
            "label": {
              "de": "Hase",
              "en": "Rabbit"
            }
          },
          {
            "id": "fish",
            "label": {
              "de": "Fisch",
              "en": "Fish"
            }
          },
          {
            "id": "house",
            "label": {
              "de": "Haus",
              "en": "House"
            }
          }
        ],
        "correctAnswerId": "rabbit",
        "success": {
          "de": "Richtig! Das Wort heißt Hase.",
          "en": "Correct! The word is Rabbit."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit H.",
          "en": "The English word begins with R."
        }
      },
      {
        "id": "wu5",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier mit buschigem roten Schwanz?",
          "en": "Which word matches the animal with a bushy red tail?"
        },
        "visual": "🦊",
        "answers": [
          {
            "id": "whale",
            "label": {
              "de": "Wal",
              "en": "Whale"
            }
          },
          {
            "id": "school",
            "label": {
              "de": "Schule",
              "en": "School"
            }
          },
          {
            "id": "fox",
            "label": {
              "de": "Fuchs",
              "en": "Fox"
            }
          }
        ],
        "correctAnswerId": "fox",
        "success": {
          "de": "Richtig! Das Wort heißt Fuchs.",
          "en": "Correct! The word is Fox."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit F.",
          "en": "The English word begins with F."
        }
      },
      {
        "id": "wu6",
        "prompt": {
          "de": "Welches Wort passt zu dem großen Tier, das Honig mag?",
          "en": "Which word matches the large animal that likes honey?"
        },
        "visual": "🐻",
        "answers": [
          {
            "id": "car",
            "label": {
              "de": "Auto",
              "en": "Car"
            }
          },
          {
            "id": "bear",
            "label": {
              "de": "Bär",
              "en": "Bear"
            }
          },
          {
            "id": "dolphin",
            "label": {
              "de": "Delfin",
              "en": "Dolphin"
            }
          }
        ],
        "correctAnswerId": "bear",
        "success": {
          "de": "Richtig! Das Wort heißt Bär.",
          "en": "Correct! The word is Bear."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu7",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier mit einer Mähne?",
          "en": "Which word matches the animal with a mane?"
        },
        "visual": "🦁",
        "answers": [
          {
            "id": "lion",
            "label": {
              "de": "Löwe",
              "en": "Lion"
            }
          },
          {
            "id": "shark",
            "label": {
              "de": "Hai",
              "en": "Shark"
            }
          },
          {
            "id": "bus",
            "label": {
              "de": "Bus",
              "en": "Bus"
            }
          }
        ],
        "correctAnswerId": "lion",
        "success": {
          "de": "Richtig! Das Wort heißt Löwe.",
          "en": "Correct! The word is Lion."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit L.",
          "en": "The English word begins with L."
        }
      },
      {
        "id": "wu8",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier mit schwarzen Streifen?",
          "en": "Which word matches the animal with black stripes?"
        },
        "visual": "🐯",
        "answers": [
          {
            "id": "octopus",
            "label": {
              "de": "Oktopus",
              "en": "Octopus"
            }
          },
          {
            "id": "train",
            "label": {
              "de": "Zug",
              "en": "Train"
            }
          },
          {
            "id": "tiger",
            "label": {
              "de": "Tiger",
              "en": "Tiger"
            }
          }
        ],
        "correctAnswerId": "tiger",
        "success": {
          "de": "Richtig! Das Wort heißt Tiger.",
          "en": "Correct! The word is Tiger."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit T.",
          "en": "The English word begins with T."
        }
      },
      {
        "id": "wu9",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier mit einem Rüssel?",
          "en": "Which word matches the animal with a trunk?"
        },
        "visual": "🐘",
        "answers": [
          {
            "id": "bicycle",
            "label": {
              "de": "Fahrrad",
              "en": "Bicycle"
            }
          },
          {
            "id": "elephant",
            "label": {
              "de": "Elefant",
              "en": "Elephant"
            }
          },
          {
            "id": "crab",
            "label": {
              "de": "Krabbe",
              "en": "Crab"
            }
          }
        ],
        "correctAnswerId": "elephant",
        "success": {
          "de": "Richtig! Das Wort heißt Elefant.",
          "en": "Correct! The word is Elephant."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit E.",
          "en": "The English word begins with E."
        }
      },
      {
        "id": "wu10",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier mit sehr langem Hals?",
          "en": "Which word matches the animal with a very long neck?"
        },
        "visual": "🦒",
        "answers": [
          {
            "id": "giraffe",
            "label": {
              "de": "Giraffe",
              "en": "Giraffe"
            }
          },
          {
            "id": "bee",
            "label": {
              "de": "Biene",
              "en": "Bee"
            }
          },
          {
            "id": "boat",
            "label": {
              "de": "Boot",
              "en": "Boat"
            }
          }
        ],
        "correctAnswerId": "giraffe",
        "success": {
          "de": "Richtig! Das Wort heißt Giraffe.",
          "en": "Correct! The word is Giraffe."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit G.",
          "en": "The English word begins with G."
        }
      },
      {
        "id": "wu11",
        "prompt": {
          "de": "Welches Wort passt zu dem schwarz-weiß gestreiften Tier?",
          "en": "Which word matches the black and white striped animal?"
        },
        "visual": "🦓",
        "answers": [
          {
            "id": "butterfly",
            "label": {
              "de": "Schmetterling",
              "en": "Butterfly"
            }
          },
          {
            "id": "airplane",
            "label": {
              "de": "Flugzeug",
              "en": "Airplane"
            }
          },
          {
            "id": "zebra",
            "label": {
              "de": "Zebra",
              "en": "Zebra"
            }
          }
        ],
        "correctAnswerId": "zebra",
        "success": {
          "de": "Richtig! Das Wort heißt Zebra.",
          "en": "Correct! The word is Zebra."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit Z.",
          "en": "The English word begins with Z."
        }
      },
      {
        "id": "wu12",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier, das geschickt klettert?",
          "en": "Which word matches the animal that climbs skillfully?"
        },
        "visual": "🐒",
        "answers": [
          {
            "id": "sun",
            "label": {
              "de": "Sonne",
              "en": "Sun"
            }
          },
          {
            "id": "monkey",
            "label": {
              "de": "Affe",
              "en": "Monkey"
            }
          },
          {
            "id": "snail",
            "label": {
              "de": "Schnecke",
              "en": "Snail"
            }
          }
        ],
        "correctAnswerId": "monkey",
        "success": {
          "de": "Richtig! Das Wort heißt Affe.",
          "en": "Correct! The word is Monkey."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit A.",
          "en": "The English word begins with M."
        }
      },
      {
        "id": "wu13",
        "prompt": {
          "de": "Welches Wort passt zu dem Bauernhoftier, das Milch gibt?",
          "en": "Which word matches the farm animal that gives milk?"
        },
        "visual": "🐮",
        "answers": [
          {
            "id": "cow",
            "label": {
              "de": "Kuh",
              "en": "Cow"
            }
          },
          {
            "id": "frog",
            "label": {
              "de": "Frosch",
              "en": "Frog"
            }
          },
          {
            "id": "moon",
            "label": {
              "de": "Mond",
              "en": "Moon"
            }
          }
        ],
        "correctAnswerId": "cow",
        "success": {
          "de": "Richtig! Das Wort heißt Kuh.",
          "en": "Correct! The word is Cow."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit K.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu14",
        "prompt": {
          "de": "Welches Wort passt zu dem Bauernhoftier mit runder Schnauze?",
          "en": "Which word matches the farm animal with a round snout?"
        },
        "visual": "🐷",
        "answers": [
          {
            "id": "turtle",
            "label": {
              "de": "Schildkröte",
              "en": "Turtle"
            }
          },
          {
            "id": "star",
            "label": {
              "de": "Stern",
              "en": "Star"
            }
          },
          {
            "id": "pig",
            "label": {
              "de": "Schwein",
              "en": "Pig"
            }
          }
        ],
        "correctAnswerId": "pig",
        "success": {
          "de": "Richtig! Das Wort heißt Schwein.",
          "en": "Correct! The word is Pig."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with P."
        }
      },
      {
        "id": "wu15",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier, auf dem Menschen reiten?",
          "en": "Which word matches the animal people can ride?"
        },
        "visual": "🐴",
        "answers": [
          {
            "id": "cloud",
            "label": {
              "de": "Wolke",
              "en": "Cloud"
            }
          },
          {
            "id": "horse",
            "label": {
              "de": "Pferd",
              "en": "Horse"
            }
          },
          {
            "id": "apple",
            "label": {
              "de": "Apfel",
              "en": "Apple"
            }
          }
        ],
        "correctAnswerId": "horse",
        "success": {
          "de": "Richtig! Das Wort heißt Pferd.",
          "en": "Correct! The word is Horse."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit P.",
          "en": "The English word begins with H."
        }
      },
      {
        "id": "wu16",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier mit weicher Wolle?",
          "en": "Which word matches the animal with soft wool?"
        },
        "visual": "🐑",
        "answers": [
          {
            "id": "sheep",
            "label": {
              "de": "Schaf",
              "en": "Sheep"
            }
          },
          {
            "id": "pear",
            "label": {
              "de": "Birne",
              "en": "Pear"
            }
          },
          {
            "id": "tree",
            "label": {
              "de": "Baum",
              "en": "Tree"
            }
          }
        ],
        "correctAnswerId": "sheep",
        "success": {
          "de": "Richtig! Das Wort heißt Schaf.",
          "en": "Correct! The word is Sheep."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu17",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier mit Hörnern, das gut klettert?",
          "en": "Which word matches the horned animal that climbs well?"
        },
        "visual": "🐐",
        "answers": [
          {
            "id": "banana",
            "label": {
              "de": "Banane",
              "en": "Banana"
            }
          },
          {
            "id": "flower",
            "label": {
              "de": "Blume",
              "en": "Flower"
            }
          },
          {
            "id": "goat",
            "label": {
              "de": "Ziege",
              "en": "Goat"
            }
          }
        ],
        "correctAnswerId": "goat",
        "success": {
          "de": "Richtig! Das Wort heißt Ziege.",
          "en": "Correct! The word is Goat."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit Z.",
          "en": "The English word begins with G."
        }
      },
      {
        "id": "wu18",
        "prompt": {
          "de": "Welches Wort passt zu dem Vogel, der Eier legt und gackert?",
          "en": "Which word matches the bird that lays eggs and clucks?"
        },
        "visual": "🐔",
        "answers": [
          {
            "id": "grass",
            "label": {
              "de": "Gras",
              "en": "Grass"
            }
          },
          {
            "id": "chicken",
            "label": {
              "de": "Huhn",
              "en": "Chicken"
            }
          },
          {
            "id": "strawberry",
            "label": {
              "de": "Erdbeere",
              "en": "Strawberry"
            }
          }
        ],
        "correctAnswerId": "chicken",
        "success": {
          "de": "Richtig! Das Wort heißt Huhn.",
          "en": "Correct! The word is Chicken."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit H.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu19",
        "prompt": {
          "de": "Welches Wort passt zu dem Vogel, der quakt und schwimmt?",
          "en": "Which word matches the bird that quacks and swims?"
        },
        "visual": "🦆",
        "answers": [
          {
            "id": "duck",
            "label": {
              "de": "Ente",
              "en": "Duck"
            }
          },
          {
            "id": "cherry",
            "label": {
              "de": "Kirsche",
              "en": "Cherry"
            }
          },
          {
            "id": "mountain",
            "label": {
              "de": "Berg",
              "en": "Mountain"
            }
          }
        ],
        "correctAnswerId": "duck",
        "success": {
          "de": "Richtig! Das Wort heißt Ente.",
          "en": "Correct! The word is Duck."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit E.",
          "en": "The English word begins with D."
        }
      },
      {
        "id": "wu20",
        "prompt": {
          "de": "Welches Wort passt zu dem Vogel, der nachts wach ist?",
          "en": "Which word matches the bird that is awake at night?"
        },
        "visual": "🦉",
        "answers": [
          {
            "id": "grape",
            "label": {
              "de": "Traube",
              "en": "Grape"
            }
          },
          {
            "id": "river",
            "label": {
              "de": "Fluss",
              "en": "River"
            }
          },
          {
            "id": "owl",
            "label": {
              "de": "Eule",
              "en": "Owl"
            }
          }
        ],
        "correctAnswerId": "owl",
        "success": {
          "de": "Richtig! Das Wort heißt Eule.",
          "en": "Correct! The word is Owl."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit E.",
          "en": "The English word begins with O."
        }
      },
      {
        "id": "wu21",
        "prompt": {
          "de": "Welches Wort passt zu dem Tier mit Flossen und Kiemen?",
          "en": "Which word matches the animal with fins and gills?"
        },
        "visual": "🐟",
        "answers": [
          {
            "id": "book",
            "label": {
              "de": "Buch",
              "en": "Book"
            }
          },
          {
            "id": "fish",
            "label": {
              "de": "Fisch",
              "en": "Fish"
            }
          },
          {
            "id": "lemon",
            "label": {
              "de": "Zitrone",
              "en": "Lemon"
            }
          }
        ],
        "correctAnswerId": "fish",
        "success": {
          "de": "Richtig! Das Wort heißt Fisch.",
          "en": "Correct! The word is Fish."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit F.",
          "en": "The English word begins with F."
        }
      },
      {
        "id": "wu22",
        "prompt": {
          "de": "Welches Wort passt zu dem riesigen Tier im Meer?",
          "en": "Which word matches the enormous animal in the sea?"
        },
        "visual": "🐋",
        "answers": [
          {
            "id": "whale",
            "label": {
              "de": "Wal",
              "en": "Whale"
            }
          },
          {
            "id": "carrot",
            "label": {
              "de": "Karotte",
              "en": "Carrot"
            }
          },
          {
            "id": "pencil",
            "label": {
              "de": "Stift",
              "en": "Pencil"
            }
          }
        ],
        "correctAnswerId": "whale",
        "success": {
          "de": "Richtig! Das Wort heißt Wal.",
          "en": "Correct! The word is Whale."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit W.",
          "en": "The English word begins with W."
        }
      },
      {
        "id": "wu23",
        "prompt": {
          "de": "Welches Wort passt zu dem klugen Meerestier, das springt?",
          "en": "Which word matches the clever sea animal that leaps?"
        },
        "visual": "🐬",
        "answers": [
          {
            "id": "tomato",
            "label": {
              "de": "Tomate",
              "en": "Tomato"
            }
          },
          {
            "id": "ball",
            "label": {
              "de": "Ball",
              "en": "Ball"
            }
          },
          {
            "id": "dolphin",
            "label": {
              "de": "Delfin",
              "en": "Dolphin"
            }
          }
        ],
        "correctAnswerId": "dolphin",
        "success": {
          "de": "Richtig! Das Wort heißt Delfin.",
          "en": "Correct! The word is Dolphin."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit D.",
          "en": "The English word begins with D."
        }
      },
      {
        "id": "wu24",
        "prompt": {
          "de": "Welches Wort passt zu dem Fisch mit vielen scharfen Zähnen?",
          "en": "Which word matches the fish with many sharp teeth?"
        },
        "visual": "🦈",
        "answers": [
          {
            "id": "doll",
            "label": {
              "de": "Puppe",
              "en": "Doll"
            }
          },
          {
            "id": "shark",
            "label": {
              "de": "Hai",
              "en": "Shark"
            }
          },
          {
            "id": "bread",
            "label": {
              "de": "Brot",
              "en": "Bread"
            }
          }
        ],
        "correctAnswerId": "shark",
        "success": {
          "de": "Richtig! Das Wort heißt Hai.",
          "en": "Correct! The word is Shark."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit H.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu25",
        "prompt": {
          "de": "Welches Wort passt zu dem Meerestier mit acht Armen?",
          "en": "Which word matches the sea animal with eight arms?"
        },
        "visual": "🐙",
        "answers": [
          {
            "id": "octopus",
            "label": {
              "de": "Oktopus",
              "en": "Octopus"
            }
          },
          {
            "id": "cheese",
            "label": {
              "de": "Käse",
              "en": "Cheese"
            }
          },
          {
            "id": "drum",
            "label": {
              "de": "Trommel",
              "en": "Drum"
            }
          }
        ],
        "correctAnswerId": "octopus",
        "success": {
          "de": "Richtig! Das Wort heißt Oktopus.",
          "en": "Correct! The word is Octopus."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit O.",
          "en": "The English word begins with O."
        }
      },
      {
        "id": "wu26",
        "prompt": {
          "de": "Welches Wort passt zu dem Meerestier, das seitwärts läuft?",
          "en": "Which word matches the sea animal that walks sideways?"
        },
        "visual": "🦀",
        "answers": [
          {
            "id": "milk",
            "label": {
              "de": "Milch",
              "en": "Milk"
            }
          },
          {
            "id": "clock",
            "label": {
              "de": "Uhr",
              "en": "Clock"
            }
          },
          {
            "id": "crab",
            "label": {
              "de": "Krabbe",
              "en": "Crab"
            }
          }
        ],
        "correctAnswerId": "crab",
        "success": {
          "de": "Richtig! Das Wort heißt Krabbe.",
          "en": "Correct! The word is Crab."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit K.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu27",
        "prompt": {
          "de": "Welches Wort passt zu dem Insekt, das Honig macht?",
          "en": "Which word matches the insect that makes honey?"
        },
        "visual": "🐝",
        "answers": [
          {
            "id": "key",
            "label": {
              "de": "Schlüssel",
              "en": "Key"
            }
          },
          {
            "id": "bee",
            "label": {
              "de": "Biene",
              "en": "Bee"
            }
          },
          {
            "id": "water",
            "label": {
              "de": "Wasser",
              "en": "Water"
            }
          }
        ],
        "correctAnswerId": "bee",
        "success": {
          "de": "Richtig! Das Wort heißt Biene.",
          "en": "Correct! The word is Bee."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu28",
        "prompt": {
          "de": "Welches Wort passt zu dem Insekt mit bunten Flügeln?",
          "en": "Which word matches the insect with colorful wings?"
        },
        "visual": "🦋",
        "answers": [
          {
            "id": "butterfly",
            "label": {
              "de": "Schmetterling",
              "en": "Butterfly"
            }
          },
          {
            "id": "house",
            "label": {
              "de": "Haus",
              "en": "House"
            }
          },
          {
            "id": "shoe",
            "label": {
              "de": "Schuh",
              "en": "Shoe"
            }
          }
        ],
        "correctAnswerId": "butterfly",
        "success": {
          "de": "Richtig! Das Wort heißt Schmetterling.",
          "en": "Correct! The word is Butterfly."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu29",
        "prompt": {
          "de": "Welches Wort passt zu dem langsamen Tier mit Haus?",
          "en": "Which word matches the slow animal with a shell?"
        },
        "visual": "🐌",
        "answers": [
          {
            "id": "school",
            "label": {
              "de": "Schule",
              "en": "School"
            }
          },
          {
            "id": "hat",
            "label": {
              "de": "Hut",
              "en": "Hat"
            }
          },
          {
            "id": "snail",
            "label": {
              "de": "Schnecke",
              "en": "Snail"
            }
          }
        ],
        "correctAnswerId": "snail",
        "success": {
          "de": "Richtig! Das Wort heißt Schnecke.",
          "en": "Correct! The word is Snail."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu30",
        "prompt": {
          "de": "Welches Wort passt zu dem grünen Tier, das quakt und hüpft?",
          "en": "Which word matches the green animal that croaks and hops?"
        },
        "visual": "🐸",
        "answers": [
          {
            "id": "hand",
            "label": {
              "de": "Hand",
              "en": "Hand"
            }
          },
          {
            "id": "frog",
            "label": {
              "de": "Frosch",
              "en": "Frog"
            }
          },
          {
            "id": "car",
            "label": {
              "de": "Auto",
              "en": "Car"
            }
          }
        ],
        "correctAnswerId": "frog",
        "success": {
          "de": "Richtig! Das Wort heißt Frosch.",
          "en": "Correct! The word is Frog."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit F.",
          "en": "The English word begins with F."
        }
      },
      {
        "id": "wu31",
        "prompt": {
          "de": "Welches Wort passt zu dem langsamen Tier mit hartem Panzer?",
          "en": "Which word matches the slow animal with a hard shell?"
        },
        "visual": "🐢",
        "answers": [
          {
            "id": "turtle",
            "label": {
              "de": "Schildkröte",
              "en": "Turtle"
            }
          },
          {
            "id": "bus",
            "label": {
              "de": "Bus",
              "en": "Bus"
            }
          },
          {
            "id": "heart",
            "label": {
              "de": "Herz",
              "en": "Heart"
            }
          }
        ],
        "correctAnswerId": "turtle",
        "success": {
          "de": "Richtig! Das Wort heißt Schildkröte.",
          "en": "Correct! The word is Turtle."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with T."
        }
      },
      {
        "id": "wu32",
        "prompt": {
          "de": "Welches Wort passt zu der runden roten Frucht?",
          "en": "Which word matches the round red fruit?"
        },
        "visual": "🍎",
        "answers": [
          {
            "id": "train",
            "label": {
              "de": "Zug",
              "en": "Train"
            }
          },
          {
            "id": "sock",
            "label": {
              "de": "Socke",
              "en": "Sock"
            }
          },
          {
            "id": "apple",
            "label": {
              "de": "Apfel",
              "en": "Apple"
            }
          }
        ],
        "correctAnswerId": "apple",
        "success": {
          "de": "Richtig! Das Wort heißt Apfel.",
          "en": "Correct! The word is Apple."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit A.",
          "en": "The English word begins with A."
        }
      },
      {
        "id": "wu33",
        "prompt": {
          "de": "Welches Wort passt zu der unten breiten grünen Frucht?",
          "en": "Which word matches the green fruit that is wide at the bottom?"
        },
        "visual": "🍐",
        "answers": [
          {
            "id": "jacket",
            "label": {
              "de": "Jacke",
              "en": "Jacket"
            }
          },
          {
            "id": "pear",
            "label": {
              "de": "Birne",
              "en": "Pear"
            }
          },
          {
            "id": "bicycle",
            "label": {
              "de": "Fahrrad",
              "en": "Bicycle"
            }
          }
        ],
        "correctAnswerId": "pear",
        "success": {
          "de": "Richtig! Das Wort heißt Birne.",
          "en": "Correct! The word is Pear."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with P."
        }
      },
      {
        "id": "wu34",
        "prompt": {
          "de": "Welches Wort passt zu der langen gelben Frucht?",
          "en": "Which word matches the long yellow fruit?"
        },
        "visual": "🍌",
        "answers": [
          {
            "id": "banana",
            "label": {
              "de": "Banane",
              "en": "Banana"
            }
          },
          {
            "id": "boat",
            "label": {
              "de": "Boot",
              "en": "Boat"
            }
          },
          {
            "id": "pants",
            "label": {
              "de": "Hose",
              "en": "Pants"
            }
          }
        ],
        "correctAnswerId": "banana",
        "success": {
          "de": "Richtig! Das Wort heißt Banane.",
          "en": "Correct! The word is Banana."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu35",
        "prompt": {
          "de": "Welches Wort passt zu der kleinen roten Frucht mit grünen Blättern?",
          "en": "Which word matches the small red fruit with green leaves?"
        },
        "visual": "🍓",
        "answers": [
          {
            "id": "airplane",
            "label": {
              "de": "Flugzeug",
              "en": "Airplane"
            }
          },
          {
            "id": "dress",
            "label": {
              "de": "Kleid",
              "en": "Dress"
            }
          },
          {
            "id": "strawberry",
            "label": {
              "de": "Erdbeere",
              "en": "Strawberry"
            }
          }
        ],
        "correctAnswerId": "strawberry",
        "success": {
          "de": "Richtig! Das Wort heißt Erdbeere.",
          "en": "Correct! The word is Strawberry."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit E.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu36",
        "prompt": {
          "de": "Welches Wort passt zu der kleinen roten Frucht am Stiel?",
          "en": "Which word matches the small red fruit on a stem?"
        },
        "visual": "🍒",
        "answers": [
          {
            "id": "spoon",
            "label": {
              "de": "Löffel",
              "en": "Spoon"
            }
          },
          {
            "id": "cherry",
            "label": {
              "de": "Kirsche",
              "en": "Cherry"
            }
          },
          {
            "id": "sun",
            "label": {
              "de": "Sonne",
              "en": "Sun"
            }
          }
        ],
        "correctAnswerId": "cherry",
        "success": {
          "de": "Richtig! Das Wort heißt Kirsche.",
          "en": "Correct! The word is Cherry."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit K.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu37",
        "prompt": {
          "de": "Welches Wort passt zu der Frucht, die in einer Rispe wächst?",
          "en": "Which word matches the fruit that grows in a bunch?"
        },
        "visual": "🍇",
        "answers": [
          {
            "id": "grape",
            "label": {
              "de": "Traube",
              "en": "Grape"
            }
          },
          {
            "id": "moon",
            "label": {
              "de": "Mond",
              "en": "Moon"
            }
          },
          {
            "id": "fork",
            "label": {
              "de": "Gabel",
              "en": "Fork"
            }
          }
        ],
        "correctAnswerId": "grape",
        "success": {
          "de": "Richtig! Das Wort heißt Traube.",
          "en": "Correct! The word is Grape."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit T.",
          "en": "The English word begins with G."
        }
      },
      {
        "id": "wu38",
        "prompt": {
          "de": "Welches Wort passt zu der sauren gelben Frucht?",
          "en": "Which word matches the sour yellow fruit?"
        },
        "visual": "🍋",
        "answers": [
          {
            "id": "star",
            "label": {
              "de": "Stern",
              "en": "Star"
            }
          },
          {
            "id": "plate",
            "label": {
              "de": "Teller",
              "en": "Plate"
            }
          },
          {
            "id": "lemon",
            "label": {
              "de": "Zitrone",
              "en": "Lemon"
            }
          }
        ],
        "correctAnswerId": "lemon",
        "success": {
          "de": "Richtig! Das Wort heißt Zitrone.",
          "en": "Correct! The word is Lemon."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit Z.",
          "en": "The English word begins with L."
        }
      },
      {
        "id": "wu39",
        "prompt": {
          "de": "Welches Wort passt zu dem langen orangefarbenen Gemüse?",
          "en": "Which word matches the long orange vegetable?"
        },
        "visual": "🥕",
        "answers": [
          {
            "id": "cup",
            "label": {
              "de": "Tasse",
              "en": "Cup"
            }
          },
          {
            "id": "carrot",
            "label": {
              "de": "Karotte",
              "en": "Carrot"
            }
          },
          {
            "id": "cloud",
            "label": {
              "de": "Wolke",
              "en": "Cloud"
            }
          }
        ],
        "correctAnswerId": "carrot",
        "success": {
          "de": "Richtig! Das Wort heißt Karotte.",
          "en": "Correct! The word is Carrot."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit K.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu40",
        "prompt": {
          "de": "Welches Wort passt zu der roten Frucht im Salat?",
          "en": "Which word matches the red fruit used in salad?"
        },
        "visual": "🍅",
        "answers": [
          {
            "id": "tomato",
            "label": {
              "de": "Tomate",
              "en": "Tomato"
            }
          },
          {
            "id": "tree",
            "label": {
              "de": "Baum",
              "en": "Tree"
            }
          },
          {
            "id": "bed",
            "label": {
              "de": "Bett",
              "en": "Bed"
            }
          }
        ],
        "correctAnswerId": "tomato",
        "success": {
          "de": "Richtig! Das Wort heißt Tomate.",
          "en": "Correct! The word is Tomato."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit T.",
          "en": "The English word begins with T."
        }
      },
      {
        "id": "wu41",
        "prompt": {
          "de": "Welches Wort passt zu dem Lebensmittel aus der Bäckerei?",
          "en": "Which word matches the food from a bakery?"
        },
        "visual": "🍞",
        "answers": [
          {
            "id": "flower",
            "label": {
              "de": "Blume",
              "en": "Flower"
            }
          },
          {
            "id": "chair",
            "label": {
              "de": "Stuhl",
              "en": "Chair"
            }
          },
          {
            "id": "bread",
            "label": {
              "de": "Brot",
              "en": "Bread"
            }
          }
        ],
        "correctAnswerId": "bread",
        "success": {
          "de": "Richtig! Das Wort heißt Brot.",
          "en": "Correct! The word is Bread."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu42",
        "prompt": {
          "de": "Welches Wort passt zu dem gelben Lebensmittel mit Löchern?",
          "en": "Which word matches the yellow food with holes?"
        },
        "visual": "🧀",
        "answers": [
          {
            "id": "table",
            "label": {
              "de": "Tisch",
              "en": "Table"
            }
          },
          {
            "id": "cheese",
            "label": {
              "de": "Käse",
              "en": "Cheese"
            }
          },
          {
            "id": "grass",
            "label": {
              "de": "Gras",
              "en": "Grass"
            }
          }
        ],
        "correctAnswerId": "cheese",
        "success": {
          "de": "Richtig! Das Wort heißt Käse.",
          "en": "Correct! The word is Cheese."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit K.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu43",
        "prompt": {
          "de": "Welches Wort passt zu dem weißen Getränk?",
          "en": "Which word matches the white drink?"
        },
        "visual": "🥛",
        "answers": [
          {
            "id": "milk",
            "label": {
              "de": "Milch",
              "en": "Milk"
            }
          },
          {
            "id": "mountain",
            "label": {
              "de": "Berg",
              "en": "Mountain"
            }
          },
          {
            "id": "door",
            "label": {
              "de": "Tür",
              "en": "Door"
            }
          }
        ],
        "correctAnswerId": "milk",
        "success": {
          "de": "Richtig! Das Wort heißt Milch.",
          "en": "Correct! The word is Milk."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit M.",
          "en": "The English word begins with M."
        }
      },
      {
        "id": "wu44",
        "prompt": {
          "de": "Welches Wort passt zu dem Getränk gegen Durst?",
          "en": "Which word matches the drink that quenches thirst?"
        },
        "visual": "💧",
        "answers": [
          {
            "id": "river",
            "label": {
              "de": "Fluss",
              "en": "River"
            }
          },
          {
            "id": "window",
            "label": {
              "de": "Fenster",
              "en": "Window"
            }
          },
          {
            "id": "water",
            "label": {
              "de": "Wasser",
              "en": "Water"
            }
          }
        ],
        "correctAnswerId": "water",
        "success": {
          "de": "Richtig! Das Wort heißt Wasser.",
          "en": "Correct! The word is Water."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit W.",
          "en": "The English word begins with W."
        }
      },
      {
        "id": "wu45",
        "prompt": {
          "de": "Welches Wort passt zu dem Gebäude, in dem Menschen wohnen?",
          "en": "Which word matches the building where people live?"
        },
        "visual": "🏠",
        "answers": [
          {
            "id": "soap",
            "label": {
              "de": "Seife",
              "en": "Soap"
            }
          },
          {
            "id": "house",
            "label": {
              "de": "Haus",
              "en": "House"
            }
          },
          {
            "id": "book",
            "label": {
              "de": "Buch",
              "en": "Book"
            }
          }
        ],
        "correctAnswerId": "house",
        "success": {
          "de": "Richtig! Das Wort heißt Haus.",
          "en": "Correct! The word is House."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit H.",
          "en": "The English word begins with H."
        }
      },
      {
        "id": "wu46",
        "prompt": {
          "de": "Welches Wort passt zu dem Ort, an dem Kinder lernen?",
          "en": "Which word matches the place where children learn?"
        },
        "visual": "🏫",
        "answers": [
          {
            "id": "school",
            "label": {
              "de": "Schule",
              "en": "School"
            }
          },
          {
            "id": "pencil",
            "label": {
              "de": "Stift",
              "en": "Pencil"
            }
          },
          {
            "id": "toothbrush",
            "label": {
              "de": "Zahnbürste",
              "en": "Toothbrush"
            }
          }
        ],
        "correctAnswerId": "school",
        "success": {
          "de": "Richtig! Das Wort heißt Schule.",
          "en": "Correct! The word is School."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu47",
        "prompt": {
          "de": "Welches Wort passt zu dem Fahrzeug für die Straße?",
          "en": "Which word matches the vehicle used on roads?"
        },
        "visual": "🚗",
        "answers": [
          {
            "id": "ball",
            "label": {
              "de": "Ball",
              "en": "Ball"
            }
          },
          {
            "id": "comb",
            "label": {
              "de": "Kamm",
              "en": "Comb"
            }
          },
          {
            "id": "car",
            "label": {
              "de": "Auto",
              "en": "Car"
            }
          }
        ],
        "correctAnswerId": "car",
        "success": {
          "de": "Richtig! Das Wort heißt Auto.",
          "en": "Correct! The word is Car."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit A.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu48",
        "prompt": {
          "de": "Welches Wort passt zu dem großen Fahrzeug für viele Menschen?",
          "en": "Which word matches the large vehicle for many people?"
        },
        "visual": "🚌",
        "answers": [
          {
            "id": "backpack",
            "label": {
              "de": "Rucksack",
              "en": "Backpack"
            }
          },
          {
            "id": "bus",
            "label": {
              "de": "Bus",
              "en": "Bus"
            }
          },
          {
            "id": "doll",
            "label": {
              "de": "Puppe",
              "en": "Doll"
            }
          }
        ],
        "correctAnswerId": "bus",
        "success": {
          "de": "Richtig! Das Wort heißt Bus.",
          "en": "Correct! The word is Bus."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu49",
        "prompt": {
          "de": "Welches Wort passt zu dem Fahrzeug auf Schienen?",
          "en": "Which word matches the vehicle that runs on rails?"
        },
        "visual": "🚆",
        "answers": [
          {
            "id": "train",
            "label": {
              "de": "Zug",
              "en": "Train"
            }
          },
          {
            "id": "drum",
            "label": {
              "de": "Trommel",
              "en": "Drum"
            }
          },
          {
            "id": "umbrella",
            "label": {
              "de": "Regenschirm",
              "en": "Umbrella"
            }
          }
        ],
        "correctAnswerId": "train",
        "success": {
          "de": "Richtig! Das Wort heißt Zug.",
          "en": "Correct! The word is Train."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit Z.",
          "en": "The English word begins with T."
        }
      },
      {
        "id": "wu50",
        "prompt": {
          "de": "Welches Wort passt zu dem Fahrzeug mit zwei Rädern und Pedalen?",
          "en": "Which word matches the vehicle with two wheels and pedals?"
        },
        "visual": "🚲",
        "answers": [
          {
            "id": "clock",
            "label": {
              "de": "Uhr",
              "en": "Clock"
            }
          },
          {
            "id": "dog",
            "label": {
              "de": "Hund",
              "en": "Dog"
            }
          },
          {
            "id": "bicycle",
            "label": {
              "de": "Fahrrad",
              "en": "Bicycle"
            }
          }
        ],
        "correctAnswerId": "bicycle",
        "success": {
          "de": "Richtig! Das Wort heißt Fahrrad.",
          "en": "Correct! The word is Bicycle."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit F.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu51",
        "prompt": {
          "de": "Welches Wort passt zu dem Fahrzeug auf dem Wasser?",
          "en": "Which word matches the vehicle used on water?"
        },
        "visual": "⛵",
        "answers": [
          {
            "id": "cat",
            "label": {
              "de": "Katze",
              "en": "Cat"
            }
          },
          {
            "id": "boat",
            "label": {
              "de": "Boot",
              "en": "Boat"
            }
          },
          {
            "id": "key",
            "label": {
              "de": "Schlüssel",
              "en": "Key"
            }
          }
        ],
        "correctAnswerId": "boat",
        "success": {
          "de": "Richtig! Das Wort heißt Boot.",
          "en": "Correct! The word is Boat."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu52",
        "prompt": {
          "de": "Welches Wort passt zu dem Fahrzeug, das durch den Himmel fliegt?",
          "en": "Which word matches the vehicle that flies through the sky?"
        },
        "visual": "✈️",
        "answers": [
          {
            "id": "airplane",
            "label": {
              "de": "Flugzeug",
              "en": "Airplane"
            }
          },
          {
            "id": "shoe",
            "label": {
              "de": "Schuh",
              "en": "Shoe"
            }
          },
          {
            "id": "mouse",
            "label": {
              "de": "Maus",
              "en": "Mouse"
            }
          }
        ],
        "correctAnswerId": "airplane",
        "success": {
          "de": "Richtig! Das Wort heißt Flugzeug.",
          "en": "Correct! The word is Airplane."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit F.",
          "en": "The English word begins with A."
        }
      },
      {
        "id": "wu53",
        "prompt": {
          "de": "Welches Wort passt zu dem hellen Himmelskörper am Tag?",
          "en": "Which word matches the bright object in the daytime sky?"
        },
        "visual": "☀️",
        "answers": [
          {
            "id": "hat",
            "label": {
              "de": "Hut",
              "en": "Hat"
            }
          },
          {
            "id": "rabbit",
            "label": {
              "de": "Hase",
              "en": "Rabbit"
            }
          },
          {
            "id": "sun",
            "label": {
              "de": "Sonne",
              "en": "Sun"
            }
          }
        ],
        "correctAnswerId": "sun",
        "success": {
          "de": "Richtig! Das Wort heißt Sonne.",
          "en": "Correct! The word is Sun."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu54",
        "prompt": {
          "de": "Welches Wort passt zu dem Himmelskörper, den wir nachts sehen?",
          "en": "Which word matches the object we see in the night sky?"
        },
        "visual": "🌙",
        "answers": [
          {
            "id": "fox",
            "label": {
              "de": "Fuchs",
              "en": "Fox"
            }
          },
          {
            "id": "moon",
            "label": {
              "de": "Mond",
              "en": "Moon"
            }
          },
          {
            "id": "hand",
            "label": {
              "de": "Hand",
              "en": "Hand"
            }
          }
        ],
        "correctAnswerId": "moon",
        "success": {
          "de": "Richtig! Das Wort heißt Mond.",
          "en": "Correct! The word is Moon."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit M.",
          "en": "The English word begins with M."
        }
      },
      {
        "id": "wu55",
        "prompt": {
          "de": "Welches Wort passt zu dem kleinen Lichtpunkt am Nachthimmel?",
          "en": "Which word matches the small point of light in the night sky?"
        },
        "visual": "⭐",
        "answers": [
          {
            "id": "star",
            "label": {
              "de": "Stern",
              "en": "Star"
            }
          },
          {
            "id": "heart",
            "label": {
              "de": "Herz",
              "en": "Heart"
            }
          },
          {
            "id": "bear",
            "label": {
              "de": "Bär",
              "en": "Bear"
            }
          }
        ],
        "correctAnswerId": "star",
        "success": {
          "de": "Richtig! Das Wort heißt Stern.",
          "en": "Correct! The word is Star."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu56",
        "prompt": {
          "de": "Welches Wort passt zu dem weißen Gebilde, aus dem Regen fallen kann?",
          "en": "Which word matches the white shape that can bring rain?"
        },
        "visual": "☁️",
        "answers": [
          {
            "id": "sock",
            "label": {
              "de": "Socke",
              "en": "Sock"
            }
          },
          {
            "id": "lion",
            "label": {
              "de": "Löwe",
              "en": "Lion"
            }
          },
          {
            "id": "cloud",
            "label": {
              "de": "Wolke",
              "en": "Cloud"
            }
          }
        ],
        "correctAnswerId": "cloud",
        "success": {
          "de": "Richtig! Das Wort heißt Wolke.",
          "en": "Correct! The word is Cloud."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit W.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu57",
        "prompt": {
          "de": "Welches Wort passt zu der großen Pflanze mit Stamm?",
          "en": "Which word matches the large plant with a trunk?"
        },
        "visual": "🌳",
        "answers": [
          {
            "id": "tiger",
            "label": {
              "de": "Tiger",
              "en": "Tiger"
            }
          },
          {
            "id": "tree",
            "label": {
              "de": "Baum",
              "en": "Tree"
            }
          },
          {
            "id": "jacket",
            "label": {
              "de": "Jacke",
              "en": "Jacket"
            }
          }
        ],
        "correctAnswerId": "tree",
        "success": {
          "de": "Richtig! Das Wort heißt Baum.",
          "en": "Correct! The word is Tree."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with T."
        }
      },
      {
        "id": "wu58",
        "prompt": {
          "de": "Welches Wort passt zu der Pflanze, die bunt blüht?",
          "en": "Which word matches the plant with a colorful bloom?"
        },
        "visual": "🌸",
        "answers": [
          {
            "id": "flower",
            "label": {
              "de": "Blume",
              "en": "Flower"
            }
          },
          {
            "id": "pants",
            "label": {
              "de": "Hose",
              "en": "Pants"
            }
          },
          {
            "id": "elephant",
            "label": {
              "de": "Elefant",
              "en": "Elephant"
            }
          }
        ],
        "correctAnswerId": "flower",
        "success": {
          "de": "Richtig! Das Wort heißt Blume.",
          "en": "Correct! The word is Flower."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with F."
        }
      },
      {
        "id": "wu59",
        "prompt": {
          "de": "Welches Wort passt zu den grünen Halmen auf dem Boden?",
          "en": "Which word matches the green blades covering the ground?"
        },
        "visual": "🌱",
        "answers": [
          {
            "id": "dress",
            "label": {
              "de": "Kleid",
              "en": "Dress"
            }
          },
          {
            "id": "giraffe",
            "label": {
              "de": "Giraffe",
              "en": "Giraffe"
            }
          },
          {
            "id": "grass",
            "label": {
              "de": "Gras",
              "en": "Grass"
            }
          }
        ],
        "correctAnswerId": "grass",
        "success": {
          "de": "Richtig! Das Wort heißt Gras.",
          "en": "Correct! The word is Grass."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit G.",
          "en": "The English word begins with G."
        }
      },
      {
        "id": "wu60",
        "prompt": {
          "de": "Welches Wort passt zu der sehr hohen Landschaftsform?",
          "en": "Which word matches the very high landform?"
        },
        "visual": "⛰️",
        "answers": [
          {
            "id": "zebra",
            "label": {
              "de": "Zebra",
              "en": "Zebra"
            }
          },
          {
            "id": "mountain",
            "label": {
              "de": "Berg",
              "en": "Mountain"
            }
          },
          {
            "id": "spoon",
            "label": {
              "de": "Löffel",
              "en": "Spoon"
            }
          }
        ],
        "correctAnswerId": "mountain",
        "success": {
          "de": "Richtig! Das Wort heißt Berg.",
          "en": "Correct! The word is Mountain."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with M."
        }
      },
      {
        "id": "wu61",
        "prompt": {
          "de": "Welches Wort passt zu dem Wasser, das durch die Landschaft fließt?",
          "en": "Which word matches the water that flows across the land?"
        },
        "visual": "🏞️",
        "answers": [
          {
            "id": "river",
            "label": {
              "de": "Fluss",
              "en": "River"
            }
          },
          {
            "id": "fork",
            "label": {
              "de": "Gabel",
              "en": "Fork"
            }
          },
          {
            "id": "monkey",
            "label": {
              "de": "Affe",
              "en": "Monkey"
            }
          }
        ],
        "correctAnswerId": "river",
        "success": {
          "de": "Richtig! Das Wort heißt Fluss.",
          "en": "Correct! The word is River."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit F.",
          "en": "The English word begins with R."
        }
      },
      {
        "id": "wu62",
        "prompt": {
          "de": "Welches Wort passt zu dem Gegenstand mit Seiten zum Lesen?",
          "en": "Which word matches the object with pages to read?"
        },
        "visual": "📘",
        "answers": [
          {
            "id": "plate",
            "label": {
              "de": "Teller",
              "en": "Plate"
            }
          },
          {
            "id": "cow",
            "label": {
              "de": "Kuh",
              "en": "Cow"
            }
          },
          {
            "id": "book",
            "label": {
              "de": "Buch",
              "en": "Book"
            }
          }
        ],
        "correctAnswerId": "book",
        "success": {
          "de": "Richtig! Das Wort heißt Buch.",
          "en": "Correct! The word is Book."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu63",
        "prompt": {
          "de": "Welches Wort passt zu dem Gegenstand zum Schreiben und Malen?",
          "en": "Which word matches the object used for writing and drawing?"
        },
        "visual": "✏️",
        "answers": [
          {
            "id": "pig",
            "label": {
              "de": "Schwein",
              "en": "Pig"
            }
          },
          {
            "id": "pencil",
            "label": {
              "de": "Stift",
              "en": "Pencil"
            }
          },
          {
            "id": "cup",
            "label": {
              "de": "Tasse",
              "en": "Cup"
            }
          }
        ],
        "correctAnswerId": "pencil",
        "success": {
          "de": "Richtig! Das Wort heißt Stift.",
          "en": "Correct! The word is Pencil."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with P."
        }
      },
      {
        "id": "wu64",
        "prompt": {
          "de": "Welches Wort passt zu dem runden Spielzeug, das rollt?",
          "en": "Which word matches the round toy that rolls?"
        },
        "visual": "⚽",
        "answers": [
          {
            "id": "ball",
            "label": {
              "de": "Ball",
              "en": "Ball"
            }
          },
          {
            "id": "bed",
            "label": {
              "de": "Bett",
              "en": "Bed"
            }
          },
          {
            "id": "horse",
            "label": {
              "de": "Pferd",
              "en": "Horse"
            }
          }
        ],
        "correctAnswerId": "ball",
        "success": {
          "de": "Richtig! Das Wort heißt Ball.",
          "en": "Correct! The word is Ball."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu65",
        "prompt": {
          "de": "Welches Wort passt zu der Spielfigur mit Gesicht und Kleidung?",
          "en": "Which word matches the toy figure with a face and clothes?"
        },
        "visual": "🪆",
        "answers": [
          {
            "id": "chair",
            "label": {
              "de": "Stuhl",
              "en": "Chair"
            }
          },
          {
            "id": "sheep",
            "label": {
              "de": "Schaf",
              "en": "Sheep"
            }
          },
          {
            "id": "doll",
            "label": {
              "de": "Puppe",
              "en": "Doll"
            }
          }
        ],
        "correctAnswerId": "doll",
        "success": {
          "de": "Richtig! Das Wort heißt Puppe.",
          "en": "Correct! The word is Doll."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit P.",
          "en": "The English word begins with D."
        }
      },
      {
        "id": "wu66",
        "prompt": {
          "de": "Welches Wort passt zu dem Instrument, auf das man schlägt?",
          "en": "Which word matches the instrument you hit to make a beat?"
        },
        "visual": "🥁",
        "answers": [
          {
            "id": "goat",
            "label": {
              "de": "Ziege",
              "en": "Goat"
            }
          },
          {
            "id": "drum",
            "label": {
              "de": "Trommel",
              "en": "Drum"
            }
          },
          {
            "id": "table",
            "label": {
              "de": "Tisch",
              "en": "Table"
            }
          }
        ],
        "correctAnswerId": "drum",
        "success": {
          "de": "Richtig! Das Wort heißt Trommel.",
          "en": "Correct! The word is Drum."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit T.",
          "en": "The English word begins with D."
        }
      },
      {
        "id": "wu67",
        "prompt": {
          "de": "Welches Wort passt zu dem Gegenstand, der die Zeit zeigt?",
          "en": "Which word matches the object that tells the time?"
        },
        "visual": "🕐",
        "answers": [
          {
            "id": "clock",
            "label": {
              "de": "Uhr",
              "en": "Clock"
            }
          },
          {
            "id": "door",
            "label": {
              "de": "Tür",
              "en": "Door"
            }
          },
          {
            "id": "chicken",
            "label": {
              "de": "Huhn",
              "en": "Chicken"
            }
          }
        ],
        "correctAnswerId": "clock",
        "success": {
          "de": "Richtig! Das Wort heißt Uhr.",
          "en": "Correct! The word is Clock."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit U.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu68",
        "prompt": {
          "de": "Welches Wort passt zu dem kleinen Gegenstand zum Öffnen einer Tür?",
          "en": "Which word matches the small object that opens a door?"
        },
        "visual": "🔑",
        "answers": [
          {
            "id": "window",
            "label": {
              "de": "Fenster",
              "en": "Window"
            }
          },
          {
            "id": "duck",
            "label": {
              "de": "Ente",
              "en": "Duck"
            }
          },
          {
            "id": "key",
            "label": {
              "de": "Schlüssel",
              "en": "Key"
            }
          }
        ],
        "correctAnswerId": "key",
        "success": {
          "de": "Richtig! Das Wort heißt Schlüssel.",
          "en": "Correct! The word is Key."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with K."
        }
      },
      {
        "id": "wu69",
        "prompt": {
          "de": "Welches Wort passt zu dem Kleidungsstück für den Fuß?",
          "en": "Which word matches the clothing worn on a foot?"
        },
        "visual": "👟",
        "answers": [
          {
            "id": "owl",
            "label": {
              "de": "Eule",
              "en": "Owl"
            }
          },
          {
            "id": "shoe",
            "label": {
              "de": "Schuh",
              "en": "Shoe"
            }
          },
          {
            "id": "soap",
            "label": {
              "de": "Seife",
              "en": "Soap"
            }
          }
        ],
        "correctAnswerId": "shoe",
        "success": {
          "de": "Richtig! Das Wort heißt Schuh.",
          "en": "Correct! The word is Shoe."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu70",
        "prompt": {
          "de": "Welches Wort passt zu dem Kleidungsstück für den Kopf?",
          "en": "Which word matches the clothing worn on the head?"
        },
        "visual": "🧢",
        "answers": [
          {
            "id": "hat",
            "label": {
              "de": "Hut",
              "en": "Hat"
            }
          },
          {
            "id": "toothbrush",
            "label": {
              "de": "Zahnbürste",
              "en": "Toothbrush"
            }
          },
          {
            "id": "fish",
            "label": {
              "de": "Fisch",
              "en": "Fish"
            }
          }
        ],
        "correctAnswerId": "hat",
        "success": {
          "de": "Richtig! Das Wort heißt Hut.",
          "en": "Correct! The word is Hat."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit H.",
          "en": "The English word begins with H."
        }
      },
      {
        "id": "wu71",
        "prompt": {
          "de": "Welches Wort passt zu dem Körperteil mit fünf Fingern?",
          "en": "Which word matches the body part with five fingers?"
        },
        "visual": "✋",
        "answers": [
          {
            "id": "comb",
            "label": {
              "de": "Kamm",
              "en": "Comb"
            }
          },
          {
            "id": "whale",
            "label": {
              "de": "Wal",
              "en": "Whale"
            }
          },
          {
            "id": "hand",
            "label": {
              "de": "Hand",
              "en": "Hand"
            }
          }
        ],
        "correctAnswerId": "hand",
        "success": {
          "de": "Richtig! Das Wort heißt Hand.",
          "en": "Correct! The word is Hand."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit H.",
          "en": "The English word begins with H."
        }
      },
      {
        "id": "wu72",
        "prompt": {
          "de": "Welches Wort passt zu dem Organ, das im Brustkorb schlägt?",
          "en": "Which word matches the organ that beats inside the chest?"
        },
        "visual": "❤️",
        "answers": [
          {
            "id": "dolphin",
            "label": {
              "de": "Delfin",
              "en": "Dolphin"
            }
          },
          {
            "id": "heart",
            "label": {
              "de": "Herz",
              "en": "Heart"
            }
          },
          {
            "id": "backpack",
            "label": {
              "de": "Rucksack",
              "en": "Backpack"
            }
          }
        ],
        "correctAnswerId": "heart",
        "success": {
          "de": "Richtig! Das Wort heißt Herz.",
          "en": "Correct! The word is Heart."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit H.",
          "en": "The English word begins with H."
        }
      },
      {
        "id": "wu73",
        "prompt": {
          "de": "Welches Wort passt zu dem weichen Kleidungsstück im Schuh?",
          "en": "Which word matches the soft clothing worn inside a shoe?"
        },
        "visual": "🧦",
        "answers": [
          {
            "id": "sock",
            "label": {
              "de": "Socke",
              "en": "Sock"
            }
          },
          {
            "id": "umbrella",
            "label": {
              "de": "Regenschirm",
              "en": "Umbrella"
            }
          },
          {
            "id": "shark",
            "label": {
              "de": "Hai",
              "en": "Shark"
            }
          }
        ],
        "correctAnswerId": "sock",
        "success": {
          "de": "Richtig! Das Wort heißt Socke.",
          "en": "Correct! The word is Sock."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu74",
        "prompt": {
          "de": "Welches Wort passt zu dem warmen Kleidungsstück für draußen?",
          "en": "Which word matches the warm clothing worn outside?"
        },
        "visual": "🧥",
        "answers": [
          {
            "id": "dog",
            "label": {
              "de": "Hund",
              "en": "Dog"
            }
          },
          {
            "id": "octopus",
            "label": {
              "de": "Oktopus",
              "en": "Octopus"
            }
          },
          {
            "id": "jacket",
            "label": {
              "de": "Jacke",
              "en": "Jacket"
            }
          }
        ],
        "correctAnswerId": "jacket",
        "success": {
          "de": "Richtig! Das Wort heißt Jacke.",
          "en": "Correct! The word is Jacket."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit J.",
          "en": "The English word begins with J."
        }
      },
      {
        "id": "wu75",
        "prompt": {
          "de": "Welches Wort passt zu dem Kleidungsstück mit zwei Beinen?",
          "en": "Which word matches the clothing with two legs?"
        },
        "visual": "👖",
        "answers": [
          {
            "id": "crab",
            "label": {
              "de": "Krabbe",
              "en": "Crab"
            }
          },
          {
            "id": "pants",
            "label": {
              "de": "Hose",
              "en": "Pants"
            }
          },
          {
            "id": "cat",
            "label": {
              "de": "Katze",
              "en": "Cat"
            }
          }
        ],
        "correctAnswerId": "pants",
        "success": {
          "de": "Richtig! Das Wort heißt Hose.",
          "en": "Correct! The word is Pants."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit H.",
          "en": "The English word begins with P."
        }
      },
      {
        "id": "wu76",
        "prompt": {
          "de": "Welches Wort passt zu dem einteiligen Kleidungsstück?",
          "en": "Which word matches the one-piece item of clothing?"
        },
        "visual": "👗",
        "answers": [
          {
            "id": "dress",
            "label": {
              "de": "Kleid",
              "en": "Dress"
            }
          },
          {
            "id": "mouse",
            "label": {
              "de": "Maus",
              "en": "Mouse"
            }
          },
          {
            "id": "bee",
            "label": {
              "de": "Biene",
              "en": "Bee"
            }
          }
        ],
        "correctAnswerId": "dress",
        "success": {
          "de": "Richtig! Das Wort heißt Kleid.",
          "en": "Correct! The word is Dress."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit K.",
          "en": "The English word begins with D."
        }
      },
      {
        "id": "wu77",
        "prompt": {
          "de": "Welches Wort passt zu dem Besteck für Suppe?",
          "en": "Which word matches the utensil used for soup?"
        },
        "visual": "🥄",
        "answers": [
          {
            "id": "rabbit",
            "label": {
              "de": "Hase",
              "en": "Rabbit"
            }
          },
          {
            "id": "butterfly",
            "label": {
              "de": "Schmetterling",
              "en": "Butterfly"
            }
          },
          {
            "id": "spoon",
            "label": {
              "de": "Löffel",
              "en": "Spoon"
            }
          }
        ],
        "correctAnswerId": "spoon",
        "success": {
          "de": "Richtig! Das Wort heißt Löffel.",
          "en": "Correct! The word is Spoon."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit L.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu78",
        "prompt": {
          "de": "Welches Wort passt zu dem Besteck mit Zinken?",
          "en": "Which word matches the utensil with prongs?"
        },
        "visual": "🍴",
        "answers": [
          {
            "id": "snail",
            "label": {
              "de": "Schnecke",
              "en": "Snail"
            }
          },
          {
            "id": "fork",
            "label": {
              "de": "Gabel",
              "en": "Fork"
            }
          },
          {
            "id": "fox",
            "label": {
              "de": "Fuchs",
              "en": "Fox"
            }
          }
        ],
        "correctAnswerId": "fork",
        "success": {
          "de": "Richtig! Das Wort heißt Gabel.",
          "en": "Correct! The word is Fork."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit G.",
          "en": "The English word begins with F."
        }
      },
      {
        "id": "wu79",
        "prompt": {
          "de": "Welches Wort passt zu dem flachen Geschirr für Essen?",
          "en": "Which word matches the flat dish used for food?"
        },
        "visual": "🍽️",
        "answers": [
          {
            "id": "plate",
            "label": {
              "de": "Teller",
              "en": "Plate"
            }
          },
          {
            "id": "bear",
            "label": {
              "de": "Bär",
              "en": "Bear"
            }
          },
          {
            "id": "frog",
            "label": {
              "de": "Frosch",
              "en": "Frog"
            }
          }
        ],
        "correctAnswerId": "plate",
        "success": {
          "de": "Richtig! Das Wort heißt Teller.",
          "en": "Correct! The word is Plate."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit T.",
          "en": "The English word begins with P."
        }
      },
      {
        "id": "wu80",
        "prompt": {
          "de": "Welches Wort passt zu dem Gefäß mit Henkel zum Trinken?",
          "en": "Which word matches the drinking container with a handle?"
        },
        "visual": "☕",
        "answers": [
          {
            "id": "lion",
            "label": {
              "de": "Löwe",
              "en": "Lion"
            }
          },
          {
            "id": "turtle",
            "label": {
              "de": "Schildkröte",
              "en": "Turtle"
            }
          },
          {
            "id": "cup",
            "label": {
              "de": "Tasse",
              "en": "Cup"
            }
          }
        ],
        "correctAnswerId": "cup",
        "success": {
          "de": "Richtig! Das Wort heißt Tasse.",
          "en": "Correct! The word is Cup."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit T.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu81",
        "prompt": {
          "de": "Welches Wort passt zu dem Möbelstück zum Schlafen?",
          "en": "Which word matches the furniture used for sleeping?"
        },
        "visual": "🛏️",
        "answers": [
          {
            "id": "apple",
            "label": {
              "de": "Apfel",
              "en": "Apple"
            }
          },
          {
            "id": "bed",
            "label": {
              "de": "Bett",
              "en": "Bed"
            }
          },
          {
            "id": "tiger",
            "label": {
              "de": "Tiger",
              "en": "Tiger"
            }
          }
        ],
        "correctAnswerId": "bed",
        "success": {
          "de": "Richtig! Das Wort heißt Bett.",
          "en": "Correct! The word is Bed."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit B.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu82",
        "prompt": {
          "de": "Welches Wort passt zu dem Möbelstück zum Sitzen?",
          "en": "Which word matches the furniture used for sitting?"
        },
        "visual": "🪑",
        "answers": [
          {
            "id": "chair",
            "label": {
              "de": "Stuhl",
              "en": "Chair"
            }
          },
          {
            "id": "elephant",
            "label": {
              "de": "Elefant",
              "en": "Elephant"
            }
          },
          {
            "id": "pear",
            "label": {
              "de": "Birne",
              "en": "Pear"
            }
          }
        ],
        "correctAnswerId": "chair",
        "success": {
          "de": "Richtig! Das Wort heißt Stuhl.",
          "en": "Correct! The word is Chair."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu83",
        "prompt": {
          "de": "Welches Wort passt zu dem Möbelstück, auf dem gegessen wird?",
          "en": "Which word matches the furniture people eat on?"
        },
        "visual": "🪑 ━━━ 🪑",
        "answers": [
          {
            "id": "giraffe",
            "label": {
              "de": "Giraffe",
              "en": "Giraffe"
            }
          },
          {
            "id": "banana",
            "label": {
              "de": "Banane",
              "en": "Banana"
            }
          },
          {
            "id": "table",
            "label": {
              "de": "Tisch",
              "en": "Table"
            }
          }
        ],
        "correctAnswerId": "table",
        "success": {
          "de": "Richtig! Das Wort heißt Tisch.",
          "en": "Correct! The word is Table."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit T.",
          "en": "The English word begins with T."
        }
      },
      {
        "id": "wu84",
        "prompt": {
          "de": "Welches Wort passt zu dem beweglichen Eingang zu einem Zimmer?",
          "en": "Which word matches the movable entrance to a room?"
        },
        "visual": "🚪",
        "answers": [
          {
            "id": "strawberry",
            "label": {
              "de": "Erdbeere",
              "en": "Strawberry"
            }
          },
          {
            "id": "door",
            "label": {
              "de": "Tür",
              "en": "Door"
            }
          },
          {
            "id": "zebra",
            "label": {
              "de": "Zebra",
              "en": "Zebra"
            }
          }
        ],
        "correctAnswerId": "door",
        "success": {
          "de": "Richtig! Das Wort heißt Tür.",
          "en": "Correct! The word is Door."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit T.",
          "en": "The English word begins with D."
        }
      },
      {
        "id": "wu85",
        "prompt": {
          "de": "Welches Wort passt zu der Öffnung, durch die Licht ins Zimmer kommt?",
          "en": "Which word matches the opening that lets light into a room?"
        },
        "visual": "🪟",
        "answers": [
          {
            "id": "window",
            "label": {
              "de": "Fenster",
              "en": "Window"
            }
          },
          {
            "id": "monkey",
            "label": {
              "de": "Affe",
              "en": "Monkey"
            }
          },
          {
            "id": "cherry",
            "label": {
              "de": "Kirsche",
              "en": "Cherry"
            }
          }
        ],
        "correctAnswerId": "window",
        "success": {
          "de": "Richtig! Das Wort heißt Fenster.",
          "en": "Correct! The word is Window."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit F.",
          "en": "The English word begins with W."
        }
      },
      {
        "id": "wu86",
        "prompt": {
          "de": "Welches Wort passt zu dem Gegenstand zum Händewaschen?",
          "en": "Which word matches the item used to wash hands?"
        },
        "visual": "🧼",
        "answers": [
          {
            "id": "cow",
            "label": {
              "de": "Kuh",
              "en": "Cow"
            }
          },
          {
            "id": "grape",
            "label": {
              "de": "Traube",
              "en": "Grape"
            }
          },
          {
            "id": "soap",
            "label": {
              "de": "Seife",
              "en": "Soap"
            }
          }
        ],
        "correctAnswerId": "soap",
        "success": {
          "de": "Richtig! Das Wort heißt Seife.",
          "en": "Correct! The word is Soap."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit S.",
          "en": "The English word begins with S."
        }
      },
      {
        "id": "wu87",
        "prompt": {
          "de": "Welches Wort passt zu dem Gegenstand zum Zähneputzen?",
          "en": "Which word matches the item used to brush teeth?"
        },
        "visual": "🪥",
        "answers": [
          {
            "id": "lemon",
            "label": {
              "de": "Zitrone",
              "en": "Lemon"
            }
          },
          {
            "id": "toothbrush",
            "label": {
              "de": "Zahnbürste",
              "en": "Toothbrush"
            }
          },
          {
            "id": "pig",
            "label": {
              "de": "Schwein",
              "en": "Pig"
            }
          }
        ],
        "correctAnswerId": "toothbrush",
        "success": {
          "de": "Richtig! Das Wort heißt Zahnbürste.",
          "en": "Correct! The word is Toothbrush."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit Z.",
          "en": "The English word begins with T."
        }
      },
      {
        "id": "wu88",
        "prompt": {
          "de": "Welches Wort passt zu dem Gegenstand zum Ordnen der Haare?",
          "en": "Which word matches the item used to tidy hair?"
        },
        "visual": "🪮",
        "answers": [
          {
            "id": "comb",
            "label": {
              "de": "Kamm",
              "en": "Comb"
            }
          },
          {
            "id": "horse",
            "label": {
              "de": "Pferd",
              "en": "Horse"
            }
          },
          {
            "id": "carrot",
            "label": {
              "de": "Karotte",
              "en": "Carrot"
            }
          }
        ],
        "correctAnswerId": "comb",
        "success": {
          "de": "Richtig! Das Wort heißt Kamm.",
          "en": "Correct! The word is Comb."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit K.",
          "en": "The English word begins with C."
        }
      },
      {
        "id": "wu89",
        "prompt": {
          "de": "Welches Wort passt zu der Tasche, die man auf dem Rücken trägt?",
          "en": "Which word matches the bag carried on the back?"
        },
        "visual": "🎒",
        "answers": [
          {
            "id": "sheep",
            "label": {
              "de": "Schaf",
              "en": "Sheep"
            }
          },
          {
            "id": "tomato",
            "label": {
              "de": "Tomate",
              "en": "Tomato"
            }
          },
          {
            "id": "backpack",
            "label": {
              "de": "Rucksack",
              "en": "Backpack"
            }
          }
        ],
        "correctAnswerId": "backpack",
        "success": {
          "de": "Richtig! Das Wort heißt Rucksack.",
          "en": "Correct! The word is Backpack."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit R.",
          "en": "The English word begins with B."
        }
      },
      {
        "id": "wu90",
        "prompt": {
          "de": "Welches Wort passt zu dem Gegenstand, der vor Regen schützt?",
          "en": "Which word matches the item that protects you from rain?"
        },
        "visual": "☂️",
        "answers": [
          {
            "id": "bread",
            "label": {
              "de": "Brot",
              "en": "Bread"
            }
          },
          {
            "id": "umbrella",
            "label": {
              "de": "Regenschirm",
              "en": "Umbrella"
            }
          },
          {
            "id": "goat",
            "label": {
              "de": "Ziege",
              "en": "Goat"
            }
          }
        ],
        "correctAnswerId": "umbrella",
        "success": {
          "de": "Richtig! Das Wort heißt Regenschirm.",
          "en": "Correct! The word is Umbrella."
        },
        "hint": {
          "de": "Das deutsche Wort beginnt mit R.",
          "en": "The English word begins with U."
        }
      }
    ]
  }
];

export const categoryById = (id: LearningCategory['id']) => {
  const category = categories.find((item) => item.id === id);
  if (!category) throw new Error(`Unknown learning category: ${id}`);
  return category;
};
