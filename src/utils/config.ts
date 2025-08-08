import { siteConfig } from '../config/site';
import { ui, getCurrentLanguage, getUITranslation } from '../i18n';
import type { SiteConfig } from '../config/site';
import type { Language, UIKey } from '../i18n';

// Export the main config for easy importing
export { siteConfig };

// Utility functions for accessing config values
export const getSiteTitle = () => siteConfig.title;
export const getSiteDescription = () => siteConfig.description;
export const getAuthor = () => siteConfig.author;
export const getSiteUrl = () => siteConfig.url;
export const getLanguage = (): Language => getCurrentLanguage();

// Theme utilities
export const getTheme = () => siteConfig.theme;

// Social links
export const getSocialLinks = () => siteConfig.social;

// UI Translation utilities (for system labels)
export const t = (key: UIKey) => {
  const lang = getCurrentLanguage();
  return getUITranslation(lang, key);
};

// Direct config access - users can access siteConfig properties directly

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
