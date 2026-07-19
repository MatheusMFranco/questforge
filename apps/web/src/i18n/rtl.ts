import type { LanguageCode } from './languages';

export const rtlLanguages: readonly LanguageCode[] = ['ar'];

export function isRtl(language: string): boolean {
  return rtlLanguages.includes(language.split('-')[0] as LanguageCode);
}
