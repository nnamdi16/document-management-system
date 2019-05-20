/* eslint-disable no-undef */
import React from 'react';
// import { mount } from 'enzyme';
import 'jest-enzyme';
import '../../../setupTests';
import DashBoard from 'components/DashBoard';
import { mount } from 'enzyme';
import Root from '../../Root';

describe('Shallow render the Dashboard', () => {
	it('shallow render the Dashboard', () => {
		const wrapper = mount(
    <Root>
        <DashBoard />
    </Root>
		);
		const welcome = <div>Welcome to your DMS dashboard</div>;
		expect(wrapper.contains(welcome)).toEqual(true);
	});
});
