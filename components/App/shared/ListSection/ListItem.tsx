import React from 'react';
import Link from 'next/link';

import { PinnedIcon } from '../PinnedSection/PinnedIcon';

import { ItemType } from '../../../../utils/ItemService';
import { TypeIcon } from '../TypeIcon';
import styles from './ListItem.module.scss';

interface Props {
	type: keyof ItemType;
	title: string;
	date: string;
	time: string;
	hours: string;
	href: string;
	as: string;
	pinned: boolean;
}

const ListItem = ({
	type,
	title,
	date,
	time,
	hours,
	href,
	as,
	pinned
}: Props): JSX.Element => {
	return (
		<Link href={href} as={as}>
			<article className={styles.container}>
				<div className={styles.title}>
					<TypeIcon type={type} />
					{title}
				</div>
				<div className={styles.date}>{date}</div>
				<div className={styles.time}>{hours}</div>
				<div className={styles.time}>{time}</div>
				<div className={styles.pinned}>
					{pinned ? <PinnedIcon pinned={true} /> : null}
				</div>
			</article>
		</Link>
	);
};

export { ListItem };
