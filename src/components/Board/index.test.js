import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Board from '.';

describe('<Board />', () => {
  let wrapper;
  it('renders without crashing', () => {
    wrapper = shallow(
      <Board
        board={[[null, null, null], [null, null, null], [null, null, null]]}
        frozen={true}
        handleTurn={jest.fn()}
      />
    );
  });

  it('matches snapshot', function() {
    wrapper = shallow(
      <Board
        board={[[null, null, null], [null, null, null], [null, null, null]]}
        frozen={true}
        handleTurn={jest.fn()}
      />
    );
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });
});
