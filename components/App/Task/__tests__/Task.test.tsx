import React from 'react';
import { mount } from 'enzyme';

import { TaskList } from '../TaskList';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Task', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<TaskList />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
