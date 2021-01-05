const modal = document.querySelector("#simpleModal");
const modalBtn = document.querySelector("#modalBtn");
const closeBtn = document.querySelector(".close-btn");
const closeModalBtn = document.querySelector("#close-modal");
function openModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

function outsideClick(e) {
  if (e.target === modal) modal.style.display = "none";
}
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
closeModalBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);
