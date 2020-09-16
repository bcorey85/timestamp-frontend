import React from 'react';
import { mount } from 'enzyme';

import { DeleteAccount } from '../DeleteAccount';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('DeleteAccount', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { projectId: '1' },
			route: '/'
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<DeleteAccount />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
