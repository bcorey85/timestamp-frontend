import React from 'react';
import { mount } from 'enzyme';

import { Activity } from '../Activity';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';
import { setAppData } from '../../../../redux/appData';
import { createTestState } from '../../../../test/setup';

describe('Activity', () => {
	it('renders', () => {
		createTestState();

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Activity />
			</MockReduxProvider>
		);

		expect(wrapper).not.toBeNull();
	});
});
