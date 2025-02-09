const selects = document.querySelectorAll("select");

selects.forEach((selectBox) => {
  const wrapper = selectBox.parentElement;

  selectBox.addEventListener("focus", () => {
    wrapper.classList.add("open");
  });

  selectBox.addEventListener("blur", () => {
    wrapper.classList.remove("open");
  });
  selectBox.addEventListener("change", (ev) => {
    selectBox.blur();
  });
});
