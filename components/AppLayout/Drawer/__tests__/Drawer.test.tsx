import React from 'react';
import { shallow } from 'enzyme';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

import { Drawer } from '../Drawer';

describe('Drawer', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Drawer />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
