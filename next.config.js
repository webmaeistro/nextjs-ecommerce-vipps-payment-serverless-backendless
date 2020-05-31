require('dotenv').config();

module.exports = {
  target: 'serverless',
  env: {
    NEXT_PUBLIC_CRYSTALLIZE_TENANT_ID: 'orn-forlag',
    CRYSTALLIZE_API_URL: process.env.CRYSTALLIZE_API_URL,
    CRYSTALLIZE_TENANT_ID: process.env.CRYSTALLIZE_TENANT_ID,
    CRYSTALLIZE_SECRET_TOKEN: process.env.CRYSTALLIZE_SECRET_TOKEN,
    CRYSTALLIZE_SECRET_TOKEN_ID: process.env.CRYSTALLIZE_SECRET_TOKEN_ID,
  },
};
