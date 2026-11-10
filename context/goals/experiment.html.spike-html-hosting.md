# goal · experiment.html.spike-html-hosting

- **State:** building
- **Task:** review
- **Branch:** review

## Tasks

1. [x] layers
2. [x] content
3. [x] screenshots
4. [x] template
5. [x] highlighting
6. [x] components
7. [x] org
8. [x] icons
9. [x] design
10. [ ] review
11. [ ] answer

## Task brief · review

```
Problem       Evidence 9, 10 and 11 are unwritten. The design
              task reviewed every page, but nothing records it
              as evidence 9. Nothing on the sqlate site shows
              sqlate running: its quick-start never prints the
              SQL its includes and directives become, never
              shows what the linter catches, never layers its
              own patterns over the library's beyond one
              include, and its step 1 leaves step 5 unbuildable
              ("missing go.sum entry for … puddle/v2", go
              1.27.3, pgx v5.11.0 and v5.12.0). No site measures
              its page weight, build time or push-to-live time.
              Five findings from earlier tasks sit unfixed in
              the SDK and the icons layer. The SDK trails marked
              18.2.0; the icons layer trails chrome-headless-
              shell 157.0.8103.50, rolldown 1.3.1 and
              typescript-eslint 8.72.2; the components trail
              chrome-headless-shell 157.0.8103.50.
Behaviors     1. spike-html-hosting-icons takes chrome-headless-
                 shell 157.0.8103.50, rolldown 1.3.1 and
                 typescript-eslint 8.72.2, their notes read
                 before the bump. Its currency prints nothing
                 and its check passes.
              2. spike-html-hosting-components takes chrome-
                 headless-shell 157.0.8103.50. Its currency
                 prints nothing and its check passes.
              3. spike-html-hosting-sdk takes marked 18.2.0, its
                 notes read before the bump. Rolldown stays held
                 at 1.2.18 (vite 8.3.7 pins ~1.2.18). Its currency
                 reports only the held rolldown, and its check
                 passes with every fixture site's copied pages
                 crawled under the new parser.
              4. The icons build writes nothing when it refuses a
                 set: a refused set listed after an accepted one
                 leaves the output directory empty, and the build
                 exits 1 naming the set and its licence. A unit
                 test builds an accepted set then a refused one,
                 and holds both. No icons release.
              5. The icons browse page labels a set's licence
                 with its SPDX identifier, else its title,
                 whether or not the set gives a URL, as its
                 browser test expects. A fixture set with an SPDX
                 identifier and no URL shows the identifier.
              6. The SDK's landing wait adds no listener that
                 outlives it: over a crawl of every page of a
                 fixture site, the load-event listeners don't
                 grow with the pages crawled; a test counts them.
              7. The SDK crawl's front-matter check holds each
                 page's front-matter head meta to exactly its
                 front matter's keys: a page with no front matter
                 carries none, and a fixture page that carries
                 one fails the crawl, naming it.
              8. The SDK template's provenance names the Settings
                 button on S, and no template file names a Theme
                 button or T. The scaffold test reads every
                 template provenance line against the shell.
              9. spike-html-hosting-sdk v0.6.1 is released after
                 behaviors 3 and 6-8, with CHANGELOG [0.6.1]. It
                 pins components v0.5.0 and icons v0.1.0.
              10. The architecture, sqlate and root sites pin SDK
                 v0.6.1 in package.json and both workflows' uses:
                 lines. Every page passes the shell checks, the
                 copied pages pass the crawl, and each site's
                 currency prints nothing.
              11. The sqlate site's copied quick-start is revised
                 in place:
                 - step 1 gets pgx/v5/stdlib, so step 5 builds;
                 - the task that runs the program is `program`
                   throughout;
                 - a `sql` task prints what PostgreSQL receives;
                 - step 5 builds the catalog on postgres.Patterns()
                   with a paragraph on overlays;
                 - step 9 adds a test printing the composed list
                   read;
                 - step 10 plants a statement with guard_set and
                   no guard_where, and a RETURNING in a standard
                   file, shows two findings and exit 1, then
                   removes it;
                 - a new step 12 scopes projects by organization:
                   a second migration (org, project); app.tenant
                   and app.live; a projects package whose base
                   includes both; archive, a standard-tier guarded
                   returning command layering sql.guard_set,
                   sql.guard_where, app.tenant and app.live, read
                   back through project_row; seeds for two orgs;
                   a run that pages one org by cursor, archives
                   one project, shows a refusal, a stale version
                   and another org's row as no rows, then reverts
                   the newest migration;
                 - the clean-up step becomes 13, its tree updated.
                 Every other step stays byte for byte.
              12. The copied tree's record marks the revision:
                 the quick-start's entry holds the revised blob,
                 and a revised entry names its original blob at
                 sqlate f2b2117 and that the revision is proposed
                 to sqlate at intake. The content check passes,
                 and a unit test fails when a revised file
                 matches its original or names an unrecorded
                 file. The rendered page opens with a one-line
                 note that it is revised from sqlate@f2b2117.
              13. The finished program of the revised quick-start
                 is committed in the sqlate site, against sqlate
                 v0.6.1, postgres v0.6.0, pgx and sqlint v0.3.0
                 through go get -tool, with go 1.27.3 pinned
                 through mise. The site's check, offline:
                 - vets and tests the program;
                 - runs sqlint over it, which prints sqlint: ok;
                 - fails when any file the guide writes in full
                   differs from the committed program's (the last
                   block per file wins).
                 Install fetches the program's modules.
              14. Five recordings are rendered by VHS 0.12.1 from
                 committed tapes and committed as WebM:
                 A (step 9: mise run sql, the team list read
                   composed);
                 B (step 10: lint ok, two findings and exit 1,
                   ok again);
                 C (step 11: mise run program against live
                   PostgreSQL, through the four errors);
                 D (step 12: mise run sql, archive's four
                   patterns, its PostgreSQL form with RETURNING
                   added by the dialect, the counted first page,
                   the next page's row-value keyset);
                 E (step 12: mise run program, ending on the
                   projects lines and the reverted migration).
                 The database starts off camera.
              15. `mise run tapes` renders only the recordings
                 whose inputs changed, and writes each one's input
                 hash. Inputs: its tape, the program and go.sum,
                 and the vhs, ttyd, ffmpeg, go and chrome-
                 headless-shell pins. VHS drives the pinned
                 chrome-headless-shell 157.0.8103.50. The site's
                 check recomputes every hash offline and fails
                 naming a recording whose inputs changed since it
                 was rendered. CI never renders, and the SDK's
                 workflows are unchanged.
              16. The sqlate site's build places each recording
                 under the step it demonstrates: a native video,
                 muted, controls, playsinline, preload="metadata",
                 an accessible name. The Markdown carries no video
                 markup. The crawl finds the five videos, each
                 under its step's heading, and nothing scrolls
                 sideways at 390px.
              17. `mise run cost` in the root reads the network,
                 writes nothing, and isn't part of the check. For
                 each of the three live sites:
                 - each page's weight, every response it loads in
                   the pinned chrome-headless-shell (HTML, CSS,
                   the three JS files, video metadata where
                   present), as gzip as Pages served it and as
                   brotli via node:zlib at quality 11, reported as
                   median and max per site;
                 - build time, Vite's "built in" and the check
                   step's duration, from the Pages runs;
                 - push-to-live, a run's creation to its
                   deploy-pages success, confirmed by the live
                   index's last-modified, over the Pages runs at
                   the current pins.
                 It prints one table per site. Its pure parts
                 (median, log parsing, the table) have unit tests.
              18. Push-to-live is measured over fresh runs: each
                 site's merge in this task, plus five
                 workflow_dispatch runs per site at SDK v0.6.1.
              19. The root's README records:
                 - evidence 9, citing the screenshots task's
                   capture command and no-capture test, the design
                   task's four checkpoints at 390, 1120 and 1376px,
                   and this task's checkpoint captures;
                 - evidence 10, the five recordings and where they
                   sit;
                 - evidence 11, the cost table with its date,
                   noting Pages serves gzip, not brotli, and each
                   page loads three JS files;
                 - the pins at SDK v0.6.1.
              20. At checkpoint 1 the architect views the five
                 recordings and the revised quick-start's captures
                 at 390, 1120 and 1376, light and dark, built
                 against the unreleased SDK, before the standards
                 and spec reviews and before the SDK release.
                 Marked changes become behaviors here.
              21. At checkpoint 2 the architect views the cost
                 tables and the evidence write-up after the sites
                 deploy, before the root's README merges.
              Checkpoint 1 amendments (the architect, 2026-11-10):
              22. Each recording's terminal is sized to the space
                 the page gives it: its text reads in the content
                 column at 1120 and 1376 without fullscreen.
              23. Each recording shows only what the reader needs
                 to see, in a format chosen for it: long output is
                 sequenced into smaller runs that each fit the
                 terminal, with a short pause after each so the
                 reader takes in its whole context, and no scroll.
              24. A recording lasts about as long as its commands
                 take plus the time to read each output, with no
                 idle stretches. Best practices for the tapes are
                 written down beside them, and every tape meets
                 them.
              25. Each video's poster is its recording's last
                 frame, committed as WebP and held to the input
                 hash, so the page shows the result before play.
              26. The revision note is a muted aside, in the page's
                 secondary text colour.
              27. The revised prose reads plainly to a human
                 reader. Step 10 says that guard_where gives a
                 command optimistic concurrency, and what that
                 means: the write applies only if the row's
                 version is still the one the caller read, and a
                 stale write fails rather than overwriting. Step
                 12 is reordered and reworded so it reads in
                 sequence.
Test seams    each repository's `mise run check`: the icons build
              and browse tests; the SDK's crawl, landing and
              scaffold tests on its fixture sites; the sqlate
              site's unit tier (content and its revision marker,
              the guide's blocks against the program, the
              recordings' input hashes) and browser tier (shell
              checks, crawl, the placed videos); the program's go
              vet, go test and sqlint; the root's unit tier over
              the cost command's pure parts
Slices        Upgrades first, in dependency order (icons,
              components, SDK):
              1. Icons upgrade: headless-shell .50, rolldown
                 1.3.1, typescript-eslint 8.72.2 (-icons)
              2. Components upgrade: headless-shell .50
                 (-components)
              3. SDK upgrade: marked 18.2.0, rolldown hold
                 renewed at 1.2.18 (-sdk)
              4. Icons fixes: refused-set build, browse label;
                 merged with no release (-icons)
              5. SDK fixes: landing listener, crawl front-matter
                 check, template provenance line (-sdk)
              6. The program: the finished quick-start program,
                 go pinned; the check vets, tests and lints it
                 offline (-sqlate)
              7. Revised quick-start: the copy edited in place,
                 the revised entry and its test, the blocks-
                 match-program check, the revision note;
                 captures (-sqlate)
              8. Recordings: tapes A-E, `mise run tapes` with
                 pinned vhs, ttyd, ffmpeg and the headless shell,
                 committed WebM and input hashes, the offline
                 hash check, the build placing each video;
                 captures (-sqlate)
                 → checkpoint 1: the architect views the
                   recordings and the quick-start's captures, SDK
                   branch linked locally; then the standards and
                   spec reviews over every branch
              9. SDK release: 0.6.1, CHANGELOG [0.6.1]; merges,
                 release workflow cuts v0.6.1 (-sdk)
              10. Sites pin SDK v0.6.1 in package.json and both
                 workflows; currency prints nothing; merge and
                 deploy (-architecture, -sqlate, root)
              11. Cost command: `mise run cost` with unit tests;
                 five dispatch runs per site; the tables (root)
              12. Evidence: README evidence 9, 10, 11 and pins
                 (root)
                 → checkpoint 2: the architect views the cost
                   tables and the evidence before the root's last
                   merge
Out of scope  writing to sqlate (the revision and the step 1
              defect go to the intake); an icons or components
              release; Source.As in the guide; rendering in CI or
              any change to the SDK's workflows; a revision
              feature in the SDK's content check; brotli on Pages
              itself; rolldown 1.3.x; the answer section; the
              findings recorded for the intake (shortcut-dialog
              pattern page, the foundation's lazy chunks,
              glyph-button, the narrow-width nav menu)
Door          one-way: the tag spike-html-hosting-sdk v0.6.1,
              which every site and later scaffold consumes, and
              the committed WebM, which stays in the sqlate
              site's history after any revert; two-way: the icons
              and components commits, the three sites' changes
              (each redeploys and reverts by reverting its merge),
              and the root's cost command and README
Release       spike-html-hosting-sdk v0.6.1
```

