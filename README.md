# Welcome to [Slidev](https://github.com/slidevjs/slidev)!

To start the slide show:

- `pnpm install`
- `pnpm run dev`
- visit <http://localhost:3030>

Edit the [slides.md](./slides.md) to see the changes.

Learn more about Slidev at the [documentation](https://sli.dev/).
# One Tool, Many Domains — ISA Wizard Talk

A 25-minute conference deck built with [Slidev](https://sli.dev), based on the
IB2026 abstract "One Tool, Many Domains: Harmonizing FAIR Metadata Collection
with the ISA-Wizard".

Redesigned to follow a "less text, more visual" slide style: one idea per
slide, icon-based cards instead of bullet lists, headline-style titles, and
generous negative space.

## Run it locally

```bash
pnpm install       # or: npm install
pnpm run dev       # opens http://localhost:3030
```

## Export to PDF / PPTX

```bash
pnpm add -D playwright-chromium   # required once for export
pnpm run export                   # -> slides-export.pdf
pnpm run export -- --format pptx  # -> slides-export.pptx
```

## Structure (~24 slides, ~25 min)

1. Title
2. Hook — "more data, less value"
3. Dark data — definition (quote layout)
4. The bottleneck is context, not volume
5. Metadata enables: integrated / compared / reused (card grid)
6. Section: Enter the ISA Wizard
7. Old way vs. ISA Wizard way (two-block comparison)
8. Built on the ISA standard (Investigation / Study / Assay cards)
9. The old barrier: ISA-Tab / ISA-JSON syntax
10. The real innovation: ask questions, not syntax
11. Section: Plant phenotyping
12. MIAPPE-compliant by design (genotype x environment cards)
13. ARC: one package (data / metadata / environment cards)
14. Feeding the IPK Phenosphere (BrAPI4PSI flow diagram)
15. Section: Animal phenotyping
16. From plants to animals (ELIXIR BioHackathon)
17. Section: Multi-omics & systems biology
18. One framework, every data type (card grid)
19. Callback statement slide
20. Why this matters (card grid)
21. Recap: the story in five ideas (card grid)
22. Thank you / Q&A

Speaker notes are included on every slide (press `2` in presenter view, or `p`
in the browser to open presenter mode). A reminder to use the `B` key to
blank the screen during Q&A is noted on the final slide.

## Design choices

- **One idea per slide** — multi-point slides from the first draft were split
  or reduced to a single headline + one supporting visual.
- **Cards over bullets** — most bulleted lists became icon + short-label card
  grids (`grid grid-cols-3 gap-6 ...` divs with Material Design icons via
  `@iconify-json/mdi`).
- **Headline-style titles** — titles state the takeaway ("The bottleneck isn't
  data. It's context.") rather than the topic ("Metadata Bottleneck").
- **Limited palette** — a single emerald accent color on a light background,
  no more than 2–3 colors per slide, to keep contrast high.
- **Negative space** — card grids and flow diagrams have generous margins;
  no slide is packed edge-to-edge.