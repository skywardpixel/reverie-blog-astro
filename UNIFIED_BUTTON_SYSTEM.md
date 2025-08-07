# Unified Button System

This document outlines the unified button system implemented across the Reverie blog to ensure consistency in styling, animations, and behavior.

## Overview

The unified button system replaces all inconsistent button styles throughout the project with a centralized, cohesive design system. This improves maintainability, user experience, and performance.

## Key Improvements

### Before
- **15+ different button styles** across components
- **Inconsistent timing**: `150ms`, `200ms`, `250ms`, `300ms`
- **Different transforms**: `-1px`, `-2px`, `-4px`, `scale()` variations
- **Mixed transition functions**: `ease`, `cubic-bezier()` variations
- **Performance issues**: Glass morphism effects, backdrop-filter
- **Inconsistent hover states** and animations

### After
- **Single unified system** with consistent classes
- **Standardized timing**: `200ms ease` for all interactions
- **Consistent transforms**: `-2px` for primary actions, `-1px` for secondary
- **Simplified transitions**: Clean `ease` function throughout
- **Improved performance**: Removed heavy effects
- **Predictable behavior** across all components

## Button Classes

### Core Button Classes

#### `.btn`
Base button class with consistent styling:
```css
.btn {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  border-radius: 12px;
  font-weight: 500;
  transition: all 200ms ease;
}
```

#### `.btn-primary`
Primary action button (accent color):
```css
.btn-primary {
  background: var(--color-accent);
  border-color: var(--color-accent);
  color: var(--color-surface);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(184, 165, 209, 0.25);
}
```

#### `.btn-secondary`
Secondary action button:
```css
.btn-secondary {
  background: var(--color-surface);
  border-color: var(--color-border);
  color: var(--color-text);
}

.btn-secondary:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.08);
}
```

#### `.btn-outline`
Outline style button:
```css
.btn-outline {
  background: transparent;
  border-color: var(--color-accent);
  color: var(--color-accent);
}
```

#### `.btn-ghost`
Minimal ghost button:
```css
.btn-ghost {
  background: transparent;
  border-color: transparent;
  color: var(--color-text-secondary);
}

.btn-ghost:hover {
  transform: translateY(-1px);
}
```

### Specialized Button Classes

#### `.btn-link`
For tags and quick links:
```css
.btn-link {
  padding: 0.5rem 1rem;
  background: var(--color-border-light);
  border-radius: 8px;
  font-size: 0.875rem;
}

.btn-link:hover {
  background: var(--color-accent);
  color: var(--color-surface);
  transform: translateY(-1px);
}
```

#### `.btn-social`
For social media and share buttons:
```css
.btn-social {
  width: 40px;
  height: 40px;
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 8px;
}

.btn-social:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
```

#### `.btn-nav`
For navigation elements:
```css
.btn-nav {
  padding: 0.75rem 1.25rem;
  background: var(--color-surface);
  border-radius: 8px;
}

.btn-nav:hover {
  transform: translateY(-1px);
}
```

### Size Variants

#### `.btn-sm`
Small button:
```css
.btn-sm {
  padding: 0.5rem 1rem;
  font-size: 0.875rem;
  border-radius: 8px;
}
```

#### `.btn-md`
Medium button:
```css
.btn-md {
  padding: 0.75rem 1.5rem;
  font-size: 0.95rem;
  border-radius: 10px;
}
```

#### `.btn-lg`
Large button:
```css
.btn-lg {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  border-radius: 14px;
}
```

## Usage Examples

### Primary Actions
```html
<a href="/" class="btn btn-primary">Go Home</a>
<button class="btn btn-primary">Submit</button>
```

### Secondary Actions
```html
<a href="/blog" class="btn btn-secondary">Browse Articles</a>
<button class="btn btn-outline">Cancel</button>
```

### Tags and Links
```html
<span class="btn-link">TypeScript</span>
<a href="/blog" class="btn-link">Latest Articles</a>
```

### Social/Share Buttons
```html
<button class="btn-social" data-share="twitter">
  <svg>...</svg>
</button>
<a href="https://github.com" class="btn-social">
  <svg>...</svg>
</a>
```

