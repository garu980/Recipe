// authProvider.js
import { MsalAuthProvider, LoginType } from 'react-aad-msal';
import regeneratorRuntime from 'regenerator-runtime';
import configuration from '../configuration/configuration';

// Msal Configurations
const config = {
  auth: {
    authority:
      'https://luarlimeb2c.b2clogin.com/luarlimeb2c.onmicrosoft.com/B2C_1_recipe_signup',
    clientId: 'fcc45692-608c-4eec-90c2-24371186c90a',
    redirectUri: configuration().redirectUri,
    validateAuthority: false,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};

// Authentication Parameters
const authenticationParameters = {
  scopes: ['openid'],
};

// Options
const options = {
  loginType: LoginType.Popup,
  tokenRefreshUri: window.location.origin + '/auth.html',
};

export const authProvider = new MsalAuthProvider(
  config,
  authenticationParameters,
  options
);
