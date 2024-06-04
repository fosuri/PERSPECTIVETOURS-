const reverseContainers = document.querySelectorAll(".why-container-reverse");
const reviewSection = document.querySelectorAll(".reviews-section");
const ticketSection = document.querySelectorAll(".tickets-section");
const offerSection = document.querySelectorAll(".offer");
const formSection = document.querySelectorAll(".form-section");

function checkScreenWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1001) {
    reverseContainers.forEach((container) => {
      container.classList.remove("why-container-reverse");
    });

    reviewSection.forEach((container) => {
      container.classList.remove("one-screen-section");
      container.classList.add("section-space");
    });

    ticketSection.forEach((container) => {
      container.classList.remove("one-screen-section");
      container.classList.add("section-space");
    });

    offerSection.forEach((container) => {
      container.classList.remove("one-screen-section");
      container.classList.add("section-space");
    });
  } else {
    reverseContainers.forEach((container) => {
      container.classList.add("why-container-reverse");
    });

    reviewSection.forEach((container) => {
      container.classList.add("one-screen-section");
      container.classList.remove("section-space");
    });

    ticketSection.forEach((container) => {
      container.classList.add("one-screen-section");
      container.classList.remove("section-space");
    });

    offerSection.forEach((container) => {
      container.classList.add("one-screen-section");
      container.classList.remove("section-space");
    });
  }
  if (screenWidth < 845) {
    formSection.forEach((container) => {
      container.classList.remove("one-screen-section");
      container.classList.add("section-space");
    });
  } else {
    formSection.forEach((container) => {
      container.classList.add("one-screen-section");
      container.classList.remove("section-space");
    });
  }
}

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);
