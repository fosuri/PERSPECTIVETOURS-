const overlay = document.querySelector(".hidden-form-overlay");
const form = document.querySelector(".hidden-form");


function openForm() {
  overlay.classList.remove("hide");
}

function closeForm() {
  overlay.classList.add("hide");
}


