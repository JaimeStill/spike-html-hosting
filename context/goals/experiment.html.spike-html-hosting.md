# goal · experiment.html.spike-html-hosting

- **State:** brief ready
- **Task:** components
- **Branch:** components

## Tasks

1. [x] layers
2. [x] content
3. [x] screenshots
4. [x] template
5. [x] highlighting
6. [ ] components
7. [ ] org
8. [ ] review
9. [ ] answer

## Task brief · components

```
Problem       The three sites render pages with no way to move
              through them. sqlate's longest guide page has 13
              sections and no section tree. Architecture's 29
              pages link to each other only from their bodies. No
              site links the others. Front matter shows as a raw
              key/value table. And at 390px three pages scroll
              sideways, because body tables are wider than the
              column. Evidence 4 needs the section tree, with
              bracketed key hints, reading progress and arrow-key
              movement. Evidence 6 needs one baseline pin, with
              the reader's stored theme carrying across the shared
              origin. spike-html-hosting-components, still at
              0.0.0, is the layer for these components, and the
              SDK's renderer is where each page's data is made.
Behaviors     1. The components layer builds as a library on the
                 foundation peer, its toolchain copied with
                 provenance from spike-html-apps-components: a tsc
                 emit build to ES modules and declarations, ESLint
                 and Prettier, a unit tier, and a browser tier on
                 spike-html-apps-tooling v0.3.0 in
                 chrome-headless-shell 157.0.8103.38. It depends on
                 lit 3.3.3, pinned exactly, and peers
                 spike-html-apps-foundation ^0.3.0. Its check reads
                 no network.
              2. Each component is a Lit element with a shadow
                 root, named with the sl- prefix. It adopts the
                 foundation's reset and elements sheets before a
                 sheet of its own for layout and the component's
                 own state marks, from foundation color tokens,
                 written as a CSS module script. A page's content
                 is light-DOM HTML the element slots: with no
                 script, every list, link and field still renders
                 and works. sl-site-nav, whose list the release
                 holds rather than the page, renders nothing with
                 no script.
              3. sl-section-tree slots a nested list of links to
                 the page's h2 and h3 headings, by their GitHub ids.
                 An IntersectionObserver marks the section in view
                 with aria-current. H and L move to the previous
                 and next section, shown as H and L key hints
                 in kbd, with no brackets, and bound through the foundation's keys
                 module, so its help dialog lists them and its off
                 switch turns them off. The top of the page is a
                 stop, and the moves wrap: L past the last section
                 goes to the top, H from the top to the last
                 section. Every arrow key stays the browser's own
                 scrolling, in the page and in any region that
                 scrolls sideways. Where the tree's column doesn't
                 fit, the tree shows as a sticky bar at the top of
                 the viewport holding only the progress and the
                 Previous and Next buttons, its section links
                 hidden.
              4. The section tree's reading progress follows the
                 page's scroll through a CSS scroll timeline, with
                 no script drawing it. In an engine without scroll
                 timelines the indicator is absent and nothing else
                 changes. Under reduced motion the progress still
                 shows, and no scrolling is smooth.
              5. sl-page-header slots the page's front matter as a
                 description list, every key and value in source
                 order and escaped. A page with no front matter
                 shows no fields.
              6. sl-site-index slots every page of the current
                 site, nested by directory, each by its title. A
                 directory with an index page is labeled by that
                 page's title and links to it. The current page is
                 marked aria-current. Where its column fits, it is
                 docked beside the page; narrower, it sits in
                 sl-drawer, copied with provenance from
                 spike-html-apps-components, a modal dialog opened
                 by a "Pages" header button with the P key, bound
                 through the foundation's keys module. Each side
                 column docks only at a width where it fits (about
                 16rem), and no navigation text breaks mid-word.
              7. sl-site-nav shows the sites listed in the
                 components release: the org stand-in,
                 architecture and sqlate, each by root-relative
                 /<repo>/. The current site is marked aria-current.
                 A list change is a components release.
              8. Focus is always visible on every component, and
                 every space is a --space-* token; the copied
                 sl-drawer keeps its reference's other lengths
                 (sizes, offsets, timing), which aren't spacing.
                 Each component
                 renders under every profile the full entry
                 registers, in light and in dark, at 1280px and
                 390px.
              9. The components' browser tier proves the stored
                 theme carries across sites. Two fixture sites are
                 served under two bases from one local origin. A
                 theme saved through the menu on one site applies
                 before first paint on the other, and a palette the
                 second site doesn't register falls back to its
                 default and stays stored.
              10. spike-html-hosting-components v0.1.0 is released
                 as its release workflow describes: a README of
                 each element and its slotted markup, and
                 CHANGELOG [0.1.0]. It releases at a BUILD
                 checkpoint before the SDK pins it.
              11. The SDK's renderer writes each Markdown page's
                 data as HTML inside the components' elements:
                 - the section tree of the page's h2 and h3, from
                   the same heading ids its headings carry;
                 - the page header in place of the front-matter
                   table;
                 - the site index of every page the site builds,
                   nested by directory.
                 The page title still comes from the front matter's
                 name, else the first h1.
              12. The renderer wraps each body table in a region a
                 keyboard can focus. The region is named, and
                 scrolls the table sideways. site.css styles it.
                 No page of either Markdown site scrolls sideways
                 at 390px.
              13. The SDK's crawl asserts each page's header: its
                 fields equal the source's front matter in order,
                 and no front-matter table remains. It asserts the
                 site index lists every page the build writes, and
                 that the page has no sideways scroll at 390px.
                 The shell checks add the 390px check. The 1600px
                 check still holds main to a centered reading
                 width.
              14. The SDK's template shell loads components v0.2.2
                 by tag, so a scaffolded site shows all four
                 components. The scaffold test still runs the
                 copy's full check offline.
              15. The SDK holds rolldown at 1.2.16, the version Vite
                 8.3.6 depends on. Its currency reports only
                 rolldown 1.3.0, and its check passes.
              16. The SDK README documents the markup the renderer
                 writes for each element and the table regions.
                 CHANGELOG [0.3.0] lists them. SDK v0.3.0 is
                 released as its release workflow describes, at a
                 BUILD checkpoint before the sites adopt it.
              17. The architecture and sqlate sites pin SDK v0.3.1
                 and components v0.2.2, and call the SDK workflows
                 at v0.3.1. They take the v0.3.1 template shell
                 with its provenance and keep their adaptations.
                 They build the same pages at the same paths, pass
                 their checks, print only the held rolldown from
                 currency, and deploy.
              18. The root pins SDK v0.3.1 and components v0.2.2,
                 and its page gains sl-site-nav, the Help button
                 and the keys help dialog only; the page is
                 otherwise unchanged. It passes its check, including
                 the 390px shell check, and deploys.
              19. The session brief shows captures per site, light
                 and dark, at 1280px and 390px: sqlate's
                 quick-start with its tree and progress, an
                 architecture page with its header and site index,
                 and the architecture index's table scrolling in
                 its region. It also shows a theme saved on one
                 deployed site applying on the other two, live on
                 jaimestill.github.io.
Test seams    each repository's `mise run check`:
              - the components' browser tier over fixture pages in
                the renderer's markup, including the two-base origin
              - the SDK's unit tier over the renderer's output, and
                its crawl and shell checks
              - the scaffold test
              - each site's crawl and shell checks on its build
                under Vite's preview
Slices        1. SDK upgrade: rolldown held at 1.2.16, the hold
                 logged; currency reports only rolldown, and the
                 check passes (spike-html-hosting-sdk)
              2. Components toolchain and section tree: the copied
                 toolchain; sl-section-tree with keys, the
                 section-in-view mark and CSS progress, on a
                 fixture page shown by captures
                 (spike-html-hosting-components)
              3. Components header, index and nav: sl-page-header,
                 sl-site-index and sl-site-nav, and the two-base
                 stored-theme test; captures per profile
                 (spike-html-hosting-components)
              4. Components release: README, version 0.1.0,
                 CHANGELOG [0.1.0]
                 → checkpoint 1 (escalation): the components'
                   standards and spec reviews run first; the
                   architect accepts the components; their pull
                   request merges, and the release workflow cuts
                   v0.1.0, which the record logs this session pushed
                 (spike-html-hosting-components)
              5. SDK renderer: the tree, header and site-index
                 markup; the table regions and site.css; the crawl's
                 header, site-index and 390px assertions; the 390px
                 shell check; the unit tier; a template build shown
                 by captures (spike-html-hosting-sdk)
              6. SDK release: the template shell loads components
                 v0.1.0; the scaffold test green offline; README,
                 version 0.3.0, CHANGELOG [0.3.0]
                 → checkpoint 2 (escalation): the SDK's standards
                   and spec reviews run first; the architect accepts
                   the SDK; its pull request merges, and the release
                   workflow cuts v0.3.0, which the record logs this
                   session pushed
                 (spike-html-hosting-sdk)
              7. architecture adopts: pins and workflow calls
                 bumped, the v0.3.0 shell taken; its index at 390px
                 shown by a capture (spike-html-hosting-architecture)
              8. sqlate adopts, the same way; captures of the
                 quick-start tree and its progress
                 (spike-html-hosting-sqlate)
              6a. checkpoint 2 redirect, components: the H and L
                 cycle with the top as a stop; sl-drawer copied with
                 provenance; the narrow sticky bar; version 0.2.0,
                 README, CHANGELOG [0.2.0]
                 → checkpoint 1 reopened: both reviews, then the
                   pull request merges and the release workflow
                   cuts v0.2.0, which the record logs this session
                   pushed (spike-html-hosting-components)
              6b. checkpoint 2 redirect, SDK: components v0.2.0
                 pinned; the Pages drawer and button in the shell
                 and renderer markup; side columns at their minimum
                 widths and no mid-word breaks; README and CHANGELOG
                 [0.3.0] follow
                 → checkpoint 2 again (spike-html-hosting-sdk)
              9. root adopts: pins and workflow calls bumped,
                 sl-site-nav on its page; the live stored-theme
                 capture across the three deployed sites
                 (spike-html-hosting)
Out of scope  the org task's charter, index of every site, hosted
              report, and its measure of fetched-at-runtime
              against build-time-by-tag navigation; h4 and deeper
              in the tree; progress drawn by script, or any
              fallback for engines without scroll timelines; any
              change to spike-html-apps-foundation,
              spike-html-apps-components or
              spike-html-apps-tooling (references); rolldown
              1.3.0; publishing to the npm registry; the header,
              tree or index on the root's page
Door          one-way: spike-html-hosting-components v0.1.0, its
              first public release, and spike-html-hosting-sdk
              v0.3.0, which three sites and every new scaffold
              consume; two-way: each site's change, which redeploys
              its pages and reverts by reverting its merge
Release       spike-html-hosting-components v0.1.0 (released);
              spike-html-hosting-components v0.2.0 (released);
              spike-html-hosting-components v0.2.1 (released);
              spike-html-hosting-components v0.2.2;
              spike-html-hosting-sdk v0.3.0 (released);
              spike-html-hosting-sdk v0.3.1
```

