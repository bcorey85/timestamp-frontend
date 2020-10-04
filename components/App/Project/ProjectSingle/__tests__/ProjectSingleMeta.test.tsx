import React from 'react';
import { shallow } from 'enzyme';

import { ProjectSingleMeta } from '../ProjectSingleMeta';

import { createTestItem } from '../../../../../test/setup';

describe('ProjectSingleMeta', () => {
	it('renders', () => {
		const project = createTestItem('project');

		const wrapper = shallow(<ProjectSingleMeta project={project} />);
		expect(wrapper).not.toBeNull();
	});
});
