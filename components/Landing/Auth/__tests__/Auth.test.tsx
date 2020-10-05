import React from 'react';
import { shallow } from 'enzyme';

import { Auth } from '../Auth';
import { Login } from '../Login';
import { ForgotPassword } from '../ForgotPassword';

describe('Auth', () => {
	it('renders itself and signin component', () => {
		const wrapper = shallow(<Auth />);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find(Login).length).toBe(1);
		expect(wrapper.find(ForgotPassword).length).toBe(0);
	});
});
