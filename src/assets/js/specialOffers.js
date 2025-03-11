import Litepicker from "litepicker";
import init from "./select";

new Litepicker({
  element: document.getElementById("or-until"),
});
new Litepicker({
  element: document.getElementById("start-date"),
});
new Litepicker({
  element: document.getElementById("end-date"),
});

let rows = 0;

const MAX_PERIODS = 2;

const addPeriods = document.getElementById("add-periods");
const periods = document.getElementById("periods-container");
addPeriods.addEventListener("click", () => {
  if (rows + 1 > MAX_PERIODS) return;
  rows++;

  const uniqueId = Date.now();

  const newHtml = ` <div  id="period-${uniqueId}"  class="flex items-center gap-4">
                    <div class="w-full" >
                      <label class="block mb-2" for="checkInDate-${rows == 1 ? 1 : 3}"
                        >Check In<span class="text-red-500">*</span></label
                      >
                      <div
                        class="flex relative items-center overflow-hidden gap-3.5 h-10 border rounded-full"
                      >
                        <div
                          class="flex datePicker basis-[70%] relative items-center overflow-hidden gap-3.5 h-10 px-3.5 rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
                              fill="#ABABAB"
                            />
                            <path
                              opacity="0.4"
                              d="M20 9.83997C20.55 9.83997 21 10.29 21 10.84V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V10.84C3 10.29 3.45 9.83997 4 9.83997H20Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.07 13.01 8.51 12.92 8.88 13.08C9.01 13.13 9.12 13.2 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71C9.02 14.89 8.76 15 8.5 15Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.38 13.2 11.49 13.13 11.62 13.08C11.99 12.92 12.43 13.01 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71C12.66 14.75 12.61 14.79 12.56 14.83C12.5 14.87 12.44 14.9 12.38 14.92C12.32 14.95 12.26 14.97 12.2 14.98C12.13 14.99 12.07 15 12 15Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M15.5 15C15.24 15 14.98 14.89 14.79 14.71C14.61 14.52 14.5 14.26 14.5 14C14.5 13.74 14.61 13.48 14.79 13.29C14.89 13.2 14.99 13.13 15.12 13.08C15.3 13 15.5 12.98 15.7 13.02C15.76 13.03 15.82 13.05 15.88 13.08C15.94 13.1 16 13.13 16.06 13.17C16.11 13.21 16.16 13.25 16.21 13.29C16.39 13.48 16.5 13.74 16.5 14C16.5 14.26 16.39 14.52 16.21 14.71C16.16 14.75 16.11 14.79 16.06 14.83C16 14.87 15.94 14.9 15.88 14.92C15.82 14.95 15.76 14.97 15.7 14.98C15.63 14.99 15.56 15 15.5 15Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C7.99 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.3 16.5 8.5 16.48 8.7 16.52C8.76 16.53 8.82 16.55 8.88 16.58C8.94 16.6 9 16.63 9.06 16.67C9.11 16.71 9.16 16.75 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21C9.16 18.25 9.11 18.3 9.06 18.33C9 18.37 8.94 18.4 8.88 18.42C8.82 18.45 8.76 18.47 8.7 18.48C8.63 18.49 8.57 18.5 8.5 18.5Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M12 18.4999C11.74 18.4999 11.48 18.3899 11.29 18.2099C11.11 18.0199 11 17.7599 11 17.4999C11 17.2399 11.11 16.98 11.29 16.79C11.66 16.42 12.34 16.42 12.71 16.79C12.89 16.98 13 17.2399 13 17.4999C13 17.7599 12.89 18.0199 12.71 18.2099C12.52 18.3899 12.26 18.4999 12 18.4999Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M15.5 18.4999C15.24 18.4999 14.98 18.3899 14.79 18.2099C14.61 18.0199 14.5 17.7599 14.5 17.4999C14.5 17.2399 14.61 16.98 14.79 16.79C15.16 16.42 15.84 16.42 16.21 16.79C16.39 16.98 16.5 17.2399 16.5 17.4999C16.5 17.7599 16.39 18.0199 16.21 18.2099C16.02 18.3899 15.76 18.4999 15.5 18.4999Z"
                              fill="#ABABAB"
                            />
                          </svg>

                          <input
                            placeholder="Pick a Date"
                            name="checkInDate-${rows == 1 ? 1 : 3}"
                            class="mt-0.5 min-h-[40px] theme-secondary outline-none w-full placeholder:text-gray-500 rounded-full"
                            id="checkInDate-${rows == 1 ? 1 : 3}"
                            readonly
                            type="text"
                          />
                        </div>
                        <button
                          data-remove-period="period-${uniqueId}"
                          class="bg-red-500/15 delete-period  me-1 basis-[30%] text-sm font-bold border border-red-500 rounded-full text-red-500 min-h-8 min-w-[7.125rem]"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                    <div class="w-full" >
                      <label class="block mb-2" for="checkOut-${rows == 1 ? 2 : rows * 2}"
                        >Check Out<span class="text-red-500">*</span></label
                      >
                      <div
                        class="flex relative items-center overflow-hidden gap-3.5 h-10 border rounded-full"
                      >
                        <div
                          class="flex datePicker basis-[70%] relative items-center overflow-hidden gap-3.5 h-10 px-3.5 rounded-full"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
                              fill="#ABABAB"
                            />
                            <path
                              opacity="0.4"
                              d="M20 9.83997C20.55 9.83997 21 10.29 21 10.84V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V10.84C3 10.29 3.45 9.83997 4 9.83997H20Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M8.5 15C8.24 15 7.98 14.89 7.79 14.71C7.61 14.52 7.5 14.26 7.5 14C7.5 13.74 7.61 13.48 7.79 13.29C8.07 13.01 8.51 12.92 8.88 13.08C9.01 13.13 9.12 13.2 9.21 13.29C9.39 13.48 9.5 13.74 9.5 14C9.5 14.26 9.39 14.52 9.21 14.71C9.02 14.89 8.76 15 8.5 15Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M12 15C11.74 15 11.48 14.89 11.29 14.71C11.11 14.52 11 14.26 11 14C11 13.74 11.11 13.48 11.29 13.29C11.38 13.2 11.49 13.13 11.62 13.08C11.99 12.92 12.43 13.01 12.71 13.29C12.89 13.48 13 13.74 13 14C13 14.26 12.89 14.52 12.71 14.71C12.66 14.75 12.61 14.79 12.56 14.83C12.5 14.87 12.44 14.9 12.38 14.92C12.32 14.95 12.26 14.97 12.2 14.98C12.13 14.99 12.07 15 12 15Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M15.5 15C15.24 15 14.98 14.89 14.79 14.71C14.61 14.52 14.5 14.26 14.5 14C14.5 13.74 14.61 13.48 14.79 13.29C14.89 13.2 14.99 13.13 15.12 13.08C15.3 13 15.5 12.98 15.7 13.02C15.76 13.03 15.82 13.05 15.88 13.08C15.94 13.1 16 13.13 16.06 13.17C16.11 13.21 16.16 13.25 16.21 13.29C16.39 13.48 16.5 13.74 16.5 14C16.5 14.26 16.39 14.52 16.21 14.71C16.16 14.75 16.11 14.79 16.06 14.83C16 14.87 15.94 14.9 15.88 14.92C15.82 14.95 15.76 14.97 15.7 14.98C15.63 14.99 15.56 15 15.5 15Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M8.5 18.5C8.37 18.5 8.24 18.47 8.12 18.42C7.99 18.37 7.89 18.3 7.79 18.21C7.61 18.02 7.5 17.76 7.5 17.5C7.5 17.24 7.61 16.98 7.79 16.79C7.89 16.7 7.99 16.63 8.12 16.58C8.3 16.5 8.5 16.48 8.7 16.52C8.76 16.53 8.82 16.55 8.88 16.58C8.94 16.6 9 16.63 9.06 16.67C9.11 16.71 9.16 16.75 9.21 16.79C9.39 16.98 9.5 17.24 9.5 17.5C9.5 17.76 9.39 18.02 9.21 18.21C9.16 18.25 9.11 18.3 9.06 18.33C9 18.37 8.94 18.4 8.88 18.42C8.82 18.45 8.76 18.47 8.7 18.48C8.63 18.49 8.57 18.5 8.5 18.5Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M12 18.4999C11.74 18.4999 11.48 18.3899 11.29 18.2099C11.11 18.0199 11 17.7599 11 17.4999C11 17.2399 11.11 16.98 11.29 16.79C11.66 16.42 12.34 16.42 12.71 16.79C12.89 16.98 13 17.2399 13 17.4999C13 17.7599 12.89 18.0199 12.71 18.2099C12.52 18.3899 12.26 18.4999 12 18.4999Z"
                              fill="#ABABAB"
                            />
                            <path
                              d="M15.5 18.4999C15.24 18.4999 14.98 18.3899 14.79 18.2099C14.61 18.0199 14.5 17.7599 14.5 17.4999C14.5 17.2399 14.61 16.98 14.79 16.79C15.16 16.42 15.84 16.42 16.21 16.79C16.39 16.98 16.5 17.2399 16.5 17.4999C16.5 17.7599 16.39 18.0199 16.21 18.2099C16.02 18.3899 15.76 18.4999 15.5 18.4999Z"
                              fill="#ABABAB"
                            />
                          </svg>

                          <input
                            placeholder="Pick a Date"
                            name="checkOut-${rows == 1 ? 2 : rows * 2}"
                            class="mt-0.5 min-h-[40px] theme-secondary outline-none w-full placeholder:text-gray-500 rounded-full"
                            id="checkOut-${rows == 1 ? 2 : rows * 2}"
                            readonly
                            type="text"
                          />
                        </div>
                        <button 
                      data-remove-period="period-${uniqueId}"
                          class="bg-red-500/15 delete-period  me-1 basis-[30%] text-sm font-bold border border-red-500 rounded-full text-red-500 min-h-8 min-w-[7.125rem]"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>`;

  periods.insertAdjacentHTML("beforeend", newHtml);

  new Litepicker({
    element: document.getElementById(`checkInDate-${rows == 1 ? 1 : 3}`),
  });
  new Litepicker({
    element: document.getElementById(`checkOut-${rows == 1 ? 2 : rows * 2}`),
  });

  document
    .querySelector(`[data-remove-period="period-${uniqueId}"]`)
    .addEventListener("click", (ev) => {
      document.getElementById(`period-${uniqueId}`)?.remove();
      rows--;
    });
});

