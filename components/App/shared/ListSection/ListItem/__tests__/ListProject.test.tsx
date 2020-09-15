import React from 'react';
import { shallow } from 'enzyme';

import { ListProject } from '../ListProject';

describe('ListProject', () => {
	it('renders', () => {
		const wrapper = shallow(
			<ListProject tasks={1} notes={1} hours={'1'} />
		);
		expect(wrapper).not.toBeNull();
	});
});
