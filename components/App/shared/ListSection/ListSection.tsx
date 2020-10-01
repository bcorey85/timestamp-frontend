import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem/ListItem';
import { ListFilter } from './ListFilter';
import { NoItemsMessage } from '../NoItemsMessage';
import { ListPagination } from './ListPagination';

import { selectUser } from '../../../../redux/user';
import { ItemType } from '../../../../utils/ItemService';
import { useListSort } from '../../../../hooks/useListSort';
import { usePagination } from '../../../../hooks/usePagination';
import styles from './ListSection.module.scss';

interface Props {
	items: any[];
	type: keyof ItemType;
	pagination?: boolean;
	limit?: number;
}

const ListSection = ({
	items,
	type,
	pagination,
	limit
}: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const { handleSort, filteredItems, currentFilter, sortDesc } = useListSort(
		items
	);

	const {
		next,
		back,
		page,
		showNextButton,
		showBackButton,
		pageNumber,
		totalPages,
		updatePaginationItems
	} = usePagination(filteredItems, limit || 10);

	useEffect(
		() => {
			handleSort({ filter: 'date', sortDesc: true });
		},
		[ items ]
	);

	useEffect(
		() => {
			updatePaginationItems(filteredItems);
		},
		[ filteredItems ]
	);

	if (!items || items.length === 0) {
		return (
			<div className={styles.container}>
				<span className={styles.empty_list}>
					<NoItemsMessage />
				</span>
			</div>
		);
	}

	let listItems = pagination ? page : filteredItems;
	return (
		<div className={styles.list_section}>
			<ListFilter
				type={type}
				sortFunction={handleSort}
				currentFilter={currentFilter}
				sortDesc={sortDesc}
			/>
			<div className={styles.container}>
				{listItems.map(item => {
					const { as } = item.pathname;
					return <ListItem item={item} userId={userId} key={as} />;
				})}
			</div>
			<div className={styles.pagination_container}>
				{pagination && limit < items.length ? (
					<ListPagination
						next={next}
						back={back}
						showNextButton={showNextButton}
						showBackButton={showBackButton}
						pageNumber={pageNumber}
						totalPages={totalPages}
					/>
				) : null}
			</div>
		</div>
	);
};

export { ListSection };
