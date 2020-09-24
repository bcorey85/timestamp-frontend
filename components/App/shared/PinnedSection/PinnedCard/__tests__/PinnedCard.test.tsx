import React from 'react';
import { mount } from 'enzyme';

import { PinnedCard } from '../PinnedCard';

import {
	mockStore,
	MockReduxProvider
} from '../../../../../../test/__mocks__/mockRedux';
import { createTestItem } from '../../../../../../test/setup';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('PinnedCard', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { noteId: '1' },
			route: '/'
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<PinnedCard item={createTestItem()} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
