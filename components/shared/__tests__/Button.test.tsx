import React from 'react';

import { shallow } from 'enzyme';

import { Button } from '../Button';

const testHandler = () => {
	console.log('clicked');
};

describe('Button', () => {
	it('renders and returns one button', () => {
		const wrapper = shallow(
			<Button btnStyle='primary' onClick={testHandler} />
		);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find('button').length).toBe(1);
	});
});
