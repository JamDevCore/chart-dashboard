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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.mjs\");\n/* harmony import */ var _modules_formatDataSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/formatDataSet */ \"./modules/formatDataSet.js\");\n/* harmony import */ var _modules_randomColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/randomColor */ \"./modules/randomColor.js\");\nvar _this = undefined;\n\n\n\n\n\nvar BarChart = function(param) {\n    var chartData = param.chartData, field = param.field, dimension = param.dimension, measure = param.measure, title = param.title;\n    var formattedDataSet = (0,_modules_formatDataSet__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        data: chartData,\n        field: field,\n        dimension: dimension,\n        measure: measure\n    });\n    console.log(formattedDataSet);\n    var data = {\n        labels: formattedDataSet.labels,\n        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object\n        datasets: [\n            {\n                data: formattedDataSet.summedSets,\n                // you can set indiviual colors for each bar\n                backgroundColor: formattedDataSet.labels.map(function(l) {\n                    return (0,_modules_randomColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                }),\n                borderWidth: 1\n            }\n        ]\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-100\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n            data: data,\n            options: {\n                responsive: true,\n                plugins: {\n                    title: {\n                        display: true,\n                        text: title\n                    },\n                    legend: {\n                        display: false,\n                        position: \"bottom\"\n                    }\n                }\n            }\n        }, void 0, false, {\n            fileName: \"/Users/jamesharding/james/vizzly/components/BarChart.js\",\n            lineNumber: 26,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/Users/jamesharding/james/vizzly/components/BarChart.js\",\n        lineNumber: 25,\n        columnNumber: 5\n    }, _this);\n};\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0JhckNoYXJ0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBc0M7QUFDZjtBQUM2QjtBQUNIO0FBSWpELElBQU1HLFFBQVEsR0FBRyxnQkFBcUQ7UUFBbERDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxLQUFLLFNBQUxBLEtBQUssRUFBRUMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLE9BQU8sU0FBUEEsT0FBTyxFQUFFQyxLQUFLLFNBQUxBLEtBQUs7SUFFN0QsSUFBTUMsZ0JBQWdCLEdBQUdSLGtFQUFhLENBQUM7UUFBRVMsSUFBSSxFQUFFTixTQUFTO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBLFNBQVM7UUFBRUMsT0FBTyxFQUFQQSxPQUFPO0tBQUUsQ0FBQztJQUN0RkksT0FBTyxDQUFDQyxHQUFHLENBQUNILGdCQUFnQixDQUFDO0lBQzdCLElBQU1DLElBQUksR0FBRztRQUNYRyxNQUFNLEVBQUVKLGdCQUFnQixDQUFDSSxNQUFNO1FBQy9CLG9LQUFvSztRQUNsS0MsUUFBUSxFQUFFO1lBQ047Z0JBQ0VKLElBQUksRUFBRUQsZ0JBQWdCLENBQUNNLFVBQVU7Z0JBQ2pDLDRDQUE0QztnQkFDNUNDLGVBQWUsRUFBRVAsZ0JBQWdCLENBQUNJLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDQyxTQUFBQSxDQUFDOzJCQUFJaEIsZ0VBQVcsRUFBRTtpQkFBQSxDQUFDO2dCQUNoRWlCLFdBQVcsRUFBRSxDQUFDO2FBQ2Y7U0FDSjtLQUNOO0lBQ0MscUJBQ0UsOERBQUNDLEtBQUc7UUFBQ0MsU0FBUyxFQUFDLE9BQU87a0JBQ3BCLDRFQUFDckIsZ0RBQUc7WUFDRlUsSUFBSSxFQUFFQSxJQUFJO1lBQ1ZZLE9BQU8sRUFBRTtnQkFDUEMsVUFBVSxFQUFFLElBQUk7Z0JBQ2hCQyxPQUFPLEVBQUU7b0JBQ1BoQixLQUFLLEVBQUU7d0JBQ0xpQixPQUFPLEVBQUUsSUFBSTt3QkFDYkMsSUFBSSxFQUFFbEIsS0FBSztxQkFDWjtvQkFDRG1CLE1BQU0sRUFBRTt3QkFDTkYsT0FBTyxFQUFFLEtBQUs7d0JBQ2RHLFFBQVEsRUFBRSxRQUFRO3FCQUNwQjtpQkFDRDthQUNGOzs7OztpQkFDRDs7Ozs7YUFDRSxDQUNOO0FBQ0osQ0FBQztBQXBDS3pCLEtBQUFBLFFBQVE7QUFzQ2QsK0RBQWVBLFFBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9CYXJDaGFydC5qcz9mMTljIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhciB9IGZyb20gXCJyZWFjdC1jaGFydGpzLTJcIjtcbmltcG9ydCAnY2hhcnQuanMvYXV0byc7XG5pbXBvcnQgZm9ybWF0RGF0YVNldCBmcm9tICcuLi9tb2R1bGVzL2Zvcm1hdERhdGFTZXQnXG5pbXBvcnQgcmFuZG9tQ29sb3IgZnJvbSBcIi4uL21vZHVsZXMvcmFuZG9tQ29sb3JcIjtcblxuXG5cbmNvbnN0IEJhckNoYXJ0ID0gKHsgY2hhcnREYXRhLCBmaWVsZCwgZGltZW5zaW9uLCBtZWFzdXJlLCB0aXRsZSB9KSA9PiB7XG5cbiAgY29uc3QgZm9ybWF0dGVkRGF0YVNldCA9IGZvcm1hdERhdGFTZXQoeyBkYXRhOiBjaGFydERhdGEsIGZpZWxkLCBkaW1lbnNpb24sIG1lYXN1cmUgfSlcbiAgY29uc29sZS5sb2coZm9ybWF0dGVkRGF0YVNldClcbiAgY29uc3QgZGF0YSA9IHtcbiAgICBsYWJlbHM6IGZvcm1hdHRlZERhdGFTZXQubGFiZWxzLFxuICAgIC8vIGRhdGFzZXRzIGlzIGFuIGFycmF5IG9mIG9iamVjdHMgd2hlcmUgZWFjaCBvYmplY3QgcmVwcmVzZW50cyBhIHNldCBvZiBkYXRhIHRvIGRpc3BsYXkgY29ycmVzcG9uZGluZyB0byB0aGUgbGFiZWxzIGFib3ZlLiBmb3IgYnJldml0eSwgd2UnbGwga2VlcCBpdCBhdCBvbmUgb2JqZWN0XG4gICAgICBkYXRhc2V0czogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGRhdGE6IGZvcm1hdHRlZERhdGFTZXQuc3VtbWVkU2V0cyxcbiAgICAgICAgICAgIC8vIHlvdSBjYW4gc2V0IGluZGl2aXVhbCBjb2xvcnMgZm9yIGVhY2ggYmFyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IGZvcm1hdHRlZERhdGFTZXQubGFiZWxzLm1hcChsID0+IHJhbmRvbUNvbG9yKCkpLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEsXG4gICAgICAgICAgfVxuICAgICAgXVxufVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMDBcIj5cbiAgICAgIDxCYXJcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgb3B0aW9ucz17e1xuICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgdGV4dDogdGl0bGUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgICAgIGRpc3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICBwb3NpdGlvbjogXCJib3R0b21cIlxuICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJhckNoYXJ0Il0sIm5hbWVzIjpbIkJhciIsImZvcm1hdERhdGFTZXQiLCJyYW5kb21Db2xvciIsIkJhckNoYXJ0IiwiY2hhcnREYXRhIiwiZmllbGQiLCJkaW1lbnNpb24iLCJtZWFzdXJlIiwidGl0bGUiLCJmb3JtYXR0ZWREYXRhU2V0IiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJsYWJlbHMiLCJkYXRhc2V0cyIsInN1bW1lZFNldHMiLCJiYWNrZ3JvdW5kQ29sb3IiLCJtYXAiLCJsIiwiYm9yZGVyV2lkdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJvcHRpb25zIiwicmVzcG9uc2l2ZSIsInBsdWdpbnMiLCJkaXNwbGF5IiwidGV4dCIsImxlZ2VuZCIsInBvc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/BarChart.js\n"));

/***/ })

});