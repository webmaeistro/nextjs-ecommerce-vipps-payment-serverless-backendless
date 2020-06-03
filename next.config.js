require('dotenv').config();

module.exports = {
  target: 'serverless',
  env: {
    NEXT_PUBLIC_CRYSTALLIZE_TENANT_ID: 'orn-forlag',
    CRYSTALLIZE_API_URL: process.env.CRYSTALLIZE_API_URL,
    CRYSTALLIZE_TENANT_ID: process.env.CRYSTALLIZE_TENANT_ID,
    CRYSTALLIZE_SECRET_TOKEN: '63e2d0c38e56cc948eaf825bdcd75886f0814ee0',
    CRYSTALLIZE_SECRET_TOKEN_ID: 'acc3688754e1c6b6803e',
  },
};
