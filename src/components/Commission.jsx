import React, { useState, useEffect } from "react";
import SectionHead from "/src/components/SectionHead";
import AOS from "aos";
import "aos/dist/aos.css";
import "/src/styles/Commission.css";

// Placeholder images and data - replace with your actual images
const commissionData = [
  {
    id: 1,
    title: "Commission 1",
    image: "https://placehold.co/600x800",
    author: "Artist Name 1",
    description: "Character design commission"
  },
  {
    id: 2,
    title: "Commission 2",
    image: "https://placehold.co/800x600",
    author: "Artist Name 2",
    description: "Full illustration commission"
  },
  {
    id: 3,
    title: "Commission 3",
    image: "https://placehold.co/500x900",
    author: "Artist Name 3",
    description: "Chibi style commission"
  },
  {
    id: 4,
    title: "Commission 4",
    image: "https://placehold.co/1200x800",
    author: "Artist Name 4",
    description: "Portrait commission"
  },
  {
    id: 5,
    title: "Commission 5",
    image: "https://placehold.co/900x1200",
    author: "Artist Name 5",
    description: "Reference sheet commission"
  },
  {
    id: 6,
    title: "Commission 6",
    image: "https://placehold.co/700x700",
    author: "Artist Name 6",
    description: "Badge design commission"
  }
];

const Commission = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);

  const openLightbox = (commission) => {
    setSelectedImage(commission);
    setImageLoaded(false);
    document.body.style.overflow = "hidden"; // Prevent scrolling when lightbox is open
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto"; // Re-enable scrolling
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
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
        <SectionHead title="Commissions" />
        <div className="commission-grid" data-aos="fade-up">
          {commissionData.map((commission) => (
            <div 
              key={commission.id} 
              className="commission-item"
              data-aos="fade-up"
              data-aos-delay={100 * (commission.id % 3)}
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
                  <span>By: {commission.author}</span>
                </div>
              </div>
            </div>
          ))}
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
                <span className="author-label">Artist:</span>
                <span className="author-name">{selectedImage.author}</span>
              </div>
              <p className="lightbox-description">{selectedImage.description}</p>
            </div>
            <button className="lightbox-close" onClick={closeLightbox}>×</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Commission; 