## Progress

slices 12/12 · checkpoint 1 ✓ · standards ✓ · spec ✓ · editor ✓ · checkpoint 2 open
SDK v0.6.1 released (PR #10, d5e9da4); architecture (PR #9, 04d2271), sqlate (PR #9, e9fcb5b) and
root (PR #10, b5f9591) merged and deployed at v0.6.1; root `review` re-cut for slices 11-12, sqlate
and sdk `review` re-cut for the editor's docs

- icons: 69d0be1 (1); fb7143f, e279e3b (4)
- components: 17cf52b (2)
- sdk: 6a9c28a (3); 8679c39, 7ef1333 (5); f6246e8, 3921877 (8a); c0fa2f8 (9)
- root: 3c699eb (10); 5be4fae, c3e55d9, c02d992 (11); 7492a44 (12)
- architecture: 5b62e35 (10)
- sqlate: 45f534f, 829620e (6); cb4da2e, bb03426, 2a4f5c6 (7); 2cd52e6, 5492d0a, fcd2f11 (8);
  46cc7e0, 7e3653d, cb66ed4, cc77318 (8b);
  4a922a1, 7020797, 0769aba (review fixes); 8196a7a (10)

## Decisions

- setup: four repositories: the root as the org stand-in (charter, hosted report, index of every
  site), spike-html-hosting-architecture, spike-html-hosting-sqlate, and
  spike-html-hosting-components; each site deploys its own Pages project site, since independent
  deploys and cross-site navigation show only across separate sites.
- setup: the spike publishes only on its own JaimeStill repositories, carrying pinned copies with
  provenance (architecture at 8706d04, sqlate's README and docs/ at v0.6.1); v1.client enables
  the real sites. Rejected: enabling Pages on standards-lab/org, architecture, and sqlate.
- setup: project sites only; the `/<repo>/` base path is measured, and a standards-lab.github.io
  root repository is recorded as a sourced option. Rejected: a temporary JaimeStill.github.io
  user site, which would take the root of the origin every JaimeStill project site shares.
- setup: architecture pages and repository docs stay authored in Markdown and are rendered at
  build by marked; HTML stays for persistent artifacts. Rejected: authoring them as HTML.
- setup: CSS module scripts are built by vite-plugin-standard-css-modules 0.3.0, as
  spike-html-apps adopted it. Rejected: spike-html-conventions' local `scripts/css-sheets.js`.
- setup: every site pins spike-html-apps-foundation v0.3.0 by git tag. Rejected:
  spike-html-design v0.7.0 by pinned jsDelivr URL.
- setup: the sites don't use spike-html-apps-components v0.10.2, whose components serve the
  pipeline app; a documentation components layer, spike-html-hosting-components, released by tag
  on the foundation peer, holds the section tree, page header, site index, and cross-site
  navigation. Rejected: modules inside the root consumed by the other sites. marked is a direct
  build dependency.
- setup: the review uses spike-html-apps-tooling v0.3.0's screenshot bin by tag, plus a check
  that no capture file remains. Rejected: building a second review script.
- setup: the recorded CLI demo is sqlint at sqlate's sqlint/v0.1.1 through VHS. Rejected: slab,
  which needs a running go-web-service.
- setup: VHS renders in the sqlate site's Pages workflow from a committed tape, with go, vhs,
  ttyd, and ffmpeg pinned through mise. Rejected: committing the recording.
- setup: the evidence is the eleven items in `context/README.md`, "The evidence".
- setup: every repository is kind code, with check `mise run check`, currency
  `mise run currency`, github remote, merge `gh pr checks --watch && gh pr merge --merge
  --delete-branch`, and a `[remote] ci` that waits for the push run, the Pages deploy.
- setup: toolchain at spike-html-apps' pins: node 26.13.0, pnpm 12.16.1, shellcheck 0.11.0 at
  init; the layers task adds vite 8.3.5, typescript-go 7.0.2, ESLint, Prettier, and
  chrome-headless-shell 156.0.8078.80.
- setup: the layers task creates the three other repositories, as spike-html-apps' did.
- setup: the references are architecture at 8706d04, sqlate at v0.6.1 with sqlint/v0.1.1,
  spike-html-apps-foundation v0.3.0, spike-html-apps-tooling v0.3.0, spike-html-design,
  spike-html-apps, and spike-html-conventions.
- layers: each site's placeholder page loads the foundation's page.css, register.js, and
  preferences.js with a button opening the theme menu, so the build holds a real CSS module
  script for the plugin to rewrite. Rejected: page.css only, which builds with none.
- layers: each site's Vite base is "/<repo>/", served by vite preview in tests as Pages serves
  it. Rejected: "./", which hides links that assume the origin root.
- layers: the leftover check is ESLint over the build output with the foundation's
  import-attribute type "css" selectors, proven by a fixture test. Rejected: a rolldown/utils
  scan script, a grep.
- layers: each site's Pages workflow runs the full check on push, then uploads and deploys;
  ci.yml runs on pull requests only. Rejected: ci.yml on push beside a deploy-only workflow.
- layers: spike-html-hosting-components gets release.yml now, at version 0.0.0, which it skips;
  v0.1.0 releases in the components task.
- layers: spike-html-hosting-components' check is shellcheck, actionlint, and Prettier until its
  first component. Rejected: the full toolchain over a stub module.
- layers: the theme menu in foundation v0.3.0 adopts its sheet on the document, not a shadow
  root, so the browser test asserts document.adoptedStyleSheets holds its foundation.theme-menu
  sheet after the click.
- layers: each site's base is read from package.json's name, so a copied site changes only its
  package name and page text; the browser test reads the expected title from index.html.
- layers: the leftover check matches import() at its options' `type` property; esquery's :has
  doesn't walk an ImportExpression's options.
- layers: currency compares action pins and github: tags against `git ls-remote` tags, needing no
  GitHub token.
- layers: each site copied from the root keeps every file's upstream provenance line and adds
  one naming spike-html-hosting and the commit that last changed the file there; JSON files
  carry none, and pnpm-lock.yaml is copied unchanged because it names no root package.
- layers: index.html names the foundation's modules by package specifier, which Vite resolves
  through the package's exports. Rejected: node_modules paths.
- layers: spike-html-hosting-components' STANDARDS.md takes the root's provenance rule and its
  Design section, but not the Sites lines, which govern a deployed site.
- layers: spike-html-hosting-components' release.yml skips version 0.0.0 by treating it as
  already released, so a push at 0.0.0 cuts no tag.
- layers: no package.json carries a packageManager field; mise pins pnpm, as in the precedent.
- layers: no repository has a pnpm-workspace.yaml, since no dependency needs an allowBuilds entry.
- layers: held npm typescript at 6.0.3: typescript-eslint 8.72.1's peer range is <6.1.0, which
  excludes 7.0.2. Currency compares it with the newest version that range accepts, and
  typescript-go 7.0.2 does the type check.
- content: chrome-headless-shell 157.0.8103.38 in both sites now; the root follows in the
  template task.
- content: Markdown rendered by an in-config Vite plugin into virtual .html pages. Rejected: a
  pre-build script writing a gitignored directory.
- content: front matter parsed by yaml 2.9.1. Rejected: gray-matter 4.0.3 (js-yaml 3, last
  published 2023).
- content: heading ids from marked-gfm-heading-id, matching github.com's fragments. Rejected: a
  hand-written slugger.
- content: x.md becomes x.html and dir/README.md becomes dir/. Rejected: a directory x/ per page.
- content: links to files that aren't copied go to the github.com blob at the pin, and the build
  fails on any other relative link it can't place. Rejected: copying LICENSE.
- content: the architecture copy is its 29 front-matter pages. Rejected: all 32 .md files,
  including CLAUDE.md, STANDARDS.md and context/README.md.
- content: copies stay byte-for-byte, with a per-tree provenance record of git blob hashes
  checked by a unit test. Rejected: a provenance comment in each copied file.
- content: front matter shows as a key/value table above the page; the title comes from name,
  else the first h1.
- content: the renderer is owned by the architecture site and copied to sqlate. Rejected: the
  root, which renders no Markdown until org.
- content: tests are a crawl over the built site plus the provenance unit test. Rejected: a
  renderer fixture tier in place of the crawl.
- content: the shared site template is its own task between content and components: a site SDK
  released by tag plus a template subtree copied once, after go-web-sdk-template and
  go-cli-sdk-template. Rejected: a GitHub template repository, a scaffold script alone, and
  keeping the hand copy.
- content: the crawl starts at the index, then restarts from each page content.json records that no
  link reaches, and asserts it checked every recorded page; at 8706d04 no page links
  standards/go-elemental/principles/README.md.
- content: sqlate's content.json pins f2b2117, the commit annotated tag v0.6.1 points to, not the
  tag object f09068a.
- content: the front matter table has one row per key, in source order.
- content: each site's STANDARDS.md records the content/ exception to the per-file provenance
  line.
- content: the sites' build dependencies (marked, marked-gfm-heading-id, yaml) are
  devDependencies.
- content: each site's Vite appType is "mpa", so vite preview answers 404 for a path the build
  didn't write rather than serving the index.
- content: the shell uses the foundation's full entry, page-full.css + register-full.js, so the
  theme menu offers every profile. Rejected: the lean entry, which registers only the defaults.
- content: T opens the theme menu through keys.js and the Theme button's data-keys="t", as the
  foundation's preferences.js documents.
- content: the shell fixes land in all three sites, the root included, since the root owns the
  shell's origin.
- content: a minimal site stylesheet on the --space-* tokens, in a layer after the foundation's.
  Rejected: leaving page layout to the components task.
- content: syntax highlighting is its own task after template, in the renderer the site SDK
  takes. Shiki 4.6.0 is the candidate; it ships no flexoki theme.
- content: screenshots are their own task right after content, a `mise run screenshots` on the
  tooling's spike-html-apps-screenshots bin, as the spike-html-apps* repositories have; the review
  task keeps the cross-site review, VHS, and cost.
- content: the architecture site owns site.css, and sqlate and the root copy it unchanged.
- content: site.css caps main at 80ch, since the foundation has no width token.
- content: the T test leaves the theme menu unsaved, so no stored choice persists into the crawl.
- content: each shell links site.css root-relative, as /site.css, and Vite bundles it into the
  entry's sheet.
- plan: the site SDK lives in a new repository, spike-html-hosting-sdk, holding the SDK package
  released by tag and a template/ subtree tagged template/v*; the template task creates it, as
  layers created the other three. Rejected: inside spike-html-hosting-components, a runtime layer
  versioned on its own; two repositories, as go-web-sdk and go-web-sdk-template.
- plan: whether pages.yml becomes a reusable workflow called by tag is left to template's plan.
- plan: no next brief was written; screenshots' start plans it.
- screenshots: the root's chrome-headless-shell moves to 157.0.8103.38 now, so every site's
  captures come from one Chrome. Rejected: holding it until the template task.
- screenshots: every built page is described and named; runs are split with --page, as in
  spike-html-apps-components. Rejected: a fixed sample of pages; one run over a whole site.
- screenshots: a browser test in each site's check asserts a run without --keep leaves no
  capture file. Rejected: showing it by hand in the session brief.
- screenshots: the capture file serves the build through vite preview by a server function
  shared with the browser tier. Rejected: the bin's built-in static server, which has no base
  path and serves one page for every extensionless path (tooling src/server.ts:59-64, 144).
- screenshots: a state's name turns its page name's "/" into "-", since the bin writes every
  state's files into one directory; --page names keep their slashes.
- screenshots: each capture's caption is its page's URL path under the base.
- screenshots: the index's page path is "", the base itself.
- screenshots: the no-capture-left test turns off node's compile cache
  (NODE_DISABLE_COMPILE_CACHE=1), which also writes under TMPDIR, and asserts TMPDIR is empty; a
  second run with --keep shows the captures were written there.
- screenshots: tsconfig.test.json's scripts/ include comes from the architecture site, which added
  it first, and the root and sqlate copy it; no site cites a commit made after its own.
- screenshots: currency prints nothing in every site. It compares the held typescript 6.0.3 with
  the newest version typescript-eslint's peer range accepts, so typescript isn't reported as
  behind. Brief behavior 1 said currency "reports only the held typescript".
- template: the SDK ships built ES modules and declarations, its tag tree the pack, pinned
  `github:JaimeStill/spike-html-hosting-sdk#vX.Y.Z`; node refuses to strip types under
  node_modules. Rejected: shipping TypeScript source.
- template: pages.yml and ci.yml are reusable workflows in the SDK's v* tree, called at @vX.Y.Z,
  which currency compares like an action pin. Rejected: pages.yml alone; copies in template/.
- template: the SDK peers vite, eslint, spike-html-apps-foundation, and spike-html-apps-tooling,
  and pins marked, marked-gfm-heading-id, yaml, vite-plugin-standard-css-modules, @eslint/js,
  typescript-eslint, and globals as its own dependencies. Rejected: every one a site peer.
- template: template/ is the Markdown-copy site; the root keeps its single-page index and Vite
  plugin list as adaptations until org. Rejected: the root's shape; a config factory.
- template: the capture description is an SDK export taking the site's page list. Rejected: the
  whole capture file copied in template/.
- template: a capture page's path is its absolute URL path under the base, the index /<repo>/,
  so the tooling's unknown-profile message names the page; an SDK test asserts it. Supersedes
  "screenshots: the index's page path is '', the base itself." Rejected: "./"; a tooling fix.
- template: the content/ blob-hash check is an SDK export called by a short site test.
  Rejected: a per-site copy.
- template: the SDK's fixture site is the scaffold test, which runs the scaffolded copy's full
  check offline with its SDK dependency pointed at the working tree. Rejected: a separate
  fixture site; the build and browser tier only.
- template: a site is created by an SDK bin, `pnpm dlx
  github:JaimeStill/spike-html-hosting-sdk#vX.Y.Z <repo> [dir]` (npm: `npm exec
  --allow-git=all`), after gonew: it refuses a non-empty directory, writes the name and title,
  pins itself, writes provenance, restores .gitignore, which pnpm pack drops, and writes the
  lockfile. Rejected: giget; a documented git clone; a bin fetching a separate template tag;
  `pnpm create`, which resolves only registry create-* names.
- template: template/ ships inside the v* release; there are no template/v* tags. Supersedes
  "plan: … a template/ subtree tagged template/v*".
- template: a scaffolded file's provenance reads "From|Adapted from spike-html-hosting-sdk
  (vX.Y.Z): template/<path>" beside its upstream lines; JSON carries none. Rejected: one record
  file per site.
- template: this task releases spike-html-hosting-sdk v0.1.0 and the sites pin #v0.1.0; one-way
  for the tag and the new public repository. Rejected: pinning a commit, releasing later.
- template: the SDK exports the shell checks apart from the Markdown crawl; the root calls only
  the shell checks. Rejected: the root keeping a hand-adapted browser test.
- template: currency is an SDK bin; preflight.sh stays a template copy, since it runs before
  node_modules exists. Rejected: currency.sh as a template copy.
- template: existing sites adopt by scaffolding into scratch and copying over on the site's
  branch, keeping content/, content.json, CLAUDE.md, context/, .claude/, and history; the bin
  has no --into mode. Rejected: an in-place overwrite mode.
- template: v0.1.0 releases at a BUILD checkpoint by escalation, the SDK merged and released
  before the adoption slices, as spike-html-apps' layers did. Rejected: splitting the adoptions
  into a following task.
- template: the template's sample copied tree is the SDK's own README pinned at an SDK commit.
  Rejected: a fixture tree in template/; an empty content record.
- template: the SDK reviews (standards, spec) run before the checkpoint, so a fix lands before
  v0.1.0 rather than as v0.1.1; the sites' reviews follow their adoption.
- template: the checkpoint is accepted: the SDK's pull request merges and its release workflow
  cuts v0.1.0, which this session pushes.
- template: vite-plugin-standard-css-modules stays the SDK's own dependency behind an SDK
  export, cssModuleScripts(), holding the sites' include and outputMode, so the pin and its
  configuration move with an SDK bump. Rejected: an SDK peer each site declares and configures.
- template: the scaffold test reads the nested check's output with its color stripped; mise and
  node color their lines on GitHub Actions, which failed the step assertions there only.
- template: the scaffold bin is named spike-html-hosting-sdk, the package's own name, so
  `pnpm dlx` and `npm exec` run it without a bin argument.
- template: the template keeps each file's inherited upstream provenance lines, and so does
  every site scaffolded from it. Two lines that cited spike-html-hosting cb0511c for what that
  commit doesn't hold now cite the commits that do: mise.toml cites c161b7d for
  chrome-headless-shell 157.0.8103.38, and index.html cites fba414c for its full page entry, keys
  module, and Theme button.
- template: the template's sample copied tree is the SDK's README at 93d68b5, the commit whose
  README names cssModuleScripts.
- template: the currency bin reads typescript-eslint's peer range from the installed SDK when the
  site doesn't declare typescript-eslint itself.
- template: no site declares rolldown; vite-plugin-standard-css-modules finds it through pnpm's
  default hoist, `node_modules/.pnpm/node_modules`, and the SDK README tells a site that turns
  the hoist off to declare it.
- template: the architecture and sqlate sites adapt index.html (title and text), vite.config.ts
  (`external` the source's LICENSE), and .gitignore (marathon's .claude/plans/ and
  .claude/briefs/ kept).
- template: the root keeps appType "mpa", drops the unit tier, since it copies no Markdown tree,
  and takes the template's header with the Theme button in it, its page content unchanged.
- template: a STANDARDS.md provenance line reads `From|Adapted from <repo> (<commit>|<tag>):
  <path>`, the tag form for a file from an SDK release.
- template: v0.1.1 candidate: template/README.md's `{{name}}` line runs past 100 columns for a
  long repository name, as in the architecture and sqlate READMEs.
- template: v0.1.0 released at the BUILD checkpoint by this session's release run 41886733833
  (tag commit 3806e18), so SHIP merged the three sites without tagging again.
- template: v0.1.1 candidate: the scaffold's closing line names `mise run install, then mise run
  check` but not `git init`, which the check's actionlint needs; the bin's message and the
  README's scaffold section should name it.
- highlighting: code fences are highlighted at build by Shiki 4.6.0, an exact SDK dependency.
  Supersedes "content: syntax highlighting is its own task after template … Shiki 4.6.0 is the
  candidate". Rejected: highlight.js 11.12.0 (regex grammars); starry-night 3.11.0 (a separate
  HTML serializer, 15 MB); Prism 1.30.0 (last published 2025-03).
- highlighting: the renderer highlights through marked's own code-renderer extension on its
  existing instance; the highlighter is created once per build and render() stays synchronous.
  Rejected: marked-highlight 2.2.4, which wraps its own <pre><code> around Shiki's; marked-shiki
  1.2.1, third-party, last published 2025-08.
- highlighting: Shiki runs the oniguruma engine, the TextMate grammars' own regex engine, so tokens
  match the source editors'; it starts once per build in ~40 ms. Rejected: the JavaScript regex
  engine, faster to start and slower to highlight.
- highlighting: pages render in buildStart, so the generated stylesheet holds every class the
  pages use.
- highlighting: a fence whose label Shiki doesn't bundle, or with no label, renders as plain code.
  Rejected: failing the build, which a byte-for-byte copy couldn't fix.
- highlighting: each palette's code is true to its source theme pair, merged into one Shiki theme
  with light-dark() colors and chosen by data-palette. Rejected: the first plan round's one theme
  bound to the foundation's 16 color tokens, which got 24-69% of characters right; one shared
  theme with per-palette roles, which needs 53 roles to be exact on the three trees' 78 blocks.
- highlighting: syntax colors stay out of the foundation, in the SDK's palette-to-syntax-theme
  mapping, which a site extends as spike-html-apps-noctis extends the foundation's palettes.
  Rejected: per-profile syntax tokens in spike-html-apps-foundation v0.4.0, a reference whose
  conformance contract spike-html-apps-noctis and eight pinning repositories share.
- highlighting: a syntax theme is { palette, light, dark }, each side a Shiki bundled theme's name
  or a theme object; markdownPages() takes the list, the built-ins by default, and a site appends
  outside entries. The SDK merges each pair and exports its check, checkSyntax, named after its
  checkContent, as the foundation exports check(): the same rule list in order, the same font
  styles, and every rule colored in both. Rejected: a new spike-html-hosting-syntax repository;
  spike-html-hosting-components, a runtime layer.
- highlighting: the built-ins use Shiki's bundled themes natively (primer: github-light-default /
  github-dark-dimmed; catppuccin: catppuccin-latte / catppuccin-mocha; everforest:
  everforest-light / everforest-dark). Rejected: a module per palette; copies of the bundled data.
- highlighting: Flexoki, which Shiki doesn't bundle, is a byte-for-byte copy of kepano/flexoki
  vscode/ at 24ab91d (MIT) with its LICENSE and provenance record, entered through the extension
  shape as its first user.
- highlighting: the flexoki syntax theme takes the foundation's green departure: the SDK turns
  Flexoki's green-600 #66800b and green-400 #879a39 into #408739 and #61a25a, rotated to hue 142°
  as spike-html-apps-foundation v0.3.0's flexoki.css does, and the copy stays byte for byte. The
  architect's direction at the release checkpoint.
- highlighting: tokens carry classes from transformerStyleToClass, with one generated stylesheet
  emitted into the build. Rejected: inline styles, +28% brotli on sqlate's bodies against +11%.
- highlighting: the generated stylesheet selects each theme by data-palette, flexoki also on the
  root; code on a palette with no syntax theme is plain, in the page's text color. Rejected:
  falling back to flexoki's syntax colors, made for flexoki's background.
- highlighting: a highlighted block keeps the foundation's pre, its border and no fill, and keeps
  tabindex="0" on <pre> for keyboard scrolling; Shiki's background is dropped. Rejected: the
  source theme's editor background.
- highlighting: fidelity is held by an SDK unit test that every token's light and dark color in
  each palette equals its source theme's over the template's sample tree, and shown by
  session-brief captures of a sqlate code page per palette and scheme beside its source theme's
  own rendering. Rejected: the captures alone.
- highlighting: the browser check highlightsEachPalette, exported apart from `shell`, asserts
  that each palette profiles("color") lists recolors a highlighted token to its syntax theme's
  color, failing a registered palette with none; the architecture and sqlate sites call it.
  Rejected: the renderer's unit tests alone.
- highlighting: an SDK fixture site registers spike-html-apps-noctis v0.1.1, a dev dependency,
  with Noctis Hibernus / Obscuro copied from liviuschera/noctis at 4a82370 with provenance and
  LICENSE, as the extension point's second user. Rejected: a made-up palette in the unit tier;
  no extension test.
- highlighting: the release is spike-html-hosting-sdk v0.2.0, a minor for a new feature at 0.y.z,
  at a BUILD checkpoint before the sites adopt. Rejected: v0.1.1.
- highlighting: v0.2.0 ships both v0.1.1 candidates, closing the two "template: v0.1.1
  candidate" lines: the scaffold's closing line and the SDK README name git init, and the
  template README's {{name}} line stays within 100 columns for a repository name up to 95
  characters. Behavior 10's "any repository name" can't hold, since GitHub allows 100. Rejected:
  a later release.
- highlighting: the architecture and sqlate sites take the v0.2.0 template README, its provenance
  From spike-html-hosting-sdk (v0.2.0). Rejected: a hand re-wrap as an adaptation; leaving the
  119- and 113-column lines.
- highlighting: the root bumps its SDK pin and workflow calls to v0.2.0 with its page unchanged,
  so its currency stays empty.
- highlighting: pnpm's minimumReleaseAge is 0 in the SDK, its template, and every site, set in
  pnpm-workspace.yaml. In PR #3's CI, pnpm 12's default one-day wait refused vite 8.3.6, the
  release currency reported. The architect's direction: no superficial waits; currency stays
  rolling, and each release's notes are read before its bump. Supersedes "layers: no repository
  has a pnpm-workspace.yaml". Rejected: waiting a day; going back to vite 8.3.5; a per-package
  minimumReleaseAgeExclude.
- highlighting: the architect's direction: minimumReleaseAge: 0 becomes the standard for every
  web module that installs with pnpm, now that PR #3's CI and the v0.2.0 release run proved it
  here. The standard is a pending edit to the architecture repository's rolling-currency
  principle.
- highlighting: the components task adds pnpm-workspace.yaml with `minimumReleaseAge: 0` to
  spike-html-hosting-components, as the SDK's template has it.
- components: the SDK joins the task. Its Markdown renderer makes the section tree's, page
  header's, and site index's data at build, from the heading ids getHeadingList() gives, the parsed
  front matter, and every page's path and title. Rejected: the components building it in the
  browser from each page's DOM; tocbot 4.36.8, which rebuilds the heading list and adds no keys or
  progress.
- components: the renderer hands off real HTML inside each element (nested lists of links for the
  section tree and site index, a description list for the header), which the element slots and
  enhances, so every page reads and links with no script and the crawl follows its links. A table
  region is named "Table: <header cells>", or "Table" when every header cell is empty; tree labels
  come from the heading tokens' text, since getHeadingList()'s raw text drops &; a front-matter
  sequence or mapping shows as text joined by ", "; site-index links are relative to each page.
  Rejected: a JSON block each element renders from.
- components: the renderer writes div.section-tree before main, sl-page-header opening main
  (always written, empty with no front matter), and the site index inside sl-drawer (label Pages,
  id pages) after main, so reading and keyboard order match the page and the narrow bar sticks to
  the viewport. Divs, not asides: the components carry their own named nav landmarks. Supersedes
  slice 5's order, both panels after main so a reader reached the text first.
- components: the components are Lit 3.3.3 elements with a shadow root and the stack's sl- prefix,
  as the foundation's sl-theme-menu and spike-html-apps-components' elements are. Each adopts the
  foundation's reset and elements sheets, then a sheet of its own holding its layout and its own
  state marks, from foundation color tokens (the progress track and bar, sl-site-nav's current
  link), since a shadow root's parts can't be styled from the page (spike-html-conventions' answer
  4; the state marks settled at checkpoint 1). Rejected: plain light-DOM custom elements on the
  foundation's dom.js; every color in the page's sheet through ::part().
- components: spike-html-hosting-components' toolchain is copied with provenance from
  spike-html-apps-components: tsc emit build, ESLint, Prettier, a unit tier, and a browser tier on
  spike-html-apps-tooling v0.3.0 in chrome-headless-shell 157.0.8103.38. Supersedes "layers:
  spike-html-hosting-components' check is shellcheck, actionlint, and Prettier until its first
  component". Rejected: the site SDK's ESLint, tsconfig, and Prettier exports, which check a Vite
  site's build and peer vite.
- components: the section tree nests h2 and h3. Rejected: h2 only; sqlate's features page uses its
  11 h3 as package sections.
- components: (superseded at checkpoint 1 by the H and L line below) Left and Right arrows move to
  the previous and next section, shown as bracketed [←] and [→] hints. Rejected then: digits 1-9
  per entry, which reach only nine of sqlate quick-start's 13 sections.
- components: H and L move to the previous and next stop through the foundation's keys module, so
  its help dialog lists them and its off switch turns them off; every arrow stays the browser's
  scrolling. The page's top is a stop and the moves wrap: L past the last section goes to the top,
  H from the top to the last section. At checkpoint 1 the spec review found the keys module cancels
  every key a binding matches and its off switch covers character keys only, so bound arrows
  hijacked sideways scrolling in code blocks and table regions and stayed live with keys off; the
  wrap came with the checkpoint 2 redirect. Rejected: the arrows, kept with the element unbinding
  them by focus and setting; P and N, which left H free for a later Home key; the top as a stop
  with H and L stopping at each end. The wrap retires checkpoint 1's note that a later Home key
  takes a sequence such as G H.
- components: a move counts from the last stop H or L reached until the reader scrolls, and a
  followed tree link, or any fragment change to a heading the tree lists (a link elsewhere, a
  script, history), makes that section the held stop; a page loaded with a fragment is marked by
  the reading line. A move ends on a run of still frames when no scrollend comes, since Safari 26,
  within the browser floor, may not fire it. The 2px landing tolerance stays, untested, as
  insurance against fractional scaling. Components v0.2.1, from checkpoint 2's spec review (moves
  skipping or stalling on sections shorter than the reading line's distance) and standards review
  (scrollend). Rejected: releasing on v0.2.0 and fixing later.
- components: every key hint is a kbd alone, with no brackets: the section tree's Previous and
  Next (components v0.2.2) and the shells' Pages, Help, Theme and Close buttons (SDK v0.3.0, the
  Theme button's T in v0.3.1). The kbd already reads as a shortcut (the architect, accepting
  checkpoint 2; the Theme hint the architect noticed on the sites). The keys help check fails any
  header control that binds a key without showing it. The noctis palette fixture's lone Theme
  button stays as it is, since no keys help check runs on it. Supersedes the bracketed [H] [L] of
  checkpoint 1 and the brief's "bracketed key hints".
- components: reading progress is drawn by a CSS scroll timeline with no script, and an
  IntersectionObserver marks the section in view; Firefox 147-158, within the stack's floor, shows
  no progress. Rejected: a script tracking the scroll position.
- components: below the tree's dock the section tree is a sticky bar at the top of the viewport
  holding only the progress and the Previous and Next buttons, its links hidden: on a narrow screen
  the links aren't critical (the architect's direction, at the checkpoint 2 redirect).
  sl-section-tree takes `dock` (70rem by default, exported as DOCK), read in a media query as
  sl-drawer reads its own, and switches through a custom state, so with no script the list renders
  inline at every width; at the top no section is current, so L from the top lands on the first.
  Rejected: the tree stacked after the page; a second "Sections" drawer, which the copied drawer
  can't open from the inline-end edge; the tree inside the Pages drawer.
- components: the page header shows every front-matter key and value in source order, in place of
  the front-matter table; a page with none shows no fields. Supersedes "content: front matter shows
  as a key/value table above the page" as to the table; the title rule stands. Rejected: the
  header above the table, which shows each key twice.
- components: the site index is every page of the current site, nested by directory, each by its
  title, a directory with an index page labeled by that page's title. sl-site-index is the one
  writer of the current page's aria-current, at runtime, so one rendered list serves every page of
  a site. Rejected: the org stand-in's index of every site, which the org task writes as content;
  one flat list by title; the renderer writing the mark.
- components: sl-drawer is copied with provenance from spike-html-apps-components into
  spike-html-hosting-components, as the toolchain was, so the sites stay on the foundation and
  their own components layer; drawer.css keeps the reference's non-token values (100%, 100dvh, the
  200ms slide, 1px, --line-s, --radius-md), and the lengths test holds that one sheet to exactly
  them. The site index's drawer opens from a "Pages" header button with the P key. Rejected:
  spike-html-apps-components v0.3.0 as a dependency, with its marked dependency and another spike's
  pin; "Documents" with D, as spike-html-apps has it, since these sites list pages.
- components: cross-site navigation's list of sites ships in the components release, the
  build-time-by-tag form the org task measures against fetched-at-runtime; a new site is a
  components release. Links are root-relative, /<repo>/, which resolve on the shared Pages origin
  and in the two-base local test. sl-site-nav renders nothing with no script, which behavior 2
  exempts. Naming the three sites, its dependents, is this spike's accepted exception to the
  architecture's downward-dependencies principle (checkpoint 1's standards review), which the org
  task's measure settles. Rejected: the list written into each site's shell, or no-script fallback
  links there (the hand-edited copies round 1 rejected); absolute
  https://jaimestill.github.io/<repo>/ links; moving the list to the consumers now, which removes
  the measure's build-time-by-tag side.
- components: a table wider than the column scrolls inside its own named, keyboard-focusable
  region, as code blocks do, which the renderer writes, since focus needs markup, and site.css
  styles; a 390px check on every page holds it. At main before the task, the architecture index
  (426px), architecture standards/go-elemental/ (392px), and sqlate docs/features.html (623px)
  scrolled sideways. Rejected: wrapping cells, which breaks code names such as errors.Is; site.css
  alone, which can't make a table focusable.
- components: the stored theme across sites is proven by a components browser test serving two
  fixture sites under two bases on one local origin, and shown live on the deployed sites in the
  session brief. Rejected: the live capture alone; each site's own preview is its own origin.
- components: each side column docks only where it fits, at a minimum of 16rem beside main's 80ch,
  measured in the pinned shell: three columns at 86rem and wider; from 70rem the section tree
  docked and the site index in the Pages drawer; below 70rem one column with the tree's sticky bar.
  The renderer writes both widths as each element's dock, exported as docks, and a unit test holds
  site.css to them. sl-drawer keeps the reference's 48rem default. Navigation text never breaks
  mid-word, though a hyphenated compound may wrap after its hyphen, the words on each side whole.
  Supersedes the v0.2.0 estimate of about 88rem for both docks. Rejected: three columns from 70rem,
  cramped at about 1400px (the architect, at the redirect); treating a wrap after a hyphen as a
  mid-word break, which would widen the side columns or move the 86rem dock.
- components: the SDK's shell checks and crawl hold the layout: fitsNarrowWidth (no sideways
  scroll at 390px); keepsNavigationWords (at 390, 1119, 1120, 1375, 1376 and 1400px, no
  navigation word across lines, no docked side column under 16rem); holdsBetweenDocks (main
  centered at 1200px on a page with no section tree); startsUnderHeader (main's gap under the
  header, or the sticky bar at 390px, the same on the page as built and made taller than the
  viewport, so no margin, row or alignment rule is restated in the check; not bounded absolutely,
  since a gap the same on every page is the captures' and the design review's to catch); and
  opensKeysHelp ("?" opens it, it lists exactly the page's bindings, and the off switch stops L
  and P). definesEveryElement fails a page holding an undefined custom element, naming the tags, so
  a shell missing a component module fails the check instead of hanging the screenshots tool's
  whenDefined() wait (checkpoint 1's spec weak spot, sdk 1c5c56e).
- components: the shells carry a "Help" button with its ? hint and the foundation's keys help
  dialog, after its demo/keys.html (18e0c55); Pages, Help, Theme and Close take aria-labels, since
  the help module would name a row from the text with its kbd hint removed. Checkpoint 2's spec
  review found no help dialog in the shells, so readers couldn't see H, L, P and T or reach the off
  switch, and main off-center between 70rem and 84rem on pages with no section tree; both fixed in
  SDK v0.3.0.
- components: the crawl computes the header's expected dd text with the renderer's exported
  frontMatterText, and the unit tier pins pageHeader's exact output, so a formatting bug there
  still fails. The crawl keeps its restart from content.json and its unreachable result as a guard,
  though every page's site index now reaches every page; removing it would change the crawl beyond
  this task (standards reviews).
- components: the SDK and its template pin components as a dev dependency, since no SDK module
  imports it. The shells load the components' modules render-blocking after the foundation's, with
  sl-site-nav at the header's start. renderBlocking groups every module a page loads statically
  into one chunk (rolldown codeSplitting group "index", tags $initial), so a page keeps one module
  script once the keys module's dynamic help-dialog import split Vite's preload helper into its own
  chunk; the theme menu and the keys help stay lazy chunks.
- components: the root takes sl-site-nav, the Help button and the keys help dialog only, since its
  shell runs the shell checks; its page has no front matter and one heading until org. Rejected:
  the page header and section tree on its placeholder page.
- components: held rolldown at 1.2.16: Vite 8.3.6, the latest, depends on rolldown ~1.2.16, and
  rolldown 1.3.0's notes say Vite 8.3.6 and earlier can't run it. The SDK and its template pin pnpm
  12.18.0, whose notes add pnpr registry, agent-skill and outdated features the SDK doesn't use, so
  the SDK's currency reports only the held rolldown. The three sites' currency prints nothing: the
  hold is the SDK's own pin and no site pins rolldown, so behavior 17's "only the held rolldown"
  holds with no line at all.
- components: the release order is components, then the SDK, then the architecture, sqlate and
  root sites, each release at a BUILD checkpoint before its consumers pin it. The template shell's
  components wiring moved from slice 6 into slice 5, since the screenshots tool waits for every
  hyphenated tag to be defined; slice 6 became the v0.3.0 release preparation alone. Rejected: an
  unchanged template shell, with the components a per-site adaptation.
- components: the checkpoint 2 redirect: the architect's look at the local builds found the three
  columns cramped at about 1400px, the site index breaking words mid-word, and H unable to return
  to the top. The fixes shipped as components v0.2.0 at a reopened checkpoint 1, pinned by SDK
  v0.3.0 before it released. Rejected: holding the fixes for a later task.
- components: the sites' spec review found main pushed down on pages shorter than the viewport at
  70rem and wider (the root 333px low; six architecture pages at 1200px), and the architect then
  noticed the Theme button showed no key. Both shipped as SDK v0.3.1, which the three sites pin
  before they merge. Rejected: shipping the sites on v0.3.0.
- components: released by this session, each by its release workflow on the merge:
  spike-html-hosting-components v0.1.0 (PR #3, d4bbbd5, run 42096936848), v0.2.0 (PR #4, 70a1122,
  run 42122025990), v0.2.1 (PR #5, 646b864, run 42133877521) and v0.2.2 (PR #6, 190dbac, run
  42149691751); spike-html-hosting-sdk v0.3.0 (PR #4, dfbb2d7, run 42151094511) and v0.3.1 (PR #5,
  1c1d552, run 42214089393). Checkpoint 1 closed on the architect's answers: once the fixes landed
  and both reviews passed again, the components merged and released without another stop.
- components: evidence 4, as validated: the components' browser tier proves sl-section-tree's
  nested h2 and h3 links, the section in view marked aria-current, H and L cycling through the top
  and every section through the foundation's keys module (listed in its help dialog, off with its
  switch), the arrows left to the browser's scrolling, the Previous and Next buttons with their
  hints in kbd, the narrow sticky bar, and the reading progress following the scroll, absent
  without scroll timelines and shown under reduced motion. The SDK's crawl proves, on every page
  of the sqlate and architecture builds, the page header against the source's front matter, the
  site index listing every built page, and every link, the tree's among them, reaching its
  fragment's element.
- components: evidence 6, as validated: every site pins spike-html-apps-foundation v0.3.0, which
  the components take as a peer at ^0.3.0, so one copy serves the page and the components' shadow
  roots. The components' two-base test proves a theme saved through the menu on one site applies
  before first paint on the other on one local origin, and a palette the second site doesn't
  register falls back to its default and stays stored. Nothing yet proves it live on
  jaimestill.github.io (behavior 19).
- components: the org task inherits sl-site-nav's site list, built into each components release
  (the build-time-by-tag side of its measure against fetched-at-runtime); the accepted exception to
  the downward-dependencies principle, which that measure settles; and the live stored-theme
  capture across the three deployed sites, owed once this task's merge deploys them.
- components: the architect accepted the session brief; the five pull requests merge lowest layer
  first, and the live cross-site theme capture follows the three deploys.
- org: the shared-navigation measure runs locally, on fixture sites under their bases on one origin
  in spike-html-hosting-components' browser tier. Rejected: a live measure across the three
  deployed sites, which needs a components release, an SDK check change, and both other sites
  shipping a fetch mode the verdict may reject.
- org: the charter is a byte-for-byte copy of standards-lab/.github's profile/README.md at dd10b25,
  with provenance, rendered at build. Rejected: new charter text written for the stand-in; the org
  holds no charter document.
- org: briefs/orientation.md is shown twice, as a hand-written HTML page beside the same Markdown
  rendered at build. Rejected: the rendered Markdown alone, which shows only hosting.
- org: the hosted persistent report is the dated sitrep-style entry. Rejected: a separate report
  beside it.
- org: the sitrep entry is written directly as HTML, as persistent artifacts are (web-client.md).
  Rejected: Markdown rendered at build.
- org: the sitrep entry's subject is spike-html-hosting's six shipped tasks, PRs #1 to #6, drafted
  from the goal record's history and the merged pull-request bodies. Rejected: experiment.html
  across its spikes.
- org: sl-site-nav paints its built-in list first and replaces it with the fetched list on success,
  keeping the built list on any failure. Rejected: an empty nav until the fetch lands.
- org: sl-site-nav fetches with the browser's fetch(). Rejected: @lit/task 1.0.3, whose pending and
  error rendering has nothing to draw.
- org: the list's URL is an optional src attribute; with none, the element behaves as v0.2.2.
  Rejected: a URL built into the components release.
- org: the root deploys sites.json at /spike-html-hosting/sites.json. Rejected: the list existing
  only as a components fixture.
- org: one site deployed ahead is staged by the fixture server answering the ahead site's site-nav
  module with the built module's list changed, written to no file. Rejected: a public sites
  property, which brings back lists written in pages.
- org: the staged change adds a fourth site. Rejected: relabeling an existing site.
- org: the SDK renders several copied trees, each with its own source and commit, under one site
  index; its provenance record, content check, page list and crawl read every tree, and a
  single-source record stays valid. Released as spike-html-hosting-sdk v0.4.0. Rejected: two
  markdownPages instances with a root-local crawl and content check.
- org: GitHub alerts render as callouts through marked-alert 2.1.2, an exact SDK dependency listed
  in marked's docs, styled in site.css. Rejected: the plain blockquote marked renders.
- org: copied pages keep their source paths under a directory named for their source repository.
  Rejected: reader-facing paths, which would need a source path recorded apart from each site path.
- org: the sitrep entry's URL is /sitreps/<date>-spike-html-hosting.html, dated the day it is
  written. Rejected: a directory per entry.
- org: sitrep entries are listed by date, newest first, on the org index. Rejected: a sitreps
  listing page with an Atom feed, which waits for a second entry.
- org: the index of every site is hand-written, each site with a line on what it holds, and the
  browser test holds it equal to sites.json. Rejected: rendering it at build from sites.json.
- org: the root pins components v0.3.0 and sets sl-site-nav's src to its own sites.json, the one
  live fetched nav; its fetch stays under its base, so the SDK's checks hold.
- org: the header gets no icon change in this task.
- org: the architect views captures before each release checkpoint, ahead of the standards and spec
  reviews.
- org: icons become their own roadmap task, icons, between org and design. Rejected: icons inside
  org, which would add a third release and checkpoint.
- org: the design review becomes its own roadmap task, design, between icons and review; the review
  task keeps evidence 9, the VHS demo and cost, and changes no layer. Rejected: the review inside
  org; the review folded into the review task.
- org: for the icons task, icons live in a new layer repository, spike-html-hosting-icons, one
  package under the components and the SDK, as the standard the apps line can reuse. Rejected: a
  module inside spike-html-hosting-components, which the apps line can't reuse.
- org: for the icons task, glyphs reach components and pages as typed per-icon ES modules the icons
  layer generates at its build, so a bundle carries only the icons it imports. Rejected:
  unplugin-icons' virtual imports, which run only inside Vite.
- org: for the icons task, icons render as inline SVG in currentColor, aria-hidden and
  focusable="false", as github.com ships Octicons. Rejected: an SVG sprite with <use>, a CSS mask,
  an icon font.
- org: for the icons task, the glyph data comes from Iconify's per-set packages through
  @iconify/utils at the layer's build. Iconify is MIT code from Iconify OÜ (Estonia) and a
  single-maintainer risk: cyberalien made 87% of iconify/iconify's human commits and 99% of
  icon-sets'. Its data keeps each set's upstream licence, modified by Iconify Tools; it follows
  upstream's repository (octicon updated 18 minutes before 19.42.0 published; lucide about 3 days
  behind). The released per-icon modules don't depend on it. Rejected: one set's own upstream
  package.
- org: "only what is used" keeps the foundation's full entry, since the theme menu offers every
  profile and the bundled CSS is 3.4 KB brotli. Rejected: the lean entry.
- org: the 14 diverging copies of the currency script across the web repositories, and sl-drawer
  duplicated from spike-html-apps-components, are recorded for the answer task and the intake.
  Rejected: acting on them in this task.
- org: evidence 12 is added: one icon toolkit, every set available while designing, each build
  shipping only the icons it uses. Rejected: folding icons into evidence 9.
- org: the architecture and sqlate sites stay on SDK v0.3.1 and components v0.2.2 until the icons
  task's upgrade slices; their currency shows the SDK trailing in between. Org's repositories are
  the root, components and the SDK. Rejected: adopting v0.4.0 inside org.
- org: the live stored-theme capture owed by the components task is shown in org's session brief,
  after the root's deploy.
- org: the goal's Tasks gain icons and design between org and review.
- org: renderBlocking sets rolldown's output.strictExecutionOrder for every site, so each page runs
  only its own scripts; a shared chunk ran every page's scripts, and the Pages-drawer script threw
  on a hand page with no drawer. Every page now loads three JS files (its entry, the shared index
  chunk, rolldown's runtime) instead of one; the review task's cost measure records it. Rejected:
  an opt-in option set by the root alone.
- org: a copied tree's directory is its repository's name with one leading dot dropped
  (`.github` → `github/`), and content.json holds `{ "trees": [ ... ] }`, each entry the
  single-source shape with files keyed by source path.
- org: the SDK's site index lists only copied pages; hand pages are not in it.
- org: sl-site-nav treats an empty list as malformed and keeps its built list. A changed src
  renders the built list until the new list arrives; removing src restores the built list and
  fetches nothing.
- org: the ahead fixture site's module is the built dist/site-nav.js requested with ?ahead, which
  the fixture server rewrites in memory on each request.
- org: the SDK's crawl counts a built page that no content.json record names as a hand page,
  listed in Crawled.hand, instead of failing. The root's test asserts Crawled.hand exactly; a
  scaffolded site's test asserts the page count.
- org: the SDK fails the build when a hand build input resolves to a copied page's path.
- org: sites.json ships as public/sites.json, with publicDir "public"; every root page's
  sl-site-nav src is %BASE_URL%sites.json.
- org: the rendered orientation page links its hand form through page.html's render-blocking
  script, which maps a copied page's path to its hand page's, so the copy stays byte for byte; the
  link needs script, as the fetched nav does. Rejected: a link on every page, hidden by :has().
- org: root.css, the root's own layer after site.css, holds the diagram and form-note styles. Hand
  pages carry no Pages drawer, since the site index lists only copied pages.
- org: the hand orientation page's two diagrams, the three primitives layered and the marathon
  session's cycle, are SVGs with role=img, named by their title and described by their desc.
- org: the root's browser test leaves out highlightsEachPalette: the root's one code fence is a
  plain line, with nothing to highlight.
- org: the verdicts' drafting-token counts use the Gemma 4 tokenizer (google/gemma-4-E4B-it,
  cached locally), since no Anthropic tokenizer was available offline.
- org: prose left over 100 columns in the released repositories, for the icons task's slices
  there: the SDK README's lines on Crawled, sl-site-index and the drawer, and its crawl paragraph's
  early break; the components README's screenshots line and served.ts's handler comment.
- icons: Octicons is the default set: GitHub's UI set, MIT, with a glyph for every control, and
  the alert callouts already draw it. Rejected: Lucide, Tabler, Phosphor.
- icons: "every set available while designing" is a generator that takes any Iconify set by name,
  a released list of sets, and a dev-only browse page that is also the layer's capture fixture.
  Rejected: releasing all 276 sets (about 474k modules); a browse page over @iconify/json (643 MB).
- icons: the generator accepts only sets whose licence the shipped licence text satisfies (MIT,
  ISC, Apache-2.0, BSD, CC0-1.0, Unlicense), and the package ships each set's upstream LICENSE
  with provenance, since Iconify's packages carry none. Rejected: CC-BY, CC-BY-SA and GPL sets.
- icons: v0.1.0 releases Octicons alone; a set joins with its devDependency and a minor release.
  Rejected: Octicons with Lucide.
- icons: each per-icon module default-exports one complete svg string. Rejected: Iconify's data
  object, which needs a renderer, as @iconify-icons/* do; a Lit template.
- icons: spike-html-hosting-icons is a peer of the components and the SDK, pinned by every site.
  Rejected: a pinned dependency of each.
- icons: an SDK build step fills <svg data-icon="<set>/<name>"> in every page a site builds and
  fails on an unknown name. Rejected: SVG pasted into each page template by hand.
- icons: a malformed glyph marker (self-closed, unquoted, not empty) fails the build, naming the
  page and its tag, and the fill skips comments, so every marker is filled. The standards
  review's fix, kept by the session.
- icons: the alert callouts take their glyphs from the icons package through marked-alert's
  variants. Rejected: marked-alert's own strings, which lack focusable="false".
- icons: the header's Pages, Help and Theme buttons stay hand markup in each page template.
  Rejected: an sl-* header element, left to the design task.
- icons: sl-section-tree's Previous and Next show a glyph and their kbd hint, the word their
  accessible name; sl-drawer's Close is the glyph alone, still named "Close <label>". Rejected: a
  glyph beside the visible word.
- icons: the keys help dialog's Close shows Octicons x with its ? hint, named Close. Rejected:
  text as before.
- icons: every glyph is an Octicon on its 16px grid: list-unordered for Pages, question for Help,
  arrow-up and arrow-down for Previous and Next, x for each Close, and GitHub's own info,
  light-bulb, report, alert and stop for the alert callouts. Rejected: the 24px grid; book and
  sidebar-expand for Pages; chevrons for Previous and Next, which read as expand and collapse.
- icons: Theme is Octicons gear, chosen at checkpoint 3 over the planned paintbrush. The
  architect's direction there: the design task turns the Theme dialog into the Settings dialog and
  moves the keyboard settings out of Help, which then only describes the shortcuts, so only the
  name, key and dialog change there. Rejected: paintbrush, sliders, sun and moon.
- icons: the Theme button keeps its name, Theme, and its key, T, since the foundation's dialog
  heading is "Theme" and its Save is T. The design task weighs them with the dialog's heading and
  glyphs on its Save and Cancel, which the foundation renders, for the intake as one foundation
  change (checkpoint 2's direction). Rejected: Settings or Appearance now.
- icons: names on hover for icon-only controls go to the design task. Rejected: the title
  attribute, which never shows on keyboard focus or touch; a tooltip of our own, which needs
  script in Safari until it ships popover="hint" and must meet WCAG 1.4.13.
- icons: the narrow header wrapping Help and Theme onto a second line at 390px is left for the
  design task. Checkpoint 3's direction.
- icons: the browse page's glyph names break only at hyphens, never within a word (a <wbr> after
  each hyphen), so its grid shows two cells a row at 390px. Checkpoint 1's direction.
- icons: the icons layer pins rolldown 1.3.0 for its fixture build; the SDK's hold at 1.2.16 is
  Vite's constraint, and the icons layer has no Vite. Checkpoint 1's direction.
- icons: the task releases icons v0.1.0, components v0.4.0, then SDK v0.5.0, each at a BUILD
  checkpoint where the architect views captures before the standards and spec reviews; the
  architecture, sqlate and root sites adopt after.
- icons: org's prose over 100 columns is rewrapped by hand. Rejected: a prose-width check, which
  tables, URLs and code would need exempting from.
- icons: the SDK's shell checks click an element only once its center is in the viewport and hits
  the element, and showsGlyphs waits until no dialog is open and the page is held at its top. PR
  #8's CI failed once on the Help click; the likely cause, a late smooth scroll from the keys-help
  check's L, wasn't reproduced locally, so a failed click now names the element it would hit.
- icons: evidence 12, as validated: the icons layer's unit tier generates a fixture set in
  Iconify's format by name, refuses CC-BY, CC-BY-SA, GPL and OFL sets, and holds a fixture build
  to exactly the icons it imports; its browser tier checks the browse page, every Octicon in every
  profile. The architecture, sqlate and root builds ship 6, 6 and 7 of the package's 986 Octicons,
  each exactly the icons its pages name.
- icons: for the design task: spike-html-hosting-icons' STANDARDS.md has no Design section,
  which the components' STANDARDS.md has, though its browse page draws on the foundation.
- icons: for the review task: a refused set built after an accepted one leaves the accepted set's
  output in the icons layer's dist/, though the build still exits 1.
- icons: for the review task: the icons layer's browse test expects a set's licence label to be
  its SPDX identifier, else its title, while browse.js shows the title when a set has an SPDX
  identifier but no URL.
- icons: for the answer task: SDK provenance follows two conventions. The root's pages keep each
  earlier SDK provenance line and add a v0.5.0 line, while the architecture and sqlate sites
  change their one SDK line to the new tag.

- design: two capture checkpoints, captures first: the architect marks fixes from the sites as
  they stand, then sees the fixed builds before any release. Rejected: carried fixes first, one
  checkpoint.
- design: capture widths 390x844, 1120x700, 1376x860 replace 1280. Rejected: adding beside 1280.
- design: Theme becomes Settings, heading Settings, key S. Rejected: keeping Theme and T; comma.
- design: Settings and Help are built in spike-html-hosting-components on the foundation's public
  modules, and recorded for the intake as foundation changes. Rejected: intake only; editing the
  foundation in this spike.
- design: the keyboard-shortcut dialog is a documented pattern, not a component (the architect's
  direction): key + opener glyph button → native modal with heading, any content its focused
  operation needs, and an Esc Close; Settings and Help are its worked instances; it extends to any
  focused overlaid interface (U to upload). Written in the components README, held by an SDK shell
  check, promoted to an architecture pattern page at the intake. No built-in Save or Cancel.
  Rejected: a light-DOM element, a Lit base class, a wiring function.
- design: Settings applies and stores each change at once, Close only. Rejected: preview,
  Save/Cancel with revert.
- design: every shortcut dialog's Close shows Esc; Help's ? Close becomes Esc. Rejected: the
  opener's key, which keys.js ignores while a field has focus.
- design: Settings keeps the live preview card on the foundation's theme-menu.css. Rejected:
  dropping it.
- design: Help's list is built by the components from bindings(). Rejected: hiding the
  foundation's settings fieldset by CSS.
- design: the index is captured with Settings open and with Help open at each width. Rejected:
  Settings alone.
- design: names on hover by interest invokers (interestfor + popover="hint"), Chromium only today.
  Rejected: a CSS anchor-positioned label Escape can't dismiss (WCAG 1.4.13); the intake.
- design: header buttons are one group at the inline end; the nav wraps its own links. Rejected:
  the nav on its own row; hiding key hints.
- design: glyph buttons are their own control (the architect's direction): class glyph-button on a
  native <button>, one exported components sheet glyph-button.css, adopted in shadow roots and
  linked by pages; padding --space-3xs block, --space-2xs inline, --space-3xs gap; native border
  and surface kept. Rejected: wrapper or shadow-root elements; --space-3xs all round; borderless;
  icon-button.
- design: new elements sl-shortcuts and sl-settings; dialog ids help and settings (defaults).
- design: spike-html-hosting-icons' STANDARDS.md gains a Design section; no icons release.
- design: releases are those the review needs: components v0.5.0, then SDK v0.6.0, after
  checkpoint 2; icons stays v0.1.0.
- design: components take eslint-plugin-import-x 4.18.0; SDK rolldown stays held at 1.2.16 (Vite
  8.3.6 pins ~1.2.16).

- design: checkpoint 1 closed with no marks beyond the brief (the architect's direction): BUILD
  runs the fixes already aligned on (slices 3-12), and the architect marks what changes next at
  checkpoint 2, from the fixed builds. The session's two candidates from checkpoint 1's captures
  are carried to checkpoint 2: every shortcut dialog's width capped near the reading measure, and
  the front-matter table that reads as page content above the title.

- design: the spike repositories may release several times in this task (the architect's
  direction: that is the point of a design review in spike repositories). components v0.5.0 and
  SDK v0.6.0 are the first; each later round of checkpoint marks may release the next patch or
  minor, and the sites adopt each.

- design: a shortcut dialog returns focus natively, to what held it when the dialog opened: the
  opener when it was clicked, the prior focus when its key opened it (keys.js clicks without
  focusing). Behavior 9's "focus returns to the opener" holds for a click; no script is added.
- design: both shortcut dialogs take the foundation menu's width cap, min(100% - 2 * --space-s,
  56rem), in the SDK's site.css, since sl-settings sizes nothing outside its shadow root.
- design: the header's button group is `<div class="header-actions">`; the Pages opener is
  `glyph-button pages-opener`, displayed inline-flex at narrow widths.

- design: the SDK's shell checks clear the stored theme and keys settings after each check that
  sets them, since Settings stores at once and the checks share a browser's localStorage.
- design: the SDK's template/content/README.md (a copy of the SDK README at 93d68b5, recorded by
  blob hash) still says Theme on T; the SDK release slice re-copies it and updates content.json.
- design: a site or the SDK builds against an unreleased layer by installing a copy of the layer's
  package.json, README, LICENSE and dist/ (with a node_modules symlink to the layer's own) at
  node_modules/@jaimestill/<layer>, since cssModuleScripts() parses only paths under node_modules;
  no tracked file changes, and `pnpm install --frozen-lockfile --offline` restores the pin.

- design: checkpoint 2's review (the architect): Help's rows are plain text, focus opening on
  its Close. Rejected: a button per row that runs the binding.
- design: full HJKL: J/K move to the next and previous section, H/L to the previous and next page
  in the site index's order; hand pages bind no H/L. Rejected: H/L for sections.
- design: the section tree is links alone, the current section marked by an inline-start accent
  rule and bold text. Rejected: the scroll-timeline progress bar and the Previous/Next buttons,
  which read as disjointed from the design; the progress redrawn as a vertical rail.
- design: below 70rem the section links live in sl-drawer#contents, opened by a header-actions
  glyph button as Pages is (the architect's direction); this supersedes the components decision
  that rejected a second drawer, since it slides from the inline-start edge as Pages does.
  Rejected: the sticky bar; a disclosure under the current section's title.
- design: the Contents opener is list-ordered-16, key C, named Contents (session defaults, open
  to the architect at checkpoint 3). Rejected: O; Sections.
- design: a pager at the top and the bottom of each copied page (the architect: for easier
  discovery), no wrap, H/L by data-keys on its links; hand pages get none. Rejected: a pager at
  the bottom only; keyboard-only page moves.
- design: below 40rem the site nav keeps its own row and never wraps, and the actions group takes
  the next row; from 40rem one row. Rejected: the one-group header with the nav wrapping; a
  break that depends on each site's nav width.
- design: a nav menu at narrow widths, and sub-navs (a nav within a nav), are recorded for later
  (the architect), not built.
- design: each shortcut dialog's Close sits at the top inline end, in a header row with its h2.
  Rejected: a trailing footer.
- design: more space under each dialog's h2; Help is as wide as its content, capped at 56rem
  (the architect: maximized around its contents, not the space); Settings keeps 56rem.
- design: front matter is not visible (the architect: metadata that clutters the layout); one
  meta element per key in the head; sl-page-header removed. Rejected: the visible dl; dropping
  the metadata entirely.

- design: checkpoint 3's marks (the architect): below 40rem the actions row aligns to the inline
  start, under the nav. Rejected: the inline end, which read as a separate band.
- design: below 40rem the pager shows only "← Previous" and "Next →" (the architect: a narrow
  screen is likely a phone with no keyboard); the title stays in the link's name, visually
  hidden, so label-in-name holds; the kbd hint is hidden. The header's key hints stay at every
  width (the keys check fails a control hiding the key it binds). Rejected: titles and hints at
  every width; hints tied to pointer: coarse, left for later.

- design: checkpoint 4 closed with no marks (the architect: "looks great").

- design: standards review (components): includeInternal dropped from eslint.config.js, inert
  since eslint-plugin-import-x 4.18.0; the own name is refused by the layer table alone.
- design: sl-shortcuts reads bindings against the topmost modal; a second modal over Help is
  ruled out by the pattern (the page is inert and keys fire only inside the open modal), so no
  change. Recorded for the intake's pattern page.
- design: NOTE in sl-shortcuts copies the foundation's screen-reader note; a unit test reads the
  pinned foundation's keys-help source and fails on drift, since the element never loads it.

- design: for the review task: the SDK's landing() adds a Page.loadEventFired listener per call
  that the tooling's Page can't remove (it has on() but no off()), so listeners pile up over a
  crawl; and the crawl's front-matter meta check, on a page with no front matter, only confirms
  that no meta takes a key's name.

- design: spec review: every behavior met or not yet due (16-20, the releases and pins). Gaps
  closed: the components take eslint-plugin-import-x 4.18.1 and typescript-eslint 8.72.2, since
  behavior 1 means current dependencies (4.18.0 was latest when the brief was written); the
  SDK's target-size check runs every type at each capture width; hover and Escape on the
  interest hints are tested; the components README places the group at the inline start below
  40rem. The SDK release slice also takes typescript-eslint 8.72.2 and vite 8.3.7.

- design: the SDK's target-size check measures every space and type the foundation registers at
  the capture widths (WIDTHS, now exported from screenshots.js), dropping 1600px; it costs about
  0.8s more per page, 19% on the SDK's browser tier.
- design: for the review task and the intake: in a modal, Escape with a glyph hint shown closes
  the dialog (and the hint with it), not the hint alone; on a plain page it closes the hint
  alone. Opening the drawer by mouse shows its Close's hint at once, since focus there counts as
  interest though :focus-visible doesn't match.

- design: components v0.5.0 released (PR #10, merged at 0bc7e41, tag v0.5.0). Its first CI run
  failed a font-dependent precondition in the shortcuts width test (the fixture table measured
  290px on the runner against the 288px minimum); the test now builds its own short and long
  tables, shown to hold under five simulated font metrics. The Escape hint tests wait for the
  hint's queued toggle event (a flake seen once locally).

- design: SDK v0.6.0 released (PR #9, merged at 97f4fca, tag v0.6.0) on components v0.5.0, with
  typescript-eslint 8.72.2, vite 8.3.7 (which moves rolldown to ~1.2.18; 1.3.x stays held) and
  chrome-headless-shell 157.0.8103.50. Its scaffold test caught the README's pager names as raw
  <title> markup, which swallowed the template's rendered copy; they are code spans now.

- design: the sites pin SDK v0.6.0, components v0.5.0 and icons v0.1.0, with vite 8.3.7 and
  chrome-headless-shell 157.0.8103.50 as the template has them; the task's interim commit
  provenance lines become one line per layer at its release tag. For the review task: the SDK
  template's fba414c provenance line still names the Theme button on T; the sites keep their
  corrected wording.

- design: the architect accepted the session brief; the task shipped.
- review: evidence 9 is recorded from the screenshots task's capture command and no-capture test
  and the design task's checkpoints; this task captures only what it changes. Rejected: a second
  full capture pass over the three sites.
- review: the five findings parked for the review task are fixed here, at the architect's
  direction ("as optimal as possible for ingest"). Rejected: recording them for the answer task.
- review: the SDK's two parked fixes, marked 18.2.0 and the template's provenance line release as
  SDK v0.6.1, which all three sites pin. The icons fixes are dev-only (the package ships only
  dist/, and a refused build fails the check before any pack), so by the architect's rule icons
  stays at v0.1.0. Rejected: icons v0.1.1.
- review: held rolldown at 1.2.18: vite 8.3.7, the latest, pins ~1.2.18.
- review: the demo records sqlint v0.3.0, the version the copied v0.6.1 docs describe,
  superseding setup's sqlint/v0.1.1. Rejected: v0.1.1, which `go run …@v0.1.1` can't resolve.
- review: the recordings demonstrate a revised sqlate quick-start, its own program plus a new
  step 12 (org-scoped projects; app.tenant and app.live layered with sql.guard_set and
  sql.guard_where in a guarded returning command; cursor paging on PostgreSQL's keyset overlay).
  Rejected: a sqlint-only fixture.
- review: the sqlate site edits its quick-start copy in place, and content.json marks it `revised`
  against the original blob; the intake proposes the revision to sqlate. Rejected: a patch or
  revision option in the SDK; a site-authored page; a hand page.
- review: the program's task is `program`. Rejected: `run` (stutters as `mise run run`), `app`
  (clashes with the pattern namespace), `demo`.
- review: five recordings, placed under steps 9, 10, 11, 12 and 12 by the site's build, not
  written into the Markdown, so the revision goes to sqlate unchanged.
- review: WebM in a native video. Rejected: GIF.
- review: the recordings are committed as WebM with a hash of their inputs; the check verifies the
  hash offline, `mise run tapes` re-renders only what changed, CI never renders. Supersedes
  setup's "Rejected: committing the recording". Rejected: an actions-cache render (needs SDK
  workflow hooks); a bot commit from a path-filtered workflow.
- review: VHS drives the pinned chrome-headless-shell. Rejected: the browser found on PATH.
- review: migrate, seed and run recordings use a live PostgreSQL 18 in Docker; composed SQL is
  shown offline through sqltest.
- review: behavior 6 already holds, so it ships no change: spike-html-apps-tooling v0.3.0's
  Page.on() keeps one listener per session and method, replacing any before it
  (dist/browser.js:101), so landing()'s Page.loadEventFired listener never piles up over a crawl.
  The design Decision that parked it read on() as adding listeners. Rejected: a test counting
  page.on calls as listeners (it would misstate the tooling); rewriting landing() to poll.
- review: the recordings use VHS's built-in zenwritten_dark theme and CaskaydiaMono Nerd Font, one
  render shown on every site theme, at the architect's direction: a site may offer any number of
  themes, so a recording takes one neutral dark theme that clashes with none. zenwritten_dark's
  background is pure grey (#191919), its foreground #bbbbbb at 9.2:1, and its ANSI colours muted,
  each at least 5.2:1. Rejected: GitHub Dark and Primer (blue-tinted, too cool); Dark+ (vivid
  colours, the darkest at 3.2:1); Primer's ANSI tokens as a custom theme; a render per page theme.
- review: at checkpoint 1 the architect accepted the refined recordings: a 77x24 terminal at 20px
  in the 712px column; output sequenced one screen at a time, and output taller than the screen
  written to a file and shown with head and tail on camera, "an acceptable approach when content
  would overflow the vertical space"; posters, with preload="none" (with a poster, Chrome cancels
  the metadata request partway, and the crawl counts it as failed). The guide drops behavior 11's
  `sql` task for `go test -C <package> -run TestSQL[/<name>]`, and adds a layout_test.go helper
  per package that puts each SQL clause on its own line, changing only whitespace.
- review: the revised quick-start also renames step 11's `print` helper to `printJSON` (it shadowed
  Go's predeclared print) and closes the pool when step 5's catalog fails (`errors.Join(err,
  pool.Close())`), from the standards review, and adds an intro bullet for step 12. Each goes to
  sqlate with the revision at the intake. Kept: the program's `go = "1.27"`, as the guide tells a
  reader to write it; a later 1.27.x on the rendering machine could render a tape without staling
  its hash.
- review: cost is per page, every response the page loads, gzip as served and brotli computed,
  median and max per site; build time from the Pages runs; push-to-live from fresh runs (the
  task's merges plus five dispatches per site); measured by a committed root `mise run cost`,
  outside the check.
- review: SDK v0.6.1's request check and crawl hold a `data:` or `blob:` URL to no base, since
  Chrome's native `<video controls>` loads its control icons as `data:image/svg+xml` URLs, which
  failed "every request resolves under the base" on the sqlate quick-start. Every network request
  is still held under the base.
- review: the recordings' vhs, ttyd and ffmpeg are pinned in the sqlate site's mise.tapes.toml,
  which mise loads only under MISE_ENV=tapes, set by `mise run tapes`, so `mise run install` and
  the workflows' mise-action never fetch them. The recordings' input hash reads each pin there.
- review: SDK v0.6.1's currency reads each `mise.<env>.toml` at a site's root with
  `mise -E <env>` and reports only the tools whose source is that file, since mise.tapes.toml's
  pins went unchecked. mise.local.toml and `mise.<env>.local.toml` are local overrides and aren't
  read as environments.
- review: `mise run cost` marks the live run as the last whose deploy step started, to the second,
  at or before the index's Last-Modified, and reads the index five times, keeping the newest
  date. Over the task's 18 runs Pages dated the index 2 to 6 s into the deploy and, on four, 5 to
  28 s after deploy-pages reported success, and one CDN node served the previous deploy's index
  minutes after the latest. Rejected: confirming a run by the Last-Modified falling between its
  deploy step's start and its reported success.

## Pending edits

- architecture · principles/rolling-currency.md: a web module that installs with pnpm sets
  `minimumReleaseAge: 0` in its pnpm-workspace.yaml, so the package manager installs the latest
  release currency reports. Otherwise pnpm 12's default one-day wait refuses a same-day release
  in CI (spike-html-hosting-sdk PR #3, vite 8.3.6). Reading each release's notes before its bump
  lands replaces the wait as the review. The trade: the wait keeps out a compromised publish that
  the registry pulls within hours, and reading the notes doesn't. This is the architect's
  direction, proven by spike-html-hosting-sdk v0.2.0 and the three sites that pin it.
- coordinator · roadmap, `experiment.html.spike-html-hosting.tasks.template`'s summary: it names
  a template/ subtree tagged template/v* that each site copies once; the task shipped the
  template inside the SDK's v* release, which a site scaffolds from with `pnpm dlx
  github:JaimeStill/spike-html-hosting-sdk#vX.Y.Z <repo>`.
- coordinator · references.toml and references.local.toml: add spike-html-hosting-sdk
  (`https://github.com/JaimeStill/spike-html-hosting-sdk.git`,
  `~/experiments/spike-html-hosting-sdk`) beside the spike's other four repositories.
- claude-plugins · marathon retro: pipeline.md's Releasing assumes the session tags the merge
  commit, but this spike's release workflows commit the pack's tree and cut their own tag on the
  push to main; and a task whose own repositories consume its release needs a BUILD checkpoint,
  which the pipeline doesn't describe.
- claude-plugins · marathon retro: the session merged a pull request with red CI because it piped
  `gh pr checks --watch` through `tail`, which hid the command's exit status; the session should
  run the configured merge command exactly as written.
- coordinator · roadmap, `experiment.html.spike-html-hosting.tasks.components`: add
  spike-html-hosting-sdk to its repos, since the task changes the SDK's renderer, layout, shell
  checks and template and releases SDK v0.3.0 and v0.3.1. Rewrite its summary to what the task
  built: the section tree (key hints in kbd without brackets, reading progress, H and L moving
  between sections, the arrow keys left to scrolling, a sticky bar at narrow widths), the page
  header from front matter, the site index in a Pages drawer below its dock, and cross-site
  navigation, on the foundation as a peer; components v0.2.2 and SDK v0.3.1 pinned by tag on all
  three sites, with the reader's stored theme carrying across the shared origin. The 390px fix is
  the renderer's table regions and site.css, both in the SDK, at three pages (the architecture
  index, architecture standards/go-elemental/, sqlate docs/features.html) rather than the
  architecture index alone.
- coordinator · html-artifacts.md, the Keyboard bullet on claude.dev's article pages: the section
  tree is built, as spike-html-hosting-components' sl-section-tree, and departs from the reference
  in ways the foundation's keys module forced or the architect chose. J and K move between
  sections, through the keys module's register(), and H and L move to the previous and the next
  page, through the SDK's pager links. The arrow keys stay the browser's scrolling, because the
  keys module cancels every key a binding matches and its off switch covers character keys only,
  so bound arrows took over sideways scrolling and ignored the switch. Key hints are a kbd alone,
  without brackets, and the tree marks the current section by an accent rule and bold text, with
  no reading progress, by the architect's direction.
- claude-plugins · marathon retro: the checkpoint 2 redirect came from the architect viewing the
  three sites' local builds, which found cramped columns at about 1400px, mid-word breaks in the
  site index, and H unable to reach the top, after the standards and spec reviews had passed. A
  checkpoint that releases a visual layer could show the architect captures or a local build at
  several widths before the release, not only the reviews' results.
- claude-plugins · marathon retro: `gh pr checks --watch` run straight after `gh pr create` can
  start before GitHub registers the pull request's check runs: on spike-html-hosting-components
  PR #5 it printed "no checks reported on the 'components' branch" and exited 1, so the `&&`
  stopped before `gh pr merge` and nothing merged. The session waited until `gh pr checks` listed
  a check, then ran the configured merge command again. The merge step could wait for the pull
  request to report its checks before it watches them.
- coordinator · roadmap, `experiment.html.spike-html-hosting.tasks.org`: repos become
  spike-html-hosting, spike-html-hosting-components and spike-html-hosting-sdk. The summary adds
  sl-site-nav's fetch mode (built list first, the fetched list on success) measured with one site
  deployed ahead on fixture sites; the org's sites.json, fetched live by the root alone; SDK
  v0.4.0's several copied trees and alert callouts; releases components v0.3.0 and SDK v0.4.0.
- coordinator · roadmap: new task `experiment.html.spike-html-hosting.tasks.icons`, "One icon
  toolkit", between org and design. repos: spike-html-hosting-icons (created by the task, as layers
  and template created theirs), -components, -sdk, spike-html-hosting, -architecture, -sqlate.
  Summary: spike-html-hosting-icons, one package under the components and the SDK, generates typed
  per-icon ES modules at its build from Iconify's per-set data via @iconify/utils (recorded with
  Iconify's single-maintainer risk; each set's licence and attribution named); icons render inline
  in currentColor, aria-hidden and focusable="false"; a bundle carries only the icons it imports.
  The task chooses the default set and the glyphs: the header's Pages, Help and Theme (icon and key
  hint, the name in aria-label), the section tree's Previous and Next, the drawer's Close, and the
  alert callouts. Its upgrade slices take SDK v0.4.0 and components v0.3.0 on the architecture and
  sqlate sites. Evidence 12.
