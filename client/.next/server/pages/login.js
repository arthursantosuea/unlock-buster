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
exports.id = "pages/login";
exports.ids = ["pages/login"];
exports.modules = {

/***/ "./pages/login/index.tsx":
/*!*******************************!*\
  !*** ./pages/login/index.tsx ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"./services/api/index.ts\");\n\n\n\n\nfunction Login() {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const { 0: token , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    const handleOnSubmit = (event)=>{\n        event.preventDefault();\n        _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"/users/login\", user).then((response)=>{\n            setToken(response.data.token);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (token) {\n            localStorage.setItem(\"token\", token);\n            router.push(\"/users\");\n        }\n    }, [\n        token\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex min-h-[calc(100vh-4rem)] w-screen flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                onSubmit: handleOnSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        id: \"email\",\n                        className: \"h-10 w-96 rounded-md border-[1px] border-gray-300\",\n                        onChange: (e)=>setUser({\n                                ...user,\n                                email: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"password\",\n                        className: \"h-10 w-96 rounded-md border-[1px] border-gray-300\",\n                        onChange: (e)=>setUser({\n                                ...user,\n                                password: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"mt-4 h-10 w-96 rounded-md bg-black font-bold text-white\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTtBQUFrRDtBQUNYO0FBRUg7QUFPckIsU0FBU0ssS0FBSyxHQUFHO0lBQzlCLE1BQU0sRUFYUixHQVdTQyxJQUFJLEdBWGIsR0FXZUMsT0FBTyxNQUFJTCwrQ0FBUSxDQUFPO1FBQ3JDTSxLQUFLLEVBQUUsRUFBRTtRQUNUQyxRQUFRLEVBQUUsRUFBRTtLQUNiLENBQUM7SUFDRixNQUFNLEVBZlIsR0FlU0MsS0FBSyxHQWZkLEdBZWdCQyxRQUFRLE1BQUlULCtDQUFRLENBQUMsRUFBRSxDQUFDO0lBQ3RDLE1BQU1VLE1BQU0sR0FBR1Qsc0RBQVMsRUFBRTtJQUMxQixNQUFNVSxjQUFjLEdBQUcsQ0FBQ0MsS0FBMkIsR0FBSztRQUN0REEsS0FBSyxDQUFDQyxjQUFjLEVBQUU7UUFDdEJYLDBEQUFRLENBQUMsY0FBYyxFQUFFRSxJQUFJLENBQUMsQ0FBQ1csSUFBSSxDQUFDLENBQUNDLFFBQVEsR0FBSztZQUNoRFAsUUFBUSxDQUFDTyxRQUFRLENBQUNDLElBQUksQ0FBQ1QsS0FBSyxDQUFDO1NBQzlCLENBQUM7S0FDSDtJQUNEVCxnREFBUyxDQUFDLElBQU07UUFDZCxJQUFJUyxLQUFLLEVBQUU7WUFDVFUsWUFBWSxDQUFDQyxPQUFPLENBQUMsT0FBTyxFQUFFWCxLQUFLLENBQUM7WUFDcENFLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDLFFBQVEsQ0FBQztTQUN0QjtLQUNGLEVBQUU7UUFBQ1osS0FBSztLQUFDLENBQUM7SUFDWCxxQkFDRSw4REFBQ2EsS0FBRztRQUFDQyxTQUFTLEVBQUMsNkVBQTZFOzswQkFDMUYsOERBQUNDLElBQUU7Z0JBQUNELFNBQVMsRUFBQyxvQkFBb0I7MEJBQUMsT0FBSzs7Ozs7b0JBQUs7MEJBQzdDLDhEQUFDRSxNQUFJO2dCQUFDRixTQUFTLEVBQUMsZUFBZTtnQkFBQ0csUUFBUSxFQUFFZCxjQUFjOztrQ0FDdEQsOERBQUNlLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxPQUFPO2tDQUFDLE9BQUs7Ozs7OzRCQUFRO2tDQUNwQyw4REFBQ0MsT0FBSzt3QkFDSkMsSUFBSSxFQUFDLE9BQU87d0JBQ1pDLEVBQUUsRUFBQyxPQUFPO3dCQUNWUixTQUFTLEVBQUMsbURBQW1EO3dCQUM3RFMsUUFBUSxFQUFFLENBQUNDLENBQUMsR0FBSzNCLE9BQU8sQ0FBQztnQ0FBRSxHQUFHRCxJQUFJO2dDQUFFRSxLQUFLLEVBQUUwQixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs2QkFBRSxDQUFDOzs7Ozs0QkFDNUQ7a0NBQ0YsOERBQUNSLE9BQUs7d0JBQUNDLE9BQU8sRUFBQyxVQUFVO2tDQUFDLFVBQVE7Ozs7OzRCQUFRO2tDQUMxQyw4REFBQ0MsT0FBSzt3QkFDSkMsSUFBSSxFQUFDLFVBQVU7d0JBQ2ZDLEVBQUUsRUFBQyxVQUFVO3dCQUNiUixTQUFTLEVBQUMsbURBQW1EO3dCQUM3RFMsUUFBUSxFQUFFLENBQUNDLENBQUMsR0FBSzNCLE9BQU8sQ0FBQztnQ0FBRSxHQUFHRCxJQUFJO2dDQUFFRyxRQUFRLEVBQUV5QixDQUFDLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSzs2QkFBRSxDQUFDOzs7Ozs0QkFDL0Q7a0NBQ0YsOERBQUNDLFFBQU07d0JBQ0xOLElBQUksRUFBQyxRQUFRO3dCQUNiUCxTQUFTLEVBQUMseURBQXlEO2tDQUNwRSxPQUVEOzs7Ozs0QkFBUzs7Ozs7O29CQUNKOzs7Ozs7WUFDSCxDQUNQO0NBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi9pbmRleC50c3g/YzAxNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJ1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwYXNzd29yZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9KVxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGFwaS5wb3N0KCcvdXNlcnMvbG9naW4nLCB1c2VyKS50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBzZXRUb2tlbihyZXNwb25zZS5kYXRhLnRva2VuKVxyXG4gICAgfSlcclxuICB9XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh0b2tlbikge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbilcclxuICAgICAgcm91dGVyLnB1c2goJy91c2VycycpXHJcbiAgICB9XHJcbiAgfSwgW3Rva2VuXSlcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1pbi1oLVtjYWxjKDEwMHZoLTRyZW0pXSB3LXNjcmVlbiBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPkxvZ2luPC9oMT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy05NiByb3VuZGVkLW1kIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKHsgLi4udXNlciwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy05NiByb3VuZGVkLW1kIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKHsgLi4udXNlciwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtdC00IGgtMTAgdy05NiByb3VuZGVkLW1kIGJnLWJsYWNrIGZvbnQtYm9sZCB0ZXh0LXdoaXRlXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBMb2dpblxyXG4gICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VSb3V0ZXIiLCJhcGkiLCJMb2dpbiIsInVzZXIiLCJzZXRVc2VyIiwiZW1haWwiLCJwYXNzd29yZCIsInRva2VuIiwic2V0VG9rZW4iLCJyb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJwb3N0IiwidGhlbiIsInJlc3BvbnNlIiwiZGF0YSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJmb3JtIiwib25TdWJtaXQiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJpZCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/login/index.tsx\n");

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

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login/index.tsx"));
module.exports = __webpack_exports__;

})();