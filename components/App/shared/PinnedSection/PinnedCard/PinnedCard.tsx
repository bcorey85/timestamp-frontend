import React from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import parser from 'react-html-parser';

import { TypeIcon } from '../../TypeIcon';
import { Item, ItemService, ItemType } from '../../../../../utils/ItemService';
import { PinnedIcon } from '..//PinnedIcon';
import { PinnedCardStats } from './PinnedCardStats';
import { PinnedCardDate } from './PinnedCardDate';

import styles from './PinnedCard.module.scss';

import { selectUser } from '../../../../../redux/user';

interface Props {
	item: Item;
}

const PinnedCard = ({ item }: Props): JSX.Element => {
	const { userId } = useSelector(selectUser);
	const itemService = new ItemService();
	const description = itemService.getDescriptionHtml(item.description);

	if (!item.pathname.as || !item.pathname.href) {
		return (
			<article className={styles.card_noclick}>
				<div className={styles.pinned}>
					<PinnedIcon pinned={true} />
				</div>
				<div className={styles.title}>
					<div className={styles.title_container}>
						<TypeIcon type={item.type} />
						{item.title}
					</div>
				</div>

				<div className={styles.time}>
					<PinnedCardDate meta={item.meta} />
				</div>
				<div className={styles.body}>{description}</div>
				<PinnedCardStats
					type={item.type}
					tags={item.tags}
					notes={item.notes}
					tasks={item.tasks}
					hours={item.meta.hours}
				/>
			</article>
		);
	}

	return (
		<Link
			href={`/app/[userId]/${item.pathname.href}`}
			as={`/app/${userId}/${item.pathname.as}`}>
			<article className={styles.card}>
				<div className={styles.pinned}>
					<PinnedIcon pinned={true} />
				</div>
				<div className={styles.title}>
					<div className={styles.title_container}>
						<TypeIcon type={item.type} />
						{item.title}
					</div>
				</div>

				<div className={styles.time}>
					<PinnedCardDate meta={item.meta} />
				</div>
				<div className={styles.body}>{description}</div>
				<PinnedCardStats
					type={item.type}
					tags={item.tags}
					notes={item.notes}
					tasks={item.tasks}
					hours={item.meta.hours}
				/>
			</article>
		</Link>
	);
};

export { PinnedCard };
