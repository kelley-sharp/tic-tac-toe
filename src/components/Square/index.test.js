import React from 'react';
import Square from '.';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<Square />', () => {
  // smoke test
  it('renders without crashing', function() {
    shallow(<Square />);
  });

  // snapshot test
  it('matches snapshot', function() {
    let wrapper = shallow(<Square />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
