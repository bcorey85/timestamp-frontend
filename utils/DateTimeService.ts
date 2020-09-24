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
}

export { DateTimeService };
