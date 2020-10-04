import React from 'react';
import { shallow } from 'enzyme';

import { CompleteModal } from '../CompleteModal';
import { createTestItem } from '../../../../../test/setup';

describe('CompleteModal', () => {
	it('renders', () => {
		const item = createTestItem();

		const wrapper = shallow(
			<CompleteModal
				toggleModal={jest.fn}
				isOpen={true}
				item={item}
				handleComplete={jest.fn}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
