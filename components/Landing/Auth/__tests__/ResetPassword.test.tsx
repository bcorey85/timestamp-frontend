import React from 'react';
import { mount } from 'enzyme';

import { ResetPassword } from '../ResetPassword';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('ResetPassword', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { tokenid: '1' },
			route: '/'
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<ResetPassword />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
