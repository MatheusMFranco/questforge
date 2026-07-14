# Engineering Handbook

Welcome to the QuestForge Engineering Handbook.

This document defines the engineering standards, workflows, and development practices followed throughout the project.

The goal is to keep the codebase maintainable, scalable, and enjoyable to work with as the project evolves.

---

# Engineering Philosophy

QuestForge is built with the mindset of a long-lived software product.

We prioritize:

- Simplicity
- Maintainability
- Readability
- Developer Experience
- Automation
- Incremental delivery

Every change should improve the project.

---

# Repository Structure

```
apps/
packages/
services/
docs/
infrastructure/
```

Each directory has a clear responsibility.

- **apps** → User-facing applications
- **packages** → Shared libraries
- **services** → Backend services
- **infrastructure** → Deployment and infrastructure
- **docs** → Documentation

---

# Git Workflow

The project follows a feature branch workflow.

```
main
 ├── feature/setup-tailwind
 ├── feature/dashboard
 ├── feature/authentication
 └── feature/tasks
```

The `main` branch should always remain stable.

Every feature should be developed in an isolated branch.

---

# Commit Convention

This project follows Conventional Commits.

Examples:

```
feat(auth): add JWT authentication

fix(tasks): prevent duplicated task creation

refactor(api): simplify dependency injection

docs(adr): add RabbitMQ architecture decision

test(ui): improve task card coverage

chore(ci): configure GitHub Actions
```

Allowed commit types:

- feat
- fix
- docs
- style
- refactor
- perf
- test
- build
- ci
- chore
- revert

---

# Branch Naming

Use descriptive branch names.

Examples:

```
feature/task-system

feature/user-profile

feature/leaderboard

fix/login-bug

refactor/api-client

docs/architecture
```

Avoid generic names such as:

```
feature1

test

new

temp
```

---

# Pull Requests

Every Pull Request should:

- have a clear description
- explain the motivation
- explain the solution
- reference related issues when applicable

Small Pull Requests are preferred.

---

# Code Review Guidelines

When reviewing code, focus on:

- correctness
- readability
- maintainability
- security
- performance
- simplicity

Avoid subjective comments.

Explain the reasoning behind suggestions.

---

# Coding Standards

Code should be:

- explicit
- readable
- predictable
- testable

Avoid:

- deeply nested code
- unnecessary abstractions
- duplicated logic
- premature optimization

---

# Naming Conventions

Prefer meaningful names.

Good:

```
calculateExperiencePoints()

userRepository

QuestCard
```

Avoid:

```
calc()

tmp

data2

managerHelper
```

Names should communicate intent.

---

# File Organization

Each file should have a single responsibility.

Prefer smaller files over large monolithic files.

Avoid files larger than approximately 300–500 lines unless there is a clear justification.

---

# Architecture

QuestForge follows:

- Clean Architecture
- Domain-Driven Design
- SOLID
- Modular Design

Architecture decisions must be documented as ADRs.

---

# Testing Strategy

Testing follows the Test Pyramid.

```
        E2E
      Integration
        Unit
```

Priority:

1. Unit Tests
2. Integration Tests
3. End-to-End Tests

Tests should validate behavior rather than implementation details.

---

# Documentation

Documentation is part of the project.

Whenever appropriate, update:

- README
- ADRs
- Architecture diagrams
- API documentation

Documentation should evolve together with the code.

---

# Logging

Logs should be:

- structured
- meaningful
- actionable

Never log:

- passwords
- tokens
- secrets
- personal information

---

# Error Handling

Errors should:

- provide context
- be actionable
- avoid leaking implementation details

Unexpected exceptions should be logged.

Expected errors should be handled gracefully.

---

# Dependencies

Before adding a dependency, ask:

- Does it solve a real problem?
- Is it actively maintained?
- Can we solve this without another dependency?

Every dependency increases maintenance cost.

---

# Security

Security is everyone's responsibility.

Always consider:

- authentication
- authorization
- input validation
- secure defaults
- secret management

Follow OWASP recommendations whenever possible.

---

# Performance

Measure before optimizing.

Avoid premature optimization.

When optimization is necessary:

- benchmark
- profile
- document

---

# AI-Assisted Development

AI tools are encouraged to improve productivity.

Examples:

- ChatGPT
- GitHub Copilot
- Cursor

However:

- AI-generated code must always be reviewed.
- Developers remain responsible for every line committed.

---

# Continuous Improvement

Engineering practices are expected to evolve.

If a better approach is identified:

- discuss it
- document it
- improve the project

Continuous improvement is part of the engineering culture.

---

# Definition of Done

A task is considered complete when:

- Requirements are implemented.
- Code is readable.
- Tests pass.
- Lint passes.
- Formatting passes.
- Documentation is updated.
- ADRs are updated if needed.
- No known critical issues remain.

---

# Engineering Culture

QuestForge values:

- Ownership
- Curiosity
- Continuous Learning
- Collaboration
- Respect
- Technical Excellence
- Pragmatism

We believe great software is built through small, consistent improvements over time.
