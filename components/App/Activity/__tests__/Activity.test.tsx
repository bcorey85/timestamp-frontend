import React from 'react';
import { shallow } from 'enzyme';

import { Activity } from '../Activity';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Activity', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Activity />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
