import React from 'react';
import { shallow } from 'enzyme';

import { ListItem } from '../ListItem';
import { IconType } from '../../../TypeIcon';
import { ItemType } from '../../../../../../utils/ItemService';

describe('ListItem', () => {
	it('renders project', () => {
		const item = {
			href: '/',
			as: '/',
			type: 'project' as keyof ItemType,
			title: 'test',
			hours: '1',
			startTime: null as string,
			endTime: null as string,
			tasks: 1,
			notes: 1,
			date: null as string,
			pinned: true
		};

		const userId = '1';

		const wrapper = shallow(<ListItem item={item} userId={userId} />);
		expect(wrapper).not.toBeNull();
	});

	it('renders task', () => {
		const item = {
			href: '/',
			as: '/',
			type: 'task' as keyof ItemType,
			title: 'test',
			hours: '1',
			startTime: null as string,
			endTime: null as string,
			tasks: null as number,
			notes: 1,
			date: null as string,
			pinned: true
		};

		const userId = '1';

		const wrapper = shallow(<ListItem item={item} userId={userId} />);
		expect(wrapper).not.toBeNull();
	});

	it('renders note', () => {
		const item = {
			href: '/',
			as: '/',
			type: 'note' as keyof ItemType,
			title: 'test',
			hours: '1',
			startTime: new Date(Date.now() - 1000 * 60 * 60).toISOString(),
			endTime: new Date(Date.now()).toISOString(),
			tasks: 1,
			notes: 1,
			date: '12/12/2019',
			pinned: true
		};

		const userId = '1';

		const wrapper = shallow(<ListItem item={item} userId={userId} />);
		expect(wrapper).not.toBeNull();
	});
});
