import React from 'react';
import { shallow } from 'enzyme';

import { TaskForm } from '../TaskForm';

describe('TaskForm', () => {
	it('renders', () => {
		const wrapper = shallow(<TaskForm />);
		expect(wrapper).not.toBeNull();
	});
});
