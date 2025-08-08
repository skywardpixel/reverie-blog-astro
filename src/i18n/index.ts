// System UI Translations
// These are UI labels, navigation items, and system messages that should be
// translated automatically based on the site language setting.

export const ui = {
  en: {
    // Navigation
    home: 'Home',
    blog: 'Blog',
    about: 'About',

    // Common UI labels
    posts: 'Posts',
    tags: 'Tags',
    readMore: 'Read More',
    readMyPosts: 'Read My Posts',
    viewAllPosts: 'View All Posts',
    latestPosts: 'Latest Posts',
    updated: 'Updated',

    // Social & sharing
    github: 'GitHub',
    twitter: 'Twitter',
    email: 'Email',
    rssFeed: 'RSS Feed',
    shareOnTwitter: 'Share on Twitter',
    copyLink: 'Copy Link',

    // Accessibility labels
    ariaGithub: 'GitHub',
    ariaTwitter: 'Twitter',
    ariaEmail: 'Email',
    ariaRssFeed: 'RSS Feed',
    ariaShareTwitter: 'Share on Twitter',
    ariaCopyLink: 'Copy Link',

    // Sample content for theme previews
    sampleHeading: 'Sample Heading',
    sampleText:
      'This is a sample paragraph to show how content looks with this theme.',
    sampleLink: 'Sample Link',

    // Reading & time
    readingTime: 'min read',
    readingTimePrefix: '',
    readingTimeSuffix: 'min read',
    yearsWriting: 'Years<br />Writing',

    // Navigation actions
    backToHome: 'Back to Home',
    backToBlog: 'Back to Blog',
    goHome: 'Go Home',

    // Sharing & interaction
    share: 'Share',
    sharePost: 'Share this post',
    tableOfContents: 'Table of Contents',

    // States & messages
    emptyStateTitle: 'No posts yet',
    emptyStateText: 'Check back soon for new content!',

    // 404 page
    pageNotFoundTitle: 'Page Not Found',
    pageNotFoundDescription:
      "The page you're looking for seems to have drifted away into the digital ether. Let's help you find your way back to solid ground.",
    helpfulLinks: "Maybe you're looking for",
  },

  zh: {
    // Navigation
    home: '首页',
    blog: '博客',
    about: '关于',

    // Common UI labels
    posts: '篇文章',
    tags: '标签',
    readMore: '阅读更多',
    readMyPosts: '阅读我的文章',
    viewAllPosts: '查看所有文章',
    latestPosts: '最新文章',
    updated: '更新于',

    // Social & sharing
    github: 'GitHub',
    twitter: 'Twitter',
    email: '邮箱',
    rssFeed: 'RSS 订阅',
    shareOnTwitter: '分享到 Twitter',
    copyLink: '复制链接',

    // Accessibility labels
    ariaGithub: 'GitHub',
    ariaTwitter: 'Twitter',
    ariaEmail: '邮箱',
    ariaRssFeed: 'RSS 订阅',
    ariaShareTwitter: '分享到 Twitter',
    ariaCopyLink: '复制链接',

    // Sample content for theme previews
    sampleHeading: '示例标题',
    sampleText: '这是一个示例段落，展示此主题下内容的显示效果。',
    sampleLink: '示例链接',

    // Reading & time
    readingTime: '分钟阅读',
    readingTimePrefix: '约',
    readingTimeSuffix: '分钟阅读',
    yearsWriting: '年写作',

    // Navigation actions
    backToHome: '返回首页',
    backToBlog: '返回博客',
    goHome: '返回首页',

    // Sharing & interaction
    share: '分享',
    sharePost: '分享这篇文章',
    tableOfContents: '目录',

    // States & messages
    emptyStateTitle: '暂无文章',
    emptyStateText: '请稍后查看新内容！',

    // 404 page
    pageNotFoundTitle: '页面未找到',
    pageNotFoundDescription:
      '您寻找的页面似乎已经消失在数字虚空中。让我们帮您找到回到安全地带的路。',
    helpfulLinks: '也许你在寻找',
  },
} as const;

export type Language = keyof typeof ui;
export type UIKey = keyof typeof ui.en;

// Utility function to get translations
export function getUITranslation(language: Language, key: UIKey): string {
  return ui[language][key];
}
