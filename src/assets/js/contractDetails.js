import Litepicker from "litepicker";

new Litepicker({
  element: document.getElementById("start-date"),
});
new Litepicker({
  element: document.getElementById("end-date"),
});

const value = document.getElementById("value");
const select = document.getElementById("percent-rate");

const targetInput = document.getElementById("percent-rate-input")


value.addEventListener("change", (ev) => {

  const event = ev.target;

  const sign = select.querySelector("p");

  console.log(event.value)
  switch (event.value) {
    case `flat-rate`:
      targetInput.placeholder = "Fee...";
      sign.textContent = "$";
      targetInput.disabled = false;
      break;
    case `percent`:
      targetInput.placeholder = "Percent...";
      sign.textContent = "%";
      targetInput.disabled = false;
      break;

  }
});


