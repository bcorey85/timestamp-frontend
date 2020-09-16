import React from 'react';
import { mount } from 'enzyme';

import { NoteForm } from '../NoteForm';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('NoteForm', () => {
	it('renders', () => {
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<NoteForm handleClose={jest.fn} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
