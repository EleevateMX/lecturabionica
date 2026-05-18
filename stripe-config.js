/**
 * FocusRead — Stripe Configuration
 *
 * 1. Create a Stripe account at https://stripe.com
 * 2. Create a Product "FocusRead Pro" with monthly + yearly prices
 * 3. Create a Buy Button in Stripe Dashboard → Payment Links → Buy Buttons
 * 4. Replace the values below with your real keys
 * 5. Deploy — Stripe handles all payment security
 */
window.FOCUSREAD_STRIPE = {
  // Get these from https://dashboard.stripe.com/apikeys
  publishableKey: 'pk_live_REPLACE_WITH_YOUR_PUBLISHABLE_KEY',

  // Get Buy Button IDs from Stripe Dashboard → Payment Links → Buy Buttons
  buyButtonIdMonthly: 'buy_btn_REPLACE_MONTHLY_ID',
  buyButtonIdYearly:  'buy_btn_REPLACE_YEARLY_ID',

  // Optional: direct Stripe Payment Link URLs (fallback)
  paymentLinkMonthly: 'https://buy.stripe.com/REPLACE_MONTHLY',
  paymentLinkYearly:  'https://buy.stripe.com/REPLACE_YEARLY',
};
