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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.mjs\");\n/* harmony import */ var _modules_formatDataSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/formatDataSet */ \"./modules/formatDataSet.js\");\nvar _this = undefined;\n\n\n\n\nvar BarChart = function(param) {\n    var chartData = param.chartData, sum = param.sum, dimension = param.dimension;\n    var labels = chartData.map(function(data) {\n        return data.order_id;\n    });\n    var datasets = chartData.map(function(data) {\n        return data.total;\n    });\n    console.log(datasets);\n    var formattedDataSet = (0,_modules_formatDataSet__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        data: chartData,\n        sum: sum,\n        dimension: dimension\n    });\n    console.log(formattedDataSet);\n    var data = {\n        labels: labels,\n        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object\n        datasets: [\n            {\n                label: \"Total Spend USD\",\n                data: datasets,\n                // you can set indiviual colors for each bar\n                backgroundColor: [\n                    \"rgba(255, 255, 255, 0.6)\",\n                    \"rgba(255, 255, 255, 0.6)\",\n                    \"rgba(255, 255, 255, 0.6)\", \n                ],\n                borderWidth: 1\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_3__.Bar, {\n            data: data\n        }, void 0, false, {\n            fileName: \"/Users/jamesharding/james/vizzly/components/BarChart.js\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jamesharding/james/vizzly/components/BarChart.js\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, _this);\n};\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhckNoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUFzQztBQUNmO0FBQzZCO0FBSXBELElBQU1FLFFBQVEsR0FBRyxnQkFBbUM7UUFBaENDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxHQUFHLFNBQUhBLEdBQUcsRUFBRUMsU0FBUyxTQUFUQSxTQUFTO0lBQzNDLElBQU1DLE1BQU0sR0FBR0gsU0FBUyxDQUFDSSxHQUFHLENBQUNDLFNBQUFBLElBQUk7ZUFBS0EsSUFBSSxDQUFDQyxRQUFRO0tBQUEsQ0FBQztJQUNwRCxJQUFNQyxRQUFRLEdBQUdQLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDQyxTQUFBQSxJQUFJO2VBQUlBLElBQUksQ0FBQ0csS0FBSztLQUFBLENBQUM7SUFDbERDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSCxRQUFRLENBQUM7SUFDckIsSUFBTUksZ0JBQWdCLEdBQUdiLGtFQUFhLENBQUM7UUFBRU8sSUFBSSxFQUFFTCxTQUFTO1FBQUVDLEdBQUcsRUFBSEEsR0FBRztRQUFFQyxTQUFTLEVBQVRBLFNBQVM7S0FBRSxDQUFDO0lBQzNFTyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsZ0JBQWdCLENBQUM7SUFDN0IsSUFBTU4sSUFBSSxHQUFHO1FBQ1hGLE1BQU0sRUFBRUEsTUFBTTtRQUNkLG9LQUFvSztRQUNsS0ksUUFBUSxFQUFFO1lBQ047Z0JBQ0VLLEtBQUssRUFBRSxpQkFBaUI7Z0JBQ3hCUCxJQUFJLEVBQUVFLFFBQVE7Z0JBQ2QsNENBQTRDO2dCQUM1Q00sZUFBZSxFQUFFO29CQUNmLDBCQUEwQjtvQkFDMUIsMEJBQTBCO29CQUMxQiwwQkFBMEI7aUJBQzNCO2dCQUNEQyxXQUFXLEVBQUUsQ0FBQzthQUNmO1NBQ0o7S0FDTjtJQUNDLHFCQUNFLDhEQUFDQyxLQUFHO2tCQUNGLDRFQUFDbEIsZ0RBQUc7WUFDRlEsSUFBSSxFQUFFQSxJQUFJOzs7OztpQkFDVjs7Ozs7YUFDRSxDQUNOO0FBQ0osQ0FBQztBQTlCS04sS0FBQUEsUUFBUTtBQWdDZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0JhckNoYXJ0LmpzP2YxOWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQmFyIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0ICdjaGFydC5qcy9hdXRvJztcbmltcG9ydCBmb3JtYXREYXRhU2V0IGZyb20gJy4uL21vZHVsZXMvZm9ybWF0RGF0YVNldCdcblxuXG5cbmNvbnN0IEJhckNoYXJ0ID0gKHsgY2hhcnREYXRhLCBzdW0sIGRpbWVuc2lvbiB9KSA9PiB7XG4gIGNvbnN0IGxhYmVscyA9IGNoYXJ0RGF0YS5tYXAoZGF0YSA9PiAgZGF0YS5vcmRlcl9pZClcbiAgY29uc3QgZGF0YXNldHMgPSBjaGFydERhdGEubWFwKGRhdGEgPT4gZGF0YS50b3RhbClcbiAgY29uc29sZS5sb2coZGF0YXNldHMpXG4gIGNvbnN0IGZvcm1hdHRlZERhdGFTZXQgPSBmb3JtYXREYXRhU2V0KHsgZGF0YTogY2hhcnREYXRhLCBzdW0sIGRpbWVuc2lvbiB9KVxuICBjb25zb2xlLmxvZyhmb3JtYXR0ZWREYXRhU2V0KVxuICBjb25zdCBkYXRhID0ge1xuICAgIGxhYmVsczogbGFiZWxzLFxuICAgIC8vIGRhdGFzZXRzIGlzIGFuIGFycmF5IG9mIG9iamVjdHMgd2hlcmUgZWFjaCBvYmplY3QgcmVwcmVzZW50cyBhIHNldCBvZiBkYXRhIHRvIGRpc3BsYXkgY29ycmVzcG9uZGluZyB0byB0aGUgbGFiZWxzIGFib3ZlLiBmb3IgYnJldml0eSwgd2UnbGwga2VlcCBpdCBhdCBvbmUgb2JqZWN0XG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxhYmVsOiAnVG90YWwgU3BlbmQgVVNEJyxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFzZXRzLFxuICAgICAgICAgICAgLy8geW91IGNhbiBzZXQgaW5kaXZpdWFsIGNvbG9ycyBmb3IgZWFjaCBiYXJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xuICAgICAgICAgICAgICAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYpJyxcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC42KScsXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNiknLFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGJvcmRlcldpZHRoOiAxLFxuICAgICAgICAgIH1cbiAgICAgIF1cbn1cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPEJhclxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhckNoYXJ0Il0sIm5hbWVzIjpbIkJhciIsImZvcm1hdERhdGFTZXQiLCJCYXJDaGFydCIsImNoYXJ0RGF0YSIsInN1bSIsImRpbWVuc2lvbiIsImxhYmVscyIsIm1hcCIsImRhdGEiLCJvcmRlcl9pZCIsImRhdGFzZXRzIiwidG90YWwiLCJjb25zb2xlIiwibG9nIiwiZm9ybWF0dGVkRGF0YVNldCIsImxhYmVsIiwiYmFja2dyb3VuZENvbG9yIiwiYm9yZGVyV2lkdGgiLCJkaXYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/BarChart.js\n"));

/***/ })

});