- coordinator · roadmap: new task `experiment.html.spike-html-hosting.tasks.design`, "The design
  review", between icons and review. repos: spike-html-hosting, -components, -sdk, -icons,
  -architecture, -sqlate. Summary, the task as built: the architect reviews the three sites from
  captures at 390, 1120 and 1376px, light and dark, the index also with Help and with Settings
  open, at four checkpoints before any release. Glyph buttons are their own control,
  glyph-button.css, each named on hover by an interest invoker. The header holds the site nav and
  one header-actions group, Pages (P), Contents (C), Help (?) and Settings (S): one row from 40rem,
  and below it two, the group at the inline start under the nav. Help and Settings follow the
  shortcut-dialog pattern the components README documents, each opening with a header row of its
  h2 and an Esc Close: Settings (sl-settings) holds the theme and the keyboard settings and stores
  each change at once, and Help (sl-shortcuts) only lists the shortcuts. The section tree is links
  alone, the current section marked, in a Contents drawer below 70rem, J and K moving between
  sections; each copied page has a pager at its top and bottom, H and L moving between pages in
  the site index's order, compact below 40rem. Front matter becomes head meta, and sl-page-header
  is removed. Releases components v0.5.0 and SDK v0.6.0, which all three sites pin with icons
  v0.1.0.
