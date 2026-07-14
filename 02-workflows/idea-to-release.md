# Idea-to-Release Workflow

## Purpose

This workflow prevents ideas from becoming untracked implementation and ensures that important decisions remain understandable after the original conversation ends.

## Stages

### 1. Capture

Record the idea as a GitHub issue or approved project note.

Minimum information:

- problem or opportunity;
- affected users;
- desired outcome;
- urgency and known constraints;
- originator.

### 2. Research

Gather evidence, current-state context, alternatives, dependencies, and risks. Distinguish facts from assumptions.

### 3. Decision

The Product Owner decides whether the idea is rejected, parked, explored further, or approved for product definition.

Material decisions must be recorded in the issue, PRD, or ADR.

### 4. Product Definition

Create or update the relevant PRD with:

- scope and out of scope;
- user journey;
- business rules;
- functional and non-functional requirements;
- acceptance criteria;
- analytics and operational implications.

### 5. Architecture Review

Document changes to data, integrations, permissions, state transitions, security, and operations. Create an ADR for significant choices.

### 6. Delivery Planning

Break approved scope into issues small enough to implement and verify. Identify dependencies and release sequencing.

### 7. Implementation

Work on a dedicated branch. Keep the pull request focused and link it to the issue and PRD.

### 8. Verification

Verify acceptance criteria, automated checks, permissions, failure behavior, auditability, and operational readiness.

### 9. Approval and Release

The appropriate owner approves the release. Deployment and migration steps must be recorded when applicable.

### 10. Learn

Compare outcomes with expected success metrics. Feed lessons back into the PRD, ADR, SOP, or this playbook.

## Fast-Track Rule

Urgent work may compress stages, but must not permanently skip documentation, verification, or post-action review.