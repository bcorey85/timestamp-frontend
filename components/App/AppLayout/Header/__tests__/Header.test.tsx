import React from 'react';
import { shallow } from 'enzyme';

import { Header } from '../Header';

import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

describe('Header', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Header />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
