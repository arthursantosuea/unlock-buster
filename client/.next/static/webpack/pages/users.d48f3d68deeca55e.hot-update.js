"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/users",{

/***/ "./pages/users/index.tsx":
/*!*******************************!*\
  !*** ./pages/users/index.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GetUsers; }\n/* harmony export */ });\n/* harmony import */ var C_Users_ARKADE_Documents_GitHub_unlock_buster_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_Users_ARKADE_Documents_GitHub_unlock_buster_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_ARKADE_Documents_GitHub_unlock_buster_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/api */ \"./services/api/index.ts\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\n\n\n\n\nvar _s = $RefreshSig$();\nfunction GetUsers() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), users = ref[0], setUsers = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function getUserList() {\n            return _getUserList.apply(this, arguments);\n        }\n        function _getUserList() {\n            _getUserList = _asyncToGenerator(C_Users_ARKADE_Documents_GitHub_unlock_buster_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {\n                return C_Users_ARKADE_Documents_GitHub_unlock_buster_client_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                    while(1)switch(_ctx.prev = _ctx.next){\n                        case 0:\n                            _ctx.next = 2;\n                            return _services_api__WEBPACK_IMPORTED_MODULE_3__[\"default\"].get(\"/users\").then(function(response) {\n                                setUsers(response.data);\n                            });\n                        case 2:\n                        case \"end\":\n                            return _ctx.stop();\n                    }\n                }, _callee);\n            }));\n            return _getUserList.apply(this, arguments);\n        }\n        getUserList();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: \"flex min-h-[calc(100vh-4rem)] w-screen flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h1\", {\n                className: \"text-2xl font-bold\",\n                children: \"Users\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"ul\", {\n                className: \"flex flex-col\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                children: \"Username\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                                lineNumber: 20,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"th\", {\n                                children: \"E-mail\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    users.map(function(user) {\n                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"tr\", {\n                                    className: \"mt-4 flex flex-col items-center justify-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"h2\", {\n                                            className: \"text-2xl font-bold\",\n                                            children: user.name\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                                            lineNumber: 30,\n                                            columnNumber: 17\n                                        }, _this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                                            children: user.email\n                                        }, void 0, false, {\n                                            fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                                            lineNumber: 31,\n                                            columnNumber: 17\n                                        }, _this)\n                                    ]\n                                }, user.id, true, {\n                                    fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                                    lineNumber: 26,\n                                    columnNumber: 15\n                                }, _this)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, _this)\n                        }, void 0, false);\n                    })\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ARKADE\\\\Documents\\\\GitHub\\\\unlock-buster\\\\client\\\\pages\\\\users\\\\index.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, this);\n};\n_s(GetUsers, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = GetUsers;\nvar _c;\n$RefreshReg$(_c, \"GetUsers\");\n\n\n;\r\n    // Wrapped in an IIFE to avoid polluting the global scope\r\n    ;\r\n    (function () {\r\n        var _a, _b;\r\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\r\n        // to extract CSS. For backwards compatibility, we need to check we're in a\r\n        // browser context before continuing.\r\n        if (typeof self !== 'undefined' &&\r\n            // AMP / No-JS mode does not inject these helpers:\r\n            '$RefreshHelpers$' in self) {\r\n            // @ts-ignore __webpack_module__ is global\r\n            var currentExports = module.exports;\r\n            // @ts-ignore __webpack_module__ is global\r\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\r\n            // This cannot happen in MainTemplate because the exports mismatch between\r\n            // templating and execution.\r\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\r\n            // A module can be accepted automatically based on its exports, e.g. when\r\n            // it is a Refresh Boundary.\r\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\r\n                // Save the previous exports on update so we can compare the boundary\r\n                // signatures.\r\n                module.hot.dispose(function (data) {\r\n                    data.prevExports = currentExports;\r\n                });\r\n                // Unconditionally accept an update to this module, we'll check if it's\r\n                // still a Refresh Boundary later.\r\n                // @ts-ignore importMeta is replaced in the loader\r\n                module.hot.accept();\r\n                // This field is set when the previous version of this module was a\r\n                // Refresh Boundary, letting us know we need to check for invalidation or\r\n                // enqueue an update.\r\n                if (prevExports !== null) {\r\n                    // A boundary can become ineligible if its exports are incompatible\r\n                    // with the previous exports.\r\n                    //\r\n                    // For example, if you add/remove/change exports, we'll want to\r\n                    // re-execute the importing modules, and force those components to\r\n                    // re-render. Similarly, if you convert a class component to a\r\n                    // function, we want to invalidate the boundary.\r\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\r\n                        module.hot.invalidate();\r\n                    }\r\n                    else {\r\n                        self.$RefreshHelpers$.scheduleUpdate();\r\n                    }\r\n                }\r\n            }\r\n            else {\r\n                // Since we just executed the code for the module, it's possible that the\r\n                // new exports made it ineligible for being a boundary.\r\n                // We only care about the case when we were _previously_ a boundary,\r\n                // because we already accepted this update (accidental side effect).\r\n                var isNoLongerABoundary = prevExports !== null;\r\n                if (isNoLongerABoundary) {\r\n                    module.hot.invalidate();\r\n                }\r\n            }\r\n        }\r\n    })();\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2Vycy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEyQztBQUNQOztBQUVyQixTQUFTRyxRQUFRLEdBQUc7OztJQUNqQyxJQUEwQkgsR0FBWSxHQUFaQSwrQ0FBUSxDQUFDLEVBQUUsQ0FBQyxFQUp4QyxLQUljLEdBQWNBLEdBQVksR0FBMUIsRUFKZCxRQUl3QixHQUFJQSxHQUFZLEdBQWhCO0lBQ3RCQyxnREFBUyxDQUFDLFdBQU07aUJBQ0NLLFdBQVc7bUJBQVhBLFlBQVc7O2lCQUFYQSxZQUFXO1lBQVhBLFlBQVcsR0FBMUIscU1BQTZCOzs7OzttQ0FDckJKLHlEQUFPLENBQUMsUUFBUSxDQUFDLENBQUNNLElBQUksQ0FBQyxTQUFDQyxRQUFRLEVBQUs7Z0NBQ3pDSixRQUFRLENBQUNJLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDOzZCQUN4QixDQUFDOzs7Ozs7YUFDSDttQkFKY0osWUFBVzs7UUFLMUJBLFdBQVcsRUFBRTtLQUNkLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0UsOERBQUNLLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLDZFQUE2RTs7MEJBQzFGLDhEQUFDQyxJQUFFO2dCQUFDRCxTQUFTLEVBQUMsb0JBQW9COzBCQUFDLE9BQUs7Ozs7O29CQUFLOzBCQUM3Qyw4REFBQ0UsSUFBRTtnQkFBQ0YsU0FBUyxFQUFDLGVBQWU7O2tDQUMzQiw4REFBQ0csSUFBRTs7MENBQ0QsOERBQUNDLElBQUU7MENBQUMsVUFBUTs7Ozs7b0NBQUs7MENBQ2pCLDhEQUFDQSxJQUFFOzBDQUFDLFFBQU07Ozs7O29DQUFLOzs7Ozs7NEJBQ1o7b0JBQ0paLEtBQUssQ0FBQ2EsR0FBRyxDQUFDLFNBQUNDLElBQUk7NkNBQ2Q7c0NBQ0UsNEVBQUNILElBQUU7MENBQ0QsNEVBQUNBLElBQUU7b0NBRURILFNBQVMsRUFBQyxnREFBZ0Q7O3NEQUUxRCw4REFBQ08sSUFBRTs0Q0FBQ1AsU0FBUyxFQUFDLG9CQUFvQjtzREFBRU0sSUFBSSxDQUFDRSxJQUFJOzs7OztpREFBTTtzREFDbkQsOERBQUNDLEdBQUM7c0RBQUVILElBQUksQ0FBQ0ksS0FBSzs7Ozs7aURBQUs7O21DQUpkSixJQUFJLENBQUNLLEVBQUU7Ozs7eUNBS1Q7Ozs7O3FDQUNGO3lDQUNKO3FCQUNKLENBQUM7Ozs7OztvQkFDQzs7Ozs7O1lBQ0QsQ0FDUDtDQUNGO0dBbkN1QnBCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2Vycy9pbmRleC50c3g/MzZkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhcGkgZnJvbSAnLi4vLi4vc2VydmljZXMvYXBpJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gR2V0VXNlcnMoKSB7XHJcbiAgY29uc3QgW3VzZXJzLCBzZXRVc2Vyc10gPSB1c2VTdGF0ZShbXSlcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckxpc3QoKSB7XHJcbiAgICAgIGF3YWl0IGFwaS5nZXQoJy91c2VycycpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgc2V0VXNlcnMocmVzcG9uc2UuZGF0YSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICAgIGdldFVzZXJMaXN0KClcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtaW4taC1bY2FsYygxMDB2aC00cmVtKV0gdy1zY3JlZW4gZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTJ4bCBmb250LWJvbGRcIj5Vc2VyczwvaDE+XHJcbiAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sXCI+XHJcbiAgICAgICAgPHRyPlxyXG4gICAgICAgICAgPHRoPlVzZXJuYW1lPC90aD5cclxuICAgICAgICAgIDx0aD5FLW1haWw8L3RoPlxyXG4gICAgICAgIDwvdHI+XHJcbiAgICAgICAge3VzZXJzLm1hcCgodXNlcikgPT4gKFxyXG4gICAgICAgICAgPD5cclxuICAgICAgICAgICAgPHRyPlxyXG4gICAgICAgICAgICAgIDx0clxyXG4gICAgICAgICAgICAgICAga2V5PXt1c2VyLmlkfVxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXQtNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInRleHQtMnhsIGZvbnQtYm9sZFwiPnt1c2VyLm5hbWV9PC9oMj5cclxuICAgICAgICAgICAgICAgIDxwPnt1c2VyLmVtYWlsfTwvcD5cclxuICAgICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgICA8L3RyPlxyXG4gICAgICAgICAgPC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiR2V0VXNlcnMiLCJ1c2VycyIsInNldFVzZXJzIiwiZ2V0VXNlckxpc3QiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDEiLCJ1bCIsInRyIiwidGgiLCJtYXAiLCJ1c2VyIiwiaDIiLCJuYW1lIiwicCIsImVtYWlsIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/users/index.tsx\n");

/***/ })

});