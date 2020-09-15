import React from 'react';
import { shallow } from 'enzyme';

import { AppPageMeta } from '../AppPageMeta';

describe('AppPageMeta', () => {
	it('renders', () => {
		const wrapper = shallow(<AppPageMeta />);
		expect(wrapper).not.toBeNull();
	});
});
