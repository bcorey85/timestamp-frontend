import React from 'react';
import { shallow } from 'enzyme';

import { Hero } from '../Hero';

describe('Hero', () => {
	it('renders', () => {
		const wrapper = shallow(<Hero />);
		expect(wrapper).not.toBeNull();
	});
});
