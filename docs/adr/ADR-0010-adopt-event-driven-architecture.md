# ADR-0010 — Adopt Event-Driven Architecture

## Status

Accepted

## Date

2026-07-14

## Context

QuestForge is designed as a modular platform composed of multiple business domains that evolve independently.

Core domains include:

- Tasks
- Quests
- Experience
- Achievements
- Inventory
- Cards
- Marketplace
- AI Assistant
- Notifications
- Analytics

Many business operations naturally trigger secondary actions.

For example:

- Completing a task grants experience.
- Leveling up may unlock achievements.
- Unlocking an achievement may generate notifications.
- AI analysis may update recommendations.
- Marketplace purchases may affect inventory.

Implementing these workflows through direct synchronous service calls would create tight coupling between domains and reduce the system's scalability and flexibility.

An asynchronous communication model is required.

---

# Decision

QuestForge will adopt an Event-Driven Architecture (EDA).

Business domains will communicate primarily through domain events whenever synchronous communication is not required.

Each bounded context will publish events describing business facts rather than invoking other domains directly.

Consumers will subscribe only to the events relevant to their responsibilities.

RabbitMQ will be the initial event broker.

---

# Event Categories

The platform distinguishes three categories of events.

### Domain Events

Represent business facts.

Examples:

- TaskCompleted
- QuestFinished
- UserLeveledUp
- AchievementUnlocked

These events are immutable.

---

### Integration Events

Expose domain changes to other bounded contexts.

Examples:

- NotificationRequested
- AIAnalysisRequested
- UserProfileUpdated

Integration events should remain stable and versioned.

---

### Infrastructure Events

Represent operational concerns.

Examples:

- EmailSent
- CacheInvalidated
- FileUploaded

These events should never contain business logic.

---

# Initial Event Flow

Example:

```
Task Completed

        │
        ▼

Task Domain
        │
        ▼

TaskCompleted Event
        │
 ┌──────┼───────────────┐
 ▼      ▼               ▼

XP     Achievement   Analytics

 ▼         ▼             ▼

User      Badge      Dashboard
```

Domains do not communicate directly.

They communicate through events.

---

# Event Principles

Events should:

- represent facts
- be immutable
- be versioned when necessary
- avoid exposing internal implementation
- contain only relevant business information

Events should never represent commands.

Good:

```
TaskCompleted
```

Avoid:

```
CompleteTask
```

---

# Alternatives Considered

## Fully Synchronous Communication

Pros

- Simple implementation.
- Easy debugging.

Cons

- High coupling.
- Poor scalability.
- Cascade failures.
- Difficult evolution.

---

## Request/Response APIs Only

Pros

- Familiar architecture.
- Easy to understand.

Cons

- Services become tightly coupled.
- Increased latency.
- Reduced resilience.

---

## Event Sourcing

Pros

- Complete audit history.
- Event replay.
- Excellent traceability.

Cons

- Significant complexity.
- Higher operational cost.
- Unnecessary for the current project.

Event Sourcing may be adopted selectively in the future if justified.

---

# Architecture Impact

This decision affects:

- Domain communication
- Background processing
- Notifications
- AI workflows
- Analytics
- Observability
- Future microservice extraction

The architecture should minimize synchronous dependencies between bounded contexts.

---

# Consequences

## Positive

- Loose coupling.
- Better scalability.
- Improved resilience.
- Independent domain evolution.
- Easier addition of new features.
- Better support for asynchronous workflows.
- Natural fit for distributed systems.

## Negative

- Increased architectural complexity.
- More difficult debugging.
- Eventual consistency.
- Additional infrastructure.
- Requires monitoring and tracing.

---

# Trade-offs

By adopting Event-Driven Architecture we gain:

- Scalability.
- Domain isolation.
- Better extensibility.
- Asynchronous processing.
- Independent deployments.
- Improved fault tolerance.

At the cost of:

- Eventual consistency.
- More infrastructure.
- Harder debugging.
- Distributed tracing requirements.
- More complex testing.

---

# Future Considerations

As QuestForge grows, additional messaging capabilities may be introduced, including:

- Kafka
- Event Replay
- Dead Letter Queues
- Saga Pattern
- Outbox Pattern
- Event Versioning
- Schema Registry
- Event Streaming

These technologies should only be introduced when justified by concrete business requirements.

---

# Related Principles

This decision aligns with:

- Event-Driven Thinking
- Evolutionary Architecture
- API First
- Domain-Driven Design
- Modular Design
- Cloud Native

---

# Related ADRs

- ADR-0003 — Start as a Modular Monolith
- ADR-0005 — PostgreSQL as Primary Database
- ADR-0007 — Use RabbitMQ for Asynchronous Messaging
- ADR-0008 — Adopt Domain-Driven Design

---

# References

- Architecture Principles
- Engineering Handbook
- Technology Radar
