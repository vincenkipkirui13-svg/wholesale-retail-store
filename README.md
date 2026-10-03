# Wholesale & Retail Store

Production-oriented storefront foundation for a single wholesale + retail shop.

## Current V1 foundation
- Mobile-first storefront and navigation
- Catalogue, cart and admin routes
- No fabricated products or placeholder product images
- Source-aware catalogue architecture ready for authorised product imports
- Separate wholesale/retail pricing is part of the data model plan
- Payment integration intentionally not enabled yet; M-Pesa is not included in V1

## Product-source rule
Only authorised product data/assets may be imported. Product identity must be based on source identifiers such as GTIN, SKU, variant ID or another stable source key. Imported records must be validated and deduplicated before publication.

## Local development
```bash
npm install
npm run build
npm run dev
```
