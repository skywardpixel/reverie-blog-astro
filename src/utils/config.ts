import { siteConfig, siteContent } from '../config/site';
import { ui, getUITranslation } from '../i18n';
import type { SiteConfig } from '../config/site';
import type { Language } from '../i18n';

// Export the main config for easy importing
export { siteConfig };

// Utility functions for accessing config values
export const getSiteTitle = () => siteContent[siteConfig.language].title;
export const getSiteDescription = () =>
  siteContent[siteConfig.language].description;
export const getAuthor = () => siteContent[siteConfig.language].author;
export const getSiteUrl = () => siteConfig.url;
export const getLanguage = (): Language => siteConfig.language;

// Theme utilities
export const getTheme = () => siteConfig.theme;

// Social links
export const getSocialLinks = () => siteConfig.social;

// UI Translation utilities (for system labels)
export const t = (key: keyof typeof ui.en) => {
  const lang = getLanguage();
  return getUITranslation(lang, key);
};

// Site Content utilities (for user content)
export const getContent = (key: keyof typeof siteContent.en) => {
  const lang = getLanguage();
  return siteContent[lang][key];
};

// Navigation with i18n support
export const getMainNavigation = () => [
  { name: t('home'), href: '/', id: 'home' },
  { name: t('blog'), href: '/blog', id: 'blog' },
  { name: t('about'), href: '/about', id: 'about' },
];

// Hardcoded feature flags (simplified)
export const showRssLink = () => true;
export const getDefaultOgImage = () => '/og-image.png';

// Helper function to get full URL for a path
export const getFullUrl = (path: string = '') => {
  const baseUrl = getSiteUrl().replace(/\/$/, ''); // Remove trailing slash
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${normalizedPath}`;
};

// Type exports for TypeScript support
export type { SiteConfig } from '../config/site';
export type { Language } from '../i18n';
