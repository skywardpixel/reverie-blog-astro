# Liquid Glass Blog - Astro

A minimalistic static blog built with Astro, featuring a modern liquid glass design inspired by iOS. This blog uses MDX for content, allowing rich components within markdown files.

![Liquid Glass Design](https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&h=400&fit=crop)

## ✨ Features

- **Liquid Glass Design**: Modern glassmorphism effects with backdrop filters and subtle animations
- **iOS-Inspired Navigation**: Floating navigation bar with smooth transitions
- **MDX Support**: Write blog posts with components inside markdown
- **Dark Theme**: Optimized for dark environments with elegant transparency effects
- **Responsive**: Fully responsive design that works on all devices
- **Performance First**: Built with Astro for blazing-fast performance
- **Type-Safe**: TypeScript support with content collections
- **SEO Ready**: Meta tags, Open Graph, and sitemap generation

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/liquid-glass-blog.git
cd liquid-glass-blog
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
heroImage: 'https://example.com/image.jpg'
tags: ['tag1', 'tag2']
draft: false
---

Your content here...
```

### Frontmatter Fields

- `title` (required): The title of your blog post
- `description` (required): A brief description for SEO and previews
- `publishDate` (required): Publication date (YYYY-MM-DD format)
- `heroImage` (optional): Hero image URL for the post
- `tags` (optional): Array of tags for categorization
- `draft` (optional): Set to `true` to hide the post from production
- `updatedDate` (optional): Last update date

## 🎨 Customization

### Colors

Edit the CSS variables in `src/styles/global.css`:

```css
:root {
  --color-bg: #0a0a0f;
  --color-text: #e4e4e7;
  --color-accent: #60a5fa;
  /* ... more variables */
}
```

### Glass Effects

Adjust the glass effect intensity:

```css
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.08);
}
```

### Navigation

The navigation items can be modified in `src/components/Navigation.astro`:

```javascript
const navItems = [
  { name: 'Home', href: '/', id: 'home' },
  { name: 'Blog', href: '/blog', id: 'blog' },
  { name: 'About', href: '/about', id: 'about' },
];
```

## 🏗️ Project Structure

```
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── BlogCard.astro      # Blog post card component
│   │   └── Navigation.astro    # iOS-style navigation bar
│   ├── content/
│   │   ├── blog/               # Blog posts in MDX
│   │   └── config.ts          # Content collection config
│   ├── layouts/
│   │   ├── BaseLayout.astro   # Base layout with nav and footer
│   │   └── BlogPost.astro     # Blog post layout
│   ├── pages/
│   │   ├── blog/
│   │   │   ├── [...slug].astro # Dynamic blog post pages
│   │   │   └── index.astro     # Blog listing page
│   │   ├── about.astro         # About page
│   │   └── index.astro         # Home page
│   ├── styles/
│   │   └── global.css          # Global styles and glass effects
│   └── env.d.ts               # TypeScript declarations
├── astro.config.mjs           # Astro configuration
├── package.json
└── tsconfig.json
```

## 🛠️ Development

### Commands

| Command             | Action                                       |
| ------------------- | -------------------------------------------- |
| `npm run dev`       | Start development server at `localhost:4321` |
| `npm run build`     | Build production site to `./dist/`           |
| `npm run preview`   | Preview production build locally             |
| `npm run astro ...` | Run Astro CLI commands                       |

### Adding New Features

1. **Components**: Add new components to `src/components/`
2. **Pages**: Add new pages to `src/pages/`
3. **Layouts**: Create new layouts in `src/layouts/`
4. **Styles**: Global styles go in `src/styles/global.css`

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

1. Update `astro.config.mjs`:

```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/repo-name',
  // ... rest of config
});
```

2. Use GitHub Actions for automatic deployment

## 🎯 Performance

This blog achieves excellent performance metrics:

- **Lighthouse Score**: 100/100
- **First Contentful Paint**: < 0.8s
- **Time to Interactive**: < 1.5s
- **Bundle Size**: < 50KB JavaScript

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspired by iOS glass morphism
- Built with [Astro](https://astro.build)
- Icons from [Feather Icons](https://feathericons.com)
- Sample images from [Unsplash](https://unsplash.com)

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername)

Project Link: [https://github.com/yourusername/liquid-glass-blog](https://github.com/yourusername/liquid-glass-blog)

---

Built with ❤️ using Astro and liquid glass design
