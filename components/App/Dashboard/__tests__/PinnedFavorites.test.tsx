import React from 'react';
import { shallow } from 'enzyme';

import { PinnedFavorites } from '../PinnedFavorites';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('PinnedFavorites', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<PinnedFavorites items={[]} />
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
