"use strict";

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _Recipe = _interopRequireDefault(require("./recipe/Recipe"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var App = function App() {
  return /*#__PURE__*/_react["default"].createElement(_Recipe["default"], null);
};

_reactDom["default"].render( /*#__PURE__*/_react["default"].createElement(App, null), document.getElementById('root'));