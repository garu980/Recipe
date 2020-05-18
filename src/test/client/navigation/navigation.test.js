import { shallow } from 'enzyme';
import * as React from 'react';
import Navigation from '../../../client/presentation/navigation/navigation';
import * as Redux from 'react-redux';

describe('Navigation rendering', () => {
  it('renders the component', () => {
    jest
      .spyOn(Redux, 'useSelector')
      .mockImplementation((state) => state.language)
      .mockReturnValue({ language: 'en' });
    const navigation = shallow(<Navigation />);
    expect(navigation).toMatchSnapshot();
  });
});
