import React from 'react';
import { shallow } from 'enzyme';

import { PinnedCardDate } from '../PinnedCardDate';
import { createTestItem } from '../../../../../../test/setup';

describe('PinnedCardDate', () => {
	const item = createTestItem();
	it('renders', () => {
		const wrapper = shallow(
			<PinnedCardDate
				date={item.meta.date}
				time={item.meta.time}
				hours={item.meta.hours}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
