import React from 'react';
import { ItemType } from '../../../../../utils/ItemService';
import { MathService } from '../../../../../utils/MathService';
import { PinnedCardTags } from './PinnedCardTags';

import styles from './PinnedCardStats.module.scss';

interface Props {
	type: keyof ItemType;
	tags: string;
	notes: number;
	tasks: number;
	hours: string;
}

const PinnedCardStats = ({ type, tags, notes, tasks, hours }: Props) => {
	if (type === 'project') {
		return (
			<div className={styles.stats}>
				<div className={styles.stat_row}>
					<div>Tasks:</div>
					<div>{tasks}</div>
				</div>
				<div className={styles.stat_row}>
					<div>Notes:</div>
					<div>{notes}</div>
				</div>
			</div>
		);
	}

	if (type === 'task') {
		return (
			<div className={styles.stats}>
				<div className={styles.stat_row}>
					<div>Notes:</div>
					<div>{notes}</div>
				</div>
				<div className={styles.stat_row}>
					<div>Tags:</div>
					<PinnedCardTags tags={tags} />
				</div>
			</div>
		);
	}

	return (
		<div className={styles.stats}>
			<div className={styles.stat_row}>
				<div>Hours:</div>
				<div>{MathService.round(hours, 1)}</div>
			</div>
			<div className={styles.stat_row}>
				<div>Tags:</div>
				<PinnedCardTags tags={tags} />
			</div>
		</div>
	);
};

export { PinnedCardStats };
