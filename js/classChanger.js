const reverseContainers = document.querySelectorAll(".why-container-reverse");


function checkScreenWidth() {
  const screenWidth = window.innerWidth;

  if (screenWidth < 1001) {
    reverseContainers.forEach((container) => {
      container.classList.remove("why-container-reverse");
    });

  } else {
    reverseContainers.forEach((container) => {
      container.classList.add("why-container-reverse");
    });

  }
}

window.addEventListener("load", checkScreenWidth);
window.addEventListener("resize", checkScreenWidth);
