import React from 'react';
import { mount } from 'enzyme';

import { NoteBody } from '../NoteBody';

import { createTestItem } from '../../../../../test/setup';

describe('NoteBody', () => {
	it('renders', () => {
		const wrapper = mount(
			<NoteBody currentNote={createTestItem('note')} />
		);
		expect(wrapper).not.toBeNull();
	});
});
