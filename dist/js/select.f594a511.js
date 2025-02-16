/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["select"],{

/***/ "./src/assets/js/select.js":
/*!*********************************!*\
  !*** ./src/assets/js/select.js ***!
  \*********************************/
/***/ (() => {

eval("const selects = document.querySelectorAll(\"select\");\r\n\r\nselects.forEach((selectBox) => {\r\n  const wrapper = selectBox.parentElement;\r\n\r\n  selectBox.addEventListener(\"focus\", () => {\r\n    wrapper.classList.add(\"open\");\r\n  });\r\n\r\n  selectBox.addEventListener(\"blur\", () => {\r\n    wrapper.classList.remove(\"open\");\r\n  });\r\n  selectBox.addEventListener(\"change\", (ev) => {\r\n    selectBox.blur();\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/select.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/select.js"));
/******/ }
]);