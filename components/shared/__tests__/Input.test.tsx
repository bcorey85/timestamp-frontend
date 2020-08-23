import React from 'react';
import { shallow } from 'enzyme';

import { Input } from '../Input';

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
		expect(wrapper.find('BaseInput').length).toBe(1);
	});

	it('renders a textarea', () => {
		const wrapper = shallow(
			<Input
				id='comments'
				type='textarea'
				label='Comments'
				onChange={() => {}}
				value={'This is a comment.'}
			/>
		);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find('TextArea').length).toBe(1);
	});

	it('renders a select and child options', () => {
		const wrapper = shallow(
			<Input
				id='comments'
				type='select'
				label='Comments'
				onChange={() => {}}
				value={'test'}>
				<option value='test'>Test</option>
				<option value='test'>Test</option>
				<option value='test'>Test</option>
			</Input>
		);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find('Select').length).toBe(1);
		expect(wrapper.find('option').length).toBe(3);
	});
});
