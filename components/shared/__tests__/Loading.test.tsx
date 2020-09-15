import React from 'react';
import { shallow } from 'enzyme';

import { Loading } from '../Loading';

describe('Loading', () => {
	it('renders', () => {
		const wrapper = shallow(<Loading />);
		expect(wrapper).not.toBeNull();
	});
});
