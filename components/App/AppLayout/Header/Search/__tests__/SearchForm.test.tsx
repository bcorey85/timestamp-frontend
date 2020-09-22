import React from 'react';
import { mount } from 'enzyme';

import { SearchForm } from '../SearchForm';
import {
	mockStore,
	MockReduxProvider
} from '../../../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('SearchForm', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { projectId: '1' },
			route: '/'
		}));
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<SearchForm />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
