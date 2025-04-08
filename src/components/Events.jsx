import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import SectionHead from '/src/components/SectionHead';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '/src/styles/Events.css';
import event1 from '/src/assets/images/2024_FurryteaParty.webp';
import event2 from '/src/assets/images/2024_Furry_train.webp';
import event3 from '/src/assets/images/2024_FurMIT.webp';
import event4 from '/src/assets/images/2024_Infurnity.webp';
import event5 from '/src/assets/images/2025_ちるこん.webp';
import event6 from '/src/assets/images/2025_FurryteaParty.webp';

const eventData = [
  {
    id: 1,
    title: "2024 FurryteaParty",
    image: event1
  },
  {
    id: 2,
    title: "2024 毛爪號",
    image: event2
  },
  {
    id: 3,
    title: "2024 FurMIT",
    image: event3
  },
  {
    id: 4,
    title: "2024 Infurnity",
    image: event4
  },
  {
    id: 5,
    title: "2025 ちるこん",
    image: event5
  },
  {
    id: 6,
    title: "2025 FurryteaParty",
    image: event6
  }
];

const Events = () => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  const handleSlideClick = (index) => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiper = swiperRef.current.swiper;
      const currentIndex = swiper.realIndex;
      const slidesLength = eventData.length;
      
      // Calculate the shortest path to the target slide
      let diff = index - currentIndex;
      if (Math.abs(diff) > slidesLength / 2) {
        diff = diff > 0 ? diff - slidesLength : diff + slidesLength;
      }
      
      swiper.slideTo(swiper.activeIndex + diff);
    }
  };

  return (
    <div className="events">
      <div className="container">
        <SectionHead
          title="Events"
        />
        <div className="events-content">
          <Swiper
            ref={swiperRef}
            modules={[EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            effect={'coverflow'}
            onSlideChange={handleSlideChange}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            className="events-swiper"
          >
            {eventData.map((event, index) => (
              <SwiperSlide 
                key={event.id} 
                className="event-slide"
                onClick={() => handleSlideClick(index)}
              >
                <div className="event-card">
                  <img src={event.image} alt={event.title} className="event-image" />
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
