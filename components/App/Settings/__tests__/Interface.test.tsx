import React from 'react';
import { shallow } from 'enzyme';

import { Interface } from '../Interface';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Interface', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Interface />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
