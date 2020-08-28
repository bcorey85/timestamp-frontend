import React, { useState, useEffect } from 'react';

const usePaginationSlider = (ref, itemWidth: number) => {
	const [ currentOffset, setCurrentOffset ] = useState(0);
	const [ maxWidth, setMaxWidth ] = useState(0);
	const [ maxRightBound, setMaxRightBound ] = useState(0);
	const [ maxLeftBound, setMaxLeftBound ] = useState(0);

	useEffect(() => {
		const maxWidth = ref.current.getBoundingClientRect().width;
		setMaxWidth(maxWidth);
		setMaxRightBound(maxWidth * -1);
		setMaxLeftBound(0);
	}, []);

	const slideLeft = () => {
		const nextOffset = currentOffset + itemWidth;
		if (nextOffset > maxLeftBound) {
			setCurrentOffset(0);
		} else {
			setCurrentOffset(nextOffset);
		}
	};

	const slideRight = () => {
		const nextOffset = currentOffset - itemWidth;

		if (nextOffset < maxRightBound) {
			setCurrentOffset(maxRightBound);
		} else {
			setCurrentOffset(nextOffset);
		}
	};

	const transformDistance = `translateX(${currentOffset}px)`;

	return {
		slideLeft,
		slideRight,
		currentOffset,
		maxWidth,
		maxRightBound,
		transformDistance
	};
};

export { usePaginationSlider };
