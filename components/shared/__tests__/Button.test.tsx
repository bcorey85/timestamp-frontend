import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Button } from '../Button';

Enzyme.configure({ adapter: new Adapter() });

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
