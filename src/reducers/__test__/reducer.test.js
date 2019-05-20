/* eslint-disable no-undef */
import reducer from 'reducers/auth';
import * as types from 'actions/types';
import mockData from '__mocks__/mockData';

describe('should return the initial state', () => {
	it('should when state is undefined', () => {
		expect(reducer(undefined, {})).toEqual({
			authenticated: '',
			errorMessage: ''
		});
	});

	it('should handle AUTH_USER', () => {
		expect(
			reducer(
				{},
				{
					type: types.AUTH_USER,
					payload: mockData.authResponse.token
				}
			)
		).toEqual({
			authenticated: mockData.authResponse.token
		});
	});

	it('should handle AUTH_ERROR', () => {
		expect(
			reducer(
				{},
				{
					type: types.AUTH_ERROR,
					payload: 'e.message'
				}
			)
		).toEqual({
			errorMessage: 'e.message'
		});
	});
});
