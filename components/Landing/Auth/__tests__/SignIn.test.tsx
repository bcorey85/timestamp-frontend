import React from 'react';
import { mount } from 'enzyme';

import { Login } from '../Login';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const toggleForm = jest.fn();

describe('Login', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Login toggleForm={toggleForm} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
