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
- **Site SDK:** spike-html-hosting-sdk, released by tag: the template each site is scaffolded
  from, the build and check pieces, and the reusable workflows.
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
4. `template`: the shared site files in place of the hand copies: a site SDK released by tag,
   whose release carries the template that one scaffold command copies into a new site.
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

- spike-html-hosting-sdk owns every file the sites share: the Vite plugins, the Markdown
  renderer, the ESLint configuration with the leftover check, the tsconfig and Prettier bases,
  `site.css`, `served()`, the shell checks and the crawl, the capture description, the currency
  bin, and the reusable workflows. Its README documents each export.
- Each site was scaffolded from the SDK's template at v0.1.0, by
  `pnpm dlx github:JaimeStill/spike-html-hosting-sdk#v0.1.0 <repo>`. The three existing sites
  were scaffolded into a scratch directory and the copy moved over them, keeping each site's
  notes, marathon configuration, history, and copied tree, if it has one.
- A site keeps pace with the SDK by bumping its tag in `package.json` and in both workflows'
  `uses:` lines.
- Each template file a site changes carries an "Adapted from spike-html-hosting-sdk (v0.1.0)"
  provenance line:
  - The architecture and sqlate sites adapt `index.html`, with their own title and text;
    `vite.config.ts`, whose `external` lists the source's LICENSE, which the copied README
    links; and `.gitignore`, which keeps marathon's working files.
  - This repository adapts the template to its one page. `index.html` is its own page rather
    than a shell to fill. `vite.config.ts` runs no `markdownPages` and keeps appType `mpa`. The
    browser test runs the shell checks alone, with no crawl. `mise.toml` has no unit tier, since
    the root copies no Markdown tree to check. The capture file lists the index alone. Its
    `.gitignore` keeps marathon's working files.
- Each site's Vite base, `/<repo>/`, comes from the SDK's `base()`, which reads package.json's
  `name`. Every shell links `site.css` by its package export,
  `@jaimestill/spike-html-hosting-sdk/site.css`, and Vite bundles it into the entry's sheet.
- Each Markdown site's `content/` holds byte-for-byte copies of its source at the pin: the
  architecture repository's 29 front-matter pages at 8706d04, and sqlate's README and docs/ at
  the commit tag v0.6.1 points to. Its `content.json` records the repository, the commit, and
  each file's git blob hash, and a unit test fails when a copy differs.
- Every shell loads the foundation's full entry, `page-full.css` and `register-full.js`, so the
  theme menu offers every profile. It also loads `keys.js`, which clicks the Theme button, marked
  `data-keys="t"`, when the reader presses T.
- Every site's chrome-headless-shell is 157.0.8103.38.
- The foundation v0.3.0 theme menu has no shadow root: it adopts its sheet on the document, so
  the shell checks look for that sheet in `document.adoptedStyleSheets`.

## Taking captures

`mise run screenshots` builds the site and captures its pages with spike-html-apps-tooling's
`spike-html-apps-screenshots` bin, on the site's `scripts/screenshots.config.ts`. It isn't part
of the check.

- The capture file exports the SDK's `description()` over the site's page list, every page the
  site builds. A page's name is its built path under the base without `.html`: the index is
  `index`, and a `dir/` page is `dir`.
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
  the SDK's `served()`, which the browser tier also uses. A browser test in each site's check
  runs the command once and asserts it leaves no capture file behind.

## Releases

spike-html-hosting-components releases at 0.y.z, `@jaimestill/spike-html-hosting-components`,
starting at v0.1.0, peering spike-html-apps-foundation at its current minor.
spike-html-hosting-sdk, `@jaimestill/spike-html-hosting-sdk`, releases at 0.y.z the same way: its
release workflow tags a version bump that lands on main. v0.1.0 is its first release. The sites
release nothing; each deploys on its push to main.

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
