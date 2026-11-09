<!-- Adapted from spike-html-hosting-sdk (v0.4.0): template/README.md, its site the root's hand
     pages beside the rendered pages of its two copied trees.
     Adapted from spike-html-hosting-sdk (v0.6.0): template/README.md, its screenshots line. -->

# spike-html-hosting

The GitHub Pages site of spike-html-hosting, the org stand-in, made from the template of
[spike-html-hosting-sdk](https://github.com/JaimeStill/spike-html-hosting-sdk) v0.6.0 and served
under `/spike-html-hosting/`. It pins
[spike-html-hosting-components](https://github.com/JaimeStill/spike-html-hosting-components)
v0.5.0 and the icons layer,
[spike-html-hosting-icons](https://github.com/JaimeStill/spike-html-hosting-icons) v0.1.0, whose
glyphs the build fills into every page's `<svg data-icon="octicon/<name>"></svg>` markers.

- Its hand pages are written as HTML: `index.html`, the index of every site;
  `briefs/orientation.html`, the orientation brief with diagrams; and the sitrep entries under
  `sitreps/`.
- Each Markdown file copied into `content/` is a page in `page.html`'s shell:
  standards-lab/.github's profile, the charter, under `content/github/`, and standards-lab/org's
  orientation brief under `content/org/`. `content.json` records each copied tree's source: its
  repository, the commit it was copied at, and each file's git blob hash.
- `public/sites.json` is the list of sites every page's site nav fetches.

## Tasks

- `mise run install`: install the pinned tools and node_modules; reads the network.
- `mise run check`: ESLint, with the check that no CSS module script is left in the build;
  Prettier, shellcheck, and actionlint; tsc's type check; the build; the unit tier, the copied
  trees against `content.json`; and the browser tier, the SDK's checks on every page the build
  writes in the pinned chrome-headless-shell. It reads no network.
- `mise run screenshots`: capture every page, light and dark, at 390px, 1120px, and 1376px.
- `mise run currency`: every pin behind its latest, the SDK's tag among them.

## Keeping pace with the SDK

The SDK is pinned by its release tag, in `package.json` and in both workflows'
`uses:` lines. To move to a newer release, bump the tag in all three, run `pnpm install`, and run
`mise run check`.
