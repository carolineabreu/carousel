document.addEventListener("DOMContentLoaded", function () {
  const carousel = document.querySelector(".carousel");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");
  const images = document.querySelectorAll(".image");
  const indicatorsContainer = document.querySelector(".indicators-container");

  let currentIndex = 0;
  const imagesToShow = 4;

  for (let i = 0; i < images.length / imagesToShow; i++) {
    const indicator = document.createElement("div");
    indicator.classList.add("indicator");
    indicator.addEventListener("click", function () {
      currentIndex = i * imagesToShow;
      updateCarousel();
    });
    indicatorsContainer.appendChild(indicator);
  }

  updateIndicators();

  nextBtn.addEventListener("click", function () {
    if (currentIndex < images.length - imagesToShow) {
      currentIndex++;
    } else {
      currentIndex = 0;
    }
    updateCarousel();
  });

  prevBtn.addEventListener("click", function () {
    if (currentIndex > 0) {
      currentIndex--;
    } else {
      currentIndex = images.length - imagesToShow;
    }
    updateCarousel();
  });

  function updateCarousel() {
    const translateValue = -currentIndex * (100 / imagesToShow) + "%";
    carousel.style.transform = "translateX(" + translateValue + ")";
    updateIndicators();
  }

  function updateIndicators() {
    const indicators = document.querySelectorAll(".indicator");
    indicators.forEach((indicator, i) => {
      if (i * imagesToShow <= currentIndex && currentIndex < (i + 1) * imagesToShow) {
        indicator.classList.add("active");
      } else {
        indicator.classList.remove("active");
      }
    });
  }
});
