/**
 * FocusRead — Stripe Configuration
 *
 * SETUP (5 pasos en el Dashboard de Stripe):
 *
 * 1. Crea tu cuenta en https://dashboard.stripe.com
 *
 * 2. BRANDING (para que salga Bio):
 *    Dashboard → Settings → Branding
 *    - Logo: sube bio-logo.png (exporta el SVG de Bio como PNG 512x512)
 *    - Color de marca: #8b7cf8
 *    - Color de ícono: #6B5CE7
 *
 * 3. PRODUCTOS:
 *    Dashboard → Products → Add product
 *    Nombre: "FocusRead Pro"
 *    - Precio mensual: $4.99 USD / month (recurring)
 *    - Precio anual:   $39.99 USD / year  (recurring)
 *
 * 4. PRICING TABLE:
 *    Dashboard → Products → Pricing tables → Create pricing table
 *    - Agrega los dos precios creados arriba
 *    - Activa "Allow customers to switch plans"
 *    - Copia el pricing-table-id (empieza con prctbl_)
 *
 * 5. API KEY:
 *    Dashboard → Developers → API keys
 *    - Copia la Publishable key (empieza con pk_live_ o pk_test_)
 */
window.FOCUSREAD_STRIPE = {
  // Dashboard → Developers → API keys
  publishableKey: 'pk_test_51TYbPgCO7kBd2xtlkpaRZvxocX39ZGGzvqXxtLoyrYyCi1eLN5Oakirv2prtY67XJqaV6wkjxG7YNnzMZqOXeUQa00nYbsFq1K',

  // Dashboard → Products → Pricing tables → tu tabla → pricing-table-id
  pricingTableId: 'prctbl_1TYbloCO7kBd2xtlUXuQzpUS',

  // Payment Links (Dashboard → Payment Links)
  // Básico $50 MXN/mes — sin RSVP, sin biblioteca
  paymentLinkBasic:   'https://buy.stripe.com/REPLACE_BASIC',
  // Pro $150 MXN/mes — RSVP + biblioteca + índice de PDFs
  paymentLinkMonthly: 'https://buy.stripe.com/REPLACE_PRO',
  paymentLinkYearly:  'https://buy.stripe.com/REPLACE_PRO_YEARLY',
};
