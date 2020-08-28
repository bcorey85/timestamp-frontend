import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/user';

import { PinnedCard } from './PinnedCard';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { ItemService } from '../../../../utils/ItemService';
import styles from './PinnedSection.module.scss';
import { usePaginationSlider } from '../../../../hooks/usePaginationSlider';

interface Props {
	items: any[];
}

const PinnedSection = ({ items }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);

	const sliderRef = useRef<HTMLDivElement>(null);
	const {
		slideLeft,
		slideRight,
		currentOffset,
		maxWidth,
		maxRightBound,
		transformDistance
	} = usePaginationSlider(sliderRef, 264);

	if (items.length === 0) {
		return <div>( Empty )</div>;
	}

	return (
		<section className={styles.container}>
			<button
				className={
					currentOffset !== 0 ? (
						styles.overflow_left
					) : (
						styles.overflow_hidden
					)
				}
				onClick={() => slideLeft()}>
				<BiChevronLeft />
			</button>
			<div
				className={styles.slider_wrapper}
				ref={sliderRef}
				style={{ transform: transformDistance }}>
				{items.map(item => {
					const currentItem = new ItemService(item);
					const { href, as } = currentItem.pathname;
					const {
						title,
						created_at,
						hours,
						description
					} = currentItem.item;
					const { date, time } = currentItem.meta;
					const { type } = currentItem;

					return (
						<PinnedCard
							href={`/app/[userId]/${href}`}
							as={`/app/${userId}/${as}`}
							title={title}
							type={type}
							hours={Number(hours).toFixed(1)}
							date={date}
							time={time}
							description={description}
							label1={'Fake Stat 1'}
							label2={'Fake Stat 2'}
							stat1={'100'}
							stat2={'100'}
							key={created_at.toString()}
						/>
					);
				})}
			</div>
			<button
				className={
					currentOffset !== maxRightBound ? (
						styles.overflow_right
					) : (
						styles.overflow_hidden
					)
				}
				onClick={() => slideRight()}>
				<BiChevronRight />
			</button>
		</section>
	);
};

export { PinnedSection };
