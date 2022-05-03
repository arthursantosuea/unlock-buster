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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/api */ \"./services/api/index.ts\");\n\n\n\nfunction Login() {\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const { 0: token , 1: setToken  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const handleOnSubmit = (event)=>{\n        event.preventDefault();\n        _services_api__WEBPACK_IMPORTED_MODULE_2__[\"default\"].post(\"/users/login\", user).then((response)=>{\n            setToken(response.data.token);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!token) {\n            localStorage.setItem(\"token\", token);\n        }\n    }, [\n        token\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen flex justify-center flex-col items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                className: \"flex flex-col\",\n                onSubmit: handleOnSubmit,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        children: \"Email\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"email\",\n                        id: \"email\",\n                        className: \"h-10 w-96 rounded-md border-[1px] border-gray-300\",\n                        onChange: (e)=>setUser({\n                                ...user,\n                                email: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        children: \"Password\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"password\",\n                        id: \"password\",\n                        className: \"h-10 w-96 rounded-md border-[1px] border-gray-300\",\n                        onChange: (e)=>setUser({\n                                ...user,\n                                password: e.target.value\n                            })\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"w-96 h-10 rounded-md bg-pink-400 text-white\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\login\\\\index.tsx\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sb2dpbi9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7QUFBa0Q7QUFFZDtBQU9yQixTQUFTSSxLQUFLLEdBQUc7SUFDOUIsTUFBTSxFQVZSLEdBVVNDLElBQUksR0FWYixHQVVlQyxPQUFPLE1BQUlKLCtDQUFRLENBQU87UUFDckNLLEtBQUssRUFBRSxFQUFFO1FBQ1RDLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQztJQUNGLE1BQU0sRUFkUixHQWNTQyxLQUFLLEdBZGQsR0FjZ0JDLFFBQVEsTUFBSVIsK0NBQVEsQ0FBQyxFQUFFLENBQUM7SUFFdEMsTUFBTVMsY0FBYyxHQUFHLENBQUNDLEtBQTJCLEdBQUs7UUFDdERBLEtBQUssQ0FBQ0MsY0FBYyxFQUFFLENBQUM7UUFDdkJWLDBEQUFRLENBQUMsY0FBYyxFQUFFRSxJQUFJLENBQUMsQ0FBQ1UsSUFBSSxDQUFDLENBQUNDLFFBQVEsR0FBSztZQUNoRE4sUUFBUSxDQUFDTSxRQUFRLENBQUNDLElBQUksQ0FBQ1IsS0FBSyxDQUFDLENBQUM7U0FDL0IsQ0FBQztLQUNIO0lBQ0RSLGdEQUFTLENBQUMsSUFBTTtRQUNoQixJQUFHLENBQUNRLEtBQUssRUFBQztZQUNSUyxZQUFZLENBQUNDLE9BQU8sQ0FBQyxPQUFPLEVBQUVWLEtBQUssQ0FBQyxDQUFDO1NBQ3RDO0tBQ0EsRUFBRTtRQUFDQSxLQUFLO0tBQUMsQ0FBQztJQUNYLHFCQUNFLDhEQUFDVyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxvREFBb0Q7OzBCQUNqRSw4REFBQ0MsSUFBRTswQkFBQyxPQUFLOzs7OztvQkFBSzswQkFDZCw4REFBQ0MsTUFBSTtnQkFBQ0YsU0FBUyxFQUFDLGVBQWU7Z0JBQUNHLFFBQVEsRUFBRWIsY0FBYzs7a0NBQ3RELDhEQUFDYyxPQUFLO3dCQUFDQyxPQUFPLEVBQUMsT0FBTztrQ0FBQyxPQUFLOzs7Ozs0QkFBUTtrQ0FDcEMsOERBQUNDLE9BQUs7d0JBQ0pDLElBQUksRUFBQyxPQUFPO3dCQUNaQyxFQUFFLEVBQUMsT0FBTzt3QkFDVlIsU0FBUyxFQUFDLG1EQUFtRDt3QkFDN0RTLFFBQVEsRUFBRSxDQUFDQyxDQUFDLEdBQUt6QixPQUFPLENBQUM7Z0NBQUUsR0FBR0QsSUFBSTtnQ0FBRUUsS0FBSyxFQUFFd0IsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7NkJBQUUsQ0FBQzs7Ozs7NEJBQzVEO2tDQUNGLDhEQUFDUixPQUFLO3dCQUFDQyxPQUFPLEVBQUMsVUFBVTtrQ0FBQyxVQUFROzs7Ozs0QkFBUTtrQ0FDMUMsOERBQUNDLE9BQUs7d0JBQ0pDLElBQUksRUFBQyxVQUFVO3dCQUNmQyxFQUFFLEVBQUMsVUFBVTt3QkFDYlIsU0FBUyxFQUFDLG1EQUFtRDt3QkFDN0RTLFFBQVEsRUFBRSxDQUFDQyxDQUFDLEdBQUt6QixPQUFPLENBQUM7Z0NBQUUsR0FBR0QsSUFBSTtnQ0FBRUcsUUFBUSxFQUFFdUIsQ0FBQyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7NkJBQUUsQ0FBQzs7Ozs7NEJBQy9EO2tDQUNGLDhEQUFDQyxRQUFNO3dCQUFDTixJQUFJLEVBQUMsUUFBUTt3QkFBQ1AsU0FBUyxFQUFDLDZDQUE2QztrQ0FBQyxPQUFLOzs7Ozs0QkFBUzs7Ozs7O29CQUN2Rjs7Ozs7O1lBQ0gsQ0FDUDtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvbG9naW4vaW5kZXgudHN4P2MwMTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJ1xyXG5cclxuaW50ZXJmYWNlIFVzZXIge1xyXG4gIGVtYWlsOiBzdHJpbmdcclxuICBwYXNzd29yZDogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXI+KHtcclxuICAgIGVtYWlsOiAnJyxcclxuICAgIHBhc3N3b3JkOiAnJyxcclxuICB9KVxyXG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChldmVudDogUmVhY3QuU3ludGhldGljRXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBhcGkucG9zdCgnL3VzZXJzL2xvZ2luJywgdXNlcikudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgc2V0VG9rZW4ocmVzcG9uc2UuZGF0YS50b2tlbik7XHJcbiAgICB9KVxyXG4gIH1cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIGlmKCF0b2tlbil7XHJcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndG9rZW4nLCB0b2tlbik7XHJcbiAgfVxyXG4gIH0sIFt0b2tlbl0pXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gZmxleCBqdXN0aWZ5LWNlbnRlciBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIj5cclxuICAgICAgPGgxPkxvZ2luPC9oMT5cclxuICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbFwiIG9uU3VibWl0PXtoYW5kbGVPblN1Ym1pdH0+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJlbWFpbFwiPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy05NiByb3VuZGVkLW1kIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKHsgLi4udXNlciwgZW1haWw6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJwYXNzd29yZFwiPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImgtMTAgdy05NiByb3VuZGVkLW1kIGJvcmRlci1bMXB4XSBib3JkZXItZ3JheS0zMDBcIlxyXG4gICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRVc2VyKHsgLi4udXNlciwgcGFzc3dvcmQ6IGUudGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3NOYW1lPVwidy05NiBoLTEwIHJvdW5kZWQtbWQgYmctcGluay00MDAgdGV4dC13aGl0ZVwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImFwaSIsIkxvZ2luIiwidXNlciIsInNldFVzZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwidG9rZW4iLCJzZXRUb2tlbiIsImhhbmRsZU9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInBvc3QiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImRpdiIsImNsYXNzTmFtZSIsImgxIiwiZm9ybSIsIm9uU3VibWl0IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwiaWQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/login/index.tsx\n");

/***/ }),

/***/ "./services/api/index.ts":
/*!*******************************!*\
  !*** ./services/api/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\nconst api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({\n    baseURL: \"http://localhost:3333\"\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (api);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQTBCO0FBRTFCLE1BQU1DLEdBQUcsR0FBR0QsbURBQVksQ0FBQztJQUNyQkcsT0FBTyxFQUFFLHVCQUF1QjtDQUNuQyxDQUFDO0FBRUYsaUVBQWVGLEdBQUcsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NlcnZpY2VzL2FwaS9pbmRleC50cz80N2IyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcclxuXHJcbmNvbnN0IGFwaSA9IGF4aW9zLmNyZWF0ZSh7XHJcbiAgICBiYXNlVVJMOiBcImh0dHA6Ly9sb2NhbGhvc3Q6MzMzM1wiXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXBpOyJdLCJuYW1lcyI6WyJheGlvcyIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./services/api/index.ts\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/login/index.tsx"));
module.exports = __webpack_exports__;

})();