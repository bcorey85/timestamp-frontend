import React from 'react';
import { shallow } from 'enzyme';

import { SearchInput } from '../SearchInput';

describe('SearchInput', () => {
	it('renders', () => {
		const wrapper = shallow(
			<SearchInput
				handleSearch={jest.fn}
				field='date'
				setField={jest.fn}
				searchValue='test'
				setSearchValue={jest.fn}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
