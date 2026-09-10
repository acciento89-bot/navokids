# NavoKids 0.4.0

NavoKids now has eight illustrated islands and 240 stages per age track. The existing five-island illustration is followed by a matching three-island landscape: Shapes, Nature & Weather, and Clock & Time. Each new category has its own island, label, and progress meter; no extra button is squeezed into the Words island.

## Learning content

- The unique-shape question is exactly “Welche Form gibt es nur einmal?” / “Which shape appears only once?”. The old lead-in that named the repeated and unique shapes is removed. Pattern prompts also stop stating the answer.
- Nature & Weather adds 30 stages per age track: weather, seasons, plants, landscapes, and familiar natural objects. The younger track uses picture choices; the older track adds classification and written choices.
- Clock & Time adds 30 stages per age track. Younger children practice full hours, daily sequences, and earlier/later full hours. Older children progress through full hours, half-hours, quarters, and five-minute increments.
- Analog clocks are native components, not emoji or generated educational diagrams. The hour hand advances continuously with minutes. German “halb zwei” and English “half past one” both correspond to 1:30.
- 1,440 bilingual question definitions cover both age tracks. Each track has 720 activities.

## Existing behavior

Completed stages, profiles, and Premium entitlement are preserved. Both new islands start at stage one; two free stages per island and sequential unlocking remain. Next-stage navigation, final-stage behavior, localized English cards, and restoration of the stage-list scroll position remain covered by tests. The game now scrolls on small displays; advancing returns the next question to the top and completing a stage mounts a fresh completion view.

## Voice integrity

Only bundled Marin recordings may play. No device voice fallback is used. `naviVoiceIndex.json` records a hash of language, voice, model, delivery instructions, and text together with the audio-file hash. Changed prompts invalidate their old recordings automatically. All required audio must match both text and file hashes before release. The initial index was generated from the unchanged, previously validated 0.3.2 text and recordings before any content edits.

## Validation

Run `npm run typecheck`, `npm run content:check`, `npm run islands:check`, `npm run progress:check`, `npm run navigation:check`, `node scripts/validate-voice-pack.cjs`, `npm run store:check`, and `npx expo export --platform all`.

The component tests exercise both platform branches and both languages, including clock choice tasks, time wraparound, shape answers, eight island buttons, old-profile migration, stage completion, and scroll restoration. They do not replace a physical iOS/Android device test. Browser preview of the local app was blocked by the browser URL policy; no visual browser pass is claimed.

## Illustration provenance

`assets/adventure-map-extension-v2.png` was generated with the built-in Imagegen tool using `assets/adventure-map-v1.jpg` as a style and continuity reference. The existing five-island asset is preserved. The extension is wired into `src/screens/WorldScreen.tsx` as the lower panel of the same scrolling map.

Prompt: Create only a new lower continuation panel matching the original colorful 3D floating-island adventure illustration, portrait 1024×1792. Exactly three large separate islands, connected by curved wooden bridges: shapes and repeating geometric toys at upper right; a garden, seedlings, tree, sun, raincloud and rainbow at middle left; a decorative learning clock, hourglass, sun and moon at lower right. Leave clear lower grassy ledges for localized labels. Soft cloud entrance from upper left and waterfall/cloud ending. No UI labels, extra foreground islands, books, alphabet blocks, animals, watermarks, or borders. Preserve the original map's style, foliage, lighting and materials.

## Release

Version 0.4.0 uses the existing EAS project, app identifiers, remote build-number incrementing, and signing credentials. Store availability must be reported separately from EAS builds, TestFlight upload, and Google Play internal testing.
