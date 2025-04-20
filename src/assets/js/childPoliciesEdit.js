import init from "./select";

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


const MAX_ROWS = 2;
let rows = 1;
let rowsId = 1;

const addRows = document.getElementById("add-rows");
const childTable = document
  .getElementById("child-table")
  .querySelector("tbody");

addRows.addEventListener("click", () => {
  if (rows + 1 > MAX_ROWS) return;
  rows++;
  rowsId++;

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
                          class="flex items-center p-1 *:*:cursor-pointer text-sm theme-primary  dark:theme-neutral rounded-2xl"
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
  init();
  updateContent();
});

const updateContent = () => {
  const sameAs = document.querySelectorAll(".same-as");

  sameAs.forEach((same) => {
    same.addEventListener("change", (event) => {
      const target = document.getElementById(
        event.target.getAttribute("data-enables")
      );

      if (event.target.checked) {
        target.disabled = false;
      } else {
        target.disabled = true;
      }
    });
  });

  const typeSwitches = document.querySelectorAll(".type-switch");

  typeSwitches.forEach((ts) => {
    ts.addEventListener("change", (event) => {
      const selects = document.getElementById(
        event.target.getAttribute("data-controls")
      );
      const innerSelects = selects.querySelectorAll("select");

      if (event.target.id.includes("child")) {
        innerSelects[1].classList.remove(
          "[&:has(option:disabled:checked)]:text-gray-200"
        );
        innerSelects[1].disabled = false;

        innerSelects[0].value = 2;
        innerSelects[0].querySelectorAll("option").forEach((opt) => {
          opt.disabled = true;
        });
      } else {
        innerSelects.forEach((s) => {
          s.disabled = true;
          (s.value = ""),
            s.classList.add("[&:has(option:disabled:checked)]:text-gray-200");
        });
      }
    });
  });

  const deleteRows = document.querySelectorAll(".delete-row");

  deleteRows.forEach((dr) => {
    dr.addEventListener("click", (event) => {
      if (rows - 1 === 0) return;
      const target = document.querySelectorAll(
        `.${event.target.closest("button").getAttribute("data-delete")}`
      );
      if (deleteRows.length === 1) return;
      target.forEach((el) => {
        el.remove();
      });
      rows--;
    });
  });
};

updateContent();
