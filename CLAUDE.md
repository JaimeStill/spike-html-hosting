# spike-html-hosting

A spike for the Standards Lab reference architecture. It settles what the repositories' GitHub
Pages sites and the hosting of persistent artifacts look like, published as native web. The
repository is managed with the marathon workflow; start from `context/README.md`.

- **Standards:** `STANDARDS.md`, with pointers into the architecture repository.
- **Site:** this repository is the org stand-in's Pages project site,
  https://jaimestill.github.io/spike-html-hosting/. `.github/workflows/pages.yml` and `ci.yml`
  call spike-html-hosting-sdk's reusable workflows: the check and deploy on each push to main,
  and the check on pull requests.
- **Check:** `mise run check`, after `mise run install`: ESLint on the SDK's configuration,
  which includes the check that no CSS module script is left in the build output; Prettier,
  shellcheck, actionlint, and typescript-go's tsc; the Vite build; the unit tier, the SDK's
  content check of the copied trees against `content.json`; and the browser tier, which runs the
  SDK's shell checks on every page the root builds and its crawl of the copied pages in the pinned
  chrome-headless-shell, and runs the screenshots command once to show it leaves no capture file.
  It reads no network.
- **Screenshots:** `mise run screenshots` captures every page the root builds, light and dark,
  wide and narrow, and the index with its theme menu open; `context/README.md`, "Taking
  captures", lists its flags.
- **Currency:** `mise run currency`, the SDK's currency bin: every mise tool, package.json pin,
  `github:` tag, workflow action pin, and reusable workflow call behind its latest.
- **Goals:** this spike's tasks live in the coordinator's roadmap,
  `standards-lab/context/roadmap.toml`, under `experiment.html.spike-html-hosting`. Its goal
  record is `context/goals/experiment.html.spike-html-hosting.md`.
- **Repositories:** the root (the org stand-in's site) and four more:
  spike-html-hosting-sdk, -components, -architecture, and -sqlate. The coordinator's
  `[workspace.paths]` locates them.
- **References:** the repositories this spike reads are listed in `context/README.md`. The spike
  reads them and never writes to them.
