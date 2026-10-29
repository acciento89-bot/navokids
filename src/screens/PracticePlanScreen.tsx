import { Text, TextInput } from '../product-type';
import { useMemo, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, Pressable, ScrollView, StyleSheet, View } from 'react-native';
import { categories } from '../data/learningContent';
import { isStageNextInSequence } from '../data/progress';
import { FREE_STAGES_PER_CATEGORY, STAGES_PER_CATEGORY } from '../config/learning';
import { t } from '../i18n';
import type { ChildProfile, Language } from '../types';
import { createPracticePlan, practiceRecap } from '../practice/core';
import type { PracticeArchive, PracticePlan, PracticeSession, Selection } from '../practice/core';
import { practiceCopy } from '../practice/copy';
import { colors } from '../theme';

type Props = { profile: ChildProfile; language: Language; premium: boolean; archive: PracticeArchive | null; error: string | null; busy: boolean; onRetry: () => void; onBack: () => void; onSave: (input: { id: string; title: string; selections: Selection[] }) => Promise<boolean>; onStart: (plan: PracticePlan) => Promise<void>; onContinue: (session: PracticeSession) => void; onDiscard: (session: PracticeSession) => Promise<void> };
const newID = () => `plan-${Date.now().toString(36)}-${Math.random().toString(36).slice(2)}`;
export function PracticePlanScreen({ profile, language, premium, archive, error, busy, onRetry, onBack, onSave, onStart, onContinue, onDiscard }: Props) {
  const copy = practiceCopy[language];
  const [id, setID] = useState(newID), [name, setName] = useState(''), [selections, setSelections] = useState<Selection[]>([]), [saved, setSaved] = useState(false), [confirmDiscard, setConfirmDiscard] = useState(false);
  const valid = useMemo(() => { try { createPracticePlan(profile, { id, title: name, selections }, categories, new Date().toISOString(), premium); return true; } catch { return false; } }, [profile, id, name, selections, premium]);
  const active = archive?.sessions.find((session) => !session.completedAt && !session.discardedAt);
  const recap = archive ? practiceRecap(archive.sessions, profile.id) : null;
  const button = (label: string, handler: () => void, disabled = false, testID?: string) => <Pressable testID={testID} accessibilityRole="button" accessibilityState={{ disabled: disabled || busy }} disabled={disabled || busy} onPress={handler} style={[s.button, (disabled || busy) && s.disabled]}><Text style={s.buttonText}>{label}</Text></Pressable>;
  const change = (items: Selection[]) => { setSelections(items); setSaved(false); };
  return <KeyboardAvoidingView style={s.flex} behavior={Platform.OS === 'ios' ? 'padding' : undefined}><ScrollView contentContainerStyle={s.content} keyboardShouldPersistTaps="handled" keyboardDismissMode="on-drag">
    {button(copy.back, onBack, false, 'practice-planner-back')}<Text style={s.title}>{copy.title}</Text><Text style={s.subtitle}>{profile.avatar} {profile.nickname}</Text><Text style={s.body}>{copy.intro}</Text>
    {error && <View style={s.warning}><Text accessibilityRole="alert" style={s.error}>{error}</Text>{button(copy.retry, onRetry)}</View>}
    {!archive && !error && <Text style={s.body}>{copy.loading}</Text>}
    {active && <View style={s.card}><Text style={s.heading}>{copy.active}: {active.planTitle}</Text><Text style={s.body}>{copy.activeHelp}</Text>{button(copy.continue, () => onContinue(active), false, 'practice-parent-continue')}{button(copy.abandon, () => setConfirmDiscard(true))}{confirmDiscard && <><Text style={s.body}>{copy.confirmAbandon}</Text>{button(copy.yesAbandon, () => { void onDiscard(active).then(() => setConfirmDiscard(false)); }, false, 'practice-discard-confirm')}{button(copy.cancel, () => setConfirmDiscard(false))}</>}</View>}
    {button(copy.newPlan, () => { setID(newID()); setName(''); change([]); }, false, 'practice-new-plan')}
    <View style={s.card}><Text style={s.heading}>{copy.name}</Text><TextInput testID="practice-plan-name" accessibilityLabel={copy.name} value={name} onChangeText={(value) => { setName(value); setSaved(false); }} editable={!busy} maxLength={80} style={s.input} onSubmitEditing={Keyboard.dismiss} returnKeyType="done" /><Text style={s.heading}>{copy.choose}</Text><Text style={s.body}>{selections.length}/4 · {selections.length * 3} {language === 'de' ? 'Aufgaben' : 'activities'}</Text>
      {categories.map((category) => <View key={category.id} style={s.category}><Text style={s.heading}>{category.icon} {t(category.title, language)}</Text><View style={s.row}>{Array.from({ length: STAGES_PER_CATEGORY }, (_, index) => index + 1).filter((stage) => isStageNextInSequence(profile.progress[category.id], stage)).map((stage) => {
        const selected = selections.some((choice) => choice.categoryId === category.id && choice.stage === stage), locked = stage > FREE_STAGES_PER_CATEGORY && !premium;
        return <Pressable key={stage} testID={`practice-select-${category.id}-${stage}`} accessibilityRole="button" accessibilityState={{ selected, disabled: busy || locked || (!selected && selections.length >= 4) }} disabled={busy || locked || (!selected && selections.length >= 4)} onPress={() => change(selected ? selections.filter((choice) => !(choice.categoryId === category.id && choice.stage === stage)) : [...selections, { categoryId: category.id, stage }])} style={[s.chip, selected && s.selected, locked && s.disabled]}><Text style={s.buttonText}>{selected ? '✓ ' : ''}{copy.stage} {stage}{locked ? ` · ${copy.locked}` : ''}</Text></Pressable>;
      })}</View></View>)}
      {!!(name || selections.length) && !valid && <Text accessibilityRole="alert" style={s.error}>{copy.invalid}</Text>}
      {saved && <Text testID="practice-plan-saved" style={s.body}>{copy.saved}</Text>}
      {button(busy ? copy.saving : copy.save, () => { void onSave({ id, title: name, selections }).then((ok) => { if (ok) { setSaved(true); Keyboard.dismiss(); } }); }, !valid || !archive || !!error, 'practice-save-plan')}
    </View>
    <Text style={s.title}>{copy.plans}</Text>{archive && !archive.plans.length && <Text style={s.body}>{copy.empty}</Text>}
    {archive?.plans.map((plan) => <View key={plan.id} style={s.card}><Text style={s.heading}>{plan.title}</Text><Text style={s.body}>{plan.selections.map((choice) => `${t(categories.find((item) => item.id === choice.categoryId)!.title, language)} ${copy.stage} ${choice.stage}`).join(' · ')}</Text><View style={s.row}>{button(copy.edit, () => { setID(plan.id); setName(plan.title); change(plan.selections.map((item) => ({ ...item }))); })}{button(copy.start, () => { void onStart(plan); }, !!active || !!error, `practice-start-${plan.id}`)}</View></View>)}
    <Text style={s.title}>{copy.history}</Text><Text style={s.body}>{copy.recap}</Text>
    {recap && <View style={s.card}><Text style={s.body}>{copy.completedRounds}: {recap.completedSessions}</Text><Text style={s.body}>{copy.practiced}: {recap.completedQuestions}</Text><Text style={s.body}>{copy.firstTry}: {recap.firstTry}</Text><Text style={s.body}>{copy.helped}: {recap.withHelp}</Text><Text style={s.heading}>{copy.dates}</Text>{recap.days.length ? recap.days.map((day) => <Text key={day.date} style={s.body}>{day.date} · {day.completedQuestions}</Text>) : <Text style={s.body}>{copy.noHistory}</Text>}</View>}
    {archive?.sessions.map((session) => <View key={session.id} style={s.card}><Text style={s.heading}>{session.planTitle}</Text><Text style={s.body}>{session.startedAt.slice(0, 10)} · {session.answers.filter((answer) => answer.completedAt).length}/{session.questions.length} · {session.completedAt ? copy.complete : session.discardedAt ? copy.abandon : copy.active}</Text></View>)}
    <Text style={s.body}>{copy.disclaimer}</Text>
  </ScrollView></KeyboardAvoidingView>;
}
const s = StyleSheet.create({ flex: { flex: 1 }, content: { padding: 20, paddingBottom: 40, gap: 16 }, title: { color: colors.ink, fontSize: 27, fontWeight: '900' }, subtitle: { color: colors.ink, fontSize: 22, fontWeight: '700' }, heading: { color: colors.ink, fontSize: 18, fontWeight: '800', flexShrink: 1 }, body: { color: colors.muted, fontSize: 15, lineHeight: 22, flexShrink: 1 }, card: { backgroundColor: colors.paper, borderWidth: 1, borderColor: colors.line, borderRadius: 22, padding: 16, gap: 12 }, category: { gap: 10, paddingVertical: 10, borderTopWidth: 1, borderTopColor: colors.line }, row: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 }, button: { minHeight: 48, borderWidth: 1, borderColor: colors.teal, padding: 12, borderRadius: 15, justifyContent: 'center', maxWidth: '100%' }, buttonText: { color: colors.tealDark, fontSize: 15, fontWeight: '800', flexShrink: 1 }, chip: { minHeight: 48, padding: 12, borderRadius: 14, borderWidth: 1, borderColor: colors.line, justifyContent: 'center', maxWidth: '100%' }, selected: { backgroundColor: '#DFF5E7', borderColor: colors.teal }, input: { minHeight: 50, borderWidth: 1, borderColor: colors.teal, padding: 12, borderRadius: 12, color: colors.ink, fontSize: 18 }, disabled: { opacity: 0.45 }, warning: { backgroundColor: '#FFF1D9', padding: 14, borderRadius: 14, gap: 10 }, error: { color: '#9A3028', fontSize: 15, lineHeight: 22 } });
