# Test Strategy

## Approach
- Implemented a layered Playwright + TypeScript framework with POM for UI, request-context tests for API, and one UI/API integration check.
- Externalized test data in JSON and iterate over datasets for parameterized login validations.
- Designed for portability via env-driven config (`BASE_UI_URL`, `API_BASE_URL`, `API_USER_BASE_URL`).

## Coverage Included
1. **UI tests**
   - Login success/negative validations.
   - Dashboard interactions (sort + inventory visibility).
   - Cross-browser smoke (`chromium`, `firefox`) via Playwright projects.
2. **API tests**
   - CRUD-like operations (`POST /users`, `PUT /users/2`).
   - Authentication flow (`POST /login`).
   - Error handling (`404` negative lookup).
   - Response schema validation (Ajv).
   - Response-time assertions.
3. **Integration test**
   - Fetch product from API, then validate same record content in UI-rendered endpoint page.

## Why this coverage
- Covers the baseline critical path expected in most product orgs: auth, primary dashboard behavior, and service correctness.
- Emphasizes framework extensibility over brittle one-off scripts.

## What I would cover next
- Deterministic test environment with seeded data and contract mocking.
- CI matrix with browser sharding and trend reporting.
- Stronger schema contract repo and version pinning.

## Top 3 risks
1. Public demo endpoints can be rate-limited/flaky, causing non-deterministic failures.
2. UI selectors can drift if demo websites change without notice.
3. Lack of isolated test data ownership can lead to test interference.
