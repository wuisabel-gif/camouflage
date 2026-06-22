/* ==================================================================
   My Favorite Font Collection — interactions
   - Renders specimens from a single data source
   - Live type tester drives every specimen at once
   - Scroll reveals (enhancement over already-visible content)
   ================================================================== */

const FONTS = [
  {
    name: "Asgerion",
    family: "Asgerion",
    tags: ["Display", "Fantasy"],
    accent: true,
    sample: "Northrealm",
    desc: "Carved, ceremonial capitals with a mythic, runic swing — built for titles, sigils, and anything that wants to feel forged rather than typed. Ships in three cuts.",
    variants: [
      { label: "Regular", family: "Asgerion", text: "Asgerion" },
      { label: "Line",    family: "Asgerion Line", text: "Asgerion" },
      { label: "Solid",   family: "Asgerion Solid", text: "Asgerion" },
    ],
    glyphs: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    match: ["display", "fantasy", "mysterious", "poster", "logo", "short", "quirky", "experimental", "bold"],
    best: "a fantasy title, game logo, or anything that should feel forged",
  },
  {
    name: "Steak Muroh",
    family: "Steak Muroh",
    tags: ["Display", "Heavy"],
    sample: "Loud & Proud",
    desc: "A chunky, confident headline face. All shoulders and weight — the one you reach for when the word itself is the whole design.",
    glyphs: "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",
    match: ["display", "bold", "loud", "heavy", "poster", "headline", "logo", "short", "punchy", "casual"],
    best: "a punchy headline or poster where one word carries everything",
  },
  {
    name: "Wonderful Combination",
    family: "Wonderful Combination",
    tags: ["Script", "Signature"],
    accent: true,
    sample: "with love,",
    desc: "A flowing signature script with generous connecting strokes. Equal parts wedding invite and storefront window.",
    glyphs: "abcdefghijklmnopqrstuvwxyz",
    match: ["script", "elegant", "refined", "invitation", "logo", "handcrafted", "calm", "short", "casual"],
    best: "an invitation, a signature, or a warm storefront wordmark",
  },
  {
    name: "Kids Brush",
    family: "Kids Brush",
    tags: ["Brush", "Handwriting"],
    sample: "made by hand",
    desc: "Fat, friendly brush lettering with an unfussy classroom-poster charm. The biggest file in the cabinet, and the most generous character set.",
    glyphs: "ABCDEFG abcdefg 0123456789 !?&",
    match: ["brush", "playful", "fun", "handcrafted", "kids", "poster", "casual", "punchy", "short"],
    best: "playful posters, kids’ products, and hand-made packaging",
  },
  {
    name: "Millwee Manuscripting",
    family: "Millwee Manuscripting",
    tags: ["Script", "Handwriting"],
    sample: "a note for you",
    desc: "Looser, everyday handwriting — the kind that reads like a margin note rather than a flourish. Warm, casual, quietly personal.",
    glyphs: "abcdefghijklmnopqrstuvwxyz",
    match: ["script", "handcrafted", "personal", "invitation", "casual", "calm", "short", "brush"],
    best: "personal notes, journals, and quietly handwritten touches",
  },
  {
    name: "Get Schwifty",
    family: "Get Schwifty",
    tags: ["Display", "Cartoon"],
    accent: true,
    sample: "GET SCHWIFTY",
    desc: "A bouncy, animated cartoon face with attitude to spare. Pure fun — stickers, merch, and anything that shouldn’t take itself seriously.",
    glyphs: "ABCDEFGHIJKLMNOPQRSTUVWXYZ 0123456789",
    match: ["display", "cartoon", "playful", "fun", "quirky", "poster", "logo", "punchy", "short", "experimental"],
    best: "stickers, merch, and loud cartoon branding",
  },
  {
    name: "Wubba Lubba Dub Dub",
    family: "Wubba Lubba Dub Dub",
    tags: ["Display", "Cartoon"],
    sample: "Wubba Lubba",
    desc: "Wild, wobbling letterforms that never sit still. The cabinet’s resident troublemaker — chaotic, expressive, impossible to ignore.",
    glyphs: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    match: ["display", "cartoon", "playful", "quirky", "fun", "experimental", "poster", "punchy", "short"],
    best: "chaotic, expressive posters that want to shout",
  },
  {
    name: "Rouletta",
    family: "Rouletta",
    tags: ["Script", "Monoline"],
    accent: true,
    sample: "Rouletta",
    desc: "A fine monoline signature script — thin, even strokes that loop with a calligrapher’s ease. Delicate where Wonderful Combination is bold; perfect for a name, a logotype, or a single graceful word.",
    glyphs: "abcdefghijklmnopqrstuvwxyz 0123456789",
    match: ["script", "elegant", "refined", "invitation", "logo", "signature", "calm", "short", "luxury"],
    best: "a delicate logotype, a name, or a single graceful word",
  },
  {
    name: "Adobe Garamond",
    family: "Adobe Garamond",
    tags: ["Serif", "Classic"],
    sample: "The quiet classic",
    desc: "A faithful cut of the Renaissance workhorse — warm, even, and endlessly readable. The collection’s one true text face: the right answer when there is a lot to read.",
    glyphs: "ABCDEFG abcdefg 0123456789",
    match: ["serif", "elegant", "refined", "classic", "formal", "body", "long", "readable", "luxury", "calm"],
    best: "body text, editorial, and classic, readable long-form",
  },
  {
    name: "ITC Tiffany",
    family: "ITC Tiffany Medium",
    tags: ["Serif", "Fashion"],
    accent: true,
    sample: "Atelier",
    desc: "A high-contrast, glamorous serif with couture flair — think perfume bottles and fashion mastheads. Comes in four cuts, from airy Light to a heavy condensed.",
    variants: [
      { label: "Light",        family: "ITC Tiffany Light",       text: "Tiffany" },
      { label: "Medium",       family: "ITC Tiffany Medium",      text: "Tiffany" },
      { label: "Demi Italic",  family: "ITC Tiffany Demi Italic", text: "Tiffany" },
      { label: "Heavy",        family: "ITC Tiffany Heavy",       text: "Tiffany" },
    ],
    glyphs: "ABCDEFG abcdefg 0123456789",
    match: ["serif", "elegant", "refined", "luxury", "fashion", "formal", "headline", "classic", "calm", "short"],
    best: "luxury, beauty, and fashion headlines with couture flair",
  },
  {
    name: "Care Bear Family",
    family: "Care Bear Family",
    tags: ["Display", "Cute"],
    sample: "So Sweet!",
    desc: "Round, bubbly, unapologetically cute display lettering. Sugar-rush energy for children’s brands, party invites, and anything that wants a hug.",
    glyphs: "ABCDEFG abcdefg 0123456789",
    match: ["display", "playful", "fun", "kids", "cute", "casual", "punchy", "short", "handcrafted"],
    best: "children’s brands, party invites, and sweet, cuddly products",
  },
  {
    name: "Complete",
    family: "Complete",
    tags: ["Display", "Heavy"],
    sample: "Heavyweight",
    desc: "A fat, rounded display sans with serious heft — chunky, confident strokes that land like a rubber stamp. For headlines and logos that need to hit hard.",
    glyphs: "ABCDEFG abcdefg 0123456789",
    match: ["display", "bold", "heavy", "loud", "poster", "headline", "logo", "punchy", "short"],
    best: "chunky headlines and stamp-like logos with real heft",
  },
];

