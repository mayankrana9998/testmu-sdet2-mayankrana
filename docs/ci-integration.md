# CI/CD Pipeline Integration

## Option A: GitHub Actions Pipeline

This repository is wired to a real CI pipeline, not a copy-paste tutorial config.
The workflow runs the Playwright framework on every `push` and `pull_request` and keeps the generated `playwright-report` HTML artifact.

### Why Option A?
I chose the CI/CD pipeline option because the project already has a working Playwright framework, and building automatic test execution is the most practical way to ensure tests are run.
Option B would require additional historical storage and dashboard infrastructure that does not yet exist in this repository.

### Workflow file
- `.github/workflows/playwright-ci.yml`

### What it does
- checks out the repository
- installs Node.js dependencies
- installs Playwright browsers
- runs the test suite in parallel across Chromium and Firefox
- uploads the `playwright-report` folder as an artifact for each browser
- optionally sends a Slack failure notification when `SLACK_WEBHOOK` is configured

### Local setup
1. `npm install`
2. `npx playwright install`
3. `npm run test:ci`
4. `npx playwright show-report`

### CI setup
1. Push or open a pull request against `main` / `master`
2. The workflow will execute automatically
3. If you want Slack alerts, add `SLACK_WEBHOOK` as a repository secret

### Sample output
- Local execution produced `14 passed, 2 skipped`
- The HTML report is available in `playwright-report`
- In GitHub Actions, the report artifact is uploaded even when tests fail so you can inspect the results

### Notes
- The pipeline uses matrix parallelism across `chromium` and `firefox` to reduce feedback time.
- The Slack notification step is optional and only runs when the secret is set.
