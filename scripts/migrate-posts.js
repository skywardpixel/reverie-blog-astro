#!/usr/bin/env node

/**
 * Migration script for converting blog posts from various formats to Astro MDX
 *
 * Usage:
 *   node scripts/migrate-posts.js --source /path/to/old/blog --output src/content/blog
 *   node scripts/migrate-posts.js --help
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import matter from 'gray-matter';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const config = {
  sourceDir: '',
  outputDir: path.join(__dirname, '../src/content/blog'),
  supportedExtensions: ['.md', '.mdx', '.txt'],
  imageDir: path.join(__dirname, '../public/images/blog'),
};

// Helper functions
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-');
}

function parseDate(dateStr) {
  if (!dateStr) return new Date();

  // Try various date formats
  const formats = [
    /^\d{4}-\d{2}-\d{2}$/, // YYYY-MM-DD
    /^\d{2}\/\d{2}\/\d{4}$/, // MM/DD/YYYY
    /^\d{4}\/\d{2}\/\d{2}$/, // YYYY/MM/DD
    /^\w+ \d{1,2}, \d{4}$/, // Month DD, YYYY
  ];

  const date = new Date(dateStr);
  return isNaN(date.getTime()) ? new Date() : date;
}

function formatDate(date) {
  return date.toISOString().split('T')[0];
}

function extractTags(content, frontmatter) {
  const tags = new Set();

  // From frontmatter
  if (frontmatter.tags) {
    if (Array.isArray(frontmatter.tags)) {
      frontmatter.tags.forEach(tag => tags.add(tag));
    } else if (typeof frontmatter.tags === 'string') {
      frontmatter.tags.split(',').forEach(tag => tags.add(tag.trim()));
    }
  }

  if (frontmatter.categories) {
    if (Array.isArray(frontmatter.categories)) {
      frontmatter.categories.forEach(cat => tags.add(cat));
    }
  }

  // Common tech terms that might appear in content
  const techTerms = [
    'javascript',
    'typescript',
    'react',
    'vue',
    'astro',
    'css',
    'html',
    'nodejs',
    'python',
    'web development',
    'frontend',
    'backend',
    'design',
    'ui/ux',
    'performance',
    'accessibility',
    'seo',
  ];

  const contentLower = content.toLowerCase();
  techTerms.forEach(term => {
    if (contentLower.includes(term)) {
      tags.add(term.replace('/', '-'));
    }
  });

  return Array.from(tags).slice(0, 5); // Limit to 5 tags
}

function generateDescription(content, frontmatter) {
  if (frontmatter.description) return frontmatter.description;
  if (frontmatter.excerpt) return frontmatter.excerpt;

  // Extract first paragraph
  const paragraphs = content.split('\n\n');
  for (const paragraph of paragraphs) {
    const cleaned = paragraph
      .replace(/^#+\s+/, '') // Remove headers
      .replace(/!\[.*?\]\(.*?\)/g, '') // Remove images
      .replace(/\[([^\]]+)\]\([^\)]+\)/g, '$1') // Convert links to text
      .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
      .replace(/\*(.*?)\*/g, '$1') // Remove italics
      .replace(/`(.*?)`/g, '$1') // Remove inline code
      .trim();

    if (cleaned.length > 50 && cleaned.length < 300) {
      return cleaned.substring(0, 160) + (cleaned.length > 160 ? '...' : '');
    }
  }

  return 'A blog post about technology and development.';
}

async function convertMarkdownToMDX(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf-8');
    const { data: frontmatter, content: markdownContent } = matter(content);

    // Extract metadata
    const title =
      frontmatter.title || path.basename(filePath, path.extname(filePath));
    const publishDate = parseDate(
      frontmatter.date || frontmatter.publishDate || frontmatter.created
    );
    const updatedDate = frontmatter.updated
      ? parseDate(frontmatter.updated)
      : null;
    const description = generateDescription(markdownContent, frontmatter);
    const tags = extractTags(markdownContent, frontmatter);
    const slug = frontmatter.slug || slugify(title);

    // Create new frontmatter
    const newFrontmatter = {
      title,
      description,
      publishDate: formatDate(publishDate),
      ...(updatedDate && { updatedDate: formatDate(updatedDate) }),
      ...(frontmatter.heroImage && { heroImage: frontmatter.heroImage }),
      ...(frontmatter.image &&
        !frontmatter.heroImage && { heroImage: frontmatter.image }),
      tags,
      draft: frontmatter.draft || false,
    };

    // Process content
    let processedContent = markdownContent;

    // Convert image paths if needed
    processedContent = processedContent.replace(
      /!\[(.*?)\]\((?!https?:\/\/)([^)]+)\)/g,
      '![$1](/images/blog/$2)'
    );

    // Add import statements for MDX components if needed
    let imports = '';
    if (
      processedContent.includes('<Callout') ||
      processedContent.includes(':::')
    ) {
      imports += "import Callout from '../../components/Callout.astro';\n";
    }

    // Create final content
    const finalContent = [
      '---',
      ...Object.entries(newFrontmatter).map(([key, value]) => {
        if (Array.isArray(value)) {
          return `${key}: [${value.map(v => `'${v}'`).join(', ')}]`;
        }
        return `${key}: ${typeof value === 'string' ? `'${value}'` : value}`;
      }),
      '---',
      imports ? '\n' + imports : '',
      '',
      processedContent,
    ].join('\n');

    return { slug, content: finalContent, metadata: newFrontmatter };
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return null;
  }
}