/* ---------- Font matcher quiz ----------------------------------- *
 * Each answer contributes keywords; the font whose `match` list
 * overlaps the chosen keywords most is the recommendation.
 * ---------------------------------------------------------------- */
const QUIZ = [
  {
    q: "What are you making?",
    w: 2,
    options: [
      { label: "A logo or wordmark",        kw: ["logo", "short", "display"] },
      { label: "A big headline or poster",  kw: ["poster", "headline", "short", "bold", "display"] },
      { label: "Body text — lots to read",  kw: ["body", "long", "readable", "serif", "sans"] },
      { label: "An invitation or card",     kw: ["invitation", "script", "elegant", "short"] },
      { label: "Something fun for kids",    kw: ["kids", "playful", "fun", "cute"] },
      { label: "A luxury / fashion brand",  kw: ["luxury", "fashion", "elegant", "serif"] },
    ],
  },
  {
    q: "What personality should it have?",
    options: [
      { label: "Elegant & refined",        kw: ["elegant", "refined", "luxury", "serif", "script"] },
      { label: "Bold & loud",              kw: ["bold", "loud", "display", "heavy", "punchy"] },
      { label: "Playful & friendly",       kw: ["playful", "fun", "cartoon", "kids", "cute"] },
      { label: "Handcrafted & personal",   kw: ["handcrafted", "script", "brush", "personal"] },
      { label: "Mysterious & fantastical", kw: ["fantasy", "mysterious", "display", "experimental"] },
    ],
  },
  {
    q: "How formal is it?",
    options: [
      { label: "Formal & classic",        kw: ["formal", "classic", "serif", "elegant"] },
      { label: "Casual & relaxed",        kw: ["casual", "script", "brush", "sans", "clean"] },
      { label: "Quirky & experimental",   kw: ["quirky", "experimental", "cartoon", "fantasy", "fun"] },
    ],
  },
  {
    q: "What energy?",
    options: [
      { label: "Calm & quiet",        kw: ["calm", "elegant", "refined", "readable", "neutral"] },
      { label: "Energetic & punchy",  kw: ["punchy", "bold", "fun", "display", "loud"] },
    ],
  },
];

