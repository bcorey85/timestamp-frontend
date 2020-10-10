import React from 'react';
import { mount } from 'enzyme';

import { AppLayout } from '../../components/App/AppLayout/AppLayout';
import { UiService } from '../UiService';

import { mockStore, MockReduxProvider } from '../../test/__mocks__/mockRedux';

const useRouter = jest.spyOn(require('next/router'), 'useRouter');

global.scrollTo = jest.fn();

describe('UiService', () => {
	it('locks document body if modal is open', () => {
		UiService.preventBodyScrollOnModalOpen(true);
		expect(document.body.style.position).toEqual('fixed');
		expect(document.body.style.top).toEqual('-0px');
	});

	it('unlocks document body if modal is closed', () => {
		UiService.preventBodyScrollOnModalOpen(false);
		expect(document.body.style.position).toEqual('');
		expect(document.body.style.top).toEqual('');
	});
});
