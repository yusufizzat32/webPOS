document.addEventListener("DOMContentLoaded", function () {

  const slider = document.querySelector(".slider-wrapper");
  const slides = document.querySelectorAll(".slide");
  const prevButton = document.querySelector(".prev");
  const nextButton = document.querySelector(".next");
  let currentSlide = 0;

  function updateSliderPosition() {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
  }

  prevButton.addEventListener("click", function () {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    updateSliderPosition();
  });

  nextButton.addEventListener("click", function () {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    updateSliderPosition();
  });

  window.addEventListener("resize", updateSliderPosition);
});
