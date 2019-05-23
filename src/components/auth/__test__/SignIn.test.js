/* eslint-disable no-undef */
import React from 'react';
import '../../../../setupTests';
import { mount } from 'enzyme';
import moxios from 'moxios';
import SignIn from 'components/auth/Signin';
import Root from '../../../Root';
import mockData from '__mocks__/mockData';

it('calls onSubmit prop function when form is submitted', () => {
	const onSubmit = jest.fn();
	const wrapper = mount(
  <Root>
    <SignIn handleSubmit={ onSubmit } />
  </Root>
	);

	const form = wrapper.find('form');
	form.simulate('submit');

	expect(onSubmit).toHaveBeenCalledTimes(1);
});

describe('Simulate the submit event', () => {
	beforeEach(() => {
		moxios.install();
		moxios.stubRequest('http://206.189.44.170/api/users/login', {
			status: 200,
			response: mockData.authResponse
		});
	});
	afterEach(() => {
		moxios.uninstall();
	});
	it('can post user data to the database and sign in a user', done => {
		const wrapped = mount(
  <Root>
    <SignIn />
  </Root>
		);
		const container = wrapped.find('.signIn').simulate('submit');
		moxios.wait(() => {
			wrapped.update();
			expect(wrapped.find('.errorMessage').text()).toBe('Invalid Login');
			done();
		});
	});
});
