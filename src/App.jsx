import { useEffect, useRef, useState, useCallback } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Cover from '/src/components/Cover';
import ProfileInfo from '/src/components/ProfileInfo';
import SocialLinks from './components/SocialLinks';
import Events from './components/Events';
import Commission from './components/Commission';
import CommissionsPage from './pages/CommissionsPage';
import ButtonNavigation from './components/ButtonNavigation';
import '/src/styles/global.css';

function HomePage() {
  const [viewHeight, setViewHeight] = useState('0px');
  const [currentPage, setCurrentPage] = useState('cover');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const observerRef = useRef(null);
  
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

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          // 確保在 Cover 頁面時設置正確的狀態
          if (id === 'cover') {
            setCurrentPage('cover');
          } else {
            setCurrentPage(id);
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
      rootMargin: '-50px 0px -50px 0px'
    });

    const sections = document.querySelectorAll('.page-section, .cover-section');
    sections.forEach(section => observerRef.current.observe(section));

    return () => {
      if (observerRef.current) {
        sections.forEach(section => observerRef.current.unobserve(section));
      }
    };
  }, []);

  return (
    <div className="home" style={{ width: '100%', overflow: 'hidden' }}>
      <div id="cover" className="cover-section">
        <Cover style={{ height: viewHeight }} />
      </div>
      <div id="profile" className="page-section">
        <ProfileInfo className="page" />
      </div>
      <div id="social" className="page-section">
        <SocialLinks className="page" />
      </div>
      <div id="event" className="page-section">
        <Events className="page" />
      </div>
      <div id="commission" className="page-section">
        <Commission className="page" onLightboxChange={setIsLightboxOpen} />
      </div>
      <ButtonNavigation currentPage={currentPage} isLightboxOpen={isLightboxOpen} />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/commissions" element={<CommissionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
