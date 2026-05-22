#!/usr/bin/env bash
set -euo pipefail

mkdir -p .ci-samples

date -u +"%Y-%m-%dT%H:%M:%SZ" > .ci-samples/run-1.timestamp
{
  echo "command=npx playwright test tests/ui/login.spec.ts --project=chromium"
  npx playwright test tests/ui/login.spec.ts --project=chromium
} > .ci-samples/run-1.log 2>&1 || true

sleep 1

date -u +"%Y-%m-%dT%H:%M:%SZ" > .ci-samples/run-2.timestamp
{
  echo "command=npx playwright test tests/api/api-crud.spec.ts"
  npx playwright test tests/api/api-crud.spec.ts
} > .ci-samples/run-2.log 2>&1 || true

echo "Collected .ci-samples/run-1.log and .ci-samples/run-2.log"
