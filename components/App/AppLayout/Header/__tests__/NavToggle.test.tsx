import React from 'react';
import { mount } from 'enzyme';

import { NavToggle } from '../NavToggle';
import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

describe('NavToggle', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<NavToggle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