const restrictInputs = document.getElementById("restrict-to");
const tableForChild = document.getElementById("table-for-child");
const innerTable = tableForChild.querySelector("table tbody");

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

const initializeTableMechanism = () => {
  const tableForChild = document.getElementById("table-for-child");
  const innerTable = tableForChild.querySelector("table tbody");
  const addRow = document.getElementById("add-row");
  let tableRows = 0;
  addRow.addEventListener("click", () => {
    if (tableRows + 1 > MAX_PERIODS) return;
    tableRows++;

    const empty = innerTable.querySelector(".empty");
    if (empty) empty.classList.add("hidden");

    const trow = document.createElement("tr");
    trow.setAttribute("data-row-id", tableRows);
    trow.innerHTML = ` 
      <td>
        <div class="p-4 ps-8">
          <div class="select relative border overflow-hidden rounded-full">
            <select  disabled name="from-age-${tableRows}" id="from-age-${tableRows}" aria-label="From Age"
              class="age-select appearance-none theme-secondary rounded-full [&:has(option:disabled:checked)]:text-gray-200 w-full min-h-10 ps-[14px] outline-none">
              <option disabled  value="">Select...</option>
              <option selected class="text-black" value="0">0</option>
              <option class="text-black" value="2">2</option>
              <option class="text-black" value="3">3</option>
            </select>
          </div>
        </div>
      </td>
      <td>
        <div class="p-4">
          <div class="select relative border overflow-hidden rounded-full">
            <select defaultValue='1' disabled name="to-age-${tableRows}" id="to-age-${tableRows}" aria-label="To Age"
              class="age-select appearance-none theme-secondary rounded-full [&:has(option:disabled:checked)]:text-gray-200 w-full min-h-10 ps-[14px] outline-none">
              <option disabled  value="">Select...</option>
              <option selected class="text-black" value="1">1</option>
              <option class="text-black" value="2">2</option>
              <option class="text-black" value="3">3</option>
            </select>
          </div>
        </div>
      </td>
      <td>
        <div class="p-4">
          <div class="flex w-fit items-center p-1 *:*:cursor-pointer text-sm theme-primary rounded-2xl">
            <div>
              <input type="radio" class="hidden peer infant-radio" id="infant-${tableRows}" checked name="t-${tableRows}" />
              <label for="infant-${tableRows}"
                class="py-1.5 block text-[#9B9B9B] font-bold border-transparent peer-checked:text-orange-500 px-5 peer-checked:bg-orange-500/15 rounded-xl peer-checked:border-orange-500 border">
                <p>Infant</p>
              </label>
            </div>
            <div>
              <input type="radio" class="hidden peer child-radio" name="t-${tableRows}" id="child-table-${tableRows}" />
              <label for="child-table-${tableRows}"
                class="py-1.5 block text-[#9B9B9B] font-bold border-transparent peer-checked:text-orange-500 px-5 peer-checked:bg-orange-500/15 rounded-xl peer-checked:border-orange-500 border">
                <p>Child</p>
              </label>
            </div>
          </div>
        </div>
      </td>
      <td class="p-4">
        <button class='delete-trow' data-delete-row='${tableRows}' aria-label="Delete Row">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z" fill="#DC2626"/>
<path opacity="0.3991" d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14Z" fill="#DC2626"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M9.58008 17C9.58008 16.5858 9.91586 16.25 10.3301 16.25H13.6601C14.0743 16.25 14.4101 16.5858 14.4101 17C14.4101 17.4142 14.0743 17.75 13.6601 17.75H10.3301C9.91586 17.75 9.58008 17.4142 9.58008 17Z" fill="#DC2626"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M8.75 13C8.75 12.5858 9.08579 12.25 9.5 12.25H14.5C14.9142 12.25 15.25 12.5858 15.25 13C15.25 13.4142 14.9142 13.75 14.5 13.75H9.5C9.08579 13.75 8.75 13.4142 8.75 13Z" fill="#DC2626"/>
</svg>

        </button>
      </td>
    `;

    innerTable.appendChild(trow);
    init();

    const fromAge = trow.querySelector(`#from-age-${tableRows}`);
    const toAge = trow.querySelector(`#to-age-${tableRows}`);
    const infantRadio = trow.querySelector(`#infant-${tableRows}`);
    const childRadio = trow.querySelector(`#child-table-${tableRows}`);

    childRadio.addEventListener("change", () => {
      if (childRadio.checked) {
        fromAge.value = "2";

        fromAge.disabled = true;
        toAge.disabled = false;
      }
    });

    infantRadio.addEventListener("change", () => {
      if (infantRadio.checked) {
        fromAge.disabled = true;
        toAge.disabled = true;
        fromAge.value = "0";
        toAge.value = "1";
      }
    });
  });

  innerTable.addEventListener("click", (event) => {
    if (event.target.closest(".delete-trow")) {
      const row = event.target.closest("tr");
      row.remove();
      tableRows--;

      if (tableRows === 0) {
        const empty = innerTable.querySelector(".empty");
        if (empty) empty.classList.remove("hidden");
      }
    }
  });
};
initializeTableMechanism();

