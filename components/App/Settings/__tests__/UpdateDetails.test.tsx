import React from 'react';
import { shallow } from 'enzyme';

import { UpdateDetails } from '../UpdateDetails';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('UpdateDetails', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<UpdateDetails mode='email' />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
