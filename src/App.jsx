import { useEffect, useRef, useState } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Cover from '/src/components/Cover';
import ProfileInfo from '/src/components/ProfileInfo';
import SocialLinks from './components/SocialLinks';
import Events from './components/Events';
import Commission from './components/Commission';
import CommissionsPage from './pages/CommissionsPage';
import ButtonNavigation from './components/ButtonNavigation';
import LanguageSwitcher from './components/LanguageSwitcher';
import '/src/styles/global.css';

function HomePage() {
  const [currentPage, setCurrentPage] = useState('cover');
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const observerRef = useRef(null);
  
  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          setCurrentPage(id);
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.3,
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
      <LanguageSwitcher />
      <div id="cover" className="cover-section">
        <Cover />
      </div>
      <div id="profile" className="page-section odd">
        <ProfileInfo className="page" />
      </div>
      <div id="social" className="page-section even">
        <SocialLinks className="page" />
      </div>
      <div id="event" className="page-section odd">
        <Events className="page" onLightboxChange={setIsLightboxOpen} />
      </div>
      <div id="commission" className="page-section even">
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
