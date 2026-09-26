# Content Guide: Updating the Math Club Website

This guide is for Math Club officers. You do **not** need to know React to update the site.
Almost everything you'll ever change lives in **four files** inside `src/data/`:

| What you want to change                          | File                         |
| ------------------------------------------------ | ---------------------------- |
| Weekly lessons (slides, worksheets, solutions)   | `src/data/weeklyLessons.ts`  |
| Officers and the club advisor                    | `src/data/officers.ts`       |
| Competitions                                     | `src/data/competitions.ts`   |
| Meeting info, links, announcements, school year  | `src/data/siteInfo.ts`       |

**Golden rules**

- Only change the text **inside the quotes** `"like this"`. Keep the commas, brackets `[ ]`, and braces `{ }`.
- Every entry in a list ends with a comma: `},`
- Dates always look like `"2026-09-25"` (year-month-day, with the zeros).
- A link that isn't ready yet? Use `""` (empty quotes). The site shows "Coming soon" instead of a broken button.
- Never make up information. If something isn't confirmed, leave it as `""`.

If you make a mistake, the website **won't publish** and will show an error that tells you exactly which
file and which week to fix. Nothing breaks on the live site.

---

## How to add a new weekly lesson

1. Open `src/data/weeklyLessons.ts`.
2. Scroll to the bottom of the list, where it says `// ⬇ Add Week 4 here`.
3. Paste this **above** that line and fill it in:

```ts
  {
    week: 4,
    date: "2026-09-25",
    topic: "Modular Arithmetic",
    description: "One sentence about what we learned.",
    category: "Number Theory",
    resources: {
      slideshow: "https://docs.google.com/presentation/d/...",
      worksheet: "https://docs.google.com/document/d/...",
      solutions: "",
    },
  },
```

4. Save (commit) the change. That's it! The site automatically:
   - puts the newest week first,
   - shows it as the "Latest Week" on the home page,
   - groups weeks by month on the Weekly Resources page,
   - adds it to the search and topic filters.

**Notes**

- `week` must be a number with no quotes, and each week needs a different number.
- `description` and `category` are optional. You can delete those lines.
- Use consistent categories so the filter buttons stay tidy: `"Number Theory"`, `"Combinatorics"`,
  `"Algebra"`, `"Geometry"`. A new category name automatically creates a new filter button.
- Optional extras (only appear when filled in):

```ts
    resources: {
      slideshow: "...",
      worksheet: "...",
      solutions: "...",
      challenge: "https://...",   // "Challenge Problems" button
      video: "https://youtu.be/...", // "Video" button
    },
    notes: "Bring a calculator next week.",
```

## How to replace a resource link

1. Open `src/data/weeklyLessons.ts` and find the week (search for its topic).
2. Paste the new link between the quotes, e.g. `worksheet: "https://docs.google.com/..."`.
3. To hide a link again, change it back to `""`.

