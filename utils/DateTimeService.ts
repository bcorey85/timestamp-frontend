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

	static createDaysOfYearArray = (year: number) => {
		const momentYear = moment({ year });

		let daysInYear = 365;
		if (momentYear.isLeapYear()) {
			daysInYear += 1;
		}

		let daysOfYearArray = [];
		for (let i = 0; i < daysInYear; i++) {
			const date = momentYear.dayOfYear(i + 1).format('M/D/YYYY');
			daysOfYearArray.push(date);
		}

		return daysOfYearArray;
	};

	static createMonthsArray = () => {
		return moment.monthsShort();
	};
}

export { DateTimeService };
