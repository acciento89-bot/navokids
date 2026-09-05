# NavoKids Store Readiness

## App identity

- App name: NavoKids – Lerninseln
- Version: 0.2.0
- iOS bundle ID: `com.kamilunavo.navokids`
- Android application ID: `com.kamilunavo.navokids`
- iOS build number: 1
- Android version code: 1
- Primary category: Education
- Age group: 3–7, parent-guided

## Purchases

- Monthly: `com.kamilunavo.navokids.monthly`
- Yearly: `com.kamilunavo.navokids.yearly`
- Lifetime: `com.kamilunavo.navokids.lifetime`
- Stages 1–2 of every island are free.
- Stages 3–6 require Premium.
- Purchases are only reachable through the parental gate.

## Privacy declaration

- No advertising
- No analytics SDK
- No account required
- No camera, microphone, contacts, photos, location, or advertising identifier
- Nickname, age group, avatar, and progress remain locally on the device
- Store purchase data is handled by Apple App Store or Google Play

## Required external pages before submission

- Support: `https://kamilunavo.com/navokids/support`
- Privacy: `https://kamilunavo.com/navokids/datenschutz`
- Terms: `https://kamilunavo.com/navokids/nutzungsbedingungen`

The URLs above must be published and checked before either store submission.

## Remaining account-side work

1. Initialize/link the Expo project and store its generated EAS project ID in app config. The first connected run must be interactive.
2. Create all three products in App Store Connect and Google Play Console.
3. Create the first iOS and Android production builds interactively so signing credentials exist.
4. Add `EXPO_TOKEN` to GitHub Actions for later non-interactive builds.
5. Add App Store Connect and Google Play service credentials for automated submission.
6. Add server-side receipt validation before public production release.
