import React from 'react';
import { shallow } from 'enzyme';

import { OverflowComplete } from '../OverflowComplete';

describe('OverflowComplete', () => {
	it('renders', () => {
		const wrapper = shallow(<OverflowComplete handleClick={jest.fn} />);
		expect(wrapper).not.toBeNull();
	});
});
