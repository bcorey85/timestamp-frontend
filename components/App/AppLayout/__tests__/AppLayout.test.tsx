import React from 'react';
import { mount } from 'enzyme';

import { AppLayout } from '../AppLayout';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('AppLayout', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { projectId: '1' },
			route: '/'
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<AppLayout />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
