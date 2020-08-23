import React from 'react';
import { shallow } from 'enzyme';

import { StatCard } from '../StatCard';
import { IconType } from '../TypeIcon';

describe('StatCard', () => {
	it('renders', () => {
		const wrapper = shallow(
			<StatCard
				type={IconType.note}
				title='test'
				stat='4'
				linkText='test'
				href='/'
				as='/'
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
