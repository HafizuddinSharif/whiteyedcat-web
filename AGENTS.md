# Repository Guidelines

## Project Structure & Module Organization

This is an Astro portfolio site. Page routes live in `src/pages/`, shared UI components in `src/components/`, and shared document chrome in `src/layouts/Layout.astro`. Optimized source assets are imported from `src/assets/`, with whiteyedcat artwork under `src/assets/whiteyedcat/`. Static public files such as favicons belong in `public/`. Production output is generated into `dist/` and should not be edited by hand.

## Build, Test, and Development Commands

Use Node `>=22.12.0` and install dependencies with:

```sh
npm install
```

Key commands:

```sh
npm run dev
```

Starts the Astro dev server, usually at `localhost:4321`.

```sh
npm run build
```

Builds the production site into `dist/`; use this as the main verification step.

```sh
npm run preview
```

Serves the built output locally.

```sh
npm run pages:dev
```

Builds and runs the Cloudflare Pages preview via Wrangler.

```sh
npm run deploy:preview
npm run deploy
```

Deploys `dist/` to Cloudflare Pages; `deploy` targets the `master` branch project deployment.

## Coding Style & Naming Conventions

Use Astro single-file components with frontmatter at the top, markup next, then scoped `<script>` and `<style>` blocks where needed. Current files use tabs for indentation. Prefer TypeScript interfaces for component props, as in `ArtworkCard.astro`. Name components in `PascalCase.astro`, pages in lowercase route names, and CSS classes with BEM-style names such as `artwork-card__inner` and `site-header__inner`. Import images through Astro when they are part of the compiled UI; reserve `public/` for files that must be served by stable URL.

## Testing Guidelines

There is no dedicated test framework configured yet. For now, run `npm run build` before submitting changes. For UI changes, also run `npm run dev` or `npm run preview` and check desktop and mobile layouts, navigation, page transitions, image loading, and keyboard-accessible interactions. If tests are added later, keep them near the feature or under a clear test directory and add the command to `package.json`.

## Commit & Pull Request Guidelines

Recent history uses concise Conventional Commit-style messages, mainly `feat: ...`. Follow that pattern: `feat: add artwork filter`, `fix: correct contact link`, or `chore: update dependencies`.

Pull requests should include a short summary, verification steps run, related issue links when available, and screenshots or screen recordings for visual changes. Note any deployment or Cloudflare Pages impact explicitly.
