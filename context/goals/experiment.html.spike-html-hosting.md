# goal · experiment.html.spike-html-hosting

- **State:** building
- **Task:** template
- **Branch:** template

## Tasks

1. [x] layers
2. [x] content
3. [x] screenshots
4. [ ] template
5. [ ] highlighting
6. [ ] components
7. [ ] org
8. [ ] review
9. [ ] answer

## Task brief · template

```
Problem       The three sites share their build, check, deploy, test and
              capture files by hand copy, each change copied by hand from
              its owning site to the others, so a fix reaches a site only
              when someone copies it. Every later task (highlighting,
              components, org) would add to those copies. The shared files
              become one SDK released by tag, a site is created by one
              command at that tag, as gonew creates a Go service, and a
              site keeps pace by bumping the tag.
Behaviors     1. spike-html-hosting-sdk exists on GitHub (public,
                 Apache-2.0), managed with marathon as kind code, with
                 `mise run check`, `mise run currency`, CI on pull
                 requests, a CHANGELOG, a README, and a STANDARDS.md that
                 restates the spike's provenance and design rules. Its
                 currency prints nothing, comparing the held typescript
                 6.0.3 as the sites do.
              2. Its release workflow, on a push to main whose manifest
                 version has no tag, runs the check, commits the pack's
                 tree and tags it v<version>, and creates a GitHub release
                 from the CHANGELOG with the tarball attached. It does
                 nothing at version 0.0.0 or at a version already tagged.
              3. The package @jaimestill/spike-html-hosting-sdk ships built
                 ES modules and their declarations through its exports,
                 never TypeScript source: the render-blocking and Markdown
                 pages Vite plugins, the ESLint configuration with the
                 leftover check, a tsconfig base, a Prettier configuration,
                 the site stylesheet, the content check, the preview
                 server, the shell checks, the Markdown crawl, and the
                 capture description. It peers vite, eslint,
                 spike-html-apps-foundation and spike-html-apps-tooling,
                 and pins marked, marked-gfm-heading-id, yaml,
                 vite-plugin-standard-css-modules, @eslint/js,
                 typescript-eslint and globals exactly as its own
                 dependencies.
              4. The SDK's unit tier holds what the sites' unit tiers held:
                 the leftover check refuses every CSS module script form in
                 fixture output and passes clean output; the renderer
                 places links, front matter and heading ids as before; the
                 content check fails when a copied file's blob hash
                 differs from its record.
              5. The shell checks, called on a page: the Theme button and T
                 open the theme menu with its sheet adopted on the
                 document; stepping each facet sets its attribute on the
                 root; the page's one module script is render-blocking;
                 every request resolves under the base with none failed;
                 main holds its centered reading width at 1600px. The
                 crawl adds the Markdown checks: every recorded page
                 reached, titles, the front matter table, links and
                 fragments.
              6. The capture description takes the site's page list and
                 gives each page every state, the theme-menu states,
                 facets, --all and the registry read as before. A page's
                 path is its absolute URL path under the base, the index
                 /<repo>/, so captures and captions are unchanged, and an
                 unknown profile's message names the page's path; an SDK
                 test asserts that message.
              7. The pages and CI workflows are reusable workflows in the
                 v* tree: pages runs the full check on a push to main, then
                 uploads and deploys the build; ci runs the check on pull
                 requests. A site calls them at the SDK's tag.
              8. The SDK's currency bin reports, one line each, every mise
                 tool, package pin, github: tag, action pin and reusable
                 workflow call that trails its latest, compares typescript
                 with the newest version typescript-eslint's peer range
                 accepts, prints nothing and exits 0 when all are current,
                 and exits nonzero when it reports.
              9. The scaffold bin, run as `pnpm dlx
                 github:JaimeStill/spike-html-hosting-sdk#vX.Y.Z <repo>
                 [dir]` (or npm exec with --allow-git=all), writes the
                 template into dir, ./<repo> by default, and refuses a
                 non-empty dir, exiting nonzero and naming it; a usage
                 error exits 2. The copy's package name is <repo>, so its
                 base is /<repo>/; its index title names <repo>; it pins
                 the SDK and calls its workflows at the bin's own tag; its
                 .gitignore is present; each file that takes comments
                 carries "From spike-html-hosting-sdk (vX.Y.Z):
                 template/<path>" beside its upstream lines, JSON none; and
                 its lockfile is written.
              10. The template is a Markdown-copy site: a shell page every
                 Markdown page fills; a sample copied tree, the SDK's own
                 README pinned at an SDK commit, with its content record;
                 its crawl, shell, content and leftover checks; a
                 screenshots task over every page (outside check); the
                 no-capture-left test; the browser preflight; and a
                 currency task on the SDK's bin.
              11. The SDK's check scaffolds the working tree into a scratch
                 directory under TMPDIR, points the copy's SDK dependency
                 at the working tree, runs the copy's full check with no
                 network, and removes the directory.
              12. spike-html-hosting-sdk v0.1.0 is released as Behavior 2
                 describes, at a BUILD checkpoint before the sites adopt
                 it, and installs by its tag.
              13. The architecture and sqlate sites each consist of a
                 v0.1.0 scaffold of their own name plus what they keep:
                 their copied tree and its record, their notes and
                 marathon configuration, their history, and their index
                 title and text. Each pins the SDK and calls its workflows
                 at v0.1.0, builds the same pages at the same paths as
                 before, passes its check, prints nothing from currency,
                 and deploys.
              14. The root is a v0.1.0 scaffold adapted to its one page,
                 each adaptation marked "Adapted from": its own index page,
                 its plugin list without the Markdown plugin, the shell
                 checks alone on its index, and a capture of its index at
                 /spike-html-hosting/ with the theme-menu states. Its check
                 passes, its currency prints nothing, it deploys, and the
                 spike's notes name the SDK as the owner of every shared
                 file and describe the scaffold command.
              15. No site declares the SDK's own dependencies directly, and
                 no site holds a hand copy of a file another site owns.
Test seams    each repository's `mise run check`; the scaffold bin run into
              a scratch directory and the copy's check; the built site
              under Vite's preview
Slices        1. SDK repository created: init, marathon configuration,
                 STANDARDS.md, CHANGELOG, README stub, lint-only check, CI,
                 release workflow at 0.0.0, currency; green CI, no tag
              2. SDK build-time exports: the two Vite plugins and the
                 renderer with its tests, the ESLint configuration and its
                 leftover fixture test, the tsconfig and Prettier bases,
                 the stylesheet, the content check; built, packed, and the
                 pack's exports shown resolving
              3. SDK browser exports and bins: the preview server, the
                 shell checks, the crawl, the capture description with
                 absolute page paths and the unknown-profile test, the
                 currency bin, the reusable workflows; the browser tier
                 green on a fixture page
              4. template and scaffold bin: the Markdown-copy template with
                 the SDK README as its sample tree, the scaffold bin, the
                 scaffold test running the copy's full check offline;
                 version 0.1.0, CHANGELOG [0.1.0], README install and
                 scaffold forms
                 → checkpoint (escalation): architect accepts the SDK, its
                   pull request merges, the release workflow cuts v0.1.0;
                   the record logs that this session pushed it
              5. architecture adopts v0.1.0: scaffold into scratch, copied
                 over, kept files restored; built page list unchanged; a
                 --page index capture shown
              6. sqlate adopts v0.1.0, the same; a --page capture shown
              7. root adopts v0.1.0 with its single-page adaptations; the
                 spike's notes rewritten to name the SDK as owner; a
                 capture of its index shown
Out of scope  syntax highlighting, the documentation components, the org
              content and the root's Markdown, the cross-site review, VHS,
              cost; a fix inside spike-html-apps-tooling (a reference);
              publishing to the npm registry; template/v* tags; a scaffold
              mode that writes into a non-empty directory
Door          one-way: the public spike-html-hosting-sdk repository and its
              v0.1.0 tag, which three sites consume; two-way: each site's
              change, which redeploys its pages unchanged in content and
              reverts by reverting its merge
Release       spike-html-hosting-sdk v0.1.0
```

## Progress

slices 6/7 committed (sdk c93bc87..cfec324; architecture 3fdf345; sqlate e364cbf) · sdk reviewed (standards, spec) · checkpoint done: sdk PR #1 merged f8e5eb9 with its CI red (the merge command piped through tail); release run cancelled, no tag; fixed forward on template-fix, PR #2 237a769 green; this session's release run 41886733833 pushed v0.1.0 (tag commit 3806e18) and its GitHub release; a scaffold from the tag installs, checks, and prints no currency · standards (sites) — · spec (sites) — · editor —

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

## Pending edits

None.
