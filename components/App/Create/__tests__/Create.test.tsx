import React from 'react';
import { shallow } from 'enzyme';

import { Create } from '../Create';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('Create', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<Create />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
