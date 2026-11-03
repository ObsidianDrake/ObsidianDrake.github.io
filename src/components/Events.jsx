import React from "react";
import ImageLightbox from "./ImageLightbox";
import { useImageLightbox } from "../hooks/useImageLightbox";
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
import { handleEventSlideClick } from "../utils/eventCarousel";
import { useTranslation } from '../i18n/LanguageContext';
import event1  from "/src/assets/images/events/2024_FurryteaParty.webp";
import event2  from "/src/assets/images/events/2024_Furry_train.webp";
import event3  from "/src/assets/images/events/2024_FurMIT.webp";
import event4  from "/src/assets/images/events/2024_Infurnity.webp";
import event5  from "/src/assets/images/events/2025_ちるこん.webp";
import event6  from "/src/assets/images/events/2025_FurryteaParty.webp";
import event7  from "/src/assets/images/events/2025_A_Family.webp";
import event8  from "/src/assets/images/events/2025_UTFG.webp";
import event9  from "/src/assets/images/events/2025_おきけも.webp";
import event10 from "/src/assets/images/events/2025_Infurnity.webp";
import event11 from "/src/assets/images/events/2026_UTFG.webp";

import event1Full  from "/src/assets/images/events/full/2024_FurryteaParty.webp";
import event2Full  from "/src/assets/images/events/full/2024_Furry_train.webp";
import event3Full  from "/src/assets/images/events/full/2024_FurMIT.webp";
import event4Full  from "/src/assets/images/events/full/2024_Infurnity.webp";
import event5Full  from "/src/assets/images/events/full/2025_ちるこん.webp";
import event6Full  from "/src/assets/images/events/full/2025_FurryteaParty.webp";
import event7Full  from "/src/assets/images/events/full/2025_A_Family.webp";
import event8Full  from "/src/assets/images/events/full/2025_UTFG.webp";
import event9Full  from "/src/assets/images/events/full/2025_おきけも.webp";
import event10Full from "/src/assets/images/events/full/2025_Infurnity.webp";
import event11Full from "/src/assets/images/events/full/2026_UTFG.webp";

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
  "蒼穹": {
    name: "蒼穹",
    url: "https://www.facebook.com/cang.qiong.697438"
  },
  "框框": {
    name: "Kuang Kuang",
    url: "https://www.facebook.com/kuang.kuang.148"
  },
  "ㄉㄉ": {
    name: "ㄉㄉ",
    url: "https://www.facebook.com/DDWoofPT"
  },
  "猫太 NEKOTA": {
    name: "猫太 NEKOTA",
    url: "https://x.com/hinekota"
  },
};

const eventData = [
  {
    title: "2026 UTFG",
    image: event11,
    fullImage: event11Full,
    photographerKey: "猫太 NEKOTA"
  },
  {
    title: "2025 Infurnity",
    image: event10,
    fullImage: event10Full,
    photographerKey: "ㄉㄉ"
  },
  {
    title: "2025 おきけも",
    image: event9,
    fullImage: event9Full,
    photographerKey: "框框"
  },
  {
    title: "2025 UTFG",
    image: event8,
    fullImage: event8Full,
    photographerKey: "蒼穹"
  },
  {
    title: "2025 A Family",
    image: event7,
    fullImage: event7Full,
    photographerKey: "Sanu"
  },
  {
    title: "2025 FurryTeaParty",
    image: event6,
    fullImage: event6Full,
    photographerKey: "小怪"
  },
  {
    title: "2025 ちるこん",
    image: event5,
    fullImage: event5Full,
    photographerKey: "紀州の関東人(Kisyu)"
  },
  {
    title: "2024 Infurnity",
    image: event4,
    fullImage: event4Full,
    photographerKey: "小怪"
  },
  {
    title: "2024 FurMIT",
    image: event3,
    fullImage: event3Full,
    photographerKey: "Guni"
  },
  {
    title: "2024 毛爪號",
    image: event2,
    fullImage: event2Full,
    photographerKey: "Aaron"
  },
  {
    title: "2024 FurryTeaParty",
    image: event1,
    fullImage: event1Full,
    photographerKey: "小怪"
  },
];

AOS.init({
  threshold: 0.05, // Animation starts when element is 10% in view
  duration: 800, // Animation duration in ms
});

const Events = ({ onLightboxChange }) => {
  const { selectedImage, openLightbox, closeLightbox } = useImageLightbox(onLightboxChange);
  const { t } = useTranslation();

  return (
    <div className="events">
      <div className="events-container">
        <SectionHead title={t.events.title} />
        <div className="events-content">
          <Swiper
            modules={[EffectCoverflow, Pagination]}
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            loopAdditionalSlides={2}
            onClick={(swiper) => handleEventSlideClick(swiper, openLightbox, eventData)}
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
            {eventData.map((event) => (
              <SwiperSlide
                key={event.title}
                className="event-slide"
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

      {selectedImage && (
        <ImageLightbox
          image={selectedImage}
          credit={photographersMap[selectedImage.photographerKey]}
          creditLabel={t.events.photographer}
          onClose={closeLightbox}
        />
      )}
    </div>
  );
};

export default Events;
