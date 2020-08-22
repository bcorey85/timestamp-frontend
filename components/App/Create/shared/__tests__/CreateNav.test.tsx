import React from 'react';
import { shallow } from 'enzyme';

import { CreateNav } from '../CreateNav';
import { CreatePage } from '../../Create';

describe('CreateNav', () => {
	it('renders', () => {
		const wrapper = shallow(
			<CreateNav
				currentPage={CreatePage.project}
				handleClick={() => {}}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
