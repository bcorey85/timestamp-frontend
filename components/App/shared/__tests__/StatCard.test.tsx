import React from 'react';
import { shallow } from 'enzyme';

import { StatCard } from '../StatCard';

describe('StatCard', () => {
	it('renders', () => {
		const wrapper = shallow(<StatCard />);
		expect(wrapper).not.toBeNull();
	});
});
