# ADR-0008 — Adopt Domain-Driven Design

## Status

Accepted

## Date

2026-07-14

## Context

QuestForge is not a CRUD application.

The platform combines multiple business domains, including:

- Task Management
- User Progression
- Experience and Levels
- Achievements
- Quests
- Collectible Cards
- AI Assistant
- Guilds
- Notifications
- Marketplace
- Analytics

Each domain has its own business rules, terminology, lifecycle, and complexity.

As the platform evolves, maintaining a clear separation between business concerns becomes essential for scalability and long-term maintainability.

A domain-centric architectural approach is required.

## Decision

QuestForge will adopt Domain-Driven Design (DDD) as its primary modeling approach.

Business concepts will drive the software architecture rather than database structures or framework conventions.

The system will be organized into independent bounded contexts, each owning its own domain model, business rules, and application services.

The architecture will encourage collaboration between engineering and product stakeholders through a shared ubiquitous language.

## Initial Bounded Contexts

The following bounded contexts are initially planned:

- Identity
- Users
- Tasks
- Quests
- Progression
- Achievements
- Inventory
- Cards
- Marketplace
- Guilds
- AI Assistant
- Notifications
- Analytics

Additional bounded contexts may be introduced as the platform evolves.

## Tactical Patterns

The project will progressively adopt the following DDD tactical patterns where appropriate:

- Entities
- Value Objects
- Aggregates
- Domain Events
- Repositories
- Factories
- Domain Services
- Application Services
- Specifications

Not every domain requires every pattern.

Patterns should be introduced only when they improve clarity and maintainability.

## Alternatives Considered

### Layered Architecture

Pros

- Easy to understand.
- Familiar to most developers.

Cons

- Business rules tend to leak into infrastructure.
- Domain logic becomes scattered.
- Difficult to evolve in complex systems.

### Database-First Design

Pros

- Fast initial development.
- Simple CRUD applications.

Cons

- Domain model becomes coupled to persistence.
- Poor scalability for complex business rules.
- Difficult to maintain over time.

### Feature-Based Organization Without DDD

Pros

- Simple folder organization.
- Fast onboarding.

Cons

- No explicit domain boundaries.
- Increased coupling between features.
- Harder to evolve into distributed systems.

## Consequences

### Positive

- Business rules become the center of the architecture.
- Clear ownership of each domain.
- Better maintainability.
- Improved scalability.
- Easier testing.
- Reduced coupling.
- Better communication with product stakeholders.
- Facilitates future extraction into microservices.

### Negative

- Higher learning curve.
- More concepts for developers to understand.
- Increased initial modeling effort.
- Some domains may appear over-engineered during early development.

## Trade-offs

By adopting Domain-Driven Design we gain:

- Explicit business boundaries.
- Better long-term maintainability.
- Clear ownership of responsibilities.
- Easier architectural evolution.
- Improved collaboration between engineering and product.

At the cost of:

- Additional architectural complexity.
- More upfront design work.
- More project structure.
- Longer onboarding for developers unfamiliar with DDD.

## Future Considerations

QuestForge will initially be implemented as a Modular Monolith.

Bounded Contexts should communicate through well-defined interfaces and domain events whenever possible.

As the platform grows, individual bounded contexts may evolve into independent microservices.

This migration should happen only when justified by operational or business requirements.

## Related Principles

This decision aligns with:

- Business First
- Domain-Driven Design
- Clean Architecture
- Modular Design
- Evolutionary Architecture
- Event-Driven Architecture

## Related ADRs

- ADR-0003 — Start as a Modular Monolith
- ADR-0006 — Adopt Clean Architecture
- ADR-0007 — Use RabbitMQ for Asynchronous Messaging

## References

- Architecture Principles
- Engineering Handbook
- Technology Radar
