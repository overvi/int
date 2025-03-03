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
