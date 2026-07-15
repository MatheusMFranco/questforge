# ADR-0011 — Adopt Modern React Frontend Stack

## Status

Accepted

## Date

2026-07-14

## Context

QuestForge aims to be a production-grade application that demonstrates modern frontend engineering practices suitable for Senior, Staff, and Principal Software Engineering roles.

The frontend must support:

- Complex business workflows
- Large-scale feature development
- Modular architecture
- Excellent developer experience
- High performance
- Accessibility
- Automated testing
- Long-term maintainability

The selected technologies should follow current industry standards while avoiding unnecessary complexity or vendor lock-in.

---

## Decision

QuestForge will adopt a modern React ecosystem focused on maintainability, scalability, and developer productivity.

The selected frontend stack is:

| Category           | Technology            |
| ------------------ | --------------------- |
| Framework          | React 19              |
| Build Tool         | Vite                  |
| Language           | TypeScript            |
| Styling            | Tailwind CSS v4       |
| UI Components      | shadcn/ui             |
| Accessibility      | Radix UI              |
| Icons              | Lucide React          |
| Animations         | Motion                |
| Routing            | TanStack Router       |
| Server State       | TanStack Query        |
| Forms              | React Hook Form       |
| Validation         | Zod                   |
| Tables             | TanStack Table        |
| Virtualization     | TanStack Virtual      |
| Charts             | Recharts              |
| Unit Testing       | Vitest                |
| Component Testing  | React Testing Library |
| End-to-End Testing | Playwright            |

---

## Decision Drivers

The selected stack should provide:

- Excellent TypeScript support
- Strong ecosystem maturity
- High performance
- Accessibility by default
- Reusable components
- Flexible architecture
- Low vendor lock-in
- Good testing experience
- Large community adoption

---

## Technology Rationale

### React

React is the primary UI framework because of its mature ecosystem, large community, and strong adoption across enterprise applications.

---

### Vite

Provides fast startup, excellent Hot Module Replacement (HMR), and a lightweight developer experience.

---

### Tailwind CSS

Chosen for:

- Design Tokens integration
- Utility-first styling
- Excellent scalability
- Minimal CSS maintenance
- Easy theming

---

### shadcn/ui

Instead of depending on a UI framework, QuestForge owns its components.

Advantages:

- Full source code ownership
- No runtime dependency
- Easy customization
- Better long-term maintainability

---

### Radix UI

Provides accessible, unstyled primitives that serve as the foundation for reusable UI components.

---

### TanStack Router

Selected for:

- Type-safe routing
- Nested layouts
- Data loading support
- Modern routing architecture

---

### TanStack Query

Responsible for:

- API state
- Caching
- Background synchronization
- Retry strategies
- Optimistic updates

---

### React Hook Form

Provides performant and ergonomic form management with minimal re-renders.

---

### Zod

Acts as the single source of truth for runtime validation and TypeScript inference.

---

### TanStack Table

Supports highly customizable enterprise-grade tables.

---

### TanStack Virtual

Allows efficient rendering of large datasets through virtualization.

---

### Recharts

Provides flexible chart components for dashboards and analytics.

---

### Motion

Adds smooth animations while maintaining good performance and developer ergonomics.

---

## Alternatives Considered

### Material UI

Pros

- Large ecosystem
- Complete component library

Cons

- Opinionated design
- Heavy customization effort
- Strong visual identity

---

### Ant Design

Pros

- Enterprise-ready components

Cons

- Strong visual coupling
- Less flexible customization

---

### Chakra UI

Pros

- Good developer experience

Cons

- Runtime styling
- Smaller ecosystem than Tailwind

---

### Bootstrap

Pros

- Familiar
- Easy to learn

Cons

- Outdated development model
- Less flexibility
- Weak Design System capabilities

---

## Architecture Impact

This decision affects:

- UI architecture
- Component development
- Routing
- State management
- Forms
- Validation
- Styling
- Testing strategy
- Accessibility
- Performance optimization

---

## Consequences

### Positive

- Modern frontend architecture.
- Strong TypeScript integration.
- Excellent developer experience.
- High component reusability.
- Accessible UI by default.
- Better maintainability.
- Production-ready Design System.
- Enterprise-grade testing support.

### Negative

- More technologies to learn.
- Higher initial setup effort.
- Requires understanding multiple libraries.
- Some libraries have overlapping concepts.

---

## Trade-offs

By adopting this frontend stack we gain:

- Scalability.
- Type safety.
- Better developer experience.
- Improved maintainability.
- Better performance.
- Excellent testing capabilities.
- High-quality reusable components.

At the cost of:

- Larger initial setup.
- Additional architectural decisions.
- More dependencies.
- Longer onboarding for less experienced developers.

---

## Future Considerations

Future frontend improvements may include:

- Storybook
- OpenTelemetry Web
- Sentry
- MSW
- Module Federation
- Progressive Web App (PWA)
- Offline support
- Feature Flags

These technologies should be adopted only when justified by project requirements.

---

## Related Principles

This decision aligns with:

- Component-Driven Development
- Design System
- Accessibility First
- Performance by Default
- Type Safety
- Developer Experience
- Evolutionary Architecture

---

## Related ADRs

- ADR-0001 — Use React + Vite
- ADR-0002 — Adopt Turborepo
- ADR-0006 — Adopt Clean Architecture
- ADR-0008 — Adopt Domain-Driven Design
- ADR-0010 — Adopt Event-Driven Architecture

---

## References

- Architecture Principles
- Engineering Handbook
- Technology Radar
