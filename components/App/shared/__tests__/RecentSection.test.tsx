import React from 'react';
import { shallow } from 'enzyme';

import { RecentSection } from '../RecentSection';

describe('RecentSection', () => {
	it('renders', () => {
		const wrapper = shallow(<RecentSection />);
		expect(wrapper).not.toBeNull();
	});
});
