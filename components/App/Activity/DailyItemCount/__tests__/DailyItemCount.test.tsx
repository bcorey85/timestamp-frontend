import React from 'react';
import { shallow } from 'enzyme';

import { DailyItemCount } from '../DailyItemCount';

describe('DailyItemCount', () => {
	it('renders', () => {
		const wrapper = shallow(
			<DailyItemCount
				dailyItemCounts={[ { date: '1/1/2020', count: 5 } ]}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
