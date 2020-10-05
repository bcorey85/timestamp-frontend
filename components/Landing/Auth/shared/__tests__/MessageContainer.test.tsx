import React from 'react';
import { shallow } from 'enzyme';

import { MessageContainer } from '../MessageContainer';

describe('MessageContainer', () => {
	it('renders', () => {
		const wrapper = shallow(<MessageContainer />);
		expect(wrapper).not.toBeNull();
	});
});
