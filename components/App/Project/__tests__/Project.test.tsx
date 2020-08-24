import React from 'react';
import { shallow } from 'enzyme';

import { Project } from '../Project';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Project', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Project />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
