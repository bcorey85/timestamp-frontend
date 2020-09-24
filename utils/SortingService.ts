import { DateTimeService } from './DateTimeService';

interface SortProps {
	value1?: any;
	value2?: any;
}

class SortingService {
	static handleNull = () => {
		return -1;
	};

	static sort = ({ value1, value2 }: SortProps) => {
		return value1 - value2;
	};

	static sortByTime = ({ value1, value2 }: SortProps) => {
		const time1 = DateTimeService.formatTime(value1);
		const time2 = DateTimeService.formatTime(value2);

		return (
			Date.parse('01/01/1970 ' + time1).valueOf() -
			Date.parse('01/01/1970 ' + time2).valueOf()
		);
	};

	static sortByDate = ({ value1, value2 }: SortProps) => {
		const aDate = Date.parse(value1);
		const bDate = Date.parse(value2);

		return aDate.valueOf() - bDate.valueOf();
	};

	static sortString = ({ value1, value2 }: SortProps) => {
		return value1.localeCompare(value2);
	};
}

export { SortingService };
