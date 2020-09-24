import React from 'react';
import { shallow } from 'enzyme';

import { PinnedCardStats } from '../PinnedCardStats';
import { createTestItem } from '../../../../../../test/setup';

describe('PinnedCardStats', () => {
	const item = createTestItem();
	it('renders', () => {
		const wrapper = shallow(
			<PinnedCardStats
				type={item.type}
				tags={item.tags}
				notes={item.notes}
				tasks={item.tasks}
				hours={item.meta.hours}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
