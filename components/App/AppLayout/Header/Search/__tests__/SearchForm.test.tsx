import React from 'react';
import { mount } from 'enzyme';

import { SearchForm } from '../SearchForm';

describe('SearchForm', () => {
	it('renders', () => {
		const wrapper = mount(<SearchForm />);
		expect(wrapper).not.toBeNull();
	});
});
