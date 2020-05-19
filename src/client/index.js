import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './presentation/recipe/Recipe';
import RecipeList from './presentation/recipeList/recipeList';
import Navigation from './presentation/navigation/navigation';
import configureStore from './configureStore';
import { Provider, useSelector } from 'react-redux';
import { IntlProvider } from 'react-intl';
import { localization } from './crosscuttingconcerns/localization';
import { authProvider } from './crosscuttingconcerns/authentication/authProvider';
import { AzureAD } from 'react-aad-msal';
import { BrowserRouter, Route } from 'react-router-dom';
import CreateRecipe from './presentation/createRecipe/createRecipe';

const store = configureStore();

const App = () => {
  const language = useSelector((state) => state.language);

  return (
    <IntlProvider locale={language} messages={localization[language]}>
      <Navigation />
      <BrowserRouter>
        <Route path="/" exact component={RecipeList} />
        <Route path="/recipe/:id" component={Recipe} />
        <Route path="/createRecipe" component={CreateRecipe} />
      </BrowserRouter>
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
