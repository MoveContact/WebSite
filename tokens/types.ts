/**
 * Design token types for Move.
 * Aligned with Figma variable structure: Brand → Alias → Mapped, plus Responsive.
 */

export type ColorToken = string;

export type ColorScale = {
  50: ColorToken;
  100: ColorToken;
  200: ColorToken;
  300: ColorToken;
  400: ColorToken;
  500: ColorToken;
  600: ColorToken;
  700: ColorToken;
  800: ColorToken;
};

export type FondationColors = {
  white: ColorToken;
  black: ColorToken;
};

export type FontFamilyTokens = {
  Headings: string;
  Body: string;
  Caption: string;
};

export type FontWeightTokens = {
  Light: string;
  Regular: string;
  Medium: string;
  "Semi Bold": string;
  Bold: string;
  "Extra Bold": string;
};

export type ScaleTokens = Record<string, number>;

export type BrandTokens = {
  Grey: ColorScale;
  Yellow: ColorScale;
  Blue: ColorScale;
  Orange: ColorScale;
  Green: ColorScale;
  Red: ColorScale;
  Fondation: FondationColors;
  "Font family": FontFamilyTokens;
  "Font weight": FontWeightTokens;
  Scale: ScaleTokens;
};

/** Semantic (alias) color scales + border width/radius. 500 = default; Figma also uses default-fixed / default / Default. */
export type AliasTokens = {
  Primary: ColorScale & { "default-fixed"?: ColorToken };
  Error: ColorScale & { default?: ColorToken };
  Success: ColorScale;
  Neutral: ColorScale & { Default?: ColorToken; white?: ColorToken; black?: ColorToken };
  Warning: ColorScale & { Default?: ColorToken };
  Information: ColorScale;
  "Border Width": Record<string, number>;
  "Border Radius": Record<string, number>;
};

/** Component-level: Text, Icon, Surface, Border (per theme) */
export type MappedThemeTokens = {
  Text: Record<string, ColorToken>;
  Icon: Record<string, ColorToken>;
  Surface: Record<string, ColorToken>;
  Border: Record<string, ColorToken>;
};

export type MappedTokens = {
  light: MappedThemeTokens;
  dark: MappedThemeTokens;
};

export type TypographyScale = {
  "font size": number;
  "line height": number;
  "paragraph spacing": number;
};

export type ResponsiveModeTokens = {
  "Device size": number;
  h1: TypographyScale;
  h2: TypographyScale;
  h3: TypographyScale;
  h4: TypographyScale;
  h5: TypographyScale;
  h6: TypographyScale;
  "paragraphe lg": TypographyScale;
  "paragraphe md": TypographyScale;
  "paragraphe sm": TypographyScale;
  "paragraphe xsm": TypographyScale;
};

export type ResponsiveTokens = {
  mobile: ResponsiveModeTokens;
  desktop: ResponsiveModeTokens;
};

export type ThemeMode = "light" | "dark";
export type ResponsiveMode = "mobile" | "desktop";
