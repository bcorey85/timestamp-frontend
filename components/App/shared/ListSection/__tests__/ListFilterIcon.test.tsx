import React from 'react';
import { shallow } from 'enzyme';

import { ListFilterIcon } from '../ListFilterIcon';

describe('ListFilterIcon', () => {
	it('renders', () => {
		const wrapper = shallow(<ListFilterIcon sortDesc={true} />);
		expect(wrapper).not.toBeNull();
	});
});
