"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["src_assets_js_general-info_js"],{

/***/ "./src/assets/js/general-info.js":
/*!***************************************!*\
  !*** ./src/assets/js/general-info.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   map: () => (/* binding */ map)\n/* harmony export */ });\nconst mapContainer = document.querySelector(\".map-container\");\r\n\r\nconst div = document.createElement(\"div\");\r\n\r\ndiv.id = \"map\";\r\ndiv.style.height = \"377px\";\r\n\r\n// Append it to the body\r\nmapContainer.appendChild(div);\r\n\r\nconst titleLayer = L.tileLayer(\r\n  \"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png\",\r\n  {\r\n    attribution: \"\",\r\n    maxZoom: 19,\r\n  }\r\n);\r\n\r\nvar map = L.map(\"map\", {\r\n  zoomControl: false,\r\n  layers: [titleLayer],\r\n  maxZoom: 18,\r\n  minZoom: 6,\r\n}).setView([43.64701, -79.39425], 15);\r\n\r\nvar marker = L.marker([43.64701, -79.39425]).addTo(map);\r\n\r\nconst deactive = document.getElementById(\"deactive\");\r\n\r\nconst modalToggle = document.getElementById(\"hotel-deactive\");\r\n\r\nmodalToggle.addEventListener(\"click\", () => {\r\n  active.checked = false;\r\n  deactive.checked = true;\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/general-info.js?");

/***/ })

}]);