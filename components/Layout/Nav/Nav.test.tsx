import React from 'react';
import { shallow } from 'enzyme';

import { Nav } from './Nav';
import {
	mockStore,
	MockReduxProvider
} from '../../../test/__mocks__/mockRedux';

describe('Nav', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Nav />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