- coordinator · roadmap, `experiment.html.spike-html-hosting`'s repos, `[workspace.paths]`, and
  references.toml / references.local.toml: add spike-html-hosting-icons
  (`https://github.com/JaimeStill/spike-html-hosting-icons.git`,
  `~/experiments/spike-html-hosting-icons`), landing with the icons task.
- coordinator · references.toml and references.local.toml: add standards-lab/.github (the
  coordinator's `public/`), read at dd10b25 for the charter, and standards-lab/org (the
  coordinator), read at c812496 for the orientation brief, unless the catalog already lists the
  coordinator.
- claude-plugins · marathon retro: org's slice 8 and behaviors 20 and 21 measure the deployed
  site: the fetch of the live sites.json with its headers, and the stored theme across the three
  deployed sites. That evidence exists only after SHIP merges the root, while the session brief
  that authorizes the merge is meant to show it. The brief format has no step for evidence
  gathered after the merge.
- coordinator · roadmap, `experiment.html.spike-html-hosting.tasks.icons`: its summary becomes
  the task as built, in place of the summary the new-task edit above drafts:
  spike-html-hosting-icons, a generator that takes any Iconify set by name through
  @iconify/utils and accepts only sets whose licence is satisfied by shipping its text, each
  shipping its upstream LICENSE; Octicons released alone at v0.1.0 as per-icon svg string modules,
  with a dev-only browse page; a peer of the components and the SDK; an SDK build step that fills
  <svg data-icon="<set>/<name>">; glyphs on the header, the keys help's Close, the section tree,
  the drawer's Close and the alert callouts; releases icons v0.1.0, components v0.4.0 and SDK
  v0.5.0, which all three sites pin. Evidence 12.
