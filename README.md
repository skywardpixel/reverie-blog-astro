# Reverie - Elegant Astro Blog Template

A thoughtful, minimalist blog template built with Astro, featuring multiple beautiful themes and a focus on readability and personal expression. Perfect for writers, developers, and creatives who want an elegant online presence.

![Reverie Blog Template](https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=400&fit=crop)

## ✨ Features

- **🎨 Multiple Themes**: Six carefully crafted color themes to match your personality
- **📝 MDX Support**: Write blog posts with components inside markdown
- **📱 Fully Responsive**: Beautiful on desktop, tablet, and mobile devices
- **⚡ Blazing Fast**: Built with Astro for optimal performance
- **🔍 SEO Optimized**: Meta tags, Open Graph, sitemap, and RSS feed
- **♿ Accessible**: WCAG compliant with proper contrast and semantic HTML
- **🎯 Reading-Focused**: Clean typography and distraction-free reading experience
- **📊 Reading Time**: Automatic reading time calculation
- **🏷️ Tag System**: Organize posts with tags that adapt to your theme
- **🔗 Social Sharing**: Built-in sharing buttons for social platforms

## 🎨 Available Themes

- **Sage Green**: Calming and natural, perfect for thoughtful writing
- **Soft Lavender**: Creative and thoughtful with artistic flair
- **Warm Terracotta**: Earthy and cozy with Mediterranean warmth
- **Dusty Rose**: Gentle and romantic with soft elegance
- **Warm Honey**: Golden and inviting with optimistic energy
- **Warm Steel**: Trustworthy and balanced with professional warmth

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

1. Clone or download the template:

```bash
git clone https://github.com/yourusername/reverie-blog-template.git
cd reverie-blog-template
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📝 Writing Blog Posts

Blog posts are written in MDX format and stored in `src/content/blog/`. Each post should have frontmatter with the following structure:

```mdx
---
title: 'Your Post Title'
description: 'A brief description of your post'
publishDate: 2024-01-15
updatedDate: 2024-01-20
heroImage: 'https://example.com/image.jpg'
tags: ['writing', 'thoughts', 'life']
draft: false
---

Your content here with full MDX support...

## You can use markdown

And even import components:

<CustomComponent />
```

### Frontmatter Fields

- `title` (required): The title of your blog post
- `description` (required): A brief description for SEO and previews
- `publishDate` (required): Publication date (YYYY-MM-DD format)
- `updatedDate` (optional): Last update date
- `heroImage` (optional): Hero image URL for the post
- `tags` (optional): Array of tags for categorization
- `draft` (optional): Set to `true` to hide the post from production

## 🎨 Customizing Your Theme

### Changing the Active Theme

Edit `src/config/themes.ts` to change the active theme:

```javascript
export const siteConfig: SiteConfig = {
  activeTheme: 'softLavender', // Change to any theme name
  allowThemeSwitching: false, // Set to true to enable theme switcher UI
};
```

Available themes: `sageGreen`, `softLavender`, `warmTerracotta`, `dustyRose`, `warmHoney`, `warmSteel`

### Creating Custom Themes

Add new themes to the `themes` object in `src/config/themes.ts`:

```javascript
customTheme: {
  name: 'customTheme',
  displayName: 'Custom Theme',
  description: 'Your custom theme description',
  colors: {
    bg: '#your-bg-color',
    surface: '#your-surface-color',
    text: '#your-text-color',
    textSecondary: '#your-secondary-text',
    textTertiary: '#your-tertiary-text',
    accent: '#your-accent-color',
    accentLight: '#your-light-accent',
    border: '#your-border-color',
    borderLight: '#your-light-border',
  },
},
```

## 🏗️ Project Structure

```
├── public/
│   ├── favicon.svg
│   └── og-image.png
├── src/
│   ├── components/
│   │   ├── BlogCard.astro      # Blog post card component
│   │   ├── Navigation.astro    # Site navigation
│   │   └── ThemeProvider.astro # Theme system
│   ├── config/
│   │   └── themes.ts          # Theme configuration
│   ├── content/
│   │   ├── blog/              # Blog posts in MDX
│   │   └── config.ts          # Content collection config
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base layout with theme
│   │   └── BlogPost.astro     # Blog post layout
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...slug].astro # Dynamic blog post pages
│   │   │   └── index.astro     # Blog listing page
│   │   ├── about.astro         # About page
│   │   ├── index.astro         # Home page
│   │   ├── rss.xml.js         # RSS feed
│   │   └── themes.astro       # Theme showcase
│   ├── styles/
│   │   └── global.css         # Global styles and design system
│   ├── utils/
│   │   └── reading-time.ts    # Reading time calculation
│   └── env.d.ts              # TypeScript declarations
├── astro.config.mjs           # Astro configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Development

### Available Commands

| Command                | Action                                       |
| ---------------------- | -------------------------------------------- |
| `npm run dev`          | Start development server at `localhost:4321` |
| `npm run build`        | Build production site to `./dist/`           |
| `npm run preview`      | Preview production build locally             |
| `npm run format`       | Format all files with Prettier               |
| `npm run format:check` | Check if files need formatting               |

### Code Quality

Reverie includes:

- **Prettier** for consistent code formatting
- **TypeScript** for type safety
- **ESLint-ready** structure for linting

## 📦 Building for Production

1. Build the site:

```bash
npm run build
```

2. Preview the production build:

```bash
npm run preview
```

3. Deploy the `dist/` folder to your hosting provider

## 🚀 Deployment

### Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start)

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### GitHub Pages

Update `astro.config.mjs` with your site details:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/your-repo-name', // Only needed for repo deployments
});
```

## 🎯 Performance

Reverie is built for performance:

- **100/100 Lighthouse Score** achievable
- **Minimal JavaScript** - mostly static HTML/CSS
- **Optimized Images** with Astro's built-in optimization
- **Fast Navigation** with prefetching
- **Small Bundle Size** - under 50KB of JavaScript

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with [Astro](https://astro.build) - The web framework for content-driven websites
- Typography inspired by Medium and Ghost
- Color palettes designed for accessibility and beauty
- Icons from [Feather Icons](https://feathericons.com)

## 💬 Support

If you find this template helpful, please consider:

- ⭐ Starring the repository
- 🐛 Reporting bugs via GitHub Issues
- 💡 Suggesting features via GitHub Discussions
- 📝 Writing about your experience using Reverie

---

**Reverie** - _A thoughtful space for your words_

Built with ❤️ for writers, creators, and dreamers.
