export const LOCALE_STORAGE_KEY = 'obsidian.locale';
const supportedLocales = ['en', 'zh', 'ja', 'ko'];

export function isSupportedLocale(locale) {
  return supportedLocales.includes(locale);
}

export function detectLocale(browserLanguage = '') {
  const language = browserLanguage.toLowerCase();
  if (/^zh-(tw|hk|mo)(-|$)/.test(language)) return 'zh';
  if (/^ja(-|$)/.test(language)) return 'ja';
  if (/^ko(-|$)/.test(language)) return 'ko';
  return 'en';
}

export function loadLocale(browserLanguage, getStorage = () => window.localStorage) {
  try {
    const saved = getStorage().getItem(LOCALE_STORAGE_KEY);
    if (isSupportedLocale(saved)) return saved;
  } catch {
    // Storage can be unavailable; browser language remains a safe fallback.
  }
  return detectLocale(browserLanguage);
}

export function saveLocale(locale, getStorage = () => window.localStorage) {
  if (!isSupportedLocale(locale)) return;
  try {
    getStorage().setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // Changing the current language must still work when persistence is blocked.
  }
}
