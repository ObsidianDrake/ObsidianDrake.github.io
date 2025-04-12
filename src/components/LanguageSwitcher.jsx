import React from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useTranslation();
  
  return (
    <div className="language-switcher">
      <button 
        className={`lang-btn ${locale === 'en' ? 'active' : ''}`} 
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button 
        className={`lang-btn ${locale === 'zh' ? 'active' : ''}`} 
        onClick={() => changeLanguage('zh')}
      >
        中文
      </button>
    </div>
  );
};

export default LanguageSwitcher; 