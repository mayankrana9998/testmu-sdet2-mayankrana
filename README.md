# testmu-sdet2-mayankrana

Playwright + TypeScript test automation scaffold for TestMu SDET Task 1.

## Goals
- Establish a clean, scalable automation project structure before writing tests.
- Separate concerns across page objects, tests, utilities, configuration, and test data.
- Keep onboarding and future extension simple.

## Tech Stack
- **Framework:** Playwright
- **Language:** TypeScript
- **Test Runner:** Playwright Test

## Proposed Folder Structure
```text
.
├── config/           # Environment and runtime config
├── docs/             # Architecture and planning notes
├── pages/            # Page Object Model classes
├── test-data/        # Static test inputs / fixtures
├── tests/            # Test specs
└── utils/            # Shared helpers (api, data, logger, etc.)
```

## Quick Start
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Install Playwright browsers:
   ```bash
   npx playwright install
   ```
4. Run the full test suite in CI mode:
   ```bash
   npm run test:ci
   ```
5. Open the generated HTML report:
   ```bash
   npx playwright show-report
   ```

> Make sure the repository is public for review.

## CI/CD Integration
This repository now includes a fully wired GitHub Actions pipeline at `.github/workflows/playwright-ci.yml`.
It runs the Playwright suite on `push` and `pull_request`, uploads the generated HTML report as an artifact, and optionally sends Slack failure notifications when `SLACK_WEBHOOK` is configured.

For full setup and example output, see `docs/ci-integration.md`

## Task 1 Status
- [x] Planning committed (README + architecture note + scaffold)
- [ ] Framework initialization
- [ ] First executable tests
