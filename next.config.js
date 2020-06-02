require('dotenv').config();

module.exports = {
  target: 'serverless',
  env: {
    NEXT_PUBLIC_CRYSTALLIZE_TENANT_ID: 'orn-forlag',
    CRYSTALLIZE_API_URL: process.env.CRYSTALLIZE_API_URL,
    STRIPE_PUBLISHABLE_KEY: process.env.STRIPE_PUBLISHABLE_KEY,
    CRYSTALLIZE_CORE_API_URL: process.env.CRYSTALLIZE_CORE_API_URL,
  },
};
