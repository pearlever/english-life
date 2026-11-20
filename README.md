# English Life

Mobile-first personal English speaking RPG and expression practice web app.

## Try it

https://pearlever.github.io/english-life/

## What is included

- **2,000-entry baseline English Expression Library** — 800 Vocabulary, 250 Phrasal Verbs, 250 Collocations, 300 Conversation Skills, 200 Sentence Patterns, 100 Idioms and 100 Slang & Informal.
- 35 built-in roleplay scenarios, plus a Gemini-powered **AI scenario generator**.
- Gemini conversation and coaching; text/voice entry (browser-dependent); word targets; retry and feedback.
- Expression mastery: **NEW** for newly AI-added expressions, then user-selected Focus, Review or Mastered.
- Category filtering, search and paginated Library (40 entries per page).
- AI-generated detailed examples on demand for baseline entries with incomplete examples.
- PWA installation and user-triggered notification demo.
- Browser-local learning history and JSON backup.

### Content quality

The 2,000-entry baseline is a **first-pass expression/meaning database**, not 2,000 fully reviewed dictionary cards. Many newly imported entries have limited examples or grammar guidance. Click an entry and select **AI로 뜻·Usage·예문 보강** to expand and locally save example sentences when Gemini is available. See [DATA_SOURCES.md](DATA_SOURCES.md) for provenance, licensing and caveats.

### Security

Never commit an API key. The static app calls Gemini from the user's browser for **personal use only**, and optionally stores the key locally. Browser key storage does **not** protect it like a server-side secret. Do not enable key remembering on shared devices, and do not deploy a shared production service using a public client-side key.

### Deployment

GitHub Pages → Settings → Pages → Deploy from a branch → `main` → `/(root)`.

The `index.html`, `manifest.webmanifest`, `sw.js`, `content-pack.js`, and `db/core-*.js` files are all necessary.
