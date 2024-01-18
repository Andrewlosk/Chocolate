


new Swiper('.our_chocolates__slider', {
  pagination: {
    el: '.swiper__pagination',
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
    375: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2.9,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 18,
    },
  },
});


new Swiper('.reviews__slider', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    // dynamicBullets: true,
  },
  grabCursor: true,
  slideToClickedSlide: true,
  keyboard: {
    enabled: true,
    onlyinViewport: true,
  },

  freeMode: true,
  autoplay: {
    delay: 2000,
    stopOnLastSlide: false,
    disableonInteraction: true,
  },
  speed: 750,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 28,
    },
  },
});