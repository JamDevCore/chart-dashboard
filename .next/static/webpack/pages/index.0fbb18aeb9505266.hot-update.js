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

/***/ "./components/DataChart.js":
/*!*********************************!*\
  !*** ./components/DataChart.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-chartjs-2 */ \"./node_modules/react-chartjs-2/dist/index.js\");\n/* harmony import */ var chart_js_auto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chart.js/auto */ \"./node_modules/chart.js/auto/auto.mjs\");\n/* harmony import */ var _modules_formatDataSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/formatDataSet */ \"./modules/formatDataSet.js\");\n/* harmony import */ var _modules_randomColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/randomColor */ \"./modules/randomColor.js\");\nvar _this = undefined;\n\n\n\n\n\nvar BarChart = function(param) {\n    var chartData = param.chartData, field = param.field, dimension = param.dimension, measure = param.measure, title = param.title, type = param.type;\n    var formattedDataSet = (0,_modules_formatDataSet__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n        data: chartData,\n        field: field,\n        dimension: dimension,\n        measure: measure\n    });\n    console.log(formattedDataSet);\n    var data = {\n        labels: formattedDataSet.labels,\n        // datasets is an array of objects where each object represents a set of data to display corresponding to the labels above. for brevity, we'll keep it at one object\n        datasets: [\n            {\n                data: formattedDataSet.summedSets,\n                // you can set indiviual colors for each bar\n                backgroundColor: formattedDataSet.labels.map(function(l) {\n                    return (0,_modules_randomColor__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n                }),\n                borderWidth: 1\n            }\n        ]\n    };\n    var options = {\n        responsive: true,\n        maintainAspectRatio: true,\n        plugins: {\n            title: {\n                display: true,\n                text: title\n            },\n            legend: {\n                display: false,\n                position: \"bottom\"\n            }\n        }\n    };\n    var getChartType = function() {\n        if (type === \"bar\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n                data: data,\n                options: options\n            }, void 0, false, {\n                fileName: \"/Users/jamesharding/james/vizzly/components/DataChart.js\",\n                lineNumber: 46,\n                columnNumber: 15\n            }, _this);\n        }\n        if (type === \"line\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Line, {\n                data: data,\n                options: options\n            }, void 0, false, {\n                fileName: \"/Users/jamesharding/james/vizzly/components/DataChart.js\",\n                lineNumber: 52,\n                columnNumber: 15\n            }, _this);\n        }\n        if (type === \"pie\") {\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Pie, {\n                data: data,\n                options: options\n            }, void 0, false, {\n                fileName: \"/Users/jamesharding/james/vizzly/components/DataChart.js\",\n                lineNumber: 58,\n                columnNumber: 15\n            }, _this);\n        }\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_chartjs_2__WEBPACK_IMPORTED_MODULE_4__.Bar, {\n            data: data,\n            options: options\n        }, void 0, false, {\n            fileName: \"/Users/jamesharding/james/vizzly/components/DataChart.js\",\n            lineNumber: 63,\n            columnNumber: 15\n        }, _this);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-1/2\",\n        children: getChartType()\n    }, void 0, false, {\n        fileName: \"/Users/jamesharding/james/vizzly/components/DataChart.js\",\n        lineNumber: 72,\n        columnNumber: 5\n    }, _this);\n};\n_c = BarChart;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BarChart);\nvar _c;\n$RefreshReg$(_c, \"BarChart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0RhdGFDaGFydC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7O0FBQWlEO0FBQzFCO0FBQzZCO0FBQ0g7QUFNakQsSUFBTUssUUFBUSxHQUFHLGdCQUEyRDtRQUF4REMsU0FBUyxTQUFUQSxTQUFTLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxTQUFTLFNBQVRBLFNBQVMsRUFBRUMsT0FBTyxTQUFQQSxPQUFPLEVBQUVDLEtBQUssU0FBTEEsS0FBSyxFQUFFQyxJQUFJLFNBQUpBLElBQUk7SUFHbkUsSUFBTUMsZ0JBQWdCLEdBQUdULGtFQUFhLENBQUM7UUFBRVUsSUFBSSxFQUFFUCxTQUFTO1FBQUVDLEtBQUssRUFBTEEsS0FBSztRQUFFQyxTQUFTLEVBQVRBLFNBQVM7UUFBRUMsT0FBTyxFQUFQQSxPQUFPO0tBQUUsQ0FBQztJQUN0RkssT0FBTyxDQUFDQyxHQUFHLENBQUNILGdCQUFnQixDQUFDO0lBQzdCLElBQU1DLElBQUksR0FBRztRQUNYRyxNQUFNLEVBQUVKLGdCQUFnQixDQUFDSSxNQUFNO1FBQy9CLG9LQUFvSztRQUNsS0MsUUFBUSxFQUFFO1lBQ047Z0JBQ0VKLElBQUksRUFBRUQsZ0JBQWdCLENBQUNNLFVBQVU7Z0JBQ2pDLDRDQUE0QztnQkFDNUNDLGVBQWUsRUFBRVAsZ0JBQWdCLENBQUNJLE1BQU0sQ0FBQ0ksR0FBRyxDQUFDQyxTQUFBQSxDQUFDOzJCQUFJakIsZ0VBQVcsRUFBRTtpQkFBQSxDQUFDO2dCQUNoRWtCLFdBQVcsRUFBRSxDQUFDO2FBQ2Y7U0FDSjtLQUNKO0lBR0QsSUFBTUMsT0FBTyxHQUFHO1FBQ2RDLFVBQVUsRUFBRSxJQUFJO1FBQ2hCQyxtQkFBbUIsRUFBRSxJQUFJO1FBQ3pCQyxPQUFPLEVBQUU7WUFDUGhCLEtBQUssRUFBRTtnQkFDTGlCLE9BQU8sRUFBRSxJQUFJO2dCQUNiQyxJQUFJLEVBQUVsQixLQUFLO2FBQ1o7WUFDRG1CLE1BQU0sRUFBRTtnQkFDTkYsT0FBTyxFQUFFLEtBQUs7Z0JBQ2RHLFFBQVEsRUFBRSxRQUFRO2FBQ3JCO1NBQ0E7S0FDRjtJQUVELElBQU1DLFlBQVksR0FBRyxXQUFNO1FBQ3pCLElBQUdwQixJQUFJLEtBQUssS0FBSyxFQUFFO1lBQ2pCLHFCQUFRLDhEQUFDWCxnREFBRztnQkFDVmEsSUFBSSxFQUFFQSxJQUFJO2dCQUNWVSxPQUFPLEVBQUVBLE9BQU87Ozs7O3FCQUNoQixDQUFDO1FBQ0wsQ0FBQztRQUNELElBQUdaLElBQUksS0FBSyxNQUFNLEVBQUU7WUFDbEIscUJBQVEsOERBQUNWLGlEQUFJO2dCQUNYWSxJQUFJLEVBQUVBLElBQUk7Z0JBQ1ZVLE9BQU8sRUFBRUEsT0FBTzs7Ozs7cUJBQ2hCLENBQUM7UUFDTCxDQUFDO1FBQ0QsSUFBR1osSUFBSSxLQUFLLEtBQUssRUFBRTtZQUNqQixxQkFBUSw4REFBQ1QsZ0RBQUc7Z0JBQ1ZXLElBQUksRUFBRUEsSUFBSTtnQkFDVlUsT0FBTyxFQUFFQSxPQUFPOzs7OztxQkFDaEIsQ0FBQztRQUNMLENBQUM7UUFDQyxxQkFBUSw4REFBQ3ZCLGdEQUFHO1lBQ1phLElBQUksRUFBRUEsSUFBSTtZQUNWVSxPQUFPLEVBQUVBLE9BQU87Ozs7O2lCQUNoQixDQUFDO0lBQ0wsQ0FBQztJQUlELHFCQUNFLDhEQUFDUyxLQUFHO1FBQUNDLFNBQVMsRUFBQyxPQUFPO2tCQUNuQkYsWUFBWSxFQUFFOzs7OzthQUVYLENBQ047QUFDSixDQUFDO0FBbkVLMUIsS0FBQUEsUUFBUTtBQXFFZCwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0RhdGFDaGFydC5qcz9jNDczIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEJhciwgTGluZSwgUGllIH0gZnJvbSBcInJlYWN0LWNoYXJ0anMtMlwiO1xuaW1wb3J0ICdjaGFydC5qcy9hdXRvJztcbmltcG9ydCBmb3JtYXREYXRhU2V0IGZyb20gJy4uL21vZHVsZXMvZm9ybWF0RGF0YVNldCdcbmltcG9ydCByYW5kb21Db2xvciBmcm9tIFwiLi4vbW9kdWxlcy9yYW5kb21Db2xvclwiO1xuXG5cblxuXG5cbmNvbnN0IEJhckNoYXJ0ID0gKHsgY2hhcnREYXRhLCBmaWVsZCwgZGltZW5zaW9uLCBtZWFzdXJlLCB0aXRsZSwgdHlwZSB9KSA9PiB7XG5cblxuICBjb25zdCBmb3JtYXR0ZWREYXRhU2V0ID0gZm9ybWF0RGF0YVNldCh7IGRhdGE6IGNoYXJ0RGF0YSwgZmllbGQsIGRpbWVuc2lvbiwgbWVhc3VyZSB9KVxuICBjb25zb2xlLmxvZyhmb3JtYXR0ZWREYXRhU2V0KVxuICBjb25zdCBkYXRhID0ge1xuICAgIGxhYmVsczogZm9ybWF0dGVkRGF0YVNldC5sYWJlbHMsXG4gICAgLy8gZGF0YXNldHMgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cyB3aGVyZSBlYWNoIG9iamVjdCByZXByZXNlbnRzIGEgc2V0IG9mIGRhdGEgdG8gZGlzcGxheSBjb3JyZXNwb25kaW5nIHRvIHRoZSBsYWJlbHMgYWJvdmUuIGZvciBicmV2aXR5LCB3ZSdsbCBrZWVwIGl0IGF0IG9uZSBvYmplY3RcbiAgICAgIGRhdGFzZXRzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgZGF0YTogZm9ybWF0dGVkRGF0YVNldC5zdW1tZWRTZXRzLFxuICAgICAgICAgICAgLy8geW91IGNhbiBzZXQgaW5kaXZpdWFsIGNvbG9ycyBmb3IgZWFjaCBiYXJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogZm9ybWF0dGVkRGF0YVNldC5sYWJlbHMubWFwKGwgPT4gcmFuZG9tQ29sb3IoKSksXG4gICAgICAgICAgICBib3JkZXJXaWR0aDogMSxcbiAgICAgICAgICB9XG4gICAgICBdXG4gIH1cblxuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcmVzcG9uc2l2ZTogdHJ1ZSxcbiAgICBtYWludGFpbkFzcGVjdFJhdGlvOiB0cnVlLFxuICAgIHBsdWdpbnM6IHtcbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIGRpc3BsYXk6IHRydWUsXG4gICAgICAgIHRleHQ6IHRpdGxlLFxuICAgICAgfSxcbiAgICAgIGxlZ2VuZDoge1xuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcbiAgICAgICAgcG9zaXRpb246IFwiYm90dG9tXCJcbiAgICB9XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZ2V0Q2hhcnRUeXBlID0gKCkgPT4ge1xuICAgIGlmKHR5cGUgPT09ICdiYXInKSB7XG4gICAgICByZXR1cm4gKDxCYXJcbiAgICAgICAgZGF0YT17ZGF0YX1cbiAgICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAgIC8+KVxuICAgIH0gXG4gICAgaWYodHlwZSA9PT0gJ2xpbmUnKSB7XG4gICAgICByZXR1cm4gKDxMaW5lXG4gICAgICAgIGRhdGE9e2RhdGF9XG4gICAgICAgIG9wdGlvbnM9e29wdGlvbnN9XG4gICAgICAvPilcbiAgICB9XG4gICAgaWYodHlwZSA9PT0gJ3BpZScpIHtcbiAgICAgIHJldHVybiAoPFBpZVxuICAgICAgICBkYXRhPXtkYXRhfVxuICAgICAgICBvcHRpb25zPXtvcHRpb25zfVxuICAgICAgLz4pXG4gICAgfVxuICAgICAgcmV0dXJuICg8QmFyXG4gICAgICBkYXRhPXtkYXRhfVxuICAgICAgb3B0aW9ucz17b3B0aW9uc31cbiAgICAvPilcbiAgfVxuXG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xLzJcIj5cbiAgICAgIHtnZXRDaGFydFR5cGUoKX1cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmFyQ2hhcnQiXSwibmFtZXMiOlsiQmFyIiwiTGluZSIsIlBpZSIsImZvcm1hdERhdGFTZXQiLCJyYW5kb21Db2xvciIsIkJhckNoYXJ0IiwiY2hhcnREYXRhIiwiZmllbGQiLCJkaW1lbnNpb24iLCJtZWFzdXJlIiwidGl0bGUiLCJ0eXBlIiwiZm9ybWF0dGVkRGF0YVNldCIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwibGFiZWxzIiwiZGF0YXNldHMiLCJzdW1tZWRTZXRzIiwiYmFja2dyb3VuZENvbG9yIiwibWFwIiwibCIsImJvcmRlcldpZHRoIiwib3B0aW9ucyIsInJlc3BvbnNpdmUiLCJtYWludGFpbkFzcGVjdFJhdGlvIiwicGx1Z2lucyIsImRpc3BsYXkiLCJ0ZXh0IiwibGVnZW5kIiwicG9zaXRpb24iLCJnZXRDaGFydFR5cGUiLCJkaXYiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/DataChart.js\n"));

/***/ })

});