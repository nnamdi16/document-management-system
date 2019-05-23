/* eslint-disable no-undef */
import React from 'react';
import '../../../../setupTests';
import { mount } from 'enzyme';
import moxios from 'moxios';
import mockAxios from 'axios';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import SignUp from 'components/auth/SignUp';
import Root from '../../../Root';
import { signUp } from 'actions/index';
import mockData from '__mocks__/mockData';

it('calls onSubmit prop function when form is submitted', () => {
	const onSubmit = jest.fn();

	const wrapper = mount(
  <Root>
    <SignUp handleSubmit={ onSubmit } />
  </Root>
	);

	const form = wrapper.find('form');
	form.simulate('submit');

	expect(onSubmit).toHaveBeenCalledTimes(1);
});

describe('Simulate the submit event', () => {
	beforeEach(() => {
		moxios.install();
		moxios.stubRequest('http://206.189.44.170/api/users', {
			status: 200,
			response: mockData.authResponse
		});
	});

	afterEach(() => {
		moxios.uninstall();
	});

	it('can post user data to the database and sign up a user', done => {
		const wrapped = mount(
  <Root>
    <SignUp />
  </Root>
		);
		//console.log(wrapped);
		const container = wrapped
			.find('.signUp') //.at(1);
			.simulate('submit');
		//console.log(container.html());
		moxios.wait(() => {
			wrapped.update();
			//console.log(wrapped.find('.container').html());
			expect(wrapped.find('.errorMessage').text()).toBe(2);
		});
	});
});
