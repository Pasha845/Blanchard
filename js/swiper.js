/* hero */

const swiper = new Swiper('.hero__swiper', {
  allowTouchMove: false,
  loop: true,
  effect: 'fade',
  speed: 10000,
  autoplay: {
    delay: 10000
  },
  scrollbar: {
    hide: true,
  }
});

/* gallery */

let gallerySlider = new Swiper(".gallery__container", {
  slidesPerView: 1,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".gallery .gallery__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".gallery__next",
    prevEl: ".gallery__prev",
    disabledClass: "nav-btn--disabled"
  },
  scrollbar: {
    hide: true,
  },

  breakpoints: {

    630: {
      spaceBetween: 38
    },

    668: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    1300: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },
  
  a11y: false,
  keyboard: true,
  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: 'slide-visible',
  
  on: {
    init: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    },
    slideChange: function () {
      this.slides.forEach(slide => {
        if (!slide.classList.contains('slide-visible')) {
          slide.tabIndex = '-1';
        } else {
          slide.tabIndex = '';
        }
      });
    }
  }
});

/* events */

const eventsSlider = new Swiper('.events__swiper', {
  slidesPerView: 1,
  grid: {
    rows: 1
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination"
  },
  navigation: {
    nextEl: ".events__next" || ".swiper-pagination",
    prevEl: ".events__prev" || ".swiper-pagination",
    disabledClass: "events-btn--disabled"
  },
  scrollbar: {
    hide: true
  },

  breakpoints: {
    669: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    924: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 27
    },

    1150: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },
});

/* projects */

const projectsSlider = new Swiper('.projects__swiper', {
  slidesPerView: 3,
  grid: {
    rows: 1,
    fill: "row"
  },
  spaceBetween: 20,
  pagination: {
    el: ".swiper__pagination",
    type: "fraction"
  },
  navigation: {
    nextEl: ".projects__next",
    prevEl: ".projects__prev",
    disabledClass: "projects-btn--disabled"
  },
  scrollbar: {
    hide: true,
  },

  breakpoints: {
    291: {
      slidesPerView: 1,
      grid: {
        rows: 1
      },
      spaceBetween: 0
    },

    668: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    925: {
      slidesPerView: 2,
      grid: {
        rows: 1
      },
      spaceBetween: 34
    },

    1150: {
      slidesPerView: 3,
      grid: {
        rows: 1
      },
      spaceBetween: 50
    }
  },
});
