import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/user';

import { PinnedCard } from './PinnedCard';
import { Slider } from '../../shared/Slider';

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
		<section className={styles.container}>
			<Slider itemPixelWidth={264}>
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
			</Slider>
		</section>
	);
};

export { PinnedSection };
