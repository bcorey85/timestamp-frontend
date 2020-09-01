import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem';

import { selectUser } from '../../../../redux/user';
import { ItemService } from '../../../../utils/ItemService';
import styles from './ListSection.module.scss';

interface Props {
	items: any[];
}

const ListSection = ({ items }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);

	if (items.length === 0) {
		return (
			<div className={styles.container}>
				<span className={styles.empty_list}>( Empty )</span>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			{items.map(item => {
				const currentItem = new ItemService(item);
				const { href, as } = currentItem.pathname;
				const { title, created_at, pinned } = currentItem.item;
				const { date, time, hours } = currentItem.meta;
				const { type } = currentItem;

				return (
					<ListItem
						href={`/app/[userId]/${href}`}
						as={`/app/${userId}/${as}`}
						type={type}
						title={title}
						date={date}
						time={time}
						hours={hours}
						key={created_at.toString()}
						pinned={pinned}
					/>
				);
			})}
		</div>
	);
};

export { ListSection };
