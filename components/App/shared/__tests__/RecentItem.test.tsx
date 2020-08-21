import React from 'react';
import { shallow } from 'enzyme';

import { RecentItem } from '../RecentItem';

describe('RecentItem', () => {
	it('renders', () => {
		const wrapper = shallow(<RecentItem />);
		expect(wrapper).not.toBeNull();
	});
});
