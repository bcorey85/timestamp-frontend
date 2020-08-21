import React from 'react';
import { shallow } from 'enzyme';

import { DashboardSection } from '../DashboardSection';

describe('DashboardSection', () => {
	it('renders', () => {
		const wrapper = shallow(<DashboardSection title='test' />);
		expect(wrapper).not.toBeNull();
	});
});
