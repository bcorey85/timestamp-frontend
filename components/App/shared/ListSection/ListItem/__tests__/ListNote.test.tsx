import React from 'react';
import { shallow } from 'enzyme';

import { ListNote } from '../ListNote';

describe('ListNote', () => {
	it('renders', () => {
		const wrapper = shallow(
			<ListNote
				startTime={new Date(Date.now() - 1000 * 60 * 60).toISOString()}
				endTime={new Date(Date.now()).toISOString()}
				hours={'1'}
			/>
		);
		expect(wrapper).not.toBeNull();
	});
});
