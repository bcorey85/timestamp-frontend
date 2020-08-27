import React from 'react';
import Link from 'next/link';

import { TypeIcon, IconType } from '../TypeIcon';

import styles from './ListItem.module.scss';

interface Props {
	type: IconType;
	title: string;
	date: string;
	time: string;
	href: string;
	as: string;
}

const ListItem = ({
	type,
	title,
	date,
	time,
	href,
	as
}: Props): JSX.Element => {
	return (
		<Link href={href} as={as}>
			<div className={styles.container}>
				<div className={styles.title}>
					<TypeIcon type={type} />
					{title}
				</div>
				<div className={styles.date}>{date}</div>
				<div className={styles.time}>{time !== null ? time : null}</div>
			</div>
		</Link>
	);
};

export { ListItem };
