import { format } from 'date-fns';
import { zhCN, enUS } from 'date-fns/locale';
import { getCurrentLanguage } from '../i18n';

// Get the appropriate date-fns locale based on the site language
function getDateLocale() {
  const language = getCurrentLanguage();
  return language === 'zh' ? zhCN : enUS;
}

// Format date with language-appropriate format and locale
export function formatDate(date: Date): string {
  const language = getCurrentLanguage();
  const locale = getDateLocale();

  if (language === 'zh') {
    // Chinese format: 2024 年 1 月 15 日 (with proper spacing)
    return format(date, 'yyyy 年 M 月 d 日', { locale });
  } else {
    // English format: January 15, 2024
    return format(date, 'MMMM dd, yyyy', { locale });
  }
}

// Format date for blog post meta (slightly more compact)
export function formatPostDate(date: Date): string {
  const language = getCurrentLanguage();
  const locale = getDateLocale();

  if (language === 'zh') {
    // Chinese format: 2024 年 1 月 15 日 (with proper spacing)
    return format(date, 'yyyy 年 M 月 d 日', { locale });
  } else {
    // English format: Jan 15, 2024
    return format(date, 'MMM dd, yyyy', { locale });
  }
}

// Format date for card displays (more readable)
export function formatCardDate(date: Date): string {
  const language = getCurrentLanguage();
  const locale = getDateLocale();

  if (language === 'zh') {
    // Chinese format: 2024 年 1 月 15 日 (with proper spacing)
    return format(date, 'yyyy 年 M 月 d 日', { locale });
  } else {
    // English format: Jan 15, 2024
    return format(date, 'MMM dd, yyyy', { locale });
  }
}

// Get relative time (for future use)
export function getRelativeTime(date: Date): string {
  const language = getCurrentLanguage();
  const now = new Date();
  const diffInDays = Math.floor(
    (now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24)
  );

  if (language === 'zh') {
    if (diffInDays === 0) return '今天';
    if (diffInDays === 1) return '昨天';
    if (diffInDays < 7) return `${diffInDays}天前`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}周前`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)}个月前`;
    return `${Math.floor(diffInDays / 365)}年前`;
  } else {
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return 'Yesterday';
    if (diffInDays < 7) return `${diffInDays} days ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
    if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
    return `${Math.floor(diffInDays / 365)} years ago`;
  }
}
