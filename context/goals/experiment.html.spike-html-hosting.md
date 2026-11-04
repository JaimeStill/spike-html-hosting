# goal · experiment.html.spike-html-hosting

- **State:** building
- **Task:** content
- **Branch:** content

## Tasks

1. [x] layers
2. [ ] content
3. [ ] components
4. [ ] org
5. [ ] review
6. [ ] answer

## Task brief · content

```
Problem       The architecture and sqlate sites show a placeholder page.
              Evidence 3 and 4 need their Markdown sources, pinned with
              provenance, rendered at build as pages under each site's base:
              front matter shown, relative links resolved, the README as the
              index. The components and org tasks build on these pages.
Behaviors     1. Each site's browser tier runs on chrome-headless-shell
                 157.0.8103.38, and its currency command reports only the
                 held typescript.
              2. The architecture site carries byte-identical copies of
                 architecture's 29 front-matter pages at 8706d04 (README.md,
                 architecture.md, principles/, standards/). The sqlate site
                 carries sqlate's README.md and docs/ at v0.6.1 (f09068a).
                 Each tree has one provenance record naming the repository,
                 the commit, and each path with its git blob hash. A unit test
                 fails when a copy differs from its recorded hash, and
                 STANDARDS.md records this exception to the per-file
                 provenance line.
              3. The build renders every copied file through marked into a
                 page in the site's shell (the foundation's page.css,
                 register.js and preferences.js render-blocking, the theme
                 button). "x.md" becomes "x.html" and "dir/README.md" becomes
                 "dir/", so the root README is the site's index. No generated
                 file lands in the working tree.
              4. A relative ".md" link to a copied page points to that page's
                 built URL, keeping its fragment. Every heading carries its
                 GitHub-style id (marked-gfm-heading-id), so every fragment
                 link reaches its heading.
              5. A relative link to anything not copied (README -> LICENSE)
                 points to the source's github.com blob URL at the pin. The
                 build fails on a relative link it can't place.
              6. Front matter, parsed by yaml, shows as a key/value table
                 above the page's content, never as body text. The page title
                 is the front matter's name, else the first h1.
              7. Each site's browser tier crawls every page from the index
                 under the base. Each page answers 2xx, makes every request
                 under the base, and has one render-blocking module script.
                 Each in-site link reaches a built page and an existing
                 fragment id. Titles and the front matter table match the
                 source. The theme menu opens with its sheet adopted, as
                 before.
              8. The content renderer is written in the architecture site and
                 copied to sqlate with provenance. The spike's context names
                 the architecture site as its owner until the template task
                 moves it into the site SDK.
Test seams    the built site under its base, crawled through vite preview and
              headless Chrome; the provenance record against the copied trees
Slices        1. architecture upgrade: chrome-headless-shell 157, currency
                 reporting only held items, check passing
              2. sqlate upgrade: the same
              3. architecture pages: the 29 copies with their provenance
                 record and test, rendered in the shell with the README as
                 the index, links and fragments resolved, links outside the
                 copy sent to the blob at 8706d04, the crawl test
              4. architecture front matter: the table above each page and
                 titles from name, asserted by the crawl
              5. sqlate pages: the renderer copied from architecture with
                 provenance, README and docs/ at v0.6.1 with their record,
                 titles from the first h1, the crawl test
Out of scope  the shared site template and SDK (its own task), documentation
              components (section tree, page header, nav), syntax
              highlighting, the root site's code and its chrome pin,
              cross-site navigation, the review, VHS
Door          two-way: copies, build code and pins in two sites; no tag is
              pushed
```

## Progress

slices 4/5 committed · standards — · spec — · editor —

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

## Pending edits

- coordinator · roadmap: add task `template` to experiment.html.spike-html-hosting between
  content and components (a site SDK released by tag plus a template subtree copied once), through
  a `plan` session after content ships.
