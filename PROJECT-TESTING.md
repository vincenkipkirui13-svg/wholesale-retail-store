# Local acceptance checklist

## Storefront
- [ ] Open `/` on desktop and phone width.
- [ ] Open `/catalog` and verify the empty state is intentional.
- [ ] Test every category link.
- [ ] Test the retail/wholesale mode control.
- [ ] Open `/cart` and `/checkout`.
- [ ] Confirm there is no M-Pesa or live payment prompt.
- [ ] Resize from phone to tablet to desktop and check for horizontal overflow.

## Admin
- [ ] Open `/admin`.
- [ ] Open Products, Imports, Orders and Store settings.
- [ ] On Imports, select `public/import-template.csv` and run validation.
- [ ] Confirm the validation screen does not publish fabricated products.
- [ ] On Store settings, edit fields and test the Save interaction.

## Production gate
Do not push/deploy until the storefront, product source authorization, persistence, authentication, payment integration, webhooks and final security review are completed.