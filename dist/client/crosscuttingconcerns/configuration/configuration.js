"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = config;

var _config = _interopRequireDefault(require("../../../../config.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function config() {
  return {
    isDevelopment: isDevelopment(),
    redirectUri: isDevelopment() ? _config["default"].redirectUri : //TODO: need to fetch this from the server
    'https://bydons-recipes.azurewebsites.net/'
  };
}

function isDevelopment() {
  return _config["default"].isDevelopment == 'true';
}