/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["drag-drop"],{

/***/ "./src/assets/js/drag-drop.js":
/*!************************************!*\
  !*** ./src/assets/js/drag-drop.js ***!
  \************************************/
/***/ (() => {

eval("const dropArea = document.getElementById(\"drop-area\");\r\nconst fileInput = document.getElementById(\"file-input\");\r\nconst cancelUpload = document.getElementById(\"cancel-upload\");\r\nconst previewContainer = document.getElementById(\"preview-container\");\r\n\r\n// Utility function to prevent default browser behavior\r\nfunction preventDefaults(e) {\r\n  e.preventDefault();\r\n  e.stopPropagation();\r\n}\r\n\r\n// Preventing default browser behavior when dragging a file over the container\r\ndropArea.addEventListener(\"dragover\", preventDefaults);\r\ndropArea.addEventListener(\"dragenter\", preventDefaults);\r\ndropArea.addEventListener(\"dragleave\", preventDefaults);\r\n\r\n// Handling dropping files into the area\r\ndropArea.addEventListener(\"drop\", handleDrop);\r\n\r\n// We’ll discuss `handleDrop` function down the road\r\nfunction handleDrop(e) {\r\n  e.preventDefault();\r\n\r\n  // Getting the list of dragged files\r\n  const files = e.dataTransfer.files;\r\n\r\n  // Checking if there are any files\r\n  if (files.length) {\r\n    // Assigning the files to the hidden input from the first step\r\n    fileInput.files = files;\r\n\r\n    // Processing the files for previews (next step)\r\n    handleFiles(files);\r\n  }\r\n}\r\n\r\n// We’ll discuss `handleFiles` function down the road\r\nfunction handleFiles(files) {\r\n  for (const file of files) {\r\n    // Initializing the FileReader API and reading the file\r\n    const reader = new FileReader();\r\n    reader.readAsDataURL(file);\r\n\r\n    // Once the file has been loaded, fire the processing\r\n    reader.onloadend = function (e) {\r\n      const preview = document.createElement(\"img\");\r\n\r\n      if (isValidFileType(file)) {\r\n        preview.src = e.target.result;\r\n       \r\n      }\r\n\r\n      // Apply styling\r\n      preview.classList.add(\"preview-image\");\r\n\r\n      previewContainer.innerHTML = \"\";\r\n      previewContainer.appendChild(preview);\r\n    };\r\n  }\r\n}\r\n\r\n// We’ll discuss `isValidFileType` function down the road\r\nfunction isValidFileType() {\r\n  return true;\r\n}\r\n\r\ndropArea.addEventListener(\"dragover\", () => {\r\n  dropArea.classList.add(\"drag-over\");\r\n});\r\n\r\ndropArea.addEventListener(\"dragleave\", () => {\r\n  dropArea.classList.remove(\"drag-over\");\r\n});\r\nfunction isValidFileType(file) {\r\n  const allowedTypes = [\"image/jpeg\", \"image/png\", \"image/gif\"];\r\n  return allowedTypes.includes(file.type);\r\n}\r\n\r\nif (cancelUpload) {\r\n  cancelUpload.addEventListener(\"click\", () => {\r\n    if (previewContainer.innerHTML) {\r\n      previewContainer.innerText = \"\";\r\n    }\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack:///./src/assets/js/drag-drop.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/assets/js/drag-drop.js"));
/******/ }
]);