import React from 'react';
import { shallow } from 'enzyme';

import { ListFilter } from '../ListFilter';

describe('ListFilter', () => {
	it('renders project filter', () => {
		const wrapper = shallow(
			<ListFilter
				sortFunction={jest.fn}
				currentFilter='date'
				sortDesc={true}
				type='project'
			/>
		);
		expect(wrapper).not.toBeNull();
	});

	it('renders task filter', () => {
		const wrapper = shallow(
			<ListFilter
				sortFunction={jest.fn}
				currentFilter='date'
				sortDesc={true}
				type='task'
			/>
		);
		expect(wrapper).not.toBeNull();
	});

	it('renders note filter', () => {
		const wrapper = shallow(
			<ListFilter
				sortFunction={jest.fn}
				currentFilter='date'
				sortDesc={true}
				type='note'
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
