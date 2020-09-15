import React from 'react';
import { shallow } from 'enzyme';

import { AppPageHeaderControls } from '../AppPageHeaderControls';

describe('AppPageHeaderControls', () => {
	it('renders', () => {
		const wrapper = shallow(<AppPageHeaderControls />);
		expect(wrapper).not.toBeNull();
	});
});
