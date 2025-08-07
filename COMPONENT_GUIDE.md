# Component Guide

This guide explains how to use the reusable components to easily create new pages with consistent styling, similar to the About page.

## Overview

The blog now includes several reusable components that extract the beautiful design patterns from the About page. These components have been optimized for performance by removing heavy glass morphism effects that could cause lag, while maintaining the elegant aesthetic.

## Available Components

### 1. PageHero

A reusable hero section with gradient text and subtitle.

**Props:**
- `title` (string, required): The main heading text
- `subtitle` (string, optional): Subtitle text below the main heading
- `className` (string, optional): Additional CSS classes

**Example:**
```astro
---
import PageHero from '../components/PageHero.astro';
---

<PageHero 
  title="My Page" 
  subtitle="A description of what this page is about" 
/>
```

### 2. Card

A clean, performant card container with consistent styling for headings, paragraphs, and lists. Replaces the previous "GlassCard" with optimized styling.

**Props:**
- `className` (string, optional): Additional CSS classes
- `hover` (boolean, optional, default: true): Whether to show hover effects

**Example:**
```astro
---
import Card from '../components/Card.astro';
---

<Card>
  <h2>Card Title</h2>
  <p>Your content goes here...</p>
</Card>
```

### 3. PageLayout

A complete page layout component that includes hero section and content areas with optional sidebar.

**Props:**
- `title` (string, required): Hero title
- `subtitle` (string, optional): Hero subtitle
- `heroClass` (string, optional): Additional classes for hero section
- `contentClass` (string, optional): Additional classes for content section
- `hasSidebar` (boolean, optional, default: false): Whether to include a sidebar

**Slots:**
- `main`: Main content area
- `sidebar`: Sidebar content (only used if `hasSidebar` is true)

**Example:**
```astro
---
import PageLayout from '../components/PageLayout.astro';
import Card from '../components/Card.astro';
---

<PageLayout 
  title="My Page" 
  subtitle="Page description"
  hasSidebar={true}
>
  <Card slot="main">
    <h2>Main Content</h2>
    <p>Your main content here...</p>
  </Card>
  
  <Card slot="sidebar">
    <h3>Sidebar Content</h3>
    <p>Sidebar content here...</p>
  </Card>
</PageLayout>
```

### 4. SocialLinks

Pre-styled social media links with icons, optimized for performance.

**Props:**
- `className` (string, optional): Additional CSS classes
- `variant` ('vertical' | 'horizontal', optional, default: 'vertical'): Layout direction
- `showLabels` (boolean, optional, default: true): Whether to show text labels

**Example:**
```astro
---
import SocialLinks from '../components/SocialLinks.astro';
---

<SocialLinks variant="horizontal" showLabels={false} />
```

## Quick Start Templates

### Single-Column Page

For simple pages without a sidebar:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageLayout from '../components/PageLayout.astro';
import Card from '../components/Card.astro';
---

<BaseLayout
  title="Page Title - Reverie"
  description="Page description for SEO"
  activeNav={undefined} // or "about" if it fits
>
  <PageLayout
    title="Page Title"
    subtitle="Optional subtitle"
    hasSidebar={false}
  >
    <Card slot="main">
      <h2>Section Heading</h2>
      <p>Your content here...</p>
      
      <h3>Subsection</h3>
      <ul>
        <li>List item 1</li>
        <li>List item 2</li>
      </ul>
    </Card>
  </PageLayout>
</BaseLayout>
```

### Two-Column Page with Sidebar

For pages with a sidebar like the About page:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageLayout from '../components/PageLayout.astro';
import Card from '../components/Card.astro';
import SocialLinks from '../components/SocialLinks.astro';
---

<BaseLayout
  title="Page Title - Reverie"
  description="Page description for SEO"
  activeNav="about"
>
  <PageLayout
    title="Page Title"
    subtitle="Optional subtitle"
    hasSidebar={true}
  >
    <Card slot="main">
      <h2>Main Content</h2>
      <p>Your main content here...</p>
    </Card>

    <Card slot="sidebar">
      <h3>Sidebar Card 1</h3>
      <p>Sidebar content...</p>
      <SocialLinks />
    </Card>

    <Card slot="sidebar">
      <h3>Sidebar Card 2</h3>
      <p>More sidebar content...</p>
    </Card>
  </PageLayout>
</BaseLayout>
```

