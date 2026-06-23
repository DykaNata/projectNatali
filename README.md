# Project Natali

Clean Vite + React frontend for the Nataliia Dyka website, refactored from the generated Lovable codebase.

## Scripts

```bash
npm install
npm start
npm run build
```

## Structure

```text
src/app                 router, layout, error and 404 screens
src/content             reusable site constants
src/features/site       page and site shell components
src/shared              small shared UI, i18n and browser utilities
src/assets              local image assets used by the site
```

Styles are written as colocated `*.module.scss` files. Layouts intentionally prefer flexbox and simple media queries.

## Asset Note

The site imports images directly from `src/assets`, so the production build fingerprints and bundles them through Vite.
