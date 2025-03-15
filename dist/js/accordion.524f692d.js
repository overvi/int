/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["accordion"],{

/***/ "./src/assets/js/accordion.js":
/*!************************************!*\
  !*** ./src/assets/js/accordion.js ***!
  \************************************/
/***/ (() => {

eval("document.querySelectorAll(\".accordion-header\").forEach((button) => {\r\n  button.addEventListener(\"click\", () => {\r\n    const isExpanded = button.getAttribute(\"aria-expanded\") === \"true\";\r\n    button.setAttribute(\"aria-expanded\", !isExpanded);\r\n\r\n    const panel = document.getElementById(button.getAttribute(\"aria-controls\"));\r\n    panel.hidden = isExpanded;\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/accordion.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/accordion.js"));
/******/ }
]);