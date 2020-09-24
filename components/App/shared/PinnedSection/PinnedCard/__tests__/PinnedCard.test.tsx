import React from 'react';
import { shallow } from 'enzyme';

import { PinnedCard } from '../PinnedCard';
import { createTestItem } from '../../../../../../test/setup';

describe('PinnedCard', () => {
	it('renders', () => {
		const wrapper = shallow(<PinnedCard item={createTestItem()} />);
		expect(wrapper).not.toBeNull();
	});
});
