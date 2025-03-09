import Litepicker from "litepicker";

new Litepicker({
  element: document.getElementById("start-date"),
});
new Litepicker({
  element: document.getElementById("end-date"),
});

const policiesSelect = document.querySelectorAll(".policies-selects");

policiesSelect.forEach((selects) => {
  const fields = selects.querySelectorAll("input");
  const id = selects.id;

  const targetInput = document.querySelector(`[data-field-type=${id}]`);

  fields.forEach((field) => {
    field.addEventListener("change", (ev) => {
      const event = ev.target;
      const sign = selects.querySelector("p");

      switch (event.id) {
        case `${id}-fee`:
          targetInput.placeholder = "Fee...";
          sign.textContent = "$";
          targetInput.disabled = false;
          break;
        case `${id}-percent`:
          targetInput.placeholder = "Percent...";
          sign.textContent = "%";
          targetInput.disabled = false;
          break;
        case `${id}-free`:
          targetInput.placeholder = "Fee / Percent";
          sign.textContent = "";
          targetInput.disabled = true;
          break;
        case `${id}-n/a`:
          targetInput.placeholder = "Fee / Percent";
          sign.textContent = "";
          targetInput.disabled = true;
          break;
      }
    });
  });
});

const addPeriods = document.getElementById("add-periods");

