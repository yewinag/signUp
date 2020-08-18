import 'react-native';
import React from 'react';
import AlertError from '../src/components/AlertError';

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

it('test render AlertError correctly', () => {
  const tree = renderer.create(<AlertError />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('test AlertError props', ()=> {
    const wrapper = shallow(<AlertError err="Enter is repuried" />);
    expect((wrapper.props().children.props.children)).toEqual("Enter is repuried")
})