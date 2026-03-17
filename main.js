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

const mainSwiper = new Swiper(".capybara-slider__main", {
  grabCursor: true,
  speed: 450,
  threshold: 2,
  longSwipesRatio: 0.15,
  longSwipesMs: 300,
  keyboard: {
    enabled: true,
  },
  thumbs: {
    swiper: thumbsSwiper,
  },
  pagination: {
    el: ".capybara-slider__pagination",
    clickable: true,
  },
});

const slidersImages = document.querySelectorAll(".capybara-slider__image");
slidersImages.forEach(function (img) {
  img.setAttribute("draggable", "false");
});

// пригождалось для теста работы srcset
const images = document.querySelectorAll(".img-test");
images.forEach(function (img) {
  console.log(img.currentSrc);
});
