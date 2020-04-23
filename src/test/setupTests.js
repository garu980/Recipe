import * as enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { localization } from '../client/crosscuttingconcerns/localization';
import { createIntl } from 'react-intl';
import * as Redux from 'react-redux';
import * as ReactIntl from 'react-intl';

enzyme.configure({ adapter: new Adapter() });
const locale = 'en';
const mockedIntl = createIntl({ locale, messages: localization[locale] });
const mockedDispatch = jest.fn();
jest.spyOn(Redux, 'useDispatch').mockReturnValue(mockedDispatch);
jest.spyOn(ReactIntl, 'useIntl').mockReturnValue(mockedIntl);
