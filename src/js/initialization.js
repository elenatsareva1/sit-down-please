new Swiper('.hero__swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: false
  },
  autoplay: {
    delay: 5000,
  },
  allowTouchMove: false,
  effect: 'fade',
  speed: 750,
  direction: 'horizontal',
  a11y: {
    prevSlideMessage: "Предыдущиый слайд",
    nextSlideMessage: "Следующий слайд",
    lastSlideMessage: "Это последний слайд",
    firstSlideMessage: "Это первый слайд",
  }
});

new Swiper('.special__swiper', {
  navigation: {
    nextEl: '.special__swiper-button-next',
    prevEl: '.special__swiper-button-prev',
  },
  slidesPerView: 'auto',
  slidesPerGroup: 1,
  direction: 'horizontal',
  spaceBetween: 32,
  a11y: {
    prevSlideMessage: "Предыдущиый слайд",
    nextSlideMessage: "Следующий слайд",
    lastSlideMessage: "Это последний слайд",
    firstSlideMessage: "Это первый слайд",
  },
  breakpoints: {
    992: {
      slidesPerView: 'auto'
    },
    581: {
      slidesPerView: 2
    },
    320: {
      slidesPerView: 1
    }
  }
});

new Swiper('.useful__swiper', {
  navigation: {
    nextEl: '.useful__swiper-button-next',
    prevEl: '.useful__swiper-button-prev',
  },
  direction: 'horizontal',
  spaceBetween: 32,
  a11y: {
    prevSlideMessage: "Предыдущиый слайд",
    nextSlideMessage: "Следующий слайд",
    lastSlideMessage: "Это последний слайд",
    firstSlideMessage: "Это первый слайд",
  },
  breakpoints: {
  1321: {
    slidesPerView: 2,
  },
  993: {
    slidesPerView: 3,
  },
  540: {
    slidesPerView: 2,
  }
}
});

new Swiper('.same__swiper', {
  navigation: {
    nextEl: '.same__swiper-button-next',
    prevEl: '.same__swiper-button-prev',
  },
  direction: 'horizontal',
  slidesPerView: 4,
  a11y: {
    prevSlideMessage: "Предыдущиый слайд",
    nextSlideMessage: "Следующий слайд",
    lastSlideMessage: "Это последний слайд",
    firstSlideMessage: "Это первый слайд",
  },
  breakpoints: {
    1321: {
      slidesPerView: 4,
      spaceBetween: 32,
    },
    993: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
    580: {
      slidesPerView: 2,
      spaceBetween: 32,
    },
    320: {
      slidesPerView: 2,
      spaceBetween: 16,
    }
  }
});

const smallSwiper = new Swiper('.product__small-swiper', {
  spaceBetween: 38,
  slidesPerView: 'auto',
  freeMode: true,
  a11y: {
    prevSlideMessage: "Предыдущиый слайд",
    nextSlideMessage: "Следующий слайд",
    lastSlideMessage: "Это последний слайд",
    firstSlideMessage: "Это первый слайд",
  },
  breakpoints: {
    993: {
      direction: 'horizontal',
    },
    581: {
      direction: 'vertical',
      spaceBetween: 18,
    },
    320: {
      direction: 'horizontal',
      spaceBetween: 38,
    }
  }
});

new Swiper('.product__swiper', {
  thumbs: {
    swiper: smallSwiper,
  },
  a11y: {
    prevSlideMessage: "Предыдущиый слайд",
    nextSlideMessage: "Следующий слайд",
    lastSlideMessage: "Это последний слайд",
    firstSlideMessage: "Это первый слайд",
  }
});

const smallSwiper2 = new Swiper('.product__small-swiper-2', {
  spaceBetween: 78,
  slidesPerView: 'auto',
  a11y: {
    prevSlideMessage: "Предыдущиый слайд",
    nextSlideMessage: "Следующий слайд",
    lastSlideMessage: "Это последний слайд",
    firstSlideMessage: "Это первый слайд",
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      navigation: {
        nextEl: '.product__swiper-button-next',
        prevEl: '.product__swiper-button-prev',
        freeMode: false,
      },
    },
    580: {
      slidesPerView: 'auto',
      freeMode: true,
    }
  }
});

new Swiper('.product__swiper-2', {
  thumbs: {
    swiper: smallSwiper2,
  },
  a11y: {
    prevSlideMessage: "Предыдущиый слайд",
    nextSlideMessage: "Следующий слайд",
    lastSlideMessage: "Это последний слайд",
    firstSlideMessage: "Это первый слайд",
  }
});


