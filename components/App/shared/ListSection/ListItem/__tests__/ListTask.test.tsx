import React from 'react';
import { shallow } from 'enzyme';

import { ListTask } from '../ListTask';

describe('ListTask', () => {
	it('renders', () => {
		const wrapper = shallow(<ListTask notes={1} hours={'1'} />);
		expect(wrapper).not.toBeNull();
	});
});
