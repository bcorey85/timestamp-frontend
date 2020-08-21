import React from 'react';
import { shallow } from 'enzyme';

import { Dashboard } from '../Dashboard';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Dashboard', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Dashboard />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
