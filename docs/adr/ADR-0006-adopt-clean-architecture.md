# ADR-0006

## Status

Accepted

## Date

2026-07-14

## Context

QuestForge is intended to be a long-lived project demonstrating engineering best practices.

Business rules should remain independent from frameworks and external technologies.

## Decision

Adopt Clean Architecture across backend services and apply its principles to the frontend where appropriate.

## Alternatives Considered

- Layered Architecture
- MVC
- Feature-first without architectural boundaries

## Consequences

### Positive

- Better testability.
- Clear separation of concerns.
- Easier maintenance.
- Framework independence.
- Supports long-term scalability.

### Negative

- Higher initial complexity.
- More boilerplate.