async function migratePost(filePath, outputDir) {
  const result = await convertMarkdownToMDX(filePath);
  if (!result) return false;

  const outputPath = path.join(outputDir, `${result.slug}.mdx`);

  try {
    await fs.writeFile(outputPath, result.content, 'utf-8');
    console.log(`✅ Migrated: ${path.basename(filePath)} → ${result.slug}.mdx`);
    return true;
  } catch (error) {
    console.error(`❌ Failed to write ${outputPath}:`, error.message);
    return false;
  }
}

async function findMarkdownFiles(dir) {
  const files = [];

  try {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        // Recursively search subdirectories
        const subFiles = await findMarkdownFiles(fullPath);
        files.push(...subFiles);
      } else if (
        config.supportedExtensions.includes(path.extname(entry.name))
      ) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory ${dir}:`, error.message);
  }

  return files;
}

async function main() {
  const args = process.argv.slice(2);

  // Parse command line arguments
  if (args.includes('--help') || args.includes('-h')) {
    console.log(`
Migration Script for Skyward Blog
Usage: node scripts/migrate-posts.js [options]

Options:
  --source <path>     Source directory containing blog posts (required)
  --output <path>     Output directory for converted posts (default: src/content/blog)
  --help, -h          Show this help message

Examples:
  node scripts/migrate-posts.js --source /Users/kyleyan/Developer/skyward-next/posts
  node scripts/migrate-posts.js --source ./old-blog --output ./src/content/blog
    `);
    process.exit(0);
  }

  const sourceIndex = args.indexOf('--source');
  const outputIndex = args.indexOf('--output');

  if (sourceIndex === -1 || sourceIndex === args.length - 1) {
    console.error('❌ Error: --source directory is required');
    console.log('Use --help for usage information');
    process.exit(1);
  }

  config.sourceDir = args[sourceIndex + 1];
  if (outputIndex !== -1 && outputIndex !== args.length - 1) {
    config.outputDir = args[outputIndex + 1];
  }

  console.log('🚀 Starting blog post migration...');
  console.log(`📁 Source: ${config.sourceDir}`);
  console.log(`📁 Output: ${config.outputDir}`);

  // Ensure output directory exists
  try {
    await fs.mkdir(config.outputDir, { recursive: true });
    await fs.mkdir(config.imageDir, { recursive: true });
  } catch (error) {
    console.error('❌ Error creating output directories:', error.message);
    process.exit(1);
  }

  // Find all markdown files
  const markdownFiles = await findMarkdownFiles(config.sourceDir);

  if (markdownFiles.length === 0) {
    console.log('⚠️  No markdown files found in source directory');
    process.exit(0);
  }

  console.log(`📝 Found ${markdownFiles.length} markdown files`);

  // Process each file
  let successCount = 0;
  for (const filePath of markdownFiles) {
    const success = await migratePost(filePath, config.outputDir);
    if (success) successCount++;
  }

  console.log('\n✨ Migration complete!');
  console.log(
    `📊 Successfully migrated ${successCount} out of ${markdownFiles.length} files`
  );

  if (successCount > 0) {
    console.log('\n📋 Next steps:');
    console.log('1. Review the migrated files in src/content/blog/');
    console.log('2. Update any image paths if needed');
    console.log('3. Run "npm run build" to check for any issues');
    console.log('4. Test the blog locally with "npm run dev"');
  }
}

// Handle uncaught errors
process.on('unhandledRejection', error => {
  console.error('❌ Unhandled error:', error);
  process.exit(1);
});

// Run the migration
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}
