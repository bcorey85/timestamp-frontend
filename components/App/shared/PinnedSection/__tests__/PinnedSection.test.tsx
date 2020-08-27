import React from 'react';
import { shallow } from 'enzyme';

import { PinnedSection } from '../PinnedSection';

import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';

describe('PinnedSection', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<PinnedSection />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
