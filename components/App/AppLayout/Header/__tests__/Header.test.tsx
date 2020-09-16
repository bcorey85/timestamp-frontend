import React from 'react';
import { mount } from 'enzyme';

import { Header } from '../Header';

import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

describe('Header', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Header />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
