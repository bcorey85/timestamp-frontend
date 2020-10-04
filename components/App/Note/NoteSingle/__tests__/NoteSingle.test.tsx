import React from 'react';
import { mount } from 'enzyme';

import { NoteSingle } from '../NoteSingle';

import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

import { createTestState } from '../../../../../test/setup';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('NoteSingle', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { noteId: '1' }
		}));

		createTestState();

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<NoteSingle />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
