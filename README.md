<!-- Adapted from spike-html-hosting-sdk (v0.4.0): template/README.md, its site the root's hand
     pages beside the rendered pages of its two copied trees.
     Adapted from spike-html-hosting-sdk (v0.6.0): template/README.md, its screenshots line. -->

# spike-html-hosting

The GitHub Pages site of spike-html-hosting, the org stand-in, made from the template of
[spike-html-hosting-sdk](https://github.com/JaimeStill/spike-html-hosting-sdk) v0.6.1 and served
under `/spike-html-hosting/`. It pins
[spike-html-hosting-components](https://github.com/JaimeStill/spike-html-hosting-components)
v0.5.0 and the icons layer,
[spike-html-hosting-icons](https://github.com/JaimeStill/spike-html-hosting-icons) v0.1.0, whose
glyphs the build fills into every page's `<svg data-icon="octicon/<name>"></svg>` markers.

- Its hand pages are written as HTML: `index.html`, the index of every site;
  `briefs/orientation.html`, the orientation brief with diagrams; and the sitrep entries under
  `sitreps/`.
- Each Markdown file copied into `content/` is a page in `page.html`'s shell:
  standards-lab/.github's profile, the charter, under `content/github/`, and standards-lab/org's
  orientation brief under `content/org/`. `content.json` records each copied tree's source: its
  repository, the commit it was copied at, and each file's git blob hash.
- `public/sites.json` is the list of sites every page's site nav fetches.

## Tasks

- `mise run install`: install the pinned tools and node_modules; reads the network.
- `mise run check`: ESLint, with the check that no CSS module script is left in the build;
  Prettier, shellcheck, and actionlint; tsc's type check; the build; the unit tier, the copied
  trees against `content.json`; and the browser tier, the SDK's checks on every page the build
  writes in the pinned chrome-headless-shell. It reads no network.
- `mise run screenshots`: capture every page, light and dark, at 390px, 1120px, and 1376px.
- `mise run currency`: every pin behind its latest, the SDK's tag among them.
- `mise run cost`: one table per site, each live page's weight and the build, check, and
  push-to-live times of its Pages runs; reads the network and gh.

## Keeping pace with the SDK

The SDK is pinned by its release tag, in `package.json` and in both workflows'
`uses:` lines. To move to a newer release, bump the tag in all three, run `pnpm install`, and run
`mise run check`.

## Evidence

The spike's evidence is numbered in `context/README.md`, "The evidence". These are the review
task's three.

### 9. The review across every site

Evidence 9 is recorded from earlier tasks' work, not from a new capture pass.

- The screenshots task's `mise run screenshots` shows each site's captures inline in the terminal
  and removes its files at the end. A browser test in each site's check runs it once and asserts
  it leaves no capture file behind.
- At the design task's four checkpoints the architect reviewed all three sites at 390px, 1120px,
  and 1376px, light and dark, with the index's Help and Settings open.
- At this task's checkpoint 1 the architect reviewed the revised sqlate quick-start at all three
  widths, light and dark.

### 10. The CLI demo

Five VHS recordings sit on the sqlate site's quick-start,
https://jaimestill.github.io/spike-html-hosting-sqlate/docs/quick-start.html: under step 9, the
composed SQL; step 10, sqlint's findings; step 11, the program on PostgreSQL; and step 12, the
layered archive statement and cursor pages, then the org-scoped run. They record sqlint v0.3.0
and the revised guide's program.

- Each is committed as WebM with a WebP poster, behind an input-hash check. `mise run tapes`
  renders only the recordings whose inputs changed, and CI never renders.
- The sqlate site's `tapes/README.md` holds the practices: a 77x24 terminal, CaskaydiaMono at
  20px, `zenwritten_dark` rendered once for every site theme, one output per screen, and pauses
  sized to the output.
- The quick-start is revised in place from sqlate f2b2117. The revision includes a fix to step 1,
  without which step 5 doesn't build as published, and goes to sqlate at the intake.

### 11. Cost per site

`mise run cost` prints one table per site from the live sites and their Pages runs. These
numbers are its run of 2026-11-10, at SDK v0.6.1, over each site's merge and five
`workflow_dispatch` runs. Page weight is every response a page loads, cache off.

Page weight, per page, as Pages served it with gzip and as brotli 11 would compress it:

| Site         | Pages | Served median | Served max | Brotli median | Brotli max |
| ------------ | ----: | ------------: | ---------: | ------------: | ---------: |
| root         |     5 |       34.5 kB |    35.3 kB |       29.8 kB |    30.6 kB |
| architecture |    29 |       33.9 kB |    36.5 kB |       29.3 kB |    31.7 kB |
| sqlate       |     5 |       38.6 kB |   273.7 kB |       33.2 kB |   251.7 kB |

Build time, the median of Vite's "built in" and of the check step, and push-to-live, from a run's
creation to its deploy's reported success:

| Site         | Vite build | Check step | Merge    | Dispatch median | Dispatch max |
| ------------ | ---------: | ---------: | -------- | --------------: | -----------: |
| root         |     0.42 s |     32.6 s | 1 m 52 s |          56.4 s |       59.4 s |
| architecture |     0.49 s |     93.6 s | 6 m 24 s |        2 m 03 s |     2 m 06 s |
| sqlate       |     2.42 s |     55.0 s | 3 m 20 s |          85.5 s |       89.3 s |

- Pages serves gzip, not brotli. Brotli 11 would save only 11 to 15% on a typical page.
- Every page loads three JS files, its entry, the shared `index` chunk, and rolldown's runtime,
  about 21.5 kB served: the bulk of a page's weight.
- The sqlate quick-start is the outlier, at about 274 kB, 206 kB of it the five WebP posters. It
  loads no video bytes, since each video is `preload="none"`.
- GitHub's Pages deployment queue dominates push-to-live. The merge runs took 1m52s to 6m24s,
  against dispatch medians of about 56s, 2m, and 85s.
- The architecture site's check step, about 93s, is the longest build cost.
- Pages' CDN serves stale copies of a site's index for minutes after a deploy, and the index's
  Last-Modified can trail the deploy's reported success.
