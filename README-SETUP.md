# COZY ERA — new frontend, setup notes

## 1. Install the two new dependencies

```bash
npm install framer-motion lucide-react
```

Nothing else changes in your `package.json` — everything else (Next 16,
React 19, Tailwind 4) is already there.

## 2. Drop these files into your project

```
app/globals.css              → replace
app/layout.tsx                → replace
app/page.tsx                   → replace (now a homepage teaser, not the full shop)
app/shop/page.tsx              → new route — full catalog
app/about/page.tsx             → new route — brand story
app/contact/page.tsx           → new route — contact form
components/Navbar.tsx
components/Hero.tsx
components/SpineTicker.tsx
components/Marquee.tsx
components/Manifesto.tsx
components/ProductCard.tsx
components/ProductGrid.tsx
components/Footer.tsx
lib/types.ts
lib/api.ts
next.config.mjs              → replace (or merge if you already have one)
postcss.config.mjs           → only needed if you don't already have this
```

`Navbar` and `Footer` now render once, from `app/layout.tsx`, and appear on
every route automatically — you don't need to import them into individual
pages.

Confirm your `tsconfig.json` has the `@/*` path alias (default in every
`create-next-app` project):

```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./*"] }
  }
}
```

## 3. Site structure

- `/` — Home: hero, materials marquee, manifesto, a 4-item "Newly Arrived" teaser
- `/shop` — the full catalog, responsive 2/3/4-column grid
- `/about` — brand story + materials
- `/contact` — contact form (UI-only for now — see note below)

## 4. About the palette

This is Tailwind v4, so there's no `tailwind.config.js` — every color/font/
animation token lives in `app/globals.css` inside `@theme { ... }`, and
Tailwind generates the matching utilities automatically (`--color-coral` →
`bg-coral`, `text-coral`, etc). If you still have an old `tailwind.config.js`
sitting in your project from before, it's inert under v4 and safe to delete.

## 5. Backend URL

`lib/api.ts` reads `process.env.API_URL`, falling back to
`http://localhost:5000` — works with your current backend with zero setup.

## 6. Contact form

The form is UI-only right now — it flips to a "sent" state but doesn't
actually deliver anywhere, since your Express API only has `/api/products`
and `/api/health`. To make it real, add a POST endpoint (e.g. `/api/contact`)
or wire it to a service like Resend or Formspree.

## 7. Run it

```bash
# terminal 1 — your existing Express API
node server.js

# terminal 2 — the frontend
npm run dev
```

Visit `http://localhost:3000`.
