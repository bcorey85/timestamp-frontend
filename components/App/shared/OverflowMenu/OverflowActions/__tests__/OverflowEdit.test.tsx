import React from 'react';
import { shallow } from 'enzyme';

import { OverflowEdit } from '../OverflowEdit';

describe('OverflowEdit', () => {
	it('renders', () => {
		const wrapper = shallow(<OverflowEdit handleClick={jest.fn} />);
		expect(wrapper).not.toBeNull();
	});
});
