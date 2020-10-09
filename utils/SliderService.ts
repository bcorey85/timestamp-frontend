class SliderService {
	static maxVisibleCards = (
		mainElementWidth: number,
		cardWidth: number,
		maxMovement: number
	) => {
		if (typeof window === 'undefined') {
			return 0;
		}

		const appPadding = getComputedStyle(document.body)
			.getPropertyValue('--app-horizontal-padding')
			.replace('rem', '');

		// Max amount of cards that can fit in the app main element
		const maxPossibleVisibleCards = Math.floor(
			(mainElementWidth - Number(appPadding)) / cardWidth
		);

		// Max amount of cards to move at one time
		const maxActualVisibleCards =
			maxPossibleVisibleCards > maxMovement
				? maxMovement
				: maxPossibleVisibleCards;

		return maxActualVisibleCards;
	};

	static nextLeftOffset = (
		currentOffset: number,
		maxVisibleCards: number,
		cardWidth: number
	) => {
		return currentOffset + maxVisibleCards * cardWidth;
	};

	static nextRightOffset = (
		currentOffset: number,
		maxVisibleCards: number,
		cardWidth: number
	) => {
		return currentOffset - maxVisibleCards * cardWidth;
	};

	static transformDistance = (currentOffset: number) => {
		return `translateX(${currentOffset}px)`;
	};
}

export { SliderService };
