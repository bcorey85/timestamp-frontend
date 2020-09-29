import { TagService } from '../TagService';

describe('TagService', () => {
	it('trims and removes spaces from tag', () => {
		const tag = ' test tag ';
		expect(TagService.trim(tag)).toEqual('testtag');
	});

	it('splits tag string into array', () => {
		const tagString = '#1,#2,#3';
		expect(TagService.split(tagString)).toEqual([ '#1', '#2', '#3' ]);
	});

	it('adds spaces to an unformatted tag string', () => {
		const tagString = '#1,#2,#3';
		expect(TagService.addSpaces(tagString)).toEqual('#1, #2, #3');
	});
});
