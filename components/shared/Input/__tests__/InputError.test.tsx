import React from 'react';
import { shallow } from 'enzyme';

import { InputError } from '../InputError';

describe('InputError', () => {
	it('renders with visible error text if prop passed', () => {
		const wrapper = shallow(<InputError error='Please enter a value' />);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find('div').text()).toBe('Please enter a value');
	});

	it('renders with no visible error text if no errors', () => {
		const wrapper = shallow(<InputError error={null} />);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find('div').text()).toBe('');
	});
});
