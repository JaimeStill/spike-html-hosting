# spike-html-hosting

spike-html-hosting builds the repositories' GitHub Pages sites and hosts persistent artifacts,
as native web over experiment.html's stack. Three JaimeStill project sites stand in for the
organization: this repository for org (the charter, the hosted artifacts, and an index of every
site), spike-html-hosting-architecture for the architecture repository, and
spike-html-hosting-sqlate for a code repository's docs/ guide. They share one documentation
components layer, spike-html-hosting-components, released by tag. Its answer is evidence for
experiment.html's intake on the Pages topology v1.client and v1.repository-docs build, and on
whether v1.harness.sitrep and the coordinator's briefs/ publish HTML. The spike decides nothing
itself.

The spike is the sub-goal `experiment.html.spike-html-hosting` in the coordinator's roadmap,
`standards-lab/context/roadmap.toml`, where its tasks live. Its question is framed in
`standards-lab/context/html-artifacts.md`, under "Experiment: spike-html-hosting".

## The question

What do the repositories' Pages sites and the hosting of persistent artifacts look like,
published as native web? The hypothesis: architecture is its own project site; org holds the
charter and the hosted artifacts and links to every project site; each code repository serves
its own docs/ guide.

## The evidence

1. Three project sites, each built by Vite and deployed from its build output by its own Pages
   workflow.
2. The org stand-in: a charter page, an index linking every site, and a hosted persistent
   report, correct under its `/<repo>/` base path.
3. The architecture stand-in: its pages rendered with their front matter as head meta, relative
   `.md` links resolved across the site.
4. The sqlate stand-in: its README index and docs/ guide with the section tree (key hints in
   `kbd`, and J and K section keys that leave the arrow keys to scrolling) and a pager, H and L,
   on each copied page.
5. Shared navigation on every site that stays correct when one site deploys ahead of the
   others, with build-time-by-tag measured against fetched-at-runtime.
6. One baseline pin, with the reader's stored theme carrying across sites on the shared origin.
7. No CSS module script left in any build output, so Safari loads every page.
8. The HTML/Markdown line, shown by example: the coordinator's `briefs/orientation.md` as HTML
   beside its Markdown, and a dated sitrep-style entry, with a verdict for briefs/ and for
   v1.harness.sitrep.
9. A review that shows each site's pages inline and leaves no capture file behind.
10. A VHS-recorded CLI demo embedded in a docs page.
11. Cost per site: brotli page weight, build time, and push-to-live time.
12. One icon toolkit, every set available while designing, each build shipping only the icons it
    uses.

## Capabilities

- **Sites:** three Pages project sites, each built by Vite and deployed by its own workflow.
- **Content:** Markdown sources rendered at build, with front matter as head meta, resolved
  links, and a pager to the previous and the next page.
- **Site SDK:** spike-html-hosting-sdk, released by tag: the template each site is scaffolded
  from, the build and check pieces, and the reusable workflows.
- **Documentation components:** the section tree, the site index, the drawers that hold them,
  and cross-site navigation, released by tag.
- **Artifacts:** the charter, the hosted report, and the HTML/Markdown line.
- **Icons:** spike-html-hosting-icons, released by tag: a generator that builds any Iconify set
  whose licence is satisfied by shipping its text, Octicons released alone as one svg-string
  module per icon, and a dev-only browse page of every released glyph. The SDK's build fills each
  page's glyph markers and draws the alert callouts' glyphs from the package, so a build ships
  only the icons it uses.
- **Review and demos:** the screenshot review, and VHS-recorded CLI demos, built and then
  rejected (README, "Evidence", 10).
- **Answer:** all twelve evidence items recorded in the root README's "Evidence", and the answer
  below, written by the answer task.

## Path

The tasks, in the order they run; each cites the evidence it proves.

1. `layers`: the three repositories created; every site built and deployed by Pages under its
   base path, with the no-CSS-module-script check (evidence 1, 7).
2. `content`: the pinned architecture and sqlate copies rendered at build (evidence 3, 4).
3. `screenshots`: `mise run screenshots` on every site, with spike-html-apps-tooling's bin.
4. `template`: the shared site files in place of the hand copies: a site SDK released by tag,
   whose release carries the template that one scaffold command copies into a new site.
5. `highlighting`: code fences highlighted at build by the SDK's renderer, each palette's code
   in the colors of the editor theme the palette comes from.
6. `components`: the documentation components, released and pinned on every site
   (evidence 4, 6).
