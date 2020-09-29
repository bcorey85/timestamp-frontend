import React from 'react';
import { shallow } from 'enzyme';

import { Calendar } from '../Calendar';

describe('Calendar', () => {
	it('renders', () => {
		const wrapper = shallow(
			<Calendar
				monthlyCreatedTotals={[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
