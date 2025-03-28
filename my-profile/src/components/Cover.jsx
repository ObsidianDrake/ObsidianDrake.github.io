import React, { useState, useEffect, useRef } from 'react';
import { Parallax } from 'react-parallax';
import desktopImage from '/src/assets/images/banner.png';
import mobileImage from '/src/assets/images/banner.png';
import '/src/styles/Cover.css';

const Cover = () => {
  const [isMobile, setIsMobile] = useState(false);
  const titleRef = useRef(null);

  const detectMobile = () => {
    const width = document.documentElement.clientWidth;
    setIsMobile(width <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', detectMobile);
    detectMobile(); // initial check

    return () => {
      window.removeEventListener('resize', detectMobile);
    };
  }, []);

  return (
    <div className="cover">
      <Parallax
        bgImage={isMobile ? mobileImage : desktopImage}
        className="img-container"
        style={{ height: '100vh' }}
        strength={300} // adjust strength as desired
      >
        {/* The inner div is needed to set the height */}
        <div style={{ height: '100vh' }} />
      </Parallax>
      <h1 className="title" ref={titleRef}>
        Hi, I'm Obsidian!
      </h1>
    </div>
  );
};

export default Cover;
