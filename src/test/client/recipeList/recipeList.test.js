import { shallow } from 'enzyme';
import * as React from 'react';
import RecipeList from '../../../client/presentation/recipeList/recipeList';
import * as Redux from 'react-redux';

describe('Recipe list rendering', () => {
  it('renders the component', () => {
    const recipeList = shallow(<RecipeList />);
    expect(recipeList).toMatchSnapshot();
  });
});
