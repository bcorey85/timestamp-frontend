import React from 'react';
import { shallow } from 'enzyme';

import { DeleteModal } from '../DeleteModal';
import { createTestItem } from '../../../../../test/setup';

describe('DeleteModal', () => {
	it('renders', () => {
		const item = createTestItem();

		const wrapper = shallow(
			<DeleteModal
				toggleModal={jest.fn}
				isOpen={true}
				item={item}
				handleDelete={jest.fn}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
