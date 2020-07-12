# NextJS Incremental Static Regeneration

A POC project for using the [Next.js Incremental Static Regeneration](https://nextjs.org/blog/next-9-4#incremental-static-regeneration-beta) feature.

We use [typicode/json-server](https://github.com/typicode/json-server) to mock a fake REST API.

## Set up

```bash
# 1. Install dependencies
yarn install

# 2. Start a server with Static Site Generation support and a mocked API server concurrently (serve web at port 3000 and a faked API at port 4000)
yarn start
```

## Commands

```bash
# Start the web server
yarn dev:web

# Start the mocked API server
yarn dev:api

# Start both web and API servers concurrently
yarn dev

# Start server with Static Site Generation support and a mocked API server concurrently (run this command if you want to see how ISSR works)
yarn start
```

## Project Maintainer

- Tanawit Pattanaveerangkoon <<tanawit.pat@gmail.com>>
