# testmu-sdet2-mayankrana

Playwright + TypeScript automation framework with UI, API, and integration coverage.

## Stack
- Playwright Test
- TypeScript
- Ajv (schema validation)

## Project Structure
```text
.
├── config/              # Environment-driven configuration
├── docs/                # Architecture notes
├── pages/               # Page Objects (POM)
├── test-data/           # Externalized test datasets
├── tests/
│   ├── ui/              # UI scenarios
│   ├── api/             # API scenarios
│   └── integration/     # End-to-end UI+API flow
├── utils/               # Reusable waits/assertions/schema helpers
├── playwright.config.ts
└── test-strategy.md
```

## Key Framework Features
- POM with encapsulated selectors (`pages/*`).
- Data-driven login tests (`test-data/login-users.json`).
- Reusable utilities (wait/retry/assertions/schema validation).
- Config-driven environment switching through env vars.
- HTML reporting + failure artifacts (screenshots/video/trace).

## Run
```bash
npm install
npx playwright install
npm test
```
