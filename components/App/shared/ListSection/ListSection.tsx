import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem';
import { ListFilter } from './ListFilter';

import { selectUser } from '../../../../redux/user';
import { ItemService, ItemType } from '../../../../utils/ItemService';
import { useListSort } from '../../../../hooks/useListSort';

import styles from './ListSection.module.scss';

interface Props {
	items: any[];
	type: keyof ItemType;
}

const ListSection = ({ items, type }: Props): JSX.Element => {
	const formattedItems = items.map(item => new ItemService(item).getItem());
	const { userId } = useSelector(selectUser);
	const { handleSort, filteredItems, currentFilter, sortDesc } = useListSort(
		formattedItems
	);

	useEffect(
		() => {
			handleSort(currentFilter);
		},
		[ items ]
	);

	if (!items || items.length === 0) {
		return (
			<div className={styles.container}>
				<span className={styles.empty_list}>( Empty )</span>
			</div>
		);
	}

	return (
		<React.Fragment>
			<ListFilter
				type={type}
				sortFunction={handleSort}
				currentFilter={currentFilter}
				sortDesc={sortDesc}
			/>
			<div className={styles.container}>
				{filteredItems.map(item => {
					const {
						href,
						as,
						title,
						createdAt,
						pinned,
						date,
						hours,
						startTime,
						endTime,
						type,
						tasks,
						notes
					} = item;

					return (
						<ListItem
							href={`/app/[userId]/${href}`}
							as={`/app/${userId}/${as}`}
							type={type}
							title={title}
							date={date}
							hours={hours}
							startTime={startTime}
							endTime={endTime}
							key={createdAt.toString()}
							pinned={pinned}
							tasks={tasks}
							notes={notes}
						/>
					);
				})}
			</div>
		</React.Fragment>
	);
};

export { ListSection };
