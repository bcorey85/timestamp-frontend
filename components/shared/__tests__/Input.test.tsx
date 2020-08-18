import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Input } from '../Input';

Enzyme.configure({ adapter: new Adapter() });

describe('Input', () => {
	it('renders an input and label', () => {
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
		expect(wrapper.find('label').length).toBe(1);
		expect(wrapper.find('input').length).toBe(1);
	});

	it('renders a textarea and label', () => {
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
		expect(wrapper.find('label').length).toBe(1);
		expect(wrapper.find('textarea').length).toBe(1);
	});
});
