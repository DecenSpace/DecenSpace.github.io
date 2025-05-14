# DecenSpace demo application

## Development

After installing the dependencies, run the `npm run dev` command. This will start the local development server.

## Deployment to NPM based serverless hosting

- Configure the hosting provider to export port `3000`
- Run the build scripts before starting the app `npm run build`. This will emit all necessary files under the `/dist` path
- Run `npm start`. This will run a cheap headless server that serves the `/dist` directory
- Ensure that the proxy is working to provide SPA routing. All paths should be redirected to `index.html` (`/`)
