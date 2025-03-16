import Litepicker from "litepicker";

let pickers = []; // Store active Litepicker instances

export default function initDatePicker() {
  // Destroy previous instances before reinitializing
  pickers.forEach((picker) => picker.destroy());
  pickers = []; // Clear stored instances

  document.querySelectorAll(".datePicker input").forEach((input) => {
    const picker = new Litepicker({
      element: input,
      singleMode: true,
    });

    picker.on("selected", () => {
      const prevElement = input.previousElementSibling;
      if (prevElement) {
        prevElement.classList.add("*:fill-orange-500");
      }
    });

    pickers.push(picker); // Store instance
  });
}

// Initial run
initDatePicker();

// Optional: Auto-detect new elements using MutationObserver
const observer = new MutationObserver(() => {
  initDatePicker();
});

observer.observe(document.querySelector("main"), {
  childList: true,
  subtree: true,
});
