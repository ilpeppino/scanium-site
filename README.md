# Scanium Marketing Site

## Local development
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`

## Build
- Generate static output: `npm run build`
- Preview locally: `npm run preview`

## Deploy to Hostinger (static hosting)
1. Run `npm run build`.
2. Upload **all contents** of `dist/` to Hostinger's `public_html/` directory.
3. Ensure `public_html/` contains `index.html` at the root (this comes from `dist/index.html`).
4. Keep `account-deletion.html` at the root (it is emitted to `dist/account-deletion.html`).

Notes
- Do not upload the project root; only the contents of `dist/`.
- Assets and scripts live under `dist/` and must be included for the site to render correctly.
