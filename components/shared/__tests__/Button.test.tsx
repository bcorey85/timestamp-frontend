import React from 'react';

import { shallow } from 'enzyme';

import { Button } from '../Button';

const clickHandler = jest.fn();

describe('Button', () => {
	it('renders and returns one button', () => {
		const wrapper = shallow(
			<Button btnStyle='primary' onClick={clickHandler} />
		);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find('button').length).toBe(1);
	});

	it('calls click handler', () => {
		const wrapper = shallow(
			<Button btnStyle='primary' onClick={clickHandler} />
		);
		wrapper.find('button').simulate('click');
		expect(clickHandler).toBeCalled();
	});
});
