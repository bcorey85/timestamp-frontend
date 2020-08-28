import React from 'react';
import { shallow } from 'enzyme';

import { PinnedCard } from '../PinnedCard';
import { IconType } from '../../TypeIcon';

describe('PinnedCard', () => {
	it('renders', () => {
		const wrapper = shallow(
			<PinnedCard
				href={'/'}
				as={'/'}
				title='test'
				type={IconType.project}
				hours='50'
				date='9/5/2019'
				label1='test'
				label2='test'
				stat1='1'
				stat2='2'
				description='null'
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
