"use strict";
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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n const init = () => {\r\n  const selects = document.querySelectorAll(\"select\");\r\n  \r\n  selects.forEach((selectBox) => {\r\n    const wrapper = selectBox.parentElement;\r\n  \r\n    selectBox.addEventListener(\"focus\", () => {\r\n      wrapper.classList.add(\"open\");\r\n    });\r\n  \r\n    selectBox.addEventListener(\"blur\", () => {\r\n      wrapper.classList.remove(\"open\");\r\n    });\r\n    selectBox.addEventListener(\"change\", (ev) => {\r\n      selectBox.blur();\r\n    });\r\n  });\r\n}\r\n\r\ninit()\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (init);\n\n//# sourceURL=webpack:///./src/assets/js/select.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/select.js"));
/******/ }
]);