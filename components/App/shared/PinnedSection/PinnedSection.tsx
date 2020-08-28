import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/user';

import { PinnedCard } from './PinnedCard';

import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { ItemService } from '../../../../utils/ItemService';
import styles from './PinnedSection.module.scss';

interface Props {
	items: any[];
}

const PinnedSection = ({ items }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);

	if (items.length === 0) {
		return <div>( Empty )</div>;
	}

	return (
		<div className={styles.wrapper}>
			<section className={styles.container}>
				<button
					className={
						false ? styles.overflow_left : styles.overflow_hidden
					}>
					<BiChevronLeft />
				</button>
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
							label1={null}
							label2={null}
							stat1={null}
							stat2={null}
							key={created_at.toString()}
						/>
					);
				})}
				<button
					className={
						true ? styles.overflow_right : styles.overflow_hidden
					}>
					<BiChevronRight />
				</button>
			</section>
		</div>
	);
};

export { PinnedSection };
