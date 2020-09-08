import React from 'react';
import { shallow } from 'enzyme';

import { PrivateRoute } from '../PrivateRoute';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('PrivateRoute', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<PrivateRoute />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
