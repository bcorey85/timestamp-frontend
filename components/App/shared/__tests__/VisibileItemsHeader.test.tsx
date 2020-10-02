import React from 'react';
import { shallow } from 'enzyme';

import { VisibleItemsHeader } from '../VisibleItemsHeader';

describe('VisibleItemsHeader', () => {
	it('renders', () => {
		const wrapper = shallow(<VisibleItemsHeader visible={'completed'} />);
		expect(wrapper).not.toBeNull();
	});
});
