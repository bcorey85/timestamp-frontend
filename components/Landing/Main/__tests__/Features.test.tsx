import React from 'react';
import { shallow } from 'enzyme';

import { Features } from '../Features';

describe('Features', () => {
	it('renders', () => {
		const wrapper = shallow(<Features />);
		expect(wrapper).not.toBeNull();
	});
});
