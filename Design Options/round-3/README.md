# Round 3: three directions

Built October 30, 2026 on Version 1.8 content. Brief: more professional, more
technical, more designed. Each direction is two pages, Home and the Home Lab case
study, rendered from the live 1.8 text so only design differs.

Preview from the repo root:

    py preview.py "Design Options/round-3"

then open http://localhost:8000/

## 1, Elevate
Version 1.8's skeleton at a much higher finish: frosted sticky header, textured
graphite band, a real type scale, motion, and a numbered contents rail on long
pages. Fonts unchanged (Space Grotesk, Inter, JetBrains Mono). Lowest risk.

## 2, Console
Near-black hairline panels in Geist and Geist Mono. The home hero ends in a
readout of the home lab whose numbers are computed from the case study (VLANs,
roles, public ports, checks passed). Projects in a bento grid led by the Home
Lab, whose card shows the real segment table until the diagram exists.
Commits every page, including the honors essays, to dark.

## 3, Schematic
Light, with a faint drafting grid. Very large Instrument Sans headlines, figures
with crop marks and FIG. numbers, the fact strip as a drawing title block, and
the case study set as an article with section marks and notes in the margin.
Biggest departure.

## Kept in all three
- Standing rules from styles.css: green means live or pass, amber means in
  progress or open, nothing else gets colour, images on a dark ground get a
  border and radius.
- JavaScript is optional polish (assets/enhance.js): scroll reveals, the active
  contents entry, a pointer highlight on Console cards. With it off, every page
  renders and navigates; with reduced motion requested, nothing animates.
- Monospace chrome, the photo, project cards, and the verification log, which
  rounds one and two showed you rank above anything decorative.

## Not checked
Typefaces could not load in the render environment used to check these, so
layout was verified but type was not. Judge the type on your own machine.
