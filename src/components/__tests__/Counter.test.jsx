import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';


const wrapper = shallow(<Counter />);

describe('Hello World', () => {
  it('renders correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
