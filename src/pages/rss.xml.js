import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const posts = await getCollection('blog');

  // Filter out draft posts and sort by date
  const publishedPosts = posts
    .filter(post => !post.data.draft)
    .sort(
      (a, b) => b.data.publishDate.valueOf() - a.data.publishDate.valueOf()
    );

  return rss({
    title: 'Skyward Blog',
    description:
      'Personal thoughts, stories, and reflections from my life and experiences.',
    site: context.site || 'https://skyward-blog.netlify.app',
    items: publishedPosts.map(post => ({
      title: post.data.title,
      pubDate: post.data.publishDate,
      description: post.data.description,
      link: `/blog/${post.slug}/`,
      categories: post.data.tags || [],
      author: 'Skyward Blog',
      customData: post.data.updatedDate
        ? `<lastBuildDate>${post.data.updatedDate.toUTCString()}</lastBuildDate>`
        : undefined,
    })),
    customData: `
      <language>en-us</language>
      <managingEditor>hello@skyward-blog.com</managingEditor>
      <webMaster>hello@skyward-blog.com</webMaster>
      <docs>https://www.rssboard.org/rss-specification</docs>
      <generator>Astro v${process.env.npm_package_version || '5.0.0'}</generator>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <ttl>60</ttl>
    `,
    stylesheet: '/rss/pretty-feed-v3.xsl',
  });
}