## Progress

slices 9/9 committed (+6a, 6b) (slice 1: no change, currency reports only the held rolldown 1.3.0; slice 2: components 99824f7; slice 3: components 1d80e17; slice 4: components d0aedb7; slice 5: sdk 96f5602, f294385; slice 6: sdk f6668fc) · checkpoint 1: standards (73735bd, 6b45161, 4b4fc9e), spec gaps closed (1d34fc9), components PR #3 merged d4bbbd5, v0.1.0 released by this session (release run 42096936848, tag v0.1.0) · checkpoint 2: standards (sdk aadb81e), spec no gaps, weak spot closed (sdk 1c5c56e), redirected: slices 6a, 6b · slice 6a: components cd86f3f, fd3bf72, 4127991 (v0.2.0), standards dbc0377, spec no blocking gaps, d627f53; PR #4 merged 70a1122, v0.2.0 released by this session (release run 42122025990, tag v0.2.0) · slice 6b: sdk 31dfe4a, f5a9826, standards 4e74795 f875ca6, spec 2 gaps: SDK fixed (58e09e3, acb1ec8), components v0.2.1 6a2a0b7, standards 624bd84 968ca69, spec no gaps, refinements 7810d55 c6a5cf5, standards 208ae31, spec no gaps; PR #5 merged 646b864, v0.2.1 released by this session (release run 42133877521, tag v0.2.1) · SDK pins v0.2.1 (3d6c971), checkpoint 2 accepted with the no-brackets change: components c446ff5, standards 2330eb1, spec no gaps, PR #6 merged 190dbac, v0.2.2 released by this session (release run 42149691751, tag v0.2.2) · SDK d5116e3 (v0.2.2, no brackets), standards d2b18d8 1351912, spec: pnpm drift closed 8e1e11b; sdk PR #4 merged dfbb2d7, v0.3.0 released by this session (release run 42151094511, tag v0.3.0) · slice 7: architecture 0afdad7 355edd8; slice 8: sqlate abc7a56; slice 9: root 0794801 · standards: root 4f2d603, sqlate cf1ee7f · spec: short-page drop fixed (sdk be4fc9d a54dead, standards 1082cdf, spec no gaps), Theme hint e5be0e2 (standards 21ece9a, spec no gaps), as v0.3.1; sdk PR #5 merged 1c1d552, v0.3.1 released by this session (release run 42214089393, tag v0.3.1); sites pin v0.3.1 (architecture 20bf0f1, sqlate 3a7a1ea, root d4d8eb5); brief captures in scratchpad/brief-shots · editor done; components and SDK docs on main flagged

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
  in two ways the foundation's keys module forced or the architect chose. H and L move between
  sections and the arrow keys stay the browser's scrolling, because the keys module cancels every
  key a binding matches and its off switch covers character keys only, so bound arrows took over
  sideways scrolling and ignored the switch. Key hints are a kbd alone, without brackets, by the
  architect's direction.
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
