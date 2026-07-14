# ADR-0009 — Use Docker for Local Development

## Status

Accepted

## Date

2026-07-14

## Context

QuestForge consists of multiple applications and services developed using different technologies, including:

- React
- Python (FastAPI)
- PostgreSQL
- Redis
- RabbitMQ

Each component has its own runtime requirements and dependencies.

Installing every dependency directly on the host machine would make onboarding more difficult, increase configuration drift, and create inconsistencies between development environments.

A reproducible local development environment is required.

## Decision

Docker will be used as the standard local development platform.

All infrastructure dependencies will run as Docker containers.

Application services may also run inside containers when appropriate.

Docker Compose will orchestrate the local development environment.

## Initial Services

The initial local development environment is expected to include:

- PostgreSQL
- Redis
- RabbitMQ

Additional services may include:

- Mailpit
- MinIO
- OpenTelemetry Collector
- Prometheus
- Grafana

## Alternatives Considered

### Native Installation

Pros

- Slightly lower resource consumption.
- Direct access to installed software.

Cons

- Platform-specific setup.
- Difficult onboarding.
- Version inconsistencies.
- Configuration drift.
- Harder to automate.

### Dev Containers

Pros

- Excellent Visual Studio Code integration.
- Fully isolated development environment.

Cons

- Additional learning curve.
- Depends on Docker.
- May be unnecessary during the initial project stages.

### Kubernetes for Local Development

Pros

- Environment closer to production.
- Good for validating distributed systems.

Cons

- High operational complexity.
- Excessive resource consumption.
- Slower developer workflow.
- Overkill for the current project.

## Consequences

### Positive

- Consistent development environments.
- Fast onboarding.
- Infrastructure reproducibility.
- Simple service version management.
- Easy cleanup and recreation of environments.
- Better alignment between local and production environments.
- Simplifies CI/CD pipelines.

### Negative

- Additional resource consumption.
- Docker must be installed.
- Container networking introduces additional concepts.
- Slightly slower startup times.

## Trade-offs

By adopting Docker we gain:

- Environment consistency.
- Reproducible infrastructure.
- Easier onboarding.
- Better portability.
- Simplified dependency management.

At the cost of:

- Higher memory usage.
- Additional tooling.
- Increased startup time.
- Extra abstraction layer.

## Future Considerations

As QuestForge evolves, Docker Compose may be complemented or replaced by Kubernetes for local development and production orchestration.

Container images should remain lightweight and follow container best practices.

Infrastructure definitions should progressively migrate to Infrastructure as Code (IaC) using Terraform.

## Related Principles

This decision aligns with:

- Cloud Native
- Automation First
- Developer Experience
- Documentation as Code
- Evolutionary Architecture

## Related ADRs

- ADR-0002 — Adopt Turborepo
- ADR-0003 — Start as a Modular Monolith
- ADR-0005 — PostgreSQL as Primary Database
- ADR-0007 — Use RabbitMQ for Asynchronous Messaging

## References

- Architecture Principles
- Engineering Handbook
- Technology Radar
