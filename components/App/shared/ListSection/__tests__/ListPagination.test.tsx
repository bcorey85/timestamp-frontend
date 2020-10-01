import React from 'react';
import { shallow } from 'enzyme';

import { ListPagination } from '../ListPagination';

describe('ListPagination', () => {
	it('renders', () => {
		const wrapper = shallow(
			<ListPagination
				next={jest.fn}
				back={jest.fn}
				pageNumber={1}
				totalPages={2}
				showNextButton={true}
				showBackButton={false}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
