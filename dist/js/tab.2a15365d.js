/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["tab"],{

/***/ "./src/assets/js/tab.js":
/*!******************************!*\
  !*** ./src/assets/js/tab.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const tabs = document.querySelectorAll(\".tab\");\r\nconst tabContents = document.querySelectorAll(\".tab-content\");\r\nconst tabsArr = Array.from(tabs);\r\n\r\ntabs.forEach((tab) => {\r\n  tab.addEventListener(\"click\", function () {\r\n    if (tab.classList.contains(\"has-map\")) {\r\n      __webpack_require__.e(/*! import() */ \"src_assets_js_general-info_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./general-info */ \"./src/assets/js/general-info.js\")).then((map) => {\r\n        setTimeout(() => {\r\n          map.map.invalidateSize();\r\n        }, 1000);\r\n      });\r\n    }\r\n    const parentTab = tab.closest(\".tab-content\");\r\n    tabs.forEach((tab2) => {\r\n      if (!parentTab || parentTab.id !== tab2.getAttribute(\"data-tab\")) {\r\n        tab2.classList.remove(\"active\");\r\n      }\r\n    });\r\n\r\n    // Get the data-tab target\r\n    const target = tab.getAttribute(\"data-tab\");\r\n\r\n    console.log(document.getElementById(target))\r\n    tabContents.forEach((tc) => {\r\n      if (!parentTab || parentTab.id !== tc.id) {\r\n        tc.classList.add(\"hidden\");\r\n      }\r\n    });\r\n\r\n    // Activate the clicked tab\r\n    tab.classList.add(\"active\");\r\n    document.getElementById(target).classList.remove(\"hidden\");\r\n    const targetContent = document.getElementById(target);\r\n\r\n    const childTabs = targetContent.querySelectorAll(\".tab\");\r\n    if (childTabs.length > 0) {\r\n      const firstChildTab = childTabs[0];\r\n      firstChildTab.click(); // Programmatically trigger the click event\r\n    }\r\n  });\r\n});\r\n\n\n//# sourceURL=webpack:///./src/assets/js/tab.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/tab.js"));
/******/ }
]);