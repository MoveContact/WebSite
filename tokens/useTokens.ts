import { useColorScheme } from '@/hooks/use-color-scheme';
import { mapped } from './mapped';
import { alias } from './alias';
import { responsive } from './responsive';

export function useTokens() {
  const colorScheme = useColorScheme() ?? 'dark';
  const theme = mapped[colorScheme];

  return {
    // Groupes de couleurs par sémantique
    text: theme.Text,
    surface: theme.Surface,
    border: theme.Border,
    icon: theme.Icon,
    
    // Alias des couleurs pour accès direct
    colors: {
      text: theme.Text,
      surface: theme.Surface,
      border: theme.Border,
      icon: theme.Icon,
    },

    // Alias toujours disponibles (pas de thème)
    spacing: {
      none: 0, xs: 4, sm: 8, md: 16, lg: 24, xl: 32,
    },
    borderRadius: alias["Border Radius"],
    borderWidth: alias["Border Width"],
    typography: responsive.mobile,
  };
}

// Export des couleurs statiques pour le dark mode (défaut)
export const text = mapped.dark.Text;
export const surface = mapped.dark.Surface;
export const border = mapped.dark.Border;
export const icon = mapped.dark.Icon;
export const borderRadius = alias["Border Radius"];
export const typography = responsive.mobile;
export const spacing = {
  none: 0,
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};