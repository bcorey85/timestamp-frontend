import React from 'react';
import { shallow } from 'enzyme';

import { AppPageTitle } from '../AppPageTitle';

describe('AppPageTitle', () => {
	it('renders', () => {
		const wrapper = shallow(
			<AppPageTitle
				heading='test'
				subheading='test2'
				subheadingType='project'
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
