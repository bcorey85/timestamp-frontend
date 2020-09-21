import React from 'react';
import Link from 'next/link';
import { Item, ItemService } from '../../../utils/ItemService';

import { TypeIcon } from '../shared/TypeIcon';

import styles from './SearchResult.module.scss';

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
				<div>
					<TypeIcon type={item.type} />
					{item.title}
				</div>
				{item.description ? <div>{item.description}</div> : null}
				<div>Hours: {item.hours}</div>
				<div>Tags: {item.tags ? item.tags : 'none'}</div>

				{item.pinned}
			</div>
		</Link>
	);
};

export { SearchResult };
