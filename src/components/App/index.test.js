import React from 'react';
import App from '.';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

describe('<App />', () => {
  // smoke test
  it('renders without crashing', function() {
    shallow(<App />);
  });

  // snapshot test
  it('matches snapshot', function() {
    let wrapper = shallow(<App />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
