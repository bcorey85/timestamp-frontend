import React from 'react';
import { shallow } from 'enzyme';

import { Settings } from '../Settings';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Settings', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Settings />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
