import React from 'react';
import { shallow } from 'enzyme';

import { ListItemContainer } from '../ListItemContainer';
import { PinnedIcon } from '../../../PinnedSection/PinnedIcon';

describe('ListItemContainer', () => {
	it('renders', () => {
		const wrapper = shallow(
			<ListItemContainer
				href='/'
				as='/'
				date='12/12/2020'
				type='project'
				title='test'
				pinned={true}
			/>
		);
		expect(wrapper).not.toBeNull();
	});

	it('displays pinned icon if pinned', () => {
		const wrapper = shallow(
			<ListItemContainer
				href='/'
				as='/'
				date='12/12/2020'
				type='project'
				title='test'
				pinned={true}
			/>
		);
		expect(wrapper.find(PinnedIcon).length).toBe(1);
	});

	it('displays no pinned icon if not pinned', () => {
		const wrapper = shallow(
			<ListItemContainer
				href='/'
				as='/'
				date='12/12/2020'
				type='project'
				title='test'
				pinned={false}
			/>
		);
		expect(wrapper.find(PinnedIcon).length).toBe(0);
	});
});
