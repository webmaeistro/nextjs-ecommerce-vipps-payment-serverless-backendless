# Nextjs Ecommerce Vipps Hurtigkasse Crystallize GraphQL for ornforlag.no

[![React: latest][0]][1] [![Next: latest][2]][3] [![code style: prettier][4]][5]
[![code linter: Eslint][6]][7]

The bare minimum skeleton you need to get a frontend up and running on the
[headless ecommerce][8] & GraphQL based [product Information Management][9]
service [Crystallize][10]. [React commerce with Next.js SSR][11].

This Next.js boilerplate is a great starting point when building [React
ecommerce][11] experiences with [frontend performance][12] in focus. You can
have rich ecommerce content with the super structured [PIM][13] engine in
Crystallize powering your product catalogue.

Fast frontend performance delivers a better ecommerce experience and is a key
ingredient in the [ecommerce SEO checklist][14]. [Rich content driven ecommerce
experiences][15] builds the foundation for a [content strategy for exponential
growth marketing][16].

Check it out, the boilerplate is Open Source and MIT licensed.

## Getting Started

fork clone repo. cd into folder'

run: npm install / yarn -rename dot-env-fillout-rename to .env and ofc fill it
out

```sh
npm run dev
# or
yarn dev
```

This will start up the server on http://localhost:3000 for development.

## App Structure

### `pages/`

Put all your entry pages here. These are interpreted as separate routes by
Next.js.

### `pages/api/`

All your Vercel [serverless functions][18].

### `page-components/`

We use the `page-components/` directory to hold the actual component content
related to entries in the `pages/` directory.

### `components/`

All your shared React components.

### `public/`

Public static resources used by the web server.

### `ui/`

UI related components live here. Color variables and simple shared components

### `lib/`

Enable GraphQL and REST API communication and more for the browser client

### `lib-api/`

Serverless API functions related code

## Deploying Your Project

There are multiple alternatives for deployments, two of them being [Vercel][20]
and [Platform.sh][23]

### Deploying with Vercel

- Register a Vercel account
- Run `yarn vercel` or `npm run vercel`

[0]: https://img.shields.io/badge/react-latest-44cc11.svg?style=flat-square
[1]: https://github.com/facebook/react
[2]: https://img.shields.io/badge/next-latest-44cc11.svg?style=flat-square
[3]: https://github.com/zeit/next.js
[4]:
  https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[5]: https://github.com/prettier/prettier
[6]:
  https://img.shields.io/badge/code_linter-eslint-463fd4.svg?style=flat-square
[7]: https://github.com/prettier/prettier
[18]: https://vercel.com/docs/v2/serverless-functions/introduction
[19]: https://vercel.com/guides/deploying-nextjs-with-now/
[20]: https://vercel.com
[22]: https://slack.com
[23]: https://platform.sh
