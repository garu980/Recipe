import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './recipe/Recipe';
import Navigation from './navigation/navigation';
import configureStore from './configureStore';
import { Provider, useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { localization } from './localization';

const store = configureStore();

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
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
