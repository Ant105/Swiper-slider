/* Thumbnails slider settings */
const thumbsSwiper = new Swiper(".capybara-slider__thumbs", {
  slidesPerView: "auto",
  spaceBetween: 5,
  freeMode: true,
  watchSlidesProgress: true,
  navigation: {
    nextEl: ".capybara-slider__thumb-button-next",
    prevEl: ".capybara-slider__thumb-button-prev",
  },
});

/* Main slider (large images) settings */
const mainSwiper = new Swiper(".capybara-slider__main", {
  grabCursor: true,
  speed: 450,
  longSwipesRatio: 0.15,
  keyboard: {
    enabled: true,
  },
  // Connect main slider with thumbnails slider
  thumbs: {
    swiper: thumbsSwiper,
  },
});

/* Disable image dragging for browsers that don't support -webkit-user-drag */
const slidersImages = document.querySelectorAll(".capybara-slider__image");
slidersImages.forEach(function (img) {
  img.setAttribute("draggable", "false");
});
