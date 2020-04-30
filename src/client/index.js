import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './recipe/Recipe';
import Navigation from './navigation/navigation';
import configureStore from './configureStore';
import { Provider, useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { localization } from './crosscuttingconcerns/localization';
import { authProvider } from './crosscuttingconcerns/authentication/authProvider';
import { AzureAD } from 'react-aad-msal';

const store = configureStore();

// authentication.initialize({
//   tenant: 'luarlimeb2c.onmicrosoft.com',
//   signInPolicy: 'B2C_1_recipe_signup',
//   applicationId: 'fcc45692-608c-4eec-90c2-24371186c90a',
//   cacheLocation: 'sessionStorage',
//   scopes: ['https://luarlimeb2c.onmicrosoft.com/api/user_impersonation'],
//   redirectUri: 'http://localhost:3000',
//   postLogoutRedirectUri: window.location.origin,
// });

const App = () => {
  const language = useSelector((state) => state.language);

  return (
    <IntlProvider locale={language} messages={localization[language]}>
      <Navigation />
      <Recipe />
    </IntlProvider>
  );
};

ReactDOM.render(
  <AzureAD provider={authProvider} forceLogin={true}>
    <Provider store={store}>
      <App />
    </Provider>
  </AzureAD>,
  document.getElementById('root')
);
