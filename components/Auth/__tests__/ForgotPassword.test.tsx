import React from 'react';
import { shallow } from 'enzyme';

import { ForgotPassword } from '../ForgotPassword';

const toggleForm = jest.fn();

describe('ForgotPassword', () => {
	it('renders', () => {
		const wrapper = shallow(<ForgotPassword toggleForm={toggleForm} />);
		expect(wrapper).not.toBeNull();
	});
});
