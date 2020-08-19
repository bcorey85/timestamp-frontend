import React from 'react';

import { shallow } from 'enzyme';

import { Drawer } from '../Drawer';

describe('Drawer', () => {
	it('renders', () => {
		const wrapper = shallow(<Drawer />);
		expect(wrapper).not.toBeNull();
	});
});
