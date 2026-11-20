# English Life — Baseline Expression Database

## Release
English Life v5.0 includes **2,000 unique entries** distributed as:

| Category | Entries |
|---|---:|
| Phrasal Verbs | 250 |
| Vocabulary | 800 |
| Idioms | 100 |
| Collocations | 250 |
| Slang & Informal | 100 |
| Sentence Patterns | 200 |
| Conversation Skills | 300 |
| **Total** | **2,000** |

The baseline is prepackaged in the `db/core-*.js` files. It does not call Gemini just to load or browse entries.

## Data status and limitations
This is the **first-pass glossary and expression bank**, not 2,000 fully edited dictionary cards. Newly imported entries have Korean meanings and category information, but many lack professionally reviewed example sentences and detailed grammatical usage. The app labels entries that need enrichment and offers **AI example/usage enrichment on demand**, saved locally. Original curated starter entries retain their examples. AI-derived details may themselves be imperfect and should be checked before high-stakes use.

The expression stars and frequency labels are study heuristics, not measured official corpus frequency estimates. The 2,000-entry count is an **application content goal** and is not an OPIc Advanced Low examination requirement or an ACTFL-endorsed list.

## Sources and attribution
- **English–Korean vocabulary (787 of the 800 Vocabulary entries)**: [jhseo1211/open-english-korean-dict](https://github.com/jhseo1211/open-english-korean-dict), distributed under **Creative Commons Attribution–ShareAlike 4.0 International (CC BY-SA 4.0)**. Original project attributes its upstream dictionary sources. This project selected, edited and reformatted dictionary entries; edited Korean glosses may differ from the source. Respect attribution and share-alike obligations for derivative glossary data.
- **Original 19 built-in expressions and 73 starter entries**: English Life educational content authored for this app.
- **Other category seed banks**: English Life educational selection and Korean glosses authored for this app.

Source attribution and licensing obligations apply to the glossary data independently from the application code. The merged glossary content is published openly in this repository.

## Content boundaries
- The `+ 랜덤 추가` and `+ 직접 추가` features continue to use Gemini to generate new material rather than pulling items from a fixed reserve pool.
- `AI로 새로운 상황 만들기` is unchanged and remains available.
- New AI-added expressions enter the user's personal library with **NEW** mastery state, until the user explicitly chooses Focus / Review / Mastered.
- User-progress and saved AI-enriched cards are stored in the browser. Exporting the JSON backup is recommended.
- Text-based speaking feedback is **not an official OPIc score**, and speech-to-text does not measure actual pronunciation accuracy.
