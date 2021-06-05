# SvelteKit Crash Course - SSR, API Routes, Stores, Tailwind CSS, and More!

Tutorial [video](https://www.youtube.com/watch?v=UU7MgYIbtAk) by James Q Quick

Source code from video: [https://github.com/jamesqquick/svelte-kit-pokedex](https://github.com/jamesqquick/svelte-kit-pokedex)

API: [https://pokeapi.co/](https://pokeapi.co/)

[Tailwind CSS setup with SvelteKit](https://jsco.dev/blog/how-to-set-up-tailwindcss-with-svelte-kit)

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/master/packages/create-svelte);

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npm init svelte@next

# create a new project in my-app
npm init svelte@next my-app
```

> Note: the `@next` is temporary

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

Before creating a production version of your app, install an [adapter](https://kit.svelte.dev/docs#adapters) for your target environment. Then:

```bash
npm run build
```

> You can preview the built app with `npm run preview`, regardless of whether you installed an adapter. This should _not_ be used to serve your app in production.
