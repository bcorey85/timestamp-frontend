import React from 'react';
import Link from 'next/link';
import { Item, ItemService } from '../../../utils/ItemService';
import { TagService } from '../../../utils/TagService';

import { TypeIcon } from '../shared/TypeIcon';

import styles from './SearchResult.module.scss';
import { PinnedIcon } from '../shared/PinnedSection/PinnedIcon';

interface Props {
	result: Item;
	userId: string;
}

const SearchResult = ({ result, userId }: Props): JSX.Element => {
	const item = new ItemService(result).getItem();

	return (
		<Link
			href={`/app/[userId]/${item.href}`}
			as={`/app/${userId}/${item.as}`}>
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
							{item.tags ? (
								TagService.addSpaces(item.tags)
							) : (
								'none'
							)}
						</div>
						<div>
							{item.date} - {item.hours} hr
						</div>

						{item.description ? (
							<div>
								{item.description.length > 40 ? (
									item.description.substring(0, 40) + '...'
								) : (
									item.description
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
