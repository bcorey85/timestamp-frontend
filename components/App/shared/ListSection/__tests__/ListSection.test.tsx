import React from 'react';
import { shallow } from 'enzyme';

import { ListSection } from '../ListSection';

import {
	mockStore,
	MockReduxProvider
} from '../../../../../test/__mocks__/mockRedux';
import { createTestItem } from '../../../../../test/setup';

describe('ListSection', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<ListSection
					type='project'
					items={[ createTestItem(), createTestItem() ]}
					title='Projects'
					addType='new'
				/>
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
