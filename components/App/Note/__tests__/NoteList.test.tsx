import React from 'react';
import { mount } from 'enzyme';

import { NoteList } from '../NoteList';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('NoteList', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<NoteList />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
