import React from 'react';

import { shallow } from 'enzyme';

import { Header } from '../Header';

describe('Header', () => {
	it('renders', () => {
		const wrapper = shallow(<Header />);
		expect(wrapper).not.toBeNull();
	});
});
