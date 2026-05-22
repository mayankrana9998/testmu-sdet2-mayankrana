import { test, expect, request } from '@playwright/test';
import { env } from '../../config/env';
import { expectStatus, expectResponseTime } from '../../utils/assertions';
import { validateSchema } from '../../utils/schema';

test.describe('API - CRUD/Auth/Error/Schema', () => {
  test('create and update user resources', async () => {
    const context = await request.newContext({ baseURL: env.apiBaseUrl });

    const createStart = Date.now();
    const createRes = await context.post('/users/add', { json: { firstName: 'Morpheus', lastName: 'Leader', age: 30 } });
    await expectStatus(createRes, 201);
    await expectResponseTime(createStart, 2500);

    const updateRes = await context.put('/users/2', { json: { age: 31 } });
    await expectStatus(updateRes, 200);
  });

  test('resource handling and 4xx detection', async () => {
    const context = await request.newContext({ baseURL: env.apiBaseUrl });
    const res = await context.get('/users/2');
    await expectStatus(res, 200);

    const badRes = await context.get('/users/999999');
    await expectStatus(badRes, 404);
  });

  test('schema validation for single user response', async () => {
    const context = await request.newContext({ baseURL: env.apiBaseUrl });
    const res = await context.get('/users/2');
    await expectStatus(res, 200);
    const body = await res.json();

    const schema = {
      type: 'object',
      required: ['id', 'firstName', 'lastName', 'email'],
      properties: {
        id: { type: 'number' },
        firstName: { type: 'string' },
        lastName: { type: 'string' },
        email: { type: 'string' },
      },
    };

    expect(validateSchema(schema, body)).toBeTruthy();
  });
});
