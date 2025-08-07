import { siteConfig } from '../config/site';
import type { SiteConfig } from '../config/site';

// Export the main config for easy importing
export { siteConfig };

// Utility functions for accessing config values
export const getSiteTitle = () => siteConfig.title;
export const getSiteDescription = () => siteConfig.description;
export const getSiteUrl = () => siteConfig.url;
export const getAuthor = () => siteConfig.author;

// Theme utilities
export const getTheme = () => siteConfig.theme;

// Social links
export const getSocialLinks = () => siteConfig.social;

// Navigation (hardcoded since it's unlikely to change)
export const getMainNavigation = () => [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'Blog', href: '/blog', id: 'blog' },
  { name: 'About', href: '/about', id: 'about' },
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
