# Agent Instructions

## Package Manager
Use **pnpm**: `pnpm install`, `pnpm dev`, `pnpm test`

## Commit Attribution
AI commits MUST include:
```
Co-Authored-By: GitHub Copilot <noreply@github.com>
```

## Meta-Orchestrator
**BOSS** (`.agents/skills/boss/SKILL.md`) — Low-token meta-orchestrator that discovers, indexes, and coordinates all installed AI agent skills using a three-tier registry, agents.md workspace configuration, and AIngram for persistent knowledge.

### Registry Tiers
| Tier | Location | Purpose |
|------|----------|---------|
| 1 | `.agents/skills/boss/BOSS_INDEX.json` | Auto-generated index of all skills under `.agents/skills/boss/` |
| 2 | `.agents/skills/PROJECT_INDEX.json` | Project-specific skills (optional) |
| 3 | Remote catalog | External skill catalog fallback |

**Maintenance:** Run `pwsh .agents/skills/boss/update-index.ps1` after adding/removing skills.

---

## Planning Pipeline
**Meta-Plan Pipeline** (`.agents/skills/boss/code-plan/00_meta-plan-pipeline/SKILL.md`) — Orchestrates the full development workflow: brainstorm → plan → execute-review → review.

### Planning Folder Structure
```
planning/
├── decision.md      # Decision tree, assumptions, constraints (Phase 1 output)
├── plan.md          # Atomic action items, scope, git steps (Phase 2 output)
├── task_plan.md     # Phase/task progress tracking (Phase 2 init, Phase 3 updates)
├── findings.md      # Research, discoveries (Phase 1 context, Phase 2/3 updates)
└── progress.md      # Session log, errors, test results (Phase 2 init, Phase 3 updates)
```

### Pipeline Stages
| Phase | Skill | Output | Triggers |
|-------|-------|--------|----------|
| 1. Brainstorm | `01_brainstorming` | `decision.md` | "plan this feature", "architecture review" |
| 2. Plan | `02_concise-planning` | `plan.md`, `task_plan.md` | After decision.md confirmed |
| 3. Execute & Review | `03_executing-plans` | Git commits, checkpoints, updated context files | After plan.md approved |
| 4. Review | `00_meta-plan-pipeline` | `04-summary` options | After execution complete |

### Decision Tree (decision.md Template)
```markdown
# Decision: [Feature Name]

## What & Why
[What is being built and why]

## Who
[Target users]

## Constraints
- [Constraint 1]
- [Constraint 2]

## Non-Goals
- [Explicit out-of-scope item]

## Assumptions
- [Assumption 1] (marked ⚠️ if uncertain)
```

---

## File-Scoped Commands
| Task | Command |
|------|---------|
| Typecheck | `pnpm tsc --noEmit path/to/file.ts` |
| Lint | `pnpm eslint path/to/file.ts` |
| Test | `pnpm jest path/to/file.test.ts` |

---

## Key Conventions
- **Planning files live in project root** (`planning/` folder) — not in `.agents/`
- **Decision tree first** — never skip Phase 1 for new features
- **Atomic commits** — Phase 3 executes in small batches with git commits per batch
- **Context persistence** — `findings.md` and `progress.md` carry context across phases
- **Quality gates** — Typecheck, lint, and test must pass before each commit in Phase 3

---

## Reference Documents

| Document | Purpose |
|----------|---------|
| [`COMPONENT_CATALOG.md`](./COMPONENT_CATALOG.md) | All UI components, props, patterns, and design token reference |
| [`BRAND_VISUAL_GUIDELINES.md`](./BRAND_VISUAL_GUIDELINES.md) | Colors, typography, spacing, imagery, and logo rules |
| [`BRAND_VOICE.md`](./BRAND_VOICE.md) | Tone, messaging hierarchy, and writing style for content |

**When building new components or pages, consult `COMPONENT_CATALOG.md` first.** For content and copy decisions, refer to `BRAND_VOICE.md`. For visual styling details beyond the catalog, see `BRAND_VISUAL_GUIDELINES.md`.