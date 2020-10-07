import React from 'react';
import { shallow } from 'enzyme';

import { Signup } from '../Signup';

describe('Signup', () => {
	it('renders', () => {
		const wrapper = shallow(<Signup />);
		expect(wrapper).not.toBeNull();
	});
});
