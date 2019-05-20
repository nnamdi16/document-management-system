/* eslint-disable no-undef */
import expect from 'expect';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import mockData from '__mocks__/mockData';
import mockLocalStorage from '__mocks__/mockLocalStorage';
import { signUp } from 'actions/index';
import { AUTH_USER, AUTH_ERROR } from 'actions/types';

//jest.mock('localStorage');

const middleware = [ thunk ];
const mockStore = configureMockStore(middleware);

describe('signUpAction', () => {
	beforeEach(() => moxios.install());
	afterEach(() => {
		moxios.uninstall();
	});
	//http://206.189.44.170/api/users
	it('creates AUTH_USER when signUp action is successful', async done => {
		const { authResponse, signUpData } = mockData;
		moxios.stubRequest('http://206.189.44.170/api/users', {
			status: 201,
			response: authResponse
		});

		const expectedActions = [
			{
				type: AUTH_USER,
				payload: authResponse.data.token
			}
		];
		const store = mockStore({});
		await store.dispatch(signUp(signUpData, () => {})).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
		done();
	});

	it('creates AUTH_USER when signUp action is not  successful', async done => {
		const { authResponse, signUpData } = mockData;
		moxios.stubRequest('http://206.189.44.170/api/users', {
			status: 422,
			response: authResponse
		});

		const expectedActions = [
			{
				type: AUTH_ERROR,
				payload: 'Request failed with status code 422'
			}
		];
		const store = mockStore({});
		await store.dispatch(signUp(signUpData, () => {})).then(() => {
			expect(store.getActions()).toEqual(expectedActions);
		});
		done();
	});
});
