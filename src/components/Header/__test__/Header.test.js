/* eslint-disable no-undef */
import React from 'react';
// import { mount } from 'enzyme';
import 'jest-enzyme';
import '../../../../setupTests';
import Header from 'components/Header/Header';
import { mount } from 'enzyme';
import reducer from 'reducers/auth';
import mockData from '__mocks__/mockData';
import Root from '../../../Root';
import { AUTH_USER } from 'actions/types';
import connect from 'react-redux';
import mapStateToProps from '__mocks__/mapStateToProps';

describe('Shallow render the Header', () => {
	it('shallow render the Header when the user is not authenticated', () => {
		const wrapper = mount(
    <Root>
        <Header />
    </Root>
		);
		// console.log(wrapper.find('.authenticated').html());
		console.log(wrapper.find('.nav-wrapper').html());
		expect(wrapper.find('.nav-wrapper')).toExist();
	});
	it('shallow render the Header when the user is authenticated', () => {
		const state = reducer(
			{},
			{
				type: AUTH_USER,
				payload: mockData.authResponse.token
			}
		);
		// connect(mapStateToProps)(Header);
		const wrapper = mount(
    <Root>
        <Header />
    </Root>
		);
		console.log(wrapper.find('.authenticated').html());
		// console.log(wrapper.find('.authenticated').html());
		expect(wrapper.find('.authenticated')).toExist();
	});
});
