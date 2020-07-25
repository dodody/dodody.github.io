webpackHotUpdate("cms",{

/***/ "./src/cms/index.js":
/*!**************************!*\
  !*** ./src/cms/index.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var netlify_cms_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! netlify-cms-app */ "netlify-cms-app");
/* harmony import */ var netlify_cms_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(netlify_cms_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _preview_templates_page_preview__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./preview-templates/page-preview */ "./src/cms/preview-templates/page-preview.js");
/* harmony import */ var _preview_templates_post_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./preview-templates/post-preview */ "./src/cms/preview-templates/post-preview.js");
/* harmony import */ var _preview_templates_react_preview__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./preview-templates/react-preview */ "./src/cms/preview-templates/react-preview.js");
var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};





netlify_cms_app__WEBPACK_IMPORTED_MODULE_0___default.a.registerPreviewTemplate('pages', _preview_templates_page_preview__WEBPACK_IMPORTED_MODULE_1__["default"]);
netlify_cms_app__WEBPACK_IMPORTED_MODULE_0___default.a.registerPreviewTemplate('posts', _preview_templates_post_preview__WEBPACK_IMPORTED_MODULE_2__["default"]);
netlify_cms_app__WEBPACK_IMPORTED_MODULE_0___default.a.registerPreviewTemplate('reacts', _preview_templates_react_preview__WEBPACK_IMPORTED_MODULE_3__["default"]);

/***/ }),

/***/ "./src/cms/preview-templates/react-preview.js":
/*!****************************************************!*\
  !*** ./src/cms/preview-templates/react-preview.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _this = undefined,
    _jsxFileName = "/Users/dody/DODY/dodody.github.io/gatsby-starter-lumen/src/cms/preview-templates/react-preview.js";

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};



var ReactPreview = function ReactPreview(_ref) {
  var entry = _ref.entry,
      widgetFor = _ref.widgetFor;
  var body = widgetFor('body');
  var title = entry.getIn(['data', 'title']);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "post__title",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }
  }, title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "post__body",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }
  }, body));
};

var _default = ReactPreview;
/* harmony default export */ __webpack_exports__["default"] = (_default);
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(ReactPreview, "ReactPreview", "/Users/dody/DODY/dodody.github.io/gatsby-starter-lumen/src/cms/preview-templates/react-preview.js");
  reactHotLoader.register(_default, "default", "/Users/dody/DODY/dodody.github.io/gatsby-starter-lumen/src/cms/preview-templates/react-preview.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=cms.10684c15264417419045.hot-update.js.map