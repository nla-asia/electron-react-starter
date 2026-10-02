# Electron React Starter

A minimal desktop starter with Electron, React, TypeScript, shadcn/ui, and Tailwind CSS. No product features, routing, database, authentication, or auto-updater are included.

## Getting started

Use Node.js 22.12 or newer and npm.

```sh
npm ci
npm run dev
```

The Electron window opens automatically. The first launch downloads Electron's desktop binary if it is not already cached. React supports hot module replacement. Restart the development command after changing main-process or preload code. Press F12 to open DevTools during development.

## Commands

| Command                | Purpose                                        |
| ---------------------- | ---------------------------------------------- |
| `npm run dev`          | Launch the development app                     |
| `npm run typecheck`    | Check main, preload, and renderer TypeScript   |
| `npm run lint`         | Run ESLint                                     |
| `npm run format`       | Format source and configuration                |
| `npm run format:check` | Check formatting                               |
| `npm run build`        | Typecheck and build into `out/`                |
| `npm start`            | Launch the production build; run `build` first |
| `npm run build:unpack` | Build an unpacked app into `dist/`             |
| `npm run build:mac`    | Create macOS distribution artifacts            |
| `npm run build:win`    | Create Windows distribution artifacts          |
| `npm run build:linux`  | Create Linux distribution artifacts            |

Build installers on their target operating system. Signing, notarization, and publishing require your own release configuration.

## Project structure

```text
src/
  main/index.ts               Electron application and window lifecycle
  preload/index.ts            Isolated bridge exposing runtime versions
  preload/index.d.ts          Renderer bridge types
  renderer/
    index.html                Renderer entry and content security policy
    src/
      App.tsx                 Minimal welcome screen
      main.tsx                React entry
      assets/main.css         Tailwind and shadcn theme
      components/ui/          shadcn component source
      lib/utils.ts            Shared class-name helper
```

`electron.vite.config.ts` configures the three build targets. The `@/` import alias resolves to `src/renderer/src/`. `components.json` configures the shadcn CLI for this renderer layout.

## Adding UI components

Run from the project root:

```sh
npx shadcn@latest add input dialog
```

Import component source directly:

```tsx
import { Button } from '@/components/ui/button'
```

Theme tokens live in `src/renderer/src/assets/main.css`. Only the components used by the welcome screen are included; add more as needed.

## Electron boundaries

Node integration is disabled in the renderer, with context isolation and sandboxing enabled. The preload exposes only `window.app.versions`. Add narrowly scoped methods and their types in the preload when your application needs native functionality. Keep privileged operations in the main process.

New windows and renderer navigation are blocked by default. The content security policy allows local development WebSocket connections for hot reload.

## Using this template

Copy the project without `node_modules/`, `out/`, or `dist/`, then run `npm ci`. Update `name`, `version`, and `description` in `package.json`, and `appId`, `productName`, and platform-specific names in `electron-builder.yml`. Match the Windows application ID in `src/main/index.ts` to your `appId`. Replace the placeholder icons in `build/` and `resources/` before distributing an app.

Dependencies are recorded in `package-lock.json` for reproducible installs. Electron 44.5.1 and React 19.3.0 were the latest stable releases when this starter was created. TypeScript 6.0.3, ESLint 9, Vite 7, and the Vite React plugin 5 are used for compatibility with the current TypeScript ESLint parser, React lint plugin, and electron-vite peer dependencies. Check those constraints before upgrading the tooling.

## References

- [electron-vite](https://electron-vite.org/guide/)
- [Electron documentation](https://www.electronjs.org/docs/latest/)
- [shadcn/ui Vite setup](https://ui.shadcn.com/docs/installation/vite)
