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

## Color Pallette for Frontend

    Primary Color (Raspberry Pi Red): #C51A4A
    Secondary Color (Green): #4CAF50
    Accent Color (Yellow): #FFEB3B
    Background Color (Light Gray): #F5F5F5
    Text Color (Dark Gray): #212121
    Secondary Text Color (Gray): #757575
    Link Color (Blue): #2196F3

Example Usage:

    Primary Color: Use for headers, important buttons, and highlights.
    Secondary Color: Use for secondary buttons, highlights, or success messages.
    Accent Color: Use for warnings, notifications, or to draw attention to specific UI elements.
    Background Color: Use for the main background to keep it light and clean.
    Text Color: Use for main text to ensure readability.
    Secondary Text Color: Use for secondary text, like placeholders or less important information.
    Link Color: Use for links and interactive elements to make them stand out.
