document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = document.querySelectorAll(".image");

  let currentPosition = 0;
  const imagesToShow = 4;

  nextBtn.addEventListener("click", function () {
    if (currentPosition < images.length - imagesToShow) {
      currentPosition++;
    } else {
      currentPosition = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", function () {
    if (currentPosition > 0) {
      currentPosition--;
    } else {
      currentPosition = images.length - imagesToShow;
    }
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentPosition * (100 / imagesToShow) + "%";
    carousel.style.transform = "translateX(" + translateValue + ")";
  }
});
