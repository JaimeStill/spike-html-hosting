# goal · experiment.html.spike-html-hosting

- **State:** building
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
                 layout-only sheet of its own, written as a CSS
                 module script. A page's content is light-DOM HTML
                 the element slots: with no script, every list,
                 link and field still renders and works.
              3. sl-section-tree slots a nested list of links to
                 the page's h2 and h3 headings, by their GitHub ids.
                 An IntersectionObserver marks the section in view
                 with aria-current. Left and Right arrows move to
                 the previous and next section, shown as bracketed
                 [←] and [→] key hints and bound through the
                 foundation's keys module, so its help dialog lists
                 them and its off switch turns them off. Up and
                 Down stay the browser's own scrolling.
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
                 marked aria-current.
              7. sl-site-nav shows the sites listed in the
                 components release: the org stand-in,
                 architecture and sqlate, each by root-relative
                 /<repo>/. The current site is marked aria-current.
                 A list change is a components release.
              8. Focus is always visible on every component, and
                 every length is a --space-* token. Each component
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
              14. The SDK's template shell loads components v0.1.0
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
              17. The architecture and sqlate sites pin SDK v0.3.0
                 and components v0.1.0, and call the SDK workflows
                 at v0.3.0. They take the v0.3.0 template shell
                 with its provenance and keep their adaptations.
                 They build the same pages at the same paths, pass
                 their checks, print only the held rolldown from
                 currency, and deploy.
              18. The root pins SDK v0.3.0 and components v0.1.0,
                 and its page gains sl-site-nav only; the page is
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
Release       spike-html-hosting-components v0.1.0;
              spike-html-hosting-sdk v0.3.0
```

## Progress

slices 3/9 committed (slice 1: no change, currency reports only the held rolldown 1.3.0; slice 2: components 99824f7; slice 3: components 1d80e17) · standards — · spec — · editor —

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
- components: the SDK joins the task: its Markdown renderer makes the section tree, page header,
  and site index's data at build, from the heading ids getHeadingList() gives, the parsed front
  matter, and every page's path and title, and SDK v0.3.0 releases at a BUILD checkpoint before
  the sites adopt. Rejected: components building it in the browser from each page's DOM; tocbot
  4.36.8, which rebuilds the heading list and adds no keys or progress.
- components: the components are Lit 3.3.3 elements with a shadow root, adopting the
  foundation's reset and elements sheets before a layout-only sheet, the stack's convention
  (spike-html-conventions' answer 4), as spike-html-apps-components has them. Rejected: plain
  light-DOM custom elements on the foundation's dom.js.
- components: spike-html-hosting-components' toolchain is copied with provenance from
  spike-html-apps-components: tsc emit build, ESLint, Prettier, a unit tier, and a browser tier on
  spike-html-apps-tooling v0.3.0 in chrome-headless-shell 157.0.8103.38, ending the lint-only
  check of "layers: spike-html-hosting-components' check is shellcheck, actionlint, and Prettier
  until its first component". Rejected: the site SDK's ESLint, tsconfig, and Prettier exports,
  which check a Vite site's build and peer vite.
- components: the site index is every page of the current site, shown on each of its pages.
  Rejected: the org stand-in's index of every site, which the org task writes as content.
- components: cross-site navigation's list of sites ships in the components release, the
  build-time-by-tag form org measures against fetched-at-runtime; a new site is a components
  release. Rejected: the list written into each site's shell.
- components: the page header shows every front-matter key and value in source order, in place
  of the front-matter table; a page with none shows no fields. Supersedes "content: front matter
  shows as a key/value table above the page; the title comes from name, else the first h1." as to
  the table; the title rule stands. Rejected: the header above the table, which shows each key
  twice.
- components: Left and Right arrows move to the previous and next section, shown as bracketed [←]
  and [→] key hints and bound through the foundation's keys.js; Up and Down stay the browser's
  scrolling. Rejected: digits 1-9 per entry, which reach only nine of sqlate quick-start's 13
  sections.
- components: reading progress is drawn by a CSS scroll timeline with no script, and an
  IntersectionObserver marks the section in view; Firefox 147-158, within the stack's floor,
  shows no progress. Rejected: a script tracking the scroll position.
- components: a table wider than the column scrolls inside its own keyboard-focusable region, as
  code blocks do, held by a 390px check on every page; measured on 2026-11-05 at main, the
  architecture index (426px), architecture standards/go-elemental/ (392px), and sqlate
  docs/features.html (623px) scrolled sideways. Rejected: wrapping cells, which breaks code names
  such as errors.Is.
- components: the stored theme across sites is proven by a components browser test serving two
  fixture sites under two bases on one local origin, and shown live on the deployed sites in the
  session brief. Rejected: the live capture alone; each site's own preview is its own origin.
- components: the section tree nests h2 and h3. Rejected: h2 only; sqlate's features page uses
  its 11 h3 as package sections.
- components: held rolldown at 1.2.16: Vite 8.3.6, the latest, depends on rolldown ~1.2.16, and
  rolldown 1.3.0's notes say Vite 8.3.6 and earlier can't run it.
- components: the SDK's template shell loads components v0.1.0 by tag, so the release order is
  components v0.1.0, then SDK v0.3.0, then the architecture, sqlate, and root sites, at two BUILD
  checkpoints. Rejected: an unchanged template shell, with the components a per-site adaptation.
- components: the renderer hands off real HTML inside each element (nested lists of links for the
  section tree and site index, a description list for the header), which the element slots and
  enhances, so every page reads and links with no script and the crawl follows its links.
  Rejected: a JSON block each element renders from.
- components: the renderer wraps each body table in a named, focusable scrolling region, since
  focus needs markup, and site.css styles it. Rejected: site.css alone, which can't make a table
  focusable.
- components: the site index nests the current site's pages by directory, each by its title, a
  directory with an index page labeled by that page's title, the current page aria-current.
  Rejected: one flat list by title.
- components: cross-site links are root-relative, /<repo>/, which resolve on the shared Pages
  origin and in the two-base local test. Rejected: absolute https://jaimestill.github.io/<repo>/.
- components: the root takes cross-site navigation only; its page has no front matter and one
  heading until org. Rejected: the page header and section tree on its placeholder page.
- components: the components take the stack's sl- prefix, as the foundation's sl-theme-menu and
  spike-html-apps-components' elements do.

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
  spike-html-hosting-sdk to its repos, since the task changes the SDK's renderer and template and
  releases SDK v0.3.0; and in its summary, the 390px fix is the renderer's table regions and
  site.css, both in the SDK, at three pages rather than the architecture index alone.
