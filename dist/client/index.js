"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Recipe = _interopRequireDefault(require("./recipe/Recipe"));

var _navigation = _interopRequireDefault(require("./navigation/navigation"));

var _configureStore = _interopRequireDefault(require("./configureStore"));

var _reactRedux = require("react-redux");

var _reactIntl = require("react-intl");

var _localization = require("./localization");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var store = (0, _configureStore["default"])();

var App = function App() {
  var language = (0, _reactRedux.useSelector)(function (state) {
    return state.language;
  });
  return /*#__PURE__*/_react["default"].createElement(_reactIntl.IntlProvider, {
    locale: language,
    messages: _localization.localization[language]
  }, /*#__PURE__*/_react["default"].createElement(_navigation["default"], null), /*#__PURE__*/_react["default"].createElement(_Recipe["default"], null));
};

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(_reactRedux.Provider, {
  store: store
}, /*#__PURE__*/_react["default"].createElement(App, null)), document.getElementById('root'));