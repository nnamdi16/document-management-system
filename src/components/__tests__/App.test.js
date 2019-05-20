/* eslint-disable no-undef */
import React from 'react';
import '../../../setupTests';
import { shallow } from 'enzyme';
import Header from 'components/Header/Header';
import App from 'components/App';
import ReactDOM from 'react-dom';
import '../../index';
import { JestEnvironment } from '@jest/environment';

jest.mock('react-dom');

test('Renders the application', () => {
	expect(ReactDOM.render).toBeCalled();
});

it('shows a Header', () => {
	const wrapped = shallow(<App />);
	expect(wrapped.find(Header).length).toEqual(1);
});
