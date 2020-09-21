import React from 'react';
import moment from 'moment';
import { shallow } from 'enzyme';

import { DateTimeInput } from '../DateTimeInput';
import { InputLabel } from '../InputLabel';

describe('DateTimeInput', () => {
	it('renders', () => {
		const wrapper = shallow(
			<DateTimeInput
				id='date'
				label='Date'
				handleDate={jest.fn}
				dateValue={moment()}
			/>
		);
		expect(wrapper).not.toBeNull();
	});

	it('renders label if passed', () => {
		const wrapper = shallow(
			<DateTimeInput
				id='date'
				label='Date'
				handleDate={jest.fn}
				dateValue={moment()}
			/>
		);

		expect(wrapper.find(InputLabel).length).toBe(1);
	});

	it('doesnt renders label not passed', () => {
		const wrapper = shallow(
			<DateTimeInput
				id='date'
				handleDate={jest.fn}
				dateValue={moment()}
			/>
		);

		expect(wrapper.find(InputLabel).length).toBe(0);
	});
});
