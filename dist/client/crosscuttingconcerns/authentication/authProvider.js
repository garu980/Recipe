"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.authProvider = void 0;

var _reactAadMsal = require("react-aad-msal");

var _regeneratorRuntime = _interopRequireDefault(require("regenerator-runtime"));

var _configuration = _interopRequireDefault(require("../configuration/configuration"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// authProvider.js
// Msal Configurations
var config = {
  auth: {
    authority: 'https://luarlimeb2c.b2clogin.com/luarlimeb2c.onmicrosoft.com/B2C_1_recipe_signup',
    clientId: 'fcc45692-608c-4eec-90c2-24371186c90a',
    redirectUri: (0, _configuration["default"])().redirectUri,
    validateAuthority: false
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true
  }
}; // Authentication Parameters

var authenticationParameters = {
  scopes: ['openid']
}; // Options

var options = {
  loginType: _reactAadMsal.LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html'
};
var authProvider = new _reactAadMsal.MsalAuthProvider(config, authenticationParameters, options);
exports.authProvider = authProvider;