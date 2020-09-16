import React from 'react';
import { mount } from 'enzyme';

import { ProjectForm } from '../ProjectForm';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('ProjectForm', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<ProjectForm handleClose={jest.fn} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