7. `org`: the charter, the index, the hosted report, shared navigation measured, and the
   HTML/Markdown line (evidence 2, 5, 8).
8. `icons`: one icon toolkit, spike-html-hosting-icons, its glyphs on every site's header
   buttons, section tree, drawer, and alert callouts (evidence 12).
9. `design`: the design review of the three sites.
10. `review`: the review across every site, the sqlint VHS demo, and the cost per site
    (evidence 9, 10, 11).
11. `answer`: the Pages topology, the root URL option, and the components layer's verdict, done:
    every evidence item recorded in the root README and the answer written ("The answer").

## Building the sites

- spike-html-hosting-sdk owns every file the sites share: the Vite plugins, the Markdown
  renderer with its highlighting and syntax themes, the ESLint configuration with the leftover
  check, the tsconfig and Prettier bases, `site.css`, `served()`, the shell checks, the palette
  check, the crawl, the capture description, the currency bin, and the reusable workflows. Its
  README documents each export.
- Each site was scaffolded from the SDK's template at v0.1.0, by
  `pnpm dlx github:JaimeStill/spike-html-hosting-sdk#v0.1.0 <repo>`. The three existing sites
  were scaffolded into a scratch directory and the copy moved over them, keeping each site's
  notes, marathon configuration, history, and copied tree, if it has one.
- Every site pins the SDK at v0.6.1, spike-html-hosting-components at v0.5.0, and the icons
  layer, spike-html-hosting-icons, at v0.1.0, the tags that SDK's template names. A site keeps
  pace with the SDK by bumping its tag in `package.json` and in both workflows' `uses:` lines.
- The icons layer releases Octicons as one module per icon, `octicon/<name>`, each a complete
  svg string, 1em square in `currentColor`. A page places a glyph as a marker,
  `<svg data-icon="octicon/<name>"></svg>`, which the SDK's `markdownPages` fills at build on
  every page it writes, hand pages included, so a build ships only the icons its pages name. Each
  shell's header holds the site nav and one `header-actions` group: Pages, on a page with the
  Pages drawer; Contents, on a page with a section tree, which a Contents drawer holds; then Help
  and Settings. From 40rem the header is one row, the group on the nav's first line at its inline
  end; below it, two rows, the nav over the group at its inline start. Each shortcut dialog opens
  with a header row, its heading and its Close. Those buttons and each shortcut dialog's Close are
  glyph buttons: each shows a glyph and a key hint, is named by its `aria-label`, and shows that
  name in an interest hint. A GitHub alert's title shows its kind's Octicon. The SDK's
  `showsGlyphs` shell check holds each button to its glyph.
- Each template file a site changes carries an "Adapted from spike-html-hosting-sdk (<tag>)"
  provenance line, its tag the release whose content the file carries:
  - The architecture and sqlate sites adapt `index.html`, with their own title and text;
    `vite.config.ts`, whose `external` lists the source's LICENSE, which the copied README
    links; and `.gitignore`, which keeps marathon's working files.
  - This repository is a root-style site: hand pages beside the rendered pages of two copied
    trees. The rendered pages fill its own shell, `page.html`:
    - standards-lab/.github's `profile/README.md` at dd10b25, the charter, at `github/profile/`;
    - standards-lab/org's `briefs/orientation.md` at c812496 at `org/briefs/orientation.html`.

    Its three hand pages are build inputs in `vite.config.ts`: `index.html`, the index of every
    site; `briefs/orientation.html`, the orientation brief written by hand, with two diagrams; and
    the sitrep entry under `sitreps/`. Hand pages have no Pages button or drawer, because the
    SDK's site index lists only copied pages. The orientation and sitrep hand pages write their
    section tree into a Contents drawer, with the Contents button and a script of their own that
    wires it, as the rendered pages' shell does; the index has no section tree and no Contents
    button. Hand pages have no pager: the SDK writes one only on the copied pages.

    Every page's `sl-site-nav` fetches the list of sites from `src="%BASE_URL%sites.json"`, which
    Vite copies from `public/sites.json` to the base. Each orientation page links the other under
    its h1; on the rendered page, `page.html`'s script adds that link, so the copy stays byte for
    byte. `root.css` styles the link's line and the hand pages' diagrams.

    The unit tier holds the copies to `content.json`. The browser test runs the shell checks on
    every page and crawls the copies. The capture file lists every page the root builds.
- Each site's Vite base, `/<repo>/`, comes from the SDK's `base()`, which reads package.json's
  `name`. Every shell links `site.css` by its package export,
  `@jaimestill/spike-html-hosting-sdk/site.css`, and Vite bundles it into the entry's sheet.
