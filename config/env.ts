export const env = {
  baseUIUrl: process.env.BASE_UI_URL || 'https://www.saucedemo.com',
  apiBaseUrl: process.env.API_BASE_URL || 'https://reqres.in/api',
  apiUserBaseUrl: process.env.API_USER_BASE_URL || 'https://dummyjson.com',
  defaultTimeoutMs: Number(process.env.DEFAULT_TIMEOUT_MS || 10000),
};
