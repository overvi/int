const mapContainer = document.querySelector(".map-container");

const div = document.createElement("div");

div.id = "map";
div.style.height = "377px";

// Append it to the body
mapContainer.appendChild(div);

const titleLayer = L.tileLayer(
  "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  {
    attribution: "",
    maxZoom: 19,
  }
);

export var map = L.map("map", {
  zoomControl: false,
  layers: [titleLayer],
  maxZoom: 18,
  minZoom: 6,
}).setView([43.64701, -79.39425], 15);

var marker = L.marker([43.64701, -79.39425]).addTo(map);

const deactive = document.getElementById("deactive");

const modalToggle = document.getElementById("hotel-deactive");

modalToggle.addEventListener("click", () => {
  active.checked = false;
  deactive.checked = true;
});
