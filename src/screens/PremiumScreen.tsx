import { useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Purchase, useIAP } from 'expo-iap';
import { allProductIds, productIds, subscriptionProductIds } from '../config/products';
import { colors, shadows } from '../theme';
import { Language } from '../types';

type PlanId = keyof typeof productIds;

export function PremiumScreen({ language, onBack, onUnlocked }: { language: Language; onBack: () => void; onUnlocked: () => void }) {
  const [message, setMessage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const handledTransactions = useRef(new Set<string>());
  const [completedPurchase, setCompletedPurchase] = useState<Purchase | null>(null);
  const { connected, products, subscriptions, availablePurchases, fetchProducts, requestPurchase, finishTransaction, restorePurchases, getAvailablePurchases } = useIAP({
    onPurchaseSuccess: setCompletedPurchase,
    onPurchaseError: (error) => { setProcessing(false); setMessage(error.message); },
    onError: (error) => { setProcessing(false); setMessage(error.message); },
  });

  useEffect(() => {
    if (!connected) return;
    Promise.all([
      fetchProducts({ skus: [productIds.lifetime], type: 'in-app' }),
      fetchProducts({ skus: subscriptionProductIds, type: 'subs' }),
    ]).catch((error: Error) => setMessage(error.message));
  }, [connected, fetchProducts]);

  useEffect(() => {
    if (!completedPurchase || handledTransactions.current.has(completedPurchase.id)) return;
    handledTransactions.current.add(completedPurchase.id);
    const complete = async () => {
      if (!allProductIds.includes(completedPurchase.productId as typeof allProductIds[number])) return;
      await finishTransaction({ purchase: completedPurchase, isConsumable: false });
      setProcessing(false);
      onUnlocked();
    };
    complete().catch((error: Error) => { setProcessing(false); setMessage(error.message); });
  }, [completedPurchase, finishTransaction, onUnlocked]);

  useEffect(() => {
    if (availablePurchases.some((purchase) => allProductIds.includes(purchase.productId as typeof allProductIds[number]))) onUnlocked();
  }, [availablePurchases, onUnlocked]);

  const storeProducts = useMemo(() => [...products, ...subscriptions], [products, subscriptions]);
  const displayPrice = (id: string, fallback: string) => storeProducts.find((product) => product.id === id)?.displayPrice ?? fallback;

  const buy = async (plan: PlanId) => {
    const sku = productIds[plan];
    setMessage(null);
    setProcessing(true);
    try {
      if (plan === 'lifetime') {
        await requestPurchase({ type: 'in-app', request: { apple: { sku }, google: { skus: [sku] } } });
      } else {
        const subscription = subscriptions.find((item) => item.id === sku);
        const offerToken = subscription?.platform === 'android' ? subscription.subscriptionOffers[0]?.offerTokenAndroid : undefined;
        await requestPurchase({
          type: 'subs',
          request: {
            apple: { sku },
            google: { skus: [sku], subscriptionOffers: offerToken ? [{ sku, offerToken }] : undefined },
          },
        });
      }
    } catch (error) {
      setProcessing(false);
      setMessage(error instanceof Error ? error.message : (language === 'de' ? 'Der Kauf konnte nicht gestartet werden.' : 'The purchase could not be started.'));
    }
  };

  const restore = async () => {
    setProcessing(true); setMessage(null);
    try {
      await restorePurchases();
      await getAvailablePurchases();
      setProcessing(false);
      setMessage(language === 'de' ? 'Käufe wurden geprüft.' : 'Purchases were checked.');
    } catch (error) {
      setProcessing(false);
      setMessage(error instanceof Error ? error.message : (language === 'de' ? 'Wiederherstellung fehlgeschlagen.' : 'Restore failed.'));
    }
  };

  const plans: { id: PlanId; title: string; subtitle: string; price: string; recommended?: boolean }[] = [
    { id: 'yearly', title: language === 'de' ? 'Jahresabo' : 'Yearly', subtitle: language === 'de' ? 'Bestes Preis-Leistungs-Verhältnis' : 'Best overall value', price: displayPrice(productIds.yearly, '29,99 €'), recommended: true },
    { id: 'monthly', title: language === 'de' ? 'Monatlich' : 'Monthly', subtitle: language === 'de' ? 'Jederzeit kündbar' : 'Cancel anytime', price: displayPrice(productIds.monthly, '4,99 €') },
    { id: 'lifetime', title: language === 'de' ? 'Dauerhaft' : 'Lifetime', subtitle: language === 'de' ? 'Einmal zahlen, dauerhaft lernen' : 'Pay once, learn forever', price: displayPrice(productIds.lifetime, '59,99 €') },
  ];

  return (
    <ScrollView contentContainerStyle={styles.content}>
      <Pressable onPress={onBack} style={styles.back}><Text style={styles.backText}>‹</Text></Pressable>
      <View style={styles.crown}><Text style={styles.crownText}>★</Text></View>
      <Text style={styles.eyebrow}>NAVOKIDS PREMIUM</Text>
      <Text style={styles.title}>{language === 'de' ? 'Alle Lerninseln freischalten' : 'Unlock every learning island'}</Text>
      <Text style={styles.subtitle}>{language === 'de' ? 'Voller Lernspaß für alle Kinderprofile – komplett werbefrei.' : 'Full learning fun for every child profile — completely ad-free.'}</Text>
      <View style={styles.benefits}>
        {[
          language === 'de' ? 'Alle Premium-Stufen' : 'All premium stages',
          language === 'de' ? 'Deutsch und Englisch' : 'German and English',
          language === 'de' ? 'Bis zu vier Kinderprofile' : 'Up to four child profiles',
          language === 'de' ? 'Elternberichte und Empfehlungen' : 'Parent reports and recommendations',
        ].map((benefit) => <View key={benefit} style={styles.benefit}><Text style={styles.check}>✓</Text><Text style={styles.benefitText}>{benefit}</Text></View>)}
      </View>
      <View style={styles.plans}>{plans.map((plan) => (
        <Pressable key={plan.id} disabled={processing || !connected} onPress={() => buy(plan.id)} style={({ pressed }) => [styles.plan, plan.recommended && styles.recommended, pressed && styles.pressed]}>
          {plan.recommended && <Text style={styles.recommendedLabel}>{language === 'de' ? 'EMPFOHLEN' : 'RECOMMENDED'}</Text>}
          <View style={styles.planCopy}><Text style={styles.planTitle}>{plan.title}</Text><Text style={styles.planSubtitle}>{plan.subtitle}</Text></View>
          <Text style={styles.price}>{plan.price}</Text>
        </Pressable>
      ))}</View>
      {!connected && <View style={styles.status}><ActivityIndicator color={colors.teal} /><Text style={styles.statusText}>{language === 'de' ? 'Verbindung zum Store wird hergestellt …' : 'Connecting to the store…'}</Text></View>}
      {processing && <ActivityIndicator style={styles.loader} size="large" color={colors.teal} />}
      {message && <Text style={styles.message}>{message}</Text>}
      <Pressable disabled={processing} onPress={restore} style={styles.restore}><Text style={styles.restoreText}>{language === 'de' ? 'Käufe wiederherstellen' : 'Restore purchases'}</Text></Pressable>
      <Text style={styles.legal}>{language === 'de' ? 'Der Kauf erfolgt ausschließlich im geschützten Elternbereich über den App Store oder Google Play.' : 'Purchases are made only in the protected parent area through the App Store or Google Play.'}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  content: { minHeight: '100%', backgroundColor: '#F4FBF8', padding: 22, paddingTop: 20, paddingBottom: 48, alignItems: 'center' },
  back: { position: 'absolute', left: 20, top: 18, width: 48, height: 48, borderRadius: 18, backgroundColor: colors.paper, alignItems: 'center', justifyContent: 'center', ...shadows.card }, backText: { color: colors.ink, fontSize: 40, lineHeight: 40 },
  crown: { width: 82, height: 82, borderRadius: 29, backgroundColor: colors.yellow, alignItems: 'center', justifyContent: 'center', marginTop: 15, ...shadows.card }, crownText: { color: '#FFF', fontSize: 42 },
  eyebrow: { color: colors.teal, fontSize: 13, fontWeight: '900', letterSpacing: 1.5, marginTop: 17 },
  title: { color: colors.ink, fontSize: 29, lineHeight: 35, fontWeight: '900', textAlign: 'center', marginTop: 7, maxWidth: 500 }, subtitle: { color: colors.muted, fontSize: 15, lineHeight: 21, fontWeight: '600', textAlign: 'center', marginTop: 8, maxWidth: 480 },
  benefits: { width: '100%', maxWidth: 550, backgroundColor: colors.paper, borderRadius: 25, padding: 18, marginTop: 22, gap: 10 }, benefit: { flexDirection: 'row', alignItems: 'center', gap: 11 }, check: { width: 27, height: 27, borderRadius: 14, color: '#FFF', backgroundColor: colors.green, textAlign: 'center', lineHeight: 27, fontWeight: '900' }, benefitText: { flex: 1, color: colors.ink, fontSize: 14, fontWeight: '800' },
  plans: { width: '100%', maxWidth: 550, gap: 11, marginTop: 17 }, plan: { minHeight: 82, borderRadius: 23, borderWidth: 3, borderColor: 'transparent', backgroundColor: colors.paper, padding: 16, flexDirection: 'row', alignItems: 'center', ...shadows.card }, recommended: { borderColor: colors.teal, backgroundColor: '#E7F7F3', marginTop: 7 }, recommendedLabel: { position: 'absolute', left: 18, top: -11, color: '#FFF', backgroundColor: colors.teal, borderRadius: 10, paddingHorizontal: 9, paddingVertical: 4, fontSize: 9, fontWeight: '900' }, planCopy: { flex: 1 }, planTitle: { color: colors.ink, fontSize: 18, fontWeight: '900' }, planSubtitle: { color: colors.muted, fontSize: 12, fontWeight: '600', marginTop: 3 }, price: { color: colors.tealDark, fontSize: 19, fontWeight: '900' },
  status: { flexDirection: 'row', alignItems: 'center', gap: 9, marginTop: 18 }, statusText: { color: colors.muted, fontSize: 13, fontWeight: '700' }, loader: { marginTop: 18 }, message: { color: colors.muted, textAlign: 'center', fontSize: 13, lineHeight: 19, fontWeight: '700', marginTop: 13 },
  restore: { padding: 14, marginTop: 7 }, restoreText: { color: colors.tealDark, fontSize: 14, fontWeight: '900', textDecorationLine: 'underline' }, legal: { color: colors.muted, maxWidth: 500, textAlign: 'center', fontSize: 10, lineHeight: 15, marginTop: 4 }, pressed: { transform: [{ scale: 0.98 }] },
});
