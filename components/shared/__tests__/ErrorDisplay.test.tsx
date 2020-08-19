import React from 'react';
import { shallow } from 'enzyme';

import { ErrorDisplay } from '../ErrorDisplay';

const errors = [
	{ message: 'error1', field: 'field1' },
	{ message: 'error2', field: 'field2' },
	{ message: 'error3', field: 'field3' }
];

describe('ErrorDisplay', () => {
	it('renders', () => {
		const wrapper = shallow(<ErrorDisplay errors={errors} />);
		expect(wrapper).not.toBeNull();
		expect(wrapper.find('p').length).toBe(3);
	});
});
