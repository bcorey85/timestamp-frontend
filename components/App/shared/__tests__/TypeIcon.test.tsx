import React from 'react';
import { shallow } from 'enzyme';

import { TypeIcon, IconType } from '../TypeIcon';

describe('TypeIcon', () => {
	it('renders', () => {
		const wrapper = shallow(<TypeIcon type='project' />);
		expect(wrapper).not.toBeNull();
	});
});
