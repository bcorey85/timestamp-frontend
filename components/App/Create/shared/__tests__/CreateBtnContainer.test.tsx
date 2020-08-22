import React from 'react';
import { shallow } from 'enzyme';

import { CreateBtnContainer } from '../CreateBtnContainer';

describe('CreateBtnContainer', () => {
	it('renders', () => {
		const wrapper = shallow(<CreateBtnContainer />);
		expect(wrapper).not.toBeNull();
	});
});
