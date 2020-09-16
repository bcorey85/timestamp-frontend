import React from 'react';
import { mount } from 'enzyme';

import { TaskForm } from '../TaskForm';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('TaskForm', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<TaskForm handleClose={jest.fn} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