let startPeriod = null;
let endPeriod = null;
addPeriods.addEventListener("click", () => {
  if (!fields.children.length) {
    fields.innerHTML += `
      <div class="w-full">
        <label class="block mb-2" for="start-date-period"
          >Start Date</label
        >
        <div
          class="flex datePicker relative items-center overflow-hidden gap-3.5 h-[40px] px-3.5 border rounded-full"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
              fill="#ABABAB"
            />
            <path
              opacity="0.4"
              d="M20 9.83984C20.55 9.83984 21 10.2898 21 10.8398V16.9998C21 19.9998 19.5 21.9998 16 21.9998H8C4.5 21.9998 3 19.9998 3 16.9998V10.8398C3 10.2898 3.45 9.83984 4 9.83984H20Z"
              fill="#ABABAB"
            />
            <path
              d="M8.5 14.9999C8.24 14.9999 7.98 14.8899 7.79 14.7099C7.61 14.5199 7.5 14.2599 7.5 13.9999C7.5 13.7399 7.61 13.4799 7.79 13.2899C8.07 13.0099 8.51 12.9199 8.88 13.0799C9.01 13.1299 9.12 13.1999 9.21 13.2899C9.39 13.4799 9.5 13.7399 9.5 13.9999C9.5 14.2599 9.39 14.5199 9.21 14.7099C9.02 14.8899 8.76 14.9999 8.5 14.9999Z"
              fill="#ABABAB"
            />
            <path
              d="M12 14.9999C11.74 14.9999 11.48 14.8899 11.29 14.7099C11.11 14.5199 11 14.2599 11 13.9999C11 13.7399 11.11 13.4799 11.29 13.2899C11.38 13.1999 11.49 13.1299 11.62 13.0799C11.99 12.9199 12.43 13.0099 12.71 13.2899C12.89 13.4799 13 13.7399 13 13.9999C13 14.2599 12.89 14.5199 12.71 14.7099C12.66 14.7499 12.61 14.7899 12.56 14.8299C12.5 14.8699 12.44 14.8999 12.38 14.9199C12.32 14.9499 12.26 14.9699 12.2 14.9799C12.13 14.9899 12.07 14.9999 12 14.9999Z"
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
              d="M12 18.5002C11.74 18.5002 11.48 18.3902 11.29 18.2102C11.11 18.0202 11 17.7602 11 17.5002C11 17.2402 11.11 16.9802 11.29 16.7902C11.66 16.4202 12.34 16.4202 12.71 16.7902C12.89 16.9802 13 17.2402 13 17.5002C13 17.7602 12.89 18.0202 12.71 18.2102C12.52 18.3902 12.26 18.5002 12 18.5002Z"
              fill="#ABABAB"
            />
            <path
              d="M15.5 18.5002C15.24 18.5002 14.98 18.3902 14.79 18.2102C14.61 18.0202 14.5 17.7602 14.5 17.5002C14.5 17.2402 14.61 16.9802 14.79 16.7902C15.16 16.4202 15.84 16.4202 16.21 16.7902C16.39 16.9802 16.5 17.2402 16.5 17.5002C16.5 17.7602 16.39 18.0202 16.21 18.2102C16.02 18.3902 15.76 18.5002 15.5 18.5002Z"
              fill="#ABABAB"
            />
          </svg>
      
          <input
            placeholder="1403/02/18"
            name="start-date-period"
            class="mt-0.5 min-h-[40px] theme-secondary outline-none w-full placeholder:text-gray-500 rounded-full"
            id="start-date-period"
            readonly=""
            type="text"
          />
        </div>
      </div>
      <div class="w-full">
        <label class="block mb-2" for="end-date-period">End Date</label>
        <div
          class="flex datePicker relative items-center overflow-hidden gap-3.5 h-[40px] px-3.5 border rounded-full"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75023V2C8.75023 1.59 8.41023 1.25 8.00023 1.25C7.59023 1.25 7.25023 1.59 7.25023 2V3.56C4.55023 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
              fill="#ABABAB"
            />
            <path
              opacity="0.4"
              d="M20 9.83984C20.55 9.83984 21 10.2898 21 10.8398V16.9998C21 19.9998 19.5 21.9998 16 21.9998H8C4.5 21.9998 3 19.9998 3 16.9998V10.8398C3 10.2898 3.45 9.83984 4 9.83984H20Z"
              fill="#ABABAB"
            />
            <path
              d="M8.5 14.9999C8.24 14.9999 7.98 14.8899 7.79 14.7099C7.61 14.5199 7.5 14.2599 7.5 13.9999C7.5 13.7399 7.61 13.4799 7.79 13.2899C8.07 13.0099 8.51 12.9199 8.88 13.0799C9.01 13.1299 9.12 13.1999 9.21 13.2899C9.39 13.4799 9.5 13.7399 9.5 13.9999C9.5 14.2599 9.39 14.5199 9.21 14.7099C9.02 14.8899 8.76 14.9999 8.5 14.9999Z"
              fill="#ABABAB"
            />
            <path
              d="M12 14.9999C11.74 14.9999 11.48 14.8899 11.29 14.7099C11.11 14.5199 11 14.2599 11 13.9999C11 13.7399 11.11 13.4799 11.29 13.2899C11.38 13.1999 11.49 13.1299 11.62 13.0799C11.99 12.9199 12.43 13.0099 12.71 13.2899C12.89 13.4799 13 13.7399 13 13.9999C13 14.2599 12.89 14.5199 12.71 14.7099C12.66 14.7499 12.61 14.7899 12.56 14.8299C12.5 14.8699 12.44 14.8999 12.38 14.9199C12.32 14.9499 12.26 14.9699 12.2 14.9799C12.13 14.9899 12.07 14.9999 12 14.9999Z"
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
              d="M12 18.5002C11.74 18.5002 11.48 18.3902 11.29 18.2102C11.11 18.0202 11 17.7602 11 17.5002C11 17.2402 11.11 16.9802 11.29 16.7902C11.66 16.4202 12.34 16.4202 12.71 16.7902C12.89 16.9802 13 17.2402 13 17.5002C13 17.7602 12.89 18.0202 12.71 18.2102C12.52 18.3902 12.26 18.5002 12 18.5002Z"
              fill="#ABABAB"
            />
            <path
              d="M15.5 18.5002C15.24 18.5002 14.98 18.3902 14.79 18.2102C14.61 18.0202 14.5 17.7602 14.5 17.5002C14.5 17.2402 14.61 16.9802 14.79 16.7902C15.16 16.4202 15.84 16.4202 16.21 16.7902C16.39 16.9802 16.5 17.2402 16.5 17.5002C16.5 17.7602 16.39 18.0202 16.21 18.2102C16.02 18.3902 15.76 18.5002 15.5 18.5002Z"
              fill="#ABABAB"
            />
          </svg>
      
          <input
            placeholder="1403/02/18"
            name="end-date-period"
            class="mt-0.5 min-h-[40px] theme-secondary outline-none w-full placeholder:text-gray-500 rounded-full"
            id="end-date-period"
            readonly=""
            type="text"
          />
        </div>
      </div>
      <button
      id='delete-period'
        class="self-center basis-[50%] py-3 leading-[14px] mt-5 font-bold rounded-full border border-red-500 text-red-500 w-[7rem]"
      >
        Delete
      </button>`;

    startPeriod = new Litepicker({
      element: document.getElementById("start-date-period"),
    });
    endPeriod = new Litepicker({
      element: document.getElementById("end-date-period"),
    });
  }

  const deletePeriod = document.getElementById("delete-period");

  deletePeriod.addEventListener("click", () => {
    startPeriod = null;
    endPeriod = null;
    fields.innerText = "";
  });
});

