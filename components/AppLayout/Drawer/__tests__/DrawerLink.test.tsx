import React from 'react';

import { shallow } from 'enzyme';

import { DrawerLink } from '../DrawerLink';

describe('DrawerLink', () => {
	it('renders', () => {
		const wrapper = shallow(
			<DrawerLink href='#' isActive={false}>
				Test Link
			</DrawerLink>
		);
		expect(wrapper).not.toBeNull();
	});
});
