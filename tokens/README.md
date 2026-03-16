# Move design tokens

Design tokens for the Move design system, aligned with the Figma variable structure: **Brand** (primitives) → **Alias** (semantics) → **Mapped** (light/dark theme), plus **Responsive** (mobile/desktop).

## Structure

| Layer          | File(s)             | Purpose                                       |
| -------------- | ------------------- | --------------------------------------------- |
| **Brand**      | `brand.ts`          | Primitives: colors, scale, font family/weight |
| **Alias**      | `alias.ts`          | Semantic tokens (reference Brand)             |
| **Mapped**     | `mapped.ts`         | Component tokens per theme (light/dark)       |
| **Responsive** | `responsive.ts`     | Breakpoints + typography (mobile/desktop)     |
| **CSS**        | `css/variables.css` | CSS custom properties for themes              |

## Usage in React

```ts
import { brand, alias, mapped, responsive } from "./tokens";

// Use tokens in JS/TS
const primaryColor = alias.Primary["default-fixed"];
const lightSurfacePage = mapped.light.Surface.page;

// Or use CSS variables (import tokens/css/variables.css and set data-theme for dark)
// Then in CSS: background: var(--text-headings); or var(--surface-page);
```

## Rebuilding from Figma export

1. Export variables from Figma (e.g. via a token plugin) into:
   - `tokens/source/Brand.token.json`
   - `tokens/source/Alias.tokens.json`
   - `tokens/source/Mapped/Light.tokens.json`, `Dark.tokens.json`
   - `tokens/source/Responsive/Mobile.tokens.json`, `Desktop.tokens.json`

2. Run the build script from project root:
   ```bash
   node scripts/build-tokens.mjs
   ```
   Or from another directory:
   ```bash
   SOURCE_DIR=/path/to/export node scripts/build-tokens.mjs
   ```

Generated files: `brand.ts`, `alias.ts`, `mapped.ts`, `responsive.ts`, `css/variables.css`, `index.ts`.

## Notes

Les valeurs initiales de ces design tokens ont été générées avec l'aide de l'intelligence artificielle (Cursor) en se basant sur les variables définies dans le système de design Figma. Les fichiers JSON source ont ensuite été affinés manuellement pour assurer la cohérence du système de design.
