webpackHotUpdate("main",{

/***/ "./src/Context/WishListProvider.js":
/*!*****************************************!*\
  !*** ./src/Context/WishListProvider.js ***!
  \*****************************************/
/*! exports provided: default, withWishList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withWishList", function() { return withWishList; });
/* harmony import */ var _Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread */ "./node_modules/@babel/runtime/helpers/esm/objectSpread.js");
/* harmony import */ var _Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);






var _jsxFileName = "/Users/mouseduc12/Documents/NewPorfolio/Ecommerce/e-commerce/src/Context/WishListProvider.js";


var WishListProviderContext = react__WEBPACK_IMPORTED_MODULE_6___default.a.createContext();

var WishListProvider =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(WishListProvider, _React$Component);

  function WishListProvider() {
    var _this;

    Object(_Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, WishListProvider);

    _this = Object(_Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__["default"])(this, Object(_Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__["default"])(WishListProvider).call(this));

    _this.getWishList = function (userId) {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/wishList/".concat(userId)).then(function (res) {
        console.log(res);

        _this.setState({
          wishList: res.data.products
        });
      });
    };

    _this.getAllWishList = function (userId) {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.get("/wishList").then(function (res) {
        _this.setState({
          allWishList: res.data,
          saveUserId: userId
        }, function () {
          if (_this.state.allWishList.some(function (each) {
            return each.user === userId;
          })) {
            _this.getWishList(userId);

            console.log("Already Exist");
          } else {
            _this.createWishList(userId);
          }
        });
      });
    };

    _this.handleNotifyingWishList = function () {
      _this.setState({
        isNotifyingWishList: true
      }, function () {
        setTimeout(function () {
          _this.setState({
            isNotifyingWishList: false
          });
        }, 4000);
      });
    };

    _this.createProductOfWishList = function (id) {
      _this.handleNotifyingWishList();

      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/wishList/".concat(_this.state.saveUserId, "/").concat(id)).then(function (res) {
        console.log(res);
        return _this.getWishList(_this.state.saveUserId);
      });
    };

    _this.createWishList = function (userId) {
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.post("/wishList/".concat(userId)).then(function (res) {
        console.log(res);
      });
    };

    _this.deleteWishListItem = function (id) {
      console.log(id);
      axios__WEBPACK_IMPORTED_MODULE_7___default.a.put("/wishList/".concat(_this.state.saveUserId, "/").concat(id)).then(function (res) {
        console.log(res); // return this.getAllWishList(this.state.saveUserId)
      });
    };

    _this.state = {
      wishList: [],
      allWishList: [],
      saveUserId: "",
      isWishList: false,
      isNotifyingWishList: false
    };
    return _this;
  }

  Object(_Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(WishListProvider, [{
    key: "render",
    value: function render() {
      console.log(this.state.wishList);
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WishListProviderContext.Provider, {
        value: Object(_Users_mouseduc12_Documents_NewPorfolio_Ecommerce_e_commerce_node_modules_babel_runtime_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, this.state, {
          getWishList: this.getWishList,
          getAllWishList: this.getAllWishList,
          createProductOfWishList: this.createProductOfWishList,
          deleteWishListItem: this.deleteWishListItem,
          handleNotifyingWishList: this.handleNotifyingWishList
        }),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, this.props.children);
    }
  }]);

  return WishListProvider;
}(react__WEBPACK_IMPORTED_MODULE_6___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (WishListProvider);
var withWishList = function withWishList(C) {
  return function (props) {
    return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WishListProviderContext.Consumer, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, function (value) {
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(C, Object.assign({}, props, value, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }));
    });
  };
};

/***/ })

})
//# sourceMappingURL=main.9af27f8f51d37f32c1b3.hot-update.js.map