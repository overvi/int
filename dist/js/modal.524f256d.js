/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["modal"],{

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (() => {

eval("const openModalButtons = document.querySelectorAll(\"[data-modal-target]\");\r\nconst closeModalButtons = document.querySelectorAll(\"[data-modal-close]\");\r\nconst backdrop = document.getElementById(\"modal-backdrop\");\r\n\r\nopenModalButtons.forEach((button) => {\r\n  button.addEventListener(\"click\", () => {\r\n    const modal = document.querySelector(button.dataset.modalTarget);\r\n    if (modal) {\r\n      closeAllModals();\r\n      openModal(modal);\r\n    }\r\n  });\r\n});\r\n\r\ncloseModalButtons.forEach((button) => {\r\n  button.addEventListener(\"click\", () => {\r\n    const modal = document.querySelector(button.dataset.modalClose);\r\n    closeModal(modal);\r\n  });\r\n});\r\n\r\nbackdrop.addEventListener(\"click\", (e) => {\r\n  if (!e.target.closest(\".modal\")) {\r\n    closeAllModals();\r\n  }\r\n});\r\n\r\ndocument.addEventListener(\"keydown\", (e) => {\r\n  if (e.key === \"Escape\") closeAllModals();\r\n});\r\n\r\nfunction openModal(modal) {\r\n  if (!modal) return;\r\n  modal.classList.add(\"open\");\r\n  backdrop.classList.add(\"open\");\r\n  modal.focus();\r\n}\r\n\r\nfunction closeModal(modal) {\r\n  if (!modal) return;\r\n  modal.classList.remove(\"open\");\r\n  if (!document.querySelector(\".modal.open\")) backdrop.classList.remove(\"open\");\r\n  const openButton = document.querySelector(\r\n    `[data-modal-target=\"#${modal.id}\"]`\r\n  );\r\n  if (openButton) openButton.focus();\r\n}\r\n\r\nfunction closeAllModals() {\r\n  document.querySelectorAll(\".modal.open\").forEach(closeModal);\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/modal.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/modal.js"));
/******/ }
]);