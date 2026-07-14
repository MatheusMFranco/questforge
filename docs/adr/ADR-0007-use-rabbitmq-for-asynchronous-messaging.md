# ADR-0007 — Use RabbitMQ for Asynchronous Messaging

## Status

Accepted

## Date

2026-07-14

## Context

QuestForge is designed as a modular platform that will eventually consist of multiple services responsible for task management, gamification, notifications, AI workflows, user progression, achievements, and analytics.

Many of these components should communicate asynchronously to improve scalability, resilience, and system decoupling.

Examples include:

- Sending notifications
- Processing AI requests
- Awarding achievements
- Updating leaderboards
- Scheduling background jobs
- Synchronizing external integrations

An asynchronous messaging platform is therefore required.

## Decision

RabbitMQ will be adopted as the initial message broker.

The system will communicate through events whenever synchronous communication is unnecessary.

The messaging abstraction will be designed to minimize coupling with RabbitMQ-specific features, allowing future migration if business requirements change.

## Alternatives Considered

### Kafka

Pros

- Excellent for event streaming
- High throughput
- Durable event log
- Replay capabilities
- Industry standard for large-scale event architectures

Cons

- Operational complexity
- Larger infrastructure footprint
- Higher learning curve
- Unnecessary for the current project size

### AWS SQS

Pros

- Fully managed
- High availability
- Excellent AWS integration

Cons

- Vendor lock-in
- Harder local development
- Less flexible routing capabilities

### Redis Streams

Pros

- Simple deployment
- Good performance

Cons

- Not primarily designed as a messaging platform
- Fewer messaging features than RabbitMQ

## Consequences

### Positive

- Easy local development using Docker.
- Mature and well-documented ecosystem.
- Supports queues, exchanges, routing keys and dead-letter queues.
- Enables asynchronous processing.
- Decouples services.
- Good fit for the current project stage.
- Can be integrated with multiple programming languages.

### Negative

- Lower throughput than Kafka.
- Limited event replay capabilities.
- Additional infrastructure component to maintain.

## Future Considerations

If QuestForge evolves into a large-scale distributed platform with requirements such as:

- Event sourcing
- Event replay
- Stream processing
- Analytics pipelines
- High-volume event ingestion

the messaging platform should be re-evaluated.

Possible future migration targets include:

- Apache Kafka
- Amazon MSK
- Google Pub/Sub

Such migration should be documented in a new Architecture Decision Record.

## Related Principles

This decision aligns with:

- API First
- Event-Driven Architecture
- Modular Design
- Evolutionary Architecture
- Simplicity over Complexity

## References

- Architecture Principles
- Technology Radar
