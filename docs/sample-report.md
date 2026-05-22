# Sample Report Artifacts

Because package registry access is blocked in this environment, Playwright binaries could not be installed/executed here.

When run in a normal environment, these commands generate the required artifacts:

## Passing run
```bash
npx playwright test tests/ui/login.spec.ts --project=chromium
```
Artifact: `playwright-report/index.html` showing pass status and suite breakdown.

## Failing run
```bash
npx playwright test tests/ui/login.spec.ts -g "empty-user"
```
(with intentionally incorrect assertion or data to induce failure)

Artifacts:
- `playwright-report/index.html` with failed test details
- `test-results/**/test-failed-1.png` screenshot
- `test-results/**/trace.zip` trace for debugging
