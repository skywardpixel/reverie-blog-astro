import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import {
  getSiteTitle,
  getSiteDescription,
  getSiteUrl,
  getAuthor,
  getLanguage,
  siteConfig,
} from '../utils/config';

export async function GET(context) {
  const posts = await getCollection('blog');

  // Filter out draft posts and sort by date
  const publishedPosts = posts
    .filter(post => !post.data.draft)
    .sort(
      (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
    );

  return rss({
    title: getSiteTitle(),
    description: getSiteDescription(),
    site: context.site || getSiteUrl(),
    items: publishedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
      author: getAuthor(),
      customData: post.data.updatedDate
        ? `<lastBuildDate>${post.data.updatedDate.toUTCString()}</lastBuildDate>`
        : undefined,
    })),
    customData: `
      <language>${getLanguage() === 'zh' ? 'zh-cn' : 'en-us'}</language>
      <managingEditor>${siteConfig.social.email}</managingEditor>
      <webMaster>${siteConfig.social.email}</webMaster>
      <docs>https://www.rssboard.org/rss-specification</docs>
      <generator>Astro v${process.env.npm_package_version || '5.0.0'}</generator>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <ttl>60</ttl>
    `,
    stylesheet: '/rss/pretty-feed-v3.xsl',
  });
}
