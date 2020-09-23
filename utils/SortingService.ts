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
		return (
			Date.parse('01/01/1970 ' + value1).valueOf() -
			Date.parse('01/01/1970 ' + value2).valueOf()
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
