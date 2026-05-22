import Ajv from 'ajv';

const ajv = new Ajv();

export function validateSchema(schema: object, payload: unknown): boolean {
  const validate = ajv.compile(schema);
  return Boolean(validate(payload));
}
