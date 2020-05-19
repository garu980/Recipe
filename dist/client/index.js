"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Recipe = _interopRequireDefault(require("./presentation/recipe/Recipe"));

var _recipeList = _interopRequireDefault(require("./presentation/recipeList/recipeList"));

var _navigation = _interopRequireDefault(require("./presentation/navigation/navigation"));

var _configureStore = _interopRequireDefault(require("./configureStore"));

var _reactRedux = require("react-redux");

var _reactIntl = require("react-intl");

var _localization = require("./crosscuttingconcerns/localization");

var _authProvider = require("./crosscuttingconcerns/authentication/authProvider");

var _reactAadMsal = require("react-aad-msal");

var _reactRouterDom = require("react-router-dom");

var _createRecipe = _interopRequireDefault(require("./presentation/createRecipe/createRecipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _configureStore["default"])();

var App = function App() {
  var language = (0, _reactRedux.useSelector)(function (state) {
    return state.language;
  });
  return /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
    locale: language,
    messages: _localization.localization[language]
  }, /*#__PURE__*/_react["default"].createElement(_navigation["default"], null), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.BrowserRouter, null, /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/",
    exact: true,
    component: _recipeList["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/recipe/:id",
    component: _Recipe["default"]
  }), /*#__PURE__*/_react["default"].createElement(_reactRouterDom.Route, {
    path: "/createRecipe",
    component: _createRecipe["default"]
  })));
};

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_reactAadMsal.AzureAD, {
  provider: _authProvider.authProvider,
  forceLogin: true
}, /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react["default"].createElement(App, null))), document.getElementById('root'));