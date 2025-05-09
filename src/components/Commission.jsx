import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SectionHead from "/src/components/SectionHead";
import AOS from "aos";
import "aos/dist/aos.css";
import "/src/styles/Commission.css";
import { commissionData, authorsMap } from "../pages/CommissionsPage";
import { useTranslation } from '../i18n/LanguageContext';

const Commission = ({ onLightboxChange }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [topCommissions, setTopCommissions] = useState([]);
  const { t } = useTranslation();
  
  useEffect(() => {
    // Randomly select 7 commissions
    const shuffled = [...commissionData].sort(() => 0.5 - Math.random());
    const randomSeven = shuffled.slice(0, 7);
    setTopCommissions(randomSeven);
  }, []);

  const openLightbox = (commission) => {
    setSelectedImage(commission);
    setImageLoaded(false);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
    if (onLightboxChange) onLightboxChange(true);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
    if (onLightboxChange) onLightboxChange(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleAuthorClick = (e, url) => {
    e.stopPropagation(); // Prevent opening the lightbox when clicking author link
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle escape key to close lightbox
  useEffect(() => {
    const handleEscKey = (event) => {
      if (event.key === "Escape" && selectedImage) {
        closeLightbox();
      }
    };

    window.addEventListener("keydown", handleEscKey);
    return () => {
      window.removeEventListener("keydown", handleEscKey);
    };
  }, [selectedImage]);

  return (
    <div className="commission">
      <div className="container">
        <SectionHead title={t.commission.title} />
        <div className="commission-grid" data-aos="fade-up">
          {/* Top 7 commissions */}
          {topCommissions.map((commission, index) => (
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

      {/* Lightbox for enlarged view */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title} 
                className="lightbox-image"
                onLoad={handleImageLoad}
                style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
              />
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <div className="lightbox-author">
                <span className="author-label">{t.commission.artist}:</span>
                <a 
                  href={authorsMap[selectedImage.authorKey].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-name"
                >
                  {authorsMap[selectedImage.authorKey].name}
                </a>
              </div>
              <p className="lightbox-description">{selectedImage.description}</p>
            </div>
            <button className="lightbox-close" onClick={closeLightbox}>
              <svg 
                width="16" 
                height="16" 
                viewBox="0 0 16 16" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: 'block' }}
              >
                <path 
                  d="M15 1L1 15M1 1L15 15" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commission;