import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Purchase, useIAP } from 'expo-iap';
import { allProductIds, productIds, subscriptionProductIds } from '../config/products';

export type PremiumPlanId = keyof typeof productIds;

export function usePremiumStore(onEntitlementChange: (unlocked: boolean, verifiedAt: string) => void) {
  const [message, setMessage] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);
  const [storeChecked, setStoreChecked] = useState(false);
  const [completedPurchase, setCompletedPurchase] = useState<Purchase | null>(null);
  const handledTransactions = useRef(new Set<string>());

  const {
    connected,
    products,
    subscriptions,
    availablePurchases,
    activeSubscriptions,
    fetchProducts,
    requestPurchase,
    finishTransaction,
    restorePurchases,
    getAvailablePurchases,
    getActiveSubscriptions,
  } = useIAP({
    onPurchaseSuccess: setCompletedPurchase,
    onPurchaseError: (error) => { setProcessing(false); setMessage(error.message); },
    onError: (error) => { setProcessing(false); setMessage(error.message); },
  });

  const refreshEntitlement = useCallback(async () => {
    await Promise.all([
      getAvailablePurchases(),
      getActiveSubscriptions(subscriptionProductIds),
    ]);
    setStoreChecked(true);
  }, [getActiveSubscriptions, getAvailablePurchases]);

  useEffect(() => {
    if (!connected) return;
    Promise.all([
      fetchProducts({ skus: [productIds.lifetime], type: 'in-app' }),
      fetchProducts({ skus: subscriptionProductIds, type: 'subs' }),
      refreshEntitlement(),
    ]).catch((error: Error) => setMessage(error.message));
  }, [connected, fetchProducts, refreshEntitlement]);

  const entitled = useMemo(() => {
    const ownsLifetime = availablePurchases.some((purchase) => purchase.productId === productIds.lifetime);
    const hasSubscription = activeSubscriptions.some((subscription) => subscription.isActive && subscriptionProductIds.includes(subscription.productId as typeof subscriptionProductIds[number]));
    return ownsLifetime || hasSubscription;
  }, [activeSubscriptions, availablePurchases]);

  useEffect(() => {
    if (storeChecked) onEntitlementChange(entitled, new Date().toISOString());
  }, [entitled, onEntitlementChange, storeChecked]);

  useEffect(() => {
    if (!completedPurchase || handledTransactions.current.has(completedPurchase.id)) return;
    handledTransactions.current.add(completedPurchase.id);
    const complete = async () => {
      if (!allProductIds.includes(completedPurchase.productId as typeof allProductIds[number])) return;
      await finishTransaction({ purchase: completedPurchase, isConsumable: false });
      onEntitlementChange(true, new Date().toISOString());
      await refreshEntitlement();
      setProcessing(false);
    };
    complete().catch((error: Error) => { setProcessing(false); setMessage(error.message); });
  }, [completedPurchase, finishTransaction, onEntitlementChange, refreshEntitlement]);

  const buy = useCallback(async (plan: PremiumPlanId) => {
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
      setMessage(error instanceof Error ? error.message : 'Purchase could not be started.');
    }
  }, [requestPurchase, subscriptions]);

  const restore = useCallback(async () => {
    setProcessing(true);
    setMessage(null);
    try {
      await restorePurchases();
      await refreshEntitlement();
      setProcessing(false);
    } catch (error) {
      setProcessing(false);
      setMessage(error instanceof Error ? error.message : 'Restore failed.');
    }
  }, [refreshEntitlement, restorePurchases]);

  return {
    connected,
    products: [...products, ...subscriptions],
    processing,
    message,
    entitled,
    storeChecked,
    buy,
    restore,
  };
}

export type PremiumStoreController = ReturnType<typeof usePremiumStore>;
