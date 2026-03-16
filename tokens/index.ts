/**
 * Move design tokens.
 * Brand (primitives) → Alias (semantics) → Mapped (light/dark theme). Responsive is separate.
 */
export { brand } from "./brand";
export { alias } from "./alias";
export { mapped } from "./mapped";
export { 
  useTokens, 
  text, 
  surface, 
  border, 
  icon, 
  borderRadius, 
  spacing 
} from './useTokens';
export type {
  BrandTokens,
  AliasTokens,
  MappedTokens,
  MappedThemeTokens,
  ResponsiveTokens,
  ResponsiveModeTokens,
  ThemeMode,
  ResponsiveMode,
} from "./types";
