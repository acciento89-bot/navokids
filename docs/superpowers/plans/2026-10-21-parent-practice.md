# Parent practice sessions Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans inline. Root explicitly forbids children and owns all project executions/compilers/devices.

**Goal:** Parent-curated reusable offline practice with safe question resume and truthful per-profile recap.
**Architecture:** Add a pure catalog-driven practice state machine and isolated versioned per-profile repository; connect gated parent planner and child runner without changing old stage progression or purchase rules. Guard legacy hydration/write bytes before new integration.
**Tech Stack:** Existing Expo57/RN0.86/React19/TypeScript5.9/AsyncStorage; root-managed native safe-area support if needed.
**Spec:** ../specs/2026-10-21-parent-practice-design.md

## Global Constraints
- Canonical exact baseline ffeb4fb6faa31180b67e36bc1a8e594761c5adc1; versions/products/store and workflows frozen.
- No worker Node/npm/runtime/test/build/UI/devices; root serial commands only, RED before production and GREEN before UI.
- Free stages1–2; premium beyond2 and original sequential unlock required; practice never changes original progress/stars.
- Profile age/identity/session/question/revision carried explicitly; no child route to ungated planner/history/purchases.
- Every original local state byte and corrupt/future archive must be preserved; fail closed with explicit retry.
- DE/EN existing speech/content only; recap observed practice facts, no mastery/clinical claims.

## Review Focus
- A failed or corrupt legacy read must not become an empty profile autosave; external corruption after load must also block write.
- Old answer callback/replayed attempt cannot advance another session/question/profile; failed durable save keeps current question.
- Premium revocation or profile age change blocks unavailable content without erasing history; saved plan cannot bypass sequence.
- Resize/keyboard/modal safe areas must not unmount current runner; tiny parent gate must remain operable without weaker challenge.
- Retry after unknown save receipt confirms exact committed bytes, never guesses success or duplicates a practice event.

### Task1 — Pure tests and root observed RED
Files create tests/practice-core.test.mjs, tests/practice-repository.test.mjs, tests/legacy-state.test.mjs; test helper reads actual src/data/learningContent.ts category JSON, no transpiler/runtime/platform mocking.
Interfaces src/practice/core.ts exports createPracticePlan(profile,input,catalog,at,premium), startPracticeSession(profile,plan,catalog,at,premium,id), submitPracticeAnswer(session,profile,catalog,command,at,premium), discardPracticeSession(session,profileId,at), practiceRecap(sessions,expectedProfileId), encodePracticeArchive/decodePracticeArchive. New PracticeRepository(storage,profileId).load()/save(next,expectedRevision). New readLegacyState(storage)/writeLegacyState(storage,state) preserve old primary/legacy data.
- [ ] Write actual catalog age/sequence/entitlement/mixed ordering/no-old-progress tests, correct/wrong/last-attempt retry/stale callbacks, complete recap and profile isolation.
- [ ] Write strict archive/profile/future/duplicate/bound cases; actual temp file atomic replacement/cold load/failure/external corrupt/conflict tests.
- [ ] Write legacy malformed primary and legacy preservation tests, external replacement after prior successful read, successful original fields roundtrip.
- [ ] Request root `node --experimental-strip-types --test tests/*.test.mjs`, cwd exact isolated checkout; expected missing future practice modules RED. Freeze tests until returned result.

### Task2 — Pure domain/repository/legacy guard after actual RED
- [ ] Implement exact interfaces and types in src/practice/core.ts, repository.ts, legacyStateGuard.ts, preserving source dependencies and content/progress/purchase bodies.
- [ ] Validate profile identity/age, safe selections, ordered catalog IDs and durable event state; all complete/recap facts derived from completed answer records.
- [ ] Serialize archive writes per profile, reject stale revisions/existing corrupt data, encode immutable copy before await, read-back exact bytes; test-only disk adapter uses write+rename to prove rollback.
- [ ] Root repeats full Node suite GREEN; no UI before observed pass.

### Task3 — Native integration and existing checks
Files new src/screens/PracticePlanScreen.tsx, PracticeSessionScreen.tsx, src/practice/copy.ts; controlled modifications App.tsx/types.ts/ParentsScreen.tsx/WorldScreen.tsx/ParentGate.tsx. Existing GameScreen/progress/learningContent/speech/monetization unchanged unless an evidenced necessity is reported first.
- [ ] Guard old hydration/autosave with tested legacy functions and explicit load/write retry without initial-state overwrite.
- [ ] Load per-profile repository with stale-result guards, save-before-publish question transitions and retained input on failure.
- [ ] Gated planner1–4 choices/current availability; reusable plans, parent-start, child-only active resume; retained explicit history/capacity error.
- [ ] Native runner existing packaged DE/EN question prompts/answers/clock/hints; mixed-category factual recap, no old stars.
- [ ] Live safe area/window width, scroll/wrap/keyboard controls and modal gate layout; preserve challenge logic.
- [ ] Freeze source; root dependency/lock update if needed, full test/typecheck/content:check/progress:check/navigation:check/islands:check/store:check and actual native bundle/build queue.

### Task4 — Review/handoff/native acceptance
- [ ] Root fresh whole-branch read-only review; test-first fixes only after observed regression RED.
- [ ] Root native ordinary iPhone/Android/Duo flow: gate, build saved mix, practice wrong+right, cold resume, profile switch stale callback, old progress unchanged, history, premium unavailable (no transactions), keyboard/resize/DEEN voice.
- [ ] B/NavoKidsUpdate source/evidence ledger, truthful DEEN metadata, exact native QA pending/pass distinctions.
- [ ] Commit scoped verified changes locally, no push/version/store; exact files/commits/hash receipts in handoff.
