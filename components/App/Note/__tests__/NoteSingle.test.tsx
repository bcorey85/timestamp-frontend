import React from 'react';
import { mount } from 'enzyme';

import { NoteSingle } from '../NoteSingle';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';
import { setAppData } from '../../../../redux/appData';
import { createTestItem } from '../../../../test/setup';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('NoteSingle', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { noteId: '1' }
		}));

		mockStore.dispatch(
			setAppData({
				appData: {
					synced: true,
					email: 'test@gmail.com',
					notes: [ createTestItem('note') ],
					projects: [ createTestItem('project') ],
					tasks: [ createTestItem('task') ],
					hours: '5',
					createdAt: new Date(Date.now()).toISOString(),
					lastLogin: new Date(Date.now()).toISOString(),
					recentItems: {
						notes: [],
						tasks: [],
						projects: []
					}
				}
			})
		);

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<NoteSingle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
