import React from 'react';
import { shallow } from 'enzyme';

import { BaseForm } from '../BaseForm';

describe('BaseForm', () => {
	it('renders', () => {
		const wrapper = shallow(<BaseForm />);
		expect(wrapper).not.toBeNull();
	});
});
