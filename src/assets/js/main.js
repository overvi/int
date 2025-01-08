const toggleDark = document.getElementById("toggle-color-dark");
const toggleLight = document.getElementById("toggle-color-light");

toggleLight.addEventListener("click", () => {
  document.documentElement.classList.add("dark");
  localStorage.setItem("mode", "dark");
});
toggleDark.addEventListener("click", () => {
  document.documentElement.classList.remove("dark");
  localStorage.setItem("mode", "light");
});
