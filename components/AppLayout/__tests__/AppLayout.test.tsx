import React from 'react';
import { shallow } from 'enzyme';

import { AppLayout } from '../AppLayout';
import {
	mockStore,
	MockReduxProvider
} from '../../../test/__mocks__/mockRedux';

describe('AppLayout', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<AppLayout />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
