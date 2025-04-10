import { useEffect, useRef, useState, useCallback } from 'react';
import Cover from '/src/components/Cover';
// import Menu  from '/src/components/Menu';
import ProfileInfo from '/src/components/ProfileInfo';
import SocialLinks from './components/SocialLinks';
import Events from './components/Events';
import Commission from './components/Commission';
import '/src/styles/global.css';

function App() {
  const [viewHeight, setViewHeight] = useState('0px');
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    // 設置初始視口高度
    setViewHeight(`${window.innerHeight}px`);
    
    // 監聽視口大小變化
    const handleResize = () => {
      setViewHeight(`${window.innerHeight}px`);
    };
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home" style={{ width: '100%', overflow: 'hidden' }}>
      <Cover className="cover" style={{ height: viewHeight }} />
      <div className="odd" style={{ width: '100%' }}><ProfileInfo className="page" /></div>
      <div className="even" style={{ width: '100%' }}><SocialLinks className="page" /></div>
      <div className="odd" style={{ width: '100%' }}><Events className="page" /></div>
      <div className="even" style={{ width: '100%' }}><Commission className="page" /></div>
    </div>
  );
}

export default App;
