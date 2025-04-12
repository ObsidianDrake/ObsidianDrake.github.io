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

const eventData = [
  {
    id: 1,
    title: "2024 FurryTeaParty",
    image: event1,
  },
  {
    id: 2,
    title: "2024 毛爪號",
    image: event2,
  },
  {
    id: 3,
    title: "2024 FurMIT",
    image: event3,
  },
  {
    id: 4,
    title: "2024 Infurnity",
    image: event4,
  },
  {
    id: 5,
    title: "2025 ちるこん",
    image: event5,
  },
  {
    id: 6,
    title: "2025 FurryTeaParty",
    image: event6,
  },
  {
    id: 7,
    title: "2025 A Family",
    image: event7,
  },
];

AOS.init({
  threshold: 0.05, // Animation starts when element is 10% in view
  duration: 800, // Animation duration in ms
});

const Events = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSlideClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current?.swiper?.slideToLoop(index, 500);
    }
  };

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
                onClick={() => handleSlideClick(index)}
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
    </div>
  );
};

export default Events;
