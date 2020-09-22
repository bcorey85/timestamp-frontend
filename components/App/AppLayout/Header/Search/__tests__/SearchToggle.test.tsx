import React from 'react';
import { mount } from 'enzyme';

import { SearchToggle } from '../SearchToggle';
import {
	mockStore,
	MockReduxProvider
} from '../../../../../../test/__mocks__/mockRedux';

describe('SearchToggle', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<SearchToggle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
