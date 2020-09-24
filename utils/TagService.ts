class TagService {
	static trim = (tag: string) => {
		if (!tag) {
			return;
		}

		const trimmed = tag.trim();
		const replaceSpaces = trimmed.split(' ').join('');

		return replaceSpaces;
	};

	static split = (tags: string) => {
		if (!tags) {
			return;
		}

		const split = tags
			.replace(/,/g, ' ')
			.split(' ')
			.filter(tag => tag !== '');

		return split;
	};

	static addSpaces = (tags: string) => {
		if (!tags) {
			return;
		}

		const split = tags
			.replace(/,/g, ' ')
			.split(' ')
			.filter(tag => tag !== '')
			.join(', ');

		return split;
	};
}

export { TagService };
