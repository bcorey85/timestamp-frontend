import React from 'react';
import { mount } from 'enzyme';

import { ProjectSingle } from '../ProjectSingle';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';
import { setAppData } from '../../../../redux/appData';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('ProjectSingle', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { projectId: '1' }
		}));
		mockStore.dispatch(
			setAppData({
				appData: {
					synced: true,
					email: 'test@gmail.com',
					notes: [ { title: '1' } ],
					projects: [ { title: '1' } ],
					tasks: [ { title: '1' } ],
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
				<ProjectSingle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
