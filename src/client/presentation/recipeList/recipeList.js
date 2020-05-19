import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/recipeList.module.css';

const RecipeList = (props) => {
  const intl = useIntl();
  return (
    <div className="recipe">
      <Form inline className="recipe-form">
        <FormControl
          type="text"
          placeholder={intl.formatMessage({ id: 'recipeList.searchRecipe' })}
          className="mr-sm-2"
        />
        <Button variant="outline-success">
          {intl.formatMessage({ id: 'recipeList.search' })}
        </Button>
      </Form>
    </div>
  );
};

export default RecipeList;
