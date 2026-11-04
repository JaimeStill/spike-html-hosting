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
3. `components`: the documentation components, released and pinned on every site
   (evidence 4, 6).
4. `org`: the charter, the index, the hosted report, shared navigation measured, and the
   HTML/Markdown line (evidence 2, 5, 8).
5. `review`: the review across every site, the sqlint VHS demo, and the cost per site
   (evidence 9, 10, 11).
6. `answer`: the Pages topology, the root URL option, and the components layer's verdict.

## Building the sites

- Each site's Vite base, `/<repo>/`, is `vite.config.ts`'s reading of package.json's `name`.
  The browser test reads the expected title from the site's own `index.html`.
- The files that build, check, and deploy a site are the same in all three sites. The
  architecture and sqlate sites copy them from this repository, and each copy carries a
  provenance line naming the commit it came from. A change to one of these files here is copied
  by hand to the other two sites.
- The foundation v0.3.0 theme menu has no shadow root: it adopts its sheet on the document, so
  the browser test looks for that sheet in `document.adoptedStyleSheets`.

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
