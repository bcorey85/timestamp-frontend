import React from 'react';
import { shallow } from 'enzyme';

import { Meta } from './Meta';

describe('Footer', () => {
	it('renders', () => {
		const wrapper = shallow(<Meta pageTitle='test' />);
		expect(wrapper).not.toBeNull();
	});
});
