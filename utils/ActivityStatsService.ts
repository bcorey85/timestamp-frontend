import moment from 'moment';

import { ItemService } from './ItemService';
import { SortingService } from './SortingService';

interface YearTotals {
	hours: number;
	projects: number;
	tasks: number;
	notes: number;
}

interface LongestStreak {
	startDate: Date | string;
	endDate: Date | string;
	span: number;
	amountOfItems: number;
}

class ActivityStatsService {
	public formattedItems: any[] = [];
	public yearsArray: any[] = [];
	public sortedByDate: any[] = [];
	public mappedToYear: { [key: string]: any } = {};
	public yearTotals: YearTotals = {
		hours: null,
		projects: null,
		tasks: null,
		notes: null
	};
	public monthTotals: any[] = [];
	public longestStreak: LongestStreak = {
		startDate: null,
		endDate: null,
		span: null,
		amountOfItems: null
	};

	constructor(private items: any[], private year: number | string) {
		this.formattedItems = this.formatItems(this.items);
		this.yearsArray = this.createYearsArray(this.formattedItems);
		this.sortedByDate = this.sortByDate(this.formattedItems);
		this.mappedToYear = this.mapToYear(this.sortedByDate);
		const selectedData = this.mappedToYear[this.year];
		this.yearTotals = this.calcYearTotals(selectedData);
		this.monthTotals = this.calcTotalCreatedByMonth(selectedData);
		this.longestStreak = this.calcLongestStreak(selectedData);
	}

	private formatItems = (items: any[] = []): any[] => {
		return items.map(item => new ItemService(item).getItem());
	};

	private createYearsArray = (items: any[] = []): any[] => {
		const yearsArray: any[] = [];

		items.map(item => {
			const year = new Date(Date.parse(item.date)).getFullYear();
			const alreadyParsed = yearsArray.includes(year);

			if (!alreadyParsed) {
				yearsArray.push(year);
			}
		});

		return yearsArray;
	};

	private sortByDate = (items: any[] = []): any[] => {
		return items.sort((a, b) => {
			return SortingService.sortByDate({
				value1: a.date,
				value2: b.date
			});
		});
	};

	private mapToYear = (sortedItems: any[] = []): { [key: string]: any[] } => {
		const sortedByYear: { [key: string]: any[] } = {};

		sortedItems.map(item => {
			const year = new Date(Date.parse(item.date)).getFullYear();
			const propExists = sortedByYear.hasOwnProperty(year);

			if (!propExists) {
				sortedByYear[year] = [];
			}

			sortedByYear[year].push(item);
		});

		return sortedByYear;
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

	private calcYearTotals = (items: any[] = []) => {
		const hours = items.reduce((acc, cur) => {
			if (cur.type !== 'project') {
				return acc + 0;
			}

			const hours = parseFloat(cur.hours);

			return hours + acc;
		}, 0);

		const projects = items.filter(item => item.type === 'project').length;
		const tasks = items.filter(item => item.type === 'task').length;
		const notes = items.filter(item => item.type === 'note').length;

		return {
			hours,
			projects,
			tasks,
			notes
		};
	};

	private calcLongestStreak = (items: any[] = []) => {
		let datesArray = [];

		items.map(item => {
			const alreadyParsed = datesArray.includes(item.date);

			if (!alreadyParsed) {
				datesArray.push(item.date);
			}
		});

		if (datesArray.length === 0) {
			return {
				startDate: null,
				endDate: null,
				span: 0,
				amountOfItems: 0
			};
		}

		const sortedDatesArray = this.sortByDate(datesArray);

		const streaks = sortedDatesArray.map((date, i) => {
			const parsedDate = new Date(Date.parse(date));
			const startDate = moment(parsedDate).format('M/D/YYYY');

			let sequence = [ startDate ];
			let currentDate = startDate;
			let nextDate;
			for (let j = 0; j < sortedDatesArray.length - i; j++) {
				nextDate = moment(currentDate, 'M/D/YYYY')
					.add(1, 'day')
					.format('M/D/YYYY');

				const nextDayIsInSequence =
					sortedDatesArray[i + j + 1] === nextDate;

				if (nextDayIsInSequence) {
					sequence.push(nextDate);
					currentDate = nextDate;
				}
			}

			return sequence;
		});

		const longestStreak = streaks
			.sort((a, b) => a.length - b.length)
			.reverse()[0];

		const amountOfItems = items.filter(item =>
			longestStreak.includes(item.date)
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
