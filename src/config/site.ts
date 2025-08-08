// Site Configuration
// Modify these values to personalize your site.

export const siteConfig = {
  // Basic Site Information
  title: 'Reverie',
  description: 'Personal thoughts, stories, and life reflections',
  author: 'Your Name',
  url: 'https://example.com',

  // Hero content
  welcomeTo: 'Welcome to',
  heroDescription:
    'My personal space on the internet where I write about life, thoughts, and whatever catches my interest along the way.',
  blogSubtitle: 'Thoughts, stories, and reflections from my journey.',
  aboutSubtitle: 'A personal space for thoughts, stories, and life reflections',

  // Footer
  footerText: 'A personal blog built with care.',

  // Meta descriptions
  aboutMetaDescription: 'Learn more about me and this personal blog',
  blogMetaDescription:
    'Personal thoughts, reflections, and stories from my life',

  // Language & technical configuration
  language: 'zh' as 'en' | 'zh',
  theme: 'sageGreen',

  // Social Links
  social: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    email: 'hello@example.com',
  },
} as const;

// Type definitions for better TypeScript support
export type SiteConfig = typeof siteConfig;
