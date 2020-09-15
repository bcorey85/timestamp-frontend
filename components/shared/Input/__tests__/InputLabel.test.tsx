import React from 'react';
import { shallow } from 'enzyme';

import { InputLabel } from '../InputLabel';

describe('InputLabel', () => {
	it('renders', () => {
		const wrapper = shallow(<InputLabel id='test'>Test</InputLabel>);
		expect(wrapper).not.toBeNull();
	});
});
