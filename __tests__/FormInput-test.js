import 'react-native';
import React from 'react';
import FormInput from '../src/components/FormInput';

import renderer from 'react-test-renderer';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';

Enzyme.configure({ adapter: new Adapter() });

it('test render FormInput correctly', () => {
  const tree = renderer.create(<FormInput />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('test FormInput props', ()=> {
    const onChangeEmail = jest.fn();       
    const wrapper = shallow(
        <FormInput
            type="email"
            placeholder="yewin@mail.com" 
            onChange={onChangeEmail}/>)            
    expect((wrapper.props().onChange)).toEqual(onChangeEmail)
    expect((wrapper.props().type)).toEqual("email")
    expect((wrapper.props().placeholder)).toEqual("yewin@mail.com")
})