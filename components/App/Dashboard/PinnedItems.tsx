import React from 'react';

import { PinnedCard } from '../shared/PinnedSection/PinnedCard/PinnedCard';
import { NoItemsMessage } from '../shared/NoItemsMessage';

import { Item } from '../../../utils/ItemService';

import styles from './PinnedItems.module.scss';

interface Props {
	items: Item[];
	currentPage: string;
}

const PinnedItems = ({ items, currentPage }: Props): JSX.Element => {
	return (
		<React.Fragment>
			{items.length > 0 ? (
				items.map(item => {
					const { as } = item.pathname;
					return <PinnedCard item={item} key={as} />;
				})
			) : (
				<div className={styles.noitems_message}>
					<NoItemsMessage
						type={currentPage === 'all' ? 'item' : currentPage}
					/>
				</div>
			)}
		</React.Fragment>
	);
};

export { PinnedItems };
