/* eslint-disable no-undef */
import React from 'react';
import 'jest-enzyme';
import '../../../../setupTests';
import LandingPage from 'components/landingPage/LandingPage';
import { shallow, mount } from 'enzyme';
import Root from '../../../Root';

describe('Shallow render the Landing Page', () => {
	it('renders a `.row` class', () => {
		const wrapper = mount(
    <Root>
        <LandingPage />
    </Root>
		);
		console.log(wrapper);

		expect(wrapper.find('.row')).toHaveLength(1);
	});
});
