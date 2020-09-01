import React from 'react';
import Link from 'next/link';

import { TypeIcon } from '../TypeIcon';
import { ItemType } from '../../../../utils/ItemService';
import { PinnedIcon } from './PinnedIcon';

import styles from './PinnedCard.module.scss';

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
			<div>{time ? time : hours}</div>
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
			<React.Fragment>
				<div className={styles.stats}>
					<div>Tasks:</div>
					<div>{tasks}</div>
				</div>
				<div className={styles.stats}>
					<div>Notes:</div>
					<div>{notes}</div>
				</div>
			</React.Fragment>
		);
	}

	if (type === 'task') {
		return (
			<React.Fragment>
				<div className={styles.stats}>
					<div>Notes:</div>
					<div>{notes}</div>
				</div>
				<div className={styles.stats}>
					<div>Tags:</div>
					<div>
						{tags.length > 0 ? tags.substring(0, 20) : 'None'}
					</div>
				</div>
			</React.Fragment>
		);
	}

	return (
		<React.Fragment>
			<div className={styles.stats}>
				<div>Hours:</div>
				<div>{hours}</div>
			</div>
			<div className={styles.stats}>
				<div>Tags:</div>
				<div>{tags.length > 0 ? tags.substring(0, 20) : 'None'}</div>
			</div>
		</React.Fragment>
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
