# Ardrey Kell Math Club website

The website for **Ardrey Kell Math Club** (Ardrey Kell High School, Charlotte, NC), 2026–2027.

**Officers: to update the site, read [CONTENT_GUIDE.md](CONTENT_GUIDE.md).**
You'll only ever need to edit files in `src/data/`:

- `src/data/weeklyLessons.ts`: weekly lessons and resource links
- `src/data/officers.ts`: officers and the club advisor
- `src/data/competitions.ts`: competitions
- `src/data/events.ts`: upcoming events
- `src/data/siteInfo.ts`: meeting info, links, announcements, school year

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run check      # lint + typecheck + build
```

Built with Next.js + TypeScript as a static site (`npm run build` → `out/`), hosted on Vercel.
