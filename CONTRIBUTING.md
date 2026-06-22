# Contributing to Camouflage

Thanks for taking a look. Camouflage is a small static site — plain HTML, CSS,
and JavaScript, no framework and no build step for the site itself. That makes it
easy to hack on: edit a file, refresh the browser, done.

## Run it locally

Fonts load over `@font-face`, and some browsers block that on `file://`, so serve
the folder over HTTP:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

Any static server works (`npx serve`, VS Code Live Server, etc.).

## Where things live

```
index.html        # markup: hero, tester, matcher, specimens, essay, library, footer
styles.css        # all styling and motion (CSS custom properties at the top)
app.js            # specimen data, the live tester, the Font Matcher, the library wall
fonts/
  fonts.css       # @font-face for the curated "featured" faces (hand-written)
  library.css     # @font-face for every other font (GENERATED — do not hand-edit)
  *.ttf / *.otf   # the font files, named kebab-case
fonts-data.js     # the library list (GENERATED — do not hand-edit)
scripts/
  build_library.py# regenerates library.css + fonts-data.js from fonts/
```

## Adding a font

There are two tiers. Pick based on how much you want to say about the face.

### A featured specimen (full write-up + Font Matcher entry)

1. Add the file to `fonts/` with a clean, kebab-case name
   (`steak-muroh.ttf`, not `SteakMurohRegular-3z7yX.ttf`).
2. Declare it in `fonts/fonts.css` with an `@font-face` block.
3. Add an entry to the `FONTS` array in `app.js`:
   ```js
   {
     name: "Steak Muroh",
     family: "Steak Muroh",        // must match the @font-face family
     tags: ["Display", "Heavy"],
     sample: "Loud & Proud",        // shown when someone types in the tester
     desc: "A chunky, confident headline face…",
     glyphs: "ABC… abc… 0123456789",
     match: ["display", "bold", "heavy", "poster", "punchy", "short"],
     best: "punchy headlines where one word carries everything",
   }
   ```
   `match` is what the Font Matcher scores against — see below.

### A library-only face (just appears on the wall)

1. Drop the file into `fonts/` with a kebab-case name.
2. Regenerate the library:
   ```bash
   pip install fonttools
   python3 scripts/build_library.py
   ```
   This rewrites `fonts/library.css` and `fonts-data.js`. The script auto-detects a
   category (Sans / Serif / Display / Georgian / …) from the font's name; if it
   guesses wrong, the heuristic lives in `category()` in the script.

**Never hand-edit `fonts/library.css` or `fonts-data.js`** — they're generated and
your changes will be overwritten on the next build.

## How the Font Matcher works

The quiz lives entirely in `app.js`:

- `QUIZ` — the four questions and their answer keywords. The first question (the
  job) carries `w: 2`, so it weighs more heavily.
- Each font's `match` array — keywords describing what it's good for.

A recommendation is just: tally the chosen answers' keywords (weighted), then pick
the font whose `match` list overlaps that tally the most. To tune a result, adjust
keywords — no scoring code needs to change.

## Style

- Match the surrounding code; no new dependencies, no build tooling for the site.
- Use the existing CSS custom properties (`--coral`, `--ink`, `--surface`, …) and
  OKLCH colors rather than new hex values.
- Keep it accessible: body contrast ≥ 4.5:1, and gate any motion behind
  `@media (prefers-reduced-motion: no-preference)`.
- Test the longest heading and the matcher at both mobile and desktop widths.

## A note on font licenses

This is the important one. Several fonts here were distributed as *free for
personal use*, and a few are commercial. **Do not add a font you don't have the
right to redistribute** in a public repository. When in doubt, leave it out —
or link to where it can be downloaded instead of committing the file.

## Commits & pull requests

- Small, focused commits with a clear summary line.
- Open a PR against `main` describing what changed and why.
- For anything visual, a before/after screenshot helps a lot.
