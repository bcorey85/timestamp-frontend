import React from 'react';
import { shallow } from 'enzyme';

import { CreateModal } from '../CreateModal';

import {
	mockStore,
	MockReduxProvider
} from '../../../../test/__mocks__/mockRedux';

describe('CreateModal', () => {
	it('renders', () => {
		const wrapper = shallow(
			<MockReduxProvider reduxStore={mockStore}>
				<CreateModal
					isOpen={true}
					toggleModal={jest.fn}
					type={'project'}
					initialProjectId={null}
					initialTaskId={null}
				/>
			</MockReduxProvider>
		);
		expect(wrapper).not.toBeNull();
	});
});
