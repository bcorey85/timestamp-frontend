import React from 'react';
import { mount } from 'enzyme';

import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

import { Drawer } from '../Drawer';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

describe('Drawer', () => {
	it('renders', () => {
		useRouter.mockImplementation(() => ({
			query: { projectId: '1' },
			route: '/'
		}));

		const wrapper = mount(
			<MockReduxProvider reduxStore={mockStore}>
				<Drawer toggleCreateModal={jest.fn} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
