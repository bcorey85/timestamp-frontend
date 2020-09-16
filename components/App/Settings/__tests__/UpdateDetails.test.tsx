import React from 'react';
import { mount } from 'enzyme';

import { UpdateDetails } from '../UpdateDetails';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('UpdateDetails', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<UpdateDetails mode='email' closeForm={jest.fn} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
