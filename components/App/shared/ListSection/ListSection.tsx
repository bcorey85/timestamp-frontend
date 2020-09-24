import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem/ListItem';
import { ListFilter } from './ListFilter';

import { selectUser } from '../../../../redux/user';
import { ItemType } from '../../../../utils/ItemService';
import { useListSort } from '../../../../hooks/useListSort';

import styles from './ListSection.module.scss';

interface Props {
	items: any[];
	type: keyof ItemType;
}

const ListSection = ({ items, type }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const { handleSort, filteredItems, currentFilter, sortDesc } = useListSort(
		items
	);

	useEffect(
		() => {
			handleSort({ filter: 'date', sortDesc: true });
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
					const { as } = item.pathname;

					return <ListItem item={item} userId={userId} key={as} />;
				})}
			</div>
		</React.Fragment>
	);
};

export { ListSection };