let secondRows = 0;

const MAX_ROWS = 2;
const table = document.getElementById("cancellation-policy-table");
const tableData = document.querySelector("#cancellation-policy-table tbody");
const refundable = document.getElementById("refundable");
const nonRefundable = document.getElementById("non-refundable");
const addCancellationPolicy = document.getElementById(
  "add-cancellation-policy"
);

refundable.addEventListener("change", () => {
  table.classList.remove("hidden");
});
nonRefundable.addEventListener("change", (ev) => {
  table.classList.add("hidden");
});

const updateListeners = () => {
  const deleteRows = document.querySelectorAll(".delete-row");

  deleteRows.forEach((del) => {
    del.addEventListener("click", (ev) => {
      if (secondRows === 1) {
        tableData.classList.add("empty");
      }
      tableData.removeChild(
        document.getElementById(`row-${ev.target.closest("button").id}`)
      );
      secondRows--;
    });
  });
};

addCancellationPolicy.addEventListener("click", () => {
  if (secondRows + 1 > MAX_ROWS) return;
  tableData.classList.remove("empty");
  secondRows++;

  tableData.innerHTML += `<tr id='row-${secondRows}' class="[&:not(:last-child)]:border-b ">
            <td class="ps-4 p-6">
              <div>
                <div
                  class="select relative border overflow-hidden rounded-full"
                >
                  <select
                    name="type-${secondRows}"
                    id="type-${secondRows}"
                    aria-label="Type"
                    class="appearance-none theme-secondary rounded-full [&:has(option:disabled:checked)]:text-gray-200 w-full min-h-10 ps-[14px] outline-none"
                  >
                    <option disabled selected value="">Select...</option>
                    <option class="text-black" value="1">1</option>
                    <option class="text-black" value="2">2</option>
                    <option class="text-black" value="3">3</option>
                  </select>
                </div>
              </div>
            </td>
            <td>
              <div
                class="select relative border overflow-hidden rounded-full"
              >
                <select
                  name="charge-type-${secondRows}"
                  id="charge-type-${secondRows}"
                  aria-label="Charge Type"
                  class="appearance-none theme-secondary rounded-full [&:has(option:disabled:checked)]:text-gray-200 w-full min-h-10 ps-[14px] outline-none"
                >
                  <option disabled selected value="">Select...</option>
                  <option class="text-black" value="1">1</option>
                  <option class="text-black" value="2">2</option>
                  <option class="text-black" value="3">3</option>
                </select>
              </div>
            </td>
            <td class="w-44">
              <div class="ps-4">
                <input
                  placeholder="Type..."
                  name="days-before-checkIn-${secondRows}"
                  class="min-h-[40px] theme-secondary placeholder:text-sm border outline-none w-full placeholder:text-gray-400 px-3.5 rounded-full"
                  id="days-before-checkIn-${secondRows}"
                  type="text"
                />
              </div>
            </td>
            <td class="w-44">
              <div class="ps-4">
                <input
                  placeholder="Type..."
                  name="days-before-checkIn-${secondRows}"
                  class="min-h-[40px] theme-secondary placeholder:text-sm border outline-none w-full placeholder:text-gray-400 px-3.5 rounded-full"
                  id="days-before-checkIn-${secondRows}"
                  type="text"
                />
              </div>
            </td>
            <td class="ps-4">
              <button id=${secondRows} class='delete-row' aria-label="Delete Supply">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.0697 5.23C19.4597 5.07 17.8497 4.95 16.2297 4.86V4.85L16.0097 3.55C15.8597 2.63 15.6397 1.25 13.2997 1.25H10.6797C8.34967 1.25 8.12967 2.57 7.96967 3.54L7.75967 4.82C6.82967 4.88 5.89967 4.94 4.96967 5.03L2.92967 5.23C2.50967 5.27 2.20967 5.64 2.24967 6.05C2.28967 6.46 2.64967 6.76 3.06967 6.72L5.10967 6.52C10.3497 6 15.6297 6.2 20.9297 6.73C20.9597 6.73 20.9797 6.73 21.0097 6.73C21.3897 6.73 21.7197 6.44 21.7597 6.05C21.7897 5.64 21.4897 5.27 21.0697 5.23Z"
                    fill="#DC2626"
                  />
                  <path
                    opacity="0.3991"
                    d="M19.2297 8.14C18.9897 7.89 18.6597 7.75 18.3197 7.75H5.67975C5.33975 7.75 4.99975 7.89 4.76975 8.14C4.53975 8.39 4.40975 8.73 4.42975 9.08L5.04975 19.34C5.15975 20.86 5.29975 22.76 8.78975 22.76H15.2097C18.6997 22.76 18.8398 20.87 18.9497 19.34L19.5697 9.09C19.5897 8.73 19.4597 8.39 19.2297 8.14Z"
                    fill="#DC2626"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M9.58008 17C9.58008 16.5858 9.91586 16.25 10.3301 16.25H13.6601C14.0743 16.25 14.4101 16.5858 14.4101 17C14.4101 17.4142 14.0743 17.75 13.6601 17.75H10.3301C9.91586 17.75 9.58008 17.4142 9.58008 17Z"
                    fill="#DC2626"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M8.75 13C8.75 12.5858 9.08579 12.25 9.5 12.25H14.5C14.9142 12.25 15.25 12.5858 15.25 13C15.25 13.4142 14.9142 13.75 14.5 13.75H9.5C9.08579 13.75 8.75 13.4142 8.75 13Z"
                    fill="#DC2626"
                  />
                </svg>
              </button>
            </td>
          </tr>`;
  init();
  updateListeners();
});
