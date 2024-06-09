# Dev Docs

Documenting how I setup this project

## Setting up Backend for TypeScript

1. Install Typescript

```bash
npm install --save-dev typescript
```

2. Configure Typescript

```bash
npx tsc --init
```

3. Installing Express

```bash
npm install express
npm install --save-dev @types/express @types/node
```

4. Create Src Folder

```bash
mkdir src
touch src/server.ts
```

5 . Update package.json

```json
"scripts": {
  "start": "node dist/server.js",
  "build": "tsc"
}
```