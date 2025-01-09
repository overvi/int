const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-modal-close]");
const backdrop = document.getElementById("modal-backdrop");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalClose);
    closeModal(modal);
  });
});

backdrop.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.open");
  modals.forEach((modal) => closeModal(modal));
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    const modals = document.querySelectorAll(".modal.open");
    modals.forEach((modal) => closeModal(modal));
  }
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("open");
  backdrop.classList.add("open");
  modal.focus();
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("open");
  backdrop.classList.remove("open");
  const openButton = document.querySelector(
    `[data-modal-target="#${modal.id}"]`
  );
  openButton.focus();
}
