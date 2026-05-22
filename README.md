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

## Quick Start (next step)
1. Initialize Node project (`npm init -y`).
2. Install Playwright (`npm init playwright@latest` or manual setup).
3. Configure `playwright.config.ts` and create baseline smoke tests.

## Task 1 Status
- [x] Planning committed (README + architecture note + scaffold)
- [ ] Framework initialization
- [ ] First executable tests
