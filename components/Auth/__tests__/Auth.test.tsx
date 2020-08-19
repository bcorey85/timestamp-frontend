import React from 'react';
import { shallow } from 'enzyme';

import { Auth } from '../Auth';

describe('Auth', () => {
	it('renders', () => {
		const wrapper = shallow(<Auth />);
		expect(wrapper).not.toBeNull();
	});
});
