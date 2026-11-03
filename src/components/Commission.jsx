import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import SectionHead from "/src/components/SectionHead";
import AOS from "aos";
import "aos/dist/aos.css";
import "/src/styles/Commission.css";
import { commissionData, authorsMap } from "../data/commissions";
import ImageLightbox from './ImageLightbox';
import { useImageLightbox } from '../hooks/useImageLightbox';
import { useTranslation } from '../i18n/LanguageContext';

const Commission = ({ onLightboxChange }) => {
  const { selectedImage, openLightbox, closeLightbox } = useImageLightbox(onLightboxChange);
  const [topCommissions, setTopCommissions] = useState([]);
  const { t } = useTranslation();
  const gridRef = useRef(null);
  const [previewCount, setPreviewCount] = useState(7);

  useEffect(() => {
    const grid = gridRef.current;
    const updatePreviewCount = () => {
      const columns = getComputedStyle(grid).gridTemplateColumns.trim().split(/\s+/).length;
      setPreviewCount(columns === 3 ? 8 : 7);
    };
    const observer = new ResizeObserver(updatePreviewCount);
    observer.observe(grid);
    updatePreviewCount();
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    // Keep the same selection when resizing; three columns need one extra image.
    const shuffled = [...commissionData].sort(() => 0.5 - Math.random());
    setTopCommissions(shuffled.slice(0, 8));
  }, []);

  return (
    <div className="commission">
      <div className="container">
        <SectionHead title={t.commission.title} />
        <div ref={gridRef} className="commission-grid" data-aos="fade-up">
          {/* Fill three-column previews with eight images plus the Show More card. */}
          {topCommissions.slice(0, previewCount).map((commission, index) => (
            <div 
              key={`commission-${index}-${commission.title}`} 
              className="commission-item"
              data-aos="fade-up"
              data-aos-delay={String(100 * (index % 3))}
              onClick={() => openLightbox(commission)}
            >
              <div className="commission-card">
                <img 
                  src={commission.image} 
                  alt={commission.title} 
                  className="commission-image"
                  loading="lazy"
                />
                <div className="commission-author">
                  <span>{t.commission.by}: {authorsMap[commission.authorKey].name}</span>
                </div>
              </div>
            </div>
          ))}

          {/* Show More button */}
          <Link to="/commissions" className="commission-item show-more-item" data-aos="fade-up">
            <div className="commission-card show-more-card">
              <div className="show-more-content">
                <span className="show-more-text">{t.commission.showMore}</span>
                <span className="show-more-icon">
                  <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path 
                      d="M12 4L12 20" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                    />
                    <path 
                      d="M4 12L20 12" 
                      stroke="currentColor" 
                      strokeWidth="3" 
                      strokeLinecap="round" 
                    />
                  </svg>
                </span>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          credit={authorsMap[selectedImage.authorKey]}
          creditLabel={t.commission.artist}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Commission;