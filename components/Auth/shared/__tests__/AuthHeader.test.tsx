import React from 'react';
import { shallow } from 'enzyme';

import { AuthHeader } from '../AuthHeader';

describe('AuthHeader', () => {
	it('renders', () => {
		const wrapper = shallow(<AuthHeader />);
		expect(wrapper).not.toBeNull();
	});
});
