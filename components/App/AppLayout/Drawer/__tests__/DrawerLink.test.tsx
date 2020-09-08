import React from 'react';
import { shallow } from 'enzyme';

import { DrawerLink } from '../DrawerLink';
import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

describe('DrawerLink', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<DrawerLink route='test'>Test</DrawerLink>
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
