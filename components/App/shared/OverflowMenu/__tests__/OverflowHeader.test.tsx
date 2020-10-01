import React from 'react';
import { shallow } from 'enzyme';

import { OverflowHeader } from '../OverflowHeader';

describe('OverflowHeader', () => {
	it('renders', () => {
		const wrapper = shallow(<OverflowHeader>Test</OverflowHeader>);
		expect(wrapper).not.toBeNull();
	});
});
