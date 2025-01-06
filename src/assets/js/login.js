const img = new Image();
img.src = "/dist/assets/img/login-bg.65cc0016.webp";
img.onload = () => {
  document.body.classList.add("bg-loaded");
};
