import React from 'react';
import { shallow } from 'enzyme';

import { AuthContainer } from '../AuthContainer';

describe('AuthContainer', () => {
	it('renders', () => {
		const wrapper = shallow(<AuthContainer />);
		expect(wrapper).not.toBeNull();
	});
});
