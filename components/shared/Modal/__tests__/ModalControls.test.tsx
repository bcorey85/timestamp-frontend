import React from 'react';
import { shallow } from 'enzyme';

import { ModalControls } from '../ModalControls';

describe('ModalControls', () => {
	it('renders', () => {
		const wrapper = shallow(<ModalControls />);
		expect(wrapper).not.toBeNull();
	});
});
