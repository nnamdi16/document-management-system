/* eslint-disable no-undef */
import React from 'react';
import 'jest-enzyme';
import '../../../../setupTests';
import { mount } from 'enzyme';
import Root from '../../../Root';
import Welcome from 'components/Welcome/Welcome';

describe('Mount Welcome.js', () => {
	it('mounts Welcome.js', () => {
		const wrapper = mount(
    <Root>
        <Welcome />
    </Root>
		);
		const welcomeNote = <h3>Welcome! Sign Up or Sign In!</h3>;
		expect(wrapper.contains(welcomeNote)).toEqual(true);
	});
});
