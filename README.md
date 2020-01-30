# pnp-jest

Examples of how to unit test PnP JS via Jest

Based on (<https://pnp.github.io/pnpjs/nodejs-support/)>.

Shows how to set up VSCode Jest support to allow retesting of successful tests.

Shows how to exclude tests so that expensive integration tests can become only run on demand.

## Getting Started

Initialise the project.

```bash
yarn
```

Create an SP Add-In (<https://pnp.github.io/pnpjs/debugging/#register-an-add-in)>.

Create a .env file to allow connecting to your environment.

```.env
SP_URL=<URL>
SP_CLIENT_ID=<ID>
SP_CLIENT_SECRET=<SECRET>
```

Test the project

```bash
yarn test
```

Install the VSCode Jest extension orta.vscode-jest.

Enjoy debugging SharePoint integration tests.