### Navigation
```html
<a href="/next-post" class="btn-nav">
  <svg>...</svg>
  <span>Next Post</span>
</a>
```

## Component Updates

### Updated Components
- ✅ **404 Page**: Updated to use `btn-primary`, `btn-secondary`, `btn-link`
- ✅ **Homepage**: Updated to use `btn-primary`, `btn-secondary`
- ✅ **BlogPost Layout**: Updated tags to `btn-link`, share buttons to `btn-social`
- ✅ **BlogCard**: Updated tags to `btn-link`
- ✅ **About Page**: Updated tech tags to `btn-link`
- ✅ **Contact Page**: Updated email link to `btn btn-primary`
- ✅ **SocialLinks**: Updated to use `btn-social`
- ✅ **BaseLayout Footer**: Updated footer links to `btn-social`
- ✅ **Navigation**: Updated timing and transforms for consistency
- ✅ **Blog Index**: Updated stat items for consistent animations

### Animation Consistency
All components now use:
- **Transition**: `200ms ease`
- **Primary transform**: `translateY(-2px)` 
- **Secondary transform**: `translateY(-1px)`
- **Active state**: `translateY(0)` with `100ms` duration

## Accessibility Features

### Focus Management
```css
.btn:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

### Reduced Motion Support
```css
@media (prefers-reduced-motion: reduce) {
  .btn, .btn-link, .btn-social, .btn-nav {
    transition: none !important;
    transform: none !important;
  }
}
```

### High Contrast Support
```css
@media (prefers-contrast: high) {
  .btn {
    border-width: 2px;
  }
}
```

### Disabled States
```css
.btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
  transform: none !important;
}
```

## Responsive Design

### Mobile Optimizations
```css
@media (max-width: 768px) {
  .btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.95rem;
  }
}

@media (max-width: 480px) {
  .btn-group .btn {
    flex: 1;
    justify-content: center;
  }
}
```

## Performance Benefits

### Removed Heavy Effects
- ❌ `backdrop-filter: blur()` 
- ❌ Complex `cubic-bezier()` animations
- ❌ Multiple conflicting transitions
- ❌ Glass morphism effects
- ❌ Heavy box-shadow animations

### Optimized Animations
- ✅ Simple `ease` transitions
- ✅ Consistent `200ms` timing
- ✅ Lightweight transforms
- ✅ Reduced paint operations
- ✅ Better browser performance

## Implementation Details

### File Structure
```
src/
├── styles/
│   ├── components/
│   │   └── buttons.css      # Unified button system
│   └── global.css           # Imports button system
└── components/
    ├── Navigation.astro     # Updated for consistency
    ├── SocialLinks.astro    # Uses btn-social
    └── BlogCard.astro       # Uses btn-link for tags
```

### Import Order
The button system is imported at the top of `global.css`:
```css
/* Import unified button system */
@import './components/buttons.css';
```

## Future Maintenance

### Adding New Button Variants
1. Add new class to `buttons.css`
2. Follow established naming convention: `.btn-[variant]`
3. Use consistent timing: `200ms ease`
4. Use appropriate transform values
5. Test across all devices and themes

### Extending the System
- Button groups: `.btn-group`, `.btn-group--center`
- Icon buttons: `.btn-icon`
- Loading states: `.btn--loading`
- Button combinations: `.btn.btn-lg.btn-primary`

## Migration Checklist

- [x] Create unified button system file
- [x] Import system in global.css
- [x] Update all page components
- [x] Update all layout components
- [x] Update all standalone components
- [x] Remove old button styles
- [x] Test build process
- [x] Verify accessibility features
- [x] Test responsive behavior
- [x] Validate theme compatibility

## Result

The unified button system provides:
- **Consistent user experience** across all interactions
- **Improved performance** through simplified animations
- **Better maintainability** with centralized styles
- **Enhanced accessibility** with proper focus states
- **Responsive design** that works on all devices
- **Theme compatibility** using CSS custom properties

All button interactions now feel cohesive and professional, supporting the overall design language of the Reverie blog.