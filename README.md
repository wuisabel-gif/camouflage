<p align="center">
  <img src="favicon-180.png" width="120" height="120" alt="Camo, the Camouflage chameleon" />
</p>

<h1 align="center">Camouflage — A typeface-matching tool</h1>

A tool for picking the right typeface, in disguise. Tell it what you're
making and it recommends the face that fits; or type into the tester and
preview the whole embedded library at once. The name says it: on the home page
the word *Camouflage* wears a different face on **every single letter**. Every
font is embedded straight from the `/fonts` folder with `@font-face`, so it
looks identical on any machine with nothing to install.

> Answer four questions, or type into the tester — the whole library rewrites
> itself in real time.

---

## ✨ What's inside

A single, self-contained static site — no framework, no runtime dependencies.
Just open `index.html`.

- **Font Matcher** — answer four quick questions about the job and it recommends the face that fits, the way you'd brief a designer about a client.
- **Live type tester** — one input drives every specimen *and* the whole library at once, with a size slider.
- **Disguised wordmark** — the hero spells *Camouflage* with one letter per typeface, and an animated mascot, Camo the chameleon.
- **Featured specimens** — a hand-curated set, each with its own description, tags, and character set.
- **The full library** — every embedded face on one wall, fonts loaded progressively so the page stays fast.
- **Self-hosted & offline** — all fonts embedded locally; responsive, keyboard-friendly, reduced-motion aware.

---

## 🎯 Font Matcher

Not sure which face suits a project? The **Font Matcher** section asks four
questions — what you're making, the personality, the formality, and the energy —
then scores every typeface against your answers and recommends the best fit
(plus a couple of runners-up). The "what are you making" answer is weighted
highest, because the job is the strongest signal. All of the matching logic
lives in `app.js` (the `QUIZ` array and each font's `match` keywords), so it's
easy to tune.

---

## 🚀 Run it locally

Because the fonts are loaded over `@font-face`, open the page through a tiny
local server (opening the file directly with `file://` can block font loading in
some browsers).

```bash
# Python 3 (already on most machines)
python3 -m http.server 8000

# …then visit http://localhost:8000
```

Any static server works just as well (`npx serve`, the VS Code Live Server
extension, etc.).

### Deploy to GitHub Pages

1. Push this folder to a GitHub repository.
2. **Settings → Pages → Build and deployment → Source: Deploy from a branch.**
3. Pick your branch and the `/ (root)` folder, then save.

The site is plain HTML/CSS/JS, so it works on Pages, Netlify, Vercel, or any
static host with zero configuration.

---

## 🛠 Using a font in your own project

Grab the file you want from `/fonts` and embed it:

```css
@font-face {
  font-family: "Steak Muroh";
  src: url("./fonts/steak-muroh.ttf") format("truetype");
  font-display: swap;
}

h1 {
  font-family: "Steak Muroh", sans-serif;
}
```

For design tools (Figma, Affinity, the Adobe apps, Word…), just double-click the
font file to install it on your system.

---

## 📁 Project structure

```
camouflage/
├── index.html          # The page
├── styles.css          # Theme, layout, specimens, matcher, motion
├── app.js              # Specimen data + live tester + Font Matcher
├── fonts-data.js       # Generated library list
├── mascot-web.png      # "Camo" the chameleon mascot
├── README.md
├── CONTRIBUTING.md
├── scripts/
│   └── build_library.py    # Regenerates the library from fonts/
└── fonts/
    ├── fonts.css       # @font-face for the featured faces (hand-written)
    ├── library.css     # @font-face for the rest (generated)
    └── *.ttf / *.otf   # the font files, kebab-case
```

> Font files are renamed from their original download names (e.g.
> `SteakMurohRegular-3z7yX.ttf` → `steak-muroh.ttf`) to clean, readable,
> kebab-case names.

---

## 🧩 Built by stacking skills

Camouflage wasn't built by one prompt. It was assembled by **composing several
Claude Code skills**, each handling a different altitude of the work. Skills are
reusable packets of expertise you invoke with a slash command (`/impeccable`,
`/beautiful-type`); several can be active in the same session, and they layer
rather than fight — because each one owns a different scope.

The build used four:

| Skill | Scope | What it did here |
|---|---|---|
| **`impeccable`** | The whole interface — layout, color, motion, hierarchy, responsiveness | Shaped the dark gallery, the sticky tester, the section rhythm, the reveal animations |
| **`beautiful-type`** | Typography only — font choice, pairing, scale, `@font-face`, micro-typography | Drove the embedding, the disguised wordmark, the type scale, and the matcher's brief→face logic. *(This skill was generated **from** this project.)* |
| **`hue`** | Meta — *generates* new design-language skills | Could spin Camouflage's look into a reusable brand skill of its own |
| **`cadence`** | Prose voice — makes writing sound human, in a chosen tone | Wrote the *"Your face matters"* essay in a philosopher's register, scored 0 on its de-slop detector |

### How to combine them yourself

Think in **altitudes**, and go broad → narrow:

1. **Set the identity** — if you have a brand look, capture it as a skill with
   `/hue` first, so every later step inherits it.
2. **Build the interface** — `/impeccable craft <page>` for structure, layout,
   color, and motion. This is the generalist; it scaffolds the whole thing.
3. **Refine one dimension** — invoke a specialist on the result. `/beautiful-type`
   tunes the type system; another skill could own color, or copy.
4. **Fill the words** — `/cadence write <brief>` for any real prose so it doesn't
   read as AI filler.

They don't conflict because they don't overlap: `impeccable` works at the
whole-page level and *defers* the deep type decisions to `beautiful-type`, which
in turn leaves layout and color alone. A generalist sets the stage; a specialist
sweats one detail. Stack as many as the job has distinct layers — just keep each
to its own scope and run them broad-first.

> Want the Camouflage look as a one-command skill? Run `/hue` and point it at this
> site; it'll generate a design-language skill you can `/invoke` on any new page.

---

## 🤝 Contributing

Adding a font, tuning the matcher, or improving the site? See
[CONTRIBUTING.md](CONTRIBUTING.md) — it covers running locally, the two ways to
add a typeface, how the Font Matcher scores, and the font-license rule (don't
commit fonts you can't redistribute).

---

## 📜 Licensing

This repository contains the **site code** plus a personal collection of fonts
gathered from free-font sites. **The typefaces are the property of their
respective designers and foundries.**

- **Site code (HTML/CSS/JS) © 2026 [wuisabel-gif](https://github.com/wuisabel-gif).** Free to reuse and adapt.
- **Each font keeps its own license.** Several of these were distributed as
  *free for personal use* — **verify the individual license before any
  commercial use**, and credit the original designer where required.

If you are a font's author and would like a credit added or a file removed,
please open an issue.

---

<sub>© 2026 <a href="https://github.com/wuisabel-gif">wuisabel-gif</a> · curated &amp; embedded with care.</sub>
