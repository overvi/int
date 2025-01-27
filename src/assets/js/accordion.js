document.querySelectorAll(".accordion-header").forEach((button) => {
  button.addEventListener("click", () => {
    const isExpanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", !isExpanded);

    const panel = document.getElementById(button.getAttribute("aria-controls"));
    panel.hidden = isExpanded;
  });
});
