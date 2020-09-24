import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { TypeIcon } from '../../TypeIcon';
import { Item, ItemType } from '../../../../../utils/ItemService';
import { PinnedIcon } from '..//PinnedIcon';
import { PinnedCardStats } from './PinnedCardStats';
import { PinnedCardDate } from './PinnedCardDate';

import styles from './PinnedCard.module.scss';

import { selectUser } from '../../../../../redux/user';

interface Props {
	item: Item;
}

const PinnedCard = ({ item }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);

	return (
		<Link
			href={`/app/[userId]/${item.pathname.href}`}
			as={`/app/${userId}/${item.pathname.as}`}>
			<article className={styles.card}>
				<div className={styles.pinned}>
					<PinnedIcon pinned={true} />
				</div>
				<div className={styles.title}>
					<div className={styles.title_container}>
						<TypeIcon type={item.type} />
						{item.title}
					</div>
				</div>

				<div className={styles.time}>
					<PinnedCardDate meta={item.meta} />
				</div>
				<div className={styles.body}>{item.description}</div>
				<PinnedCardStats
					type={item.type}
					tags={item.tags}
					notes={item.notes}
					tasks={item.tasks}
					hours={item.meta.hours}
				/>
			</article>
		</Link>
	);
};

export { PinnedCard };
