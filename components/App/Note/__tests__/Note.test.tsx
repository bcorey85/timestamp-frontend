import React from 'react';
import { shallow } from 'enzyme';

import { Note } from '../Note';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Note', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Note />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
