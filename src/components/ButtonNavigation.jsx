import React, { useState, useEffect, useRef } from 'react';
import '/src/styles/ButtonNavigation.css';
import { useTranslation } from '../i18n/LanguageContext';

const ButtonNavigation = ({ currentPage, isLightboxOpen }) => {
  // console.info("current: ", currentPage);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigationRef = useRef(null);
  const buttonRefs = useRef({});
  const { t } = useTranslation();

  const pages = [
    { name: 'cover', path: '#cover', label: t.nav.cover },
    { name: 'profile', path: '#profile', label: t.nav.profile },
    { name: 'social', path: '#social', label: t.nav.social },
    { name: 'event', path: '#event', label: t.nav.event },
    { name: 'commission', path: '#commission', label: t.nav.commission }
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (navigationRef.current && currentPage) {
      const activeButton = buttonRefs.current[currentPage];
      if (activeButton) {
        const container = navigationRef.current;
        const containerWidth = container.clientWidth;
        const buttonLeft = activeButton.offsetLeft;
        const buttonWidth = activeButton.clientWidth;
        const scrollLeft = buttonLeft - (containerWidth / 2) + (buttonWidth / 2);
        
        container.scrollTo({
          left: scrollLeft,
          behavior: 'smooth'
        });
      }
    }
  }, [currentPage]);

  // 在 Cover 頁面或 lightbox 打開時不顯示導航
  if (!isMobile || currentPage === 'cover' || isLightboxOpen) return null;

  const scrollToElement = (element) => {
    const startPosition = window.pageYOffset;
    const targetPosition = element.offsetTop;
    const distance = targetPosition - startPosition;
    const duration = 500;
    let start = null;

    const animation = (currentTime) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      
      const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
      const easedProgress = easeInOutCubic(progress);
      
      window.scrollTo(0, startPosition + distance * easedProgress);
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (path) => {
    const targetId = path.substring(1);
    const element = document.getElementById(targetId);
    
    if (element) {
      scrollToElement(element);
    }
  };

  return (
    <div className="button-navigation" ref={navigationRef}>
      {pages.map((page) => (
        <button
          key={page.name}
          ref={el => buttonRefs.current[page.name.toLowerCase()] = el}
          className={`nav-button ${currentPage === page.name.toLowerCase() ? 'active' : ''}`}
          onClick={() => handleClick(page.path)}
        >
          {page.label}
        </button>
      ))}
    </div>
  );
};

export default ButtonNavigation;