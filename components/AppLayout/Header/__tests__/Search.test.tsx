import React from 'react';
import { shallow } from 'enzyme';

import { Search } from '../Search';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Search', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Search />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
