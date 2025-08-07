# Theme System Documentation

This blog uses a powerful and flexible theme system that allows you to easily customize the visual appearance while maintaining consistency across all components.

## Overview

The theme system is built with:

- **TypeScript configuration** for type safety and intellisense
- **CSS custom properties** for dynamic styling
- **Astro integration** for seamless server-side rendering
- **Modular architecture** for easy customization and extension

## Available Themes

### 🌿 Sage Green (Default)

**Theme ID:** `sageGreen`

- **Vibe:** Calming and natural, perfect for thoughtful writing
- **Best for:** Personal blogs, mindfulness content, nature writing

### 🏺 Warm Terracotta

**Theme ID:** `warmTerracotta`

- **Vibe:** Earthy and cozy with Mediterranean warmth
- **Best for:** Travel blogs, cooking content, lifestyle writing

### 🌸 Dusty Rose

**Theme ID:** `dustyRose`

- **Vibe:** Gentle and romantic with soft elegance
- **Best for:** Creative writing, poetry, personal stories

### 🍯 Warm Honey

**Theme ID:** `warmHoney`

- **Vibe:** Golden and inviting with optimistic energy
- **Best for:** Motivational content, business blogs, productivity

### 💜 Soft Lavender

**Theme ID:** `softLavender`

- **Vibe:** Creative and thoughtful with artistic flair
- **Best for:** Art blogs, creative portfolios, design content

### 🌊 Warm Steel

**Theme ID:** `warmSteel`

- **Vibe:** Trustworthy and balanced with professional warmth
- **Best for:** Technical blogs, professional content, tutorials

## How to Change Themes

### Method 1: Configuration File (Recommended)

Edit the theme configuration file:

```typescript
// src/config/themes.ts
export const siteConfig: SiteConfig = {
  activeTheme: 'warmTerracotta', // Change this to any theme ID
  allowThemeSwitching: false, // Enable user theme switching
};
```

### Method 2: Preview Themes

Visit `/themes` to see all available themes in action and get a preview of how your content will look.

## Theme Structure

Each theme includes the following color properties:

```typescript
interface ThemeColors {
  bg: string; // Main background color
  surface: string; // Card and surface backgrounds
  text: string; // Primary text color
  textSecondary: string; // Secondary text (less prominent)
  textTertiary: string; // Tertiary text (subtle)
  accent: string; // Primary accent color (links, buttons)
  accentLight: string; // Lighter accent variant
  border: string; // Border colors
  borderLight: string; // Light border variant
}
```

## Creating Custom Themes

### 1. Define Your Theme

Add a new theme to the `themes` object in `src/config/themes.ts`:

```typescript
export const themes: Record<string, Theme> = {
  // ... existing themes

  myCustomTheme: {
    name: 'myCustomTheme',
    displayName: 'My Custom Theme',
    description: 'A unique theme reflecting my personal style',
    colors: {
      bg: '#faf9f7',
      surface: '#ffffff',
      text: '#2c2b29',
      textSecondary: '#6a6866',
      textTertiary: '#8a8784',
      accent: '#8b5a3c',
      accentLight: '#a06d4e',
      border: '#d4cfc8',
      borderLight: '#e8e4dd',
    },
  },
};
```

### 2. Activate Your Theme

Update the site configuration:

```typescript
export const siteConfig: SiteConfig = {
  activeTheme: 'myCustomTheme',
  allowThemeSwitching: false,
};
```

### 3. Design Guidelines

When creating themes, follow these guidelines:

#### Color Harmony

- Use harmonious color relationships (analogous, complementary, or triadic)
- Maintain consistent saturation levels across colors
- Ensure colors feel cohesive and intentional

#### Accessibility

- Text contrast ratio: minimum 4.5:1 for normal text, 3:1 for large text
- Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- Test with different vision types using accessibility tools

#### Readability

- Keep `bg` and `text` colors with high contrast
- Use `textSecondary` for less important information
- `textTertiary` should be subtle but still readable

#### Brand Consistency

- Reflect the personality and tone of your content
- Consider your target audience and content type
- Maintain visual hierarchy with accent colors

## Technical Implementation

### CSS Custom Properties

The theme system uses CSS custom properties that are injected dynamically:

```css
:root {
  --color-bg: #faf8f5;
  --color-surface: #ffffff;
  --color-text: #2d342f;
  /* ... other properties */
}
```

### Component Integration

All components automatically use theme colors:

```css
.my-component {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}
```

### Server-Side Rendering

Themes are applied during build time, ensuring:

- No flash of unstyled content (FOUC)
- Better SEO and performance
- Consistent styling across all pages

## Advanced Features

### Theme Inheritance

You can create themes that extend existing ones:

```typescript
const baseTheme = themes.sageGreen;

const myVariantTheme: Theme = {
  ...baseTheme,
  name: 'sageGreenDark',
  displayName: 'Sage Green Dark',
  colors: {
    ...baseTheme.colors,
    bg: '#1a1f1b',
    surface: '#242a25',
    text: '#e8f0eb',
  },
};
```

### Conditional Theming

Apply different themes based on conditions:

```typescript
// In your Astro component
const isDarkMode = Astro.url.searchParams.has('dark');
const themeToUse = isDarkMode ? 'sageGreenDark' : 'sageGreen';
```

### Theme Validation

The TypeScript interface ensures all required colors are provided:

```typescript
// This will show a TypeScript error if colors are missing
const incompleteTheme: Theme = {
  name: 'incomplete',
  displayName: 'Incomplete',
  description: 'Missing colors',
  colors: {
    bg: '#ffffff',
    // Error: missing required properties
  },
};
```

## Best Practices

### Development

1. **Test thoroughly**: View your content with each theme
2. **Check accessibility**: Verify contrast ratios
3. **Mobile testing**: Ensure themes work on all devices
4. **Print styles**: Consider how themes appear when printed

### Content

1. **Image coordination**: Choose images that work with your theme
2. **Code highlighting**: Ensure code blocks remain readable
3. **Link styling**: Verify links stand out appropriately

### Performance

1. **Minimal overhead**: Theme switching adds minimal CSS
2. **Build optimization**: Unused theme colors are tree-shaken
3. **Caching**: Themes are cached with other CSS assets

## Troubleshooting

### Colors Not Applying

- Check theme name spelling in configuration
- Verify CSS custom properties are being imported
- Ensure ThemeProvider is included in BaseLayout

### TypeScript Errors

- Make sure all required theme properties are defined
- Check import paths for theme utilities
- Verify interface implementations match

### Visual Issues

- Clear browser cache after theme changes
- Check for hardcoded colors in CSS
- Verify component styles use CSS custom properties

## Migration Guide

### From Hardcoded Colors

Replace hardcoded colors with CSS custom properties:

```css
/* Before */
.component {
  background: #ffffff;
  color: #2d342f;
  border: 1px solid #d4e0d7;
}

/* After */
.component {
  background: var(--color-surface);
  color: var(--color-text);
  border: 1px solid var(--color-border);
}
```

### Adding New Color Properties

1. Update the `ThemeColors` interface
2. Add the new property to all existing themes
3. Use the new property in your components

## Support

For questions or issues with the theme system:

1. Check this documentation
2. Review the theme showcase at `/themes`
3. Examine the source code in `src/config/themes.ts`
4. Test with the default theme to isolate issues

The theme system is designed to be flexible and extensible while maintaining simplicity for common use cases.
