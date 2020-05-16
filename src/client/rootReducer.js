import { combineReducers } from 'redux';
import languageReducer from '../client/presentation/navigation/state/languageReducer';

// the state takes as default the names of the root reducers (when returning the state)
// so if you want to change the names of the state objects you need to define them here
// e.g. reducer name = languageReducer => state object name = languageReducer { language: string}
// BUT if you define language: languageReducer => state object name = language { language: string }
const rootReducer = combineReducers({
  language: languageReducer,
});

export default rootReducer;
