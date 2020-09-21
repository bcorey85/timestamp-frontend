import React from 'react';
import { mount } from 'enzyme';

import { PinnedFavorites } from '../PinnedFavorites';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

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
		const item = {
			href: `/app/[userId]/`,
			as: `/app/1/`,
			title: 'test',
			type: 'project',
			hours: '1',
			date: '12/12/2020',
			time: '12:00pm',
			notes: 5,
			tasks: 5,
			description: 'test',
			tags: '#1',
			userId: 1,
			projectId: 1,
			pinned: false,
			createdAt: new Date(Date.now()).toISOString(),
			updatedAt: new Date(Date.now()).toISOString()
		};

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<PinnedFavorites items={[ item ]} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
