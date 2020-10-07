import React from 'react';
import { shallow } from 'enzyme';

import { Benefits } from '../Benefits';

describe('Benefits', () => {
	it('renders', () => {
		const wrapper = shallow(<Benefits />);
		expect(wrapper).not.toBeNull();
	});
});
