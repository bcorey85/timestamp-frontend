import React from 'react';
import { shallow } from 'enzyme';

import { ButtonContainer } from '../ButtonContainer';

describe('ButtonContainer', () => {
	it('renders', () => {
		const wrapper = shallow(<ButtonContainer />);
		expect(wrapper).not.toBeNull();
	});
});
