import React from 'react';
import { shallow } from 'enzyme';

import { OverflowLink } from '../OverflowLink';

describe('OverflowLink', () => {
	it('renders', () => {
		const wrapper = shallow(<OverflowLink handleClick={jest.fn} />);
		expect(wrapper).not.toBeNull();
	});
});
