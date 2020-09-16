import React from 'react';
import { shallow } from 'enzyme';

import { PinnedItems } from '../PinnedItems';

describe('PinnedItems', () => {
	it('renders', () => {
		const item = {
			href: `/app/[userId]/`,
			as: `/app/1/`,
			title: 'test',
			type: 'project',
			hours: '1',
			date: '12/12/2020',
			time: '12:00pm',
			notes: 5,
			tasks: 5,
			description: 'test',
			tags: '#1',
			user_id: 1,
			project_id: 1,
			pinned: false,
			created_at: new Date(Date.now()).toISOString(),
			updated_at: new Date(Date.now()).toISOString()
		};

		const wrapper = shallow(<PinnedItems items={[ item ]} userId='1' />);
		expect(wrapper).not.toBeNull();
	});
});
