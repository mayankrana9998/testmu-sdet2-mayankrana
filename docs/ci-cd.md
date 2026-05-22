# Task 3 - Option A (CI/CD Pipeline)

## Why Option A over Option B
I picked **Option A** because this repo is currently focused on framework maturity (UI/API/integration coverage) and the highest immediate ROI is an automated quality gate on every push/PR. A trend dashboard (Option B) is valuable next, but only after runs are consistently generated in CI.

## What this pipeline does
Workflow file: `.github/workflows/playwright-ci.yml`

- Runs on **push** and **pull_request**.
- Runs API as a dedicated job (`api-tests`).
- Runs UI + integration in a browser matrix (`ui-integration-tests`) on `chromium` and `firefox`.
- Uploads `playwright-report/` and `test-results/` as artifacts for each matrix job.
- Publishes explicit failure notification in the **GitHub Actions run summary** when a job fails.
- Provides native GitHub status checks on PRs (required-check friendly).

## Local setup
1. Install dependencies:
   ```bash
   npm install
   ```
2. Install browsers:
   ```bash
   npx playwright install --with-deps chromium firefox
   ```
3. Run suites:
   ```bash
   npm run test:ui
   npm run test:api
   npm run test:integration
   ```

## CI setup in GitHub
1. Push this repository to GitHub.
2. Ensure Actions are enabled for the repository.
3. (Optional) Mark `Playwright Quality Gate` checks as required in branch protection.
4. Open a PR and verify:
   - `api-tests` plus `ui-integration-tests` matrix jobs execute,
   - artifacts upload,
   - failed jobs write failure details in run summary.

## Sample outputs across more than one run
Real sample logs from this environment are stored at:
- `.ci-samples/run-1.log`
- `.ci-samples/run-2.log`

These are from two separate executions captured by `scripts/collect-ci-samples.sh`. In this environment they fail with npm registry HTTP 403 (network/policy limitation), but still demonstrate multi-run capture and how failure signals surface.
