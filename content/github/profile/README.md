# Standards Lab

Standards Lab is a blueprint for formalizing an effective, modern, agentic software architecture
strategy: how an organization defines architectures, standards, and principles for inner-source
enterprise development, proves them in worked examples, and develops them with a harness whose
programming standards and workflow integrations are part of the architecture itself. Clear
architectural principles and standards, broken down into appropriately layered boundaries,
optimize the utility of agentic workflows in creating well-structured software — the same
structure that keeps a system legible to people is what lets agents build it well.

Modern means the next generation of primitives for what software emits — the library, the
binary, the container image — not any one deployment venue. Each primitive is a modular
boundary: the artifact where maintenance is contained, vulnerabilities and technical debt are
mitigated, and a capability becomes reusable. Layered appropriately, the boundaries compose
into an ecosystem of reusable components: foundations are solved once and adopted rather than
re-derived project by project, and capacity shifts toward creating, innovating, and leading the
standard forward. The boundaries also keep ownership and change legible: lines of effort and
responsibility attach to tangible artifacts, and a small, deliberate dependency surface stays
pinned and current, so the organization drives change rather than reacts to it. Examples of the
patterns the ecosystem incubates:

- **Interoperable, domain-driven services.** Services scoped to a domain, composing across
  clear interfaces rather than accumulating into monoliths.
- **Data composition over rigid schema.** Data modeled for composition rather than locked into
  tightly coupled schema.
- **Software architecture above the transport layer.** An enterprise typically operationalizes
  the OSI model's lower layers well — building and configuring networks, VNETs, VLANs, and
  firewalls is settled practice — while holding the higher, data-driven layers to no comparable
  internal discipline, despite the commercial sector's mature standards for the software built
  on them. The blueprint establishes that discipline.

Standardization is emergent rather than decreed: a convention becomes a standard once working
code proves it, promoted to the lowest level at which it is generic. Each target standard is a
complete reference architecture declaring its own dependency line and deployment targets; an
architecture or standard intended for production use graduates to its own organization, whose
name carries the standard's identity — the outermost modular boundary, where a standard's
evolution finds its owner. The blueprint is informative, not prescriptive: the same arrangement
can serve any discipline that benefits from an agentic development workflow, and how others
structure their own architectures and standards is their own to decide.

## Organization Contents

- [Architecture](https://github.com/standards-lab/architecture) — the canonical home for the
  Elemental Architecture, its standards, and its principles.
  - [Elemental Architecture](https://github.com/standards-lab/architecture/blob/main/architecture.md)
    — the compositional elements a program is built from and the rules that bind them,
    independent of technology.
  - [Principles](https://github.com/standards-lab/architecture/blob/main/principles/README.md) —
    the architecture's principles, which every standard enhances and never loosens.
  - [Standards](https://github.com/standards-lab/architecture/blob/main/standards/README.md) —
    each standard and its member repositories.
    [Go Elemental](https://github.com/standards-lab/architecture/blob/main/standards/go-elemental/README.md),
    the Go implementation on the standard library, is the first.
- [Harness](https://github.com/standards-lab/claude-plugins) — `claude-plugins`, the plugin
  marketplace codifying the organization's development processes: the `marathon` workflow and
  its extensions.
- [Workspace context](https://github.com/standards-lab/org) — `org`, the coordination context:
  the roadmap, the references catalog, and the leadership briefs.
