# goal · experiment.html.spike-html-hosting

- **State:** building
- **Task:** icons
- **Branch:** icons

## Tasks

1. [x] layers
2. [x] content
3. [x] screenshots
4. [x] template
5. [x] highlighting
6. [x] components
7. [x] org
8. [ ] icons
9. [ ] design
10. [ ] review
11. [ ] answer

## Task brief · icons

```
Problem       Evidence 12 needs one icon toolkit, every set
              available while designing, each build shipping
              only the icons it uses. No layer ships glyphs: the
              header's Pages, Help and Theme buttons and the
              section tree's Previous and Next show words, the
              drawer's Close is a word, and the alert callouts
              use marked-alert's own Octicons strings, which lack
              focusable="false". The architecture and sqlate
              sites still pin SDK v0.3.1 and components v0.2.2,
              and the components and the SDK trail mise-action
              v5.2.7.
Behaviors     1. spike-html-hosting-components takes mise-action
                 v5.2.7, its notes read before the bump. Its
                 currency prints nothing, and its check passes.
              2. spike-html-hosting-sdk takes mise-action v5.2.7
                 in its own workflows and its reusable ones. Its
                 currency reports only the held rolldown, and its
                 check passes.
              3. The architecture and sqlate sites pin SDK
                 v0.4.0 and components v0.3.0 and call the SDK
                 workflows at v0.4.0. Each site's currency prints
                 nothing, and its check passes.
              4. spike-html-hosting-icons exists as a public
                 repository managed with marathon, on the
                 pattern of the components and the SDK: an
                 offline check, CI on pull requests, a release
                 workflow that does nothing at 0.0.0 and cuts the
                 tag its version names, a currency command, and
                 standards that point into the architecture
                 repository. Its README records Iconify as the
                 glyph source and its single-maintainer risk.
              5. Given an Iconify set by name, the icons layer's
                 build generates one ES module per icon of that
                 set through @iconify/utils. Each module's
                 default export is one complete svg string:
                 viewBox, 1em square, currentColor,
                 aria-hidden="true", focusable="false". Each
                 module's declaration types it as a string. A
                 fixture set in Iconify's format proves that any
                 set's name works, not only the released one.
              6. The generator accepts a set only when its
                 licence is satisfied by shipping the licence
                 text: MIT, ISC, Apache-2.0, BSD, CC0-1.0 or
                 Unlicense. It fails the build on any other set,
                 CC-BY, CC-BY-SA and GPL among them, naming the
                 set and its licence. Each released set ships its
                 upstream LICENSE byte for byte, with a
                 provenance line naming the upstream repository
                 and commit.
              7. The package releases Octicons alone. A consumer
                 imports one icon by its set and name, such as
                 octicon/x-16. The package has no runtime
                 dependencies; Iconify's packages are dev
                 dependencies of the build. The pack test
                 resolves an icon and its declaration from the
                 tarball.
              8. A dev-only browse page, kept out of the package,
                 shows every glyph of the released sets with its
                 name, under the foundation's profiles, light and
                 dark. It is the layer's capture fixture, and its
                 browser tier checks it.
              9. A fixture build that imports some icons carries
                 exactly those icons' markup and no other icon's.
                 The unit tier asserts which icons the output
                 holds.
              10. spike-html-hosting-icons v0.1.0 is released as
                 its release workflow describes, at a BUILD
                 checkpoint, before the components pin it.
              11. The components peer the icons layer.
                 sl-section-tree's Previous and Next show
                 Octicons arrow-up-16 and arrow-down-16 with
                 their H and L hints in a kbd. Their accessible
                 names stay "Previous" and "Next", and the keys
                 help still lists "Previous section" and "Next
                 section". sl-drawer's Close shows Octicons
                 x-16 alone and is still named "Close <label>",
                 its close slot's text visually hidden. The
                 README's header snippet shows each glyph's
                 marker. The components' browser tier and
                 captures cover each glyph in light and dark,
                 wide and narrow.
              12. spike-html-hosting-components v0.4.0 is
                 released as its release workflow describes, at
                 a BUILD checkpoint, before the SDK pins it.
              13. The SDK's build fills every
                 <svg data-icon="<set>/<name>"> in each page a
                 site builds, the hand pages and the rendered
                 pages' shell alike, with that icon's markup from
                 the icons package, and adds no script. An
                 unknown name fails the build, naming the page
                 and the icon. The SDK peers the icons layer.
              14. The renderer's alert callouts take Octicons
                 info-16, light-bulb-16, report-16, alert-16 and
                 stop-16 from the icons package, for note, tip,
                 important, warning and caution, through
                 marked-alert's variants. Each glyph is
                 aria-hidden and focusable="false", the kind
                 stays visible text, and the SDK's unit tier pins
                 the markup.
              15. The template's header buttons show Octicons
                 list-unordered-16 for Pages, question-16 for
                 Help and gear-16 for Theme (checkpoint 3), each with its
                 kbd hint and its name in aria-label, the word
                 itself no longer shown. The keys help dialog's
                 Close shows x-16 with its ? hint and is named
                 Close. The shell checks assert each glyph and
                 name, and the keys help still lists P Pages,
                 ? Help, T Theme. The template pins icons v0.1.0
                 and components v0.4.0. The scaffold test runs
                 the copy's full check offline.
              16. spike-html-hosting-sdk v0.5.0 is released as
                 its release workflow describes, at a BUILD
                 checkpoint, before any site pins it. Its
                 currency reports only the held rolldown.
              17. The architecture, sqlate and root sites pin
                 SDK v0.5.0, components v0.4.0 and icons v0.1.0,
                 and call the SDK workflows at v0.5.0. Every page
                 template each site builds shows the glyphs of
                 behavior 15. Every page passes the shell checks,
                 copied pages pass the crawl, and no page scrolls
                 sideways at 390px. Each site's currency prints
                 nothing.
              18. The prose that org left over 100 columns is
                 rewrapped: the SDK README's lines on Crawled,
                 sl-site-index and the drawer, and its crawl
                 paragraph's early break; the components
                 README's screenshots line and served.ts's
                 handler comment.
              19. The root's README notes the icons layer in
                 Building the sites, the pins at SDK v0.5.0,
                 components v0.4.0 and icons v0.1.0 on all three
                 sites, and names primer/octicons at the commit
                 whose LICENSE the package copies under
                 References.
              20. The session brief shows evidence 12:
                 - every set available while designing: the
                   generator run on the fixture set, and the
                   browse page's captures;
                 - each build ships only what it uses: for each
                   site, the icons its built output holds,
                   counted against the icons its pages name and
                   against the package's Octicons modules, with
                   the brotli weight of the glyph markup per
                   page.
Test seams    each repository's `mise run check`:
              - the icons layer's unit tier over the generator's
                output, the licence refusal and the fixture
                build's contents; its pack test; its browser tier
                on the browse page
              - the components' browser tier over the section
                tree's and the drawer's buttons
              - the SDK's unit tier over the build-time fill and
                the alert markup; its shell checks; the scaffold
                test
              - each site's shell checks and crawl on its build
                under Vite's preview
Slices        1. Components upgrade: mise-action v5.2.7; currency
                 prints nothing, and the check passes
                 (spike-html-hosting-components)
              2. SDK upgrade: mise-action v5.2.7 in every
                 workflow; currency reports only the held
                 rolldown (spike-html-hosting-sdk)
              3. Architecture upgrade: SDK v0.4.0, components
                 v0.3.0, workflows at v0.4.0
                 (spike-html-hosting-architecture)
              4. Sqlate upgrade: the same pins
                 (spike-html-hosting-sqlate)
              5. Icons repository: created and managed with
                 marathon, the scaffold with its check, CI,
                 release workflow at 0.0.0, currency and
                 standards; the public remote
                 (spike-html-hosting-icons)
              6. Icons generator: Octicons modules and
                 declarations, the licence rule with the
                 upstream LICENSE, the fixture set, the pack test
                 and the fixture build's contents
                 (spike-html-hosting-icons)
              7. Icons browse page and release: the browse page
                 and its captures; README, version 0.1.0,
                 CHANGELOG [0.1.0]
                 → checkpoint 1 (escalation): the architect
                   views the browse page's captures first; the
                   standards and spec reviews run; the architect
                   accepts; the pull request merges, and the
                   release workflow cuts v0.1.0, which the record
                   logs this session pushed
                 (spike-html-hosting-icons)
              8. Components glyphs: the icons peer, the section
                 tree's and the drawer's buttons, the README's
                 snippet, the 100-column fixes; captures
                 (spike-html-hosting-components)
              9. Components release: version 0.4.0, CHANGELOG
                 [0.4.0]
                 → checkpoint 2, as checkpoint 1
                 (spike-html-hosting-components)
              10. SDK glyphs: the build-time fill with its
                 unknown-name failure, the alert callouts'
                 glyphs, the icons peer
                 (spike-html-hosting-sdk)
              11. SDK template and release: the template's header
                 and help dialog glyphs, the shell checks, the
                 pins at icons v0.1.0 and components v0.4.0, the
                 scaffold test, the 100-column fixes; README,
                 version 0.5.0, CHANGELOG [0.5.0]; captures
                 → checkpoint 3, as checkpoint 1
                 (spike-html-hosting-sdk)
              12. Architecture adopts: the three pins and the
                 workflow calls, the header glyphs, captures
                 (spike-html-hosting-architecture)
              13. Sqlate adopts: the same
                 (spike-html-hosting-sqlate)
              14. Root adopts and measures: the same on all four
                 page templates; the README edits; evidence 12's
                 measure across the three sites for the session
                 brief (spike-html-hosting)
Out of scope  names on hover or tooltips for icon-only controls,
              and the theme button's name and key (the design
              task); any set but Octicons in a release; glyphs
              in sl-site-nav, sl-page-header, sl-site-index or
              copied content; any change to
              spike-html-apps-foundation, spike-html-apps-
              components or spike-html-apps-tooling, the theme
              dialog's heading among them; rolldown 1.3.0;
              consolidating the currency script, which gains a
              copy in the icons layer (recorded for the answer
              task); a prose-width check; the design review of
              the three sites
Door          one-way: the new public repository spike-html-
              hosting-icons and the tags icons v0.1.0,
              components v0.4.0 and SDK v0.5.0, which every later
              site and scaffold consume; two-way: the three
              sites' changes, which redeploy their pages and
              revert by reverting their merges
Release       spike-html-hosting-icons v0.1.0;
              spike-html-hosting-components v0.4.0;
              spike-html-hosting-sdk v0.5.0
```

