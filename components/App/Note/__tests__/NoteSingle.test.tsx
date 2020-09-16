import React from 'react';
import { mount } from 'enzyme';

import { NoteSingle } from '../NoteSingle';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('NoteSingle', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { noteId: '1' }
		}));
		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<NoteSingle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
