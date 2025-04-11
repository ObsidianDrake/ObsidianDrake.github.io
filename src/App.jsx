import { useEffect, useRef, useState, useCallback } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Cover from '/src/components/Cover';
import ProfileInfo from '/src/components/ProfileInfo';
import SocialLinks from './components/SocialLinks';
import Events from './components/Events';
import Commission from './components/Commission';
import CommissionsPage from './pages/CommissionsPage';
import '/src/styles/global.css';

function HomePage() {
  const [viewHeight, setViewHeight] = useState('0px');
  
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
