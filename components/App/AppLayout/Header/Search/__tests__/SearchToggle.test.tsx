import React from 'react';
import { mount } from 'enzyme';

import { SearchToggle } from '../SearchToggle';

describe('SearchToggle', () => {
	it('renders', () => {
		const wrapper = mount(<SearchToggle />);
		expect(wrapper).not.toBeNull();
	});
});
