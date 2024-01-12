// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
new Swiper('our_chocolates__slider', {
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  grapcursor: true,
  freeMode: true,
  simulateTouch: false,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableonInteraction: true,
  },
  speed: 750,
  // effect: 'coverflow'
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 3.8,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
