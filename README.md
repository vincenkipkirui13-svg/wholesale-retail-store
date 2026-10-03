# WideMarket — Wholesale & Retail Store

Production-oriented Next.js storefront/admin build prepared for local testing before GitHub deployment.

## Product-source rule
The default catalogue is intentionally empty. Commercial products must be imported from an authorized source/feed or supplied by the store owner. The application must never fabricate product names, images, SKUs, GTINs, specifications, prices or availability.

## V1 scope
- One storefront for retail and wholesale customers.
- Retail/wholesale pricing mode in the cart.
- Product catalogue, search, categories, product detail and cart.
- Checkout flow is test-only; no live payment provider is activated.
- No M-Pesa integration in V1.
- Admin dashboard, product management view, import validation screen, orders view and store settings.
- Import pipeline structure for source identity, duplicate checks, variant matching and source-vs-selling-price separation.
- Mobile-first responsive design.

## Run locally
1. Install Node.js 20+.
2. Open this folder in Command Prompt / PowerShell.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown by Next.js (normally http://localhost:3000).

For a production build: `npm run build` then `npm start`.

## Before production
Connect only authorized product APIs/feeds, configure persistent storage, authentication/authorization, order persistence, server-side payment integration and webhooks, then run the final acceptance checklist.