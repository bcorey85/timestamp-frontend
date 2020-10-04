import React from 'react';
import { shallow } from 'enzyme';

import { Tag } from '../Tag';

describe('Tag', () => {
	it('renders', () => {
		const wrapper = shallow(<Tag tagName='test' handleRemove={jest.fn} />);
		expect(wrapper).not.toBeNull();
	});
});
