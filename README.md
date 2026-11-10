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
  trees against `content.json` and the cost command's pure parts; and the browser tier, the SDK's
  checks on every page the build writes in the pinned chrome-headless-shell. It reads no network.
- `mise run screenshots`: capture every page, light and dark, at 390px, 1120px, and 1376px.
- `mise run currency`: every pin behind its latest, the SDK's tag among them.
- `mise run cost`: one table per site, each live page's weight and the build, check, and
  push-to-live times of its Pages runs; reads the network and gh.

## Keeping pace with the SDK

The SDK is pinned by its release tag, in `package.json` and in both workflows'
`uses:` lines. To move to a newer release, bump the tag in all three, run `pnpm install`, and run
`mise run check`.

## Evidence

This section records all twelve evidence items, numbered as `context/README.md`, "The evidence",
numbers them. Each says what was shown and where it is proven, and where the proof falls short.

### 1. Three project sites

Each of the three sites is built by Vite and deployed from its build output by its own Pages
workflow, which calls the SDK's reusable workflow: the check, then the upload and the deploy, on
each push to main.

- Live: https://jaimestill.github.io/spike-html-hosting/,
  https://jaimestill.github.io/spike-html-hosting-architecture/, and
  https://jaimestill.github.io/spike-html-hosting-sqlate/ each answered 200 on 2026-11-10.
- Each site's `mise run check` runs the Vite build and ESLint's leftover check over its output
  (evidence 7).
- All three are JaimeStill project sites under `/<repo>/`. None is served at an origin root, as
  an org site would be.

### 2. The org stand-in

The root holds the charter, standards-lab/.github's profile rendered from Markdown; an index
linking every site; and a hosted persistent report, the sitrep entry of 2026-11-06. Every page is
correct under its `/spike-html-hosting/` base.

- The root's browser tier runs the SDK's shell checks on each of its five pages, its "the index
  lists every site sites.json lists, in its order, each at its base" test, and the SDK's crawl,
  "the crawl checks every copied page of both trees, the hand pages loaded".
- Live at https://jaimestill.github.io/spike-html-hosting/, built by the org task, PR #7.
- The base is a project site's. The root was never served at the origin root, where the real org
  site would sit.

### 3. The architecture stand-in

The architecture site renders the 29 front-matter pages of its pinned copy, each page's front
matter as head meta, and every relative `.md` link resolved across the site.

- The architecture site's browser tier runs the SDK's crawl, "the crawl reaches every page
  content.json records". It holds each page's head to exactly one meta per front matter key, in
  order, and nothing else (the exact check SDK v0.6.1 added), and follows every in-site link to
  a built page and its fragment's element.
- The build fails on a relative link it can't place. Links to files that aren't copied go to the
  github.com blob at the pin.
- The copy is the 29 front-matter pages of the repository's 32 .md files. CLAUDE.md,
  STANDARDS.md, and context/README.md are left out.

### 4. The sqlate stand-in

The sqlate site renders its README index and docs/ guide, five pages, each with the section tree
and a pager. The tree shows its key hints in `kbd`; J and K move between sections and leave the
arrow keys to the browser's scrolling. The pager's H and L move to the previous and the next page.

- The components' browser tier proves the tree: "J from the top moves to the first section, then
  J and K to the next and the previous" and "the arrows stay the browser's scrolling, firing no
  binding and never cancelled", among the `sl-section-tree` tests.
- The sqlate site's browser tier runs the SDK's crawl, "the crawl reaches every page content.json
  records". On every page it checks the tree in its Contents drawer, both pagers' links in the
  site index's order, and H and L pressed at 390px landing on their pages.

### 5. Shared navigation when one site deploys ahead

Verdict: the built-in list skews when one site deploys ahead; the fetched list converges. Only
the root fetches its list; the architecture and sqlate sites use the list built into their
components release.

- The components' browser tier proves both sides on fixture sites. With no `src`, "the site ahead
  lists four sites and the sites behind three". With `src` naming the org's list, "the site ahead
  and the site behind both list its four". The built list is painted first and kept on any
  failed fetch.
- Live, on 2026-11-06, after PR #7 deployed: `sites.json` was served with `max-age=600`. In the
  pinned chrome-headless-shell the root's index painted first at 308 ms with the built list, and
  the fetch ran from 284 ms for 204 ms.
- The skew and the convergence are proven only on one local origin, by those fixture tests. The
  live sites all list the same three sites, so no deploy ahead was seen live. A returning reader's
  browser may hold the fetched list for up to ten minutes.

### 6. One baseline pin and a theme across sites

Every site pins spike-html-apps-foundation v0.3.0 by its git tag, and the reader's stored theme
carries across sites on the shared origin.

- The components' browser tier proves it on two bases of one local origin: "a theme saved on one
  site applies before first paint on the other", saved through the menu, and "a palette the other
  site doesn't register falls back to its default and stays stored".
