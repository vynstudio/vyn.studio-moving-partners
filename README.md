# vyn.studio — Moving Partners

Landing page for Vyn Studio's commission-only offer for U.S. moving companies:
**free website + free ad management, paid only on booked jobs**.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS 3

## Routes

- `/` — moving partners landing page (same content as `/moving-commission`)
- `/moving-commission` — same page, explicit URL

## Local development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Deploy (Netlify)

The repo includes `netlify.toml` configured for Netlify's official Next.js
runtime. Connect this repo in Netlify and the build runs `npm run build`
automatically.

## TODO

- Wire `BookCallButton` `onClick` to Calendly (or whichever booking tool we
  pick).
- Replace placeholder case studies with real ones once we have signed
  permission from the movers.
- Replace placeholder logo grid with actual partner logos.
