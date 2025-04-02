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

  return (
    <div className="cover">
      <Parallax
        bgImage={bgImage}
        className="img-container-cover"
        style={{ height: '100vh' }}
        strength={200} // adjust strength as desired
      >
        {/* The inner div is needed to set the height */}
        <div style={{ height: '100vh' }} />
        <h1 className="title" ref={titleRef}>Hi, I'm Obsidian!</h1>
      </Parallax>
    </div>
  );
};

export default Cover;
