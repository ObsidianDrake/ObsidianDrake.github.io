import React, { createContext, useContext, useState, useEffect } from 'react';
import en from './locales/en';
import zh from './locales/zh';
import ja from './locales/ja';

// Define available languages
const languages = {
  en,
  zh,
  ja
};

// Create language context
const LanguageContext = createContext();

// Language provider component
export const LanguageProvider = ({ children }) => {
  // Function to detect user's locale
  const detectLocale = () => {
    const userLanguage = navigator.language || navigator.userLanguage;
    
    // Check if user is from Taiwan or using zh-TW language
    if (userLanguage.startsWith('zh-TW') || userLanguage === 'zh-HK' || userLanguage === 'zh-MO') {
      return 'zh';
    }
    
    // Check if user is from Japan or using Japanese language
    if (userLanguage.startsWith('ja') || userLanguage === 'ja-JP') {
      return 'ja';
    }
    
    // For all other locales, use English
    return 'en';
  };
  
  const [locale, setLocale] = useState(detectLocale());
  const [translations, setTranslations] = useState(languages[locale]);
  
  // Update translations when locale changes
  useEffect(() => {
    setTranslations(languages[locale]);
    
    // Apply language-specific font classes to the document body
    document.body.classList.remove('en', 'zh', 'ja');
    document.body.classList.add(locale);
    
    // Set lang attribute for accessibility
    document.documentElement.lang = locale;
  }, [locale]);
  
  // Function to change language
  const changeLanguage = (newLocale) => {
    if (languages[newLocale]) {
      setLocale(newLocale);
    }
  };
  
  return (
    <LanguageContext.Provider 
      value={{ 
        locale,
        t: translations,
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