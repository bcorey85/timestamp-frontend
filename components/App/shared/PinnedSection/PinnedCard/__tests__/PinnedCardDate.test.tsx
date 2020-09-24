import React from 'react';
import { shallow } from 'enzyme';

import { PinnedCardDate } from '../PinnedCardDate';
import { createTestItem } from '../../../../../../test/setup';

describe('PinnedCardDate', () => {
	const item = createTestItem();
	it('renders', () => {
		const wrapper = shallow(<PinnedCardDate meta={item.meta} />);
		expect(wrapper).not.toBeNull();
	});
});
