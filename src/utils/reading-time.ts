import { getUITranslation } from '../i18n';
import { getLanguage } from './config';

export function calculateReadingTime(content: string): string {
  // Remove HTML tags and markdown syntax
  const cleanContent = content
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .replace(/```[\s\S]*?```/g, '') // Remove code blocks
    .replace(/`[^`]*`/g, '') // Remove inline code
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1') // Replace markdown links with text
    .replace(/[#*_~`]/g, '') // Remove markdown formatting
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();

  // Count Chinese characters and English words separately
  const chineseChars = (cleanContent.match(/[\u4e00-\u9fff]/g) || []).length;
  const englishWords = cleanContent
    .replace(/[\u4e00-\u9fff]/g, '') // Remove Chinese characters
    .split(/\s+/)
    .filter(word => word.length > 0).length;

  // Reading speed assumptions:
  // - Chinese: ~300 characters per minute
  // - English: ~200 words per minute
  const chineseReadingTime = chineseChars / 300;
  const englishReadingTime = englishWords / 200;

  const totalMinutes = Math.ceil(chineseReadingTime + englishReadingTime);

  // Ensure minimum 1 minute reading time
  const readingMinutes = Math.max(1, totalMinutes);

  const lang = getLanguage();
  const prefix = getUITranslation(lang, 'readingTimePrefix');
  const suffix = getUITranslation(lang, 'readingTimeSuffix');

  if (prefix) {
    return `${prefix}${readingMinutes}${suffix}`;
  }

  return `${readingMinutes} ${suffix}`;
}

export function getWordCount(content: string): {
  total: number;
  chinese: number;
  english: number;
} {
  const cleanContent = content
    .replace(/<[^>]*>/g, '')
    .replace(/```[\s\S]*?```/g, '')
    .replace(/`[^`]*`/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/[#*_~`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  const chineseChars = (cleanContent.match(/[\u4e00-\u9fff]/g) || []).length;
  const englishWords = cleanContent
    .replace(/[\u4e00-\u9fff]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 0).length;

  return {
    total: chineseChars + englishWords,
    chinese: chineseChars,
    english: englishWords,
  };
}

export function detectPrimaryLanguage(content: string): 'zh' | 'en' | 'mixed' {
  const { chinese, english } = getWordCount(content);

  if (chinese === 0 && english > 0) return 'en';
  if (english === 0 && chinese > 0) return 'zh';

  // If both languages are present, determine which is primary
  const chineseRatio = chinese / (chinese + english);

  if (chineseRatio > 0.7) return 'zh';
  if (chineseRatio < 0.3) return 'en';

  return 'mixed';
}
