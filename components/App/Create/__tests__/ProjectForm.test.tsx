import React from 'react';
import { shallow } from 'enzyme';

import { ProjectForm } from '../ProjectForm';

describe('ProjectForm', () => {
	it('renders', () => {
		const wrapper = shallow(<ProjectForm />);
		expect(wrapper).not.toBeNull();
	});
});
