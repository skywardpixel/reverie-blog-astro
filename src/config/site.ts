// Site Configuration
// Modify these values to personalize your site.

export const siteConfig = {
  // Basic Site Information
  title: 'Reverie',
  description: 'Personal thoughts, stories, and life reflections',
  author: 'Your Name',
  url: 'https://example.com',

  // Social Links
  social: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    email: 'hello@example.com',
  },

  // Theme (must match a key from themes)
  theme: 'sageGreen',
} as const;

// Utility functions
// Type definitions for better TypeScript support
export type SiteConfig = typeof siteConfig;