- From SDK v0.4.0, `renderBlocking` sets rolldown's `output.strictExecutionOrder`, so each page
  runs only its own scripts. Each page loads three JS files: its entry, the shared `index` chunk,
  and rolldown's runtime. The SDK's README describes the plugin.
- Each Markdown site's `content/` holds byte-for-byte copies of its source at the pin: the
  architecture repository's 29 front-matter pages at 8706d04, and sqlate's README and docs/ at
  the commit tag v0.6.1 points to. Its `content.json` records the repository, the commit, and
  each file's git blob hash, and a unit test fails when a copy differs.
- The sqlate site revises one copy in place, `docs/quick-start.md`, which `content.json`'s
  `revised` entry holds against its original, blob 0c54507 at f2b2117, and its build opens the
  page with a note naming that original. The revision goes to sqlate at the intake.
- Every shell loads the foundation's full entry, `page-full.css` and `register-full.js`, so the
  settings offer every profile. It also loads `keys.js`, which clicks the Pages button on P and
  the Contents button on C, each while it shows; the Help button, marked `data-keys="?"`, on ?;
  the Settings button, marked `data-keys="s"`, on S; the section tree's J and K; and, on the
  copied pages, the pager's H and L. Help opens a dialog whose `sl-shortcuts` lists the page's
  keys; Settings opens one whose `sl-settings` sets the theme and the keyboard settings. Each
  dialog closes on Escape.
- The renderer highlights each fenced block at build with Shiki, so no script reaches the page.
  A syntax theme is `{ palette, light, dark }`. The SDK's built-ins map primer, catppuccin, and
  everforest to Shiki's bundled themes, and flexoki to a byte-for-byte copy of Flexoki's VS Code
  themes whose green the SDK moves to the foundation's hue 142°. A site appends an entry for an
  outside palette, as the SDK's Noctis fixture site does.
- The architecture and sqlate sites' browser tests call the SDK's `highlightsEachPalette` check
  on their indexes, which hold highlighted code. The root's test leaves the check out: its only
  code is the orientation brief's one-line block, which has nothing to highlight.
- Every site and the SDK's template set `minimumReleaseAge: 0` in `pnpm-workspace.yaml`.
  Currency moves each pin to its latest release, and pnpm's default one-day wait fails a frozen
  install of a lockfile that pins a release under a day old. Reading each release's notes before
  its bump lands stands in for the wait.
- spike-html-hosting-components' `sl-site-nav` holds a list of sites, `SITES`, built into each
  release, so adding a site to it is a components release that every site takes by moving its
  pin. From v0.3.0 its optional `src` names a list it fetches at runtime instead; the
  components' README documents it. The root sets `src`; the architecture and sqlate sites list
  `SITES`. These are evidence 5's two sides, build-time-by-tag and fetched-at-runtime, which the
  components' browser tier measures on fixture sites with one deployed ahead. A layer that names
  its consumers breaks the architecture's downward-dependencies principle; the spike accepts that
  exception until evidence 5's measure settles it.
- Every site's chrome-headless-shell is 157.0.8103.50.
- `sl-settings` lays out its theme rows with the foundation v0.3.0's `theme-menu.css`, which it
  adopts in its shadow root, so the shell checks look for that sheet's layer in the settings'
  `adoptedStyleSheets`.

## Taking captures

`mise run screenshots` builds the site and captures its pages with spike-html-apps-tooling's
`spike-html-apps-screenshots` bin, on the site's `scripts/screenshots.config.ts`. It isn't part
of the check.

- The capture file exports the SDK's `description()` over the site's page list, every page the
  site builds. A page's name is its built path under the base without `.html`: the index is
  `index`, and a `dir/` page is `dir`.
- Each page is captured whole, in tiles, at 390x844, 1120x700, and 1376x860, in light and dark:
  a phone's width and the layout's two docks. The index is also captured with Help open and with
  Settings open at each width, nine states in all.
- `--page <name>` captures that page alone and can be given more than once, so a site's pages
  can be split across runs; an unknown name exits 2 and lists the names. `--scheme light|dark`
  picks one scheme.
- `--palette`, `--space`, and `--type <name>` pick a profile, and `--all` runs every profile the
  capture file lists.
- The files go to a new directory under TMPDIR unless `--dir <path>` names one. The default
  output, `--output terminal`, shows each capture and removes its files at the end unless
  `--keep` is given; `--output directory` and `--output browser` keep them. The tooling's README
  documents each flag.
