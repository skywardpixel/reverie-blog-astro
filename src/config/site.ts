// Site Configuration
// Modify these values to personalize your site.

// User Content Configuration
// This contains user-customizable content that should be configured per language
export const siteContent = {
  en: {
    // Site identity
    title: 'Reverie',
    description: 'Personal thoughts, stories, and life reflections',
    author: 'Your Name',

    // Hero content
    welcomeTo: 'Welcome to',
    heroDescription:
      'My personal space on the internet where I write about life, thoughts, and whatever catches my interest along the way.',
    welcomeDescription:
      'Welcome to my personal corner of the internet. Here I share thoughts about life, experiences, and whatever happens to be on my mind.',

    // Footer
    footerText: 'A personal blog built with care.',

    // About page content
    aboutSubtitle:
      'A personal space for thoughts, stories, and life reflections',
    welcomeTitle: 'Welcome',
    aboutContent:
      "This is my personal space where I share thoughts on life, experiences, and whatever catches my interest. It's a simple blog without a specific focus—just honest reflections and stories.",
    whatYouFind: "What You'll Find",
    aboutList1: 'Personal reflections and life experiences',
    aboutList2: 'Thoughts on books, movies, and music',
    aboutList3: 'Daily observations and random musings',
    aboutList4: 'Updates on projects and goals',
    thankYou:
      'Thanks for stopping by. Feel free to reach out if something resonates with you.',
    letsConnect: "Let's Connect",
    findMeOn: 'Find me on these platforms:',
    builtWith: 'Built With',

    // Meta descriptions
    aboutMetaDescription: 'Learn more about me and this personal blog',
    blogMetaDescription:
      'Personal thoughts, reflections, and stories from my life',
  },

  zh: {
    // Site identity
    title: '天空之境',
    description: '个人思考、故事与生活感悟',
    author: '你的名字',

    // Hero content
    welcomeTo: '欢迎来到',
    heroDescription:
      '我的个人网络空间，在这里我写下关于生活、思考以及引起我兴趣的一切。',
    welcomeDescription:
      '欢迎来到我的个人网络空间。在这里我分享关于生活、经历以及任何浮现在脑海中的思考。',

    // Footer
    footerText: '用心打造的个人博客。',

    // About page content
    aboutSubtitle: '记录思考、故事与生活感悟的个人空间',
    welcomeTitle: '欢迎',
    aboutContent:
      '这是我的个人空间，在这里我分享关于生活、经历以及任何引起我兴趣的思考。这是一个没有特定主题的简单博客——只是诚实的反思和故事。',
    whatYouFind: '你会发现什么',
    aboutList1: '个人反思和生活经历',
    aboutList2: '关于书籍、电影和音乐的思考',
    aboutList3: '日常观察和随想',
    aboutList4: '项目和目标的更新',
    thankYou: '感谢你的到访。如果有什么引起了你的共鸣，请随时联系。',
    letsConnect: '联系我',
    findMeOn: '在这些平台找到我：',
    builtWith: '技术栈',

    // Meta descriptions
    aboutMetaDescription: '了解更多关于我和这个个人博客',
    blogMetaDescription: '来自我生活的个人思考、反思和故事',
  },
} as const;

export const siteConfig = {
  // Technical configuration
  url: 'https://example.com',
  language: 'zh' as keyof typeof siteContent,
  theme: 'sageGreen',

  // Social Links
  social: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    email: 'hello@example.com',
  },
} as const;

// Type definitions for better TypeScript support
export type SiteConfig = typeof siteConfig;
