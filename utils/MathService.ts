class MathService {
	static round = (num: number | string, decimals: number) => {
		return parseFloat(Number(num).toFixed(decimals));
	};
}

export { MathService };
