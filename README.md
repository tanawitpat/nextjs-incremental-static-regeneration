# NextJS Incremental Static Regeneration Demo

A prove of concept project to test the [Next.js Incremental Static Regeneration](https://nextjs.org/blog/next-9-4#incremental-static-regeneration-beta) feature.

We use [typicode/json-server](https://github.com/typicode/json-server) to create a fake REST API.

## Set up

```bash
# 1. Install dependencies
yarn install

# 2. Start the web server with Static Site Generation support (build & start) and the fake API server concurrently (serve the web at port 3000 and the fake API at port 4000)
yarn start
```

## Project Maintainer

- Tanawit Pattanaveerangkoon <<tanawit.pat@gmail.com>>
