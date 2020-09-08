import React from 'react';
import { shallow } from 'enzyme';

import { Layout } from '../Layout';

describe('Layout', () => {
	it('renders', () => {
		const wrapper = shallow(<Layout>Test</Layout>);
		expect(wrapper).not.toBeNull();
	});
});
