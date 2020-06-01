import React, { useState } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import RecipeCategory from '../common/recipeCategory';
import RecipeImageUploader from '../common/RecipeImageUploader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/createRecipe.module.css';

const CreateRecipe = (props) => {
  const intl = useIntl();

  const [recipe, setRecipe] = useState({ ...recipe });
  const [errors, setErrors] = useState({});

  const onSave = () => {
    event.preventDefault();
    if (!formIsValid()) return;
  };

  const onChange = (event) => {
    const { name, value } = event.target;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  const getCategoryOptions = () => {
    return RecipeCategory.map((recipeCategory) => ({
      value: recipeCategory,
      text: intl.formatMessage({ id: 'createRecipe.' + recipeCategory }),
    }));
  };

  const formIsValid = () => {
    const {
      name,
      category,
      preparationTime,
      cookingTime,
      numberOfServings,
    } = recipe;
    const errors = {};

    if (!name)
      errors.name = intl.formatMessage({ id: 'createRecipe.nameRequired' });
    if (!category)
      errors.category = intl.formatMessage({
        id: 'createRecipe.categoryRequired',
      });
    if (!preparationTime)
      errors.preparationTime = intl.formatMessage({
        id: 'createRecipe.preparationTimeRequired',
      });
    if (!cookingTime)
      errors.cookingTime = intl.formatMessage({
        id: 'createRecipe.cookingTimeRequired',
      });
    if (!numberOfServings)
      errors.numberOfServings = intl.formatMessage({
        id: 'createRecipe.numberOfServingsRequired',
      });

    setErrors(errors);
    // Form is valid if the errors object still has no properties
    return Object.keys(errors).length === 0;
  };

  return (
    <div className="form-group create-recipe">
      <form onSubmit={onSave}>
        <h2 class="text-center">
          {intl.formatMessage({ id: 'createRecipe.title' })}
        </h2>
        {/* {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )} */}
        <div class="row">
          <div class="col-sm-6">
            <div class="col-sm-12">
              <RecipeImageUploader />
            </div>
            <div class="row">
              <div class="col-sm-4">
                <TextInput
                  name="preparationTime"
                  label={intl.formatMessage({
                    id: 'createRecipe.preparationTime',
                  })}
                  value={recipe.preparationTime}
                  onChange={onChange}
                  error={errors.preparationTime}
                />
              </div>
              <div class="col-sm-4">
                <TextInput
                  name="cookingTime"
                  label={intl.formatMessage({ id: 'createRecipe.cookingTime' })}
                  value={recipe.cookingTime}
                  onChange={onChange}
                  error={errors.cookingTime}
                />
              </div>
              <div class="col-sm-4">
                <TextInput
                  name="numberOfServings"
                  label={intl.formatMessage({
                    id: 'createRecipe.numberOfServings',
                  })}
                  value={recipe.numberOfServings}
                  onChange={onChange}
                  error={errors.numberOfServings}
                />
              </div>
            </div>
          </div>

          <div class="col-sm-6">
            <div class="col-sm-12">
              <TextInput
                name="name"
                label={intl.formatMessage({ id: 'createRecipe.name' })}
                value={recipe.name}
                onChange={onChange}
                error={errors.name}
              />
            </div>

            <div class="col-sm-12">
              <SelectInput
                name="category"
                label={intl.formatMessage({ id: 'createRecipe.category' })}
                value={recipe.category}
                defaultOption={intl.formatMessage({
                  id: 'createRecipe.notSelected',
                })}
                options={getCategoryOptions()}
                onChange={onChange}
                error={errors.category}
              />
            </div>
          </div>
        </div>

        <button
          type="submit"
          disabled={false}
          className="btn btn-primary save-button"
        >
          {false
            ? intl.formatMessage({ id: 'createRecipe.saving' })
            : intl.formatMessage({ id: 'createRecipe.save' })}
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
