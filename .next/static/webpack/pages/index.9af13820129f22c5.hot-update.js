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

/***/ "./src/sections/_examples/extra/carousel/SponsorCarousel.tsx":
/*!*******************************************************************!*\
  !*** ./src/sections/_examples/extra/carousel/SponsorCarousel.tsx ***!
  \*******************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CarouselAnimation; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/styles */ \"./node_modules/@mui/material/styles/index.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material */ \"./node_modules/@mui/material/index.js\");\n/* harmony import */ var _utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils/cssStyles */ \"./src/utils/cssStyles.ts\");\n/* harmony import */ var _components_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/image */ \"./src/components/image/index.ts\");\n/* harmony import */ var _components_animate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../components/animate */ \"./src/components/animate/index.ts\");\n/* harmony import */ var _components_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/carousel */ \"./src/components/carousel/index.ts\");\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n// @mui\n\n\n// utils\n\n// components\n\n\n\nfunction CarouselAnimation(param) {\n    let { data  } = param;\n    _s();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();\n    const carouselRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [currentIndex, setCurrentIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(theme.direction === \"rtl\" ? data.length - 1 : 0);\n    const carouselSettings = {\n        speed: 800,\n        dots: false,\n        arrows: false,\n        autoplay: true,\n        slidesToShow: 1,\n        slidesToScroll: 1,\n        rtl: Boolean(theme.direction === \"rtl\"),\n        beforeChange: (current, next)=>setCurrentIndex(next)\n    };\n    const handlePrev = ()=>{\n        var _carouselRef_current;\n        (_carouselRef_current = carouselRef.current) === null || _carouselRef_current === void 0 ? void 0 : _carouselRef_current.slickPrev();\n    };\n    const handleNext = ()=>{\n        var _carouselRef_current;\n        (_carouselRef_current = carouselRef.current) === null || _carouselRef_current === void 0 ? void 0 : _carouselRef_current.slickNext();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Card, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                ref: carouselRef,\n                ...carouselSettings,\n                children: data.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CarouselItem, {\n                        item: item,\n                        isActive: index === currentIndex\n                    }, item.id, false, {\n                        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_carousel__WEBPACK_IMPORTED_MODULE_5__.CarouselArrowIndex, {\n                index: currentIndex,\n                total: data.length,\n                onNext: handleNext,\n                onPrevious: handlePrev\n            }, void 0, false, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, this);\n}\n_s(CarouselAnimation, \"cWbXfH7KYBuUlSR/g2ZuxFWPi/8=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c = CarouselAnimation;\nfunction CarouselItem(param) {\n    let { item , isActive  } = param;\n    _s1();\n    const theme = (0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme)();\n    const { image , title  } = item;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Paper, {\n        sx: {\n            position: \"relative\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_image__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                alt: title,\n                src: image,\n                ratio: \"16/9\"\n            }, void 0, false, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 86,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Box, {\n                sx: {\n                    top: 0,\n                    width: 1,\n                    height: 1,\n                    position: \"absolute\",\n                    ...(0,_utils_cssStyles__WEBPACK_IMPORTED_MODULE_2__.bgGradient)({\n                        direction: \"to top\",\n                        startColor: \"\".concat(theme.palette.grey[900], \" 0%\"),\n                        endColor: \"\".concat((0,_mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.alpha)(theme.palette.grey[900], 0), \" 100%\")\n                    })\n                }\n            }, void 0, false, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.CardContent, {\n                component: _components_animate__WEBPACK_IMPORTED_MODULE_4__.MotionContainer,\n                animate: isActive,\n                action: true,\n                sx: {\n                    bottom: 0,\n                    width: 1,\n                    maxWidth: 720,\n                    textAlign: \"left\",\n                    position: \"absolute\",\n                    color: \"common.white\"\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.div, {\n                        variants: (0,_components_animate__WEBPACK_IMPORTED_MODULE_4__.varFade)().inRight,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Typography, {\n                            variant: \"h3\",\n                            gutterBottom: true,\n                            children: item.title\n                        }, void 0, false, {\n                            fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                            lineNumber: 116,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                        lineNumber: 115,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_8__.m.div, {\n                        variants: (0,_components_animate__WEBPACK_IMPORTED_MODULE_4__.varFade)().inRight,\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                            variant: \"contained\",\n                            sx: {\n                                mt: 0\n                            },\n                            children: \"View More\"\n                        }, void 0, false, {\n                            fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                            lineNumber: 124,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                        lineNumber: 123,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\E Commerce\\\\src\\\\sections\\\\_examples\\\\extra\\\\carousel\\\\SponsorCarousel.tsx\",\n        lineNumber: 85,\n        columnNumber: 5\n    }, this);\n}\n_s1(CarouselItem, \"VrMvFCCB9Haniz3VCRPNUiCauHs=\", false, function() {\n    return [\n        _mui_material_styles__WEBPACK_IMPORTED_MODULE_6__.useTheme\n    ];\n});\n_c1 = CarouselItem;\nvar _c, _c1;\n$RefreshReg$(_c, \"CarouselAnimation\");\n$RefreshReg$(_c1, \"CarouselItem\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VjdGlvbnMvX2V4YW1wbGVzL2V4dHJhL2Nhcm91c2VsL1Nwb25zb3JDYXJvdXNlbC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBa0M7QUFDTztBQUN6QyxPQUFPO0FBQ2dEO0FBQzJCO0FBQ2xGLFFBQVE7QUFDaUQ7QUFDekQsYUFBYTtBQUNvQztBQUN5QjtBQUNLO0FBYWhFLFNBQVNpQixrQkFBa0IsS0FBZSxFQUFFO1FBQWpCLEVBQUVDLEtBQUksRUFBUyxHQUFmOztJQUN4QyxNQUFNQyxRQUFRZiw4REFBUUE7SUFFdEIsTUFBTWdCLGNBQWNsQiw2Q0FBTUEsQ0FBa0IsSUFBSTtJQUVoRCxNQUFNLENBQUNtQixjQUFjQyxnQkFBZ0IsR0FBR3JCLCtDQUFRQSxDQUFDa0IsTUFBTUksU0FBUyxLQUFLLFFBQVFMLEtBQUtNLE1BQU0sR0FBRyxJQUFJLENBQUM7SUFFaEcsTUFBTUMsbUJBQW1CO1FBQ3ZCQyxPQUFPO1FBQ1BDLE1BQU0sS0FBSztRQUNYQyxRQUFRLEtBQUs7UUFDYkMsVUFBVSxJQUFJO1FBQ2RDLGNBQWM7UUFDZEMsZ0JBQWdCO1FBQ2hCQyxLQUFLQyxRQUFRZCxNQUFNSSxTQUFTLEtBQUs7UUFDakNXLGNBQWMsQ0FBQ0MsU0FBaUJDLE9BQWlCZCxnQkFBZ0JjO0lBQ25FO0lBRUEsTUFBTUMsYUFBYSxJQUFNO1lBQ3ZCakI7UUFBQUEsQ0FBQUEsdUJBQUFBLFlBQVllLE9BQU8sY0FBbkJmLGtDQUFBQSxLQUFBQSxJQUFBQSxxQkFBcUJrQjtJQUN2QjtJQUVBLE1BQU1DLGFBQWEsSUFBTTtZQUN2Qm5CO1FBQUFBLENBQUFBLHVCQUFBQSxZQUFZZSxPQUFPLGNBQW5CZixrQ0FBQUEsS0FBQUEsSUFBQUEscUJBQXFCb0I7SUFDdkI7SUFFQSxxQkFDRSw4REFBQ2xDLCtDQUFJQTs7MEJBQ0gsOERBQUNTLDREQUFRQTtnQkFBQzBCLEtBQUtyQjtnQkFBYyxHQUFHSyxnQkFBZ0I7MEJBQzdDUCxLQUFLd0IsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNmLDhEQUFDQzt3QkFBMkJGLE1BQU1BO3dCQUFNRyxVQUFVRixVQUFVdkI7dUJBQXpDc0IsS0FBS0ksRUFBRTs7Ozs7Ozs7OzswQkFJOUIsOERBQUMvQixvRUFBa0JBO2dCQUNqQjRCLE9BQU92QjtnQkFDUDJCLE9BQU85QixLQUFLTSxNQUFNO2dCQUNsQnlCLFFBQVFWO2dCQUNSVyxZQUFZYjs7Ozs7Ozs7Ozs7O0FBSXBCLENBQUM7R0ExQ3VCcEI7O1FBQ1JiLDBEQUFRQTs7O0tBREFhO0FBdUR4QixTQUFTNEIsYUFBYSxLQUFxQyxFQUFFO1FBQXZDLEVBQUVGLEtBQUksRUFBRUcsU0FBUSxFQUFxQixHQUFyQzs7SUFDcEIsTUFBTTNCLFFBQVFmLDhEQUFRQTtJQUV0QixNQUFNLEVBQUUrQyxNQUFLLEVBQUVDLE1BQUssRUFBRSxHQUFHVDtJQUV6QixxQkFDRSw4REFBQ3BDLGdEQUFLQTtRQUFDOEMsSUFBSTtZQUFFQyxVQUFVO1FBQVc7OzBCQUNoQyw4REFBQzFDLHlEQUFLQTtnQkFBQzJDLEtBQUtIO2dCQUFPSSxLQUFLTDtnQkFBT00sT0FBTTs7Ozs7OzBCQUVyQyw4REFBQ3BELDhDQUFHQTtnQkFDRmdELElBQUk7b0JBQ0ZLLEtBQUs7b0JBQ0xDLE9BQU87b0JBQ1BDLFFBQVE7b0JBQ1JOLFVBQVU7b0JBQ1YsR0FBRzNDLDREQUFVQSxDQUFDO3dCQUNaWSxXQUFXO3dCQUNYc0MsWUFBWSxHQUEyQixPQUF4QjFDLE1BQU0yQyxPQUFPLENBQUNDLElBQUksQ0FBQyxJQUFJLEVBQUM7d0JBQ3ZDQyxVQUFVLEdBQXFDLE9BQWxDN0QsMkRBQUtBLENBQUNnQixNQUFNMkMsT0FBTyxDQUFDQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUc7b0JBQ2pELEVBQUU7Z0JBQ0o7Ozs7OzswQkFHRiw4REFBQ3JELHNEQUFXQTtnQkFDVnVELFdBQVdwRCxnRUFBZUE7Z0JBQzFCcUQsU0FBU3BCO2dCQUNUcUIsTUFBTTtnQkFDTmQsSUFBSTtvQkFDRmUsUUFBUTtvQkFDUlQsT0FBTztvQkFDUFUsVUFBVTtvQkFDVkMsV0FBVztvQkFDWGhCLFVBQVU7b0JBQ1ZpQixPQUFPO2dCQUNUOztrQ0FFQSw4REFBQ3ZFLGdEQUFLO3dCQUFDeUUsVUFBVTNELDREQUFPQSxHQUFHNEQsT0FBTztrQ0FDaEMsNEVBQUNqRSxxREFBVUE7NEJBQUNrRSxTQUFROzRCQUFLQyxZQUFZO3NDQUNsQ2pDLEtBQUtTLEtBQUs7Ozs7Ozs7Ozs7O2tDQU1mLDhEQUFDcEQsZ0RBQUs7d0JBQUN5RSxVQUFVM0QsNERBQU9BLEdBQUc0RCxPQUFPO2tDQUNoQyw0RUFBQ2xFLGlEQUFNQTs0QkFBQ21FLFNBQVE7NEJBQVl0QixJQUFJO2dDQUFFd0IsSUFBSTs0QkFBRTtzQ0FBRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPckQ7SUFwRFNoQzs7UUFDT3pDLDBEQUFRQTs7O01BRGZ5QyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvc2VjdGlvbnMvX2V4YW1wbGVzL2V4dHJhL2Nhcm91c2VsL1Nwb25zb3JDYXJvdXNlbC50c3g/ZDAwNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtIH0gZnJvbSAnZnJhbWVyLW1vdGlvbic7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcbi8vIEBtdWlcclxuaW1wb3J0IHsgYWxwaGEsIHVzZVRoZW1lIH0gZnJvbSAnQG11aS9tYXRlcmlhbC9zdHlsZXMnO1xyXG5pbXBvcnQgeyBCb3gsIENhcmQsIFBhcGVyLCBCdXR0b24sIFR5cG9ncmFwaHksIENhcmRDb250ZW50IH0gZnJvbSAnQG11aS9tYXRlcmlhbCc7XHJcbi8vIHV0aWxzXHJcbmltcG9ydCB7IGJnR3JhZGllbnQgfSBmcm9tICcuLi8uLi8uLi8uLi91dGlscy9jc3NTdHlsZXMnO1xyXG4vLyBjb21wb25lbnRzXHJcbmltcG9ydCBJbWFnZSBmcm9tICcuLi8uLi8uLi8uLi9jb21wb25lbnRzL2ltYWdlJztcclxuaW1wb3J0IHsgTW90aW9uQ29udGFpbmVyLCB2YXJGYWRlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29tcG9uZW50cy9hbmltYXRlJztcclxuaW1wb3J0IENhcm91c2VsLCB7IENhcm91c2VsQXJyb3dJbmRleCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvbXBvbmVudHMvY2Fyb3VzZWwnO1xyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudHlwZSBQcm9wcyA9IHtcclxuICBkYXRhOiB7XHJcbiAgICBpZDogc3RyaW5nO1xyXG4gICAgdGl0bGU6IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xyXG4gIH1bXTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENhcm91c2VsQW5pbWF0aW9uKHsgZGF0YSB9OiBQcm9wcykge1xyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKTtcclxuXHJcbiAgY29uc3QgY2Fyb3VzZWxSZWYgPSB1c2VSZWY8Q2Fyb3VzZWwgfCBudWxsPihudWxsKTtcclxuXHJcbiAgY29uc3QgW2N1cnJlbnRJbmRleCwgc2V0Q3VycmVudEluZGV4XSA9IHVzZVN0YXRlKHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcgPyBkYXRhLmxlbmd0aCAtIDEgOiAwKTtcclxuXHJcbiAgY29uc3QgY2Fyb3VzZWxTZXR0aW5ncyA9IHtcclxuICAgIHNwZWVkOiA4MDAsXHJcbiAgICBkb3RzOiBmYWxzZSxcclxuICAgIGFycm93czogZmFsc2UsXHJcbiAgICBhdXRvcGxheTogdHJ1ZSxcclxuICAgIHNsaWRlc1RvU2hvdzogMSxcclxuICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxyXG4gICAgcnRsOiBCb29sZWFuKHRoZW1lLmRpcmVjdGlvbiA9PT0gJ3J0bCcpLFxyXG4gICAgYmVmb3JlQ2hhbmdlOiAoY3VycmVudDogbnVtYmVyLCBuZXh0OiBudW1iZXIpID0+IHNldEN1cnJlbnRJbmRleChuZXh0KSxcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVQcmV2ID0gKCkgPT4ge1xyXG4gICAgY2Fyb3VzZWxSZWYuY3VycmVudD8uc2xpY2tQcmV2KCk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgIGNhcm91c2VsUmVmLmN1cnJlbnQ/LnNsaWNrTmV4dCgpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FyZD5cclxuICAgICAgPENhcm91c2VsIHJlZj17Y2Fyb3VzZWxSZWZ9IHsuLi5jYXJvdXNlbFNldHRpbmdzfT5cclxuICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8Q2Fyb3VzZWxJdGVtIGtleT17aXRlbS5pZH0gaXRlbT17aXRlbX0gaXNBY3RpdmU9e2luZGV4ID09PSBjdXJyZW50SW5kZXh9IC8+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcblxyXG4gICAgICA8Q2Fyb3VzZWxBcnJvd0luZGV4XHJcbiAgICAgICAgaW5kZXg9e2N1cnJlbnRJbmRleH1cclxuICAgICAgICB0b3RhbD17ZGF0YS5sZW5ndGh9XHJcbiAgICAgICAgb25OZXh0PXtoYW5kbGVOZXh0fVxyXG4gICAgICAgIG9uUHJldmlvdXM9e2hhbmRsZVByZXZ9XHJcbiAgICAgIC8+XHJcbiAgICA8L0NhcmQ+XHJcbiAgKTtcclxufVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxudHlwZSBDYXJvdXNlbEl0ZW1Qcm9wcyA9IHtcclxuICBpdGVtOiB7XHJcbiAgICB0aXRsZTogc3RyaW5nO1xyXG4gICAgZGVzY3JpcHRpb246IHN0cmluZztcclxuICAgIGltYWdlOiBzdHJpbmc7XHJcbiAgfTtcclxuICBpc0FjdGl2ZTogYm9vbGVhbjtcclxufTtcclxuXHJcbmZ1bmN0aW9uIENhcm91c2VsSXRlbSh7IGl0ZW0sIGlzQWN0aXZlIH06IENhcm91c2VsSXRlbVByb3BzKSB7XHJcbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xyXG5cclxuICBjb25zdCB7IGltYWdlLCB0aXRsZSB9ID0gaXRlbTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQYXBlciBzeD17eyBwb3NpdGlvbjogJ3JlbGF0aXZlJyB9fT5cclxuICAgICAgPEltYWdlIGFsdD17dGl0bGV9IHNyYz17aW1hZ2V9IHJhdGlvPVwiMTYvOVwiIC8+XHJcblxyXG4gICAgICA8Qm94XHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIHRvcDogMCxcclxuICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgaGVpZ2h0OiAxLFxyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAuLi5iZ0dyYWRpZW50KHtcclxuICAgICAgICAgICAgZGlyZWN0aW9uOiAndG8gdG9wJyxcclxuICAgICAgICAgICAgc3RhcnRDb2xvcjogYCR7dGhlbWUucGFsZXR0ZS5ncmV5WzkwMF19IDAlYCxcclxuICAgICAgICAgICAgZW5kQ29sb3I6IGAke2FscGhhKHRoZW1lLnBhbGV0dGUuZ3JleVs5MDBdLCAwKX0gMTAwJWAsXHJcbiAgICAgICAgICB9KSxcclxuICAgICAgICB9fVxyXG4gICAgICAvPlxyXG5cclxuICAgICAgPENhcmRDb250ZW50XHJcbiAgICAgICAgY29tcG9uZW50PXtNb3Rpb25Db250YWluZXJ9XHJcbiAgICAgICAgYW5pbWF0ZT17aXNBY3RpdmV9XHJcbiAgICAgICAgYWN0aW9uXHJcbiAgICAgICAgc3g9e3tcclxuICAgICAgICAgIGJvdHRvbTogMCxcclxuICAgICAgICAgIHdpZHRoOiAxLFxyXG4gICAgICAgICAgbWF4V2lkdGg6IDcyMCxcclxuICAgICAgICAgIHRleHRBbGlnbjogJ2xlZnQnLFxyXG4gICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICBjb2xvcjogJ2NvbW1vbi53aGl0ZScsXHJcbiAgICAgICAgfX1cclxuICAgICAgPlxyXG4gICAgICAgIDxtLmRpdiB2YXJpYW50cz17dmFyRmFkZSgpLmluUmlnaHR9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tPlxyXG4gICAgICAgICAgICB7aXRlbS50aXRsZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L20uZGl2PlxyXG5cclxuICAgIFxyXG5cclxuICAgICAgICA8bS5kaXYgdmFyaWFudHM9e3ZhckZhZGUoKS5pblJpZ2h0fT5cclxuICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN4PXt7IG10OiAwIH19PlxyXG4gICAgICAgICAgICBWaWV3IE1vcmVcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvbS5kaXY+XHJcbiAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICA8L1BhcGVyPlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIm0iLCJ1c2VTdGF0ZSIsInVzZVJlZiIsImFscGhhIiwidXNlVGhlbWUiLCJCb3giLCJDYXJkIiwiUGFwZXIiLCJCdXR0b24iLCJUeXBvZ3JhcGh5IiwiQ2FyZENvbnRlbnQiLCJiZ0dyYWRpZW50IiwiSW1hZ2UiLCJNb3Rpb25Db250YWluZXIiLCJ2YXJGYWRlIiwiQ2Fyb3VzZWwiLCJDYXJvdXNlbEFycm93SW5kZXgiLCJDYXJvdXNlbEFuaW1hdGlvbiIsImRhdGEiLCJ0aGVtZSIsImNhcm91c2VsUmVmIiwiY3VycmVudEluZGV4Iiwic2V0Q3VycmVudEluZGV4IiwiZGlyZWN0aW9uIiwibGVuZ3RoIiwiY2Fyb3VzZWxTZXR0aW5ncyIsInNwZWVkIiwiZG90cyIsImFycm93cyIsImF1dG9wbGF5Iiwic2xpZGVzVG9TaG93Iiwic2xpZGVzVG9TY3JvbGwiLCJydGwiLCJCb29sZWFuIiwiYmVmb3JlQ2hhbmdlIiwiY3VycmVudCIsIm5leHQiLCJoYW5kbGVQcmV2Iiwic2xpY2tQcmV2IiwiaGFuZGxlTmV4dCIsInNsaWNrTmV4dCIsInJlZiIsIm1hcCIsIml0ZW0iLCJpbmRleCIsIkNhcm91c2VsSXRlbSIsImlzQWN0aXZlIiwiaWQiLCJ0b3RhbCIsIm9uTmV4dCIsIm9uUHJldmlvdXMiLCJpbWFnZSIsInRpdGxlIiwic3giLCJwb3NpdGlvbiIsImFsdCIsInNyYyIsInJhdGlvIiwidG9wIiwid2lkdGgiLCJoZWlnaHQiLCJzdGFydENvbG9yIiwicGFsZXR0ZSIsImdyZXkiLCJlbmRDb2xvciIsImNvbXBvbmVudCIsImFuaW1hdGUiLCJhY3Rpb24iLCJib3R0b20iLCJtYXhXaWR0aCIsInRleHRBbGlnbiIsImNvbG9yIiwiZGl2IiwidmFyaWFudHMiLCJpblJpZ2h0IiwidmFyaWFudCIsImd1dHRlckJvdHRvbSIsIm10Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/sections/_examples/extra/carousel/SponsorCarousel.tsx\n"));

/***/ })

});