import moment from 'moment';
import { Item } from './ItemService';

import { SortingService } from './SortingService';
import { DateTimeService } from './DateTimeService';

interface YearTotals {
	hours: number;
	projects: number;
	tasks: number;
	notes: number;
	averageNoteMinutes: number;
}

interface LongestStreak {
	startDate: Date | string;
	endDate: Date | string;
	span: number;
	amountOfItems: number;
}

interface DayCount {
	date: string;
	count?: number;
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
		averageNoteMinutes: null
	};
	public monthTotals: any[] = [];
	public longestStreak: LongestStreak = {
		startDate: null,
		endDate: null,
		span: null,
		amountOfItems: null
	};
	public countsPerDay: DayCount[] = [];

	constructor(private items: Item[], private year: number | string) {
		this.sortedByDate = this.sortByDate(this.items);
		this.mappedToYear = this.mapToYear(this.sortedByDate);
		this.yearsArray = Object.keys(this.mappedToYear).sort(
			(a, b) => parseInt(b) - parseInt(a)
		);
		const selectedData = this.mappedToYear[this.year];
		this.yearTotals = this.calcYearTotals(selectedData);
		this.monthTotals = this.calcTotalCreatedByMonth(selectedData);
		this.longestStreak = this.calcLongestStreak(selectedData, this
			.year as number);
		this.countsPerDay = this.calcCountPerDay(this.year);
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
			const date = moment(item.meta.date, 'M/D/YYYY').format('M/D/YYYY');
			const alreadyParsed = datesArray.includes(date);

			if (!alreadyParsed) {
				datesArray.push(date);
			}
		});

		return datesArray.sort((a, b) => a - b);
	};

	private filterUniqueDatesByYear = (dates: string[], year: number) => {
		return dates.filter(date => {
			const dateYear = moment(date, 'M/D/YYYY').year();
			return dateYear === year;
		});
	};

	private calcTotalCreatedByMonth = (items: any[] = []): any[] => {
		const monthArr = new Array(12).fill(0);

		const totals = monthArr.map((monthTotal, i) => {
			const totalCreatedInMonth = items.reduce((acc, cur) => {
				const month = new Date(Date.parse(cur.meta.date)).getMonth();

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
			averageNoteMinutes: hours / notes * 60
		};
	};

	private calcStreaks = (dates: string[] = []) => {
		const streaks = dates.map((date, i) => {
			const startDate = moment(date, 'M/D/YYYY');

			let sequence = [ startDate.format('M/D/YYYY') ];
			let currentDate = startDate;
			let nextDate;
			for (let j = 0; j < dates.length - i; j++) {
				nextDate = moment(currentDate).add(1, 'day');

				const nextDayIsInSequence =
					dates[i + j + 1] === nextDate.format('M/D/YYYY');

				if (nextDayIsInSequence) {
					sequence.push(nextDate.format('M/D/YYYY'));
					currentDate = nextDate;
				}
			}
			return sequence;
		});

		return streaks;
	};

	private calcLongestStreak = (items: Item[] = [], year: number) => {
		const yearItems = this.mappedToYear[year];
		const datesArray = this.filterUniqueDates(yearItems);

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

		const amountOfItems = items.filter(item => {
			return longestStreak.includes(
				moment(item.meta.date, 'M/D/YYYY').format('M/D/YYYY')
			);
		}).length;
		console.log('service-streak-start', longestStreak[0]);
		console.log(
			'service-streak-end',
			longestStreak[longestStreak.length - 1]
		);

		return {
			startDate: longestStreak[0],
			endDate: longestStreak[longestStreak.length - 1],
			span: longestStreak.length,
			amountOfItems
		};
	};

	private calcCountPerDay = (year: string | number) => {
		const daysOfYearArray = DateTimeService.createDaysOfYearArray(
			year as number
		);

		const yearItems = this.mappedToYear[year];
		const datesArray = this.filterUniqueDates(yearItems);

		const itemsPerDayObj: {
			[key: string]: DayCount;
		} = {};

		datesArray.map(date => {
			const dateObj = {
				date,
				count: null as number
			};

			for (const item of this.items) {
				const itemDate = moment(item.meta.date, 'M/D/YYYY').format(
					'M/D/YYYY'
				);

				if (itemDate === date) {
					dateObj.count += 1;
				}
			}

			return (itemsPerDayObj[date] = dateObj);
		});

		const daysOfYearArrayWithCounts = daysOfYearArray.map(day => {
			const dayHasCount = itemsPerDayObj.hasOwnProperty(day);

			if (!dayHasCount) {
				return {
					date: day,
					count: 0
				};
			}
			console.log('service-day', day);
			console.log('service-count', itemsPerDayObj[day].count);

			return {
				date: day,
				count: itemsPerDayObj[day].count
			};
		});
		console.log(
			'service-days-of-year-with-counts',
			daysOfYearArrayWithCounts
		);

		return daysOfYearArrayWithCounts;
	};
}

export { ActivityStatsService };