const MAX_ROWS = 2;
let rows = 1;
let rowsId = 1

const addRows = document.getElementById("add-rows");
const childTable = document
  .getElementById("child-table")
  .querySelector("tbody");

addRows.addEventListener("click", () => {
  if (rows + 1 > MAX_ROWS) return;
  rows++
  rowsId++

  const newRow = `     <tr class="!border-b-0 group row-${rowsId}">
                <td colspan="3">
                  <div class="px-2 group-[&:first-child]:pt-2">
                    <div
                      class="flex items-center px-3 rounded-2.5xl border border-orange-500 py-3 justify-between"
                    >
                      <div class="gap-1 flex items-center">
                        <span
                          class="size-[0.625rem] block bg-orange-500 rounded-full"
                        ></span>
                        <p class="font-bold text-orange-500 mt-0.5">
                          1st ExtraBed Policy
                        </p>
                      </div>
                      <div class="flex items-center gap-2">
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="checkbox"
                            id="same-as"
                            name="options"
                            data-enables='same-as-select'
                            class="hidden same-as radio-hidden"
                          />
                          <label
                            for="same-as"
                            class="radio !mr-0 aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="same-as"> Same As</label>
                        </div>
                        <div class="select may-disabled  w-40 relative border overflow-hidden rounded-full">
                          <select
                            name="same-as"
                            disabled
                            id="same-as-select"
                            aria-label="Same As?"
                            class="appearance-none theme-secondary rounded-full [&:has(option:disabled:checked)]:text-gray-200 w-full min-h-10 ps-[14px] outline-none"
                          >
                            <option disabled selected value="">Select...</option>
                            <option class="text-black" value="1">1</option>
                            <option class="text-black" value="2">2</option>
                            <option class="text-black" value="3">3</option>
                          </select>
                        </div>
                      </div>
                      <div class="flex items-center gap-4">
                        <div
                          class="flex items-center p-1 *:*:cursor-pointer text-sm theme-primary rounded-2xl"
                        >
                          <div>
                            <input
                              type="radio"
                              name="ad-${rows}"
                              data-controls="container-second"
                              class="hidden peer type-switch"
                              id="infant-${rows}"
                              checked=
                            />
                            <label
                              for="infant-${rows}"
                              class="py-1.5 block text-[#9B9B9B] font-bold border-transparent peer-checked:text-orange-500 px-5 peer-checked:bg-orange-500/15 rounded-xl peer-checked:border-orange-500 border"
                            >
                              <p>Infant</p>
                            </label>
                          </div>
                          <div>
                            <input
                              type="radio"
                              name="ad-${rows}"
                              data-controls="container-second"
                              class="hidden type-switch peer"
                              id="child-${rows}"
                            />
                            <label
                              for="child-${rows}"
                              class="py-1.5 block text-[#9B9B9B] font-bold border-transparent peer-checked:text-orange-500 px-5 peer-checked:bg-orange-500/15 rounded-xl peer-checked:border-orange-500 border"
                            >
                              <p>Child</p>
                            </label>
                          </div>
                        </div>
                        <button data-delete="row-${rowsId}" aria-label="Delete Row" class="delete-row">
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
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr id="container-second" class="row-${rowsId}">
                <td class="px-6 align-baseline pt-4 border-e" rowspan="5">
                  <div>
                    <div
                      class="select may-disabled relative border overflow-hidden rounded-full"
                    >
                      <select
                        name="1"
                        disabled 
                        id="1"
                        aria-label="1"
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
                <td class="px-4 align-baseline pt-4 border-e" rowspan="5">
                  <div>
                    <div
                      class="select may-disabled relative w-[8rem] border overflow-hidden rounded-full"
                    >
                      <select
                        name="2"
                        disabled
                        id="2"
                        aria-label="2"
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
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4 py-4 pe-2">
                      <p class="font-bold text-orange-500">RO</p>
                      <div
                        id="ro"
                        class="flex items-center policies-selects gap-4"
                      >
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="ro-n/a"
                            checked
                            name="ro-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="ro-n/a"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="ro-n/a"> N/A</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="ro-free"
                            name="ro-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="ro-free"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="ro-free"> Free</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="ro-percent"
                            name="ro-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="ro-percent"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="ro-percent">
                            Percent</label
                          >
                        </div>

                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="ro-fee"
                            name="ro-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="ro-fee"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="ro-fee"> Fee</label>
                        </div>

                        <div
                          class="flex text-sm may-disabled items-center pr-3.5 rounded-full border justify-between"
                        >
                          <input
                            data-field-type="ro"
                            name="ro-fee"
                            disabled
                            placeholder="Fee / Percent"
                            class="h-[2rem] theme-secondary outline-none w-full placeholder:text-gray-400 px-3.5 rounded-full"
                            id="ro-fee-input"
                            type="text"
                          />
                          <p class="text-orange-500 font-bold"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="row-${rowsId}">
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4 py-4 pe-2">
                      <p class="font-bold text-orange-500">BB</p>
                      <div
                        id="bb"
                        class="flex items-center policies-selects gap-4"
                      >
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="bb-n/a"
                            checked
                            name="bb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="bb-n/a"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="bb-n/a"> N/A</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="bb-free"
                            name="bb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="bb-free"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="bb-free"> Free</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="bb-percent"
                            name="bb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="bb-percent"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="bb-percent">
                            Percent</label
                          >
                        </div>

                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="bb-fee"
                            name="bb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="bb-fee"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="bb-fee"> Fee</label>
                        </div>

                        <div
                          class="flex text-sm may-disabled items-center pr-3.5 rounded-full border justify-between"
                        >
                          <input
                            data-field-type="bb"
                            name="bb-fee"
                            disabled
                            placeholder="Fee / Percent"
                            class="h-[2rem] theme-secondary outline-none w-full placeholder:text-gray-400 px-3.5 rounded-full"
                            id="bb-fee-input"
                            type="text"
                          />
                          <p class="text-orange-500 font-bold"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="row-${rowsId}">
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4 py-4 pe-2">
                      <p class="font-bold text-orange-500">EB</p>
                      <div
                        id="eb"
                        class="flex items-center policies-selects gap-4"
                      >
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="eb-n/a"
                            checked
                            name="eb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="eb-n/a"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="eb-n/a"> N/A</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="eb-free"
                            name="eb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="eb-free"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="eb-free"> Free</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="eb-percent"
                            name="eb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="eb-percent"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="eb-percent">
                            Percent</label
                          >
                        </div>

                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="eb-fee"
                            name="eb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="eb-fee"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="eb-fee"> Fee</label>
                        </div>

                        <div
                          class="flex text-sm may-disabled items-center pr-3.5 rounded-full border justify-between"
                        >
                          <input
                            data-field-type="eb"
                            name="eb-fee"
                            disabled
                            placeholder="Fee / Percent"
                            class="h-[2rem] theme-secondary outline-none w-full placeholder:text-gray-400 px-3.5 rounded-full"
                            id="eb-fee-input"
                            type="text"
                          />
                          <p class="text-orange-500 font-bold"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr class="row-${rowsId}">
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4 py-4 pe-2">
                      <p class="font-bold text-orange-500">HB</p>
                      <div
                        id="hb"
                        class="flex items-center policies-selects gap-4"
                      >
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="hb-n/a"
                            checked
                            name="hb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="hb-n/a"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="hb-n/a">N/A</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="hb-free"
                            name="hb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="hb-free"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="hb-free"> Free</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="hb-percent"
                            name="hb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="hb-percent"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="hb-percent">
                            Percent</label
                          >
                        </div>

                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="hb-fee"
                            name="hb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="hb-fee"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="hb-fee"> Fee</label>
                        </div>

                        <div
                          class="flex text-sm may-disabled items-center pr-3.5 rounded-full border justify-between"
                        >
                          <input
                            data-field-type="hb"
                            name="hb-fee"
                            disabled
                            placeholder="Fee / Percent"
                            class="h-[2rem] theme-secondary outline-none w-full placeholder:text-gray-400 px-3.5 rounded-full"
                            id="hb-fee-input"
                            type="text"
                          />
                          <p class="text-orange-500 font-bold"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>

              <tr class="!border-b-0 row-${rowsId}">
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4 py-4 pe-2">
                      <p class="font-bold text-orange-500">FB</p>
                      <div
                        id="fb"
                        class="flex items-center policies-selects gap-4"
                      >
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="fb-n/a"
                            checked
                            name="fb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="fb-n/a"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="fb-n/a"> N/A</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="fb-free"
                            name="fb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="fb-free"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="fb-free"> Free</label>
                        </div>
                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="fb-percent"
                            name="fb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="fb-percent"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="fb-percent">
                            Percent</label
                          >
                        </div>

                        <div
                          class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                        >
                          <input
                            type="radio"
                            id="fb-fee"
                            name="fb-fields"
                            class="hidden radio-hidden"
                          />
                          <label
                            for="fb-fee"
                            class="radio aspect-square mb-1"
                          ></label>
                          <label class="w-full" for="fb-fee"> Fee</label>
                        </div>

                        <div
                          class="flex text-sm may-disabled items-center pr-3.5 rounded-full border justify-between"
                        >
                          <input
                            data-field-type="fb"
                            name="fb-fee"
                            disabled
                            placeholder="Fee / Percent"
                            class="h-[2rem] theme-secondary outline-none w-full placeholder:text-gray-400 px-3.5 rounded-full"
                            id="fb-fee-input"
                            type="text"
                          />
                          <p class="text-orange-500 font-bold"></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </td>
              </tr>`;

  childTable.insertAdjacentHTML("beforeend", newRow);
  updateContent()
});

