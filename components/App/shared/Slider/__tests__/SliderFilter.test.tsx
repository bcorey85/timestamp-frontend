import React from 'react';
import { shallow } from 'enzyme';

import { SliderFilter } from '../SliderFilter';

describe('SliderFilter', () => {
	it('renders', () => {
		const wrapper = shallow(<SliderFilter />);
		expect(wrapper).not.toBeNull();
	});
});
