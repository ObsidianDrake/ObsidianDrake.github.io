import React from 'react';
import ultrawideImage from '/src/assets/images/banner_ultrawide.webp';
import wideImage from '/src/assets/images/banner_wide.webp';
import desktopImage from '/src/assets/images/banner_ori.webp';
import mobileImage from '/src/assets/images/banner_mobile.webp';
import '/src/styles/Cover.css';
import { useTranslation } from '../i18n/LanguageContext';

const Cover = () => {
  const { t } = useTranslation();

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
      <div className="img-container-cover">
        <picture className="cover-picture">
          <source media="(max-width: 767px)" srcSet={mobileImage} width="1200" height="1200" />
          <source media="(min-width: 768px) and (min-aspect-ratio: 2 / 1)" srcSet={ultrawideImage} width="2048" height="878" />
          <source media="(max-width: 1199px)" srcSet={desktopImage} width="1440" height="855" />
          <img src={wideImage} width="1920" height="1200" alt=""
            fetchPriority="high" className="cover-image" />
        </picture>
        <div className="hero-content">
          <div className="hero-text">
            <p className="greeting">{t.cover.greeting}</p>
            <h1 className="title">
              {t.cover.title.split('\n').map((line, idx) => (
                <React.Fragment key={idx}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h1>
            <p className="subtitle">{t.cover.subtitle} <a className="subtitle" href='https://www.atoama.com/'>Atelier Amanojaku</a></p>
          </div>
          <button className="scroll-down-btn" onClick={scrollDown}>
            <span>{t.cover.scrollDown}</span>
            <svg className="arrow" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
