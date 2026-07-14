# ADR-0003

## Status

Accepted

## Date

2026-07-14

## Context

Although QuestForge is expected to become a distributed platform, starting with microservices would introduce unnecessary complexity.

The project currently has a single developer and an evolving domain.

## Decision

Start as a Modular Monolith and evolve to Microservices only when justified.

## Alternatives Considered

- Microservices from day one
- Serverless architecture

## Consequences

### Positive

- Lower complexity.
- Faster development.
- Easier debugging.
- Better domain understanding.

### Negative

- Future extraction of services will require planning.
