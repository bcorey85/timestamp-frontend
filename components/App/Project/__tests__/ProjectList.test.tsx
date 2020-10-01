import React from 'react';
import { mount } from 'enzyme';

import { ProjectList } from '../ProjectList';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('ProjectList', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<ProjectList />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
