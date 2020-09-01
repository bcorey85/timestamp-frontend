import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem';
import { ListFilter } from './ListFilter';

import { selectUser } from '../../../../redux/user';
import { ItemService } from '../../../../utils/ItemService';
import { useListSort } from '../../../../hooks/useListSort';

import styles from './ListSection.module.scss';

interface Props {
	items: any[];
}

const ListSection = ({ items }: Props): JSX.Element => {
	const formattedItems = items.map(item => new ItemService(item).getItem());
	const { userId } = useSelector(selectUser);
	const { handleSort, filteredItems, currentFilter, sortDesc } = useListSort(
		formattedItems
	);

	if (items.length === 0) {
		return (
			<div className={styles.container}>
				<span className={styles.empty_list}>( Empty )</span>
			</div>
		);
	}

	return (
		<div className={styles.container}>
			<ListFilter
				sortFunction={handleSort}
				currentFilter={currentFilter}
				sortDesc={sortDesc}
			/>
			{filteredItems.map(item => {
				const {
					href,
					as,
					title,
					createdAt,
					pinned,
					date,
					hours,
					type
				} = item;

				return (
					<ListItem
						href={`/app/[userId]/${href}`}
						as={`/app/${userId}/${as}`}
						type={type}
						title={title}
						date={date}
						hours={hours}
						key={createdAt.toString()}
						pinned={pinned}
					/>
				);
			})}
		</div>
	);
};

export { ListSection };
