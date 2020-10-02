import React from 'react';
import { shallow } from 'enzyme';

import { ListFilterButton } from '../ListFilterButton';

describe('ListFilterButton', () => {
	it('renders', () => {
		const wrapper = shallow(
			<ListFilterButton
				sortFunction={jest.fn}
				columnFilter='hours'
				title='hours'
				align='right'
				currentFilter='date'
				sortDesc={true}
				type='project'
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
