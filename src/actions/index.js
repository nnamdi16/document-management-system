/* eslint-disable no-undef */
import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from 'actions/types';

export const signUp = (formProps, callback) => async dispatch => {
	try {
		const response = await axios.post('http://206.189.44.170/api/users', formProps);
		console.log(response);
		dispatch({ type: AUTH_USER, payload: response.data.data.token });
		localStorage.setItem('token', response.data.data.token);
		console.log(localStorage);
		callback();
	} catch (e) {
		console.log(e);
		dispatch({
			type: AUTH_ERROR,
			payload: e.message
		});
	}
};
