import * as types from './languageActionsTypes';
import initialState from '../../../initialState';

export default function languageReducer(state = initialState.language, action) {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
      return action.language;
    default:
      return state;
  }
}
