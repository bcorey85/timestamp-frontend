import React from 'react';
import { shallow } from 'enzyme';

import { PinnedCardTags } from '../PinnedCardTags';
import { createTestItem } from '../../../../../../test/setup';

describe('PinnedCardTags', () => {
	const item = createTestItem();
	it('renders', () => {
		const wrapper = shallow(<PinnedCardTags tags={item.tags} />);
		expect(wrapper).not.toBeNull();
	});
});
