import * as types from './languageActionsTypes';

export function changeLanguage(language) {
  return { type: types.CHANGE_LANGUAGE, language };
}
