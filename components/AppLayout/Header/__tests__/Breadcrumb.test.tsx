import React from 'react';

import { shallow } from 'enzyme';

import { Breadcrumb } from '../Breadcrumb';
import { IconType } from '../../TypeIcon';

const mockLinks = [
	{
		href: '#',
		iconType: IconType.project,
		text: 'Project Title'
	},
	{
		href: '#',
		iconType: IconType.task,
		text: 'Task Title'
	},
	{
		href: '#',
		iconType: IconType.note,
		text: 'Note Title'
	}
];

describe('Breadcrumb', () => {
	it('renders', () => {
		const wrapper = shallow(<Breadcrumb links={mockLinks} />);
		expect(wrapper).not.toBeNull();
	});
});
