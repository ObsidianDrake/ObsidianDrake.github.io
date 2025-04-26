import React, { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-parallax';
import wideImage from '/src/assets/images/banner_wide.webp';
import desktopImage from '/src/assets/images/banner_ori.webp';
import mobileImage from '/src/assets/images/banner_mobile.webp';
import '/src/styles/Cover.css';
import { useTranslation } from '../i18n/LanguageContext';

const Cover = () => {
  const [bgImage, setBgImage] = useState(false);
  const titleRef = useRef(null);
  const { t } = useTranslation();

  const detectDevice = () => {
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight;
    const ratio = width / height;

    if (width <= 768) {
      setBgImage(mobileImage);
    } else if (ratio >= 2.5) {
      setBgImage(wideImage);
    } else {
      setBgImage(desktopImage);
    }
  };

  useEffect(() => {
    detectDevice();
    window.addEventListener('resize', detectDevice);
    return () => {
      window.removeEventListener('resize', detectDevice);
    };
  }, []);

  const scrollDown = () => {
    const profileElement = document.getElementById('profile');
    if (profileElement) {
      const startPosition = window.pageYOffset;
      const targetPosition = profileElement.offsetTop;
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
    }
  };

  return (
    <div className="cover">
      <Parallax
        bgImage={bgImage}
        className="img-container-cover"
        style={{ height: '100vh' }}
        strength={200}
        bgStyle={{ filter: 'brightness(0.9)' }}
      >
        {/* The inner div is needed to set the height */}
        <div style={{ height: '100vh' }} />
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">{t.cover.greeting}</p>
            <h1 className="title" ref={titleRef}>
              {t.cover.title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <p className="subtitle">{t.cover.subtitle} <a className="subtitle" href='https://atoama.cn/'>Atelier Amanojaku</a></p>
          </div>
          <button className="scroll-down-btn" onClick={scrollDown}>
            <span>{t.cover.scrollDown}</span>
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
