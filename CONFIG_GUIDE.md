# Configuration Guide

This guide explains how to customize your blog. Edit `src/config/site.ts` to personalize your site.

## Configuration Options

### Site Information

```ts
export const siteConfig = {
  // Basic site information
  title: 'Your Blog Name',
  description: 'Your blog description for SEO',
  author: 'Your Name',
  url: 'https://yourdomain.com',
  
  // Social links
  social: {
    twitter: 'https://twitter.com/yourusername',
    github: 'https://github.com/yourusername',
    email: 'your.email@example.com',
  },
  
  // Default theme
  defaultTheme: 'sage', // sage, ocean, sunset, midnight, forest, lavender
};
```

## Adding Custom Themes

1. **Create a new theme in `src/styles/themes.ts`:**
   ```ts
   export const themes = {
     // ... existing themes
     mytheme: {
       name: 'My Theme',
       displayName: 'My Theme',
       description: 'A custom theme',
       colors: {
         bg: '#ffffff',
         surface: '#f8f9fa',
         text: '#2c3e50',
         textSecondary: '#6c757d',
         textTertiary: '#adb5bd',
         accent: '#007bff',
         accentLight: '#66b3ff',
         border: '#dee2e6',
         borderLight: '#e9ecef',
       }
     }
   };
   ```

2. **Set it in site config:**
   ```ts
   // src/config/site.ts
   theme: 'mytheme',
   ```

## Customization Tips

- **Site URL**: Don't include trailing slash
- **Social Links**: Use full URLs with https://
- **Email**: Just the address, no mailto: prefix
- **Theme**: Must match a theme name from `src/styles/themes.ts`

## Examples

### Personal Blog Setup
```ts
export const siteConfig = {
  title: 'Sarah\'s Journal',
  description: 'Personal thoughts on life, books, and coffee',
  author: 'Sarah Smith',
  url: 'https://sarahsjournal.com',
  
  social: {
    twitter: 'https://twitter.com/sarahsmith',
    github: 'https://github.com/sarahsmith',
    email: 'hello@sarahsjournal.com',
  },
  
  defaultTheme: 'sage',
};
```

### Tech Blog Setup  
```ts
export const siteConfig = {
  title: 'DevThoughts',
  description: 'Thoughts on software development and technology',
  author: 'Alex Developer',
  url: 'https://devthoughts.tech',
  
  social: {
    twitter: 'https://twitter.com/alexdev',
    github: 'https://github.com/alexdev',
    email: 'alex@devthoughts.tech',
  },
  
  defaultTheme: 'midnight',
};
```

Remember: Restart your development server after making config changes.