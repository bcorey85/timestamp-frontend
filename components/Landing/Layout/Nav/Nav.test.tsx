import React from 'react';
import { mount } from 'enzyme';

import { Nav } from './Nav';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Nav', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { noteId: '1' },
			route: '/'
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Nav />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
