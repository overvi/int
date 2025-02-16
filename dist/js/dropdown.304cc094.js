/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["dropdown"],{

/***/ "./src/assets/js/dropdown.js":
/*!***********************************!*\
  !*** ./src/assets/js/dropdown.js ***!
  \***********************************/
/***/ (() => {

eval("const dropdownButton = document.getElementById(\"dropdown-button\");\r\nconst dropdownMenu = document.getElementById(\"dropdown-menu\");\r\nconst menuItems = dropdownMenu.querySelectorAll(\"[role='menuitem']\");\r\n\r\nlet isDropdownOpen = false;\r\n\r\n// Toggle dropdown visibility\r\nconst toggleDropdown = () => {\r\n  isDropdownOpen = !isDropdownOpen;\r\n  dropdownMenu.classList.toggle(\"hidden\", !isDropdownOpen);\r\n  dropdownButton.setAttribute(\"aria-expanded\", isDropdownOpen);\r\n  dropdownButton.classList.toggle(\"border-transparent\");\r\n\r\n  if (isDropdownOpen) {\r\n    menuItems[0].focus();\r\n  }\r\n};\r\n\r\n// Close dropdown\r\nconst closeDropdown = () => {\r\n  isDropdownOpen = false;\r\n  dropdownMenu.classList.add(\"hidden\");\r\n  dropdownButton.classList.add(\"border-transparent\");\r\n\r\n  dropdownButton.setAttribute(\"aria-expanded\", false);\r\n};\r\n\r\n// Keyboard navigation for the menu\r\nconst handleMenuKeydown = (event) => {\r\n  const currentIndex = Array.from(menuItems).indexOf(document.activeElement);\r\n  switch (event.key) {\r\n    case \"ArrowDown\":\r\n      event.preventDefault();\r\n      const nextIndex = (currentIndex + 1) % menuItems.length;\r\n      menuItems[nextIndex].focus();\r\n      break;\r\n    case \"ArrowUp\":\r\n      event.preventDefault();\r\n      const prevIndex =\r\n        (currentIndex - 1 + menuItems.length) % menuItems.length;\r\n      menuItems[prevIndex].focus();\r\n      break;\r\n    case \"Escape\":\r\n      closeDropdown();\r\n      dropdownButton.focus();\r\n      break;\r\n  }\r\n};\r\n\r\n// Event listeners\r\ndropdownButton.addEventListener(\"click\", toggleDropdown);\r\n\r\ndropdownButton.addEventListener(\"keydown\", (event) => {\r\n  if (event.key === \"ArrowDown\") {\r\n    event.preventDefault();\r\n    toggleDropdown();\r\n  }\r\n});\r\n\r\nmenuItems.forEach((item) => {\r\n  item.addEventListener(\"keydown\", handleMenuKeydown);\r\n});\r\n\r\n// Close dropdown when clicking outside\r\ndocument.addEventListener(\"click\", (event) => {\r\n  if (\r\n    !dropdownButton.contains(event.target) &&\r\n    !dropdownMenu.contains(event.target)\r\n  ) {\r\n    closeDropdown();\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/dropdown.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/dropdown.js"));
/******/ }
]);