import React from 'react';
import { mount } from 'enzyme';

import { TaskSingle } from '../TaskSingle';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('TaskSingle', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { taskId: '1' }
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<TaskSingle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
