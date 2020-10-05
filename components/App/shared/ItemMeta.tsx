import React from 'react';

import { CompleteBadge } from './CompletedBadge';
import { AppPageMeta } from '../AppPage';

import { Item } from '../../../utils/ItemService';
import { DateTimeService } from '../../../utils/DateTimeService';
import { TagService } from '../../../utils/TagService';
import styles from './ItemMeta.module.scss';

interface Props {
	item?: Item;
}

const ItemMeta = ({ item }: Props): JSX.Element => {
	const itemIsComplete = item.meta.completedOn !== null;
	return (
		<AppPageMeta>
			<p className={styles.date}>
				{DateTimeService.formatDate(item.meta.date)}
				{item.tags ? ' - ' + TagService.addSpaces(item.tags) : null}
			</p>

			<p>{item.description}</p>
			{itemIsComplete ? (
				<CompleteBadge date={item.meta.completedOn} />
			) : null}
			<p className={styles.tags}> </p>
		</AppPageMeta>
	);
};

export { ItemMeta };
