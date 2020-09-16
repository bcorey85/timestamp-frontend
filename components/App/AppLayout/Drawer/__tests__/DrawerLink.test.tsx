import React from 'react';
import { mount } from 'enzyme';

import { DrawerLink } from '../DrawerLink';
import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('DrawerLink', () => {
	it('renders', () => {
		useRouter.mockImplementationOnce(() => ({
			route: '/'
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<DrawerLink route='test'>Test</DrawerLink>
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
