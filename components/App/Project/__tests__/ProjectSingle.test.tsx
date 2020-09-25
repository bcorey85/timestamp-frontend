import React from 'react';
import { mount } from 'enzyme';

import { ProjectSingle } from '../ProjectSingle';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

import { createTestState } from '../../../../test/setup';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('ProjectSingle', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { projectId: '1' }
		}));

		createTestState();

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<ProjectSingle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
