
const table = document.getElementById("cancellation-policy-table");
const refundable = document.getElementById("refundable");
const nonRefundable = document.getElementById("non-refundable");


refundable.addEventListener("change", () => {
  table.classList.remove("hidden");
});
nonRefundable.addEventListener("change", (ev) => {
  table.classList.add("hidden");
});
