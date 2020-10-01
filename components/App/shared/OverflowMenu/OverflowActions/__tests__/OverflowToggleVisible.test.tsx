import React from 'react';
import { shallow } from 'enzyme';

import { OverflowToggleVisible } from '../OverflowToggleVisible';

describe('OverflowToggleVisible', () => {
	it('renders', () => {
		const wrapper = shallow(
			<OverflowToggleVisible selected='active' handleClick={jest.fn} />
		);
		expect(wrapper).not.toBeNull();
	});
});
