import React from 'react';
import { mount } from 'enzyme';

import { CreateNav } from '../CreateNav';

import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

describe('CreateNav', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<CreateNav currentPage={'project'} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
