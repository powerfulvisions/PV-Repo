# Powerful Visions AI - Visitor Greeter

A three-lane visitor identification and routing flow for powerfulvisions.ai,
built as a standalone Vite + React + TypeScript + Tailwind app.

## What's here

- `src/components/VisitorGreeter.tsx` - the full-attention, centered modal
  shown to first-time visitors with the three identification choices plus
  "I just want to explore."
- `src/hooks/useVisitorType.ts` - reads/writes `visitorType` in
  `localStorage` (`faith` | `organization` | `individual`, plus an
  internal `explore` value) and drives routing.
- `src/components/PathwayView.tsx` - shared layout for the three routed
  pathways: Ubuntu welcome, featured Black Architects of AI profile,
  pathway-specific recommendations.
- `src/components/FullSite.tsx` + `src/components/ExploreBanner.tsx` -
  what "explore" visitors see: the full site including the Black
  Architects of AI research section, with a persistent banner inviting
  them back to the greeter.
- `src/data/pathways.ts` / `src/data/architects.ts` - editable content.
  **The copy and profiles here are sample content** written to
  demonstrate the pattern - swap in the real Black Architects of AI
  research bios and the real product/service recommendations before
  shipping.
- `src/App.tsx` - routing logic implementing the spec:
  1. No `visitorType` in localStorage -> show `VisitorGreeter`.
  2. `visitorType` is `faith` / `organization` / `individual` -> show that
     pathway directly (greeter is skipped on return visits).
  3. `visitorType` is `explore` -> show `FullSite` with the persistent banner.

## Running locally

```bash
npm install
npm run dev       # start the dev server
npm run build     # typecheck + production build
```

## Integrating into the live Lovable/Supabase site

This app is self-contained (no Supabase calls) so it can be dropped into
an existing Lovable project as-is: copy `src/components`, `src/hooks`,
`src/data`, and `src/types` into the target project, then mount
`<VisitorGreeter />`/`<App />`'s routing logic at the top of the app's
root layout so it gates every route. If the site later wants to persist
`visitorType` server-side (e.g. for logged-in users or analytics), the
natural extension point is `useVisitorType` - write through to a Supabase
table there in addition to `localStorage`.
