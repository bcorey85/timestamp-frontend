import React from 'react';

import { shallow } from 'enzyme';

import { AppLayout } from '../AppLayout';

describe('AppLayout', () => {
	it('renders', () => {
		const wrapper = shallow(<AppLayout />);
		expect(wrapper).not.toBeNull();
	});
});
