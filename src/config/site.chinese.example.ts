// Site Configuration - Chinese Example
// 网站配置 - 中文示例
// This file demonstrates how to configure the site with Chinese content
// 此文件演示如何使用中文内容配置网站

export const siteConfig = {
  // Basic Site Information / 基本网站信息
  title: '天空之境',
  description: '记录思考、分享见解、探索生活的个人博客',
  author: '张三',
  url: 'https://example.com',

  // Social Links / 社交链接
  social: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    email: 'hello@example.com',
  },

  // Theme (must match a key from themes)
  theme: 'sageGreen',
} as const;

// Alternative configurations for testing
// 用于测试的替代配置

export const alternativeConfigs = {
  // Tech blog example / 技术博客示例
  techBlog: {
    title: '代码与咖啡',
    description: '分享编程心得、技术见解与开源项目',
    author: '李工程师',
  },

  // Creative writing blog / 创意写作博客
  creativeBlog: {
    title: '墨染时光',
    description: '用文字记录生活，用故事温暖心灵',
    author: '王作家',
  },

  // Photography blog / 摄影博客
  photoBlog: {
    title: '光影瞬间',
    description: '捕捉生活中的美好，定格时光里的感动',
    author: '陈摄影师',
  },

  // Travel blog / 旅行博客
  travelBlog: {
    title: '远方的诗',
    description: '行走在路上，发现世界的美好与不同',
    author: '赵旅行者',
  },

  // Food blog / 美食博客
  foodBlog: {
    title: '味蕾记忆',
    description: '探索美食的世界，分享烹饪的乐趣',
    author: '周美食家',
  },
};

// Utility functions
// Type definitions for better TypeScript support
export type SiteConfig = typeof siteConfig;
