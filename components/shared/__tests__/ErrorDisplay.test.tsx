import React from 'react';

import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { ErrorDisplay } from '../ErrorDisplay';

Enzyme.configure({ adapter: new Adapter() });

const errors = [
	{ message: 'error1', field: 'field1' },
	{ message: 'error2', field: 'field2' },
	{ message: 'error3', field: 'field3' }
];

describe('ErrorDisplay', () => {
	it('renders', () => {
		const wrapper = shallow(<ErrorDisplay errors={errors} />);
		expect(wrapper).not.toBeNull();
		console.log(wrapper.debug());
		expect(wrapper.find('p').length).toBe(3);
	});
});