- Live, on 2026-11-06: a catppuccin dark theme stored on the root applied on all three deployed
  sites, each with `data-palette="catppuccin"`, `data-scheme="dark"`, and the same background.
- The live run set the preference in storage directly, in the shape the foundation's `save()`
  writes, not through the menu.

### 7. No CSS module script in any build

No build output holds a CSS module script, so Safari loads every page.

- Each site's `mise run check` runs the SDK's ESLint leftover check over its build output. The
  SDK's unit tier proves the check on fixtures: it "fails on a build still holding a CSS module
  script, in every form".
- This is proven only by the check. No page was loaded in Safari.

### 8. The HTML/Markdown line

Verdict: Markdown rendered at build is the default. Write a page by hand as HTML only where a
diagram earns it, for briefs/ and for v1.harness.sitrep's entries.

- The root holds the coordinator's orientation brief both ways: rendered from its Markdown, and
  by hand as HTML with two diagrams. It also holds a dated sitrep entry written by hand as HTML.
  Both were built in the org task, PR #7.
- The hand orientation brief cost 3.6 times the drafting tokens, 5,095 against 1,397, counted
  with Gemma 4's tokenizer, for 9% more brotli bytes, and a second source to keep in step.
- The hand sitrep entry cost 1.9 times the tokens of its Markdown draft, 5,271 against 2,764,
  and ships about 4 KB brotli, readable with no build.
- Tokens were counted with Gemma 4's tokenizer, since no Anthropic tokenizer runs offline.

### 9. The review across every site

Evidence 9 is recorded from earlier tasks' work, not from a new capture pass.

- The screenshots task's `mise run screenshots` shows each site's captures inline in the terminal
  and removes its files at the end. A browser test in each site's check runs it once and asserts
  it leaves no capture file behind.
- At the design task's four checkpoints the architect reviewed all three sites at 390px, 1120px,
  and 1376px, light and dark, with the index's Help and Settings open.
- At the review task's first checkpoint the architect reviewed the revised sqlate quick-start at
  all three widths, light and dark.

### 10. The CLI demo

Verdict: recorded terminal demos are not worth the overhead for a docs guide whose text shows the
output. The review task built them and removed them.

- It recorded sqlint v0.3.0 and the revised guide's program through VHS: five recordings under
  the sqlate quick-start's steps 9 to 12, committed as WebM with WebP posters behind a hash of
  their inputs, rendered locally with vhs, ttyd, ffmpeg, Docker, and the pinned headless shell,
  never in CI.
- The guide already prints every output the recordings showed, as text a reader can search, copy,
  and read with a screen reader. What the recordings added was motion, for commands that finish
  in under three seconds.
- They cost a second mise environment for the render tools, four scripts of hashing, placement,
  and tape checks, a re-render on every change to the guide's program (three in the one task),
  and 206 kB of posters on the quick-start. The architect removed them, and the program the check
  held the guide to, at the task's second checkpoint.
- What stays is the quick-start, revised in place from sqlate f2b2117 and proposed to sqlate at
  the intake. The revision fixes step 1, without which step 5 doesn't build as published, prints
  the SQL PostgreSQL receives, shows what sqlint catches, and adds a step that layers the
  library's guard patterns with the program's own. The program it was proven against built,
  passed its tests and sqlint, and ran on PostgreSQL 18 before its removal.

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
- The sqlate quick-start was the outlier, at about 274 kB, 206 kB of it the five recordings' WebP
  posters, measured before evidence 10's recordings were removed; it loaded no video bytes, since
  each video was `preload="none"`.
- GitHub's Pages deployment queue dominates push-to-live. The merge runs took 1m52s to 6m24s,
  against dispatch medians of about 56s, 2m, and 85s.
- The architecture site's check step, about 93s, is the longest build cost.
- Pages' CDN serves stale copies of a site's index for minutes after a deploy, and the index's
  Last-Modified can trail the deploy's reported success.

### 12. One icon toolkit

One icon toolkit, spike-html-hosting-icons v0.1.0, releases Octicons as one module per icon. The
SDK's build fills each page's glyph markers from it, so a build ships only the icons its pages
name: the architecture, sqlate, and root builds ship 6, 6, and 7 of its 986 Octicons.

- The icons layer's unit tier holds a fixture build to exactly the icons it imports, "carries
  exactly the imported icons' markup", and refuses a set whose licence shipping its text doesn't
  satisfy. Its browser tier checks the browse page, every released icon in every profile.
- Each site's browser tier runs the SDK's `showsGlyphs` shell check: each header button, and each
  dialog's Close, shows its one glyph, the icons layer's own markup.
- Every set is available while designing only through the generator: v0.1.0 releases Octicons
  alone, and another set joins with a minor release.
