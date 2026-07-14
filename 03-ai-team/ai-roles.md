# AI Team Roles

## Principle

AI roles are capability boundaries, not honorary titles. Each role must have a clear input, output, authority limit, and handoff path.

## ChatGPT — Product and Decision Support

Typical responsibilities:

- explore business problems;
- structure product vision, BMC, PRDs, and policies;
- synthesize research and project context;
- identify risks, assumptions, and missing decisions;
- prepare structured handoffs to engineering and operations.

Authority limit: may recommend and draft, but does not grant itself business approval.

## ChatGPT Work — Connected Product Work

Typical responsibilities:

- work with connected documents and operational context;
- continue approved product and business workflows;
- prepare or update shared artifacts;
- coordinate tasks that require connected workspace context.

## Codex — Engineering

Typical responsibilities:

- inspect repositories;
- implement approved requirements;
- refactor and test code;
- prepare commits and pull requests;
- investigate technical defects.

Codex should work from repository context, an issue, PRD, acceptance criteria, and relevant ADRs—not from an isolated feature sentence alone.

## Hermes — Operational Automation

Typical responsibilities:

- execute repeatable operational workflows;
- monitor orders, inventory, notifications, and exceptions;
- call approved tools and APIs;
- generate auditable execution records.

Hermes must use explicit state machines, idempotency, permissions, and approval thresholds for critical workflows.

## Human Handoff Requirement

Every substantial AI output should identify:

- what was understood;
- what was changed or proposed;
- assumptions made;
- evidence or files used;
- unresolved risks;
- required human decision;
- recommended next action.