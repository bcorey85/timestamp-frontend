import React from 'react';
import { shallow } from 'enzyme';

import { ModalContent } from '../ModalContent';

describe('ModalContent', () => {
	it('renders', () => {
		const wrapper = shallow(<ModalContent />);
		expect(wrapper).not.toBeNull();
	});
});
