import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from './ListItem/ListItem';
import { ListFilter } from './ListFilter';
import { ListAddIcon } from './ListAddIcon';
import { NoItemsMessage } from '../NoItemsMessage';
import { ListPagination } from './ListPagination';
import { AppPageSectionHeading } from '../../AppPage';
import { Button } from '../../../shared/Button';

import { selectUser } from '../../../../redux/user';
import { Item, ItemType } from '../../../../utils/ItemService';
import { useListSort } from '../../../../hooks/useListSort';
import { usePagination } from '../../../../hooks/usePagination';
import styles from './ListSection.module.scss';
import { useCreateModal } from '../../../../hooks/create/useCreateModal';

interface Props {
	items: any[];
	type: keyof ItemType;
	pagination?: boolean;
	limit?: number;
	title: string;
	addType: 'addChild' | 'new';
	item?: Item;
}

const ListSection = ({
	items,
	type,
	pagination,
	limit,
	title,
	addType,
	item
}: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const { handleSort, filteredItems, currentFilter, sortDesc } = useListSort(
		items
	);
	const { toggleCreateModal } = useCreateModal(item || null);

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
			<React.Fragment>
				<AppPageSectionHeading title={title} />
				<div className={styles.container}>
					<span className={styles.empty_list}>
						<NoItemsMessage />
					</span>
				</div>
				<div className={styles.add_container}>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal(addType, {
								createModalPage: type
							})}>
						<ListAddIcon />
					</Button>
				</div>
			</React.Fragment>
		);
	}

	let listItems = pagination ? page : filteredItems;
	return (
		<React.Fragment>
			<AppPageSectionHeading title={title}>
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
			</AppPageSectionHeading>

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
						return (
							<ListItem item={item} userId={userId} key={as} />
						);
					})}
				</div>
				<div className={styles.add_container}>
					<Button
						btnStyle='link_gray'
						onClick={() =>
							toggleCreateModal(addType, {
								createModalPage: type
							})}>
						<ListAddIcon />
					</Button>
				</div>
			</div>
		</React.Fragment>
	);
};

export { ListSection };
