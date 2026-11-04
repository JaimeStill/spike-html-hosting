<!-- Adapted from spike-html-hosting-sdk (v0.1.0): template/README.md, its site the root's one
     index page, with no copied tree and no unit tier. -->

# spike-html-hosting

The GitHub Pages site of spike-html-hosting, the org stand-in, made from the template of
[spike-html-hosting-sdk](https://github.com/JaimeStill/spike-html-hosting-sdk) v0.1.0. Its one
page, `index.html`, is served under `/spike-html-hosting/`.

## Tasks

- `mise run install`: install the pinned tools and node_modules; reads the network.
- `mise run check`: ESLint, with the check that no CSS module script is left in the build;
  Prettier, shellcheck, and actionlint; tsc's type check; the build; and the browser tier, the
  SDK's checks on the build in the pinned chrome-headless-shell. It reads no network.
- `mise run screenshots`: capture the index, light and dark, wide and narrow.
- `mise run currency`: every pin behind its latest, the SDK's tag among them.

## Keeping pace with the SDK

The SDK is pinned by its release tag, in `package.json` and in both workflows'
`uses:` lines. To move to a newer release, bump the tag in all three, run `pnpm install`, and run
`mise run check`.
