import { SortingService } from '../SortingService';
import moment from 'moment';

describe('SortingService', () => {
	it('returns -1 for null', () => {
		expect(SortingService.handleNull()).toBe(-1);
	});

	it('handles sorting an array of numbers', () => {
		const array = [ 1, 5, 3 ];
		const sorted = array.sort((a, b) => {
			return SortingService.sort({ value1: a, value2: b });
		});

		expect(sorted).toStrictEqual([ 1, 3, 5 ]);
	});

	it('handles sorting an array of time value alone, without factoring date', () => {
		const time1 = moment('9:00 am', 'hh mm a').toISOString();
		const time2 = moment('10:00 am', 'hh mm a').toISOString();
		const time3 = moment('8:00 am', 'hh mm a').toISOString();

		const array = [ time1, time2, time3 ];
		const sorted = array.sort((a, b) => {
			return SortingService.sortByTime({ value1: a, value2: b });
		});

		expect(sorted).toStrictEqual([ time3, time1, time2 ]);
	});

	it('handles sorting an array of dates', () => {
		const day1 = moment().toISOString();
		const day2 = moment().add(1, 'day').toISOString();
		const day3 = moment().subtract(1, 'day').toISOString();

		const array = [ day1, day2, day3 ];
		const sorted = array.sort((a, b) => {
			return SortingService.sortByDate({ value1: a, value2: b });
		});

		expect(sorted).toStrictEqual([ day3, day1, day2 ]);
	});

	it('handles sorting an array of strings', () => {
		const array = [ 'zulu', 'alpha', 'beta' ];
		const sorted = array.sort((a, b) => {
			return SortingService.sortString({ value1: a, value2: b });
		});

		expect(sorted).toStrictEqual([ 'alpha', 'beta', 'zulu' ]);
	});
});
