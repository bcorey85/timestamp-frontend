import { current } from '@reduxjs/toolkit';
import React, { useState, useEffect } from 'react';
import { Slider } from '../components/App/shared/Slider/Slider';
import { SliderService } from '../utils/SliderService';
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
			if (typeof window === 'undefined') {
				return;
			}

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
				const appMainElement = document.getElementById('app-main');
				const width = appMainElement.getBoundingClientRect().width;

				return setScreenWidth(width);
			};

			window.addEventListener('resize', handleResize);

			const maxActualVisibleCards = SliderService.maxVisibleCards(
				screenWidth,
				cardWidth,
				4
			);

			setMaxVisibleCards(maxActualVisibleCards);
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
		const nextOffset = SliderService.nextLeftOffset(
			currentOffset,
			maxVisibleCards,
			cardWidth
		);

		if (nextOffset > maxLeftBound) {
			setCurrentOffset(0);
		} else {
			setCurrentOffset(nextOffset);
		}
	};

	const slideRight = () => {
		const nextOffset = SliderService.nextRightOffset(
			currentOffset,
			maxVisibleCards,
			cardWidth
		);

		if (nextOffset < maxRightBound) {
			setCurrentOffset(maxRightBound);
		} else {
			setCurrentOffset(nextOffset);
		}
	};

	const transformDistance = SliderService.transformDistance(currentOffset);

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
