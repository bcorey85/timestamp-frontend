import React from 'react';
import { shallow } from 'enzyme';

import { DeleteAccount } from '../DeleteAccount';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('DeleteAccount', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<DeleteAccount />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
