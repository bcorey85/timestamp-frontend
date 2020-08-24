import React from 'react';
import { shallow } from 'enzyme';

import { RecentItem } from '../RecentItem';
import { IconType } from '../TypeIcon';

describe('RecentItem', () => {
	it('renders', () => {
		const wrapper = shallow(
			<RecentItem
				type={IconType.note}
				title='test'
				date='12/12/2019'
				time='2:00pm - 9:00pm'
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
