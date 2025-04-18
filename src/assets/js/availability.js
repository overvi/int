



document.getElementById("close-open-switch").addEventListener('change', (event) => {
    if (event.target.name === 'refundable?') {
      if (event.target.id === 'refundable') {
        if (!document.getElementById("release-field")) {
            document.getElementById("release-loc").innerHTML+= `   <div class="w-fit mt-6" id="release-field">
            <label class="block mb-2" for="name">Release Dates</label>
            <div
              class="theme-secondary number-input flex items-center gap-2 border outline-none w-full placeholder:text-gray-400 px-3.5 rounded-full"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.4"
                  d="M20 9.83984C20.55 9.83984 21 10.2898 21 10.8398V16.9998C21 19.9998 19.5 21.9998 16 21.9998H8C4.5 21.9998 3 19.9998 3 16.9998V10.8398C3 10.2898 3.45 9.83984 4 9.83984H20Z"
                  fill="#ABABAB"
                />
                <path
                  d="M16.7502 3.56V2C16.7502 1.59 16.4102 1.25 16.0002 1.25C15.5902 1.25 15.2502 1.59 15.2502 2V3.5H8.75024V2C8.75024 1.59 8.41024 1.25 8.00024 1.25C7.59024 1.25 7.25024 1.59 7.25024 2V3.56C4.55024 3.81 3.24023 5.42 3.04023 7.81C3.02023 8.1 3.26023 8.34 3.54023 8.34H20.4602C20.7502 8.34 20.9902 8.09 20.9602 7.81C20.7602 5.42 19.4502 3.81 16.7502 3.56Z"
                  fill="#ABABAB"
                />
                <path
                  d="M15.6599 18.47L14.9199 17.73C15.2999 17.15 15.5299 16.45 15.5299 15.7C15.5299 13.66 13.8699 12 11.8299 12C9.78988 12 8.12988 13.66 8.12988 15.7C8.12988 17.74 9.78988 19.4 11.8299 19.4C12.5799 19.4 13.2799 19.17 13.8599 18.79L14.5999 19.53C14.7499 19.68 14.9399 19.75 15.1299 19.75C15.3199 19.75 15.5099 19.68 15.6599 19.53C15.9499 19.24 15.9499 18.76 15.6599 18.47Z"
                  fill="#ABABAB"
                />
              </svg>

              <input
                placeholder="Type..."
                name="release-date"
                value="0"
                class="appearance-none placeholder:text-sm w-28 min-h-10 outline-none"
                id="release-date"
                type="number"
                min="0"
              />
              <div class="flex items-center gap-2 flex-col justify-between">
                <button aria-label="Step Up" class="up group">
                  <svg  width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.89699 4.15481L7.02449 2.28231L5.88116 1.13314C5.39699 0.648978 4.60949 0.648978 4.12533 1.13314L1.10366 4.15481C0.706993 4.55148 0.992826 5.22814 1.54699 5.22814H4.81949H8.45366C9.01366 5.22814 9.29366 4.55148 8.89699 4.15481Z" fill="#ABABAB"/>
                    </svg>
                    
                </button>
                <button aria-label="Step Down" class="down">
                  <svg class="rotate-180" width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.89699 4.15481L7.02449 2.28231L5.88116 1.13314C5.39699 0.648978 4.60949 0.648978 4.12533 1.13314L1.10366 4.15481C0.706993 4.55148 0.992826 5.22814 1.54699 5.22814H4.81949H8.45366C9.01366 5.22814 9.29366 4.55148 8.89699 4.15481Z" fill="#ABABAB"/>
                    </svg>
                    
                </button>
              </div>
            </div>
          </div>`
        }
      } else if (event.target.id === 'non-refundable') {
        console.log('Block selected');
        document.getElementById("release-field").remove()
      }
    }
  });
  