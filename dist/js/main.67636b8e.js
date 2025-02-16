/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["main"],{

/***/ "./src/assets/js/main.js":
/*!*******************************!*\
  !*** ./src/assets/js/main.js ***!
  \*******************************/
/***/ (() => {

eval("const toggleDark = document.getElementById(\"toggle-color-dark\");\r\nconst toggleLight = document.getElementById(\"toggle-color-light\");\r\n\r\ntoggleLight.addEventListener(\"click\", () => {\r\n  document.documentElement.classList.add(\"dark\");\r\n  localStorage.setItem(\"mode\", \"dark\");\r\n});\r\ntoggleDark.addEventListener(\"click\", () => {\r\n  document.documentElement.classList.remove(\"dark\");\r\n  localStorage.setItem(\"mode\", \"light\");\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/main.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/main.js"));
/******/ }
]);