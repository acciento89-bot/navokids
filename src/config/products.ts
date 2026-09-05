export const productIds = {
  monthly: 'com.kamilunavo.navokids.monthly',
  yearly: 'com.kamilunavo.navokids.yearly',
  lifetime: 'com.kamilunavo.navokids.lifetime',
} as const;

export const allProductIds = Object.values(productIds);
export const subscriptionProductIds = [productIds.monthly, productIds.yearly];
