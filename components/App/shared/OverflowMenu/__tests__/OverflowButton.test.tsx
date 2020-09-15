import React from 'react';
import { shallow } from 'enzyme';

import { OverflowButton } from '../OverflowButton';

describe('OverflowButton', () => {
	it('renders', () => {
		const wrapper = shallow(<OverflowButton toggleMenu={jest.fn} />);
		expect(wrapper).not.toBeNull();
	});
});
