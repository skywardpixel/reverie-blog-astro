# Blog Migration Guide

This guide will help you migrate content from your existing blog to the new Skyward Blog built with Astro.

## Quick Migration

If you have your old blog in `/Users/kyleyan/Developer/skyward-next`, run:

```bash
npm install
npm run migrate -- --source /Users/kyleyan/Developer/skyward-next
```

## Manual Migration Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Migration Script

The migration script can handle various blog formats:

```bash
# Basic usage
npm run migrate -- --source /path/to/old/blog

# With custom output directory
npm run migrate -- --source /path/to/old/blog --output src/content/blog

# Get help
npm run migrate -- --help
```

### 3. Migration Script Features

The script automatically:

- ✅ Converts `.md`, `.mdx`, and `.txt` files to Astro MDX format
- ✅ Extracts and converts frontmatter metadata
- ✅ Generates SEO-friendly descriptions from content
- ✅ Creates appropriate tags based on content and existing metadata
- ✅ Handles various date formats
- ✅ Converts image paths to work with Astro
- ✅ Creates URL-friendly slugs
- ✅ Preserves draft status

### 4. Supported Frontmatter Fields

The script recognizes these common frontmatter fields:

**Input formats:**
```yaml
# Various date formats
date: 2024-01-15
publishDate: "January 15, 2024"
created: 2024/01/15

# Title and content
title: "Your Post Title"
description: "Post description"
excerpt: "Post excerpt"

# Images
heroImage: "/images/hero.jpg"
image: "/images/cover.jpg"

# Categorization
tags: ["javascript", "web development"]
categories: ["tech", "tutorial"]

# Status
draft: false
published: true
```

**Output format (Astro MDX):**
```yaml
---
title: 'Your Post Title'
description: 'Generated or existing description'
publishDate: 2024-01-15
updatedDate: 2024-02-01  # Optional
heroImage: '/images/blog/hero.jpg'
tags: ['javascript', 'web development', 'tech']
draft: false
---
```

### 5. Post-Migration Steps

After running the migration:

1. **Review migrated files** in `src/content/blog/`
2. **Copy images** to `public/images/blog/` directory
3. **Update image paths** in posts if needed
4. **Test the build**: `npm run build`
5. **Preview locally**: `npm run dev`

### 6. Manual Content Migration

If you prefer to migrate posts manually:

#### Create New Post

1. Create a new `.mdx` file in `src/content/blog/`
2. Use this template:

```mdx
---
title: 'Your Post Title'
description: 'A brief description for SEO and previews'
publishDate: 2024-01-15
heroImage: '/images/blog/hero.jpg'  # Optional
tags: ['tag1', 'tag2']
draft: false
---

Your content here...
```

#### Frontmatter Fields

- `title` (required): Post title
- `description` (required): SEO description (150-160 characters)
- `publishDate` (required): Publication date (YYYY-MM-DD)
- `heroImage` (optional): Hero image URL
- `tags` (optional): Array of tags for categorization
- `draft` (optional): Set to `true` to hide from production
- `updatedDate` (optional): Last update date

### 7. Image Migration

For images:

1. Copy images to `public/images/blog/`
2. Reference them in posts: `![Alt text](/images/blog/image.jpg)`
3. Hero images should be at least 1200px wide for best results

### 8. Common Issues & Solutions

**Issue: "Collection blog does not exist"**
- Solution: Make sure you have at least one `.mdx` file in `src/content/blog/`

**Issue: Build errors with frontmatter**
- Solution: Check that all required fields are present and properly formatted

**Issue: Images not loading**
- Solution: Ensure images are in `public/images/blog/` and paths start with `/images/blog/`

**Issue: Dates not parsing correctly**
- Solution: Use YYYY-MM-DD format in frontmatter

### 9. Advanced Migration

For complex migrations, you can modify the migration script:

1. Edit `scripts/migrate-posts.js`
2. Customize the `convertMarkdownToMDX` function
3. Add custom processing for your specific format

### 10. Testing Migration

After migration:

```bash
# Check for build errors
npm run build

# Start development server
npm run dev

# Visit http://localhost:4321 to test
```

### 11. Backup

Before running migration:

```bash
# Backup existing content (if any)
cp -r src/content/blog src/content/blog.backup
```

## Support

If you encounter issues during migration:

1. Check the console output for specific error messages
2. Verify your source directory contains markdown files
3. Ensure all required dependencies are installed
4. Review the generated files for formatting issues

The migration script is designed to handle most common blog formats, but you may need to manually adjust some posts based on your specific setup.