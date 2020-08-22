import React from 'react';
import { shallow } from 'enzyme';

import { Create } from '../Create';

describe('Create', () => {
	it('renders', () => {
		const wrapper = shallow(<Create />);
		expect(wrapper).not.toBeNull();
	});
});
