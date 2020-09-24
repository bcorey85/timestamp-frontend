import React from 'react';
import { mount } from 'enzyme';

import { PinnedFavorites } from '../PinnedFavorites';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';
import { createTestItem } from '../../../../test/setup';

describe('PinnedFavorites', () => {
	it('renders empty if no items', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<PinnedFavorites items={[]} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});

	it('renders items if passed', () => {
		const item = createTestItem();
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<PinnedFavorites items={[ item ]} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
