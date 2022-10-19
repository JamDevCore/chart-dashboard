"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/BarChart.js":
/*!********************************!*\
  !*** ./components/BarChart.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\nvar _this = undefined;\n\n\nvar BarChart = function(param) {\n    var chartData = param.chartData;\n    var labels = chartData.map(function(data) {\n        return data.order_id;\n    });\n    var datasets = chartData.map(function(data) {\n        return data.total;\n    });\n    console.log(datasets);\n    var data = {\n        labels: labels,\n        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object\n        datasets: [\n            {\n                label: \"Total Spend USD\",\n                data: datasets,\n                // you can set indiviual colors for each bar\n                backgroundColor: [\n                    \"rgba(255, 255, 255, 0.6)\",\n                    \"rgba(255, 255, 255, 0.6)\",\n                    \"rgba(255, 255, 255, 0.6)\", \n                ],\n                borderWidth: 1\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_1__.Bar, {\n            data: data,\n            options: {}\n        }, void 0, false, {\n            fileName: \"/Users/jamesharding/james/vizzly/components/BarChart.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jamesharding/james/vizzly/components/BarChart.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhckNoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTs7QUFBc0M7QUFFdEMsSUFBTUMsUUFBUSxHQUFHLGdCQUFtQjtRQUFoQkMsU0FBUyxTQUFUQSxTQUFTO0lBQzNCLElBQU1DLE1BQU0sR0FBR0QsU0FBUyxDQUFDRSxHQUFHLENBQUNDLFNBQUFBLElBQUk7ZUFBS0EsSUFBSSxDQUFDQyxRQUFRO0tBQUEsQ0FBQztJQUNwRCxJQUFNQyxRQUFRLEdBQUdMLFNBQVMsQ0FBQ0UsR0FBRyxDQUFDQyxTQUFBQSxJQUFJO2VBQUlBLElBQUksQ0FBQ0csS0FBSztLQUFBLENBQUM7SUFDbERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUM7SUFDckIsSUFBTUYsSUFBSSxHQUFHO1FBQ1hGLE1BQU0sRUFBRUEsTUFBTTtRQUNkLG9LQUFvSztRQUNsS0ksUUFBUSxFQUFFO1lBQ047Z0JBQ0VJLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCTixJQUFJLEVBQUVFLFFBQVE7Z0JBQ2QsNENBQTRDO2dCQUM1Q0ssZUFBZSxFQUFFO29CQUNmLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQiwwQkFBMEI7aUJBQzNCO2dCQUNEQyxXQUFXLEVBQUUsQ0FBQzthQUNmO1NBQ0o7S0FDTjtJQUNDLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDZCxnREFBRztZQUNGSyxJQUFJLEVBQUVBLElBQUk7WUFDVlUsT0FBTyxFQUFFLEVBQ1I7Ozs7O2lCQUNEOzs7OzthQUNFLENBQ047QUFDSixDQUFDO0FBOUJLZCxLQUFBQSxRQUFRO0FBZ0NkLCtEQUFlQSxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvQmFyQ2hhcnQuanM/ZjE5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCYXIgfSBmcm9tIFwicmVhY3QtY2hhcnRqcy0yXCI7XG5cbmNvbnN0IEJhckNoYXJ0ID0gKHsgY2hhcnREYXRhIH0pID0+IHtcbiAgY29uc3QgbGFiZWxzID0gY2hhcnREYXRhLm1hcChkYXRhID0+ICBkYXRhLm9yZGVyX2lkKVxuICBjb25zdCBkYXRhc2V0cyA9IGNoYXJ0RGF0YS5tYXAoZGF0YSA9PiBkYXRhLnRvdGFsKVxuICBjb25zb2xlLmxvZyhkYXRhc2V0cylcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAvLyBkYXRhc2V0cyBpcyBhbiBhcnJheSBvZiBvYmplY3RzIHdoZXJlIGVhY2ggb2JqZWN0IHJlcHJlc2VudHMgYSBzZXQgb2YgZGF0YSB0byBkaXNwbGF5IGNvcnJlc3BvbmRpbmcgdG8gdGhlIGxhYmVscyBhYm92ZS4gZm9yIGJyZXZpdHksIHdlJ2xsIGtlZXAgaXQgYXQgb25lIG9iamVjdFxuICAgICAgZGF0YXNldHM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYWJlbDogJ1RvdGFsIFNwZW5kIFVTRCcsXG4gICAgICAgICAgICBkYXRhOiBkYXRhc2V0cyxcbiAgICAgICAgICAgIC8vIHlvdSBjYW4gc2V0IGluZGl2aXVhbCBjb2xvcnMgZm9yIGVhY2ggYmFyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42KScsXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpJyxcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICB9XG4gICAgICBdXG59XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxCYXJcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhckNoYXJ0Il0sIm5hbWVzIjpbIkJhciIsIkJhckNoYXJ0IiwiY2hhcnREYXRhIiwibGFiZWxzIiwibWFwIiwiZGF0YSIsIm9yZGVyX2lkIiwiZGF0YXNldHMiLCJ0b3RhbCIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbCIsImJhY2tncm91bmRDb2xvciIsImJvcmRlcldpZHRoIiwiZGl2Iiwib3B0aW9ucyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/BarChart.js\n"));

/***/ })

});