import React from 'react';
import Link from 'next/link';
import { Item, ItemService } from '../../../utils/ItemService';
import { TagService } from '../../../utils/TagService';

import { TypeIcon } from '../shared/TypeIcon';

import styles from './SearchResult.module.scss';
import { PinnedIcon } from '../shared/PinnedSection/PinnedIcon';
import { DateTimeService } from '../../../utils/DateTimeService';

interface Props {
	result: Item;
	userId: string;
}

const SearchResult = ({ result, userId }: Props): JSX.Element => {
	const item = result;
	const itemService = new ItemService();
	console.log(item);

	let parsedDescription;
	if (item.type === 'note') {
		parsedDescription = itemService.getDescriptionHtml(item.description);
	} else {
		parsedDescription = item.description;
	}

	return (
		<Link
			href={`/app/[userId]/${item.pathname.href}`}
			as={`/app/${userId}/${item.pathname.as}`}>
			<div className={styles.container}>
				<div className={styles.meta}>
					<div className={styles.title}>
						<TypeIcon type={item.type} />
						{item.title.length > 40 ? (
							item.title.substring(0, 40) + '...'
						) : (
							item.title
						)}
					</div>
					<div className={styles.stats}>
						<div>
							{item.tags ? TagService.addSpaces(item.tags) : null}
						</div>
						<div>
							{DateTimeService.formatDate(item.meta.date)} -{' '}
							{item.meta.hours} hr
						</div>
					</div>
					<div className={styles.description}>
						{parsedDescription ? (
							<div>
								{parsedDescription > 40 ? (
									parsedDescription.substring(0, 40) + '...'
								) : (
									parsedDescription
								)}
							</div>
						) : null}
					</div>
				</div>
				<div className={styles.pinned}>
					<PinnedIcon pinned={item.pinned} />
				</div>
			</div>
		</Link>
	);
};

export { SearchResult };
