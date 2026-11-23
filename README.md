# J & V Elite Motors — SvelteKit

Responsive dealership website recreation based on the publicly visible content and structure of https://elitemotors.com.au/.

## Stack
- SvelteKit 2 + Svelte 5 runes
- JavaScript only (no TypeScript)
- Tailwind CSS v4 + daisyUI v5
- Vite

All UI styling is written with Tailwind utility classes and daisyUI components. No Bootstrap, Bulma, custom component framework, or separate CSS framework is included. `src/app.css` only loads Tailwind and configures the daisyUI theme.

## Start
```bash
npm install
npm run dev
```
Open http://localhost:5173

## Production build
```bash
npm run build
npm run preview
```

## Routes
- `/` Home
- `/cars` Inventory search (make, model, max price and sorting)
- `/cars/[slug]` Vehicle details
- `/finance` Finance information
- `/contact` Enquiry form

## Inventory
Edit `src/lib/vehicles.js`. Stock is demonstration content based on visible listings on the reference website. Verify prices, kilometres, vehicle details and availability before publishing.

## Before going live
Replace demo photography with licensed dealership photos; connect contact form to a backend API/email provider; connect vehicle stock to MySQL or a dealer stock feed; add secure admin authentication and stock management; configure domain, HTTPS, backups, analytics and privacy notices.

Independent recreation, not the original source code. No private CMS, original backend or stock feed is included. Use third-party branding and photography only with permission.
