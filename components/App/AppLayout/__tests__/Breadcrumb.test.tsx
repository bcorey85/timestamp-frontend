import React from 'react';
import { shallow } from 'enzyme';

import { Breadcrumb } from '../Breadcrumb';
import { IconType } from '../../shared/TypeIcon';
import { ItemType } from '../../../../utils/ItemService';

const mockLinks = [
	{
		href: '#',
		iconType: 'project' as keyof ItemType,
		text: 'Project Title'
	},
	{
		href: '#',
		iconType: 'task' as keyof ItemType,
		text: 'Task Title'
	},
	{
		href: '#',
		iconType: 'note' as keyof ItemType,
		text: 'Note Title'
	}
];

describe('Breadcrumb', () => {
	it('renders', () => {
		const wrapper = shallow(<Breadcrumb links={mockLinks} />);
		expect(wrapper).not.toBeNull();
	});
});
