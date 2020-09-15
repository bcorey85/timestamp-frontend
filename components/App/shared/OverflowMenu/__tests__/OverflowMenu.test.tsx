import React from 'react';
import { shallow } from 'enzyme';

import { OverflowMenu } from '../OverflowMenu';

describe('OverflowMenu', () => {
	it('renders', () => {
		const wrapper = shallow(<OverflowMenu />);
		expect(wrapper).not.toBeNull();
	});
});
