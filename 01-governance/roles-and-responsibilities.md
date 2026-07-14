# Roles and Responsibilities

## Product Owner

The Product Owner represents business direction and has final authority over product priorities, scope, and acceptance.

For SWI initiatives, this role is currently held by the designated SWI leader for the project.

Responsibilities:

- define desired outcomes;
- approve priorities and scope;
- resolve business trade-offs;
- approve critical policies and launches;
- accept or reject completed increments.

## Product Architect

The Product Architect translates business direction into coherent product documentation and cross-system design.

Responsibilities:

- maintain product vision and principles;
- structure PRDs and business rules;
- identify dependencies and risks;
- maintain consistency across products;
- recommend architecture direction without bypassing technical review.

## Product Engineer

The Product Engineer implements approved product increments.

Responsibilities:

- turn issues and PRDs into working software;
- write or update tests;
- document implementation-relevant changes;
- open reviewable pull requests;
- report blockers and deviations from requirements.

## Operational AI / Automation Agent

Operational agents execute narrowly defined, observable workflows.

Responsibilities:

- process approved operational tasks;
- monitor conditions and produce alerts;
- record actions and outcomes;
- request human approval when thresholds or exceptions are reached.

Operational agents must not silently expand their own authority.

## Reviewer

The Reviewer independently checks whether work meets requirements, safety expectations, and project standards.

## Operator

The Operator runs the business workflow in production, handles exceptions, and provides feedback from real operations.

## Role Separation

One person or AI may perform multiple roles, but each action must still be clear about which role is being exercised. Critical creator–approver separation should be preserved for payments, refunds, pricing overrides, settlements, access control, and production deployment.