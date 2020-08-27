import React from 'react';
import { shallow } from 'enzyme';

import { ListSection } from '../ListSection';

describe('ListSection', () => {
	it('renders', () => {
		const wrapper = shallow(<ListSection items={[]} />);
		expect(wrapper).not.toBeNull();
	});
});
