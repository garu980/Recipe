import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import RecipeImageUploader from '../common/RecipeImageUploader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/createRecipe.module.css';
import Modal from 'react-bootstrap/Modal';

const AddIngredient = (props) => {
  const intl = useIntl();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        +
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            {intl.formatMessage({
              id: 'createRecipe.addIngredient',
            })}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            {intl.formatMessage({
              id: 'createRecipe.close',
            })}
          </Button>
          <Button variant="primary">
            {intl.formatMessage({
              id: 'createRecipe.add',
            })}
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddIngredient;
