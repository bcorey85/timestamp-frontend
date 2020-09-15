import React from 'react';
import { shallow } from 'enzyme';

import { DateTimeInput } from '../DateTimeInput';
import { InputLabel } from '../InputLabel';

describe('DateTimeInput', () => {
	it('renders', () => {
		const wrapper = shallow(
			<DateTimeInput
				id='date'
				label='Date'
				handleTime={jest.fn}
				handleDate={jest.fn}
				dateValue='12/12/2020'
				timeValue='14:00'
			/>
		);
		expect(wrapper).not.toBeNull();
	});

	it('renders label if passed', () => {
		const wrapper = shallow(
			<DateTimeInput
				id='date'
				label='Date'
				handleTime={jest.fn}
				handleDate={jest.fn}
				dateValue='12/12/2020'
				timeValue='14:00'
			/>
		);

		expect(wrapper.find(InputLabel).length).toBe(1);
	});

	it('doesnt renders label not passed', () => {
		const wrapper = shallow(
			<DateTimeInput
				id='date'
				handleTime={jest.fn}
				handleDate={jest.fn}
				dateValue='12/12/2020'
				timeValue='14:00'
			/>
		);

		expect(wrapper.find(InputLabel).length).toBe(0);
	});
});
