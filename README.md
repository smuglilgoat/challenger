# Challenger

An interactive progression tracker for the MapleStory **Challenger World Season 3** event.

## What it does

The app turns the Season 3 progression guide into a checklist organized by phase:

- tabs for progression, ranks and rewards, bosses, burning systems, item burning, Arcane Seal, passes, gear and events;
- per-step checkboxes, sub-steps and notes, with overall progress bars and a current-week indicator;
- light/dark themes.

Progress and notes are saved in the browser's `localStorage`; there is no backend or account.

The written source material lives in the repository:

- `Challenger_World_S3_COMPLETE_Progression_Guide.md` — the full guide, with sources and KMS/GMS caveats;
- `docs/` — Korean patch notes, the written guide and video transcripts used to build it;
- `src/data/*.ts` — the typed data the UI renders.

## Stack

- React 19 + TypeScript, Vite 8
- Tailwind CSS 4, shadcn/ui on Base UI, lucide icons
- ESLint

## Getting started

```bash
npm install
npm run dev        # Vite dev server
npm run build      # tsc -b && vite build
npm run lint
npm run preview    # serve the production build
```

## Notes

- The guide targets Season 3; numbers taken from KMS or test-server transcripts are flagged as such in the source guide.
- `images/` holds the screenshots referenced by the written guide.
- No deployment configuration is included in the repository.
