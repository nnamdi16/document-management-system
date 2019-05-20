/* eslint-disable no-undef */
import React from 'react';
// import { mount } from 'enzyme';
import 'jest-enzyme';
import '../../../../setupTests';
import Header from 'components/Header/Header';
import { mount } from 'enzyme';
import Root from '../../../Root';

describe('Shallow render the Dashboard', () => {
	it('shallow render the Dashboard', () => {
		const wrapper = mount(
    <Root>
        <Header />
    </Root>
		);
		expect(wrapper.find('.nav-wrapper')).toExist();
	});
});
