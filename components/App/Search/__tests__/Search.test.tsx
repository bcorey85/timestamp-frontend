import React from 'react';
import { mount } from 'enzyme';

import { Search } from '../Search';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Search', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { projectId: '1' },
			route: '/'
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Search />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
