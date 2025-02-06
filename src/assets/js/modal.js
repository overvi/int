const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-modal-close]");
const backdrop = document.getElementById("modal-backdrop");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    if (modal) {
      closeAllModals();
      openModal(modal);
    }
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalClose);
    closeModal(modal);
  });
});

backdrop.addEventListener("click", closeAllModals);

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeAllModals();
});

function openModal(modal) {
  if (!modal) return;
  modal.classList.add("open");
  backdrop.classList.add("open");
  modal.focus();
}

function closeModal(modal) {
  if (!modal) return;
  modal.classList.remove("open");
  if (!document.querySelector(".modal.open")) backdrop.classList.remove("open");
  const openButton = document.querySelector(
    `[data-modal-target="#${modal.id}"]`
  );
  if (openButton) openButton.focus();
}

function closeAllModals() {
  document.querySelectorAll(".modal.open").forEach(closeModal);
}