- coordinator · references.toml and references.local.toml: add primer/octicons
  (`https://github.com/primer/octicons.git`), read at 9a274e2 (tag `@primer/octicons@19.42.0`),
  whose LICENSE spike-html-hosting-icons copies. The root's context/README.md, References,
  already lists it.
- coordinator · intake, architecture: a pattern page for the keyboard-shortcut dialog, with
  Settings and Help as its worked instances and an upload under U as an extension. The dialog's
  Close sits in its header row with the h2. The page is inert under a modal and keys fire only
  inside it, so no second modal opens over Help, and sl-shortcuts reads the bindings against the
  topmost modal. In a modal, Escape with a glyph hint showing closes the dialog and the hint; on a
  plain page it closes the hint alone.
- coordinator · intake, spike-html-apps-foundation: Settings and Help as foundation changes (the
  theme menu's fixed heading and T save, the keys help's built-in settings, force a rebuild today).
- coordinator · intake, spike-html-apps-foundation: preferences.js and keys.js dynamically import
  theme-menu.js and keys-help.js, so every site builds both chunks without requesting them.
- coordinator · intake: glyph-button as a candidate foundation control.
- answer task / intake: a nav menu at narrow widths, and sub-navs (a nav within a nav element),
  for the Pages sites; below 40rem the site nav holds one row and doesn't wrap, so a longer site
  list needs it.
