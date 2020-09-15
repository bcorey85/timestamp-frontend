import React from 'react';
import { shallow } from 'enzyme';

import { DeleteModal } from '../DeleteModal';

describe('DeleteModal', () => {
	it('renders', () => {
		const wrapper = shallow(
			<DeleteModal
				toggleModal={jest.fn}
				isOpen={true}
				deleteItem='test'
				title='test'
				handleDelete={jest.fn}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
