"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _languageActions = require("./state/languageActions");

var _reactBootstrap = require("react-bootstrap");

require("bootstrap/dist/css/bootstrap.min.css");

var _reactIntl = require("react-intl");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Navigation = function Navigation(props) {
  var intl = (0, _reactIntl.useIntl)();
  var dispatch = (0, _reactRedux.useDispatch)();

  var onLanguageChange = function onLanguageChange(event, eventKey) {
    dispatch((0, _languageActions.changeLanguage)(event));
  };

  return /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar, {
    bg: "light",
    expand: "lg",
    onSelect: onLanguageChange
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Toggle, {
    "aria-controls": "basic-navbar-nav"
  }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Navbar.Collapse, {
    id: "basic-navbar-nav"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav, {
    className: "mr-auto"
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.NavDropdown, {
    title: intl.formatMessage({
      id: 'navigation.language'
    }),
    id: "basic-nav-dropdown",
    clicked: ""
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.NavDropdown.Item, {
    eventKey: "en"
  }, "English"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.NavDropdown.Item, {
    eventKey: "it"
  }, "Italiano"), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.NavDropdown.Item, {
    eventKey: "sv"
  }, "Svenska")), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Nav.Link, {
    href: "#home"
  }, intl.formatMessage({
    id: 'navigation.recipeList'
  }))), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Form, {
    inline: true
  }, /*#__PURE__*/_react["default"].createElement(_reactBootstrap.FormControl, {
    type: "text",
    placeholder: intl.formatMessage({
      id: 'navigation.search'
    }),
    className: "mr-sm-2"
  }), /*#__PURE__*/_react["default"].createElement(_reactBootstrap.Button, {
    variant: "outline-success"
  }, intl.formatMessage({
    id: 'navigation.search'
  })))));
};

var _default = Navigation;
exports["default"] = _default;