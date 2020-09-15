import React from 'react';
import { shallow } from 'enzyme';

import { ProjectSingle } from '../ProjectSingle';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('ProjectSingle', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<ProjectSingle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
