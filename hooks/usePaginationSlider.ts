import React, { useState, useEffect } from 'react';
import { UiService } from '../utils/UiService';

const usePaginationSlider = (cardWidth: number, initialCardAmount: number) => {
	const [ currentOffset, setCurrentOffset ] = useState(0);
	const [ maxWidth, setMaxWidth ] = useState(0);
	const [ maxRightBound, setMaxRightBound ] = useState(0);
	const [ maxLeftBound, setMaxLeftBound ] = useState(0);
	const [ cardAmount, setCardAmount ] = useState(initialCardAmount);
	const [ screenWidth, setScreenWidth ] = useState(
		UiService.getScreenWidth()
	);
	const [ maxVisibleCards, setMaxVisibleCards ] = useState(0);

	useEffect(
		() => {
			let maxWidth: number;
			if (cardAmount === 0) {
				setMaxWidth(0);
				setCurrentOffset(0);
				setMaxRightBound(0);
				setMaxLeftBound(0);
				return;
			} else {
				maxWidth = cardAmount * cardWidth - cardWidth;
			}
			const handleResize = () => {
				return setScreenWidth(window.innerWidth);
			};

			if (typeof window !== 'undefined') {
				window.addEventListener('resize', handleResize);
				const appPadding = getComputedStyle(document.body)
					.getPropertyValue('--app-horizontal-padding')
					.replace('rem', '');

				const maxPossibleVisibleCards = Math.floor(
					(screenWidth - Number(appPadding)) / cardWidth
				);
				const maxMovement = 4;
				const maxActualVisibleCards =
					maxPossibleVisibleCards > maxMovement
						? maxMovement
						: maxPossibleVisibleCards;

				setMaxVisibleCards(maxActualVisibleCards);
			}

			setMaxWidth(maxWidth);
			setMaxRightBound(maxWidth * -1);
			setMaxLeftBound(0);

			return () => {
				window.removeEventListener('resize', handleResize);
			};
		},
		[ cardAmount, screenWidth ]
	);

	const slideLeft = () => {
		const nextOffset = currentOffset + maxVisibleCards * cardWidth;
		if (nextOffset > maxLeftBound) {
			setCurrentOffset(0);
		} else {
			setCurrentOffset(nextOffset);
		}
	};

	const slideRight = () => {
		const nextOffset = currentOffset - maxVisibleCards * cardWidth;

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
		transformDistance,
		updateCardAmount: setCardAmount
	};
};

export { usePaginationSlider };
