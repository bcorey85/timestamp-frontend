import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem';

import { selectUser } from '../../../../redux/user';
import { ItemService } from '../../../../utils/ItemService';
import styles from './ListSection.module.scss';
import { ListFilter } from './ListFilter';

interface Props {
	items: any[];
}

const sortItems = (array: any[], filter: string, sortDesc: boolean = false) => {
	const sorted = [ ...array ].sort((a, b) => {
		const item1 = a[filter];
		const item2 = b[filter];

		if (item1 === undefined || item2 === undefined) {
			return -1;
		}

		if (typeof item1 !== 'string') {
			return item1 - item2;
		}

		return item1.localeCompare(item2);
	});

	if (sortDesc === true) {
		return sorted.reverse();
	}

	return sorted;
};

const ListSection = ({ items }: Props): JSX.Element => {
	const formattedItems = items.map(item => new ItemService(item).getItem());

	const { userId } = useSelector(selectUser);
	const [ currentFilter, setCurrentFilter ] = useState('date');
	const [ sortDesc, setSortDesc ] = useState(true);
	const [ filteredItems, setFilteredItems ] = useState(formattedItems);

	useEffect(
		() => {
			const sorted = sortItems(formattedItems, currentFilter, sortDesc);

			setFilteredItems(sorted);
		},
		[ currentFilter, sortDesc ]
	);

	const handleSort = (param: string) => {
		if (param !== currentFilter) {
			setCurrentFilter(param);
			setSortDesc(false);
		} else {
			setSortDesc(!sortDesc);
		}
	};

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
