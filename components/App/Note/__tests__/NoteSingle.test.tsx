import React from 'react';
import { shallow } from 'enzyme';

import { NoteSingle } from '../NoteSingle';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('NoteSingle', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<NoteSingle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
