# NavoKids – Die Lerninseln

Eine werbefreie, zweisprachige Lernspiel-App für Kinder von etwa 3 bis 7 Jahren. Eine gemeinsame React-Native-Codebasis bedient iOS, iPadOS und Android.

## Enthalten in Version 0.3.0

- fünf Lerninseln: Zahlen, Farben, Tiere, Buchstaben und Wörter
- 30 Stufen je Insel – 150 Missionen mit 450 gesprochenen Aufgabenrunden
- die ersten zwei Stufen jeder Insel sind kostenlos
- altersgerechte Varianten für 3–4 und 5–7 Jahre
- kindlich abgestimmte deutsche und englische Navi-Sprachausgabe mit bevorzugten Enhanced-Stimmen
- Wiederholen-Schaltfläche für jede Aufgabe
- gesprochenes Erfolgsfeedback und gesprochene Hilfestellungen
- lokaler Lernfortschritt ohne Kinderkonto
- geschützter Elternbereich mit Fortschrittsübersicht und wechselnden Lernempfehlungen
- bis zu vier getrennte Kinderprofile mit Altersstufe
- illustrierte Abenteuerkarte mit fünf verbundenen Lerninseln
- Premium-Stufen hinter einer Elternschranke
- native Apple- und Google-Kaufanbindung mit Wiederherstellung
- responsives, kindgerechtes Design für Smartphones und Tablets

## Lokal starten

Voraussetzungen: Node.js 22.13 oder neuer sowie Xcode oder Android Studio mit einem Simulator beziehungsweise Testgerät.

```bash
npm ci
npm run ios
npm run android
```

Die Kaufanbindung enthält nativen Code und funktioniert nicht in Expo Go. Ein installierbarer Android-UI-Testbuild wird nach Änderungen auf `main` automatisch vom Workflow **Android Internal APK** erstellt und 14 Tage als GitHub-Artefakt bereitgestellt.

Store-Builds werden nach der ersten Expo-/EAS-Projektverknüpfung manuell über den Workflow **EAS Store Builds** gestartet:

```bash
npx eas build --profile preview --platform android
npx eas build --profile production --platform all
```

## Store-Produkte

Die App erwartet folgende Produktkennungen in App Store Connect und Google Play Console:

- `com.kamilunavo.navokids.monthly`
- `com.kamilunavo.navokids.yearly`
- `com.kamilunavo.navokids.lifetime`

Ein erfolgreicher oder wiederhergestellter Store-Kauf schaltet Premium für alle lokalen Kinderprofile frei. Der aktive Store-Anspruch wird bei jedem App-Start erneut abgeglichen. Abgebrochene, ausstehende oder abgelaufene Käufe entsperren keine Inhalte.

## Qualitätsprüfungen

```bash
npm run typecheck
npm run content:check
npm run store:check
```

Der Store-Check prüft Buildnummern, Paketkennungen, Produktkennungen, EAS-Profile und die Zeichenlimits der zweisprachigen Store-Texte.

## Datenschutz-Grundsatz

Die App fordert keine Kamera-, Mikrofon-, Standort- oder Werbeberechtigungen an. Lernfortschritt bleibt im aktuellen Stand ausschließlich lokal auf dem Gerät.
