import * as types from './languageActions';
import initialState from '../../initialState';

export default function languageReducer(state = initialState.language, action) {
  switch (action.type) {
    case types.CHANGE_LANGUAGE:
      return [...state, { ...action.language }];
    default:
      return state;
  }
}
