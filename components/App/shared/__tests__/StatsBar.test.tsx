import React from 'react';
import { shallow } from 'enzyme';

import { StatsBar } from '../StatsBar';

describe('StatsBar', () => {
	it('renders', () => {
		const wrapper = shallow(<StatsBar />);
		expect(wrapper).not.toBeNull();
	});
});
