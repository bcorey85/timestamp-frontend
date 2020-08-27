import React from 'react';
import { shallow } from 'enzyme';

import { PinnedIcon } from '../PinnedIcon';

describe('PinnedIcon', () => {
	it('renders', () => {
		const wrapper = shallow(<PinnedIcon pinned={true} />);
		expect(wrapper).not.toBeNull();
	});
});
