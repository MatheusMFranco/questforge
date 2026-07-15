# Technical Debt Register

This document tracks intentional technical debt within QuestForge.

Technical debt is not inherently negative. Some decisions are consciously postponed to accelerate development while maintaining visibility and accountability.

Each debt item should include:

- Context
- Impact
- Priority
- Planned Resolution

---

# Status Legend

| Status         | Meaning                    |
| -------------- | -------------------------- |
| 🟢 Planned     | Identified but not started |
| 🟡 Accepted    | Intentional technical debt |
| 🔵 In Progress | Being addressed            |
| ✅ Resolved    | Debt eliminated            |

---

# Priority Levels

| Priority | Description                              |
| -------- | ---------------------------------------- |
| Critical | Must be resolved before production       |
| High     | Should be resolved before major releases |
| Medium   | Can wait for future milestones           |
| Low      | Nice improvement                         |

---

# Current Technical Debt

## TD-001 — Temporary Authentication

**Status**

🟢 Planned

**Priority**

Medium

### Context

Authentication will initially use mocked users.

### Reason

Allows frontend development without waiting for backend implementation.

### Planned Resolution

Replace mocked authentication with JWT authentication during Milestone 3.

---

## TD-002 — Mock API

**Status**

🟢 Planned

**Priority**

Medium

### Context

Frontend screens will initially consume mocked data.

### Reason

Speeds up UI development.

### Planned Resolution

Replace mocks with FastAPI services.

---

## TD-003 — Local State Before Server State

**Status**

🟢 Planned

**Priority**

Low

### Context

Some early features may temporarily use local state.

### Reason

Allows faster prototyping.

### Planned Resolution

Migrate to TanStack Query after backend APIs are available.

---

## TD-004 — Missing Storybook

**Status**

🟢 Planned

**Priority**

Low

### Context

Storybook will not be introduced during the initial frontend setup.

### Reason

Focus on delivering the Design System first.

### Planned Resolution

Introduce Storybook after the initial component library is stable.

---

## TD-005 — No Observability

**Status**

🟢 Planned

**Priority**

Medium

### Context

Logging, tracing and metrics are not available during early development.

### Reason

Premature optimization.

### Planned Resolution

Implement OpenTelemetry and monitoring during the Observability milestone.

---

## TD-006 — No Internationalization

**Status**

🟢 Planned

**Priority**

Low

### Context

The application will initially support English only.

### Reason

Reduce complexity during MVP development.

### Planned Resolution

Introduce i18n after Version 1.0.

---

## TD-007 — No Offline Support

**Status**

🟢 Planned

**Priority**

Low

### Context

Offline capabilities are not part of the MVP.

### Planned Resolution

Evaluate Progressive Web App support in future releases.

---

## TD-008 — Simplified AI Layer

**Status**

🟢 Planned

**Priority**

Medium

### Context

The first AI assistant will use a simplified architecture.

### Reason

Avoid introducing unnecessary infrastructure during early development.

### Planned Resolution

Introduce agent orchestration, memory management and advanced workflows in later milestones.

---

# Technical Debt Guidelines

Technical debt should only be accepted when:

- It accelerates delivery.
- The trade-off is documented.
- There is a clear migration path.
- It does not compromise architecture.
- It does not create security risks.

---

# What Is Not Considered Technical Debt

The following are **not** considered technical debt:

- Missing features
- Product backlog items
- Nice-to-have improvements
- Experimental ideas
- Future enhancements

Only engineering compromises belong in this document.

---

# Review Process

Technical debt should be reviewed:

- At the end of each milestone
- Before every major release
- During architecture reviews

Resolved items should remain documented for historical reference.

---

# Long-Term Goal

QuestForge aims to maintain a healthy engineering culture where technical debt is:

- Visible
- Measured
- Intentional
- Prioritized
- Continuously reduced

The goal is not to eliminate all technical debt, but to ensure it remains manageable and never compromises the long-term maintainability of the platform.
