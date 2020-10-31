import { UiService } from '../UiService';

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
