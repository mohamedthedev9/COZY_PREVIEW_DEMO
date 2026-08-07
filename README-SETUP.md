# COZY ERA — new frontend, setup notes

## 1. Install the two new dependencies

```bash
npm install framer-motion lucide-react
```

Nothing else changes in your `package.json` — everything else (Next 16,
React 19, Tailwind 4) is already there.

## 2. Drop these files into your project

```
app/globals.css        → replace your existing one
app/layout.tsx          → replace
app/page.tsx             → replace
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
next.config.mjs         → replace (or merge if you already have one)
postcss.config.mjs      → only needed if you don't already have this
```

Confirm your `tsconfig.json` has the `@/*` path alias (this is the default
in every `create-next-app` project, so you very likely already have it):

```json
{
  "compilerOptions": {
    "paths": { "@/*": ["./*"] }
  }
}
```

## 3. About `tailwind.config.js`

You're on **Tailwind v4**, which replaced `tailwind.config.js` with a
CSS-first config — there's no JS config file to write anymore. Every color,
font, and animation token now lives directly in `app/globals.css` inside
the `@theme { ... }` block, and Tailwind generates the matching utility
classes automatically (`--color-oxblood` → `bg-oxblood`, `text-oxblood`,
`border-oxblood`, and so on). `postcss.config.mjs` is the one config file
v4 actually needs, and it's included above.

## 4. Backend URL

`lib/api.ts` reads `process.env.API_URL`, falling back to
`http://localhost:5000` — so it works with your current backend with zero
setup. To point it elsewhere later, add to `.env.local`:

```
API_URL=https://your-api-domain.com
```

## 5. Run it

```bash
# terminal 1 — your existing Express API
node server.js

# terminal 2 — the frontend
npm run dev
```

Visit `http://localhost:3000`.
