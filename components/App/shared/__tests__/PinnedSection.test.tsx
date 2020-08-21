import React from 'react';
import { shallow } from 'enzyme';

import { PinnedSection } from '../PinnedSection';

describe('PinnedSection', () => {
	it('renders', () => {
		const wrapper = shallow(<PinnedSection />);
		expect(wrapper).not.toBeNull();
	});
});
