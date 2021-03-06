# CharityBase API + Web App

[![charity-base](https://circleci.com/gh/charity-base/charity-base-api.svg?style=svg)](https://circleci.com/gh/charity-base/charity-base-api)

This is a monorepo incorporating what was previously the `charity-base-api`, `charity-base-auth` and `charity-base-web` repositories. It's built with Next.js.

- [Developing](#developing)
- [Deploying](#deploying)
- [Testing](#testing)
- [Formatting](#formatting)

## Developing

Install the dependencies:

```bash
yarn
```

Define your local environment variables:

```bash
cp .env .env.local # (and update the values in .env.local)
```

Start the development server at `http://localhost:3000`:

```bash
yarn dev
```

## Deploying

### With Vercel

Code merged into the `main` branch is automatically deployed to production by Vercel's GitHub bot. In addition, any authorised pull request will trigger a "preview" deployment to a unique url. You may also deploy from the command line using [Vercel CLI](https://vercel.com/docs/cli).

Environment variables for the `production` and `preview` environments must be set in the Vercel dashboard, where they are encrypted. They are _not_ read from your `.env.local` file.

### Custom

CharityBase can be deployed to any hosting provider that supports Node.js. First, build the production app to a `.next` folder:

```bash
yarn build
```

Then, start the Node.js server:

```bash
yarn start
```

## Testing

### Locally

To add a test, create a new file in [tests](tests) with the extension `.test.js`. Populate the file with tests using [Jest](https://jestjs.io/) syntax. For example:

```javascript
test("1 + 1 equals 2", () => {
  expect(1 + 1).toBe(2)
})
```

To run all tests:

```bash
yarn test
```

### With CircleCI

Every GitHub pull request will trigger a run of the tests by CircleCI, according to the config file in [.circleci](.circleci).

## Formatting

Code formatting style is decided by the opinionated formatter [Prettier](https://prettier.io/). If you use VS Code then these styles will be applied automatically when pasting and saving, according to the settings file in [.vscode](.vscode).
