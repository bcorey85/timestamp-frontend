import React from 'react';
import { mount } from 'enzyme';

import { MobileCreateButton } from '../MobileCreateButton';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('MobileCreateButton', () => {
	it('renders', () => {
		const toggleCreateModal = jest.fn();

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<MobileCreateButton toggleCreateModal={toggleCreateModal} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
		wrapper.find('button').simulate('click');
		expect(toggleCreateModal).toHaveBeenCalled();
	});
});
