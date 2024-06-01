const firstModal = document.getElementById("first-prof-modal");
const secondModal = document.getElementById("second-prof-modal");
const thirdModal = document.getElementById("third-prof-modal");

function openModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "flex";
}

// Function to close a modal
function closeModal(modalId) {
  var modal = document.getElementById(modalId);
  modal.style.display = "none";
}

document.getElementById("first-prof-modal-click").onclick = function () {
  openModal("first-prof-modal");
};
document.getElementById("second-prof-modal-click").onclick = function () {
  openModal("second-prof-modal");
};
document.getElementById("third-prof-modal-click").onclick = function () {
  openModal("third-prof-modal");
};
document.getElementById("close-button").onclick = function () {
  closeModal("first-prof-modal");
};
document.getElementById("close-button-1").onclick = function () {
  closeModal("second-prof-modal");
};
document.getElementById("close-button-2").onclick = function () {
  closeModal("third-prof-modal");
};
// // When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none";
  }
};
