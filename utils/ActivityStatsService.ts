import moment from 'moment';
import { Item } from './ItemService';

import { SortingService } from './SortingService';

interface YearTotals {
	hours: number;
	projects: number;
	tasks: number;
	notes: number;
	averageNoteLength: number;
}

interface LongestStreak {
	startDate: Date | string;
	endDate: Date | string;
	span: number;
	amountOfItems: number;
}

class ActivityStatsService {
	public yearsArray: any[] = [];
	public sortedByDate: any[] = [];
	public mappedToYear: { [key: string]: any } = {};
	public yearTotals: YearTotals = {
		hours: null,
		projects: null,
		tasks: null,
		notes: null,
		averageNoteLength: null
	};
	public monthTotals: any[] = [];
	public longestStreak: LongestStreak = {
		startDate: null,
		endDate: null,
		span: null,
		amountOfItems: null
	};

	constructor(private items: Item[], private year: number | string) {
		this.sortedByDate = this.sortByDate(this.items);
		this.mappedToYear = this.mapToYear(this.sortedByDate);
		this.yearsArray = Object.keys(this.mappedToYear).sort(
			(a, b) => parseInt(b) - parseInt(a)
		);
		const selectedData = this.mappedToYear[this.year];
		this.yearTotals = this.calcYearTotals(selectedData);
		this.monthTotals = this.calcTotalCreatedByMonth(selectedData);
		this.longestStreak = this.calcLongestStreak(selectedData);
	}

	private sortByDate = (items: Item[] = []): any[] => {
		return items.sort((a, b) => {
			return SortingService.sortByDate({
				value1: a.meta.date,
				value2: b.meta.date
			});
		});
	};

	private mapToYear = (
		sortedItems: Item[] = []
	): { [key: string]: any[] } => {
		const sortedByYear: { [key: string]: any[] } = {};

		sortedItems.map(item => {
			const year = new Date(Date.parse(item.meta.date)).getFullYear();
			const propExists = sortedByYear.hasOwnProperty(year);

			if (!propExists) {
				sortedByYear[year] = [];
			}

			sortedByYear[year].push(item);
		});

		return sortedByYear;
	};

	private filterUniqueDates = (items: Item[] = []) => {
		let datesArray: any[] = [];

		items.map(item => {
			const alreadyParsed = datesArray.includes(item.meta.date);

			if (!alreadyParsed) {
				datesArray.push(item.meta.date);
			}
		});

		return datesArray.sort((a, b) => a - b);
	};

	private calcTotalCreatedByMonth = (items: any[] = []): any[] => {
		const monthArr = new Array(12).fill(0);

		const totals = monthArr.map((monthTotal, i) => {
			const totalCreatedInMonth = items.reduce((acc, cur) => {
				const month = new Date(Date.parse(cur.date)).getMonth();
				if (month !== i) {
					return acc + 0;
				}

				return acc + 1;
			}, 0);
			return totalCreatedInMonth;
		});

		return totals;
	};

	private calcYearTotals = (items: Item[] = []) => {
		const hours = items.reduce((acc, cur) => {
			if (cur.type !== 'note') {
				return acc + 0;
			}

			const hours = parseFloat(cur.meta.hours);

			return hours + acc;
		}, 0);

		const projects = items.filter(item => item.type === 'project').length;
		const tasks = items.filter(item => item.type === 'task').length;
		const notes = items.filter(item => item.type === 'note').length;

		return {
			hours,
			projects,
			tasks,
			notes,
			averageNoteLength: hours / notes
		};
	};

	private calcStreaks = (dates: string[] = []) => {
		const streaks = dates.map((date, i) => {
			const parsedDate = new Date(Date.parse(date));
			const startDate = moment(parsedDate).format('M/D/YYYY');

			let sequence = [ startDate ];
			let currentDate = startDate;
			let nextDate;
			for (let j = 0; j < dates.length - i; j++) {
				nextDate = moment(currentDate, 'M/D/YYYY')
					.add(1, 'day')
					.format('M/D/YYYY');

				const nextDayIsInSequence = dates[i + j + 1] === nextDate;

				if (nextDayIsInSequence) {
					sequence.push(nextDate);
					currentDate = nextDate;
				}
			}

			return sequence;
		});

		return streaks;
	};

	private calcLongestStreak = (items: Item[] = []) => {
		const datesArray = this.filterUniqueDates(items);

		if (datesArray.length === 0) {
			return {
				startDate: null,
				endDate: null,
				span: 0,
				amountOfItems: 0
			};
		}

		const streaks = this.calcStreaks(datesArray);

		const longestStreak = streaks
			.sort((a, b) => a.length - b.length)
			.reverse()[0];

		const amountOfItems = items.filter(item =>
			longestStreak.includes(item.meta.date)
		).length;

		return {
			startDate: longestStreak[0],
			endDate: longestStreak[longestStreak.length - 1],
			span: longestStreak.length,
			amountOfItems
		};
	};
}

export { ActivityStatsService };
