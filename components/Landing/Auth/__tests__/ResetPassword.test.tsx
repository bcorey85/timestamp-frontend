import React from 'react';
import { shallow } from 'enzyme';

import { ResetPassword } from '../ResetPassword';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('ResetPassword', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<ResetPassword />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
