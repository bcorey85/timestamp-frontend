import React from 'react';
import { shallow } from 'enzyme';

import { Modal } from '../Modal';

describe('Modal', () => {
	it('renders', () => {
		const wrapper = shallow(<Modal toggleModal={jest.fn} isOpen={true} />);
		expect(wrapper).not.toBeNull();
	});
});
