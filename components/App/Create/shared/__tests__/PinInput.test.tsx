import React from 'react';
import { shallow } from 'enzyme';

import { PinInput } from '../PinInput';

describe('PinInput', () => {
	it('renders', () => {
		const wrapper = shallow(<PinInput pinned={true} handlePin={jest.fn} />);
		expect(wrapper).not.toBeNull();
	});
});
