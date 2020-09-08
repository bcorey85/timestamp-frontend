import React from 'react';
import { shallow } from 'enzyme';

import { SignIn } from '../SignIn';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

const toggleForm = jest.fn();

describe('SignIn', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<SignIn toggleForm={toggleForm} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
