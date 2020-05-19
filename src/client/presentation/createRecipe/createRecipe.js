import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import 'bootstrap/dist/css/bootstrap.min.css';

const CreateRecipe = (props) => {
  const intl = useIntl();
  return (
    <div className="form-group">
      <label>{intl.formatMessage({ id: 'createRecipe.title' })}</label>
      {/* <div className="field">
    <select
      name={name}
      value={value}
      onChange={onChange}
      className="form-control"
    >
      <option value="">{defaultOption}</option>
      {options.map(option => {
        return (
          <option key={option.value} value={option.value}>
            {option.text}
          </option>
        );
      })}
    </select> */}
      {/* {error && <div className="alert alert-danger">{error}</div>} */}
    </div>
  );
};

export default CreateRecipe;
