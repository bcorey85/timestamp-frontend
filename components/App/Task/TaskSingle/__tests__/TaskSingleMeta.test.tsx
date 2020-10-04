import React from 'react';
import { mount } from 'enzyme';

import { TaskSingleMeta } from '../TaskSingleMeta';

import { createTestItem } from '../../../../../test/setup';

describe('TaskSingleMeta', () => {
	it('renders', () => {
		const wrapper = mount(<TaskSingleMeta task={createTestItem('task')} />);
		expect(wrapper).not.toBeNull();
	});
});
