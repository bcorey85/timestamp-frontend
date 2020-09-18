import React from 'react';
import Link from 'next/link';

import { TypeIcon } from '../TypeIcon';
import { ItemType } from '../../../../utils/ItemService';
import { PinnedIcon } from './PinnedIcon';

import styles from './PinnedCard.module.scss';
import { TagService } from '../../../../utils/TagService';

interface Props {
	href: string;
	as: string;
	type: keyof ItemType;
	title: string;
	hours?: string;
	date?: string;
	time?: string;
	description: string;
	notes?: number;
	tasks?: number;
	tags?: string;
}

const CardDate = ({
	date,
	time,
	hours
}: {
	date: string;
	time: string;
	hours: string;
}) => {
	return (
		<React.Fragment>
			<div>{date}</div>
			<div>{time ? time : `${hours} hr`}</div>
		</React.Fragment>
	);
};

interface CardStatsProps {
	type: keyof ItemType;
	tags: string;
	notes: number;
	tasks: number;
	hours: string;
}

const CardStats = ({ type, tags, notes, tasks, hours }: CardStatsProps) => {
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
					<div>
						{tags && tags.length > 0 ? (
							tags.substring(0, 20)
						) : (
							'None'
						)}
					</div>
				</div>
			</div>
		);
	}

	return (
		<div className={styles.stats}>
			<div className={styles.stat_row}>
				<div>Hours:</div>
				<div>{hours}</div>
			</div>
			<div className={styles.stat_row}>
				<div>Tags:</div>
				<div>
					{tags && tags.length > 0 ? tags.substring(0, 20) : 'None'}
				</div>
			</div>
		</div>
	);
};

const PinnedCard = ({
	href,
	as,
	type,
	title,
	hours,
	date,
	notes,
	tasks,
	time,
	description,
	tags
}: Props): JSX.Element => {
	return (
		<Link href={href} as={as}>
			<article className={styles.card}>
				<div className={styles.pinned}>
					<PinnedIcon pinned={true} />
				</div>
				<div className={styles.title}>
					<div className={styles.title_container}>
						<TypeIcon type={type} />
						{title}
					</div>
				</div>

				<div className={styles.time}>
					<CardDate date={date} time={time} hours={hours} />
				</div>
				<div className={styles.body}>{description}</div>
				<CardStats
					type={type}
					tags={tags}
					notes={notes}
					tasks={tasks}
					hours={hours}
				/>
			</article>
		</Link>
	);
};

export { PinnedCard };
