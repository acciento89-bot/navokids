# NavoKids – Die Lerninseln

Eine werbefreie, zweisprachige Lernspiel-App für Kinder von etwa 3 bis 7 Jahren. Eine gemeinsame React-Native-Codebasis bedient iOS, iPadOS und Android.

## Enthalten im ersten spielbaren Stand

- fünf Lerninseln: Zahlen, Farben, Tiere, Buchstaben und Wörter
- jeweils zwei kostenlose Stufen mit insgesamt 30 gesprochenen Aufgaben
- automatische deutsche und englische Sprachausgabe
- Wiederholen-Schaltfläche für jede Aufgabe
- gesprochenes Erfolgsfeedback und gesprochene Hilfestellungen
- lokaler Lernfortschritt ohne Kinderkonto
- geschützter Elternbereich mit Fortschrittsübersicht
- bis zu vier getrennte Kinderprofile mit Altersstufe
- animierte Lernreise als Inselkarte
- Premium-Stufen hinter einer Elternschranke
- native Apple- und Google-Kaufanbindung mit Wiederherstellung
- responsives, kindgerechtes Design für Smartphones und Tablets

## Lokal starten

Voraussetzungen: Node.js 22.13 oder neuer sowie ein iOS-/Android-Simulator oder Testgerät.

```bash
npm install
npm run start
```

Für die reine Oberfläche kann Expo gestartet werden. Die Kaufanbindung enthält nativen Code und benötigt deshalb einen Development Build:

```bash
npx eas build --profile development --platform ios
npx eas build --profile development --platform android
```

## Store-Produkte

Die App erwartet folgende Produktkennungen in App Store Connect und Google Play Console:

- `com.kamilunavo.navokids.monthly`
- `com.kamilunavo.navokids.yearly`
- `com.kamilunavo.navokids.lifetime`

Ein erfolgreicher oder wiederhergestellter Store-Kauf schaltet Premium für alle lokalen Kinderprofile frei. Abgebrochene und ausstehende Käufe entsperren keine Inhalte.

## Datenschutz-Grundsatz

Die App fordert keine Kamera-, Mikrofon-, Standort- oder Werbeberechtigungen an. Lernfortschritt bleibt im aktuellen Stand ausschließlich lokal auf dem Gerät.
