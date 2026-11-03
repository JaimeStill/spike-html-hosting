# spike-html-hosting

A spike for the Standards Lab reference architecture. It settles what the repositories' GitHub
Pages sites and the hosting of persistent artifacts look like, published as native web. The
repository is managed with the marathon workflow; start from `context/README.md`.

- **Standards:** `STANDARDS.md`, with pointers into the architecture repository.
- **Check:** `mise run check`: shellcheck. The layers task grows it to the site's build, lint,
  and the no-CSS-module-script check.
- **Currency:** `mise run currency`: every mise tool pinned behind its latest.
- **Goals:** this spike's tasks live in the coordinator's roadmap,
  `standards-lab/context/roadmap.toml`, under `experiment.html.spike-html-hosting`. Its goal
  record is `context/goals/experiment.html.spike-html-hosting.md`.
- **Repositories:** the root (the org stand-in's site) and three more, which the layers task
  creates: spike-html-hosting-components, -architecture, and -sqlate. The coordinator's
  `[workspace.paths]` locates them.
- **References:** the repositories this spike reads are listed in `context/README.md`. The spike
  reads them and never writes to them.