## Progress

slices 9/14 committed · checkpoint 1 accepted: spike-html-hosting-icons PR #1 merged (37ee82d), v0.1.0 cut by its release workflow on the merge push, which this session pushed · checkpoint 2 accepted: spike-html-hosting-components 7293fd0, c0d2770, standards 1457f62, 85c2959, 3ee29cb, 89a9e7a, spec no gaps; PR #9 merged (5b6e815), v0.4.0 cut by its release workflow, which this session pushed · sdk 7c20880, architecture 5e812ac, sqlate 4bf1ee7 · standards — · spec — · editor —

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
- icons: each per-icon module default-exports one complete svg string. Rejected: Iconify's data
  object, which needs a renderer, as @iconify-icons/* do; a Lit template.
- icons: the header's Pages, Help and Theme buttons stay hand markup in each page template.
  Rejected: an sl-* header element, left to the design task.
- icons: sl-section-tree's Previous and Next show a glyph and their kbd hint, the word their
  accessible name; sl-drawer's Close is the glyph alone, still named "Close <label>". Rejected: a
  glyph beside the visible word.
- icons: the alert callouts take their glyphs from the icons package through marked-alert's
  variants. Rejected: marked-alert's own strings, which lack focusable="false".
- icons: spike-html-hosting-icons is a peer of the components and the SDK, pinned by every site.
  Rejected: a pinned dependency of each.
- icons: the task releases icons v0.1.0, components v0.4.0, then SDK v0.5.0, each at a BUILD
  checkpoint where the architect views captures before the standards and spec reviews; the
  architecture, sqlate and root sites adopt after.
- icons: org's prose over 100 columns is rewrapped by hand. Rejected: a prose-width check, which
  tables, URLs and code would need exempting from.
- icons: every glyph uses Octicons' 16px grid. Rejected: 24px.
- icons: Pages is Octicons list-unordered. Rejected: book, sidebar-expand.
- icons: Help is Octicons question.
- icons: Theme is Octicons gear, chosen at checkpoint 3 over the planned paintbrush, since the
  design task turns the theme dialog into the Settings dialog. Rejected: paintbrush, sliders, sun
  and moon.
- icons: the section tree's Previous and Next are Octicons arrow-up and arrow-down. Rejected:
  chevrons, which read as expand and collapse.
- icons: the drawer's Close is Octicons x.
- icons: the alert callouts keep GitHub's glyphs: info, light-bulb, report, alert and stop.
- icons: v0.1.0 releases Octicons alone; a set joins with its devDependency and a minor release.
  Rejected: Octicons with Lucide.
- icons: an SDK build step fills <svg data-icon="<set>/<name>"> in every page a site builds and
  fails on an unknown name. Rejected: SVG pasted into each page template by hand.
- icons: the keys help dialog's Close shows Octicons x with its ? hint, named Close. Rejected:
  text as before.
- icons: names on hover for icon-only controls go to the design task. Rejected: the title
  attribute, which never shows on keyboard focus or touch; a tooltip of our own, which needs
  script in Safari until it ships popover="hint" and must meet WCAG 1.4.13.
- icons: the theme button keeps its name, Theme, and its key, T: the foundation's dialog heading
  is "Theme" and its Save is T. The name and key are weighed in the design task. Rejected:
  Settings or Appearance now.
- icons: the browse page's glyph names break only at hyphens, never within a word (a <wbr> after
  each hyphen), so its grid shows two cells a row at 390px. Checkpoint 1's direction.
- icons: the icons layer pins rolldown 1.3.0 for its fixture build; the SDK's hold at 1.2.16 is
  Vite's constraint, and the icons layer has no Vite. Checkpoint 1's direction.
- icons: glyphs on the theme dialog's Save and Cancel, which the foundation renders, go to the
  design task with the dialog's heading and the opener's name and key, for the intake as one
  foundation change. Checkpoint 2's direction.
- icons: the design task turns the Theme dialog into the Settings dialog and moves the keyboard
  settings out of Help, which then only describes the shortcuts; the glyph is gear already, so
  only the name, key and dialog change there. The architect's direction at checkpoint 3.
- icons: the narrow header wrapping Help and Theme onto a second line at 390px is left for the
  design task. Checkpoint 3's direction.

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
  review", between icons and review. repos: spike-html-hosting, -components, -sdk, -architecture,
  -sqlate. Summary: tightens the three sites' layout and design; the architect views each site's
  captures at the dock widths, in light and dark, and marks fixes before any release; the fixes
  land in the components' sheets and the SDK's site.css, released and adopted by every site.
- coordinator · roadmap, `experiment.html.spike-html-hosting.tasks.review`: its summary drops "with
  a check that no capture file remains", which shipped in the screenshots task.
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
- coordinator · roadmap, `experiment.html.spike-html-hosting.tasks.icons`: in place of the pending
  new-task summary, the task as planned: spike-html-hosting-icons, a generator that takes any
  Iconify set by name through @iconify/utils, releasing Octicons alone at v0.1.0 as per-icon svg
  string modules, with a dev-only browse page; licence-text sets only, each shipping its upstream
  LICENSE; a peer of the components and the SDK; an SDK build step that fills
  <svg data-icon="<set>/<name>">; glyphs on the header, the help dialog's Close, the section tree,
  the drawer's Close and the alert callouts; releases icons v0.1.0, components v0.4.0 and SDK
  v0.5.0, adopted by all three sites. Evidence 12.
- coordinator · roadmap, `experiment.html.spike-html-hosting.tasks.design`: the summary adds the
  architect's direction: the Theme dialog becomes the Settings dialog, and the keyboard settings
  (character keys on or off, the wait between presses) move from the Help dialog into it, so Help
  only describes the shortcuts; with it, the opener's name and key, the dialog's heading, and
  glyphs on its Save and Cancel; and names on hover for icon-only controls. The components
  README's header snippet, released at v0.4.0 with paintbrush-16 for Theme, takes gear-16 in the
  components' next release. Each goes to the intake as a
  foundation change if the foundation must change.
- coordinator · references.toml and references.local.toml: add primer/octicons
  (`https://github.com/primer/octicons.git`), read at the commit whose LICENSE
  spike-html-hosting-icons copies.
