import { useEffect, useRef, useState, useCallback } from 'react';
import Cover from '/src/components/Cover';
// import Menu  from '/src/components/Menu';
import ProfileInfo from '/src/components/ProfileInfo';
import SocialLinks from './components/SocialLinks';


function App() {
  const [viewHeight, setViewHeight] = useState('0px');
  const [scrolling, setScrolling] = useState(false);

  return (
    <div className="home">
      <Cover className="cover" style={{ height: viewHeight }} />
      <div className="odd"><ProfileInfo className="page" /></div>
      <div className="even"><SocialLinks className="page" /></div>
    </div>
  );
}

export default App;
