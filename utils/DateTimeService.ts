import moment from 'moment';

class DateTimeService {
	static formatDate = (date: Date | string) => {
		if (typeof date === 'string') {
			const dateParsed = new Date(Date.parse(date));
			return moment(dateParsed).format('l');
		}
		return moment(date).format('l');
	};

	static formatTime = (date: Date | string) => {
		return moment(date).format('LT');
	};

	static createDaysOfYearObject = (year: number) => {
		const momentYear = moment({ year });

		let daysInYear = 365;
		if (momentYear.isLeapYear()) {
			daysInYear += 1;
		}

		let daysOfYearArr = {};
		for (let i = 0; i < daysInYear; i++) {
			const date = momentYear.dayOfYear(i + 1).format('M/D/YYYY');

			daysOfYearArr[date] = {
				date
			};
		}

		return daysOfYearArr;
	};

	static createMonthsArray = () => {
		return moment.monthsShort();
	};
}

export { DateTimeService };
