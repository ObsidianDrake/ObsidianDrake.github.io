import React, { useRef, useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SectionHead from "/src/components/SectionHead";
import AOS from "aos";
import "aos/dist/aos.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import 'swiper/css/pagination';
import "/src/styles/Events.css";
import { useTranslation } from '../i18n/LanguageContext';
import event1 from "/src/assets/images/events/2024_FurryteaParty.webp";
import event2 from "/src/assets/images/events/2024_Furry_train.webp";
import event3 from "/src/assets/images/events/2024_FurMIT.webp";
import event4 from "/src/assets/images/events/2024_Infurnity.webp";
import event5 from "/src/assets/images/events/2025_ちるこん.webp";
import event6 from "/src/assets/images/events/2025_FurryteaParty.webp";
import event7 from "/src/assets/images/events/2025_A_Family.webp";

import event1Full from "/src/assets/images/events/full/2024_FurryteaParty.webp";
import event2Full from "/src/assets/images/events/full/2024_Furry_train.webp";
import event3Full from "/src/assets/images/events/full/2024_FurMIT.webp";
import event4Full from "/src/assets/images/events/full/2024_Infurnity.webp";
import event5Full from "/src/assets/images/events/full/2025_ちるこん.webp";
import event6Full from "/src/assets/images/events/full/2025_FurryteaParty.webp";
import event7Full from "/src/assets/images/events/full/2025_A_Family.webp";

export const photographersMap = {
  "小怪": {
    name: "小怪",
    url: "https://www.facebook.com/Monster0313"
  },
  "萊恩": {
    name: "萊恩",
    url: "https://www.facebook.com/profile.php?id=100010167090679"
  },
  "Sanu": {
    name: "Sanu",
    url: "https://www.facebook.com/sanuKechisy"
  },
  "Aaron": {
    name: "阿龍Aaron",
    url: "https://www.facebook.com/kulythewolf/"
  },
  "Guni": {
    name: "Guni",
    url: "https://x.com/guni1636"
  },
  "紀州の関東人(Kisyu)": {
    name: "紀州の関東人(Kisyu)",
    url: "https://x.com/JyakiganKatana"
  },
};

const eventData = [
  {
    id: 1,
    title: "2024 FurryTeaParty",
    image: event1,
    fullImage: event1Full,
    photographerKey: "小怪"
  },
  {
    id: 2,
    title: "2024 毛爪號",
    image: event2,
    fullImage: event2Full,
    photographerKey: "Aaron"
  },
  {
    id: 3,
    title: "2024 FurMIT",
    image: event3,
    fullImage: event3Full,
    photographerKey: "Guni"
  },
  {
    id: 4,
    title: "2024 Infurnity",
    image: event4,
    fullImage: event4Full,
    photographerKey: "小怪"
  },
  {
    id: 5,
    title: "2025 ちるこん",
    image: event5,
    fullImage: event5Full,
    photographerKey: "紀州の関東人(Kisyu)"
  },
  {
    id: 6,
    title: "2025 FurryTeaParty",
    image: event6,
    fullImage: event6Full,
    photographerKey: "小怪"
  },
  {
    id: 7,
    title: "2025 A Family",
    image: event7,
    fullImage: event7Full,
    photographerKey: "萊恩"
  },
];

AOS.init({
  threshold: 0.05, // Animation starts when element is 10% in view
  duration: 800, // Animation duration in ms
});

const Events = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const { t } = useTranslation();

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSlideClick = (index, event) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const currentIndex = swiperRef.current.swiper.realIndex;
      
      // 只有當中間的slide被點擊時才開啟lightbox
      if (currentIndex === index) {
        openLightbox(eventData[index]);
      } else {
        swiperRef.current?.swiper?.slideToLoop(index, 500);
      }
    }
  };

  const openLightbox = (event) => {
    setSelectedImage(event);
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

  const handlePhotographerClick = (e, url) => {
    e.stopPropagation(); // Prevent closing the lightbox when clicking photographer link
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  // Handle escape key to close lightbox
  React.useEffect(() => {
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
    <div className="events">
      <div className="events-container">
        <SectionHead title={t.events.title} />
        <div className="events-content">
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow, Pagination]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            onSlideChange={handleSlideChange}
            watchSlidesProgress={true}
            pagination={{
              clickable: true
            }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            className="events-swiper"
            data-aos="zoom-out"
          >
            {eventData.map((event, index) => (
              <SwiperSlide
                key={event.id}
                className="event-slide"
                onClick={() => handleSlideClick(index, event)}
              >
                <div className="event-card">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="event-image"
                  />
                  <h3 className="event-title">{event.title}</h3>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Lightbox for enlarged view */}
      {selectedImage && (
        <div className="lightbox" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <div className="lightbox-image-container">
              <img 
                src={selectedImage.fullImage} 
                alt={selectedImage.title} 
                className="lightbox-image"
                onLoad={handleImageLoad}
                style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
              />
            </div>
            <div className="lightbox-info">
              <h3>{selectedImage.title}</h3>
              <div className="lightbox-author">
                <span className="author-label">{t.events.photographer}:</span>
                <a 
                  href={photographersMap[selectedImage.photographerKey].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="author-name"
                  onClick={(e) => handlePhotographerClick(e, photographersMap[selectedImage.photographerKey].url)}
                >
                  {photographersMap[selectedImage.photographerKey].name}
                </a>
              </div>
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

export default Events;
