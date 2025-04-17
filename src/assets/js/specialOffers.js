const restrictInputs = document.getElementById("restrict-to");
const tableForChild = document.getElementById("table-for-child");

restrictInputs.querySelectorAll("input").forEach((input) => {
  input.addEventListener("change", (event) => {
    if (event.target.id === "child" && event.target.checked) {
      const table = `   
              <table class="table mt-10 bordered-table-light">
                <thead>
                  <tr
                    class="*:py-4 *:text-start thead-round-child thead-border-child"
                  >
                    <th>
                      <div class="w-full ps-8">From Age</div>
                    </th>
                    <th>
                      <div class="w-full px-4">To Age</div>
                    </th>
                    <th>
                      <div class="ps-4">Type</div>
                    </th>
                    <th>
                      <div
                        class="w-full ps-4 justify-between flex items-center"
                      >
                        <p>Action</p>
                        <button
                          id="add-row"
                          class="flex me-5 items-center gap-2.5 bg-orange-500 rounded-full min-h-10 px-6 text-white font-bold"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              opacity="0.4"
                              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                              fill="white"
                            />
                            <path
                              d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                              fill="white"
                            />
                          </svg>
                          <p>Add</p>
                        </button>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody
                  class="shadow-tbody dark:shadow-tbody-dark rounded-b-4xl"
                >
                  <tr class="empty">
                    <td colspan="4">
                      <p class="py-8 text-center">
                        no item to show. first add age
                      </p>
                    </td>
                  </tr>
                </tbody>
                <tbody
                  class="shadow-tbody hidden dark:shadow-tbody-dark text-sm rounded-b-4xl"
                >
                  <tr class="h-[3.5rem] *:py-4 *:*:ps-4">
                    <td class="ps-[38px] w-20">
                      <p>2024/03/07</p>
                    </td>

                    <td class="w-28">
                      <p>2024/03/07</p>
                    </td>
                    <td class="w-28"><p>2</p></td>
                    <td class="w-44">
                      <p>
                        mis anna lorem ipsum <br />
                        mr john lorem ipsum
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
  `;

      tableForChild.insertAdjacentHTML("beforeend", table);
      initializeTableMechanism();
    } else {
      if (tableForChild.children[0]) {
        tableForChild.children[0].remove();
      }
    }
  });
});

function attachListeners(trow, tableIndex) {
  const fromAge = trow.querySelector(`#from-age-${tableIndex}`);
  const toAge = trow.querySelector(`#to-age-${tableIndex}`);
  const infantRadio = trow.querySelector(`#infant-${tableIndex}`);
  const childRadio = trow.querySelector(`#child-table-${tableIndex}`);

  if (childRadio && fromAge && toAge) {
    childRadio.addEventListener("change", () => {
      if (childRadio.checked) {
        fromAge.value = "2";
        fromAge.disabled = true;
        toAge.disabled = false;
      }
    });
  }

  if (infantRadio && fromAge && toAge) {
    infantRadio.addEventListener("change", () => {
      if (infantRadio.checked) {
        fromAge.disabled = true;
        toAge.disabled = true;
        fromAge.value = "0";
        toAge.value = "1";
      }
    });
  }
}

document.querySelectorAll(".condition-tr").forEach((trow, index) => {
  const tableIndex = index + 1;
  attachListeners(trow, tableIndex);
});

const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === 1 && node.tagName === "TR") {
        const indexMatch = node
          .querySelector("select[id^='from-age-']")
          ?.id?.match(/\d+$/);
        if (indexMatch) {
          const tableIndex = parseInt(indexMatch[0], 10);
          attachListeners(node, tableIndex);
        }
      }
    });
  });
});

const tableBody = document.querySelector("#table-for-child tbody");
observer.observe(tableBody, {
  childList: true,
});

let secondRows = 0;

const table = document.getElementById("cancellation-policy-table");
const tableData = document.querySelector("#cancellation-policy-table tbody");
const refundable = document.getElementById("refundable");
const nonRefundable = document.getElementById("non-refundable");

refundable.addEventListener("change", () => {
  table.classList.remove("hidden");
});
nonRefundable.addEventListener("change", (ev) => {
  table.classList.add("hidden");
});
