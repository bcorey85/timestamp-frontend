import React from 'react';
import { shallow } from 'enzyme';

import { Task } from '../Task';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Task', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Task />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
