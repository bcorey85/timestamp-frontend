import React from 'react';
import { shallow } from 'enzyme';

import { PinnedFavoritesSlider } from '../PinnedFavoritesSlider';
import { createTestItem } from '../../../../test/setup';

describe('PinnedFavoritesSlider', () => {
	it('renders', () => {
		const item = createTestItem();

		const wrapper = shallow(
			<PinnedFavoritesSlider items={[ item, item ]} currentPage='all' />
		);
		expect(wrapper).not.toBeNull();
	});
});