/* ---------- Render ---------------------------------------------- */
const root = document.getElementById("specimens");

const esc = (s) => s.replace(/[&<>"]/g, (c) =>
  ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

root.innerHTML = FONTS.map((f, i) => {
  const num = String(i + 1).padStart(2, "0");
  const tags = f.tags.map((t, j) =>
    `<span class="tag${j === 0 && f.accent ? " tag--accent" : ""}">${esc(t)}</span>`
  ).join("");

  const display = f.variants
    ? `<div class="variants">${f.variants.map((v) => `
        <div class="variant">
          <div class="variant__label">${esc(v.label)}</div>
          <div class="variant__line preview" style="font-family:'${v.family}'">${esc(v.text)}</div>
        </div>`).join("")}</div>`
    : `<div class="specimen__display preview" style="font-family:'${f.family}'">${esc(f.sample)}</div>`;

  return `
  <article class="specimen reveal" id="spec-${slug(f.name)}">
    <div class="specimen__head">
      <div class="specimen__id">
        <span class="specimen__num">${num}</span>
        <h2 class="specimen__name">${esc(f.name)}</h2>
      </div>
      <div class="specimen__tags">${tags}</div>
    </div>
    <p class="specimen__desc">${esc(f.desc)}</p>
    ${display}
    <details class="specimen__charset">
      <summary>
        <svg class="chev" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path d="M9 18l6-6-6-6"/></svg>
        Character set
      </summary>
      <div class="glyphs" style="font-family:'${f.family}'">${esc(f.glyphs)}</div>
    </details>
  </article>`;
}).join("");

/* ---------- Full library wall (every face, fonts load lazily) --- */
const libRoot = document.getElementById("library-grid");
const LIB = Array.isArray(window.FONT_LIBRARY) ? window.FONT_LIBRARY : [];

// Curated faces (and each of their cuts) belong in the cabinet too.
const CURATED_FACES = FONTS.flatMap((f) =>
  f.variants
    ? f.variants.map((v) => ({
        name: v.label === "Regular" ? f.name : `${f.name} ${v.label}`,
        family: v.family,
        cat: f.tags[0],
      }))
    : [{ name: f.name, family: f.family, cat: f.tags[0] }]
);

const ALL_FACES = CURATED_FACES.concat(LIB);

if (libRoot && ALL_FACES.length) {
  libRoot.innerHTML = ALL_FACES.map((f) => `
    <figure class="lib-cell">
      <div class="lib-cell__sample preview" data-libfamily="${esc(f.family)}">${esc(f.name)}</div>
      <figcaption class="lib-cell__meta">
        <span class="lib-cell__name">${esc(f.name)}</span>
        <span class="lib-cell__cat">${esc(f.cat)}</span>
      </figcaption>
    </figure>`).join("");

  // Apply the real face to each cell progressively (small batches per frame)
  // so 100+ font files don't all block at once. font-display:swap shows the
  // name immediately and swaps the face in when ready.
  const samples = Array.from(libRoot.querySelectorAll(".lib-cell__sample"));
  let li = 0;
  const applyBatch = () => {
    const end = Math.min(li + 12, samples.length);
    for (; li < end; li++) {
      samples[li].style.fontFamily = "'" + samples[li].dataset.libfamily + "'";
    }
    if (li < samples.length) setTimeout(applyBatch, 30);
  };
  setTimeout(applyBatch, 400);
}

/* ---------- Live tester ----------------------------------------- */
const input    = document.getElementById("tester-input");
const sizeEl    = document.getElementById("tester-size");
const sizeOut   = document.getElementById("tester-size-out");
const resetBtn  = document.getElementById("tester-reset");

const previews  = Array.from(document.querySelectorAll(".preview"));
const displays  = Array.from(document.querySelectorAll(".specimen__display"));

// remember each preview's original word so Reset / empty input restores it
previews.forEach((el) => { el.dataset.default = el.textContent; });

function applyText(value) {
  const v = value.trim();
  if (v !== "") document.body.classList.add("has-typed"); // reveal specimens, once
  previews.forEach((el) => {
    el.textContent = v === "" ? el.dataset.default : value;
  });
}

function applySize(px) {
  sizeOut.textContent = px + "px";
  displays.forEach((el) => el.style.setProperty("--specimen-size", px + "px"));
}

input.addEventListener("input", (e) => applyText(e.target.value));
sizeEl.addEventListener("input", (e) => applySize(e.target.value));

resetBtn.addEventListener("click", () => {
  input.value = "";
  applyText("");
  sizeEl.value = 100;
  applySize(100);
  input.focus();
});

/* ---------- Font matcher ---------------------------------------- */
const quizRoot   = document.getElementById("matcher-quiz");
const resultRoot = document.getElementById("matcher-result");

if (quizRoot && resultRoot) {
  const answers = new Array(QUIZ.length).fill(null);

  quizRoot.innerHTML = QUIZ.map((step, qi) => `
    <fieldset class="quiz__q">
      <legend class="quiz__legend"><span class="quiz__n">${qi + 1}</span>${esc(step.q)}</legend>
      <div class="quiz__opts" role="radiogroup" aria-label="${esc(step.q)}">
        ${step.options.map((o, oi) => `
          <button type="button" class="chip" role="radio" aria-checked="false"
                  data-q="${qi}" data-o="${oi}">${esc(o.label)}</button>`).join("")}
      </div>
    </fieldset>`).join("");

  const findBtn = document.getElementById("matcher-go");

  quizRoot.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    const qi = +chip.dataset.q, oi = +chip.dataset.o;
    answers[qi] = oi;
    chip.parentElement.querySelectorAll(".chip").forEach((c) => {
      const on = c === chip;
      c.classList.toggle("chip--on", on);
      c.setAttribute("aria-checked", on ? "true" : "false");
    });
    findBtn.disabled = answers.every((a) => a === null);
  });

  function recommend() {
    // weighted tally of chosen keywords (the use-case question counts more)
    const weight = {};
    let any = false;
    answers.forEach((oi, qi) => {
      if (oi === null) return;
      any = true;
      const w = QUIZ[qi].w || 1;
      QUIZ[qi].options[oi].kw.forEach((k) => { weight[k] = (weight[k] || 0) + w; });
    });
    if (!any) return;

    const scored = FONTS.map((f) => ({
      font: f,
      score: f.match.reduce((n, k) => n + (weight[k] || 0), 0),
    })).sort((a, b) => b.score - a.score);

    const top = scored[0];
    const others = scored.slice(1, 4).filter((s) => s.score > 0);

    resultRoot.innerHTML = `
      <div class="result__card reveal in">
        <p class="result__kicker">Your match</p>
        <p class="result__name">${esc(top.font.name)}</p>
        <p class="result__sample" style="font-family:'${top.font.family}'">${esc(top.font.sample)}</p>
        <p class="result__why">Best for ${esc(top.font.best)}.</p>
        <div class="result__actions">
          <a class="btn btn--solid" href="#spec-${slug(top.font.name)}">See the specimen</a>
          <button type="button" class="btn" id="matcher-reset">Start over</button>
        </div>
        ${others.length ? `<p class="result__alts">Also worth a look:
          ${others.map((s) => `<a href="#spec-${slug(s.font.name)}">${esc(s.font.name)}</a>`).join(" · ")}</p>` : ""}
      </div>`;

    resultRoot.scrollIntoView({ behavior: "smooth", block: "nearest" });

    // "See the specimen" / alternates reveal the (otherwise hidden) catalog
    resultRoot.querySelectorAll('a[href^="#spec"]').forEach((a) => {
      a.addEventListener("click", () => document.body.classList.add("has-typed"));
    });

    document.getElementById("matcher-reset").addEventListener("click", () => {
      answers.fill(null);
      quizRoot.querySelectorAll(".chip").forEach((c) => {
        c.classList.remove("chip--on");
        c.setAttribute("aria-checked", "false");
      });
      findBtn.disabled = true;
      resultRoot.innerHTML = "";
      quizRoot.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  findBtn.addEventListener("click", recommend);
}

/* ---------- Scroll reveal (enhances visible content) ------------ */
const reveals = Array.from(document.querySelectorAll(".reveal"));
const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (prefersReduced || !("IntersectionObserver" in window)) {
  reveals.forEach((el) => el.classList.add("in"));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        io.unobserve(entry.target);
      }
    });
  }, { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
  reveals.forEach((el) => io.observe(el));
}
