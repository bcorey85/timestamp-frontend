import React from 'react';
import { shallow } from 'enzyme';

import { TypeIcon, IconType } from '../TypeIcon';

describe('TypeIcon', () => {
	it('renders', () => {
		const wrapper = shallow(<TypeIcon type={IconType.project} />);
		expect(wrapper).not.toBeNull();
	});
});
