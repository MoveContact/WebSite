/**
 * Theme and responsive helpers for using design tokens in React.
 * Use these when building components; no UI is rendered here.
 */
import type { ThemeMode, ResponsiveMode } from "./types";
import { mapped } from "./mapped";
import { responsive } from "./responsive";

/** Get component (mapped) tokens for the current theme. */
export function getThemeTokens(mode: ThemeMode) {
  return mapped[mode];
}

/** Get responsive tokens (breakpoint + typography) for the current device mode. */
export function getResponsiveTokens(mode: ResponsiveMode) {
  return responsive[mode];
}

/** Breakpoint widths in px (for media queries or JS). */
export const breakpoints = {
  mobile: responsive.mobile["Device size"],
  desktop: responsive.desktop["Device size"],
} as const;

/** CSS media query strings for responsive layout. */
export const mediaQueries = {
  mobile: `(max-width: ${responsive.desktop["Device size"] - 1}px)`,
  desktop: `(min-width: ${responsive.desktop["Device size"]}px)`,
} as const;
