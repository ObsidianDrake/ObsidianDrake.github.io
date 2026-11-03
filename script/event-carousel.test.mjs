import test from 'node:test';
import assert from 'node:assert/strict';
import { handleEventSlideClick } from '../src/utils/eventCarousel.js';

const events = Array.from({ length: 11 }, (_, index) => ({ title: `Event ${index}` }));
function fixture(position, index) {
  const calls = [];
  const swiper = {
    allowClick: true,
    animating: false,
    clickedSlide: {
      classList: { contains: (name) => name === `swiper-slide-${position}` },
      getAttribute: () => String(index),
    },
    slidePrev: () => calls.push('prev'),
    slideNext: () => calls.push('next'),
    slideToLoop: (value) => calls.push(['jump', value]),
  };
  return { swiper, calls, open: (event) => calls.push(['open', event]) };
}

test('left neighbor at first image goes backward across the loop', () => {
  const { swiper, calls, open } = fixture('prev', 10);
  swiper.realIndex = 0;
  handleEventSlideClick(swiper, open, events);
  assert.deepEqual(calls, ['prev']);
});

test('right neighbor at last image goes forward across the loop', () => {
  const { swiper, calls, open } = fixture('next', 0);
  swiper.realIndex = 10;
  handleEventSlideClick(swiper, open, events);
  assert.deepEqual(calls, ['next']);
});

test('center opens the image represented by the reordered slide', () => {
  const { swiper, calls, open } = fixture('active', 7);
  handleEventSlideClick(swiper, open, events);
  assert.deepEqual(calls, [['open', events[7]]]);
});

test('a drag or an unfinished transition cannot trigger a second navigation', () => {
  for (const state of [{ allowClick: false }, { animating: true }, { destroyed: true }]) {
    const { swiper, calls, open } = fixture('prev', 10);
    Object.assign(swiper, state);
    handleEventSlideClick(swiper, open, events);
    assert.deepEqual(calls, []);
  }
});

test('clicking empty space does not navigate or open a lightbox', () => {
  const { swiper, calls, open } = fixture('active', 0);
  swiper.clickedSlide = undefined;
  handleEventSlideClick(swiper, open, events);
  assert.deepEqual(calls, []);
});
