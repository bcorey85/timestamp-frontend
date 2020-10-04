import React from 'react';
import { shallow } from 'enzyme';

import { ProjectSingleItemList } from '../ProjectSingleItemList';

import { createTestItem } from '../../../../../test/setup';

describe('ProjectSingleItemList', () => {
	it('renders', () => {
		const itemSource = {
			tasks: [ createTestItem('task'), createTestItem('task') ],
			notes: [ createTestItem('note') ]
		};

		const project = createTestItem('project');

		const wrapper = shallow(
			<ProjectSingleItemList itemSource={itemSource} project={project} />
		);
		expect(wrapper).not.toBeNull();
	});
});
