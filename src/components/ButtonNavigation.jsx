import React, { useState, useEffect } from 'react';
import '/src/styles/ButtonNavigation.css';

const ButtonNavigation = ({ currentPage, isLightboxOpen }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 在 Cover 頁面或 lightbox 打開時不顯示導航
  if (!isMobile || currentPage === 'cover' || isLightboxOpen) return null;

  const pages = [
    { name: 'Cover', path: '#cover' },
    { name: 'Profile', path: '#profile' },
    { name: 'Social', path: '#social' },
    { name: 'Event', path: '#event' },
    { name: 'Commission', path: '#commission' }
  ];

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
    <div className="button-navigation">
      {pages.map((page) => (
        <button
          key={page.name}
          className={`nav-button ${currentPage === page.name.toLowerCase() ? 'active' : ''}`}
          onClick={() => handleClick(page.path)}
        >
          {page.name}
        </button>
      ))}
    </div>
  );
};

export default ButtonNavigation; 