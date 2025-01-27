const dropdownButton = document.getElementById("dropdown-button");
const dropdownMenu = document.getElementById("dropdown-menu");
const menuItems = dropdownMenu.querySelectorAll("[role='menuitem']");

let isDropdownOpen = false;

// Toggle dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen = !isDropdownOpen;
  dropdownMenu.classList.toggle("hidden", !isDropdownOpen);
  dropdownButton.setAttribute("aria-expanded", isDropdownOpen);
  dropdownButton.classList.toggle("border-transparent");

  if (isDropdownOpen) {
    menuItems[0].focus();
  }
};

// Close dropdown
const closeDropdown = () => {
  isDropdownOpen = false;
  dropdownMenu.classList.add("hidden");
  dropdownButton.classList.add("border-transparent");

  dropdownButton.setAttribute("aria-expanded", false);
};

// Keyboard navigation for the menu
const handleMenuKeydown = (event) => {
  const currentIndex = Array.from(menuItems).indexOf(document.activeElement);
  switch (event.key) {
    case "ArrowDown":
      event.preventDefault();
      const nextIndex = (currentIndex + 1) % menuItems.length;
      menuItems[nextIndex].focus();
      break;
    case "ArrowUp":
      event.preventDefault();
      const prevIndex =
        (currentIndex - 1 + menuItems.length) % menuItems.length;
      menuItems[prevIndex].focus();
      break;
    case "Escape":
      closeDropdown();
      dropdownButton.focus();
      break;
  }
};

// Event listeners
dropdownButton.addEventListener("click", toggleDropdown);

dropdownButton.addEventListener("keydown", (event) => {
  if (event.key === "ArrowDown") {
    event.preventDefault();
    toggleDropdown();
  }
});

menuItems.forEach((item) => {
  item.addEventListener("keydown", handleMenuKeydown);
});

// Close dropdown when clicking outside
document.addEventListener("click", (event) => {
  if (
    !dropdownButton.contains(event.target) &&
    !dropdownMenu.contains(event.target)
  ) {
    closeDropdown();
  }
});