- coordinator · intake: front matter as head meta, not visible, as the convention for
  v1.repository-docs.
- coordinator · roadmap, `experiment.html.spike-html-hosting.tasks.review`: repos become
  spike-html-hosting, -sqlate, -sdk, -icons, -components and -architecture; the summary becomes
  the task as built: evidence 9 recorded from the screenshots and design tasks; the five parked
  fixes, behavior 6 needing none; SDK v0.6.1, adding marked 18.2.0, the crawl's exact front-matter
  meta, the template's provenance fix, the `data:` and `blob:` exemption for native video
  controls, and currency over each `mise.<env>.toml`, pinned by all three sites; the sqlate
  quick-start revised in place with five VHS recordings of sqlint v0.3.0 and the guide's program,
  committed as WebM with WebP posters behind an input-hash check (zenwritten_dark, CaskaydiaMono,
  77x24); `mise run cost`. Evidence 9, 10 and 11. Replaces the pending edit that only dropped
  "with a check that no capture file remains".
- intake · sqlate, docs/quick-start.md: apply the revision as the diff of the
  spike-html-hosting-sqlate site's revised copy, `content/docs/quick-start.md`, against blob
  0c54507 at f2b2117. Its substantive changes:
  - step 1 adds `go get github.com/jackc/pgx/v5/stdlib`, without which step 5 doesn't build as
    published;
  - the task that runs the program is `program` throughout;
  - step 5 builds the catalog on `postgres.Patterns()`, with a paragraph on overlays, and closes
    the pool when the catalog fails (`errors.Join(err, pool.Close())`);
  - each package gains a `layout_test.go` helper that puts each SQL clause on its own line,
    changing only whitespace, and `go test -C <package> -run TestSQL[/<name>]` prints what
    PostgreSQL receives, in place of a `sql` task;
  - step 9 adds a test printing the composed list read;
  - step 10 plants a statement with `guard_set` and no `guard_where`, and a RETURNING in a
    standard file, shows sqlint's two findings and exit 1, then removes it, and says that
    `guard_where` gives a guarded command optimistic concurrency: the write applies only if the
    row's version is still the one the caller read, and a stale write fails;
  - step 11's `print` helper becomes `printJSON`, since `print` shadowed Go's predeclared print;
  - a new step 12 scopes projects by organization, with `app.tenant` and `app.live` layered with
    `sql.guard_set` and `sql.guard_where` in a guarded returning command and cursor paging on
    PostgreSQL's keyset overlay, and the intro gains a bullet for it;
  - the clean-up step becomes 13.
