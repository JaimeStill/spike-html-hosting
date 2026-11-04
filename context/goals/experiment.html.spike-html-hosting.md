# goal · experiment.html.spike-html-hosting

- **State:** idle
- **Task:** none
- **Branch:** none

## Tasks

1. [x] layers
2. [ ] content
3. [ ] components
4. [ ] org
5. [ ] review
6. [ ] answer

## Task brief

```
Problem       The spike's evidence needs four repositories and three live project sites, each
              built by Vite on the foundation and deployed by its own Pages workflow. Only the
              root exists, with a shellcheck-only check and no site. Every later task builds on
              these layers.
Behaviors     1. spike-html-hosting-components, -architecture, and -sqlate exist on GitHub
                 (JaimeStill, public, Apache-2.0, a "main" ruleset as spike-html-apps' layer
                 repos), each with marathon.toml, STANDARDS.md (restating the root's conventions
                 for it), mise.toml with install, check, and currency tasks, and ci.yml on pull
                 requests.
              2. The components repository's check runs shellcheck, actionlint, and Prettier; its
                 release.yml tags an untagged package.json version and skips 0.0.0; its
                 CHANGELOG holds only [Unreleased]; package.json is at 0.0.0. No tag is cut.
              3. Each site (the root, -architecture, -sqlate) builds with Vite 8.3.5 and
                 vite-plugin-standard-css-modules 0.3.0 on spike-html-apps-foundation v0.3.0 by
                 git tag, under base "/<repo>/", to a placeholder page that loads the
                 foundation's page.css, register.js, and preferences.js render-blocking and
                 opens the theme menu from a button.
              4. Each site's check builds, lints (ESLint, Prettier, typescript-go, actionlint,
                 shellcheck), and fails on any CSS module script left in the build output; a
                 test proves the leftover check fails on a fixture that keeps one.
              5. Each site's browser test serves the build under its base with vite preview,
                 loads the page with headless Chrome, opens the theme menu, and finds its sheet
                 adopted, with every request resolving under the base.
              6. Each site's Pages workflow, on push to main, runs the check, then uploads the
                 build output and deploys it; the deployed page loads at
                 https://jaimestill.github.io/<repo>/ with the theme menu working.
              7. Each repository's [remote] ci waits on the push run (the Pages deploy for the
                 sites, release.yml for components); each currency command reports mise tools,
                 package pins, github: tags, and action pins behind their latest.
Test seams    the built site under its base, through vite preview and headless Chrome; the
              leftover check against the build output and a fixture
Slices        1. components scaffold: the repository, its lint-only check, ci.yml, release.yml
                 skipping 0.0.0, CHANGELOG, STANDARDS.md, currency
              2. root site: Vite build, the placeholder page, the leftover check and its fixture
                 test, the browser test, the Pages workflow, ci.yml, the extended currency, and
                 [remote] ci on the deploy
              3. spike-html-hosting-architecture site, the root's site layer copied with
                 provenance under its own base
              4. spike-html-hosting-sqlate site, the same
Out of scope  content (Markdown rendering), components code and v0.1.0, cross-site navigation,
              the review, VHS, cost measurement
Door          two-way: new repositories, rulesets, and Pages enablement can all be removed; no
              tag is pushed
```

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

## Pending edits

- none
