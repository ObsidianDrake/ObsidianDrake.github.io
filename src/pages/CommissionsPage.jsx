import React, { useState, useEffect, useRef } from "react";
import SectionHead from "/src/components/SectionHead";
import AOS from "aos";
import "aos/dist/aos.css";
import "/src/styles/Commission.css";
import { useTranslation } from '../i18n/LanguageContext';
import { Link } from "react-router-dom";
import LanguageSwitcher from '../components/LanguageSwitcher';
import { commissionData, authorsMap } from '../data/commissions';
import ImageLightbox from '../components/ImageLightbox';
import { useImageLightbox } from '../hooks/useImageLightbox';

const CommissionsPage = () => {
  const { selectedImage, openLightbox, closeLightbox } = useImageLightbox();
  const [sortedCommissions, setSortedCommissions] = useState([]);
  const [visibleCommissions, setVisibleCommissions] = useState([]);
  const [, setPage] = useState(1);
  const [imagesLoaded, setImagesLoaded] = useState({});
  const [showScrollTop, setShowScrollTop] = useState(false);
  const observerRef = useRef(null);
  const loadMoreRef = useRef(null);
  const ITEMS_PER_PAGE = 8;
  const { t } = useTranslation();

  // 監聽滾動以決定是否顯示回到頂部按鈕
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // 回到頂部功能
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Move preload function into useEffect to avoid circular dependencies
  useEffect(() => {
    // Use the original order of the array
    setSortedCommissions([...commissionData]);

    // Display the first ITEMS_PER_PAGE images immediately
    setVisibleCommissions(commissionData.slice(0, ITEMS_PER_PAGE));

    // Preload the next batch of images
    const preloadNextBatch = () => {
      const nextBatchStart = ITEMS_PER_PAGE;
      const nextBatchEnd = Math.min(nextBatchStart + ITEMS_PER_PAGE, commissionData.length);

      for (let i = nextBatchStart; i < nextBatchEnd; i++) {
        if (commissionData[i]) {
          const img = new Image();
          img.src = commissionData[i].image;
          img.onload = () => {
            setImagesLoaded(prev => ({
              ...prev,
              [i]: true
            }));
          };
        }
      }
    };

    // Delay preloading to avoid conflict with initial rendering
    const timer = setTimeout(preloadNextBatch, 1000);

    // Initialize AOS
    AOS.init({
      once: true,
      threshold: 0.02,
      duration: 600,
      easing: 'ease-out-cubic'
    });

    // Cleanup function
    return () => {
      clearTimeout(timer);
    };
  }, []); // Empty dependency array, runs only once when component mounts

  useEffect(() => {
    if (!sortedCommissions.length) return; // Prevent running before sortedCommissions is initialized

    // Setup Intersection Observer with earlier trigger
    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => {
            const nextPage = prevPage + 1;
            const start = 0;
            const end = nextPage * ITEMS_PER_PAGE;

            // Update visible commissions
            setVisibleCommissions(sortedCommissions.slice(start, end));

            // Preload next batch without dependency on state update
            const preloadNextBatch = () => {
              const nextBatchStart = end;
              const nextBatchEnd = Math.min(nextBatchStart + ITEMS_PER_PAGE, sortedCommissions.length);

              for (let i = nextBatchStart; i < nextBatchEnd; i++) {
                if (sortedCommissions[i]) {
                  const img = new Image();
                  img.src = sortedCommissions[i].image;
                  img.onload = () => {
                    setImagesLoaded(prev => ({
                      ...prev,
                      [i]: true
                    }));
                  };
                }
              }
            };

            // Use setTimeout to delay preloading
            setTimeout(preloadNextBatch, 300);

            return nextPage;
          });
        }
      },
      {
        threshold: 0.05,
        rootMargin: '500px' // Trigger loading earlier
      }
    );

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [sortedCommissions]); // Only runs when sortedCommissions changes

  return (
    <div className="commissions-page even">
      <LanguageSwitcher />

      {/* 回到首頁按鈕 */}
      <Link to="/" className="back-to-home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <span>{t.commissionsPage.backToHome || "Back to Home"}</span>
      </Link>

      <div className="container">
        <SectionHead title={t.commissionsPage.title} />
        <p className="commissions-intro">
          {t.commissionsPage.intro.split('\n').map((line, idx) => (
            <React.Fragment key={idx}>
              {line}
              <br />
            </React.Fragment>
          ))}
        </p>
        <div className="commission-grid" data-aos="fade-up">
          {visibleCommissions.map((commission, index) => (
            <div
              key={index}
              className="commission-item"
              data-aos="fade-up"
              data-aos-delay={100 * (index % 3)}
              onClick={() => openLightbox(commission)}
            >
              <div className="commission-card">
                <img
                  src={commission.image}
                  alt={commission.title}
                  className="commission-image"
                  loading="eager"
                  style={{
                    transition: 'transform 0.3s ease-out, opacity 0.3s ease-out',
                    transform: 'scale(1)',
                    opacity: imagesLoaded[index] ? 1 : 0.5
                  }}
                  onLoad={() => {
                    setImagesLoaded(prev => ({
                      ...prev,
                      [index]: true
                    }));
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div className="commission-author">
                  <span>{t.commission.by}: {authorsMap[commission.authorKey].name}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div ref={loadMoreRef} style={{ height: '50px' }} />
      </div>

      {/* 回到頂部按鈕 */}
      {showScrollTop && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          aria-label="Scroll to top"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 19V5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5 12L12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      )}

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          credit={authorsMap[selectedImage.authorKey]}
          creditLabel={t.commissionsPage.artist}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default CommissionsPage; 