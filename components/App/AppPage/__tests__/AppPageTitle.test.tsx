import React from 'react';
import { shallow } from 'enzyme';

import { AppPageTitle } from '../AppPageTitle';
import { IconType } from '../../shared/TypeIcon';

describe('AppPageTitle', () => {
	it('renders', () => {
		const wrapper = shallow(
			<AppPageTitle
				heading='test'
				subheading='test2'
				subheadingType={IconType.project}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