- coordinator · intake, architecture: a convention for CLI recordings in a docs page, from the
  practices in spike-html-hosting-sqlate's `tapes/README.md`: the terminal sized to the content
  column (77x24 at 20px in the 712px column), one neutral dark theme rendered once for every site
  theme, one output per screen with no scroll, a pause sized to each output, setup hidden, the
  poster the last frame, and each recording committed as WebM behind a hash of its inputs, which
  the check verifies offline and CI never renders.
- coordinator · intake, architecture principles/rolling-currency.md: a currency check reads every
  mise environment's config, each `mise.<env>.toml` through `mise -E <env>`, not only mise.toml,
  so a tool pinned for one task alone, as the sqlate site's mise.tapes.toml pins vhs, ttyd and
  ffmpeg, stays current. spike-html-hosting-sdk v0.6.1's currency bin does this.
- answer task: the Pages findings from evidence 11, recorded in the root README's "Evidence".
  Pages serves gzip, not brotli, and brotli 11 would save 11 to 15% on a typical page. GitHub's
  Pages deployment queue dominates push-to-live: the task's merges took 1m52s to 6m24s, against
  dispatch medians of 56s to 2m03s. Pages' CDN served a site's previous index from one node
  minutes after a deploy, and the index's Last-Modified trailed deploy-pages' reported success by
  up to 28 s.
