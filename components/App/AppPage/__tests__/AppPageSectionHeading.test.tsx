import React from 'react';
import { shallow } from 'enzyme';

import { AppPageSectionHeading } from '../AppPageSectionHeading';

describe('AppPageSectionHeading', () => {
	it('renders', () => {
		const wrapper = shallow(<AppPageSectionHeading title='test' />);
		expect(wrapper).not.toBeNull();
	});
});
