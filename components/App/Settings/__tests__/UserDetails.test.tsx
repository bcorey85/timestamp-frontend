import React from 'react';
import { shallow } from 'enzyme';

import { UserDetails } from '../UserDetails';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('UserDetails', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<UserDetails />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
