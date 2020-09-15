import React from 'react';
import { shallow } from 'enzyme';

import { ListSection } from '../ListSection';

import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

describe('ListSection', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<ListSection type='project' items={[]} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
