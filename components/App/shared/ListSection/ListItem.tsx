import React from 'react';
import Link from 'next/link';

import { TypeIcon } from '../../shared/TypeIcon';
import { PinnedIcon } from '../PinnedSection/PinnedIcon';

import { ItemType } from '../../../../utils/ItemService';
import styles from './ListItem.module.scss';

interface Props {
	type: keyof ItemType;
	title: string;
	date: string;
	hours: string;
	href: string;
	startTime: string;
	endTime: string;
	as: string;
	pinned: boolean;
	tasks: number;
	notes: number;
}

const ListItem = ({
	type,
	title,
	date,
	hours,
	href,
	startTime,
	endTime,
	as,
	pinned,
	tasks,
	notes
}: Props): JSX.Element => {
	if (type === 'note') {
		return (
			<Link href={href} as={as}>
				<article className={styles.container}>
					<div className={styles.date}>{date}</div>
					<div className={styles.title}>
						<TypeIcon type={type} />
						{title}
					</div>

					<div className={styles.time}>{startTime}</div>
					<div className={styles.time}>{endTime}</div>
					<div className={styles.time}>{hours}</div>

					<div className={styles.pinned}>
						{pinned ? <PinnedIcon pinned={true} /> : null}
					</div>
				</article>
			</Link>
		);
	}

	if (type === 'task') {
		return (
			<Link href={href} as={as}>
				<article className={styles.container}>
					<div className={styles.date}>{date}</div>
					<div className={styles.title}>
						<TypeIcon type={type} />
						{title}
					</div>

					<div className={styles.time}>{null}</div>
					<div className={styles.time}>{notes}</div>
					<div className={styles.time}>{hours}</div>

					<div className={styles.pinned}>
						{pinned ? <PinnedIcon pinned={true} /> : null}
					</div>
				</article>
			</Link>
		);
	}

	if (type === 'project') {
		return (
			<Link href={href} as={as}>
				<article className={styles.container}>
					<div className={styles.date}>{date}</div>
					<div className={styles.title}>
						<TypeIcon type={type} />
						{title}
					</div>

					<div className={styles.time}>{tasks}</div>
					<div className={styles.number}>{notes}</div>
					<div className={styles.number}>{hours}</div>

					<div className={styles.pinned}>
						{pinned ? <PinnedIcon pinned={true} /> : null}
					</div>
				</article>
			</Link>
		);
	}
};

export { ListItem };
