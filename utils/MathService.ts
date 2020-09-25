class MathService {
	static round = (num: number | string, decimals: number) => {
		return parseFloat(Number(num).toFixed(decimals));
	};

	static gte = (value: number | string, limit: number) => {
		return value >= limit;
	};

	static lte = (value: number | string, limit: number) => {
		return value <= limit;
	};

	static between = (
		value: number | string,
		lowerLimit: number,
		upperLimit: number
	) => {
		return value >= lowerLimit && value <= upperLimit;
	};
}

export { MathService };
