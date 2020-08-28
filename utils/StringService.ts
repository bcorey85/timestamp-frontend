class StringService {
	static truncate = (string: string, max: number) => {
		return string.length > max ? string.substring(0, max) + '...' : string;
	};
}

export { StringService };
