import React from 'react';
import { shallow } from 'enzyme';

import { MobileCreateButton } from '../MobileCreateButton';
import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('MobileCreateButton', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<MobileCreateButton toggleCreateModal={jest.fn} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
