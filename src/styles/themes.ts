export interface ThemeColors {
  bg: string;
  surface: string;
  text: string;
  textSecondary: string;
  textTertiary: string;
  accent: string;
  accentLight: string;
  border: string;
  borderLight: string;
}

export interface Theme {
  name: string;
  displayName: string;
  description: string;
  colors: ThemeColors;
}

export const themes: Record<string, Theme> = {
  sageGreen: {
    name: 'sageGreen',
    displayName: 'Sage Green',
    description: 'Calming and natural, perfect for thoughtful writing',
    colors: {
      bg: '#faf8f5',
      surface: '#ffffff',
      text: '#2d342f',
      textSecondary: '#6b7a6f',
      textTertiary: '#8a9a8f',
      accent: '#7c9885',
      accentLight: '#a4b8a8',
      border: '#d4e0d7',
      borderLight: '#e8f0eb',
    },
  },
  warmTerracotta: {
    name: 'warmTerracotta',
    displayName: 'Warm Terracotta',
    description: 'Earthy and cozy with Mediterranean warmth',
    colors: {
      bg: '#faf7f4',
      surface: '#ffffff',
      text: '#3a2e26',
      textSecondary: '#7a6b5d',
      textTertiary: '#9a8b7d',
      accent: '#c67b5c',
      accentLight: '#d4967a',
      border: '#e8d5c8',
      borderLight: '#f0e6dc',
    },
  },
  dustyRose: {
    name: 'dustyRose',
    displayName: 'Dusty Rose',
    description: 'Gentle and romantic with soft elegance',
    colors: {
      bg: '#faf7f7',
      surface: '#ffffff',
      text: '#3a2d2d',
      textSecondary: '#7a6b6b',
      textTertiary: '#9a8b8b',
      accent: '#d4a5a5',
      accentLight: '#e2bebe',
      border: '#e8d5d5',
      borderLight: '#f0e6e6',
    },
  },
  warmHoney: {
    name: 'warmHoney',
    displayName: 'Warm Honey',
    description: 'Golden and inviting with optimistic energy',
    colors: {
      bg: '#faf8f4',
      surface: '#ffffff',
      text: '#3a3426',
      textSecondary: '#7a705d',
      textTertiary: '#9a907d',
      accent: '#d4a574',
      accentLight: '#e4b885',
      border: '#e8dcc8',
      borderLight: '#f0e9dc',
    },
  },
  softLavender: {
    name: 'softLavender',
    displayName: 'Soft Lavender',
    description: 'Creative and thoughtful with artistic flair',
    colors: {
      bg: '#f9f7fa',
      surface: '#ffffff',
      text: '#342d3a',
      textSecondary: '#6b5d7a',
      textTertiary: '#8b7d9a',
      accent: '#b8a5d1',
      accentLight: '#c8b5e1',
      border: '#d5c8e8',
      borderLight: '#e6dcf0',
    },
  },
  warmSteel: {
    name: 'warmSteel',
    displayName: 'Warm Steel',
    description: 'Trustworthy and balanced with professional warmth',
    colors: {
      bg: '#f7f8fa',
      surface: '#ffffff',
      text: '#2d343a',
      textSecondary: '#5d6b7a',
      textTertiary: '#7d8b9a',
      accent: '#7a9bb8',
      accentLight: '#8aabc8',
      border: '#c8d5e8',
      borderLight: '#dce6f0',
    },
  },
};

// Import site configuration
import { siteConfig } from '../config/site';

// Utility function to get current theme
export function getCurrentTheme(): Theme {
  return themes[siteConfig.theme];
}

// Utility function to get all available themes
export function getAllThemes(): Theme[] {
  return Object.values(themes);
}

// Utility function to generate CSS custom properties for a theme
export function generateThemeCSS(theme: Theme): string {
  return `
    --color-bg: ${theme.colors.bg};
    --color-surface: ${theme.colors.surface};
    --color-text: ${theme.colors.text};
    --color-text-secondary: ${theme.colors.textSecondary};
    --color-text-tertiary: ${theme.colors.textTertiary};
    --color-accent: ${theme.colors.accent};
    --color-accent-light: ${theme.colors.accentLight};
    --color-border: ${theme.colors.border};
    --color-border-light: ${theme.colors.borderLight};
  `.trim();
}
