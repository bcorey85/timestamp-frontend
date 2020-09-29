import React from 'react';
import { shallow } from 'enzyme';

import { DailyItemCell } from '../DailyItemCell';

describe('DailyItemCell', () => {
	it('renders', () => {
		const root = document.body;
		root.style.setProperty('--text500', 'hsl(167, 5%, 20%)');
		root.style.setProperty('--primary400', 'hsl(167, 85%, 37%)');

		const wrapper = shallow(
			<DailyItemCell date={'1/1/2020'} count={5} colorAlpha={1} />
		);
		expect(wrapper).not.toBeNull();
	});
});
