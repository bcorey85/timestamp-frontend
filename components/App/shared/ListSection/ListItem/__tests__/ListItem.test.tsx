import React from 'react';
import { shallow } from 'enzyme';

import { ListItem } from '../ListItem';
import { ItemType } from '../../../../../../utils/ItemService';
import { createTestItem } from '../../../../../../test/setup';

describe('ListItem', () => {
	it('renders project', () => {
		const item = createTestItem();
		item.type = 'project';

		const userId = '1';

		const wrapper = shallow(<ListItem item={item} userId={userId} />);
		expect(wrapper).not.toBeNull();
	});

	it('renders task', () => {
		const item = createTestItem();
		item.type = 'task';

		const userId = '1';

		const wrapper = shallow(<ListItem item={item} userId={userId} />);
		expect(wrapper).not.toBeNull();
	});

	it('renders note', () => {
		const item = createTestItem();
		item.type = 'note';

		const userId = '1';

		const wrapper = shallow(<ListItem item={item} userId={userId} />);
		expect(wrapper).not.toBeNull();
	});
});
