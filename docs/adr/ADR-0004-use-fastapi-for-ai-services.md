# ADR-0004

## Status

Accepted

## Date

2026-07-14

## Context

Artificial Intelligence is one of the core features of QuestForge.

Most AI tooling and frameworks are Python-first.

## Decision

Implement AI services using FastAPI.

## Alternatives Considered

- Spring Boot
- Express
- NestJS

## Consequences

### Positive

- Native AI ecosystem.
- Excellent async performance.
- Automatic OpenAPI generation.
- Easy integration with LLM frameworks.

### Negative

- Different language than frontend.
