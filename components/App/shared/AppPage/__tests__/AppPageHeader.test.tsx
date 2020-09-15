import React from 'react';
import { shallow } from 'enzyme';

import { AppPageHeader } from '../AppPageHeader';

describe('AppPageHeader', () => {
	it('renders', () => {
		const wrapper = shallow(<AppPageHeader />);
		expect(wrapper).not.toBeNull();
	});
});
