111111111111111111111111111111111# MedFactory Homepage

Premium dental training products storefront — static HTML/CSS/JS prototype.

## Open locally

1. Open `index.html` in a browser, or
2. Run a local server:

```bash
cd C:\Users\HP\Projects\medfactory
npx --yes serve .
```

Then visit `http://localhost:3000`

Example product page: `http://localhost:3000/product.html?id=dh-001`

## Files

- `index.html` — homepage
- `about.html` — about us (story, mission, vision, trust, quality, shipping)
- `products.html` — shop page (filter, search, sort, pagination)
- `product.html` — product details (gallery, zoom, specs, related)
- `products-data.js` — shared product catalog
- `style.css` — mobile-first design system + components
- `common.js` — shared header, cart, toast
- `script.js` — homepage-specific scripts
- `products.js` — shop page logic
- `product.js` — product page logic
- `about.js` — about page animations & stats

## Language

- Default language: **Arabic** (stored in `localStorage` key `mf-lang`)
- Use the **عربي / EN** switcher in the header on any page

## Product images

Real product photos live in `images/` (sourced from your uploads).

## Pages

| Page | File |
|------|------|
| Home | `index.html` |
| Shop | `products.html` |
| Product | `product.html?id=...` |
| About | `about.html` |
| Contact | `contact.html` |

## Customize

- Replace WhatsApp link: search for `wa.me/201000000000`
- Edit translations in `i18n.js` and `products-i18n.js`
