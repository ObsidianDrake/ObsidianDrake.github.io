import React, { useEffect, useRef, useState } from 'react';
import { Parallax } from 'react-parallax';
import wideImage from '/src/assets/images/banner_wide.png';
import desktopImage from '/src/assets/images/banner_ori.png';
import mobileImage from '/src/assets/images/banner_mobile.png';
import '/src/styles/Cover.css';

const Cover = () => {
  const [bgImage, setBgImage] = useState(false);
  const titleRef = useRef(null);

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
    const profileElement = document.querySelector('.intro');
    if (profileElement) {
      profileElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      // 備用方案：如果找不到元素，則滾動到視窗高度位置
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
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
            <p className="greeting">Welcome to my website</p>
            <h1 className="title" ref={titleRef}>
              Hi, <span className="highlight">I'm Obsidian!</span>
            </h1>
            <p className="subtitle">Created by <a className="subtitle" href='https://atoama.cn/'>Atelier Amanojaku</a></p>
          </div>
          <button className="scroll-down-btn" onClick={scrollDown}>
            <span>Explore More</span>
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