- The capture file serves the build through Vite's preview under the `/<repo>/` base, started by
  the SDK's `served()`, which the browser tier also uses. A browser test in each site's check
  runs the command once and asserts it leaves no capture file behind.

## Measuring cost

`mise run cost` prints one table per site in `public/sites.json`, from the live sites and their
Pages runs: each page's weight, every response it loads in the pinned chrome-headless-shell,
gzip as Pages served it and brotli 11; and the build, check, and push-to-live times of the runs at
the site's current pin. It reads the network and gh and isn't part of the check.
`scripts/cost.ts` holds what it reads and how, and the root README's "Evidence" records its
numbers.

- Pages serves gzip, not brotli.
- Pages' CDN answers from several nodes, and one can serve the index of the deploy before the
  latest for minutes after it. The index's Last-Modified falls a few seconds into its deploy, and
  can trail deploy-pages' reported success by up to half a minute, so the command marks the live
  run as the last whose deploy step started at or before it.

## Releases

spike-html-hosting-components releases at 0.y.z, `@jaimestill/spike-html-hosting-components`,
starting at v0.1.0, peering spike-html-apps-foundation at its current minor.
spike-html-hosting-sdk, `@jaimestill/spike-html-hosting-sdk`, releases at 0.y.z the same way: its
release workflow tags a version bump that lands on main. Its current release is v0.6.1, the
components' is v0.5.0, and the icons layer's, spike-html-hosting-icons, is v0.1.0. The sites
release nothing; each deploys on its push to main.

## References

The spike reads these repositories and never writes to them. Each is a key in the coordinator's
`references.toml`, with its local checkout in `references.local.toml`, except `primer/octicons`,
which a pending edit in the goal record adds:

- `architecture`, at 8706d04: the architecture stand-in's pages.
- `sqlate`, at v0.6.1, with `sqlint/v0.3.0`: the sqlate stand-in's README and docs/, and the
  CLI the review task recorded, then removed (README, "Evidence", 10).
- `standards-lab/.github`, at dd10b25: the charter, its `profile/README.md`.
- `standards-lab/org`, at c812496: the orientation brief, its `briefs/orientation.md`.
- `spike-html-apps-foundation`, at v0.3.0: the baseline every site pins.
- `spike-html-apps-tooling`, at v0.3.0: the screenshot review.
- `primer/octicons`, at 9a274e2 (tag `@primer/octicons@19.42.0`): the icons layer's Octicons,
  whose LICENSE the package copies.
- `spike-html-design`: the first Pages workflow.
- `spike-html-apps`: the Vite build and vite-plugin-standard-css-modules.
- `spike-html-conventions`: the stack's conventions.

## The answer

The question: what do the repositories' Pages sites and the hosting of persistent artifacts look
like, published as native web?

**The hypothesis holds, with the org site moved to the origin root: architecture and each code
repository's docs/ guide are project sites under `/<repo>/`, built by Vite from Markdown through
one site SDK and one documentation components layer, each released by tag, and the org site is a
standards-lab.github.io repository that holds the charter and the index of sites and serves the
site list every nav fetches.**

Each item's proof is recorded in the root README's "Evidence".

