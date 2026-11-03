// Route adjacent clicks by their rendered position, including across the loop boundary.
export function handleEventSlideClick(swiper, openImage, events) {
  if (!swiper || swiper.destroyed || !swiper.allowClick || swiper.animating) return;
  const slide = swiper.clickedSlide;
  if (!slide) return;

  if (slide.classList.contains('swiper-slide-prev')) {
    swiper.slidePrev(500);
  } else if (slide.classList.contains('swiper-slide-next')) {
    swiper.slideNext(500);
  } else {
    const value = slide.getAttribute('data-swiper-slide-index');
    if (value === null) return;
    const index = Number(value);
    if (!Number.isInteger(index) || !events[index]) return;
    if (slide.classList.contains('swiper-slide-active')) {
      openImage(events[index]);
    } else {
      swiper.slideToLoop(index, 500);
    }
  }
}
