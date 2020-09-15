import React from 'react';
import { shallow } from 'enzyme';

import { Select } from '../Select';
import { InputLabel } from '../InputLabel';

describe('Select Input', () => {
	it('renders a select and child options', () => {
		const wrapper = shallow(
			<Select
				id='comments'
				label='Comments'
				onChange={() => {}}
				value={'test'}>
				<option value='test'>Test</option>
				<option value='test'>Test</option>
				<option value='test'>Test</option>
			</Select>
		);

		expect(wrapper).not.toBeNull();
		expect(wrapper.find('select').length).toBe(1);
		expect(wrapper.find('option').length).toBe(3);
	});

	it('renders label if passed', () => {
		const wrapper = shallow(
			<Select
				id='comments'
				label='Comments'
				onChange={() => {}}
				value={'test'}>
				<option value='test'>Test</option>
				<option value='test'>Test</option>
				<option value='test'>Test</option>
			</Select>
		);

		expect(wrapper.find(InputLabel).length).toBe(1);
	});

	it('doesnt renders label not passed', () => {
		const wrapper = shallow(
			<Select id='comments' onChange={() => {}} value={'test'}>
				<option value='test'>Test</option>
				<option value='test'>Test</option>
				<option value='test'>Test</option>
			</Select>
		);

		expect(wrapper.find(InputLabel).length).toBe(0);
	});
});
