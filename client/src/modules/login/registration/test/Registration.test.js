import React from 'react';
import Enzyme, { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Registration from '../container/Registration';
import RegistrationDetails from '../components/registration-details/RegistrationDetails';
import RegistrationForm from '../components/registration-form/RegistrationForm';


Enzyme.configure({ adapter: new Adapter() });

describe('Test - registration', () => {
  let wrapper;

  it('registration render without crash', () => {
    wrapper = mount(<Registration />);
    expect(wrapper.exists());
  });

  it('should render the RegistrationDetails Component', () => {
    wrapper = mount(<Registration />);
    expect(wrapper.find(RegistrationDetails).length).toEqual(1);
  });

  it('should render the RegistrationForm Component', () => {
    wrapper = mount(<Registration />);
    expect(wrapper.find(RegistrationForm).length).toEqual(1);
  });
});
