import React from 'react';
import { mount } from 'enzyme';

import { Interface } from '../Interface';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Interface', () => {
	beforeEach(() => {});

	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Interface />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
