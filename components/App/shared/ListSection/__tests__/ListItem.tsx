import React from 'react';
import { shallow } from 'enzyme';

import { ListItem } from '../ListItem';
import { IconType } from '../../TypeIcon';

describe('ListItem', () => {
	it('renders', () => {
		const wrapper = shallow(
			<ListItem
				href='/'
				as='/'
				type={IconType.note}
				title='test'
				date='12/12/2019'
				time='2:00pm - 9:00pm'
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
