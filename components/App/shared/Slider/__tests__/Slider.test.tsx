import React from 'react';
import { shallow } from 'enzyme';

import { Slider } from '../Slider';

describe('Slider', () => {
	it('renders', () => {
		const wrapper = shallow(<Slider itemPixelWidth={50} cardAmount={5} />);
		expect(wrapper).not.toBeNull();
	});
});
