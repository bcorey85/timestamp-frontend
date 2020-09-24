import React from 'react';
import { shallow } from 'enzyme';

import { SearchResult } from '../SearchResult';
import { createTestItem } from '../../../../test/setup';

describe('SearchResult', () => {
	it('renders', () => {
		const wrapper = shallow(
			<SearchResult result={createTestItem('project')} userId='1' />
		);
		expect(wrapper).not.toBeNull();
	});
});
