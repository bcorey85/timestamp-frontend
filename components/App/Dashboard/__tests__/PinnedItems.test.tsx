import React from 'react';
import { shallow } from 'enzyme';

import { PinnedItems } from '../PinnedItems';
import { createTestItem } from '../../../../test/setup';

describe('PinnedItems', () => {
	it('renders', () => {
		const item = createTestItem();

		const wrapper = shallow(
			<PinnedItems items={[ item, item ]} userId='1' />
		);
		expect(wrapper).not.toBeNull();
	});
});
