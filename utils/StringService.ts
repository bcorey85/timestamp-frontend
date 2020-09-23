interface PluralizeProps {
	singular: string;
	plural: string;
}

class StringService {
	static pluralize = (
		number: number,
		{ singular, plural }: PluralizeProps
	): string => {
		if (number > 1 || number === 0) {
			return `${number} ${plural}`;
		}

		return `${number} ${singular}`;
	};
}

export { StringService };
