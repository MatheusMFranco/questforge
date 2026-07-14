# ADR-0002

## Status

Accepted

## Date

2026-07-14

## Context

QuestForge is expected to evolve into multiple applications and services.

Future plans include:

- Web
- Admin
- AI Services
- Shared UI
- SDK
- Mobile

## Decision

Use Turborepo as the monorepo solution.

## Alternatives Considered

- Nx
- Lerna
- Multiple repositories

## Consequences

### Positive

- Incremental builds.
- Remote cache.
- Shared packages.
- Easy code reuse.
- Simple developer experience.

### Negative

- Additional learning curve.