1. **Three project sites** ([README](../README.md#1-three-project-sites)): each live site
   answered 200 on 2026-11-10, and each site's `mise run check` runs its Vite build.
2. **The org stand-in** ([README](../README.md#2-the-org-stand-in)): the root's browser tier,
   the SDK's shell checks on its five pages, its index held to sites.json, and the SDK's crawl;
   live from the org task, PR #7.
3. **The architecture stand-in** ([README](../README.md#3-the-architecture-stand-in)): the
   architecture site's crawl, each page's head held to its front matter's meta and every in-site
   link followed to its page and fragment.
4. **The sqlate stand-in** ([README](../README.md#4-the-sqlate-stand-in)): the components'
   `sl-section-tree` tests for J, K, and the arrow keys, and the sqlate site's crawl, with H and L
   pressed at 390px.
5. **Shared navigation when one site deploys ahead**
   ([README](../README.md#5-shared-navigation-when-one-site-deploys-ahead)): proven only by the
   components' fixture tests on one local origin. The built list skews and the fetched list
   converges. Live, only the root fetches its list, served with `max-age=600`.
6. **One baseline pin and a theme across sites**
   ([README](../README.md#6-one-baseline-pin-and-a-theme-across-sites)): the components'
   two-base test, and live on the three deployed sites, the theme set in storage rather than
   through the menu.
7. **No CSS module script in any build**
   ([README](../README.md#7-no-css-module-script-in-any-build)): proven only by the check, the
   SDK's ESLint leftover check over each build. No page was loaded in Safari.
8. **The HTML/Markdown line** ([README](../README.md#8-the-htmlmarkdown-line)): the root's
   orientation brief both ways and its sitrep entry, PR #7. Hand HTML cost 3.6 and 1.9 times the
   drafting tokens, counted with Gemma 4's tokenizer.
9. **The review across every site** ([README](../README.md#9-the-review-across-every-site)):
   `mise run screenshots` and the browser test that it leaves no capture file, and the
   architect's review of the captures at the design task's four checkpoints.
10. **The CLI demo** ([README](../README.md#10-the-cli-demo)): built and rejected. The review
    task recorded five VHS demos and removed them at its second checkpoint.
11. **Cost per site** ([README](../README.md#11-cost-per-site)): `mise run cost`, its run of
    2026-11-10 over the live sites and their Pages runs.
12. **One icon toolkit** ([README](../README.md#12-one-icon-toolkit)): the icons layer's unit and
    browser tiers, and each site's `showsGlyphs` shell check. The builds ship 6, 6, and 7 of 986
    Octicons.

Items 5 and 7 are proven only by tests: 5 by fixture tests on one local origin, 7 by the check
alone. Item 9 rests on the architect's reviews, item 11 on a measure run on demand, and the rest
on tests and the live sites.

### The topology v1.client and v1.repository-docs build

- **The org site at the origin root,** a standards-lab.github.io repository. It needs a root-base
  option in the site SDK, since `base()` returns `/<name>/` today (spike-html-hosting-sdk
  `src/served.ts`). A custom domain set on the org site carries to every project site of the
  owner that has no domain of its own, per GitHub's docs ("About custom domains and GitHub
  Pages"). The coordinator keeps no build: it is a context repository with no CI. Once
  status-reports takes in briefs/, the org site holds only the charter and the index of sites.
  Rejected: Pages on standards-lab/org at `/org/`.
- **One site list,** fetched at runtime from the org site's `sites.json`, with the built-in list
  as fallback. The built list stays wrong until every site rebuilds; the fetched one is right at
  once. It needs the SDK's check that every request resolves under the site's base
  (`requestsUnderBase`) to allow the org site's `sites.json`.
- **The Pages costs,** from evidence 11. Pages serves gzip, not brotli. GitHub's deployment queue
  dominates push-to-live. A CDN node can serve the previous deploy minutes after a new one.

### The components layer

- spike-html-hosting-components is the documentation layer the org site and v1.repository-docs'
  sites build on. It stays apart from spike-html-apps-components, the pipeline primitives; the
  two share only `sl-drawer`.
- status-reports and training.foundation each build their own components layer on the
  foundation, for their content.
- Only overlap those layers prove moves into a shared documentation layer.
- The drawer is foundation chrome: one `sl-drawer` in the foundation, the consumer passing its
  Close glyph through a slot.

### The HTML/Markdown line

Markdown source rendered at build is the default for briefs/ and status-reports' entries. Hand
HTML is written only where a diagram earns it, as evidence 8's figures do. This sharpens, for the
intake, web-client.md's persistent artifacts, "written as HTML and hosted in the coordinator".

### For the intake

- A pattern page for the keyboard-shortcut dialog, with Settings and Help its worked instances.
- Settings and Help as foundation changes: the theme menu's fixed heading and T save, and the
  keys help's settings.
- The foundation's `preferences.js` and `keys.js` dynamically import `theme-menu.js` and
  `keys-help.js`, so every site builds both chunks without requesting them.
- glyph-button as a foundation control.
- Front matter as head meta, not visible, as v1.repository-docs' convention.
- The sqlate quick-start revision against sqlate f2b2117, from spike-html-hosting-sqlate's
  revised copy, `content/docs/quick-start.md`.
- A site-nav menu at narrow widths, and sub-navs: below 40rem the nav is one row and doesn't
  wrap, and a real org's ten or so sites won't fit.
- The VHS verdict: recorded terminal demos aren't worth the overhead for a guide whose text shows
  the output. v1.repository-docs shows a CLI's output as text.
- One `sl-drawer` in the foundation, its Close glyph passed through a slot.
- 14 web repositories each keep their own `scripts/currency.sh`, where the sites run the SDK's
  currency bin.
- The SDK provenance convention differs: the root keeps one provenance line per SDK tag it
  adopted, and the architecture and sqlate sites one line naming the latest tag whose content
  the file carries.
