import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import './setupTests';

describe('App', () => {
    it('renders without crashing', () => {
        const wrapper = shallow(<App></App>);
        console.log(wrapper.debug());
    });
});
