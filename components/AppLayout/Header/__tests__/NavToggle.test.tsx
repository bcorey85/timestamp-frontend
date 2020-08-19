import React from 'react';

import { shallow } from 'enzyme';

import { NavToggle } from '../NavToggle';

describe('NavToggle', () => {
	it('renders', () => {
		const wrapper = shallow(<NavToggle />);
		expect(wrapper).not.toBeNull();
	});
});
