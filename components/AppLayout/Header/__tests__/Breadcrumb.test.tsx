import React from 'react';

import { shallow } from 'enzyme';

import { Breadcrumb } from '../Breadcrumb';

describe('Breadcrumb', () => {
	it('renders', () => {
		const wrapper = shallow(<Breadcrumb />);
		expect(wrapper).not.toBeNull();
	});
});
