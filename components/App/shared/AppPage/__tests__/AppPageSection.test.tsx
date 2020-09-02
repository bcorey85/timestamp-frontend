import React from 'react';
import { shallow } from 'enzyme';

import { AppPageSection } from '../AppPageSection';

describe('AppPageSection', () => {
	it('renders', () => {
		const wrapper = shallow(<AppPageSection title='test' />);
		expect(wrapper).not.toBeNull();
	});
});
