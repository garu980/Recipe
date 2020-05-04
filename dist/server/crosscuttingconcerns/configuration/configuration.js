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
    keyVaultUri: isDevelopment() ? _config["default"].keyVaultUri : process.env.APPSETTING_KeyVaultUrl,
    betApiKeySecret: isDevelopment() ? _config["default"].betApiKeySecret : process.env.APPSETTING_BetApiKeySecret,
    betApiRegions: isDevelopment() ? _config["default"].betApiRegions : process.env.APPSETTING_BetApiRegions,
    betApiMatches: isDevelopment() ? _config["default"].betApiMatches : process.env.APPSETTING_BetApiMatches
  };
}

function isDevelopment() {
  return _config["default"].isDevelopment == 'true';
}