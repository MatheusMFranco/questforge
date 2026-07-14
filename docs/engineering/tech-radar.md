# QuestForge Technology Radar

This document describes the technologies adopted, evaluated, and monitored throughout the development of QuestForge.

The goal is to make technology decisions explicit and provide a clear view of the project's technical direction.

The radar is inspired by the Thoughtworks Technology Radar.

---

# Radar Rings

Technologies are classified into four categories.

## 🟢 Adopt

Technologies that are considered stable and are officially part of the project's architecture.

They are recommended for production use.

---

## 🟡 Trial

Technologies that are currently being evaluated in real implementations.

They have shown promising results but require more practical experience before becoming part of the official stack.

---

## 🔵 Assess

Technologies that are being researched.

They may solve future problems but are not currently part of the architecture.

---

## 🔴 Hold

Technologies that have been intentionally postponed or rejected.

This does **not** necessarily mean the technology is bad.

It simply means it is not the right choice for QuestForge at this stage.

---

# Languages

| Technology | Status    | Notes                             |
| ---------- | --------- | --------------------------------- |
| TypeScript | 🟢 Adopt  | Primary language for frontend     |
| Python     | 🟢 Adopt  | AI services and backend           |
| SQL        | 🟢 Adopt  | Database queries                  |
| Java       | 🟡 Trial  | Future backend services           |
| Kotlin     | 🔵 Assess | Potential backend alternative     |
| Go         | 🔵 Assess | Internal tools and infrastructure |

---

# Frontend

| Technology      | Status    | Notes                                     |
| --------------- | --------- | ----------------------------------------- |
| React           | 🟢 Adopt  | Primary UI framework                      |
| Vite            | 🟢 Adopt  | Build tool                                |
| TypeScript      | 🟢 Adopt  | Type safety                               |
| TanStack Router | 🟢 Adopt  | Routing solution                          |
| TanStack Query  | 🟢 Adopt  | Server state management                   |
| React Hook Form | 🟢 Adopt  | Forms                                     |
| Zod             | 🟢 Adopt  | Validation                                |
| Tailwind CSS    | 🟢 Adopt  | Styling                                   |
| shadcn/ui       | 🟢 Adopt  | Component foundation                      |
| Storybook       | 🟡 Trial  | Component documentation                   |
| React Native    | 🔵 Assess | Mobile application                        |
| Next.js         | 🔴 Hold   | Not required for current SPA architecture |

---

# Backend

| Technology | Status    | Notes                                 |
| ---------- | --------- | ------------------------------------- |
| FastAPI    | 🟢 Adopt  | Main backend framework                |
| PostgreSQL | 🟢 Adopt  | Primary database                      |
| Redis      | 🟢 Adopt  | Cache and distributed locks           |
| RabbitMQ   | 🟢 Adopt  | Initial messaging platform            |
| Kafka      | 🟡 Trial  | Planned evolution for event streaming |
| GraphQL    | 🟡 Trial  | Evaluate where REST becomes limiting  |
| MongoDB    | 🔵 Assess | Event storage and flexible documents  |

---

# Architecture

| Technology                | Status    | Notes                            |
| ------------------------- | --------- | -------------------------------- |
| Clean Architecture        | 🟢 Adopt  | Core architectural style         |
| Domain-Driven Design      | 🟢 Adopt  | Domain modeling                  |
| SOLID                     | 🟢 Adopt  | Design principles                |
| Modular Monolith          | 🟢 Adopt  | Initial architecture             |
| Event-Driven Architecture | 🟢 Adopt  | Asynchronous communication       |
| Microservices             | 🟡 Trial  | Future evolution                 |
| CQRS                      | 🔵 Assess | Evaluate for specific domains    |
| Event Sourcing            | 🔵 Assess | Evaluate for audit-heavy modules |

---

# AI

