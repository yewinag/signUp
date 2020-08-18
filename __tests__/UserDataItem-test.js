import 'react-native';
import React from 'react';
import UserDataItem from '../src/components/UserDataItem';

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

it('test render Userdataitem correctly', () => {
  const tree = renderer.create(<UserDataItem />).toJSON();
  expect(tree).toMatchSnapshot();
});