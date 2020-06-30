import React from 'react';
import { Button } from 'react-bootstrap';
import { useIntl } from 'react-intl';
import TextInput from '../common/TextInput';
import SelectInput from '../common/SelectInput';
import RecipeImageUploader from '../common/RecipeImageUploader';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/createRecipe.module.css';

const CreateStep = (props) => {
  const intl = useIntl();

  return <div></div>;
  // (<div class="modal" id="myModal">
  //   <div class="modal-dialog">
  //     <div class="modal-content">

  //       <!-- Modal Header -->
  //       <div class="modal-header">
  //         <h4 class="modal-title">Modal Heading</h4>
  //         <button type="button" class="close" data-dismiss="modal">&times;</button>
  //       </div>

  //       <!-- Modal body -->
  //       <div class="modal-body">
  //         Modal body..
  //       </div>

  //       <!-- Modal footer -->
  //       <div class="modal-footer">
  //         <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
  //       </div>

  //     </div>
  //   </div>
  // <div/>);
};

export default CreateStep;
