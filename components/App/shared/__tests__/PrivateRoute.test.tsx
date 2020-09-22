import React from 'react';
import { mount } from 'enzyme';

import { PrivateRoute } from '../PrivateRoute';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('PrivateRoute', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { projectId: '1' },
			route: '/',
			push: async () => true
		}));
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<PrivateRoute />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
