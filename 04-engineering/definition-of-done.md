# Definition of Done

A work item is done only when the applicable conditions below are satisfied.

## Product

- The problem and intended outcome are clear.
- Scope and out-of-scope boundaries are documented.
- Acceptance criteria are satisfied.
- Material deviations from the PRD are recorded and approved.

## Engineering

- Implementation is reviewable and focused.
- Relevant automated tests pass.
- Error, retry, and duplicate-submission behavior is considered.
- Permissions and sensitive-data handling are reviewed.
- Database and API changes are documented.
- No credentials or secrets are committed.

## Operations

- Required configuration, migration, and rollback steps are documented.
- Monitoring or audit records exist for critical workflows.
- Operators know how to handle normal cases and key exceptions.
- Ownership after release is clear.

## Documentation

- User-facing, operator-facing, and technical documentation are updated where applicable.
- The related issue, PRD, and ADR links are present.
- Important assumptions and limitations are visible.

## Approval

- The appropriate reviewer has reviewed the work.
- The Product Owner or delegated approver accepts the outcome when business acceptance is required.

## Evidence

Completion must be supported by evidence such as test output, screenshots, logs, queries, review comments, or an explicit acceptance record. “Looks finished” is not evidence.