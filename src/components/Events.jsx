import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectCoverflow } from 'swiper/modules';
import SectionHead from '/src/components/SectionHead';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import '/src/styles/Events.css';
import event1 from '/src/assets/images/2024_FurryteaParty.jpeg';
import event2 from '/src/assets/images/2024_Furry_train.jpeg';
import event3 from '/src/assets/images/2024_FurMIT.jpg';
import event4 from '/src/assets/images/2024_Infurnity.jpeg';
import event5 from '/src/assets/images/2025_ちるこん.jpg';
import event6 from '/src/assets/images/2025_FurryteaParty.jpg';

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
  return (
    <div className="events">
      <div className="container">
        <SectionHead
          title="Events"
        />
        <div className="events-content">
          <Swiper
            modules={[EffectCoverflow]}
            spaceBetween={30}
            slidesPerView={'auto'}
            centeredSlides={true}
            loop={true}
            grabCursor={true}
            effect={'coverflow'}
            coverflowEffect={{
              rotate: 5,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            className="events-swiper"
          >
            {eventData.map((event) => (
              <SwiperSlide key={event.id} className="event-slide">
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
