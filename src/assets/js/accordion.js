document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);

    const panel = document.getElementById(button.getAttribute("aria-controls"));
    const li = button.closest("li");
    li.classList.toggle("expanded");
    if (isExpanded) {
      panel.hidden = true;
    } else {
      panel.hidden = false;
    }
  });
});
