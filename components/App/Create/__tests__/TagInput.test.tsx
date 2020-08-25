import React from 'react';
import { shallow } from 'enzyme';

import { TagInput } from '../TagInput';

describe('TagInput', () => {
	it('renders', () => {
		const wrapper = shallow(
			<TagInput
				handleAddTag={jest.fn}
				handleRemoveTag={jest.fn}
				tags={[ 'one', 'two' ]}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
