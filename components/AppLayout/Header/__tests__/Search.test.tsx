import React from 'react';

import { shallow } from 'enzyme';

import { Search } from '../Search';

describe('Search', () => {
	it('renders', () => {
		const wrapper = shallow(<Search />);
		expect(wrapper).not.toBeNull();
	});
});
