import { createStore } from 'redux';
import * as NavigationActions from '../../../client/presentation/navigation/state/languageActions';
import rootReducer from '../../../client/rootReducer';

const initialState = {
  language: 'en',
};

describe('navigation language change', () => {
  it('should change language when the action is triggered', () => {
    const newLanguageSelection = 'it';
    const store = createStore(rootReducer, initialState);
    const changeLanguageAction = NavigationActions.changeLanguage(
      newLanguageSelection
    );
    store.dispatch(changeLanguageAction);

    const currentLanguage = store.getState().language;
    expect(currentLanguage).toBe(newLanguageSelection);
  });
});
