/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["contractDetails"],{

/***/ "./src/assets/js/contractDetails.js":
/*!******************************************!*\
  !*** ./src/assets/js/contractDetails.js ***!
  \******************************************/
/***/ (() => {

eval("const value = document.getElementById(\"value\");\r\nconst select = document.getElementById(\"percent-rate\");\r\n\r\nconst targetInput = document.getElementById(\"percent-rate-input\");\r\n\r\nvalue.addEventListener(\"change\", (ev) => {\r\n  const event = ev.target;\r\n\r\n  const sign = select.querySelector(\"p\");\r\n\r\n  console.log(event.value);\r\n  switch (event.value) {\r\n    case `flat-rate`:\r\n      targetInput.placeholder = \"Fee...\";\r\n      sign.textContent = \"$\";\r\n      targetInput.disabled = false;\r\n      break;\r\n    case `percent`:\r\n      targetInput.placeholder = \"Percent...\";\r\n      sign.textContent = \"%\";\r\n      targetInput.disabled = false;\r\n      break;\r\n  }\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/contractDetails.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/contractDetails.js"));
/******/ }
]);