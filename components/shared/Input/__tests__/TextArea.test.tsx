import React from 'react';
import { shallow } from 'enzyme';

import { TextArea } from '../TextArea';
import { InputLabel } from '../InputLabel';

describe('TextArea input', () => {
	it('renders a textarea', () => {
		const wrapper = shallow(
			<TextArea
				id='comments'
				label='Comments'
				onChange={() => {}}
				value={'This is a comment.'}
			/>
		);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find('textarea').length).toBe(1);
	});

	it('renders label if passed', () => {
		const wrapper = shallow(
			<TextArea
				id='comments'
				label='Comments'
				onChange={() => {}}
				value={'This is a comment.'}
			/>
		);

		expect(wrapper.find(InputLabel).length).toBe(1);
	});

	it('doesnt renders label not passed', () => {
		const wrapper = shallow(
			<TextArea
				id='comments'
				onChange={() => {}}
				value={'This is a comment.'}
			/>
		);

		expect(wrapper.find(InputLabel).length).toBe(0);
	});
});
