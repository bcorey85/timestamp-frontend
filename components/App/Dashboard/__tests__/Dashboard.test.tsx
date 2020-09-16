import React from 'react';
import { mount } from 'enzyme';

import { Dashboard } from '../Dashboard';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Dashboard', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Dashboard />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
