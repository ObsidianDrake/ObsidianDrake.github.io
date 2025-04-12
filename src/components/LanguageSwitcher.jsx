import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from '../i18n/LanguageContext';
import '../styles/LanguageSwitcher.css';

const LanguageSwitcher = () => {
  const { locale, changeLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const langSwitcherRef = useRef(null);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // 點擊外部區域時收起語言切換器
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langSwitcherRef.current && !langSwitcherRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // 處理語言切換
  const handleLanguageChange = (newLocale) => {
    changeLanguage(newLocale);
    setIsOpen(false); // 選擇語言後收起選項
  };

  return (
    <div ref={langSwitcherRef} className={`language-switcher ${isOpen ? 'open' : 'collapsed'}`}>
      <button 
        className="globe-icon"
        onClick={toggleDropdown}
        aria-label="Toggle language menu"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
          className="globe-svg"
        >
          {/* 外部輪廓 */}
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeOpacity="0.7"></circle>
          
          {/* 經線 */}
          <path d="M12 2a15 15 0 0 0 0 20" stroke="currentColor" strokeOpacity="0.4"></path>
          <path d="M12 2a15 15 0 0 1 0 20" stroke="currentColor" strokeOpacity="0.4"></path>
          <path d="M2 12h20" stroke="currentColor" strokeOpacity="0.4"></path>
          
          {/* 弧線 */}
          <path d="M2 7h20" stroke="currentColor" strokeOpacity="0.3"></path>
          <path d="M2 17h20" stroke="currentColor" strokeOpacity="0.3"></path>
          
          {/* 大陸輪廓 - 簡化版 */}
          <path d="M8 6.5c1-0.5 2-0.5 3-0.2s2 1 3 0.5 2-1 3-0.8c0.6 0.3 1 1 1 2v1c0 1-0.5 1.5-1 2s-1 1-1 2 0.5 1.5 0 2-1 0.5-2 0.5-2-0.5-3-0.5-2 0.5-2.5 0-0.5-1-0.5-2 0-1.5-0.5-2-0.5-1 0-2 1-2 0.5-3z" 
            fill="currentColor" fillOpacity="0.15" stroke="none"></path>
          <path d="M16 13.5c0.5 0.5 0.5 1.5 0 2.5s-1 1.5-2 1.5-1.5-0.5-1.5-1.5 0.5-2 1.5-2.5 1.5 0 2 0z" 
            fill="currentColor" fillOpacity="0.1" stroke="none"></path>
        </svg>
      </button>
      
      {isOpen && (
        <div className="language-options">
          <button 
            className={`lang-btn ${locale === 'en' ? 'active' : ''}`} 
            onClick={() => handleLanguageChange('en')}
          >
            EN
          </button>
          <button 
            className={`lang-btn ${locale === 'zh' ? 'active' : ''}`} 
            onClick={() => handleLanguageChange('zh')}
          >
            中文
          </button>
          <button 
            className={`lang-btn ${locale === 'ja' ? 'active' : ''}`} 
            onClick={() => handleLanguageChange('ja')}
          >
            日本語
          </button>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher; 