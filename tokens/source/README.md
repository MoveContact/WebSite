# Token source (Figma export)

Place your Figma variable export here so `node scripts/build-tokens.mjs` can regenerate the token files.

**Required files:**

- `Brand.token.json`
- `Alias.tokens.json`
- `Mapped/Light.tokens.json`
- `Mapped/Dark.tokens.json`
- `Responsive/Mobile.tokens.json`
- `Responsive/Desktop.tokens.json`

These files are already present from the initial setup. When you re-export from Figma, replace them and run `npm run tokens` from the project root.

## Notes

Les valeurs initiales de ces fichiers JSON ont été générées avec l'aide de l'intelligence artificielle (Cursor) en se basant sur les variables du système de design Figma.
