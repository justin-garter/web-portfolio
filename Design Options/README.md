# Design Options

> **ARCHIVE — August 2026.** Direction 7 (`7-working`) was chosen and became the live
> site. These files link assets from a `Version 1.4/` folder that has since been deleted,
> so **images and nav links in these previews are broken**. The reasoning below is the
> reason to keep them; the previews no longer render correctly.


Six directions for justingarter.com. Each folder holds a home page, the
`self-hosted-portfolio.html` project page, and one self-contained stylesheet.
Double-click any `index.html` to open it from disk. Nav links and images resolve to
`../../Version 1.4/`, so every nav item works and nothing is duplicated.

**Round one (1–3) was judged: Original > 3 > 1 >> 2.** Round two is 4–6.

---

## What round one got wrong

Directions 1 and 2 failed the same way, and it's worth naming because it shaped 4–6.
Your brief said monospace is reserved for data, so I pulled JetBrains Mono off the
nav, the buttons, the tags, and the `//` eyebrow. I also swapped the teal, dropped
Sora, and lightened the navy. Each move was defensible on its own and the total
effect was to remove most of what gives the original a face — which is exactly why
you ranked a *tidier* version below the thing it was tidying. Direction 3 ranked
higher because it **added** something (specification, readouts, the verification log)
rather than subtracting.

So: **monospace goes back into the nav, buttons, tags, and eyebrows in all three new
directions.** Revealed preference beat the stated rule. If you actually want the rule
enforced, say so and I'll pull it back out — but I don't think you do.

All three of 4–6 keep the original's family traits: navy, horizontal top nav,
monospace chrome, the `//` eyebrow, your photo, and project cards. All three inherit
direction 3's evidence layer. They differ in structure, palette, type, and register.

---

## 4 — Amplify

**The original, turned up rather than sanded down.** The skeleton is untouched:
sticky navy header with monospace nav, hero with the statement left and your photo
right, the node-divider traceroute rule, four quick-fact cards, About, three project
cards. What changes is density and correctness. The type scale is rebuilt — your
current `h1` and `h2` clamps cross over, so at narrow widths the `h2` renders larger
than the `h1`; that's fixed, along with putting every gap on one 4px scale. Each fact
card now closes on a monospace count, so the strip scans as a readout rather than four
lists. Each project card ends in a monospace meta bar carrying status, date, and
stack. The project page is where the real gain is: "Technologies Used" — a heading you
already had sitting over three logos — now carries a ten-row specification, and the
prose is interleaved with a before/after load table, a resource-ceilings strip, and
the verification log. **Optimizes for** being the version you'd actually ship: it is
recognizably your site, and every addition is evidence rather than decoration.
**Trades away** surprise — nobody will call it a redesign, and if what you wanted was
a different site, this isn't it. **Palette:** navy `#16233F` and amber unchanged; teal
→ **`#136B45`**, a deep verdant green at 6.5:1 on white, chosen because green already
means live/pass/verified across your status pills. **Typography:** Space Grotesk /
Inter / JetBrains Mono. Space Grotesk has Sora's geometric character with more
engineering in it — squarer terminals, tighter spacing — so the headings keep a face
instead of going neutral the way Inter Tight did in direction 1. JetBrains Mono comes
back because it's yours and it's doing real work again.

## 5 — Night

**Direction 3's density, rebuilt on your identity instead of a neutral near-black.**
The ground is `#0D1420` — your navy taken down rather than a generic dark grey — so it
reads as the same site after hours. Three things direction 3 dropped come back: the
photo (framed on a panel with a monospace strip beneath it, the way every other object
on the page is framed), project cards instead of table rows, and the horizontal
monospace nav. The structural break from 3 is the **section bar**: a rule across the
full measure carrying a label on the left, the heading next to it, and a count or note
pushed right — replacing 3's sticky left gutter. On the project page the bars are
numbered 01–06, which gives an 1,800-word page a spine without needing a table of
contents. Everything else from 3 survives: eight-cell specification grid, the diagram
on its own white plate (inverting it would destroy its colour key), before/after load
table, resource readouts, verification log. **Optimizes for** the thing you already
told me worked — dark, dense, instrument-like — while fixing 3's two real losses, the
missing face and the missing cards. **Trades away** printing, and it commits you to
dark on every page including the honors reflections, which are long-form reading.
**Palette:** ground `#0D1420`, green `#34C77B` at 8.6:1 for live/pass, and your
original teal survives as `#3FB6C6` for ordinary links — so green keeps meaning
"verified" instead of just meaning "link". **Typography:** Chivo / Inter / Azeret
Mono. Chivo is a sturdier, more upright grotesque than Archivo was in 3, which stops
the headings from feeling thin against a dark ground; Azeret Mono is geometric and
slightly wide, which suits readouts and short labels and stays out of the way at 11px.

