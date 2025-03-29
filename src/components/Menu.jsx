// Menu.jsx
import React, { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleUp } from '@fortawesome/free-solid-svg-icons';
import '/src/styles/Menu.css';

const Menu = ({ tabs, onTabClick, onOpenMenu, onBackTop }) => {
  const menuRef = useRef(null);
  const [isExpand, setIsExpand] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [tabWidth, setTabWidth] = useState('100px');
  const [isMobile, setIsMobile] = useState(false);

  const handleScroll = () => {
    const menuHeight = menuRef.current.clientHeight;
    const clientHeight = document.documentElement.clientHeight;
    const menuTop = menuRef.current.getBoundingClientRect().top;
    const offset = clientHeight - menuHeight - 150;

    if (!isExpand && menuTop < offset) {
      setIsExpand(true);
    } else if (isExpand && menuTop > offset) {
      setIsExpand(false);
    }
  };

  const detectMobile = () => {
    setIsMobile(document.documentElement.clientWidth < 768);
  };

  const setTabWidthCalc = () => {
    const viewWidth = document.documentElement.clientWidth - 60;
    const tabSize = Math.max(1, tabs.length);
    setTabWidth(Math.min(viewWidth / tabSize, 250) + 'px');
  };

  const refresh = () => {
    detectMobile();
    setTabWidthCalc();
  };

  const toggleTab = (index) => {
    setCurrentIndex(index);
    onTabClick?.();
  };

  useEffect(() => {
    refresh();
    window.addEventListener('resize', refresh);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('resize', refresh);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isExpand]);

  return (
    <div
      ref={menuRef}
      className={`menu ${!isExpand ? 'normal' : ''}`}
    >
      {!isExpand && <div className="block-helper" />}
      {!isExpand && (
        <FontAwesomeIcon
          icon={faAngleDoubleUp}
          className="icon faa-pulse animated"
          size="lg"
          onClick={onOpenMenu}
        />
      )}
      <div className="tabs">
        {tabs.map((tab, index) => (
          <div className="tab" key={index}>
            {isExpand && (
              <div
                className={`tab-body ${
                  index % 2 === 1 ? 'odd' : 'even'
                } ${index === currentIndex ? 'trigger' : ''}`}
                onClick={() => toggleTab(index)}
                style={{ width: tabWidth }}
              >
                <div style={{ width: '50%' }}></div>
                {tab[0] !== '' && (
                  <FontAwesomeIcon className="icon" icon={tab[0]} size="lg" />
                )}
                {!isMobile && <strong>{tab[1]}</strong>}
                <div style={{ width: '50%' }}></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
