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
3. The architecture stand-in: its pages rendered with their front matter, relative `.md` links
   resolved across the site.
4. The sqlate stand-in: its README index and docs/ guide with the section tree (bracketed key
   hints, reading progress, arrow-key scrolling).
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

## Capabilities

- **Sites:** three Pages project sites, each built by Vite and deployed by its own workflow.
- **Content:** Markdown sources rendered at build, with front matter and resolved links.
- **Documentation components:** the section tree, page header, site index, and cross-site
  navigation, released by tag.
- **Artifacts:** the charter, the hosted report, and the HTML/Markdown line.
- **Review and demos:** the screenshot review and VHS-recorded CLI demos.

## Path

The tasks, in the order they run; each cites the evidence it proves.

1. `layers`: the three repositories created; every site built and deployed by Pages under its
   base path, with the no-CSS-module-script check (evidence 1, 7).
2. `content`: the pinned architecture and sqlate copies rendered at build (evidence 3, 4).
3. `screenshots`: `mise run screenshots` on every site, with spike-html-apps-tooling's bin.
4. `template`: the shared site template, a site SDK released by tag and a template subtree each
   site copies once, in place of the hand-copied site files.
5. `highlighting`: code fences highlighted in the SDK's renderer, matched to the foundation's
   profiles.
6. `components`: the documentation components, released and pinned on every site
   (evidence 4, 6).
7. `org`: the charter, the index, the hosted report, shared navigation measured, and the
   HTML/Markdown line (evidence 2, 5, 8).
8. `review`: the review across every site, the sqlint VHS demo, and the cost per site
   (evidence 9, 10, 11).
9. `answer`: the Pages topology, the root URL option, and the components layer's verdict.

## Building the sites

- Each site's Vite base, `/<repo>/`, is `vite.config.ts`'s reading of package.json's `name`.
  The root's browser test reads the expected title from its `index.html`.
- The sites share their build, check, and deploy files by hand copy. Each copy carries a
  provenance line naming the repository and commit it came from, and a change in the owning
  repository is copied by hand to the sites that copy it:
  - This repository owns the files the Markdown pages leave unchanged: the two workflows,
    `eslint.config.js`, `.prettierignore`, `scripts/currency.sh`, `scripts/preflight.sh`, and
    `test/unit/leftover.test.ts`. The architecture and sqlate sites copy them unchanged.
  - The architecture site owns the content renderer, `markdown-pages.ts`, with its tests; the
    files it adapted from this repository to build Markdown pages: `index.html`,
    `vite.config.ts`, `mise.toml`, `tsconfig.json`, and `test/browser/site.test.ts`; and the
    site layout, `site.css`. The sqlate site copies them, with its own title and text in
    `index.html`. This repository copies `site.css` unchanged.
  - The architecture site owns the screenshot files: `scripts/screenshots.config.ts`,
    `test/browser/support/served.ts`, `test/browser/screenshots.test.ts`, and
    `tsconfig.test.json`, which type-checks `scripts/` with the suite. The sqlate site copies
    them unchanged. This repository copies all but the capture file, which it adapts to its one
    page.
  - This repository's own `index.html` and browser test carry the architecture site's shell
    changes, kept in step by hand.
  - The planned `template` task moves the shared files into a site SDK released by tag.
- Each Markdown site's `content/` holds byte-for-byte copies of its source at the pin: the
  architecture repository's 29 front-matter pages at 8706d04, and sqlate's README and docs/ at
  the commit tag v0.6.1 points to. Its `content.json` records the repository, the commit, and
  each file's git blob hash, and a unit test fails when a copy differs.
- Every shell loads the foundation's full entry, `page-full.css` and `register-full.js`, so the
  theme menu offers every profile. It also loads `keys.js`, which clicks the Theme button, marked
  `data-keys="t"`, when the reader presses T.
- Every shell links `site.css` by the root-relative `/site.css`, and Vite bundles it into the
  entry's sheet.
- Every site's chrome-headless-shell is 157.0.8103.38.
- The foundation v0.3.0 theme menu has no shadow root: it adopts its sheet on the document, so
  the browser test looks for that sheet in `document.adoptedStyleSheets`.

## Taking captures

`mise run screenshots` builds the site and captures its pages with spike-html-apps-tooling's
`spike-html-apps-screenshots` bin, on the site's `scripts/screenshots.config.ts`. It isn't part
of the check.

- The capture file describes every page the site builds. A page's name is its built path under
  the base without `.html`: the index is `index`, and a `dir/` page is `dir`.
- Each page is captured whole, in tiles, at 1280x800 and 390x844, in light and dark. The index
  is also captured with its theme menu open at both widths.
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
  `served()` in `test/browser/support/served.ts`, which the browser tier also uses. A browser
  test in each site's check runs the command once and asserts it leaves no capture file behind.

## Releases

spike-html-hosting-components releases at 0.y.z, `@jaimestill/spike-html-hosting-components`,
starting at v0.1.0, peering spike-html-apps-foundation at its current minor. The sites release
nothing; each deploys on its push to main.

## References

The spike reads these repositories and never writes to them. Each is a key in the coordinator's
`references.toml`, with its local checkout in `references.local.toml`:

- `architecture`, at 8706d04: the architecture stand-in's pages.
- `sqlate`, at v0.6.1, with `sqlint/v0.1.1`: the sqlate stand-in's README and docs/, and the
  recorded CLI.
- `spike-html-apps-foundation`, at v0.3.0: the baseline every site pins.
- `spike-html-apps-tooling`, at v0.3.0: the screenshot review.
- `spike-html-design`: the first Pages workflow.
- `spike-html-apps`: the Vite build and vite-plugin-standard-css-modules.
- `spike-html-conventions`: the stack's conventions.

## The answer

Pending: the `answer` task writes it.
