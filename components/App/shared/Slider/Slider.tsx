import React, { useRef, useEffect, useState } from 'react';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';

import { usePaginationSlider } from '../../../../hooks/usePaginationSlider';

import styles from './Slider.module.scss';

interface LeftButtonProps {
	currentOffset: number;
	slideLeft: () => void;
}
const LeftButton = ({
	currentOffset,
	slideLeft
}: LeftButtonProps): JSX.Element => {
	return (
		<div
			className={
				currentOffset !== 0 ? (
					styles.overflow_left
				) : (
					styles.overflow_hidden
				)
			}>
			<button onClick={() => slideLeft()}>
				<BiChevronLeft />
			</button>
		</div>
	);
};

interface RightButtonProps {
	currentOffset: number;
	maxRightBound: number;
	slideRight: () => void;
}
const RightButton = ({
	currentOffset,
	maxRightBound,
	slideRight
}: RightButtonProps) => {
	return (
		<div
			className={
				currentOffset !== maxRightBound ? (
					styles.overflow_right
				) : (
					styles.overflow_hidden
				)
			}>
			<button onClick={() => slideRight()}>
				<BiChevronRight />
			</button>
		</div>
	);
};

interface SliderProps {
	children?: any;
	itemPixelWidth: number;
}

const Slider = ({ children, itemPixelWidth }: SliderProps): JSX.Element => {
	const sliderRef = useRef<HTMLDivElement>(null);
	const [ currentWidth, setCurrentWidth ] = useState(null);

	const {
		slideLeft,
		slideRight,
		currentOffset,
		maxRightBound,
		transformDistance
	} = usePaginationSlider(currentWidth, itemPixelWidth);

	useEffect(
		() => {
			console.log(sliderRef.current.scrollWidth);
			setCurrentWidth(sliderRef.current.scrollWidth);
		},
		[ sliderRef.current ]
	);

	return (
		<React.Fragment>
			<LeftButton currentOffset={currentOffset} slideLeft={slideLeft} />
			<div
				className={styles.slider_wrapper}
				ref={sliderRef}
				style={{ transform: transformDistance }}>
				{children}
			</div>
			<RightButton
				currentOffset={currentOffset}
				maxRightBound={maxRightBound}
				slideRight={slideRight}
			/>
		</React.Fragment>
	);
};

export { Slider };
