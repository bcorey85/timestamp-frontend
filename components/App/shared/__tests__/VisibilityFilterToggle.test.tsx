import React from 'react';
import { shallow } from 'enzyme';

import { VisibilityFilterToggle } from '../VisibilityFilterToggle';
import { createTestItem } from '../../../../test/setup';

describe('VisibilityFilterToggle', () => {
	it('renders', () => {
		const item = createTestItem();

		const wrapper = shallow(
			<VisibilityFilterToggle selected={'active'} handleClick={jest.fn} />
		);
		expect(wrapper).not.toBeNull();
	});
});
