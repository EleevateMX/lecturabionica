/**
 * FocusRead — Stripe Configuration
 *
 * PASOS PARA CONFIGURAR (modo sandbox / test):
 *
 * 1. Ve a https://dashboard.stripe.com y asegúrate de estar en modo TEST
 *    (toggle "Test mode" arriba a la derecha).
 *
 * 2. PRODUCTOS — Dashboard → Product catalog → + Add product
 *
 *    Producto 1: "FocusRead Básico"
 *      Precio A: $100.00 MXN · Recurring · Monthly  → anota el price_id (price_xxx)
 *      Precio B: $1,000.00 MXN · Recurring · Yearly → anota el price_id (price_xxx)
 *
 *    Producto 2: "FocusRead Pro"
 *      Precio A: $150.00 MXN · Recurring · Monthly  → anota el price_id (price_xxx)
 *      Precio B: $1,500.00 MXN · Recurring · Yearly → anota el price_id (price_xxx)
 *
 * 3. PAYMENT LINKS — Dashboard → Payment Links → + New
 *    Para cada precio crea un link. En la sección "After payment":
 *      - Confirmation page: "Don't show confirmation page"
 *      - Redirect URL para Básico mensual:
 *          https://eleevatemx.github.io/lecturabionica/?plan=basic&success=1
 *      - Redirect URL para Básico anual:
 *          https://eleevatemx.github.io/lecturabionica/?plan=basic&success=1
 *      - Redirect URL para Pro mensual:
 *          https://eleevatemx.github.io/lecturabionica/?plan=pro&success=1
 *      - Redirect URL para Pro anual:
 *          https://eleevatemx.github.io/lecturabionica/?plan=pro&success=1
 *    Copia cada URL generada (buy.stripe.com/test_xxx) y pégala abajo.
 *
 * 4. BRANDING (opcional pero recomendado) — Dashboard → Settings → Branding
 *    - Color de marca: #8b7cf8
 *
 * 5. Pega las 4 URLs aquí abajo y haz push. ¡Listo!
 */
window.FOCUSREAD_STRIPE = {
  // Dashboard → Developers → API keys → Publishable key (pk_test_...)
  publishableKey: 'pk_test_51TYbPgCO7kBd2xtlkpaRZvxocX39ZGGzvqXxtLoyrYyCi1eLN5Oakirv2prtY67XJqaV6wkjxG7YNnzMZqOXeUQa00nYbsFq1K',

  // Dashboard → Products → Pricing tables → tu tabla → pricing-table-id
  pricingTableId: 'prctbl_1TYbloCO7kBd2xtlUXuQzpUS',

  // Payment Links — pega aquí las URLs generadas en el paso 3
  paymentLinkBasic:        'https://buy.stripe.com/test_dRm3cu3872Ce4035Zm4c800',
  paymentLinkBasicAnnual:  'https://buy.stripe.com/REPLACE_BASIC_ANNUAL',
  paymentLinkMonthly:      'https://buy.stripe.com/REPLACE_PRO_MONTHLY',
  paymentLinkYearly:       'https://buy.stripe.com/REPLACE_PRO_ANNUAL',
};
