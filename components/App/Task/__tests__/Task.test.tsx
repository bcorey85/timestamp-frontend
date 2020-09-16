import React from 'react';
import { mount } from 'enzyme';

import { Task } from '../Task';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Task', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Task />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
