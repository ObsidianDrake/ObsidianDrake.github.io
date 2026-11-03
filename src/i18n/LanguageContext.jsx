import React, { createContext, useContext, useState, useEffect } from 'react';
import en from './locales/en';
import zh from './locales/zh';
import ja from './locales/ja';
import ko from './locales/ko';
import { isSupportedLocale, loadLocale, saveLocale } from './localePreference';

// Define available languages
const languages = {
  en,
  zh,
  ja,
  ko
};

// Create language context
const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  const [locale, setLocale] = useState(() => loadLocale(navigator.language || navigator.userLanguage || ''));

  // Apply the chosen language to typography and accessibility.
  useEffect(() => {
    // Apply language-specific font classes to the document body
    document.body.classList.remove('en', 'zh', 'ja', 'ko');
    document.body.classList.add(locale);
    
    // Set lang attribute for accessibility
    document.documentElement.lang = locale === 'zh' ? 'zh-Hant' : locale;
  }, [locale]);
  
  // Function to change language
  const changeLanguage = (newLocale) => {
    if (isSupportedLocale(newLocale)) {
      setLocale(newLocale);
      saveLocale(newLocale);
    }
  };
  
  return (
    <LanguageContext.Provider 
      value={{ 
        locale,
        t: languages[locale],
        changeLanguage 
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

// Custom hook to use translations
export const useTranslation = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useTranslation must be used within a LanguageProvider');
  }
  
  return context;
};