const updateContent = () => {
  const sameAs = document.querySelectorAll(".same-as")

  sameAs.forEach(same => {
    same.addEventListener("change" , (event) => {
      const target =  document.getElementById(event.target.getAttribute("data-enables"))

      if (event.target.checked) {
       target.disabled = false
      } else {
target.disabled = true
      }
    })
  })

  const typeSwitches = document.querySelectorAll(".type-switch")
  
  typeSwitches.forEach((ts) => {
    ts.addEventListener("change" , (event) => {
      const selects = document.getElementById(event.target.getAttribute("data-controls"))
      const innerSelects = selects.querySelectorAll("select")
      
   if (event.target.id.includes("child")) {
  
    innerSelects.forEach(s => {s.disabled = false , s.classList.remove("[&:has(option:disabled:checked)]:text-gray-200")})
   
    innerSelects[0].value = 2
    innerSelects[0].querySelectorAll("option").forEach(opt => {opt.disabled = true})
   } else {
    innerSelects.forEach(s => {s.disabled = true;s.value='', s.classList.add("[&:has(option:disabled:checked)]:text-gray-200")})
  
  
  
   }
    })
  })
  
  
  const deleteRows = document.querySelectorAll(".delete-row")
  
  deleteRows.forEach(dr => {
    dr.addEventListener("click" , (event) => {
      
  if (rows - 1 === 0) return
  const target = document.querySelectorAll(`.${event.target.closest("button").getAttribute("data-delete")}`)
  if (deleteRows.length === 1) return
  target.forEach(el => {el.remove()})
  rows--
    })
  })
}

updateContent()