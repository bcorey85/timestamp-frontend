import React from 'react';
import { shallow } from 'enzyme';

import { NoteForm } from '../NoteForm';

describe('NoteForm', () => {
	it('renders', () => {
		const wrapper = shallow(<NoteForm />);
		expect(wrapper).not.toBeNull();
	});
});
