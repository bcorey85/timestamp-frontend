class TagService {
	static trim = (tag: string) => {
		const trimmed = tag.trim();
		const replaceSpaces = trimmed.split(' ').join('');

		return replaceSpaces;
	};

	static split = (tags: string) => {
		const split = tags
			.replace(/,/g, ' ')
			.split(' ')
			.filter(tag => tag !== '');

		return split;
	};

	static addSpaces = (tags: string) => {
		const split = tags
			.replace(/,/g, ' ')
			.split(' ')
			.filter(tag => tag !== '')
			.join(', ');

		return split;
	};
}

export { TagService };