### Custom Hero Only

If you want just the hero section with custom content layout:

```astro
---
import BaseLayout from '../layouts/BaseLayout.astro';
import PageHero from '../components/PageHero.astro';
import Card from '../components/Card.astro';
---

<BaseLayout
  title="Page Title - Reverie"
  description="Page description for SEO"
  activeNav={undefined}
>
  <PageHero title="Page Title" subtitle="Optional subtitle" />
  
  <section class="custom-content">
    <div class="container">
      <Card>
        <h2>Custom Layout</h2>
        <p>Build your own layout after the hero...</p>
      </Card>
    </div>
  </section>
</BaseLayout>
```

## Performance Optimizations

The components have been optimized for better performance:

### Removed Heavy Effects
- **Backdrop filters**: Removed `backdrop-filter: blur()` which caused lag
- **Complex animations**: Simplified gradient animations
- **Multiple shadows**: Reduced to simple, efficient shadows

### Lighter Styling
- **Card backgrounds**: Changed from heavy glass effect to clean white cards
- **Transitions**: Shortened duration and simplified easing
- **Borders**: Use simple borders instead of complex glass effects

### What You Still Get
- ✅ Beautiful gradient hero titles
- ✅ Clean, professional card designs
- ✅ Smooth hover effects
- ✅ Responsive design
- ✅ Consistent typography
- ✅ Excellent performance

## Styling Notes

### Automatic Typography

The `Card` component automatically styles common HTML elements:

- `<h2>` gets gradient text treatment (main section headings)
- `<h3>` gets consistent styling (subsection headings)  
- `<p>` gets proper serif font and spacing
- `<ul>` and `<li>` get custom bullet points
- All elements are responsive

### Custom Styling

If you need additional styling, add a `<style>` section to your page:

```astro
<style>
  .custom-class {
    /* Your custom styles */
  }
  
  /* Target elements inside cards */
  .special-card :global(p) {
    color: red;
  }
</style>
```

### Tech Tags

For project or technology lists, use the tech tag pattern:

```astro
<div class="tech-list">
  <span class="tech-tag">React</span>
  <span class="tech-tag">TypeScript</span>
  <span class="tech-tag">Astro</span>
</div>

<style>
  .tech-list {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .tech-tag {
    padding: 0.5rem 1rem;
    background: var(--color-border-light);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-sm);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    font-weight: 500;
  }
</style>
```

## Navigation Setup

For proper navigation highlighting, use these `activeNav` values:

- `activeNav="home"` - For homepage-related pages
- `activeNav="blog"` - For blog-related pages  
- `activeNav="about"` - For about, contact, projects, etc.
- `activeNav={undefined}` - For pages that don't fit existing nav items

## Examples

Check out these example pages to see the components in action:

- `/about` - Two-column layout with sidebar
- `/contact` - Two-column layout with contact information
- `/projects` - Two-column layout showcasing projects
- `/example-simple` - Single-column layout demonstration

## Benefits

✅ **Excellent Performance**: No heavy effects that cause lag  
✅ **No CSS Required**: Create beautiful pages without writing custom styles  
✅ **Consistent Design**: All pages maintain the same visual language  
✅ **Responsive**: Works perfectly on all device sizes  
✅ **Maintainable**: Update styles in one place to affect all pages  
✅ **Flexible**: Mix and match components as needed  
✅ **Accessible**: Built with semantic HTML and ARIA labels

## Customization

To customize the design system:

1. **Colors**: Modify CSS custom properties in your base styles
2. **Fonts**: Update the font variables
3. **Spacing**: Adjust the component padding/margins in `Card.astro`
4. **Effects**: Modify hover effects and shadows as needed

The component system prioritizes performance while maintaining beautiful, consistent design that lets you focus on content creation.