## 6 — Split

**Navy above, light below, with the facts strip straddling the seam.** The page opens
as one continuous dark block — header and hero together, no border between them — then
hands off to a light ground for everything that has to be read closely. The four
quick-fact cards are pulled up into the navy so they cross the boundary, which is what
makes the seam look deliberate. Featured work abandons the even three-up grid for
**one lead card and two compact ones**, with the compact cards putting a small
thumbnail beside the text rather than above it. That's the one hierarchy change in
this round: an even grid claims all three projects are equally finished, and they
aren't — so Self-Hosted Personal Portfolio takes the lead slot and Home Lab, which has
no write-up, takes a compact one. The project page opens in the same navy band and
lets the network diagram straddle the seam the way the fact cards do on the home page.
**Optimizes for** first impression — this is the direction a recruiter reacts to in
the first two seconds, and the dark-to-light handoff gives the page a shape the
original doesn't have. **Trades away** the most: it's the biggest departure of the
three, the navy band eats vertical space above the fold, and the lead-card layout
means one project visibly outranks the others, which you may not want as the home lab
fills in. **Palette:** navy `#142339` for the band and footer, `#F5F7FA` below,
green `#0F6E49` on light and `#4ED08C` on navy. **Typography:** Outfit / Public Sans /
IBM Plex Mono. Outfit is rounder and more open than Space Grotesk or Chivo, which
suits a direction whose job is warmth and impact rather than instrumentation; Public
Sans is a plain, slightly wide text face that holds up at 17px in long paragraphs, and
IBM Plex Mono is the quietest of the three monos, which it needs to be when the
headings are already doing the talking.

---

## Which I'd pick

**4 — Amplify.** You ranked the original above everything I built, which means the
highest-probability win is the direction that keeps the original intact and adds the
one thing it's missing: evidence. Direction 3 placed second because of what it did
with your content, and 4 has all of that — the specification, the load table, the
readouts, the verification log — inside the site you already like. Nothing about it
asks you to accept a new identity in exchange.

**5 is 4's night mode**, deliberately. I kept their skeletons close so the choice
between them is genuinely just "light or dark" rather than a bundle of confounded
decisions. If dark is what drew you to 3, run 5 and you lose nothing structural.

**6 is the risk.** It's the best-looking of the three on first contact and the one I'd
be least confident about in six months, because the lead-card hierarchy fights you as
the home lab and future projects fill in.

Whichever wins, the **verification log** is the part to keep. It's a content
structure, not a visual treatment, and the row that reads *Not yet run* — because you
wrote that you haven't done that bare-host rebuild — is the single most credible thing
on the page. It works in all six.

---

## Notes on all three

- **Zero JavaScript.** Sub-menus open on `:hover` / `:focus-within` as they already
  did; the mobile toggle is replaced by nav that wraps to a second row. Nothing needs
  a script to render or to navigate.
- **Content is unchanged.** The only text I wrote is table captions, column heads,
  section numbers, and the Home Lab empty state ("Write-up in progress"). Every number
  and claim is lifted from your prose.
- **No red anywhere.** With this many pass states, red has to keep meaning failure.
  In-progress is a single restrained amber in each palette.
- **Bars only where a ceiling exists.** Memory gets one (76 MB of 384 MB). Temperature
  doesn't — you never stated a thermal ceiling, and I wasn't going to invent a
  denominator to make the row look symmetrical.
- **Contrast** against WCAG AA: lowest text pair in round two is 5.0:1 (muted grey on
  the light grounds in 4 and 6). Body text is 9:1 or better; direction 5's primary
  text is 15.7:1. Focus rings are 2px with a 3px offset on every interactive element,
  and each page has a skip link.
- **Weight** is unchanged from what you serve now — same images, one stylesheet, no
  scripts. Only the Google Fonts `@import` differs per direction.
- **Not browser-verified.** The Chrome extension isn't connected on this machine, so
  these are checked structurally: 156 local references resolve, tags balance, one `h1`
  per page, no skipped heading levels, zero `<script>` tags. Give your own eye to the
  nav wrap at narrow widths and, in direction 6, the straddle overlap at small
  viewports where the fact cards ride up into the navy.

---

## Round one, for reference

- **1 — Refine** (light, deep forest green, Inter Tight / Inter / IBM Plex Mono):
  a disciplined tightening that removed too much character. Superseded by 4.
- **2 — Depart** (warm paper, left rail, Source Serif): the sidebar-and-serif dossier.
  Judged horrible; nothing from it carried forward.
- **3 — Reinvent** (near-black, Archivo / Inter / JetBrains Mono): the status board.
  Judged best of round one; its density, specification grid, readouts, and
  verification log carry into all of 4, 5, and 6.
