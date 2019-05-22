/* eslint-disable no-undef */
/* eslint-disable no-shadow */
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from 'reducers';
import reduxThunk from 'redux-thunk';

const initialState = {
	auth: { authenticated: localStorage.getItem('token') }
};
export default ({ children, state = initialState }) => {
	const store = createStore(reducers, state, applyMiddleware(reduxThunk));
	return <Provider store={ store }>{children}</Provider>;
};
