import { useEffect, useRef, useState, useCallback } from 'react';
import Cover from '/src/components/Cover';
// import Menu  from '/src/components/Menu';
import ProfileInfo from '/src/components/ProfileInfo';


function App() {
  const [viewHeight, setViewHeight] = useState('0px');
  const [scrolling, setScrolling] = useState(false);
  // const duration = 500;

  // const tabs = [
  //   ['user-tie', 'PorfileInfo'],
  // ];

  // // const menuRef = useRef();
  // const introRef = useRef();

  // const pages = [introRef];

  // const updateViewHeight = useCallback(() => {
  //   setViewHeight(`${document.documentElement.clientHeight}px`);
  // }, []);

  // const getScrollOption = useCallback(() => ({
  //   speed: duration,
  //   easing: (t) => (--t) * t * t + 1,
  //   onStart: () => setScrolling(true),
  //   onComplete: () => setScrolling(false),
  //   onCancel: () => setScrolling(false)
  // }), []);

  // const tabClick = () => {
  //   const index = menuRef.current?.getCurrentIndex?.();
  //   if (pages[index]?.current) {
  //     scrollTo(pages[index].current, getScrollOption());
  //   }
  // };

  // const backTop = () => {
  //   // scrollTo(menuRef.current, getScrollOption());
  //   // menuRef.current.setIndex(-1);
  // };

  // const openMenu = () => {
  //   scrollTo(pages[0].current, getScrollOption());
  //   menuRef.current?.setIndex(0);
  // };

  // const handleScroll = () => {
  //   if (scrolling) return;
  //   const top = document.documentElement.scrollTop;
  //   const wH = document.documentElement.clientHeight;
  //   const sH = document.documentElement.scrollHeight;

  //   if (top + wH >= sH - 100) {
  //     menuRef.current?.setIndex(tabs.length - 1);
  //     return;
  //   }

  //   for (let i = 0; i < pages.length; i++) {
  //     const el = pages[i].current;
  //     if (el && el.getBoundingClientRect().top > -10) {
  //       menuRef.current?.setIndex(i);
  //       break;
  //     }
  //   }
  // };

  // useEffect(() => {
  //   updateViewHeight();
  //   window.addEventListener('resize', updateViewHeight);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('resize', updateViewHeight);
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolling]);

  return (
    <div className="home">
      <Cover className="cover" style={{ height: viewHeight }} />
      {/* <Menu
        className="menu"
        ref={menuRef}
        tabs={tabs}
        onTabClick={tabClick}
        onOpenMenu={openMenu}
        onBackTop={backTop}
      /> */}
      <div className="odd"><ProfileInfo className="page" /></div>
    </div>
  );
}

export default App;
