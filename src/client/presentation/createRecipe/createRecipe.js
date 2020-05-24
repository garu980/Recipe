import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import RecipeCategory from '../common/recipeCategory';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateRecipe = (props) => {
  const intl = useIntl();

  const onSave = () => {};
  const onChange = () => {};
  const getCategoryOptions = () => {
    return RecipeCategory.map((recipeCategory) => ({
      value: recipeCategory,
      text: intl.formatMessage({ id: 'createRecipe.' + recipeCategory }),
    }));
  };
  return (
    <div className="form-group">
      <form onSubmit={onSave}>
        <h2>{intl.formatMessage({ id: 'createRecipe.title' })}</h2>
        {/* {errors.onSave && (
        <div className="alert alert-danger" role="alert">
          {errors.onSave}
        </div>
      )} */}
        <SelectInput
          name="category"
          label={intl.formatMessage({ id: 'createRecipe.category' })}
          value="apetizer"
          defaultOption={intl.formatMessage({
            id: 'createRecipe.apetizer',
          })}
          options={getCategoryOptions()}
          onChange={onChange}
          error="{errors.recipe}"
        />

        <TextInput
          name="title"
          label={intl.formatMessage({ id: 'createRecipe.title' })}
          value="{recipe.title}"
          onChange={onChange}
          error="{errors.title}"
        />

        <button type="submit" disabled={false} className="btn btn-primary">
          {false
            ? intl.formatMessage({ id: 'createRecipe.saving' })
            : intl.formatMessage({ id: 'createRecipe.save' })}
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
