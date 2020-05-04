"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localization = void 0;

var _en = _interopRequireDefault(require("./en"));

var _sv = _interopRequireDefault(require("./sv"));

var _it = _interopRequireDefault(require("./it"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var localization = {
  en: _en["default"],
  sv: _sv["default"],
  it: _it["default"]
};
exports.localization = localization;