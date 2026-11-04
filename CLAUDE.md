# spike-html-hosting

A spike for the Standards Lab reference architecture. It settles what the repositories' GitHub
Pages sites and the hosting of persistent artifacts look like, published as native web. The
repository is managed with the marathon workflow; start from `context/README.md`.

- **Standards:** `STANDARDS.md`, with pointers into the architecture repository.
- **Site:** this repository is the org stand-in's Pages project site,
  https://jaimestill.github.io/spike-html-hosting/. `.github/workflows/pages.yml` runs the check
  and deploys the build on each push to main; `ci.yml` runs the check on pull requests.
- **Check:** `mise run check`, after `mise run install`: ESLint, which includes the check that
  no CSS module script is left in the build output; Prettier, shellcheck, actionlint, and
  typescript-go's tsc; the Vite build; the unit tier, which tests that check against fixtures;
  and the browser tier, which loads the build in the pinned chrome-headless-shell. It reads no
  network.
- **Currency:** `mise run currency`: every mise tool, package.json pin, `github:` tag, and
  workflow action pin behind its latest.
- **Goals:** this spike's tasks live in the coordinator's roadmap,
  `standards-lab/context/roadmap.toml`, under `experiment.html.spike-html-hosting`. Its goal
  record is `context/goals/experiment.html.spike-html-hosting.md`.
- **Repositories:** the root (the org stand-in's site) and three more:
  spike-html-hosting-components, -architecture, and -sqlate. The coordinator's
  `[workspace.paths]` locates them.
- **References:** the repositories this spike reads are listed in `context/README.md`. The spike
  reads them and never writes to them.
