import React from 'react';
import { shallow } from 'enzyme';

import { NavToggle } from '../NavToggle';
import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

describe('NavToggle', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<NavToggle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
