import React from 'react';
import { mount } from 'enzyme';

import { Nav } from './Nav';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Nav', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Nav />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find(Nav).length).toBe(1);
	});
});
