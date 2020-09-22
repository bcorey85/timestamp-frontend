import React from 'react';
import { shallow } from 'enzyme';

import { LoadingSpinner } from '../LoadingSpinner';

describe('LoadingSpinner', () => {
	it('renders', () => {
		const wrapper = shallow(<LoadingSpinner />);
		expect(wrapper).not.toBeNull();
	});
});
