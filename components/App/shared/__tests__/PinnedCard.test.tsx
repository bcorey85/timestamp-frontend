import React from 'react';
import { shallow } from 'enzyme';

import { PinnedCard } from '../PinnedCard';

describe('PinnedCard', () => {
	it('renders', () => {
		const wrapper = shallow(<PinnedCard />);
		expect(wrapper).not.toBeNull();
	});
});
