import React from 'react';
import { mount } from 'enzyme';

import { Settings } from '../Settings';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Settings', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { projectId: '1' },
			route: '/'
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Settings />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
