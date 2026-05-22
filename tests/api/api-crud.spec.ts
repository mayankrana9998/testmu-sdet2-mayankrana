import { test, expect, request } from '@playwright/test';
import { env } from '../../config/env';
import { expectStatus, expectResponseTime } from '../../utils/assertions';
import { validateSchema } from '../../utils/schema';

test.describe('API - CRUD/Auth/Error/Schema', () => {
  test('create and update user resources', async () => {
    const context = await request.newContext({ baseURL: env.apiBaseUrl });

    const createStart = Date.now();
    const createRes = await context.post('/users', { data: { name: 'morpheus', job: 'leader' } });
    await expectStatus(createRes, 201);
    await expectResponseTime(createStart, 2500);

    const updateRes = await context.put('/users/2', { data: { name: 'morpheus', job: 'zion resident' } });
    await expectStatus(updateRes, 200);
  });

  test('authentication and 4xx handling', async () => {
    const context = await request.newContext({ baseURL: env.apiBaseUrl });
    const loginRes = await context.post('/login', { data: { email: 'eve.holt@reqres.in', password: 'cityslicka' } });
    await expectStatus(loginRes, 200);

    const badRes = await context.get('/unknown/23');
    await expectStatus(badRes, 404);
  });

  test('schema validation for single user response', async () => {
    const context = await request.newContext({ baseURL: env.apiBaseUrl });
    const res = await context.get('/users/2');
    await expectStatus(res, 200);
    const body = await res.json();

    const schema = {
      type: 'object',
      required: ['data'],
      properties: {
        data: {
          type: 'object',
          required: ['id', 'email', 'first_name', 'last_name', 'avatar'],
        },
      },
    };

    expect(validateSchema(schema, body)).toBeTruthy();
  });
});
