import React from 'react';
import { shallow } from 'enzyme';

import { OverflowDelete } from '../OverflowDelete';

describe('OverflowDelete', () => {
	it('renders', () => {
		const wrapper = shallow(<OverflowDelete handleClick={jest.fn} />);
		expect(wrapper).not.toBeNull();
	});
});
