import React from 'react';
import { mount } from 'enzyme';

import { Note } from '../Note';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Note', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Note />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
