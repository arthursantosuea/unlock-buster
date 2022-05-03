"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/users";
exports.ids = ["pages/users"];
exports.modules = {

/***/ "./pages/users/index.tsx":
/*!*******************************!*\
  !*** ./pages/users/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GetUsers)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./services/api/index.ts\");\n\n\n\nfunction GetUsers() {\n    const { 0: users , 1: setUsers  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        async function getUserList() {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].get(\"/users\").then((response)=>{\n                setUsers(response.data);\n            });\n        }\n        getUserList();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex w-screen flex-col items-center justify-center min-h-[calc(100vh-4rem)]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"font-bold text-2xl\",\n                children: \"Users\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col\",\n                children: users.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: \"flex flex-col items-center justify-center\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"font-bold text-2xl\",\n                                children: user.name\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: user.email\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                                lineNumber: 22,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, user.id, true, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                        lineNumber: 20,\n                        columnNumber: 21\n                    }, this)\n                )\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBMkM7QUFDUDtBQUVyQixTQUFTRyxRQUFRLEdBQUc7SUFDakMsTUFBTSxFQUpSLEdBSVNDLEtBQUssR0FKZCxHQUlnQkMsUUFBUSxNQUFJTCwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUN0Q0MsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsZUFBZUssV0FBVyxHQUFHO1lBQzNCLE1BQU1KLHlEQUFPLENBQUMsUUFBUSxDQUFDLENBQUNNLElBQUksQ0FBQyxDQUFDQyxRQUFRLEdBQUs7Z0JBQ3pDSixRQUFRLENBQUNJLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDO2FBQ3hCLENBQUM7U0FDSDtRQUNESixXQUFXLEVBQUU7S0FDZCxFQUFFLEVBQUUsQ0FBQztJQUVKLHFCQUNJLDhEQUFDSyxLQUFHO1FBQUNDLFNBQVMsRUFBQyw2RUFBNkU7OzBCQUN4Riw4REFBQ0MsSUFBRTtnQkFBQ0QsU0FBUyxFQUFDLG9CQUFvQjswQkFBQyxPQUFLOzs7OztvQkFBSzswQkFDN0MsOERBQUNFLElBQUU7Z0JBQUNGLFNBQVMsRUFBQyxlQUFlOzBCQUN4QlIsS0FBSyxDQUFDVyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxpQkFDWiw4REFBQ0MsSUFBRTt3QkFBZUwsU0FBUyxFQUFDLDJDQUEyQzs7MENBQ25FLDhEQUFDTSxJQUFFO2dDQUFDTixTQUFTLEVBQUMsb0JBQW9COzBDQUFFSSxJQUFJLENBQUNHLElBQUk7Ozs7O29DQUFNOzBDQUNuRCw4REFBQ0MsR0FBQzswQ0FBRUosSUFBSSxDQUFDSyxLQUFLOzs7OztvQ0FBSzs7dUJBRmRMLElBQUksQ0FBQ00sRUFBRTs7Ozs0QkFHWDtnQkFDUixDQUFDOzs7OztvQkFDRDs7Ozs7O1lBQ0gsQ0FDVDtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvdXNlcnMvaW5kZXgudHN4PzM2ZGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXBpIGZyb20gJy4uLy4uL3NlcnZpY2VzL2FwaSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdldFVzZXJzKCkge1xyXG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGUoW10pXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJMaXN0KCkge1xyXG4gICAgICBhd2FpdCBhcGkuZ2V0KCcvdXNlcnMnKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgIHNldFVzZXJzKHJlc3BvbnNlLmRhdGEpXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBnZXRVc2VyTGlzdCgpXHJcbiAgfSwgW10pXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggdy1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIG1pbi1oLVtjYWxjKDEwMHZoLTRyZW0pXVwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtMnhsXCI+VXNlcnM8L2gxPlxyXG4gICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiPlxyXG4gICAgICAgICAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e3VzZXIuaWR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC0yeGxcIj57dXNlci5uYW1lfTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiR2V0VXNlcnMiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0VXNlckxpc3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsIm1hcCIsInVzZXIiLCJsaSIsImgyIiwibmFtZSIsInAiLCJlbWFpbCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/users/index.tsx\n");

/***/ }),

/***/ "./services/api/index.ts":
/*!*******************************!*\
  !*** ./services/api/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3333\",\n    headers: {\n        \"Content-Type\": \"application/json\"\n    }\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRzFCLE1BQU1DLEdBQUcsR0FBR0QsbURBQVksQ0FBQztJQUNyQkcsT0FBTyxFQUFFLHVCQUF1QjtJQUNoQ0MsT0FBTyxFQUFFO1FBQ0wsY0FBYyxFQUFFLGtCQUFrQjtLQUVyQztDQUNKLENBQUM7QUFFRixpRUFBZUgsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc2VydmljZXMvYXBpL2luZGV4LnRzPzQ3YjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xyXG5cclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzM1wiLFxyXG4gICAgaGVhZGVyczogeyBcclxuICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgICAvLyBcIkF1dGhvcml6YXRpb25cIjogXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpXHJcbiAgICB9XHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJoZWFkZXJzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./services/api/index.ts\n");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/users/index.tsx"));
module.exports = __webpack_exports__;

})();