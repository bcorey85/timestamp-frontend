import React from 'react';
import { shallow } from 'enzyme';

import { NoteForm } from '../NoteForm';

describe('NoteForm', () => {
	it('renders', () => {
		const wrapper = shallow(<NoteForm handleCancel={jest.fn} />);
		expect(wrapper).not.toBeNull();
	});
});
