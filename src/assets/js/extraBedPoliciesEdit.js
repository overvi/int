const selects = document.querySelector(".selects");
const babyCots = document.getElementById("baby-cots-allowed");

babyCots.addEventListener("change", () => {
  selects.querySelectorAll("select").forEach((select) => {
    select.disabled = false;
  });
  selects.querySelector("input").disabled = false;
});




document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".switch-group").forEach((group, index) => {
    const switches = group.querySelectorAll(".switch input[type='checkbox']");
    const childSwitch = group.querySelector(".child-switch");
    const adultSwitch = group.querySelector(".adult-switch");

    function updateElements() {
      const rowEnd = document.getElementById(`row-${index + 1}-end`);
      if (!rowEnd) return;
      const existingChildRow = document.querySelector(
        `[data-group="tr-${index + 1}-child"]`
      );
      const existingAdultRow = document.querySelector(
        `[data-group="tr-${index + 1}-adult"]`
      );

      if (!childSwitch.checked && existingChildRow) existingChildRow.remove();
      if (!adultSwitch.checked && existingAdultRow) existingAdultRow.remove();

      if (!adultSwitch.checked) {
        document
          .querySelectorAll(`[data-group="tr-${index + 1}-adult"]`)
          .forEach((el) => el.remove());
      }
      if (!childSwitch.checked) {
        document
          .querySelectorAll(`[data-group="tr-${index + 1}-child"]`)
          .forEach((el) => el.remove());
      }

      if (childSwitch.checked && !existingChildRow) {
        const childRow = `<tr data-group='tr-${index + 1}-child'>
                <td class="px-5 border-e" rowspan="4">
                  <div>
                    <p class="block mb-2 leading-7">
                      Child <br />
                      From Age
                    </p>
                    <div
                      class="select relative border overflow-hidden rounded-full"
                    >
                      <select
                        name="country"
                        id="country"
                        aria-label="Country"
                        class="appearance-none theme-secondary rounded-full [&:has(option:disabled:checked)]:text-gray-200 w-full min-h-10 ps-[14px] outline-none"
                      >
                        <option disabled selected value="">Select...</option>
                        <option class="text-black" value="1">1</option>
                        <option class="text-black" value="2">2</option>
                        <option class="text-black" value="3">3</option>
                      </select>
                    </div>
                  </div>
                  <div class="mt-4">
                    <p class="block mb-2">To Age</p>
                    <div
                      class="select relative border overflow-hidden rounded-full"
                    >
                      <select
                        name="country"
                        id="country"
                        aria-label="Country"
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
                <td class="px-4 pt-4 border-e" rowspan="4">
                  <div class="h-[13.3rem]">
                    <div class="flex items-center gap-4">
                      <p>RO</p>
                      <div
                        class="border relative flex items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="resize-input h-8 outline-none ps-4 theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4">
                      <p>BB</p>
                      <div
                        class="border relative flex pe-3 items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="h-8 outline-none ps-4 w-full theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                        <p class="z-50 text-orange-500 font-bold">$</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 pe-2">
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-13"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-13"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-13">
                          Supplement Per Person</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-14"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-14"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-14">
                          Supplement Per Room</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-15"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-15"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-15">
                          Rate</label
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-group='tr-${index + 1}-child'>
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4">
                      <p>BB</p>
                      <div
                        class="border relative flex pe-3 items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="h-8 outline-none ps-4 w-full theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                        <p class="z-50 text-orange-500 font-bold">$</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 pe-2">
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-16"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-16"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-16">
                          Supplement Per Person</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-17"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-17"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-17">
                          Supplement Per Room</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-18"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-18"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-18">
                          Rate</label
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-group='tr-${index + 1}-child'>
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4">
                      <p>BB</p>
                      <div
                        class="border relative flex pe-3 items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="h-8 outline-none ps-4 w-full theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                        <p class="z-50 text-orange-500 font-bold">$</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 pe-2">
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-19"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-19"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-19">
                          Supplement Per Person</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-20"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-20"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-20">
                          Supplement Per Room</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-21"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-21"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-21">
                          Rate</label
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-group='tr-${index + 1}-child' class="last-tr">
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4">
                      <p>BB</p>
                      <div
                        class="border relative flex pe-3 items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="h-8 outline-none ps-4 w-full theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                        <p class="z-50 text-orange-500 font-bold">$</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 pe-2">
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-22"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-22"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-22">
                          Supplement Per Person</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-23"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-23"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-23">
                          Supplement Per Room</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-24"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-24"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-24">
                          Rate</label
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>`;

        rowEnd.insertAdjacentHTML("afterend", childRow);
      }

      // Add adult row only if it doesn’t already exist
      if (adultSwitch.checked && !existingAdultRow) {
        const adultRow = `<tr data-group='tr-${index + 1}-adult'>
                <td class="px-8 pt-4 border-e" rowspan="4">
                  <p class="h-[12.5rem]">Double</p>
                </td>
                <td class="px-4 pt-4 border-e" rowspan="4">
                  <div class="h-[13.3rem]">
                    <div class="flex items-center gap-4">
                      <p>RO</p>
                      <div
                        class="border relative flex items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="resize-input h-8 outline-none ps-4 theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4">
                      <p>BB</p>
                      <div
                        class="border relative flex pe-3 items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="h-8 outline-none ps-4 w-full theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                        <p class="z-50 text-orange-500 font-bold">$</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 pe-2">
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-1"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-1"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-1">
                          Supplement Per Person</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-2"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-2"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-2">
                          Supplement Per Room</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-3"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-3"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-3">
                          Rate</label
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-group='tr-${index + 1}-adult'>
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4">
                      <p>BB</p>
                      <div
                        class="border relative flex pe-3 items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="h-8 outline-none ps-4 w-full theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                        <p class="z-50 text-orange-500 font-bold">$</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 pe-2">
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-4"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-4"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-4">
                          Supplement Per Person</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-5"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-5"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-5">
                          Supplement Per Room</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-6"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-6"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-6">
                          Rate</label
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-group='tr-${index + 1}-adult'>
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4">
                      <p>BB</p>
                      <div
                        class="border relative flex pe-3 items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="h-8 outline-none ps-4 w-full theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                        <p class="z-50 text-orange-500 font-bold">$</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 pe-2">
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-7"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-7"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-7">
                          Supplement Per Person</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-8"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-8"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-8">
                          Supplement Per Room</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-9"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-9"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-9">
                          Rate</label
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>
              <tr data-group='tr-${index + 1}-adult' class="last-tr">
                <td class="ps-4">
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-4">
                      <p>BB</p>
                      <div
                        class="border relative flex pe-3 items-center gap-1 overflow-hidden outline-none w-[6.75rem] h-8 rounded-full text-sm"
                      >
                        <input
                          class="h-8 outline-none ps-4 w-full theme-secondary"
                          value="100.00"
                          autofocus=""
                        />
                        <p class="z-50 text-orange-500 font-bold">$</p>
                      </div>
                    </div>
                    <div class="flex items-center gap-2 pe-2">
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-10"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-10"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-10">
                          Supplement Per Person</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-11"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-11"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-11">
                          Supplement Per Room</label
                        >
                      </div>
                      <div
                        class="flex rounded-lg theme-color--light p-1 items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          id="input-12"
                          name="options"
                          class="hidden radio-hidden"
                        />
                        <label
                          for="input-12"
                          class="radio aspect-square mb-1"
                        ></label>
                        <label class="w-full text-sm" for="input-12">
                          Rate</label
                        >
                      </div>
                    </div>
                  </div>
                </td>
              </tr>`;

        rowEnd.insertAdjacentHTML("afterend", adultRow);
      }
    }
    function enforceSelection(changedSwitch) {
      const checkedSwitches = [...switches].filter((sw) => sw.checked);

      if (checkedSwitches.length === 0) {
        // Find the other switch and check it
        const otherSwitch = [...switches].find((sw) => sw !== changedSwitch);
        if (otherSwitch) otherSwitch.checked = true;
      }
      updateElements();
    }

    switches.forEach((sw) => {
      sw.addEventListener("change", () => enforceSelection(sw));
    });
  });
});
