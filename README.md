# Adonis Stater

Look at the [AdonisJS documentation](https://docs.adonisjs.com/guides/preface/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# fresh install
 npm install

npm ci

```

## Commandes utiles

Création d'un model 
```bash
# bash
node ace make:[model/controller] <nom>
```
Création d'une migration
```bash
node ace make:migration <nom de la migration>
```

Application de la migration
```bash
node ace migration:run
```

## Development Server

Start the development server on `http://localhost:3333`:

```bash
# node
 node ace serve --hmr
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