| Technology                   | Status    | Notes                    |
| ---------------------------- | --------- | ------------------------ |
| OpenAI API                   | 🟢 Adopt  | Primary LLM provider     |
| MCP (Model Context Protocol) | 🟡 Trial  | AI integrations          |
| LangGraph                    | 🟡 Trial  | Multi-agent workflows    |
| LlamaIndex                   | 🔵 Assess | Knowledge management     |
| CrewAI                       | 🔵 Assess | Agent orchestration      |
| Semantic Kernel              | 🔵 Assess | Enterprise orchestration |
| AutoGen                      | 🔵 Assess | Research only            |

---

# Cloud

| Technology     | Status    | Notes                  |
| -------------- | --------- | ---------------------- |
| Docker         | 🟢 Adopt  | Local development      |
| Docker Compose | 🟢 Adopt  | Local orchestration    |
| GitHub Actions | 🟢 Adopt  | CI/CD                  |
| AWS            | 🟡 Trial  | Production cloud       |
| Terraform      | 🟡 Trial  | Infrastructure as Code |
| Kubernetes     | 🔵 Assess | Future orchestration   |
| ArgoCD         | 🔵 Assess | GitOps                 |

---

# Observability

| Technology    | Status    | Notes                  |
| ------------- | --------- | ---------------------- |
| OpenTelemetry | 🟡 Trial  | Standard observability |
| Grafana       | 🟡 Trial  | Dashboards             |
| Prometheus    | 🟡 Trial  | Metrics                |
| Loki          | 🔵 Assess | Log aggregation        |
| Jaeger        | 🔵 Assess | Distributed tracing    |

---

# Testing

| Technology            | Status   | Notes                   |
| --------------------- | -------- | ----------------------- |
| Vitest                | 🟢 Adopt | Unit tests              |
| React Testing Library | 🟢 Adopt | Component tests         |
| Playwright            | 🟢 Adopt | End-to-end testing      |
| MSW                   | 🟡 Trial | API mocking             |
| Cypress               | 🔴 Hold  | Playwright is preferred |

---

# Developer Experience

| Technology  | Status   | Notes                 |
| ----------- | -------- | --------------------- |
| Turborepo   | 🟢 Adopt | Monorepo              |
| pnpm        | 🟢 Adopt | Package manager       |
| ESLint      | 🟢 Adopt | Static analysis       |
| Prettier    | 🟢 Adopt | Formatting            |
| Husky       | 🟢 Adopt | Git hooks             |
| lint-staged | 🟢 Adopt | Pre-commit automation |
| Commitlint  | 🟢 Adopt | Conventional commits  |
| Renovate    | 🟡 Trial | Dependency updates    |

---

# Security

| Technology   | Status   | Notes                    |
| ------------ | -------- | ------------------------ |
| JWT          | 🟢 Adopt | Authentication           |
| OAuth2       | 🟢 Adopt | External providers       |
| OWASP Top 10 | 🟢 Adopt | Security baseline        |
| SAST         | 🟡 Trial | Static security analysis |
| Dependabot   | 🟡 Trial | Dependency monitoring    |

---

# Technologies on Hold

These technologies are intentionally not part of the current architecture.

| Technology                       | Reason                                           |
| -------------------------------- | ------------------------------------------------ |
| Next.js                          | SPA architecture is sufficient                   |
| Redux                            | TanStack Query + local state cover current needs |
| MobX                             | Adds unnecessary complexity                      |
| Cypress                          | Playwright provides broader coverage             |
| Microservices from Day One       | Premature complexity                             |
| Kubernetes for Local Development | Docker Compose is simpler and faster             |

---

# Review Process

The Technology Radar is reviewed periodically.

Technologies may move between rings as the project evolves.

Every significant change should be discussed and, when appropriate, documented through an Architecture Decision Record (ADR).

---

# Guiding Principle

Technology choices should be driven by business needs, maintainability, developer experience, and long-term sustainability rather than trends.

The simplest solution that satisfies the requirements should always be preferred.
