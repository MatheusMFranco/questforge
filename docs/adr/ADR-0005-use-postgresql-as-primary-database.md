# ADR-0005

## Status

Accepted

## Date

2026-07-14

## Context

QuestForge requires transactional consistency while also supporting flexible data structures.

## Decision

Use PostgreSQL as the primary database.

## Alternatives Considered

- MySQL
- SQL Server
- MongoDB

## Consequences

### Positive

- ACID compliance.
- JSONB support.
- Excellent indexing.
- Mature ecosystem.
- Open source.

### Negative

- Slightly more operational complexity than SQLite.
