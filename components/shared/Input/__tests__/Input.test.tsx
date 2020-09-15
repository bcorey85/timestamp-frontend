import React from 'react';
import { shallow } from 'enzyme';

import { Input } from '../Input';
import { InputLabel } from '../InputLabel';

describe('Input', () => {
	it('renders an input', () => {
		const wrapper = shallow(
			<Input
				id='email'
				type='email'
				label='Email'
				onChange={() => {}}
				value={'test@gmail.com'}
			/>
		);

		expect(wrapper).not.toBeNull();
		expect(wrapper.find('input').length).toBe(1);
	});

	it('renders label if passed', () => {
		const wrapper = shallow(
			<Input
				id='email'
				type='email'
				label='Email'
				onChange={() => {}}
				value={'test@gmail.com'}
			/>
		);

		expect(wrapper.find(InputLabel).length).toBe(1);
	});

	it('doesnt renders label not passed', () => {
		const wrapper = shallow(
			<Input
				id='email'
				type='email'
				onChange={() => {}}
				value={'test@gmail.com'}
			/>
		);

		expect(wrapper.find(InputLabel).length).toBe(0);
	});
});
