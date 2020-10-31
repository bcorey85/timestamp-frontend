import React from 'react';
import { mount } from 'enzyme';

import { CalendarCell } from '../CalendarCell';

describe('CalendarCell', () => {
	it('renders', () => {
		const root = document.body;
		root.style.setProperty('--text500', 'hsl(167, 5%, 20%)');
		root.style.setProperty('--primary400', 'hsl(167, 85%, 37%)');

		const wrapper = mount(
			<CalendarCell month={'Jan'} total={1} colorAlpha={1} />
		);
		expect(wrapper).not.toBeNull();
	});
});
