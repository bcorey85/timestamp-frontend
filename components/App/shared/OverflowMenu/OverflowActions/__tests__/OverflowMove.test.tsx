import React from 'react';
import { shallow } from 'enzyme';

import { OverflowMove } from '../OverflowMove';

describe('OverflowMove', () => {
	it('renders', () => {
		const wrapper = shallow(<OverflowMove handleClick={jest.fn} />);
		expect(wrapper).not.toBeNull();
	});
});
