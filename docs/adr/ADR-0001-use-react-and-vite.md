# ADR-0001

## Status

Accepted

## Date

2026-07-14

## Context

QuestForge is a productivity platform focused on rich client-side interactions, AI integration, dashboards, drag-and-drop interfaces and game mechanics.

SEO is not a primary requirement.

The application is expected to communicate with independent backend services through REST and GraphQL APIs.

## Decision

Use React with Vite as the frontend foundation.

## Alternatives Considered

- Next.js
- TanStack Start
- Remix

## Consequences

### Positive

- Extremely fast development experience.
- Fast builds and HMR.
- Simple deployment.
- Framework agnostic backend.
- Ideal for SPA applications.
- Excellent ecosystem.

### Negative

- No Server Side Rendering.
- No built-in API routes.