**Google Drive / Docs / Slides links:** click **Share** → **General access** → **"Anyone with the link"** →
**Viewer**. Otherwise students will see "You need access". (School accounts sometimes restrict this to
people in the district. That's okay if all students sign in with school accounts.)

**PDF files instead of Drive links:** put the PDF in the `public/resources/` folder (for example
`public/resources/week-04-worksheet.pdf`) and use the link `"/resources/week-04-worksheet.pdf"`.

## How to change an officer

1. Open `src/data/officers.ts`.
2. Each officer is one line, in the order they appear on the page:

```ts
  { role: "Secretary", name: "Jordan", grade: "Junior" },
```

- **Fill a position:** type the name between the quotes in `name: ""`.
- **Vacant position:** use `name: ""`. The page shows "To be announced".
- **Optional extras:**

```ts
  {
    role: "Secretary",
    name: "Jordan",
    grade: "Junior",
    bio: "Loves geometry and puzzle hunts.",
    contact: "jordan@example.com",     // email or a full link
    photo: "/officers/jordan.jpg",
  },
```

- **Photos:** use a portrait (taller than wide) photo, ideally cropped to **4:5** (about
  **480 × 600 pixels**) with the face in the upper third. Save it as `.jpg` or `.webp` (under ~200 KB),
  name it after the officer (e.g. `jordan.jpg`), and put it in `public/officers/`. Then add
  `photo: "/officers/jordan.jpg"`. Photos are optional; without one, the card shows the officer's initials.
  Only add a photo with that officer's permission.
  *Quick resize:* on Windows, open the photo in the Photos app → **Edit** → **Crop** (choose 4:5) →
  **Save as copy**, or use any free online image resizer.
- **Bio:** 1–2 sentences, under 300 characters (the site won't publish a longer one, and tells you why).
  The advisor can have a `bio` and `photo` too.
- **Add/remove a position:** add or delete a whole line.

**Changing the advisor:** edit the `advisor` section at the top of the same file. It's the only place the
advisor appears.

## How to add a competition

1. Open `src/data/competitions.ts`.
2. Copy an existing competition block, paste it at the end of the list, and edit it:

```ts
  {
    name: "HMMT November",
    level: "National",       // "National", "Regional", "State", "Local", or "Other"
    description: "One or two factual sentences.",
    eligibility: "",
    date: "",                // "2026-11-14" once officially announced
    registration: "",        // how AK students sign up, once confirmed
    links: [{ label: "Official website", url: "https://..." }],
  },
```

- Only fill in `date` and `registration` once they're **officially confirmed**. Until then, the page shows
  "TBA" and "Registration details coming soon".
- Competitions with dates are listed first (soonest first); TBA ones follow.
- Listing a competition doesn't mean the club is registered. Say so in `registration` when it's true.

## How to update meeting information

Open `src/data/siteInfo.ts` and edit the `meeting` section:

```ts
  meeting: {
    day: "Fridays",
    time: "3:00–4:00 PM",
    room: "A103",
  },
```

Anything left as `""` shows "TBA". In the same file you can also update:

- `howToJoin`: a sentence or two about how to join (shown on About / Join).
- `links`: Band, Google Classroom, Remind, Instagram. Empty ones show "Link coming soon" and are
  hidden from the footer.
- `schoolYear`: change it at the start of each year (e.g. `"2027–2028"`).
- `siteUrl`: the public address of the site once it's deployed (used for link previews).

## How to post an announcement

At the bottom of `src/data/siteInfo.ts`:

```ts
export const announcements: Announcement[] = [
  {
    date: "2026-10-01",
    title: "AMC sign-ups are open",
    body: "Talk to an officer before October 15.",
    link: { label: "Sign-up form", url: "https://forms.gle/..." },
  },
];
```

Announcements appear on the home page and on About / Join. Delete old ones when they no longer matter;
with no announcements, the home page section disappears.

## Starting a new school year

1. In `siteInfo.ts`, change `schoolYear` and add last year's lesson page to `pastYears` if you keep one.
2. In `weeklyLessons.ts`, remove or archive last year's weeks and start again at Week 1.
3. Update `officers.ts` and double-check meeting info.

---

## How to deploy the website

The site is hosted on **Vercel** (free). Once it's set up, **every change you commit to GitHub goes
live automatically in about a minute.** You don't need to run anything on your computer.

### Making a quick edit (no software needed)

1. Go to the project on GitHub and open the file (e.g. `src/data/weeklyLessons.ts`).
2. Click the ✏️ pencil icon, make your change, and click **Commit changes**.
3. Wait about a minute and refresh the website. If it didn't update, open the Vercel dashboard →
   **Deployments** → click the failed one to see the error message (it tells you what to fix).

### First-time setup (done once)

1. Create a GitHub repository and upload (push) this project to it.
2. Go to [vercel.com](https://vercel.com), sign in with GitHub, click **Add New → Project**, and import
   the repository. Vercel detects Next.js automatically. Click **Deploy**.
3. Copy the site's address (e.g. `https://ak-math-club.vercel.app`) into `siteUrl` in `siteInfo.ts`.
4. Add other officers as collaborators on the GitHub repository so they can edit too.

(The site is fully static, built into the `out/` folder, so Netlify, Cloudflare Pages, or GitHub Pages
also work.)

### Previewing changes on your own computer (optional)

Install [Node.js](https://nodejs.org) (version 20 or newer), then in the project folder:

```bash
npm install
npm run dev
```

Open http://localhost:3000. Before pushing a bigger change, run `npm run check` to catch mistakes.
