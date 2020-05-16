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
    storageAccountKeySecret: isDevelopment() ? _config["default"].storageAccountKeySecret : process.env.APPSETTING_StorageAccountKeySecret,
    storageAccountName: isDevelopment() ? _config["default"].storageAccountName : process.env.APPSETTING_StorageAccountName
  };
}

function isDevelopment() {
  return _config["default"].isDevelopment == 'true';
}